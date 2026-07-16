import os
import sys
import re
import csv
import json
import pdfplumber

def clean_course_name(name_str):
    """
    清洗课程名字：
    1. 去除 leading/trailing 的修饰符号如 ▲, ★, ●, ■, ◆, * 等
    2. 分离中英文，只保留中文课程名（保留必要的英文缩写如 Python, Java, C++, Android, GIS 等）
    """
    if not name_str:
        return ""
    
    # 去除开头的特殊修饰符号和空格
    name_str = re.sub(r'^[▲★●■◆\-\*\s\+]+', '', name_str).strip()
    
    # 按换行符分割，通常第一行是中文名称，后续是英文翻译
    lines = [line.strip() for line in name_str.split('\n') if line.strip()]
    if not lines:
        return ""
    
    first_line = lines[0]
    
    # 允许包含在中文课程名称中的常用英文词/术语（避免被误切除）
    allowed_words = {
        "web", "java", "python", "ui", "steam", "ai", "gis", "uav", "linux", 
        "app", "android", "k-12", "hci", "c++", "pe", "p.e.", "a1", "a2", "a3", 
        "b", "c", "i-iv", "i", "ii", "iii", "iv", "steam", "gis"
    }
    
    # 正则匹配：中文/数字/括号 后面跟着一个英文单词（通常是英文翻译的开头）
    # 例如： "信息科技学科教学论 InstructionalTheoryfor" -> 切除后面的英文
    match = re.search(r'([\u4e00-\u9fa50-9\)\）])\s*([A-Za-z\+\-]+)', first_line)
    if match:
        eng_word = match.group(2)
        if eng_word.lower() not in allowed_words:
            # 说明从这里开始是英文翻译，进行截断
            idx = match.start(2)
            first_line = first_line[:idx].strip()
            
    # 二次清理开头可能残留的符号
    first_line = re.sub(r'^[▲★●■◆\-\*\s\+]+', '', first_line)
    return first_line.strip()

def clean_credits(credit_str):
    """
    清洗学分：如 '3*' -> 3.0, '2.5' -> 2.5
    """
    if not credit_str:
        return 0.0
    # 移移除数字和小数点之外的字符（如 * 等）
    clean_str = re.sub(r'[^\d\.]', '', str(credit_str))
    try:
        return float(clean_str) if '.' in clean_str else int(clean_str)
    except ValueError:
        return 0.0

def clean_term(term_str):
    """
    清洗建议修读学期：去除多余空格和换行
    """
    if not term_str:
        return ""
    return str(term_str).strip().replace('\n', '/')

def get_column_mapping(table):
    """
    动态分析表头，确定课程代码、名称、学分、学期的列索引位置
    """
    # 寻找数据行开始前的表头行
    header_rows = []
    first_data_row_idx = len(table)
    
    for r_idx, row in enumerate(table):
        if not row:
            continue
        code = str(row[0] or '').strip().replace('\n', '')
        # 如果第一列匹配典型的 5 位及以上字母数字组合（即课程代码），说明表头结束，数据开始
        if re.match(r"^[0-9a-zA-Z\-]{5,}$", code):
            first_data_row_idx = r_idx
            break
        header_rows.append(row)
        
    if not header_rows:
        header_rows = [table[0]]
        first_data_row_idx = 1
        
    # 合并多行表头文本（应对跨行表头）
    num_cols = len(table[0])
    headers = [""] * num_cols
    for row in header_rows:
        for c_idx in range(min(num_cols, len(row))):
            val = row[c_idx]
            if val:
                val_str = str(val).strip().replace('\n', '')
                if headers[c_idx]:
                    headers[c_idx] += " " + val_str
                else:
                    headers[c_idx] = val_str
                    
    # 处理被合并的表头（向右传播）
    for c_idx in range(1, num_cols):
        if not headers[c_idx] or headers[c_idx].strip() == "":
            headers[c_idx] = headers[c_idx-1]
                
    # 寻找对应的列索引
    code_idx = 0
    name_indices = []
    credit_idx = -1
    term_idx = -1
    
    for c_idx, h in enumerate(headers):
        h_clean = h.replace(" ", "")
        if "代码" in h_clean:
            code_idx = c_idx
        elif "名称" in h_clean:
            name_indices.append(c_idx)
        elif "学分" in h_clean:
            if credit_idx == -1 and "比例" not in h_clean and "实践" not in h_clean:
                credit_idx = c_idx
        elif any(k in h_clean for k in ["修读", "学期"]):
            term_idx = c_idx
            
    # 兜底默认值
    if not name_indices:
        name_indices = [1]
    if credit_idx == -1:
        credit_idx = 2
    if term_idx == -1:
        term_idx = 5
        
    return code_idx, name_indices, credit_idx, term_idx, first_data_row_idx

def extract_courses_from_pdf(pdf_path):
    print(f"\n[1/3] 正在打开并解析 PDF: {os.path.basename(pdf_path)} ...")
    
    all_courses = []
    current_category = "未知分类"
    
    with pdfplumber.open(pdf_path) as pdf:
        total_pages = len(pdf.pages)
        for page_num in range(total_pages):
            page = pdf.pages[page_num]
            tables = page.find_tables()
            if not tables:
                continue
                
            for t_idx, table_obj in enumerate(tables):
                bbox = table_obj.bbox
                top = bbox[1]
                
                # 提取表格上方的最后一行文字，用来判断分类性质（如：专业核心课程）
                cropped = page.within_bbox((0, 0, page.width, top))
                text_above = cropped.extract_text()
                lines_above = [l.strip() for l in text_above.split("\n") if l.strip()] if text_above else []
                title_above = lines_above[-1] if lines_above else ""
                
                # 根据上方标题更新当前课程性质类别
                if title_above:
                    if "通识必修" in title_above:
                        current_category = "通识必修"
                    elif "通识选修" in title_above:
                        current_category = "通识选修"
                    elif "专业基础" in title_above:
                        current_category = "专业基础"
                    elif "专业核心" in title_above:
                        current_category = "专业核心"
                    elif "限选" in title_above:
                        current_category = "专业限选"
                    elif "教师教育" in title_above or "教育选修" in title_above:
                        current_category = "教育选修"
                    elif "主修专业选修" in title_above or "主修方向" in title_above or "主修选修" in title_above:
                        current_category = "主修专业选修"
                    elif "实践" in title_above:
                        current_category = "专业实践"
                    elif "II类" in title_above or "Ⅱ类" in title_above:
                        current_category = "Ⅱ类学分"
                
                table_data = table_obj.extract()
                if len(table_data) < 2:
                    continue
                
                # 动态获取当前表格的列映射关系
                code_idx, name_indices, credit_idx, term_idx, first_data_idx = get_column_mapping(table_data)
                
                # 解决名称列多列合并时的实际名称列判断
                actual_name_idx = name_indices[0]
                if len(name_indices) > 1:
                    # 统计哪一列的空值（None 或空字串）更多，空值多的是“分组大类”列，空值少的是“课程名称”列
                    none_counts = {idx: 0 for idx in name_indices}
                    for r in table_data[first_data_idx:]:
                        if len(r) > max(name_indices):
                            for idx in name_indices:
                                if r[idx] is None or str(r[idx]).strip() == "":
                                    none_counts[idx] += 1
                    actual_name_idx = min(name_indices, key=lambda idx: none_counts[idx])
                
                # 循环解析数据行
                for r_idx in range(first_data_idx, len(table_data)):
                    row = table_data[r_idx]
                    if not row or len(row) <= max(code_idx, actual_name_idx, credit_idx, term_idx):
                        continue
                        
                    code = str(row[code_idx] or '').strip().replace('\n', '')
                    # 必须符合课程代码的基本特征（至少5位字符）
                    if not re.match(r"^[0-9a-zA-Z\-]{5,}$", code):
                        continue
                        
                    raw_name = row[actual_name_idx]
                    raw_credits = row[credit_idx]
                    raw_term = row[term_idx]
                    
                    # 过滤掉全为空的行
                    if not raw_name and not raw_credits and not raw_term:
                        continue
                        
                    name = clean_course_name(raw_name)
                    credits = clean_credits(raw_credits)
                    term = clean_term(raw_term)
                    
                    all_courses.append({
                        "code": code,
                        "name": name,
                        "credits": credits,
                        "term": term,
                        "category": current_category
                    })
                    
    return all_courses

def main():
    print("="*60)
    print("🎓 培养方案课程信息自动分离提取工具")
    print("="*60)
    
    # 搜寻 PDF 文件路径
    pdf_path = None
    if len(sys.argv) > 1 and not os.path.isdir(sys.argv[1]):
        pdf_path = sys.argv[1]
    else:
        # 如果传入了目录，则在该目录下搜索；否则默认搜索当前目录和 temp 目录
        if len(sys.argv) > 1 and os.path.isdir(sys.argv[1]):
            search_dirs = [sys.argv[1]]
        else:
            search_dirs = [".", "./temp", "../temp"]
            
        pdf_files = []
        for d in search_dirs:
            if os.path.exists(d):
                for f in os.listdir(d):
                    if f.lower().endswith(".pdf"):
                        pdf_files.append(os.path.join(d, f))
                        
        if not pdf_files:
            print("❌ 未在当前目录或 temp 目录找到任何 PDF 培养方案。")
            print("使用方法: python parse_curriculum.py <培养方案PDF路径>")
            return
            
        print("发现以下培养方案 PDF 文件:")
        for idx, f in enumerate(pdf_files):
            print(f"  [{idx + 1}] {os.path.basename(f)}")
            
        try:
            choice = input("\n请选择要解析的 PDF 文件编号 (回车默认选第1个): ").strip()
            if not choice:
                pdf_path = pdf_files[0]
            else:
                choice_idx = int(choice) - 1
                if 0 <= choice_idx < len(pdf_files):
                    pdf_path = pdf_files[choice_idx]
                else:
                    print("❌ 输入编号无效，默认选择第 1 个文件。")
                    pdf_path = pdf_files[0]
        except (ValueError, IndexError):
            print("❌ 输入无效，默认选择第 1 个文件。")
            pdf_path = pdf_files[0]

    if not os.path.exists(pdf_path):
        print(f"❌ 错误: 文件不存在 '{pdf_path}'")
        return
        
    # 执行提取
    courses = extract_courses_from_pdf(pdf_path)
    
    if not courses:
        print("❌ 未能在 PDF 中提取到有效的课程表格，请确认该 PDF 格式是否标准。")
        return
        
    print(f"\n[2/3] 成功提取到 {len(courses)} 门课程！正在清理和写入文件...")
    
    # 生成输出文件名（基于原 PDF 文件名）
    base_name = os.path.splitext(os.path.basename(pdf_path))[0]
    csv_output = f"{base_name}_提取课程.csv"
    json_output = f"{base_name}_提取课程.json"
    
    # 写入 CSV 文件 (UTF-8 with BOM 方便 Excel 双击直接打开不乱码)
    with open(csv_output, mode='w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(["课程代码", "课程名称", "学分", "建议修读学期", "课程性质"])
        for c in courses:
            writer.writerow([c["code"], c["name"], c["credits"], c["term"], c["category"]])
            
    # 写入 JSON 文件
    with open(json_output, mode='w', encoding='utf-8') as f:
        json.dump(courses, f, ensure_ascii=False, indent=2)
        
    print("\n" + "="*60)
    print("🎉 解析完成！")
    print(f"📂 CSV 表格文件已生成: {csv_output}  (可用 Excel 直接双击打开)")
    print(f"📂 JSON 结构数据已生成: {json_output}   (适合前端导入使用)")
    print("="*60)

if __name__ == "__main__":
    main()
