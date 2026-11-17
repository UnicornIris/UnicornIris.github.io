const translations = {
  en: {
    pageTitle: "Leyan (Iris) Lyu",
    skyCaption: "Cancer, with the Beehive Cluster (M44) at its heart. Star positions J2000.",
    navExperience: "Experience",
    navProjects: "Projects",
    navAbout: "Skills",
    name: "Leyan (Iris) Lyu",
    tagline:
      "Computer Science student building useful products with machine learning, software engineering, and research experience.",
    prevLabel: "Previously",
    prevValue: "AI-Native Forward Deployed Engineer intern at Akila, Aden Group",
    studyLabel: "Studying",
    studyValue: "B.S. Computer Science, minor in General Business, University of Maryland, 2027",
    writeLabel: "Write",
    listSep: ", ",
    experienceTitle: "Experience",
    experienceHint: "Select a point on the timeline to read about that role.",
    expAkilaTitle: "AI-Native Forward Deployed Engineer Intern",
    expAkilaOrg: "Akila, Aden Group",
    expOneDate: "2025.09 – Present",
    expOneTitle: "Machine Learning Research Student",
    expOneOrg: "Research Lab, University of Maryland (IBM Qiskit & QLab)",
    expTwoTitle: "Machine Learning Research Intern",
    expTwoOrg: "Research Lab, University of Maryland (IBM Qiskit & QLab)",
    expThreeTitle: "IT Systems Support Worker",
    expThreeOrg: "University of Maryland",
    expFourTitle: "Social Media Technology and Data Science Intern",
    expFourOrg: "Hupanmodou Foundation",
    detailAkilaMeta: "Hybrid, remote from Sep 2026. LLM pipelines, data infrastructure, enterprise knowledge base.",
    detailAkilaBulletOne:
      "Built an LLM extraction pipeline over ~20,000 work orders and 250,000+ inspection records across 3 facility sites, structuring ~5,800 free-text maintenance narratives into typed fields; validated outputs with a human-in-the-loop accuracy/calibration harness and an independent embeddings + KMeans cross-check.",
    detailAkilaBulletTwo:
      "Consolidated MySQL, TDengine and ClickHouse sources into one cleaned, PII-stripped MySQL instance on Coolify; scored data quality on a 24-table CMMS schema across 5 sites (equipment linkage 0.6%–79%) to scope per-site analysis.",
    detailAkilaBulletThree:
      "Designed a 4-agent architecture (ingestion/chunking, Q&A, anomaly detection, alert email) on Mastra + pgvector, with the chunking agent as the shared data layer.",
    detailAkilaBulletFour:
      "Led the source-data assessment for Aden Brain, the group's enterprise knowledge base: inventoried 20,000+ SharePoint files via Microsoft Graph PowerShell, flagged 5 governance risks, and costed 4 build routes.",
    detailAkilaBulletFive:
      "Prototyped permission-aware retrieval on the Microsoft Graph Search API; tested it on real SOP queries and showed keyword search fails on paraphrased Chinese questions, motivating a semantic retrieval layer.",
    detailAkilaBulletSix:
      "Delivered client-facing equipment risk reports from raw CMMS data, surfacing a fire-safety defect open for 13 months and 56 of 58 cancelled PM orders on one critical asset; approved for presentation to the end client.",
    detailAkilaBulletSeven:
      "Built a React/TypeScript analytics dashboard (in beta for multi-tenant integration) and a PBI-to-CRM reconciliation on Dataverse that found 345 client companies missing from site-level reporting.",
    detailOneMeta: "Bayesian neural networks, uncertainty analysis, quantum ML benchmarking.",
    detailOneBulletOne:
      "Designed Bayesian neural network models for scientific prediction tasks, using uncertainty analysis to improve interpretability and confidence calibration.",
    detailOneBulletTwo:
      "Benchmarked classical and quantum neural networks across multiple evaluation settings to compare performance, robustness, and practical tradeoffs.",
    detailOneBulletThree:
      "Built MLflow-based experiment pipelines to strengthen reproducibility, tracking, and team collaboration inside the lab workflow, improving cross-run comparison efficiency by ~30%.",
    detailOneBulletFour:
      "Built and trained graph neural networks for molecular property prediction, applying transfer learning to fine-tune models pretrained on 665k low-fidelity molecules toward high-fidelity experimental targets.",
    detailOneBulletFive:
      "Engineered data-cleaning, preprocessing, and evaluation routines to support comparison across model architectures.",
    detailTwoMeta: "Low-fidelity transfer learning for molecular property prediction.",
    detailTwoBulletOne:
      "Processed and analyzed 665K+ molecular samples to support large-scale low-fidelity transfer learning experiments.",
    detailTwoBulletTwo:
      "Implemented distributed training pipelines with PyTorch Lightning to improve training efficiency and experimental throughput.",
    detailTwoBulletThree:
      "Generated benchmarking results and quantitative reports that helped guide model comparison, optimization, and next-step research decisions.",
    detailThreeMeta: "Linux operations, incident diagnosis, system documentation.",
    detailThreeBulletOne: "Diagnosed 100+ Linux and network incidents using logs and operational metrics.",
    detailThreeBulletTwo: "Performed root-cause analysis and improved recurring issue documentation.",
    detailThreeBulletThree: "Built stronger instincts for reliability, debugging, and operational systems thinking.",
    detailThreeBulletFour:
      "Built an issue-tracking and knowledge-base system from log/usage analysis; managed Jira/Confluence workflows.",
    detailFourMeta: "Website operations, data analysis, digital content strategy.",
    detailFourBulletOne: "Analyzed engagement data to evaluate campaign effectiveness and user response.",
    detailFourBulletTwo: "Supported website operations, content updates, and technical maintenance.",
    detailFourBulletThree: "Turned audience insights into clearer communication and product-facing decisions.",
    projectShowcaseTitle: "Selected Projects",
    projectShowcaseHint: "From physics-informed ML research to product prototypes. Open one to read more.",
    pinnKicker: "Scientific ML, independent research",
    pinnTitle: "Fewer Parameters, Longer Runtimes: The Wall-Clock Cost of Hybrid Quantum PINNs",
    pinnMeta:
      "Jun 2026 to present. Manuscript in preparation. PyTorch, PennyLane, physics-informed neural networks.",
    pinnBulletOne:
      "Reproduced a published seawater-temperature diffusion PINN benchmark in PyTorch across 6 forward/inverse scenarios, then built hybrid quantum-classical PINNs (PennyLane variational circuits between classical layers) in four configurations that vary qubit count and circuit depth.",
    pinnBulletTwo:
      "Timed the four cumulative stages a PINN needs (forward pass, first- and second-order input gradients, PDE-loss parameter gradient) with circuits simulated on CPU: the hybrids were 14–56× slower than a classical PINN on the forward pass, 10–97× slower on the PDE-loss gradient, and 9–85× slower than size-matched classical controls.",
    pinnBulletThree:
      "Over the tested ranges, runtime grew roughly exponentially with qubit count, roughly linearly with circuit depth, and sub-linearly with batch size; a second simulator backend was 10–165× slower for the circuit-only forward pass.",
    pinnBulletFour:
      "Showed that parameter count misleads: the hybrids use 37.6–44.4% fewer parameters, yet the circuit holds at most 2.46% of them, and smaller classical controls still run slower than the baseline. The paper argues efficiency reports should pair parameter counts with stage-wise wall-clock time.",
    aiPetKicker: "AI product, conversational interface",
    aiPetTitle: "AI Pet Companion",
    aiPetMeta: "Mobile-first interaction design, character-driven UX, planned public launch within 6 months.",
    aiPetDescription:
      "Designed and prototyped a mobile-first AI pet companion product focused on emotional interaction, character identity, and conversational user experience.",
    aiPetBulletOne:
      "Built the visual prototype and interaction flow to define how users chat, bond, and engage with the companion.",
    aiPetBulletTwo:
      "Developed the product direction around mobile-first design, expressive UI, and a planned public launch within 6 months.",
    aiPetBulletThree:
      "Built an LLM-based conversational system with multi-turn dialogue/memory management using an agent-style workflow.",
    aiPetBulletFour: "Logged retention and interaction frequency to iterate on conversation quality; authored the PRD.",
    spotifyKicker: "Data science, predictive modeling",
    spotifyTitle: "Spotify Music Trend Analysis",
    spotifyMeta: "Regression, decision trees, exploratory analysis, presentation-ready reporting.",
    spotifyDescription:
      "Built a Spotify popularity prediction project using regression models, decision trees, and exploratory analysis to study which track features most strongly influence popularity.",
    spotifyBulletOne:
      "Designed the full workflow for data cleaning, feature analysis, model comparison, and insight synthesis.",
    spotifyBulletTwo: "Summarized findings into a concise visual report for portfolio presentation and recruiter review.",
    spotifyBulletThree:
      "Modeled popularity drivers across 110k+ songs (Python, regression, decision trees) with an interactive dashboard.",
    skillsTitle: "Skills",
    skillsML: "ML and research",
    skillsEng: "Engineering",
    skillsData: "Data",
    skillsAI: "AI tooling",
    educationTitle: "Education",
    eduUmd:
      "University of Maryland, College Park. B.S. in Computer Science, minor in General Business.",
    footerLine: "Made by a unicorn from Hangzhou."
  },
  zh: {
    pageTitle: "吕乐衍 Leyan (Iris) Lyu",
    skyCaption: "巨蟹座，中央是鬼星团（M44）。恒星位置为 J2000 历元。",
    navExperience: "经历",
    navProjects: "项目",
    navAbout: "技能",
    name: "Leyan (Iris) Lyu",
    tagline: "计算机科学学生，结合机器学习、软件工程和研究经历，构建真正有用的产品。",
    prevLabel: "此前",
    prevValue: "Akila（Aden Group）AI-Native Forward Deployed Engineer 实习生",
    studyLabel: "就读",
    studyValue: "马里兰大学计算机科学本科，辅修商科，2027 年毕业",
    writeLabel: "联系",
    listSep: "、",
    experienceTitle: "经历",
    experienceHint: "点击时间线上的节点，查看对应经历。",
    expAkilaTitle: "AI-Native Forward Deployed Engineer 实习生",
    expAkilaOrg: "Akila，Aden Group",
    expOneDate: "2025.09 – 至今",
    expOneTitle: "机器学习研究学生",
    expOneOrg: "马里兰大学 Research Lab（IBM Qiskit & QLab）",
    expTwoTitle: "机器学习研究实习生",
    expTwoOrg: "马里兰大学 Research Lab（IBM Qiskit & QLab）",
    expThreeTitle: "IT 系统支持专员",
    expThreeOrg: "马里兰大学",
    expFourTitle: "社交媒体技术与数据科学实习生",
    expFourOrg: "湖畔魔豆基金会",
    detailAkilaMeta: "混合办公，2026 年 9 月起远程。LLM 管线、数据基础设施、企业知识库。",
    detailAkilaBulletOne:
      "构建 LLM 信息抽取管线，覆盖 3 个设施站点约 20,000 份工单和 250,000+ 条巡检记录，将约 5,800 条自由文本维护记录结构化为带类型的字段；通过 human-in-the-loop 准确率/校准评估框架，以及独立的 embeddings + KMeans 交叉验证来检验输出。",
    detailAkilaBulletTwo:
      "将 MySQL、TDengine 和 ClickHouse 数据源整合到 Coolify 上一个清洗后、已去除 PII 的 MySQL 实例；对 5 个站点、24 张表的 CMMS schema 做数据质量评分（设备关联率 0.6%–79%），用于界定各站点的分析范围。",
    detailAkilaBulletThree:
      "基于 Mastra + pgvector 设计 4 个 agent 的架构（摄取/分块、问答、异常检测、告警邮件），以分块 agent 作为共享数据层。",
    detailAkilaBulletFour:
      "主导集团企业知识库 Aden Brain 的源数据评估：通过 Microsoft Graph PowerShell 盘点 20,000+ 个 SharePoint 文件，标记 5 项治理风险，并对 4 条建设路线做成本评估。",
    detailAkilaBulletFive:
      "基于 Microsoft Graph Search API 原型化权限感知检索；在真实 SOP 查询上测试，证明关键词搜索无法处理改写后的中文问题，从而推动语义检索层的建设。",
    detailAkilaBulletSix:
      "基于原始 CMMS 数据交付面向客户的设备风险报告，发现一项已开放 13 个月的消防安全缺陷，以及某关键资产 58 个已取消 PM 工单中的 56 个；已获批向最终客户展示。",
    detailAkilaBulletSeven:
      "构建 React/TypeScript 分析仪表盘（多租户集成 beta 中），并在 Dataverse 上完成 PBI 与 CRM 的对账，发现 345 家客户公司未出现在站点级报告中。",
    detailOneMeta: "贝叶斯神经网络、不确定性分析、量子机器学习基准测试。",
    detailOneBulletOne: "围绕科研预测任务设计贝叶斯神经网络模型，通过不确定性分析提升结果可解释性与置信度校准能力。",
    detailOneBulletTwo: "对经典神经网络与量子神经网络进行多组实验和基准测试，比较性能、稳定性与实际应用权衡。",
    detailOneBulletThree:
      "搭建基于 MLflow 的实验管理流程，提升实验复现性、结果追踪效率和团队协作质量，并将跨实验对比效率提升约 30%。",
    detailOneBulletFour:
      "构建并训练用于分子性质预测的图神经网络，应用迁移学习，将在 66.5 万个低保真分子上预训练的模型微调至高保真实验目标。",
    detailOneBulletFive: "开发数据清洗、预处理和评估流程，支持不同模型架构之间的对比。",
    detailTwoMeta: "低保真迁移学习用于分子性质预测。",
    detailTwoBulletOne: "处理并分析 66.5 万以上分子样本，支持大规模低保真迁移学习实验。",
    detailTwoBulletTwo: "使用 PyTorch Lightning 实现分布式训练管线，提升训练效率和实验吞吐量。",
    detailTwoBulletThree: "生成基准测试结果和定量分析报告，为模型比较、优化方向和后续研究决策提供依据。",
    detailThreeMeta: "Linux 运维、故障诊断、系统文档。",
    detailThreeBulletOne: "通过日志和运维指标诊断 100+ 起 Linux 与网络问题。",
    detailThreeBulletTwo: "进行 root-cause analysis，并优化重复问题的文档流程。",
    detailThreeBulletThree: "提升了对可靠性、调试和系统运维的工程理解。",
    detailThreeBulletFour: "基于日志与使用情况分析搭建问题追踪与知识库系统；管理 Jira/Confluence 工作流。",
    detailFourMeta: "网站运营、数据分析、数字内容策略。",
    detailFourBulletOne: "分析传播与互动数据，评估活动效果和用户反馈。",
    detailFourBulletTwo: "支持网站运营、内容更新和基础技术维护。",
    detailFourBulletThree: "将用户洞察转化为更清晰的传播策略和产品决策支持。",
    projectShowcaseTitle: "项目展示",
    projectShowcaseHint: "从物理信息机器学习研究到产品原型，点开查看详情。",
    pinnKicker: "科学机器学习，独立研究",
    pinnTitle: "参数更少，运行更慢：混合量子 PINN 的实际运行成本",
    pinnMeta: "2026 年 6 月至今。论文撰写中。PyTorch、PennyLane、物理信息神经网络。",
    pinnBulletOne:
      "使用 PyTorch 在 6 个正向/反向场景中复现已发表的海水温度扩散 PINN 基准，并构建混合量子-经典 PINN（在经典层之间插入 PennyLane 变分量子线路），共 4 种量子比特数与线路深度不同的配置。",
    pinnBulletTwo:
      "在 CPU 模拟量子线路的条件下，对 PINN 所需的四个累积阶段（前向传播、一阶与二阶输入梯度、PDE 损失的参数梯度）计时：混合模型的前向传播比经典 PINN 慢 14–56 倍，PDE 损失梯度慢 10–97 倍，比规模匹配的经典对照慢 9–85 倍。",
    pinnBulletThree:
      "在测试范围内，运行时间随量子比特数近似指数增长，随线路深度近似线性增长，随 batch size 次线性增长；仅线路前向传播时，换用另一个模拟器后端会慢 10–165 倍。",
    pinnBulletFour:
      "说明参数量会误导效率判断：混合模型参数量少 37.6–44.4%，但量子线路最多只占其中的 2.46%，参数更少的经典对照也比基线更慢。论文建议效率报告应同时给出参数量和分阶段的实际运行时间。",
    aiPetKicker: "AI 产品，对话式交互",
    aiPetTitle: "AI 宠物陪伴产品",
    aiPetMeta: "移动端优先交互、角色化体验设计、预计 6 个月内公开上线。",
    aiPetDescription: "设计并制作了一个移动端优先的 AI 宠物陪伴产品原型，重点围绕情绪陪伴、角色化体验和对话式交互展开。",
    aiPetBulletOne: "完成了产品视觉原型和核心交互流程设计，定义用户如何与 AI 宠物进行聊天、建立关系和持续互动。",
    aiPetBulletTwo: "围绕移动端优先设计、富有表现力的界面和 6 个月内计划上线的产品方向持续推进。",
    aiPetBulletThree: "基于 LLM 构建对话系统，采用 Agent 式工作流实现多轮对话与记忆管理。",
    aiPetBulletFour: "记录留存与互动频率数据，用于迭代对话质量；撰写了产品需求文档（PRD）。",
    spotifyKicker: "数据科学，预测建模",
    spotifyTitle: "Spotify 音乐趋势分析",
    spotifyMeta: "回归分析、决策树、探索性分析、适合展示的项目报告。",
    spotifyDescription:
      "使用回归模型、决策树和探索性分析，完成了一个围绕 Spotify 歌曲热度预测的项目，研究哪些特征对歌曲热度影响最大。",
    spotifyBulletOne: "独立搭建了数据清洗、特征分析、模型比较和结论提炼的完整项目流程。",
    spotifyBulletTwo: "将分析结果整理成简洁直观的可视化报告，用于作品集展示和招聘场景浏览。",
    spotifyBulletThree: "基于 11 万+ 首歌曲，使用 Python、回归和决策树分析影响热度的因素，并搭建交互式仪表盘。",
    skillsTitle: "技能",
    skillsML: "机器学习与研究",
    skillsEng: "工程",
    skillsData: "数据",
    skillsAI: "AI 工具",
    educationTitle: "教育背景",
    eduUmd: "马里兰大学帕克分校。计算机科学本科，辅修商科。",
    footerLine: "来自杭州的独角兽亲手制作。"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = dict.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-lang-only]").forEach((element) => {
    element.hidden = element.dataset.langOnly !== lang;
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  try {
    localStorage.setItem("portfolio-language", lang);
  } catch (error) {}
}

// English first; Chinese only when the visitor picked it before.
let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("portfolio-language") || "en";
} catch (error) {}
applyLanguage(translations[savedLanguage] ? savedLanguage : "en");

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

// Light / dark theme
const themeButton = document.querySelector(".theme-btn");
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return document.documentElement.dataset.theme || (darkQuery.matches ? "dark" : "light");
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch (error) {}
  });
}

// Experience timeline: one point open at a time; clicking the open point closes it
const stops = [...document.querySelectorAll(".timeline .stop")];

function selectStop(target, { focus = false } = {}) {
  const closing = target.classList.contains("active");
  stops.forEach((stop) => {
    const on = stop === target && !closing;
    stop.classList.toggle("active", on);
    stop.setAttribute("aria-selected", on ? "true" : "false");
    stop.tabIndex = stop === target ? 0 : -1;
    document.getElementById(stop.getAttribute("aria-controls")).hidden = !on;
  });
  if (focus) {
    target.focus();
  }
  // On phones the panel sits below the whole list, so bring it into view
  if (!closing && window.matchMedia("(max-width: 820px)").matches) {
    document.getElementById(target.getAttribute("aria-controls")).scrollIntoView({ block: "nearest" });
  }
}

stops.forEach((stop, index) => {
  stop.addEventListener("click", () => selectStop(stop));
  stop.addEventListener("keydown", (event) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!step) {
      return;
    }
    event.preventDefault();
    const next = stops[(index + step + stops.length) % stops.length];
    if (!next.classList.contains("active")) {
      selectStop(next, { focus: true });
    } else {
      next.focus();
    }
  });
});

// Lightbox
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = src;
  lightboxImage.alt = alt || "";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-lightbox-src]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxAlt);
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});
