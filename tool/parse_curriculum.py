import os
import sys
import re
import csv
import json
import pdfplumber

def clean_course_name(name_str):
    """
    清洗课程名字：
    1. 去除 leading/trailing 的修饰符号如 ▲, ●, ■, * 等，但保留 ◆ 和 ★
    2. 分离中英文，只保留中文课程名（保留必要的英文缩写如 Python, Java, C++, Android, GIS 等）
    """
    if not name_str:
        return ""
    
    # 去除开头的特殊修饰符号和空格，但保留 ★ 和 ◆
    name_str = re.sub(r'^[▲●■\-\*\s\+]+', '', name_str).strip()
    
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
    match = re.search(r'([\u4e00-\u9fa50-9\)\）])\s*([A-Za-z0-9\+\-]+)', first_line)
    if match:
        eng_word = match.group(2)
        if eng_word.lower() not in allowed_words:
            # 说明从这里开始是英文翻译，进行截断
            idx = match.start(2)
            first_line = first_line[:idx].strip()
            
    # 二次清理开头可能残留的符号，但保留 ★ 和 ◆
    first_line = re.sub(r'^[▲●■\-\*\s\+]+', '', first_line)
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
    清洗建议修读学期：去除多余空格和换行，并进行规范化匹配
    """
    if not term_str:
        return ""
    term = str(term_str).strip().replace('\n', '/').replace(' ', '')
    
    # 1. 规范化: 形势与政策 (一二三年级/持续开设 -> 一二三年级)
    if "一二三年级" in term:
        return "一二三年级"
        
    # 2. 规范化: 高阶英语 (二三年级/滚动开设 或 二三年级滚/动开设 -> 二三年级)
    if "二三年级" in term:
        return "二三年级"
        
    # 3. 规范化: 毕业设计/论文 (四春/或秋 或 四春或秋 -> 四春/秋)
    if "四春" in term and ("秋" in term or "或" in term):
        return "四春/秋"
        
    # 4. 规范化: 三秋/三春 (大三上/大三下)
    if "三秋/三春" in term or "三秋-三春" in term:
        return "三秋/三春"
        
    # 5. 规范化: 二秋-三春 (大二至大三)
    if "二秋-三春" in term or "二秋/三春" in term:
        return "二三年级"
        
    # 6. 规范化: 春、秋 (任意)
    if term in ["春、秋", "春/秋", "春秋"]:
        return "春秋滚动"
        
    return term

def determine_group(raw_group_text, category, filename=""):
    """
    根据表格分类、当前行分组文本以及文件名，推导出标准的 group 字段
    """
    if category not in ["主修专业选修", "通识选修", "教育选修", "Ⅱ类学分"]:
        return ""
        
    # 分类本身即为分组的情况
    if category == "通识选修":
        return "通识选修"
    if category == "Ⅱ类学分":
        return "Ⅱ类"
    if category == "教育选修":
        return "教师教育类"
        
    if not raw_group_text:
        return ""
        
    text = str(raw_group_text).replace("\n", "").replace(" ", "").strip()
    
    # 1. 地信专业 (1405) 专属分组
    if "地理信息" in filename or "1405" in filename or "GIS" in filename:
        if "测绘" in text:
            return "测绘"
        if "地学" in text:
            return "地学"
        if "公共" in text:
            return "公共基础"
        if "人工智能" in text:
            return "人工智能"
        if "GIS" in text or "地理信息系统" in text:
            return "GIS"
        if "遥感" in text:
            return "遥感"
            
    # 2. 软件工程 (1403) 专属分组
    if "软件工程" in filename or "1403" in filename:
        if "人工智能" in text:
            return "人工智能技术与应用"
        if "软件开发" in text or "项目管理" in text or "开发与" in text:
            return "软件开发与项目管理"
        if "智能媒体" in text or "数字技术" in text or "媒体与数字" in text:
            return "智能媒体与数字技术"
            
    # 3. 电子信息工程 (1404) 专属分组
    if "电子信息" in filename or "1404" in filename:
        if "集成电路" in text:
            return "集成电路工程"
        if "通信" in text:
            return "通信工程"
            
    # 4. 计算机科学与技术 (1401 / 1402) 专属分组
    if "人工智能" in text:
        return "人工智能+模块"
    if "高级软件" in text:
        return "高级软件技术模块"
    if "数字媒体" in text:
        return "数字媒体技术模块"
    if "信息安全" in text:
        return "信息安全模块"
    if "金融" in text:
        return "金融信息服务模块"
        
    # 5. 通用选修分组
    if "任选" in text:
        return "专业任选课"
        
    return ""

def determine_notes(group_name, category, filename=""):
    """
    根据分组名字和分类，推导出标准的 notes 备注
    """
    # 针对地理信息科学 (1405) 限选/选修的模块最低学分要求
    if ("地理信息科学" in filename or "1405" in filename) and category == "主修专业选修":
        mapping = {
            "公共基础": "最低学分 8 学分",
            "GIS": "最低学分 6 学分",
            "遥感": "最低学分 8 学分",
            "测绘": "最低学分 5 学分",
            "地学": "最低学分 8 学分",
            "人工智能": "最低学分 10 学分"
        }
        return mapping.get(group_name, "")
    return ""

def get_predefined_ge_electives(is_shifan, filename):
    """
    获取标准的通识选修占位课程
    """
    is_ece_or_gis = "1404" in filename or "1405" in filename or "电子信息" in filename or "地理信息" in filename
    courses = [
        {
            "code": "",
            "name": "通识选修：艺术鉴赏与审美体验",
            "credits": 2,
            "cat": "通识选修",
            "term": "春秋滚动",
            "group": "通识选修",
            "required": False,
            "notes": "必修 2 学分"
        },
        {
            "code": "",
            "name": "通识选修：人工智能与现代生活",
            "credits": 2,
            "cat": "通识选修",
            "term": "春秋滚动",
            "group": "通识选修",
            "required": False,
            "notes": "必修 2 学分"
        },
        {
            "code": "",
            "name": "通识选修：“四史教育”专题",
            "credits": 1,
            "cat": "通识选修",
            "term": "春秋滚动",
            "group": "通识选修",
            "required": False,
            "notes": "必修 1 学分" if is_ece_or_gis else "4 选 1，1 学分"
        }
    ]
    if is_shifan:
        courses.append({
            "code": "",
            "name": "通识选修：习近平总书记关于教育的重要论述研究",
            "credits": 2,
            "cat": "通识选修",
            "term": "春秋滚动",
            "group": "通识选修",
            "required": False,
            "notes": "师范生必修 2 学分"
        })
        courses.append({
            "code": "",
            "name": "通识选修：其他通识课程",
            "credits": 3,
            "cat": "通识选修",
            "term": "春秋滚动",
            "group": "通识选修",
            "required": False,
            "notes": "补足通识选修至 10 学分"
        })
    else:
        courses.append({
            "code": "",
            "name": "通识选修：其他通识课程",
            "credits": 5,
            "cat": "通识选修",
            "term": "春秋滚动",
            "group": "通识选修",
            "required": False,
            "notes": "补足通识选修至 10 学分"
        })
    return courses

def get_predefined_class_2_electives():
    """
    获取标准的 II 类学分占位课程
    """
    return [
        {
            "code": "",
            "name": "Ⅱ类学分：劳动教育类",
            "credits": 2,
            "cat": "Ⅱ类学分",
            "term": "",
            "group": "Ⅱ类",
            "required": False,
            "notes": "不少于 2 学分"
        },
        {
            "code": "",
            "name": "Ⅱ类学分：社会实践类",
            "credits": 2,
            "cat": "Ⅱ类学分",
            "term": "",
            "group": "Ⅱ类",
            "required": False,
            "notes": "不高于/计入 2 学分"
        }
    ]

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
    filename = os.path.basename(pdf_path)
    print(f"\n[1/3] 正在打开并解析 PDF: {filename} ...")
    
    all_courses = []
    current_category = "未知分类"
    last_category = "未知分类"
    
    # 状态控制标志，确保占位符课程只注入一次
    has_inserted_ge_electives = False
    has_inserted_class_2_electives = False
    
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
                
                # 提取表格上方的文字，用来判断分类性质（如：专业核心课程）
                cropped = page.within_bbox((0, 0, page.width, top))
                text_above = cropped.extract_text()
                
                # 从下往上搜索所有行，以便精准定位类别标题（有些表格上方有多行说明文字）
                if text_above:
                    for line in reversed(text_above.split("\n")):
                        line_clean = line.strip().replace(" ", "")
                        if not line_clean:
                            continue
                        if "通识必修" in line_clean:
                            current_category = "通识必修"
                            break
                        elif "通识选修" in line_clean:
                            current_category = "通识选修"
                            break
                        elif "专业基础" in line_clean:
                            current_category = "专业基础"
                            break
                        elif "专业核心" in line_clean:
                            current_category = "专业核心"
                            break
                        elif "限选" in line_clean:
                            current_category = "专业限选"
                            break
                        elif "教师教育" in line_clean or "教育选修" in line_clean:
                            current_category = "教育选修"
                            break
                        elif "主修专业选修" in line_clean or "专业选修" in line_clean or "主修方向" in line_clean or "主修选修" in line_clean:
                            current_category = "主修专业选修"
                            break
                        elif "实践" in line_clean:
                            current_category = "专业实践"
                            break
                        elif "II类" in line_clean or "Ⅱ类" in line_clean:
                            current_category = "Ⅱ类学分"
                            break
                
                # 特殊分类拦截，插入标准占位课程即可
                if current_category == "通识选修":
                    if not has_inserted_ge_electives:
                        is_shifan = "师范" in filename
                        ge_courses = get_predefined_ge_electives(is_shifan, filename)
                        all_courses.extend(ge_courses)
                        has_inserted_ge_electives = True
                    continue
                    
                if current_category == "Ⅱ类学分":
                    if not has_inserted_class_2_electives:
                        all_courses.extend(get_predefined_class_2_electives())
                        has_inserted_class_2_electives = True
                    continue
                
                table_data = table_obj.extract()
                if len(table_data) < 2:
                    continue
                
                # 动态获取当前表格的列映射关系
                code_idx, name_indices, credit_idx, term_idx, first_data_idx = get_column_mapping(table_data)
                
                # 解决名称列多列合并时的实际名称列判断
                actual_name_idx = name_indices[0]
                group_idx = -1
                if len(name_indices) > 1:
                    none_counts = {idx: 0 for idx in name_indices}
                    for r in table_data[first_data_idx:]:
                        if len(r) > max(name_indices):
                            for idx in name_indices:
                                if r[idx] is None or str(r[idx]).strip() == "":
                                    none_counts[idx] += 1
                    actual_name_idx = min(name_indices, key=lambda idx: none_counts[idx])
                    group_idx = [idx for idx in name_indices if idx != actual_name_idx][0]
                
                # 检测分类是否改变
                category_changed = (current_category != last_category)
                if category_changed:
                    current_group = ""
                    if current_category == "教育选修":
                        current_group = "教师教育类"
                    last_category = current_category
                
                # 如果是主修专业选修，尝试从表格上方标题提取新的分组
                if current_category == "主修专业选修":
                    new_group = None
                    if text_above:
                        for line in reversed(text_above.split("\n")):
                            g = determine_group(line, "主修专业选修", filename)
                            if g:
                                new_group = g
                                break
                    if new_group:
                        current_group = new_group
                    elif category_changed:
                        current_group = ""
                
                # 循环解析数据行
                for r_idx in range(first_data_idx, len(table_data)):
                    row = table_data[r_idx]
                    if not row or len(row) <= max(code_idx, actual_name_idx, credit_idx, term_idx):
                        continue
                        
                    code = str(row[code_idx] or '').strip().replace('\n', '')
                    raw_name = row[actual_name_idx]
                    raw_credits = row[credit_idx]
                    raw_term = row[term_idx]
                    
                    # 过滤掉全为空的行
                    if not raw_name and not raw_credits and not raw_term:
                        continue
                        
                    name = clean_course_name(raw_name)
                    credits = clean_credits(raw_credits)
                    term = clean_term(raw_term)
                    
                    # 验证当前行是否为有效课程行
                    is_valid_course = False
                    if code and re.match(r"^[0-9a-zA-Z\-]{5,}$", code):
                        is_valid_course = True
                    elif name and credits > 0 and term:
                        # 对于在 PDF 中可能缺失代码的课程（例如大学外语），如果满足名字、学分和学期健全，亦视作有效课程
                        is_valid_course = True
                        code = ""
                        
                    if not is_valid_course:
                        continue
                        
                    # 计算分组 group 字段 (向下填充逻辑)
                    raw_group = ""
                    if group_idx != -1 and len(row) > group_idx and row[group_idx]:
                        raw_group = str(row[group_idx]).strip()
                        
                    if raw_group:
                        parsed_group = determine_group(raw_group, current_category, filename)
                        if parsed_group:
                            current_group = parsed_group
                            
                    # 确定当前的 group 值
                    final_group = current_group if current_category in ["主修专业选修", "通识选修", "教育选修", "Ⅱ类学分"] else ""
                    
                    # 确定是否必修 required
                    required = current_category in ["通识必修", "专业基础", "专业核心", "专业限选", "专业实践"]
                    
                    # 确定备注 notes
                    notes = determine_notes(final_group, current_category, filename)
                    
                    # 以精确的顺序生成字典项
                    all_courses.append({
                        "code": code,
                        "name": name,
                        "credits": credits,
                        "cat": current_category,
                        "term": term,
                        "group": final_group,
                        "required": required,
                        "notes": notes
                    })
                    
    return all_courses

def main():
    print("="*60)
    print("🎓 培养方案课程信息自动分离提取工具")
    print("="*60)
    
    # 搜寻 PDF 文件路径
    pdf_path = None
    if len(sys.argv) > 1:
        provided_path = sys.argv[1]
        if os.path.isdir(provided_path):
            print(f"检测到输入路径为目录: {provided_path}")
            pdf_files = []
            for root_dir, _, files in os.walk(provided_path):
                for f in files:
                    if f.lower().endswith(".pdf"):
                        pdf_files.append(os.path.abspath(os.path.join(root_dir, f)))
            
            if not pdf_files:
                print(f"❌ 错误: 在目录 '{provided_path}' 下未找到任何 PDF 文件。")
                return
                
            print(f"共发现 {len(pdf_files)} 个 PDF 培养方案。正在解析并创建文件夹存放解析结果...")
            
            # 创建保存解析文件的子文件夹（放在 database/2025级 下，如果不存在则放在当前目录下）
            dir_name = os.path.basename(os.path.abspath(provided_path))
            parent_dir = "./database/2025级"
            if not os.path.exists(parent_dir):
                parent_dir = "."
            output_dir = os.path.join(parent_dir, dir_name)
            os.makedirs(output_dir, exist_ok=True)
            print(f"📂 创建输出文件夹: {os.path.abspath(output_dir)}")
            
            for pdf_f in pdf_files:
                filename = os.path.basename(pdf_f)
                courses = extract_courses_from_pdf(pdf_f)
                if not courses:
                    print(f"❌ 警告: 未能在 PDF 中提取到有效的课程表格: {filename}")
                    continue
                
                base_name = os.path.splitext(filename)[0]
                csv_output = os.path.join(output_dir, f"{base_name}_提取课程.csv")
                json_output = os.path.join(output_dir, f"{base_name}_提取课程.json")
                
                # 写入 CSV 文件
                with open(csv_output, mode='w', encoding='utf-8-sig', newline='') as f:
                    writer = csv.writer(f)
                    writer.writerow(["课程代码", "课程名称", "学分", "课程性质", "建议修读学期", "大类/模块", "是否必修", "备注"])
                    for c in courses:
                        writer.writerow([c["code"], c["name"], c["credits"], c["cat"], c["term"], c["group"], c["required"], c["notes"]])
                        
                # 写入 JSON 文件
                with open(json_output, mode='w', encoding='utf-8') as f:
                    json.dump(courses, f, ensure_ascii=False, indent=2)
                    
                print(f"✔ 解析成功并已保存: {filename}")
                
            print("\n" + "="*60)
            print("🎉 所有 PDF 文件解析并保存完成！")
            print(f"📂 目标目录: {os.path.abspath(output_dir)}")
            print("="*60)
            return
        else:
            pdf_path = provided_path
    else:
        # 默认搜索指定的文件夹，或者当前目录及 temp, resource 目录
        search_dirs = [
            ".", 
            "./temp", 
            "./resource",
            "./resource/25级培养方案/14信息科学与技术学院"
        ]
        
        pdf_files = []
        for d in search_dirs:
            if os.path.exists(d):
                # 递归遍历寻找所有的 PDF 文件
                for root_dir, _, files in os.walk(d):
                    for f in files:
                        if f.lower().endswith(".pdf"):
                            pdf_files.append(os.path.join(root_dir, f))
                            
        # 去重
        pdf_files = list(set(os.path.abspath(f) for f in pdf_files))
                        
        if not pdf_files:
            print("❌ 未在指定目录找到任何 PDF 培养方案。")
            print("使用方法: python parse_curriculum.py <培养方案PDF路径/目录>")
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
    
    # 确定输出目录：如果 database/2025级 目录存在，则直接写入，方便系统更新
    output_dir = "./database/2025级"
    if not os.path.exists(output_dir):
        output_dir = "."
        
    base_name = os.path.splitext(os.path.basename(pdf_path))[0]
    csv_output = os.path.join(output_dir, f"{base_name}_提取课程.csv")
    json_output = os.path.join(output_dir, f"{base_name}_提取课程.json")
    
    # 写入 CSV 文件 (UTF-8 with BOM 方便 Excel 双击直接打开不乱码)
    with open(csv_output, mode='w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(["课程代码", "课程名称", "学分", "课程性质", "建议修读学期", "大类/模块", "是否必修", "备注"])
        for c in courses:
            writer.writerow([c["code"], c["name"], c["credits"], c["cat"], c["term"], c["group"], c["required"], c["notes"]])
            
    # 写入 JSON 文件
    with open(json_output, mode='w', encoding='utf-8') as f:
        json.dump(courses, f, ensure_ascii=False, indent=2)
        
    print("\n" + "="*60)
    print("🎉 解析完成！")
    print(f"📂 CSV 表格已保存: {os.path.abspath(csv_output)}  (可用 Excel 直接双击打开)")
    print(f"📂 JSON 结构已保存: {os.path.abspath(json_output)}   (前端导入使用)")
    print("="*60)

if __name__ == "__main__":
    main()
