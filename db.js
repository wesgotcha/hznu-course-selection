const MAJORS_DATABASE = {
  "cs_2025": {
    "id": "cs_2025",
    "name": "计算机科学与技术",
    "grade": "2025级",
    "totalCreditsRequirement": 151,
    "targets": {
      "通识必修": 36,
      "通识选修": 10,
      "专业基础": 18,
      "专业核心": 23,
      "专业限选": 15,
      "主修专业选修": 14.5,
      "专业实践": 30.5,
      "Ⅱ类学分": 4
    },
    "geSubRules": [
      {
        "name": "艺术鉴赏与审美体验",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "人工智能与现代生活",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "“四史教育”专题",
        "target": 1,
        "notes": "通识选修子要求（需≥1学分）"
      }
    ],
    "moduleTargets": {
      "人工智能+模块": 7.5,
      "高级软件技术模块": 7.5,
      "数字媒体技术模块": 7.5,
      "信息安全模块": 7.5,
      "金融信息服务模块": 10
    },
    "courses": [
      {
        "name": "思想道德与法治",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "中国近现代史纲要",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "马克思主义基本原理",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毛泽东思想和中国特色社会主义理论体系概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "习近平新时代中国特色社会主义思想概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "形势与政策",
        "credits": 2,
        "cat": "通识必修",
        "term": "一二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅰ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅱ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅲ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅳ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "军事训练",
        "credits": 2,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国防教育",
        "credits": 2,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国家安全教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（基础拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（进阶拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（高阶课程）",
        "credits": 2,
        "cat": "通识必修",
        "term": "二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生心理健康教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生职业发展与就业指导",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋/三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "通识选修：艺术鉴赏与审美体验",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：人工智能与现代生活",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：“四史教育”专题",
        "credits": 1,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "4 选 1，1 学分"
      },
      {
        "name": "通识选修：其他通识课程",
        "credits": 5,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "补足通识选修至 10 学分"
      },
      {
        "name": "高等数学A1",
        "credits": 5,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "线性代数A3",
        "credits": 3,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "计算机科学导论",
        "credits": 2,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "程序设计基础",
        "credits": 4,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "高等数学A2",
        "credits": 4,
        "cat": "专业基础",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数据结构",
        "credits": 3,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "计算机组成与系统结构",
        "credits": 3.5,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "操作系统",
        "credits": 3.5,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数据库原理",
        "credits": 3.5,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "算法设计与分析",
        "credits": 2,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "计算机网络",
        "credits": 3,
        "cat": "专业核心",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "软件工程",
        "credits": 2,
        "cat": "专业核心",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "人工智能",
        "credits": 2.5,
        "cat": "专业核心",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学物理B",
        "credits": 4,
        "cat": "专业限选",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "概率与数理统计",
        "credits": 3,
        "cat": "专业限选",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "离散数学",
        "credits": 3,
        "cat": "专业限选",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数据科学导论",
        "credits": 2.5,
        "cat": "专业限选",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "软件工程经济",
        "credits": 2.5,
        "cat": "专业限选",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "智能优化计算",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "人工智能+模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "云计算与大数据",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "人工智能+模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "神经网络和深度学习",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "人工智能+模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "大语言模型原理与应用",
        "credits": 1.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "人工智能+模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "Java 程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "高级软件技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "Web 应用开发",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "高级软件技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "移动应用开发（Android）",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "高级软件技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "编译原理",
        "credits": 3.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "高级软件技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "多媒体应用开发",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "数字媒体技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "计算机图形学",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "数字媒体技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字图像处理",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "数字媒体技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "UI 与交互设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春/三秋",
        "group": "数字媒体技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "信息安全竞赛",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "一秋",
        "group": "信息安全模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "应用密码学",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "信息安全模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "安全协议及应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "信息安全模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "网络安全",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "信息安全模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "信息安全工程",
        "credits": 1,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "信息安全模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字金融",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "金融信息服务模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "大数据财务决策",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "金融信息服务模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "金融工程与计算",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "金融信息服务模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "智能证券投资",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "金融信息服务模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "金融数据分析与大模型",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "金融信息服务模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "Python 程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "C++程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字逻辑",
        "credits": 3.5,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "经济学原理",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "Matlab 程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "物联网概论",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字孪生技术与应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "Linux 程序设计",
        "credits": 1.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "高级数据结构",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "人机交互与虚拟现实",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "Web 服务器端开发",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "计算机视觉",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "智能控制与机器人技术",
        "credits": 3.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "大规模数据挖掘",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "智能信息管理与应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "职业规划与素养",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "ACM 编程实践",
        "credits": 2,
        "cat": "专业实践",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数据结构实验",
        "credits": 1,
        "cat": "专业实践",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "AI 时代的专业劳动教育",
        "credits": 2,
        "cat": "专业实践",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "算法设计与分析实验",
        "credits": 1,
        "cat": "专业实践",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "软件工程课程设计",
        "credits": 1,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "网络工程",
        "credits": 1.5,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "科研实务",
        "credits": 2,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "互联网创新创业",
        "credits": 2,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "专业见习",
        "credits": 2,
        "cat": "专业实践",
        "term": "四春/秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "专业实习",
        "credits": 8,
        "cat": "专业实践",
        "term": "四春/秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毕业论文（设计）",
        "credits": 8,
        "cat": "专业实践",
        "term": "四春/秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "Ⅱ类学分：劳动教育类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不少于 2 学分"
      },
      {
        "name": "Ⅱ类学分：社会实践类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不高于/计入 2 学分"
      }
    ],
    "moduleRuleType": "selectOne"
  },
  "se_2025": {
    "id": "se_2025",
    "name": "软件工程",
    "grade": "2025级",
    "totalCreditsRequirement": 151,
    "targets": {
      "通识必修": 36,
      "通识选修": 10,
      "专业基础": 18,
      "专业核心": 26,
      "专业限选": 10,
      "主修专业选修": 17.5,
      "专业实践": 29.5,
      "Ⅱ类学分": 4
    },
    "geSubRules": [
      {
        "name": "艺术鉴赏与审美体验",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "人工智能与现代生活",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "“四史教育”专题",
        "target": 1,
        "notes": "通识选修子要求（需≥1学分）"
      }
    ],
    "moduleTargets": {
      "人工智能技术与应用": 10,
      "软件开发与项目管理": 10,
      "智能媒体与数字技术": 10
    },
    "courses": [
      {
        "name": "思想道德与法治",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "中国近现代史纲要",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "马克思主义基本原理",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毛泽东思想和中国特色社会主义理论体系概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "习近平新时代中国特色社会主义思想概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "形势与政策",
        "credits": 2,
        "cat": "通识必修",
        "term": "一二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅰ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅱ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅲ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅳ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "军事训练",
        "credits": 2,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国防教育",
        "credits": 2,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国家安全教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（基础拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（进阶拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（高阶课程）",
        "credits": 2,
        "cat": "通识必修",
        "term": "二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生心理健康教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生职业发展与就业指导",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋/三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "通识选修：艺术鉴赏与审美体验",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：人工智能与现代生活",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：“四史教育”专题",
        "credits": 1,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "4 选 1，1 学分"
      },
      {
        "name": "通识选修：其他通识课程",
        "credits": 5,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "补足通识选修至 10 学分"
      },
      {
        "name": "高等数学A1",
        "credits": 5,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "线性代数A3",
        "credits": 3,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "计算机科学导论",
        "credits": 2,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "程序设计基础",
        "credits": 4,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "高等数学A2",
        "credits": 4,
        "cat": "专业基础",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数据结构",
        "credits": 4,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "计算机组成原理",
        "credits": 3.5,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "操作系统",
        "credits": 3.5,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "计算机网络",
        "credits": 3,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数据库原理",
        "credits": 3.5,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "算法设计与分析",
        "credits": 3,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "软件工程",
        "credits": 3,
        "cat": "专业核心",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "软件架构分析与设计",
        "credits": 2.5,
        "cat": "专业核心",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学物理B",
        "credits": 4,
        "cat": "专业限选",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "概率与数理统计",
        "credits": 3,
        "cat": "专业限选",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "离散数学",
        "credits": 3,
        "cat": "专业限选",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "人工智能引论",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "人工智能技术与应用",
        "required": false,
        "notes": ""
      },
      {
        "name": "云计算与大数据",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "人工智能技术与应用",
        "required": false,
        "notes": ""
      },
      {
        "name": "深度学习方法与实践",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "人工智能技术与应用",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字孪生技术与应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "人工智能技术与应用",
        "required": false,
        "notes": ""
      },
      {
        "name": "大规模数据挖掘",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "人工智能技术与应用",
        "required": false,
        "notes": ""
      },
      {
        "name": "Java 程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "软件开发与项目管理",
        "required": false,
        "notes": ""
      },
      {
        "name": "Web 程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "软件开发与项目管理",
        "required": false,
        "notes": ""
      },
      {
        "name": "智能信息管理与应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "软件开发与项目管理",
        "required": false,
        "notes": ""
      },
      {
        "name": "移动应用开发（Android）",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "软件开发与项目管理",
        "required": false,
        "notes": ""
      },
      {
        "name": "智能软件测试技术",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "软件开发与项目管理",
        "required": false,
        "notes": ""
      },
      {
        "name": "多媒体应用开发",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "智能媒体与数字技术",
        "required": false,
        "notes": ""
      },
      {
        "name": "三维动画设计与制作",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "智能媒体与数字技术",
        "required": false,
        "notes": ""
      },
      {
        "name": "人机交互与虚拟现实",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "智能媒体与数字技术",
        "required": false,
        "notes": ""
      },
      {
        "name": "UI 与交互设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "智能媒体与数字技术",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字图像处理",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "智能媒体与数字技术",
        "required": false,
        "notes": ""
      },
      {
        "name": "智能媒体导论",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "一秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "区块链技术与应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "前沿人工智能技术与应用",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "医学人工智能原理与应用",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋/三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "网络编程",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "网络安全",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字逻辑",
        "credits": 3.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "高级数据结构",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "C++程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "应用密码学",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "安全协议及应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "计算机图形学",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "Linux 程序设计",
        "credits": 1.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": ".NET 程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "JSP/Servlet 程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "数据库应用技术",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "职业规划与素养",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "网络化软件项目管理",
        "credits": 2,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "前端交互开发与实践",
        "credits": 2,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "网络工程",
        "credits": 1.5,
        "cat": "专业实践",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "ACM 编程实践",
        "credits": 2,
        "cat": "专业实践",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "科研实务",
        "credits": 2,
        "cat": "专业实践",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "AI 时代创新创业思维与实践",
        "credits": 2,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "专业见习",
        "credits": 2,
        "cat": "专业实践",
        "term": "四春/秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "专业实习",
        "credits": 8,
        "cat": "专业实践",
        "term": "四春/秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毕业论文（设计）",
        "credits": 8,
        "cat": "专业实践",
        "term": "四春/秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "Ⅱ类学分：劳动教育类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不少于 2 学分"
      },
      {
        "name": "Ⅱ类学分：社会实践类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不高于/计入 2 学分"
      }
    ],
    "moduleRuleType": "selectOne"
  },
  "cs_edu_2025": {
    "id": "cs_edu_2025",
    "name": "计算机科学与技术（师范）",
    "grade": "2025级",
    "totalCreditsRequirement": 151,
    "targets": {
      "通识必修": 36,
      "通识选修": 10,
      "专业基础": 18,
      "专业核心": 28.5,
      "专业限选": 8.5,
      "主修专业选修": 18,
      "教育选修": 4,
      "专业实践": 24,
      "Ⅱ类学分": 4
    },
    "geSubRules": [
      {
        "name": "艺术鉴赏与审美体验",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "人工智能与现代生活",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "“四史教育”专题",
        "target": 1,
        "notes": "通识选修子要求（需≥1学分）"
      },
      {
        "name": "习近平总书记关于教育的重要论述研究",
        "target": 2,
        "notes": "师范生通识选修必修"
      }
    ],
    "moduleTargets": {
      "人工智能+模块": 7.5,
      "高级软件技术模块": 7.5,
      "数字媒体技术模块": 7.5
    },
    "courses": [
      {
        "name": "思想道德与法治",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "中国近现代史纲要",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "马克思主义基本原理",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毛泽东思想和中国特色社会主义理论体系概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "习近平新时代中国特色社会主义思想概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "形势与政策",
        "credits": 2,
        "cat": "通识必修",
        "term": "一二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅰ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅱ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅲ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅳ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "军事训练",
        "credits": 2,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国防教育",
        "credits": 2,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国家安全教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（基础拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（进阶拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（高阶课程）",
        "credits": 2,
        "cat": "通识必修",
        "term": "二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生心理健康教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生职业发展与就业指导",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋/三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "通识选修：艺术鉴赏与审美体验",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：人工智能与现代生活",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：“四史教育”专题",
        "credits": 1,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 1 学分"
      },
      {
        "name": "通识选修：习近平总书记关于教育的重要论述研究",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "师范生必修 2 学分"
      },
      {
        "name": "通识选修：其他通识课程",
        "credits": 3,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "补足通识选修至 10 学分"
      },
      {
        "name": "高等数学A1",
        "credits": 5,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "线性代数A3",
        "credits": 3,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "计算机科学导论",
        "credits": 2,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "高等数学A2",
        "credits": 4,
        "cat": "专业基础",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "程序设计基础",
        "credits": 4,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数据结构",
        "credits": 3,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "计算机组成与系统结构",
        "credits": 3,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "操作系统",
        "credits": 3.5,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "计算机网络",
        "credits": 3,
        "cat": "专业核心",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数据库原理",
        "credits": 3,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "教师职业道德与教育法规",
        "credits": 1,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "心理学基础",
        "credits": 2,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "教育学基础",
        "credits": 2,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "班主任与班级管理",
        "credits": 2,
        "cat": "专业核心",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "信息科技学科教学论",
        "credits": 2,
        "cat": "专业核心",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "信息科技课堂教学技能训练",
        "credits": 2,
        "cat": "专业核心",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数智教育技术",
        "credits": 2,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "离散数学",
        "credits": 3,
        "cat": "专业限选",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "人工智能",
        "credits": 2.5,
        "cat": "专业限选",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "Python 程序设计",
        "credits": 3,
        "cat": "专业限选",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "中小学人工智能教学",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "人工智能+模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "教育机器人",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "人工智能+模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "大语言模型原理与应用",
        "credits": 1.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "人工智能+模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "神经网络和深度学习",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "人工智能+模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "Web 应用开发",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "高级软件技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "编译原理",
        "credits": 3.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "高级软件技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "移动应用开发（Android）",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "高级软件技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "算法设计与分析",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "高级软件技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "Java 程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "高级软件技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "UI 与交互设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "数字媒体技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "多媒体应用开发",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "数字媒体技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "计算机图形学",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "数字媒体技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字图像处理",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "数字媒体技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "三维动画设计与制作",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "数字媒体技术模块",
        "required": false,
        "notes": ""
      },
      {
        "name": "概率与数理统计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "C++程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字逻辑",
        "credits": 3.5,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "计算机辅助教学",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "Linux 程序设计",
        "credits": 1.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "Web 服务器端开发",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "人机交互与虚拟现实",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "大规模数据挖掘",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "网络安全",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "网络工程",
        "credits": 1.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "信息学竞赛",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "物联网概论",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "高级数据结构",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "应用密码学",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "安全协议及应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "信息安全竞赛",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "信息安全工程",
        "credits": 1,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "计算机视觉",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "云计算与大数据",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "教育研究方法",
        "credits": 2,
        "cat": "教育选修",
        "term": "三秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "教师成长案例研究",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "教学智慧和教学艺术",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "中学生学习和发展心理专题",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "学生品德发展与道德教育",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "学生问题诊断与矫正",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "中学生职业生涯规划",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "中学德育、课程与教学专题",
        "credits": 1,
        "cat": "教育选修",
        "term": "三春",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "中外教育史专题",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "国际教育改革动态",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "学校教育法律问题案例研究",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "校本课程开发",
        "credits": 1,
        "cat": "教育选修",
        "term": "春、秋",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "STEAM 项目开发",
        "credits": 2,
        "cat": "教育选修",
        "term": "三春",
        "group": "教师教育类",
        "required": false,
        "notes": ""
      },
      {
        "name": "AI 时代的专业劳动教育",
        "credits": 2,
        "cat": "专业实践",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "科研实务",
        "credits": 2,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "互联网创新创业",
        "credits": 2,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "教育见习",
        "credits": 2,
        "cat": "专业实践",
        "term": "二秋/三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "教育实习",
        "credits": 8,
        "cat": "专业实践",
        "term": "四秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毕业论文（设计）",
        "credits": 8,
        "cat": "专业实践",
        "term": "四春或秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "Ⅱ类学分：劳动教育类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不少于 2 学分"
      },
      {
        "name": "Ⅱ类学分：社会实践类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不高于/计入 2 学分"
      }
    ],
    "moduleRuleType": "selectOne"
  },
  "ece_2025": {
    "id": "ece_2025",
    "name": "电子信息工程",
    "grade": "2025级",
    "totalCreditsRequirement": 151,
    "targets": {
      "通识必修": 36,
      "通识选修": 10,
      "专业基础": 16,
      "专业核心": 21.5,
      "专业限选": 10,
      "主修专业选修": 23,
      "专业实践": 30.5,
      "Ⅱ类学分": 4
    },
    "geSubRules": [
      {
        "name": "艺术鉴赏与审美体验",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "人工智能与现代生活",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "“四史教育”专题",
        "target": 1,
        "notes": "通识选修子要求（需≥1学分）"
      }
    ],
    "moduleTargets": {
      "集成电路工程": 7.5,
      "通信工程": 7.5
    },
    "courses": [
      {
        "name": "思想道德与法治",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "中国近现代史纲要",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "马克思主义基本原理",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毛泽东思想和中国特色社会主义理论体系概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "习近平新时代中国特色社会主义思想概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "形势与政策",
        "credits": 2,
        "cat": "通识必修",
        "term": "一二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅰ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅱ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅲ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅳ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "军事训练",
        "credits": 2,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国防教育",
        "credits": 2,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国家安全教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（基础拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（进阶拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（高阶课程）",
        "credits": 2,
        "cat": "通识必修",
        "term": "二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生心理健康教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生职业发展与就业指导",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋/三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "通识选修：艺术鉴赏与审美体验",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：人工智能与现代生活",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：“四史教育”专题",
        "credits": 1,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 1 学分"
      },
      {
        "name": "通识选修：其他通识课程",
        "credits": 5,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "补足通识选修至 10 学分"
      },
      {
        "name": "高等数学A1",
        "credits": 5,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "线性代数A3",
        "credits": 3,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "高等数学A2",
        "credits": 4,
        "cat": "专业基础",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "程序设计基础",
        "credits": 4,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "电路原理",
        "credits": 3,
        "cat": "专业核心",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "模拟电路",
        "credits": 5,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "信号与系统",
        "credits": 3,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数字电路",
        "credits": 5,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "传感与检测技术",
        "credits": 2.5,
        "cat": "专业核心",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "嵌入式系统原理与设计（人工智能）",
        "credits": 3,
        "cat": "专业核心",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学物理B",
        "credits": 4,
        "cat": "专业限选",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "复变函数与积分变换",
        "credits": 3,
        "cat": "专业限选",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "电磁场与电磁波",
        "credits": 3,
        "cat": "专业限选",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "可编程逻辑电路设计",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "集成电路工程",
        "required": false,
        "notes": ""
      },
      {
        "name": "嵌入式操作系统及应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "集成电路工程",
        "required": false,
        "notes": ""
      },
      {
        "name": "集成电路分析与设计(AI 芯片)",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "集成电路工程",
        "required": false,
        "notes": ""
      },
      {
        "name": "无线传感器网络与边缘智能",
        "credits": 3.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "集成电路工程",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字信号处理",
        "credits": 3.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "通信工程",
        "required": false,
        "notes": ""
      },
      {
        "name": "通信系统原理",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "通信工程",
        "required": false,
        "notes": ""
      },
      {
        "name": "数据通信与网络技术",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "通信工程",
        "required": false,
        "notes": ""
      },
      {
        "name": "高频电路",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "通信工程",
        "required": false,
        "notes": ""
      },
      {
        "name": "工程制图与 CAD",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "Matlab 程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "数据结构",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "程序设计基础项目实践",
        "credits": 1,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "电子线路 CAD",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "单片微机系统原理",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "C++程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "RFID 射频识别技术",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "Python 程序设计与 AI 实践",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "自动控制原理",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "人工智能的数学基础",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "职业规划与素养",
        "credits": 1,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "微型人工智能与嵌入式应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "智能控制与机器人技术",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "智能传感与分布式计算技术",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "数字图像处理",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "信息理论与编码",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "专业任选课",
        "required": false,
        "notes": ""
      },
      {
        "name": "电子竞赛编程实践",
        "credits": 2,
        "cat": "专业实践",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "AI 时代的专业劳动教育",
        "credits": 2,
        "cat": "专业实践",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "智能电子系统设计与创新",
        "credits": 1,
        "cat": "专业实践",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "电子系统全栈开发实践",
        "credits": 1.5,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "科研实务",
        "credits": 2,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "智能机器人系统-基础实践",
        "credits": 1,
        "cat": "专业实践",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "智能机器人系统-控制实践",
        "credits": 1,
        "cat": "专业实践",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "智能机器人系统-通信实践",
        "credits": 1,
        "cat": "专业实践",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "智能机器人系统-综合实践",
        "credits": 1,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "专业见习",
        "credits": 2,
        "cat": "专业实践",
        "term": "四春/秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "专业实习",
        "credits": 8,
        "cat": "专业实践",
        "term": "四春/秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毕业论文（设计）",
        "credits": 8,
        "cat": "专业实践",
        "term": "四春/秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "Ⅱ类学分：劳动教育类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不少于 2 学分"
      },
      {
        "name": "Ⅱ类学分：社会实践类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不高于/计入 2 学分"
      }
    ],
    "moduleRuleType": "selectOne"
  },
  "gis_2025": {
    "id": "gis_2025",
    "name": "地理信息科学",
    "grade": "2025级",
    "totalCreditsRequirement": 158,
    "targets": {
      "通识必修": 36,
      "通识选修": 10,
      "专业基础": 12,
      "专业核心": 20,
      "主修专业选修": 57,
      "专业实践": 19,
      "Ⅱ类学分": 4
    },
    "geSubRules": [
      {
        "name": "艺术鉴赏与审美体验",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "人工智能与现代生活",
        "target": 2,
        "notes": "通识选修子要求（需≥2学分）"
      },
      {
        "name": "“四史教育”专题",
        "target": 1,
        "notes": "通识选修子要求（需≥1学分）"
      }
    ],
    "moduleTargets": {
      "公共基础": 8,
      "GIS": 6,
      "遥感": 8,
      "测绘": 5,
      "地学": 8,
      "人工智能": 10
    },
    "courses": [
      {
        "name": "思想道德与法治",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "中国近现代史纲要",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋/一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "马克思主义基本原理",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毛泽东思想和中国特色社会主义理论体系概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "习近平新时代中国特色社会主义思想概论",
        "credits": 3,
        "cat": "通识必修",
        "term": "二秋/二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "形势与政策",
        "credits": 2,
        "cat": "通识必修",
        "term": "一二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅰ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅱ",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅲ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学体育Ⅳ",
        "credits": 1,
        "cat": "通识必修",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "军事训练",
        "credits": 2,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国防教育",
        "credits": 2,
        "cat": "通识必修",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "国家安全教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（基础拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（进阶拓展）",
        "credits": 3,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学外语（高阶课程）",
        "credits": 2,
        "cat": "通识必修",
        "term": "二三年级",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生心理健康教育",
        "credits": 1,
        "cat": "通识必修",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学生职业发展与就业指导",
        "credits": 1,
        "cat": "通识必修",
        "term": "二秋/三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "通识选修：艺术鉴赏与审美体验",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：人工智能与现代生活",
        "credits": 2,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 2 学分"
      },
      {
        "name": "通识选修：“四史教育”专题",
        "credits": 1,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "必修 1 学分"
      },
      {
        "name": "通识选修：其他通识课程",
        "credits": 5,
        "cat": "通识选修",
        "term": "春秋滚动",
        "group": "通识选修",
        "required": false,
        "notes": "补足通识选修至 10 学分"
      },
      {
        "name": "地理信息科学导论",
        "credits": 0.5,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "高等数学 A1",
        "credits": 5,
        "cat": "专业基础",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "高等数学 A2",
        "credits": 4,
        "cat": "专业基础",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "C 程序设计",
        "credits": 2.5,
        "cat": "专业基础",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "自然地理学",
        "credits": 3,
        "cat": "专业核心",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "地理信息系统原理",
        "credits": 2.5,
        "cat": "专业核心",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "数字测图原理与方法",
        "credits": 3,
        "cat": "专业核心",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "地图学",
        "credits": 3,
        "cat": "专业核心",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "遥感概论",
        "credits": 3,
        "cat": "专业核心",
        "term": "一春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "GIS 空间分析",
        "credits": 2.5,
        "cat": "专业核心",
        "term": "二秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "遥感地学分析",
        "credits": 3,
        "cat": "专业核心",
        "term": "三秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "大学物理 C",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "公共基础",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "线性代数 A3",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "公共基础",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "★专业英语",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "公共基础",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "数据结构",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "公共基础",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "数据库原理与应用",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "公共基础",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "概率与数理统计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "公共基础",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "面向对象程序设计",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "公共基础",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "计算机图形学",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "公共基础",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "科技写作",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "公共基础",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "开源 GIS",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "GIS",
        "required": false,
        "notes": "最低学分 6 学分"
      },
      {
        "name": "地理信息服务",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "GIS",
        "required": false,
        "notes": "最低学分 6 学分"
      },
      {
        "name": "地理信息科学前沿",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "GIS",
        "required": false,
        "notes": "最低学分 6 学分"
      },
      {
        "name": "GIS 应用开发",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "GIS",
        "required": false,
        "notes": "最低学分 6 学分"
      },
      {
        "name": "★遥感数字图像处理",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "遥感",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "激光雷达遥感导论",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "遥感",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "城市生态遥感",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "遥感",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "智慧生态与遥感产品真实性检验",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "遥感",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "水环境遥感",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "遥感",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "遥感程序设计",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "遥感",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "卫星导航定位技术应用",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "测绘",
        "required": false,
        "notes": "最低学分 5 学分"
      },
      {
        "name": "无人机低空遥感测绘",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "测绘",
        "required": false,
        "notes": "最低学分 5 学分"
      },
      {
        "name": "测绘项目管理与案例分析",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "测绘",
        "required": false,
        "notes": "最低学分 5 学分"
      },
      {
        "name": "气象学与气候学",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二秋",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "地貌与第四纪地质",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "人文地理学",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "中国地理",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "经济地理学",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "地理学理论与方法",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "城市规划",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "地理教学论",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "生态规划",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "全球变化与环境演变",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "地学",
        "required": false,
        "notes": "最低学分 8 学分"
      },
      {
        "name": "Python 程序设计",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "一春",
        "group": "人工智能",
        "required": false,
        "notes": "最低学分 10 学分"
      },
      {
        "name": "遥感云平台基础与应用",
        "credits": 2,
        "cat": "主修专业选修",
        "term": "二春",
        "group": "人工智能",
        "required": false,
        "notes": "最低学分 10 学分"
      },
      {
        "name": "神经网络与深度学习",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "人工智能",
        "required": false,
        "notes": "最低学分 10 学分"
      },
      {
        "name": "空间大数据挖掘",
        "credits": 3,
        "cat": "主修专业选修",
        "term": "三秋",
        "group": "人工智能",
        "required": false,
        "notes": "最低学分 10 学分"
      },
      {
        "name": "数字摄影测量与计算机视觉",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "人工智能",
        "required": false,
        "notes": "最低学分 10 学分"
      },
      {
        "name": "遥感影像智能信息提取",
        "credits": 2.5,
        "cat": "主修专业选修",
        "term": "三春",
        "group": "人工智能",
        "required": false,
        "notes": "最低学分 10 学分"
      },
      {
        "name": "自然地理野外实训",
        "credits": 1,
        "cat": "专业实践",
        "term": "一秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "科研实务（科学研究技能训练）",
        "credits": 2,
        "cat": "专业实践",
        "term": "二秋-三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "GIS 应用大赛实训",
        "credits": 1,
        "cat": "专业实践",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "专业见习",
        "credits": 1,
        "cat": "专业实践",
        "term": "二春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "遥感与 GIS 应用综合实践（创新创业教育）",
        "credits": 2,
        "cat": "专业实践",
        "term": "三春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "专业实习",
        "credits": 6,
        "cat": "专业实践",
        "term": "四秋",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "毕业论文",
        "credits": 6,
        "cat": "专业实践",
        "term": "四春",
        "group": "",
        "required": true,
        "notes": ""
      },
      {
        "name": "Ⅱ类学分：劳动教育类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不少于 2 学分"
      },
      {
        "name": "Ⅱ类学分：社会实践类",
        "credits": 2,
        "cat": "Ⅱ类学分",
        "term": "",
        "group": "Ⅱ类",
        "required": false,
        "notes": "不高于/计入 2 学分"
      }
    ],
    "moduleRuleType": "allRequired"
  }
};
