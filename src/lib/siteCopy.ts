import { useTranslation } from "react-i18next";

export type SiteLanguage = "ru" | "uz" | "en" | "zh";

const ruEvents = {
  event_rewind_2023: "Крупнейший AI-ивент Узбекистана. 700+ участников, 13 спикеров. Партнёры: Alif Tech, NewUU, Digital Generation.",
  event_gap_2022_12: "Первый ML Gap. Студенты ИНХА, IT Park, Iman Invest. Живые разборы и нетворкинг.",
  event_gap_2023_04: "Второй ML Gap в C-Space Coworking. Неформальная конференция с международными спикерами.",
  event_gap_2023_11: "Практический воркшоп: snacks & coding, разбор резюме участников, нетворкинг.",
  event_gap_2024_01: "MLC & PC GAP - совместный ивент. Участники повысили знания и завели связи с профессионалами.",
  event_gap_2024_09: "Невероятный вечер с Александром Крайновым - погружение в современный AI. Атмосфера инноваций.",
  event_gap_2024_12: "Вдохновляющая встреча с яркими спикерами. Живые истории из индустрии и нетворкинг.",
  event_party_2022: "Первый ML Party собрал 300+ участников. Среди гостей - основатель myTaxi и Express24. Начало традиции.",
  event_party_2023: "130+ участников - профессионалы и новички. Живые дискуссии и нетворкинг.",
  event_party_2024: "Вечер для AI, Data и Startup-энтузиастов. Живая музыка, нетворкинг и содержательные дискуссии.",
  event_party_2025: "Вечер идей, вдохновения и настоящей ML-энергии.",
  event_meetup_tbc: "Студенты MLC в TBC Bank: AI-департамент, HR-культура банка, Product Data Analytics. Экскурсия по офису.",
  event_meetup_2026_03: "Студенты MLC в IMAN: трудоустройство, разбор реальных проблем, Data Analytics и ML-тренды.",
  event_meetup_2026_04: "Студенты MLC в Alif. Muslima Sabirova и Kamilla Veyskerber поделились экспертизой.",
  event_meetup_2026_05: "Студенты MLC в Click: составление резюме, подготовка к интервью, требования компаний.",
  event_hackathon_2024: "Первый AI Hackathon MLC. Три дня разработки, 100 млн сум призовой фонд. 🥇 Shifo AI  🥈 Data Dreamers  🥉 ICEMEDAI.",
  event_contest_2023: "Команды до 3 человек решали задачи Kaggle за 5 часов. Онлайн-участие доступно.",
  event_contest_2026: "Machine Learning Challenge совместно с ML Club NewUU в НУУ. Командное Kaggle-соревнование.",
} as const;

const uzEvents = {
  event_rewind_2023: "O'zbekistondagi eng yirik AI tadbiri. 700+ ishtirokchi, 13 spiker. Hamkorlar: Alif Tech, NewUU, Digital Generation.",
  event_gap_2022_12: "Birinchi ML Gap. INHA talabalari, IT Park, Iman Invest a'zolari. Jonli tahlillar va networking.",
  event_gap_2023_04: "C-Space Coworking'da ikkinchi ML Gap. Xalqaro spikerlari bilan norasmiy konferensiya.",
  event_gap_2023_11: "Amaliy seminar: snacks & coding, ishtirokchilar rezyumesini tahlil qilish, networking.",
  event_gap_2024_01: "MLC & PC GAP - hamkorlikdagi tadbir. Ishtirokchilar bilimlarini oshirdi va mutaxassislar bilan tanishdi.",
  event_gap_2024_09: "Aleksandr Krainov bilan ajoyib kecha - zamonaviy AI'ga chuqur kirib borish. Innovatsion muhit.",
  event_gap_2024_12: "Yorqin spikerlari bilan ilhomlantiruvchi uchrashuv. Sanoatdan jonli hikoyalar va networking.",
  event_party_2022: "Birinchi ML Party 300+ ishtirokchini to'pladi. Mehmonlar orasida myTaxi va Express24 asoschisi. An'ananing boshlanishi.",
  event_party_2023: "130+ ishtirokchi - mutaxassislar va yangi boshlovchilar. Jonli muhokamalar va networking.",
  event_party_2024: "AI, Data va Startup ixlosmandlari uchun kecha. Jonli musiqa, networking va mazmunli suhbatlar.",
  event_party_2025: "G'oyalar, ilhom va haqiqiy ML energiyasi kechasi.",
  event_meetup_tbc: "MLC talabalari TBC Bankda: AI departamenti, HR madaniyati, Product Data Analytics. Ofis ekskursiyasi.",
  event_meetup_2026_03: "MLC talabalari IMAN'da: ish topish, real muammolar tahlili, Data Analytics va ML trendlari.",
  event_meetup_2026_04: "MLC talabalari Alif'da. Muslima Sabirova va Kamilla Veyskerber tajribalarini ulashdi.",
  event_meetup_2026_05: "MLC talabalari Click'da: rezyume tuzish, intervyuga tayyorgarlik, kompaniyalar talablari.",
  event_hackathon_2024: "MLC'ning birinchi AI Hackathon'i. Uch kunlik ishlanma, 100 mln so'm mukofot. 🥇 Shifo AI  🥈 Data Dreamers  🥉 ICEMEDAI.",
  event_contest_2023: "3 kishigacha jamoalar 5 soat davomida Kaggle vazifalarini hal qildi. Online ishtirok mumkin.",
  event_contest_2026: "NewUU ML Club bilan birgalikda NUU'da Machine Learning Challenge. Jamoa Kaggle musobaqasi.",
} as const;

const enEvents = {
  event_rewind_2023: "The largest AI event in Uzbekistan. 700+ attendees, 13 speakers. Partners: Alif Tech, NewUU, Digital Generation.",
  event_gap_2022_12: "The first ML Gap. Students from INHA, IT Park, and Iman Invest. Live case reviews and networking.",
  event_gap_2023_04: "The second ML Gap at C-Space Coworking. An informal conference with international speakers.",
  event_gap_2023_11: "A practical workshop: snacks & coding, participant resume reviews, and networking.",
  event_gap_2024_01: "MLC & PC GAP - a joint event where participants gained knowledge and connected with industry professionals.",
  event_gap_2024_09: "An incredible evening with Alexander Krainov - a deep dive into modern AI. An atmosphere of innovation.",
  event_gap_2024_12: "An inspiring meetup with brilliant speakers. Live stories from the industry and networking.",
  event_party_2022: "The first ML Party brought together 300+ people. Guests included the founder of myTaxi and Express24. The start of a tradition.",
  event_party_2023: "130+ attendees - professionals and newcomers. Live discussions and networking.",
  event_party_2024: "An evening for AI, Data and Startup enthusiasts. Live music, networking and meaningful conversations.",
  event_party_2025: "An evening of ideas, inspiration and real ML energy.",
  event_meetup_tbc: "MLC students at TBC Bank: AI department, HR culture, Product Data Analytics. Office tour.",
  event_meetup_2026_03: "MLC students at IMAN: career opportunities, real problem reviews, Data Analytics and ML trends.",
  event_meetup_2026_04: "MLC students at Alif. Muslima Sabirova and Kamilla Veyskerber shared their expertise.",
  event_meetup_2026_05: "MLC students at Click: resume writing, interview prep, and real company requirements.",
  event_hackathon_2024: "The first MLC AI Hackathon. Three days of building, 100M UZS prize pool. 🥇 Shifo AI  🥈 Data Dreamers  🥉 ICEMEDAI.",
  event_contest_2023: "Teams of up to 3 solved Kaggle tasks in 5 hours. Online participation available.",
  event_contest_2026: "Machine Learning Challenge with ML Club NewUU at NUU. A team-based Kaggle competition.",
} as const;

const zhEvents = {
  event_rewind_2023: "乌兹别克斯坦规模最大的 AI 活动。700+ 参与者，13 位演讲者。合作伙伴：Alif Tech、NewUU、Digital Generation。",
  event_gap_2022_12: "首届 ML Gap。INHA 学生、IT Park 与 Iman Invest 成员参与。现场案例解析与社交。",
  event_gap_2023_04: "在 C-Space Coworking 举办的第二届 ML Gap。与国际演讲者一起的非正式会议。",
  event_gap_2023_11: "实践工作坊：snacks & coding、参与者简历点评与社交。",
  event_gap_2024_01: "MLC & PC GAP 联合活动。参与者提升知识，并与行业专业人士建立联系。",
  event_gap_2024_09: "与 Alexander Krainov 共度的精彩夜晚，深入现代 AI，充满创新氛围。",
  event_gap_2024_12: "与优秀演讲者的启发性聚会。来自行业的真实故事与社交。",
  event_party_2022: "首届 ML Party 汇聚 300+ 人。嘉宾包括 myTaxi 和 Express24 创始人，传统由此开始。",
  event_party_2023: "130+ 参与者，包括专业人士与新手。现场讨论与社交。",
  event_party_2024: "面向 AI、数据与创业爱好者的夜晚。现场音乐、社交与有深度的对话。",
  event_party_2025: "充满想法、灵感和真实 ML 能量的夜晚。",
  event_meetup_tbc: "MLC 学生走进 TBC Bank：AI 部门、HR 文化、产品数据分析与办公室参观。",
  event_meetup_2026_03: "MLC 学生走进 IMAN：职业机会、真实问题解析、数据分析与 ML 趋势。",
  event_meetup_2026_04: "MLC 学生走进 Alif。Muslima Sabirova 和 Kamilla Veyskerber 分享专业经验。",
  event_meetup_2026_05: "MLC 学生走进 Click：简历撰写、面试准备和真实公司要求。",
  event_hackathon_2024: "首届 MLC AI Hackathon。三天开发，1 亿苏姆奖金池。🥇 Shifo AI  🥈 Data Dreamers  🥉 ICEMEDAI。",
  event_contest_2023: "最多 3 人的团队在 5 小时内解决 Kaggle 任务，支持线上参与。",
  event_contest_2026: "与 NewUU ML Club 在 NUU 联合举办的 Machine Learning Challenge，团队 Kaggle 竞赛。",
} as const;

const ruZeroOneAi = {
  heroTitle: "Цифровые технологии для всех",
  heroSubtitle: "Качественное обучение. Сообщество - сила. Учись и развивайся.",
  heroBtn: "Начать сейчас",
  tracksTitle: "Программы",
  cohortsTitle: "Прошлые потоки",
  cohortsGraduates: "выпускников",
  cohortsEmployed: "трудоустроены",
  galleryTitle: "Фотографии с уроков",
  teamTitle: "Команда 01AI",
  formTitle: "Записаться на курс",
  platformBtn: "Перейти на платформу",
  skillLabel: "Скилл",
  courseLabel: "Курс",
  profLabel: "Профессия",
  learnMore: "Подробнее",
  tracks: [
    { icon: "🎙️", label: "Скилл", title: "Eleven Labs", desc: "Профессиональное озвучивание и дубляж с помощью AI. 20+ часов." },
    { icon: "🎬", label: "Скилл", title: "Higgsfield", desc: "Генерация AI-видео и анимация персонажей. 20+ часов." },
    { icon: "🤖", label: "Скилл", title: "С чего начать AI?", desc: "Простое и эффективное введение в мир искусственного интеллекта. 10+ часов." },
    { icon: "🚀", label: "Курс", title: "AI Startup", desc: "Запусти свой первый стартап с помощью AI. 60+ часов." },
    { icon: "✨", label: "Курс", title: "AI Ijodkor", desc: "Создавай трендовые видео и изображения с помощью AI. 40+ часов." },
  ],
} as const;

const uzZeroOneAi = {
  heroTitle: "Raqamli Texnologiyalar Hamma Uchun",
  heroSubtitle: "Sifatli Ta'lim. Hamjamiyat - Kuch. O'yna - Sotib Ol.",
  heroBtn: "Hoziroq boshlash",
  tracksTitle: "Dasturlar",
  cohortsTitle: "O'tgan potoklar",
  cohortsGraduates: "bitiruvchi",
  cohortsEmployed: "ishga joylashgan",
  galleryTitle: "Darslardan suratlar",
  teamTitle: "Jamoa",
  formTitle: "Ro'yxatdan o'tish",
  platformBtn: "Platformaga o'tish",
  skillLabel: "Skill",
  courseLabel: "Kurs",
  profLabel: "Kasb",
  learnMore: "Ko'proq",
  tracks: [
    { icon: "🎙️", label: "Skill", title: "Eleven Labs", desc: "Professional ovozlantirish va dublyaj. 20+ soat." },
    { icon: "🎬", label: "Skill", title: "Higgsfield", desc: "AI video generatsiyasi va animatsiya. 20+ soat." },
    { icon: "🤖", label: "Skill", title: "Sun'iy intellektni nimadan boshlash kerak?", desc: "AI texnologiyalariga kirish uchun sodda qo'llanma. 10+ soat." },
    { icon: "🚀", label: "Kurs", title: "AI Startup", desc: "AI yordamida birinchi startapingizni boshlang. 60+ soat." },
    { icon: "✨", label: "Kurs", title: "AI Ijodkor", desc: "Trendda bo'lgan video va rasmlarni AI orqali yarating. 40+ soat." },
  ],
} as const;

const enZeroOneAi = {
  heroTitle: "Digital Technologies for Everyone",
  heroSubtitle: "Quality Education. Community is Power. Learn and Grow.",
  heroBtn: "Start now",
  tracksTitle: "Programs",
  cohortsTitle: "Past cohorts",
  cohortsGraduates: "graduates",
  cohortsEmployed: "employed",
  galleryTitle: "Photos from classes",
  teamTitle: "01AI Team",
  formTitle: "Sign up for a course",
  platformBtn: "Go to platform",
  skillLabel: "Skill",
  courseLabel: "Course",
  profLabel: "Profession",
  learnMore: "Learn more",
  tracks: [
    { icon: "🎙️", label: "Skill", title: "Eleven Labs", desc: "Professional voiceover and dubbing with AI. 20+ hours." },
    { icon: "🎬", label: "Skill", title: "Higgsfield", desc: "AI video generation and character animation. 20+ hours." },
    { icon: "🤖", label: "Skill", title: "Where to start with AI?", desc: "A simple and effective introduction to artificial intelligence. 10+ hours." },
    { icon: "🚀", label: "Course", title: "AI Startup", desc: "Launch your first startup with AI. 60+ hours." },
    { icon: "✨", label: "Course", title: "AI Ijodkor", desc: "Create trending videos and images with AI. 40+ hours." },
  ],
} as const;

const zhZeroOneAi = {
  heroTitle: "面向所有人的数字技术",
  heroSubtitle: "优质教育。社区即力量。学习与成长。",
  heroBtn: "立即开始",
  tracksTitle: "课程项目",
  cohortsTitle: "往期班级",
  cohortsGraduates: "名毕业生",
  cohortsEmployed: "已就业",
  galleryTitle: "课堂照片",
  teamTitle: "01AI 团队",
  formTitle: "报名课程",
  platformBtn: "前往平台",
  skillLabel: "技能",
  courseLabel: "课程",
  profLabel: "职业",
  learnMore: "了解更多",
  tracks: [
    { icon: "🎙️", label: "技能", title: "Eleven Labs", desc: "专业 AI 配音与配乐。20+ 小时。" },
    { icon: "🎬", label: "技能", title: "Higgsfield", desc: "AI 视频生成与角色动画。20+ 小时。" },
    { icon: "🤖", label: "技能", title: "如何开始学 AI？", desc: "最简单有效的人工智能入门指南。10+ 小时。" },
    { icon: "🚀", label: "课程", title: "AI Startup", desc: "借助 AI 启动你的第一个创业项目。60+ 小时。" },
    { icon: "✨", label: "课程", title: "AI Ijodkor", desc: "用 AI 创作热门视频和图像。40+ 小时。" },
  ],
} as const;

const ruEventCategories = {
  "ai_rewind_subtitle": "Конференция и обзор AI-трендов",
  "ai_rewind_desc": "AI Rewind — ежегодный итоговый ивент ML Community. Собираем лучших спикеров, разбираем главные тренды уходящего года в AI и смотрим, что ждёт нас дальше. Это не просто лекции — это живая дискуссия, нетворкинг и атмосфера, где AI-сообщество Узбекистана встречается вместе.",
  "ml_gap_subtitle": "Лекции и разборы кейсов",
  "ml_gap_desc": "ML Gap — формат глубоких погружений. Приглашаем экспертов из индустрии, которые разбирают реальные кейсы, делятся опытом и отвечают на живые вопросы. Не теория ради теории — только практические инсайты, которые можно применить уже сегодня.",
  "ml_party_subtitle": "Нетворкинг и вечер сообщества",
  "ml_party_desc": "ML Party — это вечер, где AI-сообщество собирается не ради слайдов, а ради людей. Неформальная атмосфера, живое общение, новые знакомства. Именно здесь завязываются проекты, находятся команды и появляются идеи, которые потом становятся реальностью.",
  "office_visits_subtitle": "Мастер-классы у партнёров",
  "office_visits_desc": "Студенты MLC посещают офисы компаний-партнёров — изнутри. Живые мастер-классы от специалистов, экскурсии по рабочим пространствам, прямые вопросы тем, кто уже работает в индустрии. Лучший способ понять, как устроена реальная работа в AI и tech-компаниях Узбекистана.",
  "ai_hackathon_subtitle": "Разработка AI-решений за 48 часов",
  "ai_hackathon_desc": "AI Hackathon — главное событие ML Community. Три дня интенсивной командной работы, менторы из индустрии, реальные задачи и призовой фонд. Команды строят работающие AI-продукты с нуля. Здесь рождаются стартапы, находятся партнёры и проверяются идеи на прочность.",
  "ml_contest_subtitle": "Соревнование по ML-задачам",
  "ml_contest_desc": "ML Contest — командное Kaggle-соревнование. Несколько часов, реальные датасеты, ограниченное время. Команды до трёх человек соревнуются в решении задач машинного обучения. Отличный способ проверить свои навыки, познакомиться с единомышленниками и получить обратную связь от экспертов."
} as const;

const uzEventCategories = {
  "ai_rewind_subtitle": "Konferensiya va AI trendlari sharhi",
  "ai_rewind_desc": "AI Rewind — ML Community'ning yillik yakuniy tadbiri. Eng yaxshi spikerlarni to'playmiz, o'tgan yilning asosiy AI trendlarini ko'rib chiqamiz va kelajakka nazar tashlaymiz. Bu shunchaki ma'ruzalar emas — bu jonli muhokama, networking va O'zbekiston AI hamjamiyati birgalikda uchrashuvining muhiti.",
  "ml_gap_subtitle": "Ma'ruzalar va keys tahlillari",
  "ml_gap_desc": "ML Gap — chuqur sho'ng'ish formati. Sanoatdan ekspertlarni taklif qilamiz, ular real keyslarni tahlil qiladi, tajriba ulashadi va jonli savollarga javob beradi. Nazariya uchun nazariya emas — faqat bugun qo'llash mumkin bo'lgan amaliy insight'lar.",
  "ml_party_subtitle": "Networking va hamjamiyat kechasi",
  "ml_party_desc": "ML Party — bu AI hamjamiyati slaydlar uchun emas, odamlar uchun yig'iladigan kecha. Norasmiy muhit, jonli muloqot, yangi tanishuvlar. Aynan shu yerda loyihalar boshlanadi, jamoalar topiladi va keyinchalik haqiqatga aylanadigan g'oyalar paydo bo'ladi.",
  "office_visits_subtitle": "Hamkor kompaniyalarda master-klasslar",
  "office_visits_desc": "MLC talabalari hamkor kompaniyalarning ofislarini ichkaridan ko'rish imkoniyatiga ega. Mutaxassislardan jonli master-klasslar, ish joylari bo'ylab ekskursiyalar, sanoatda allaqachon ishlaydigan odamlarga to'g'ridan-to'g'ri savollar. O'zbekiston AI va tech-kompaniyalarida real ish qanday tashkil etilganini tushunishning eng yaxshi usuli.",
  "ai_hackathon_subtitle": "48 soat ichida AI yechimlarini ishlab chiqish",
  "ai_hackathon_desc": "AI Hackathon — ML Community'ning asosiy tadbiri. Uch kunlik intensiv jamoa ishi, sanoatdan mentorlar, real vazifalar va mukofot fondi. Jamoalar noldan ishlaydigan AI mahsulotlarini quradi. Bu yerda startaplar tug'iladi, hamkorlar topiladi va g'oyalar sinovdan o'tkaziladi.",
  "ml_contest_subtitle": "ML vazifalar bo'yicha musobaqa",
  "ml_contest_desc": "ML Contest — jamoaviy Kaggle musobaqasi. Bir necha soat, real datasetlar, cheklangan vaqt. Uch kishigacha bo'lgan jamoalar mashinali o'rganish masalalarini yechishda musobaqa qiladi. O'z ko'nikmalarini sinab ko'rish, hamfikrlar bilan tanishish va ekspertlardan fikr-mulohaza olishning ajoyib usuli."
} as const;

const enEventCategories = {
  "ai_rewind_subtitle": "Conference and AI trend review",
  "ai_rewind_desc": "AI Rewind is ML Community's annual closing event. We bring together the best speakers, review the key AI trends of the year, and look ahead. This is not just lectures — it's a live discussion, networking, and an atmosphere where Uzbekistan's AI community comes together.",
  "ml_gap_subtitle": "Lectures and case reviews",
  "ml_gap_desc": "ML Gap is a deep-dive format. We invite industry experts who break down real cases, share their experience, and answer live questions. No theory for the sake of theory — only practical insights you can apply today.",
  "ml_party_subtitle": "Networking and community evening",
  "ml_party_desc": "ML Party is an evening where the AI community gathers not for slides but for people. Informal atmosphere, live conversations, new connections. This is where projects start, teams form, and ideas emerge that later become reality.",
  "office_visits_subtitle": "Masterclasses at partner companies",
  "office_visits_desc": "MLC students visit partner company offices from the inside. Live masterclasses from specialists, tours of workspaces, direct questions to people already working in the industry. The best way to understand how real work is organized in AI and tech companies in Uzbekistan.",
  "ai_hackathon_subtitle": "Building AI solutions in 48 hours",
  "ai_hackathon_desc": "AI Hackathon is ML Community's main event. Three days of intensive team work, industry mentors, real challenges, and a prize pool. Teams build working AI products from scratch. This is where startups are born, partners are found, and ideas are put to the test.",
  "ml_contest_subtitle": "ML task competition",
  "ml_contest_desc": "ML Contest is a team-based Kaggle competition. A few hours, real datasets, limited time. Teams of up to three compete in solving machine learning tasks. A great way to test your skills, meet like-minded people, and get feedback from experts."
} as const;

const zhEventCategories = {
  "ai_rewind_subtitle": "AI趋势回顾与会议",
  "ai_rewind_desc": "AI Rewind是ML Community的年度收官活动。我们汇聚最优秀的演讲者，回顾这一年的主要AI趋势，展望未来。这不仅仅是讲座——这是一场充满活力的讨论、社交活动，也是乌兹别克斯坦AI社区共聚一堂的时刻。",
  "ml_gap_subtitle": "讲座与案例分析",
  "ml_gap_desc": "ML Gap是一种深度学习格式。我们邀请行业专家分析真实案例，分享经验并回答现场提问。没有为了理论而理论——只有今天就能应用的实践洞见。",
  "ml_party_subtitle": "社交活动与社区之夜",
  "ml_party_desc": "ML Party是AI社区聚集的夜晚——不是为了幻灯片，而是为了人。轻松的氛围、真实的对话、新的相识。正是在这里，项目开始启动，团队开始组建，想法开始萌芽，最终变成现实。",
  "office_visits_subtitle": "合作公司大师班",
  "office_visits_desc": "MLC学生从内部参观合作公司的办公室。来自专家的现场大师班、工作空间参观、向已在行业工作的人提问。了解乌兹别克斯坦AI和科技公司真实工作方式的最佳途径。",
  "ai_hackathon_subtitle": "48小时内开发AI解决方案",
  "ai_hackathon_desc": "AI Hackathon是ML Community的主要活动。三天紧张的团队协作、来自行业的导师、真实挑战和奖金池。团队从零开始构建可运行的AI产品。这里诞生创业公司，找到合作伙伴，检验想法的可行性。",
  "ml_contest_subtitle": "ML任务竞赛",
  "ml_contest_desc": "ML Contest是一项团队制Kaggle竞赛。几个小时、真实数据集、有限时间。最多三人的团队竞相解决机器学习任务。这是检验技能、结识志同道合者并获得专家反馈的绝佳方式。"
} as const;

const ru = {
  eventCategories: ruEventCategories,
  events: ruEvents,
  zeroOneAi: ruZeroOneAi,
  nav: {
    about: "О нас",
    community: "Сообщество",
    educationGroup: "Образование",
    productsGroup: "Продукты",
    education: "Образование",
    individualEdu: "Индивидуальное",
    corporateEdu: "Корпоративное",
    b2b: "B2B",
    development: "Разработка",
    aiMedia: "ИИ для медиа",
    platform: "Платформа",
    menu: "Открыть меню"
  },
  ticker: [
    "3500+ участников",
    "Сообщество",
    "50+ мероприятий",
    "Полезные связи",
    "400+ выпускников",
    "Стажировка",
    "70% трудоустроенных",
    "В курсе последних трендов и новостей",
    "8+ обученных компаний",
    "Первое и единственное AI-сообщество"
  ],
  footer: {
    text: "Первое и единственное AI-сообщество в Узбекистане. Сообщество, обучение, разработка и AI-медиа.",
    navigation: "Навигация",
    contacts: "Контакты",
    social: "Соцсети",
    home: "Главная",
    slogan: "MLC. AI начинается здесь.",
    confidential: "Конфиденциально. Для внутреннего пользования."
  },
  status: {
    loadingPage: "Загрузка страницы"
  },
  form: {
    name: "Имя",
    phone: "Номер телефона",
    submit: "Отправить",
    sending: "Отправка...",
    successTitle: "Спасибо, мы скоро свяжемся с вами.",
    successText: "Команда MLC получила вашу заявку и вернётся с ответом в ближайшее время.",
    error: "Ошибка отправки. Напишите нам напрямую: @mlc_direct",
    messagePrefix: "Направление",
    options: {
      development: "Разработка",
      corporate: "Корпоративное обучение",
      personal: "Персональное обучение",
      media: "ИИ для медиа",
      partnership: "Сотрудничество"
    }
  },
  lead: {
    eyebrow: "Оставить заявку",
    title: "Сделайте первый шаг.",
    text: "Оставьте имя, номер и направление. Мы поможем подобрать следующий шаг: обучение, разработку, AI для медиа или сотрудничество.",
    communityTitle: "Сделайте первый шаг в сообщество.",
    communityText: "Подпишитесь на соцсети MLC, следите за анонсами мероприятий и будьте ближе к AI-среде.",
    registrationTitle: "Регистрация на мероприятия",
    registrationText: "Анонсы и ссылки на регистрацию появляются в соцсетях MLC.",
    registrationButton: "Смотреть анонсы"
  },
  home: {
    metaTitle: "ML Community Uzbekistan",
    metaDescription: "AI начинается здесь. Сообщество, образование, разработка и AI для медиа.",
    heroTitle: "AI начинается здесь",
    heroSubtitle: "Первое и единственное AI-сообщество в Узбекистане",
    presidentQuote:
      "«Сегодня весь мир вступил в век искусственного интеллекта... Искусственный интеллект выведет человечество на новый этап цивилизации. Побеждает тот, кто ищет и приносит результаты.»",
    presidentSource: "- Шавкат Мирзиёев. Из выступления Президента Республики Узбекистан на совещании 21 октября 2025 года.",
    founderQuote: "«MLC появился, чтобы сделать AI ближе, понятнее и полезнее для людей и развивать Узбекистан через AI.»",
    founderSource: "- Шахриёр Худойбердиев, глава ML Community Uzbekistan.",
    call: "Позвонить",
    partnersTitle: "Сильные партнёры двигаются вместе с нами.",
    helpTitle: "Выберите свою точку входа в AI.",
    more: "Подробнее",
    gallery: {
      community: "Сообщество",
      education: "Образование",
      communityStats: [
        { value: "3500+", label: "участников" },
        { value: "6000+", label: "посещений" },
        { value: "50+", label: "мероприятий" }
      ],
      educationStats: [
        { value: "400+", label: "выпускников" },
        { value: "70%", label: "трудоустроенных" },
        { value: "8+", label: "обученных компаний" }
      ]
    },
    services: [
      {
        title: "Сообщество",
        description: "События, знакомства, практические разборы и среда, где проще войти в AI и расти быстрее."
      },
      {
        title: "Образование",
        description: "Программы для студентов, специалистов и компаний: от базового AI до прикладных корпоративных треков."
      },
      {
        title: "Разработка",
        description: "AI-боты, RAG, автоматизация процессов, внутренние кабинеты и интеграции под реальные бизнес-задачи."
      },
      {
        title: "ИИ для медиа",
        description: "Ролики, product-контент, AI-аватары, визуальные концепты и production-процесс для брендов."
      },
      {
        title: "Реклама, фильм или мультфильм?",
        description: "Создаём медиа, которое выглядит дорого и запоминается: рекламные ролики, генеративные сцены, реалистичные фильмы и stylized-мультфильмы. AI сокращает сроки и стоимость без потери вау-эффекта."
      },
      {
        title: "Начните учиться ИИ сейчас",
        description: "Переходите на платформу 01AI и входите в AI-сферу уже сегодня. Учитесь в удобном темпе, получайте доступ к актуальным материалам и практическим трекам, которые помогут вам быстрее выйти в профессию."
      }
    ]
  },
  about: {
    metaTitle: "О нас | MLC",
    metaDescription: "MLC развивает AI-сообщество, образование и прикладные AI-проекты в Узбекистане.",
    title: "О MLC",
    teamTitle: "Команда MLC",
    stats: [
      { value: "3500+", label: "участников" },
      { value: "50+", label: "мероприятий" },
      { value: "4", label: "ключевых направления" }
    ],
    founderName: "Шахриёр Худойбердиев",
    founderRole: "Основатель MLC",
    founderTitle: "От основателя",
    founderText:
      "«MLC появился, чтобы сделать AI ближе, понятнее и полезнее для людей. Мы хотим, чтобы в Узбекистане было больше специалистов, сильных команд, технологичных компаний и практических AI-проектов, которые дают реальный результат.»",
    missionCards: [
      { title: "Миссия", text: "Развивать Узбекистан через ИИ." },
      { title: "Цели", text: "Вырастить сильную AI-экосистему: больше специалистов, проектов, компаний и реальных внедрений." },
      { title: "Для Узбекистана", text: "Помочь стране быстрее входить в новую технологическую эпоху через знания, связи, продукты и практику." }
    ],
    focusTitle: "На чем мы фокусируемся",
    focusAreas: [
      { title: "Сообщество", text: "Собираем людей вокруг событий, нетворкинга, обмена опытом и живой AI-среды." },
      { title: "Образование", text: "Помогаем людям и компаниям осваивать AI через практические программы и прикладные форматы." },
      { title: "Разработка", text: "Запускаем прикладные AI-решения, автоматизации, ассистентов и интеграции для бизнеса." },
      { title: "AI Media", text: "Создаем визуальные концепты, ролики, social-креативы и AI-production для брендов." }
    ],
    valueTitle: "Что мы даем людям и стране",
    values: [
      "понятный вход в AI без одиночества и хаоса",
      "доступ к мероприятиям, экспертам, менторам и партнерам",
      "практические навыки, которые можно применять в работе",
      "карьерные и проектные возможности внутри AI-среды",
      "сильное окружение людей, которые двигают AI вперед"
    ]
  },
  community: {
    metaTitle: "Сообщество | MLC",
    metaDescription: "AI-сообщество MLC: мероприятия, знакомства, практика и рост.",
    title: "AI Сообщество",
    stats: [
      { value: "3500+", label: "участников" },
      { value: "50+", label: "мероприятий" },
      { value: "6000+", label: "посещений" }
    ],
    formatsTitle: "Что происходит внутри сообщества",
    formats: [
      {
        title: "Митапы и лекции",
        text: "Встречи с практиками AI, founders, инженерами и продуктовыми командами, где разбираем реальные кейсы.",
        items: ["AI-тренды", "прикладные кейсы", "вопросы с экспертами"]
      },
      {
        title: "Нетворкинг",
        text: "Форматы, где участники находят единомышленников, будущих коллег, партнёров, менторов и команды.",
        items: ["знакомства", "карьерные связи", "партнёрства"]
      },
      {
        title: "Практические разборы",
        text: "Разбираем инструменты, промпты, автоматизации, портфолио, идеи проектов и реальные задачи участников.",
        items: ["разборы задач", "AI-инструменты", "практика вместо шума"]
      },
      {
        title: "Большие события",
        text: "Конференции, вечеринки сообщества, демо-дни, публичные дискуссии и коллаборации с партнёрами.",
        items: ["конференции", "demo day", "community party"]
      }
    ],
    pastTitle: "Прошлые мероприятия",
    pastBadge: "фото из сообщества",
    pastEvents: [
      { title: "AI Rewind", meta: "Конференция и обзор AI-трендов" },
      { title: "ML Gap", meta: "Лекции и разборы кейсов" },
      { title: "ML Party", meta: "Нетворкинг и вечер сообщества" },
      { title: "Partner Meetups", meta: "Офис-визиты и мастер-классы" },
      { title: "AI Hackathon", meta: "Команды и реальные AI-продукты" },
      { title: "ML Contest", meta: "Kaggle-челленджи и соревнования" }
    ],
    valueTitle: "Что получает участник",
    valueFlow: ["meet", "learn", "grow"],
    values: [
      "понимание, что реально происходит в AI-сфере",
      "доступ к людям, компаниям, менторам и возможностям",
      "среда, где можно задать вопрос и быстро найти направление",
      "мотивация учиться, запускать проекты и расти в профессии",
      "связь между участниками, бизнесом, образованием и государственными инициативами"
    ],
    joinTitle: "Как присоединиться",
    joinSteps: [
      ["01", "Следить за анонсами", "Подписывайтесь на MLC и выбирайте события, которые подходят по теме и уровню."],
      ["02", "Приходить на встречи", "Знакомьтесь с участниками, задавайте вопросы и включайтесь в обсуждения."],
      ["03", "Расти внутри AI-среды", "Используйте комьюнити как точку входа в обучение, проекты, карьеру и партнёрства."]
    ]
  },
  education: {
    metaTitle: "Образование | MLC",
    metaDescription: "AI-образование MLC: обучение, практика и карьерный рост.",
    title: "AI Обучение",
    stats: [
      { value: "400+", label: "выпускников" },
      { value: "70%", label: "трудоустроенных" },
      { value: "8+", label: "обученных компаний" }
    ],
    companiesTitle: "+8 обученных компаний",
    companiesText: "Мы помогаем командам внедрять AI в работу: от первых инструментов до практических сценариев для ежедневных задач.",
    partnersBadge: "и другие партнёры",
    graduatesTitle: "+400 Выпускников",
    internshipTitle: "Стажировка",
    formatsTitle: "Что мы даём в AI образовании",
    cohortsTitle: "Прошлые потоки",
    cohortsGraduates: "выпускников",
    cohortsEmployed: "трудоустроены",
    galleryTitle: "Фотографии с уроков",
    formats: [
      {
        title: "Персональное обучение",
        text: "Индивидуальная траектория под цель студента: разбираем текущий уровень, собираем программу, двигаемся в комфортном темпе и доводим навыки до практического результата."
      },
      {
        title: "Групповое обучение студентов",
        text: "Живые уроки, стажировки, визиты в офисы партнёров, мастер-классы, подготовка к интервью и резюме. Это не просто курс, а среда, где студент растёт быстрее."
      },
      {
        title: "Корпоративное обучение",
        text: "Кастомные AI-программы для команд: автоматизация процессов, персональная эффективность, контент, отчётность, презентации, аналитика и другие прикладные сценарии бизнеса."
      },
      {
        title: "Платформа 01AI",
        text: "Онлайн-обучение для всех, кто хочет освоить AI гибко: понятные модули, практические задания и доступ к знаниям без привязки к месту и расписанию."
      }
    ]
  },
  development: {
    metaTitle: "Разработка | MLC",
    metaDescription: "AI-разработка и автоматизация для бизнеса от MLC.",
    title: "AI Разработка",
    stats: [
      { value: "2-4", label: "месяца на MVP" },
      { value: "6-12", label: "месяцев на интеграцию" },
      { value: "1-2", label: "года на AI-продукт" }
    ],
    directionsTitle: "Направления AI Разработки",
    directions: [
      {
        title: "Бот поддержки и первичной обработки заявок",
        text: "Telegram или web-бот, который отвечает на частые вопросы, собирает данные клиента, передает сложные обращения менеджеру и сохраняет историю.",
        timeline: "2-4 месяца",
        items: ["FAQ и сценарии", "интеграция с CRM", "передача оператору"]
      },
      {
        title: "Поиск по документам и базе знаний",
        text: "Внутренний AI-помощник, который ищет ответы в регламентах, договорах, инструкциях, обучающих материалах и показывает источники.",
        timeline: "3-6 месяцев",
        items: ["индексация документов", "цитирование источников", "контроль доступа"]
      },
      {
        title: "Автоматизация операционных задач",
        text: "Решение для повторяющихся процессов: классификация заявок, подготовка черновиков документов, уведомления, статусы и контроль дедлайнов.",
        timeline: "4-8 месяцев",
        items: ["заявки и статусы", "шаблоны документов", "уведомления команде"]
      },
      {
        title: "OCR и обработка документов",
        text: "Система, которая извлекает данные из счетов, актов, заявлений, паспортов или анкет и передает результат в таблицу или CRM.",
        timeline: "3-7 месяцев",
        items: ["распознавание полей", "проверка ошибок", "экспорт в систему"]
      },
      {
        title: "Анализ звонков и качества сервиса",
        text: "Транскрибация звонков, краткие итоги, теги, оценка соблюдения скриптов и понятная аналитика для руководителя отдела продаж или поддержки.",
        timeline: "4-9 месяцев",
        items: ["расшифровка звонков", "оценка скриптов", "отчеты по команде"]
      },
      {
        title: "Продажи, скоринг и прогнозы",
        text: "Модели и дашборды для оценки лидов, прогноза спроса, сегментации клиентов и раннего поиска рисков в данных.",
        timeline: "6-12 месяцев",
        items: ["скоринг лидов", "прогноз спроса", "сегменты клиентов"]
      },
      {
        title: "Внутренний AI-кабинет для команды",
        text: "Единое рабочее место с ролями, шаблонами промптов, историей запросов, доступом к документам и готовыми сценариями для отделов.",
        timeline: "6-14 месяцев",
        items: ["роли сотрудников", "шаблоны задач", "история и контроль"]
      },
      {
        title: "Долгосрочная AI-интеграция в продукт",
        text: "Постепенное внедрение AI-функций в существующий сайт, CRM, LMS, marketplace или внутреннюю платформу с поддержкой и развитием.",
        timeline: "1-2 года",
        items: ["дорожная карта", "API и интерфейсы", "поддержка релизов"]
      }
    ],
    processTitle: "Как мы доводим AI до результата",
    processText: "Команда получает не презентацию про AI, а работающий инструмент, который можно тестировать, измерять и развивать дальше.",
    process: [
      { title: "Аудит и карта возможностей", text: "Находим процессы, где AI даст быстрый эффект, оцениваем данные, риски, стоимость и приоритет запуска." },
      { title: "Прототип за короткий цикл", text: "Собираем рабочий MVP, показываем команде реальный сценарий и быстро уточняем требования на практике." },
      { title: "Интеграция в процессы", text: "Подключаем нужные системы, настраиваем права, сценарии, аналитику и удобный интерфейс для пользователей." },
      { title: "Запуск и сопровождение", text: "Следим за качеством, улучшаем промпты и модели, добавляем новые функции и помогаем команде пользоваться решением." }
    ],
    outputTitle: "Что получает заказчик",
    flow: ["prototype", "integration", "support"],
    outputs: [
      "готовый web-сервис или внутренний инструмент",
      "бот или ассистент под конкретную роль",
      "интеграция с CRM, базой знаний, сайтом или мессенджером",
      "дашборд с метриками качества и использования",
      "документация, обучение команды и план развития"
    ]
  },
  aiMedia: {
    metaTitle: "ИИ для медиа | MLC",
    metaDescription: "Создание AI-медиа, рекламы и визуального контента с MLC.",
    title: "ИИ для медиа",
    stats: [
      { value: "1-2", label: "дня на концепт" },
      { value: "3-7", label: "дней на ролик" },
      { value: "10+", label: "форматов контента" }
    ],
    directionsTitle: "Направления AI Media",
    directions: [
      {
        title: "Рекламные ролики",
        text: "Короткие video ads для продукта, сервиса или мероприятия: идея, сценарий, визуальный стиль, генерация сцен и финальная сборка.",
        timeline: "1-2 недели",
        items: ["15-60 секунд", "script и storyboard", "адаптации под соцсети"]
      },
      {
        title: "Product-контент",
        text: "Визуалы для карточек, баннеров, презентаций и лендингов, где нужно быстро показать продукт в разных сценах и стилях.",
        timeline: "3-7 дней",
        items: ["баннеры и key visual", "product shots", "варианты под кампании"]
      },
      {
        title: "Reels, Shorts и social-креативы",
        text: "Серии коротких вертикальных видео для Instagram, TikTok, YouTube Shorts и Telegram с единым визуальным направлением.",
        timeline: "2-5 дней",
        items: ["вертикальный формат", "серии креативов", "обложки и captions"]
      },
      {
        title: "AI-аватары и объясняющие видео",
        text: "Видео с ведущим или персонажем для обучения, промо, инструкций и внутренних коммуникаций без сложного съемочного процесса.",
        timeline: "1-2 недели",
        items: ["скрипт и голос", "avatar video", "локализация"]
      },
      {
        title: "Визуальные концепты",
        text: "Быстро собираем moodboard, стилистику, кадры и визуальный язык кампании перед полноценным производством.",
        timeline: "2-4 дня",
        items: ["moodboard", "style frames", "visual direction"]
      },
      {
        title: "Storyboards и animatic",
        text: "Помогаем увидеть будущий ролик до продакшна: кадры, последовательность, ритм, примерная динамика и структура истории.",
        timeline: "3-7 дней",
        items: ["раскадровка", "animatic", "структура сцен"]
      },
      {
        title: "Креативные пакеты для запусков",
        text: "Набор визуалов и коротких видео под запуск продукта, курса, мероприятия или рекламной кампании.",
        timeline: "1-3 недели",
        items: ["единый стиль", "несколько форматов", "быстрые итерации"]
      },
      {
        title: "AI-пайплайн для контент-команды",
        text: "Настраиваем процесс, шаблоны и правила, чтобы команда могла регулярно создавать контент быстрее и в одном стиле.",
        timeline: "2-4 недели",
        items: ["шаблоны промптов", "brand rules", "обучение команды"]
      }
    ],
    productionTitle: "Как строится production",
    production: [
      { title: "Бриф и идея", text: "Уточняем продукт, аудиторию, площадки, ограничения бренда и результат, который должен дать контент." },
      { title: "Сценарий и визуальный стиль", text: "Собираем структуру ролика, moodboard, референсы, key frames и понятное направление для утверждения." },
      { title: "AI production", text: "Генерируем сцены, изображения, голос, motion-элементы или avatar-видео и собираем черновую версию." },
      { title: "Финальная сборка", text: "Доводим монтаж, титры, звук, цвет, форматы и экспортируем материалы под нужные платформы." }
    ],
    outputTitle: "Что получает заказчик",
    flow: ["concept", "production", "assets"],
    outputs: [
      "готовые видео для рекламы, соцсетей или презентации",
      "key visual, баннеры, обложки и product shots",
      "storyboard, moodboard и style frames для согласования",
      "адаптации под вертикальный, квадратный и wide-формат",
      "гайд по стилю и процессу для дальнейшего производства"
    ]
  },
  timeline: {
    sectionTitle: "История MLC",
    milestoneLabel: "Milestone",
    sourceLabel: "Источник",
    t_e01_title: "Основание MLC в ИНХА-Университете",
    t_e01_desc: "Первый AI-клуб в Центральной Азии был основан в стенах INHA University in Tashkent. То, что началось как небольшая инициатива студентов и энтузиастов, стало точкой отсчёта для всего AI-сообщества Узбекистана.",
    t_e02_title: "Первый Open Meeting — IT-Park Uzbekistan",
    t_e02_desc: "Первое открытое мероприятие сообщества.",
    t_e03_title: "ML Party — 100+ участников",
    t_e03_desc: "Первый ML Party собрал более 300 участников — и это стало неожиданностью даже для организаторов. Среди гостей — основатель myTaxi и Express24 Акмал Паизиев. Этот вечер доказал: AI-сообщество в Узбекистане есть, и оно большое.",
    t_e04_title: "Запуск видеокурса по Python",
    t_e04_desc: "Первый образовательный продукт MLC.",
    t_e05_title: "Первый ML Gap",
    t_e05_desc: "Новый формат глубоких разборов AI-кейсов.",
    t_e06_title: "AI Rewind 2022 — крупнейший AI-ивент Узбекистана",
    t_e06_desc: "1834 регистрации, 700+ участников, 13 спикеров из крупных местных и международных компаний. Партнёры: Alif Tech, New Uzbekistan University, Digital Generation. Крупнейший AI-ивент Узбекистана на тот момент — когда само понятие AI только зарождалось в массовом сознании.",
    t_e07_title: "Первый mlc.course",
    t_e07_desc: "4 месяца: Machine Learning + soft skills + нетворкинг.",
    t_e08_title: "Первый ML Contest",
    t_e08_desc: "Kaggle-задачи. Победители получают оффер и стажировку.",
    t_e09_title: "President Tech Award — $100 000",
    t_e09_desc: "Участники сообщества MLC выиграли $100 000 на President Tech Award в рамках ICT Week Uzbekistan 2023. Команда: Мафтуна Зиямова, Бехруз Аъзам, Давид Алкамян, Yasmina Ablaeva — медицинский проект Sog'Bo'l. Первая крупная победа MLC на государственном уровне.",
    t_e10_title: "Меморандум с Alif Tech",
    t_e10_desc: "Первый корпоративный партнёр. Стажировки для студентов.",
    t_e11_title: "AI Hackathon — 100 млн сум",
    t_e11_desc: "Первый AI Hackathon от MLC прошёл в New Uzbekistan University с призовым фондом 100 млн сум. Три дня интенсивной командной работы. Победители: 🥇 Shifo AI, 🥈 Data Dreamers, 🥉 ICEMEDAI. Участники удивили масштабом и качеством идей.",
    t_e12_title: "Меморандум с TBC Bank",
    t_e12_desc: "Стажировки студентов MLC в TBC Bank.",
    t_e13_title: "Меморандум с Iman Invest",
    t_e13_desc: "Практика для студентов нового образовательного проекта.",
    t_e14_title: "Запуск онлайн ML Course",
    t_e14_desc: "Первый поток онлайн-курса ML Engineer: 25 студентов, двухмесячная стажировка в Alif Tech, Iman Invest, UzbekVoice. По итогу — 70% трудоустроились. Старт платформы 01AI и нового этапа образовательного направления MLC.",
    t_e15_title: "Партнёрство с UzbekVoiceAI",
    t_e15_desc: "MOU. Совместное развитие AI-образования.",
    t_e16_title: "Партнёрство с Global Move",
    t_e16_desc: "Стажировки и реальные проекты для студентов.",
    t_e17_title: "Top 30 AI Leaders of Uzbekistan",
    t_e17_desc: "Основатель MLC Шахриёр Худойбердиев вошёл в список Top 30 AI Leaders of Uzbekistan 2025. Признание на национальном уровне — результат трёх лет строительства AI-экосистемы страны через сообщество, образование и разработку.",
    t_e18_title: "Запуск курса Data Analyst",
    t_e18_desc: "Ответ на растущий спрос рынка на аналитиков данных.",
    t_e19_title: "ML Contest 2",
    t_e19_desc: "Kaggle-соревнование. Команды до 3 человек, 5 часов, НУУ.",
    t_e20_title: "Стажировка в AI Center при Министерстве цифровых технологий",
    t_e20_desc: "Официальное партнёрство с Sun'iy Intellekt Markazi при Министерстве цифровых технологий Узбекистана. Студенты MLC получили доступ к стажировке в государственном AI-центре — первый шаг к интеграции сообщества с государственной AI-повесткой.",
    t_e21_title: "MLC — партнёр Milliy AI Hackathon (Самарканд)",
    t_e21_desc: "Национальный хакатон. MLC выступает официальным партнёром.",
    t_e22_title: "Мастер-классы в TBC Bank, IMAN, Alif, Click",
    t_e22_desc: "Студенты MLC посещают офисы партнёров — нетворкинг и практика.",
    t_e23_title: "Мастер-класс в Click — карьера в AI/ML",
    t_e23_desc: "Студенты MLC посетили офис Click для мастер-класса по карьере в AI/ML: составление резюме, подготовка к интервью, реальные требования компаний. Формат живого взаимодействия с работодателем — новый стандарт образовательной программы MLC."
  },
  detail: {
    partner: "Партнёр",
    partnerNotFound: "Страница партнёра не найдена",
    partnerNotFoundText: "Похоже, этот материал ещё не добавлен. Вернитесь на главную и откройте другого партнёра.",
    partnerSite: "Сайт партнёра",
    back: "Назад",
    home: "На главную",
    openPhoto: "Открыть фото",
    close: "Закрыть просмотр",
    graduateNotFound: "Страница студента не найдена",
    graduateNotFoundText: "Для этого студента страница пока не готова или ссылка изменилась.",
    backToEducation: "Вернуться в образование",
    studentFallbackTitle: "Студент | ML Community Uzbekistan",
    studentFallbackDescription: "История выпускника ML Community Uzbekistan",
    otherStories: "Другие истории"
  }
} as const;

const uz = {
  eventCategories: uzEventCategories,
  events: uzEvents,
  zeroOneAi: uzZeroOneAi,
  nav: {
    about: "Biz haqimizda",
    community: "Hamjamiyat",
    educationGroup: "Ta'lim",
    productsGroup: "Mahsulotlar",
    education: "Ta'lim",
    individualEdu: "Individual",
    corporateEdu: "Korporativ",
    b2b: "B2B",
    development: "Dasturlash",
    aiMedia: "Media uchun AI",
    platform: "Platforma",
    menu: "Menyuni ochish"
  },
  ticker: [
    "3500+ ishtirokchi",
    "Hamjamiyat",
    "50+ tadbir",
    "Foydali aloqalar",
    "400+ bitiruvchi",
    "Stajirovka",
    "70% ishga joylashgan",
    "So'nggi trend va yangiliklardan xabardor",
    "8+ o'qitilgan kompaniya",
    "Birinchi va yagona AI hamjamiyati"
  ],
  footer: {
    text: "O'zbekistondagi birinchi va yagona AI hamjamiyati. Hamjamiyat, ta'lim, dasturlash va AI media.",
    navigation: "Navigatsiya",
    contacts: "Kontaktlar",
    social: "Ijtimoiy tarmoqlar",
    home: "Asosiy",
    slogan: "MLC. AI shu yerdan boshlanadi.",
    confidential: "Maxfiy. Ichki foydalanish uchun."
  },
  status: { loadingPage: "Sahifa yuklanmoqda" },
  form: {
    name: "Ism",
    phone: "Telefon raqami",
    submit: "Yuborish",
    sending: "Yuborilmoqda...",
    successTitle: "Rahmat, tez orada siz bilan bog'lanamiz.",
    successText: "MLC jamoasi arizangizni oldi va yaqin vaqt ichida javob beradi.",
    error: "Yuborishda xatolik. Bizga to'g'ridan-to'g'ri yozing: @mlc_direct",
    messagePrefix: "Yo'nalish",
    options: {
      development: "Dasturlash",
      corporate: "Korporativ ta'lim",
      personal: "Shaxsiy ta'lim",
      media: "Media uchun AI",
      partnership: "Hamkorlik"
    }
  },
  lead: {
    eyebrow: "Ariza qoldirish",
    title: "Birinchi qadamni qiling.",
    text: "Ism, raqam va yo'nalishni qoldiring. Biz keyingi qadamni tanlashga yordam beramiz: ta'lim, dasturlash, media uchun AI yoki hamkorlik.",
    communityTitle: "Hamjamiyatga birinchi qadamni qiling.",
    communityText: "MLC ijtimoiy tarmoqlariga obuna bo'ling, tadbir anonslarini kuzating va AI muhitiga yaqinroq bo'ling.",
    registrationTitle: "Tadbirlarga ro'yxatdan o'tish",
    registrationText: "Anonslar va ro'yxatdan o'tish havolalari MLC ijtimoiy tarmoqlarida chiqadi.",
    registrationButton: "Anonslarni ko'rish"
  },
  home: {
    metaTitle: "ML Community Uzbekistan",
    metaDescription: "AI shu yerdan boshlanadi. Hamjamiyat, ta'lim, dasturlash va media uchun AI.",
    heroTitle: "AI shu yerdan boshlanadi",
    heroSubtitle: "O'zbekistondagi birinchi va yagona AI hamjamiyati",
    presidentQuote:
      "«Bugun butun dunyo sun'iy intellekt asriga kirdi... Sun'iy intellekt insoniyatni sivilizatsiyaning yangi bosqichiga olib chiqadi. Izlagan va natija keltirgan g'olib bo'ladi.»",
    presidentSource: "- Shavkat Mirziyoyev. 2025-yil 21-oktabrdagi yig'ilishdagi nutqdan.",
    founderQuote: "«MLC AI'ni odamlarga yaqinroq, tushunarliroq va foydaliroq qilish hamda O'zbekistonni AI orqali rivojlantirish uchun paydo bo'lgan.»",
    founderSource: "- Shahriyor Xudoyberdiyev, ML Community Uzbekistan rahbari.",
    call: "Qo'ng'iroq qilish",
    partnersTitle: "Kuchli hamkorlar biz bilan birga harakat qiladi.",
    helpTitle: "AI'ga kirish nuqtangizni tanlang.",
    more: "Batafsil",
    gallery: {
      community: "Hamjamiyat",
      education: "Ta'lim",
      communityStats: [
        { value: "3500+", label: "ishtirokchi" },
        { value: "6000+", label: "tashrif" },
        { value: "50+", label: "tadbir" }
      ],
      educationStats: [
        { value: "400+", label: "bitiruvchi" },
        { value: "70%", label: "ishga joylashgan" },
        { value: "8+", label: "o'qitilgan kompaniya" }
      ]
    },
    services: [
      { title: "Hamjamiyat", description: "Tadbirlar, tanishuvlar, amaliy tahlillar va AI'ga kirish hamda tezroq o'sish uchun muhit." },
      { title: "Ta'lim", description: "Talabalar, mutaxassislar va kompaniyalar uchun dasturlar: bazaviy AI'dan amaliy korporativ treklargacha." },
      { title: "Dasturlash", description: "AI botlar, RAG, jarayonlarni avtomatlashtirish, ichki kabinetlar va biznes vazifalari uchun integratsiyalar." },
      { title: "Media uchun AI", description: "Roliklar, product-kontent, AI avatarlar, vizual konseptlar va brendlar uchun production jarayoni." },
      { title: "Reklama, film yoki multfilm?", description: "Qimmat ko'rinadigan va esda qoladigan media yaratamiz: reklama roliklar, generativ sahnalar, realistik filmlar va stylized multfilmlar. AI vaqt va xarajatni kamaytiradi, wow-effektni yo'qotmasdan." },
      { title: "Hoziroq AI o'rganishni boshlang", description: "01AI platformasiga o'ting va bugun AI sohasiga kiring. Qulay sur'atda o'qing, dolzarb materiallarga va kasbga tezroq chiqishga yordam beradigan amaliy treklarga kirish oling." }
    ]
  },
  about: {
    metaTitle: "Biz haqimizda | MLC",
    metaDescription: "MLC O'zbekistonda AI hamjamiyati, ta'lim va amaliy AI loyihalarini rivojlantiradi.",
    title: "MLC haqida",
    teamTitle: "MLC jamoasi",
    stats: [
      { value: "3500+", label: "ishtirokchi" },
      { value: "50+", label: "tadbir" },
      { value: "4", label: "asosiy yo'nalish" }
    ],
    founderName: "Shahriyor Xudoyberdiyev",
    founderRole: "MLC asoschisi",
    founderTitle: "Asoschi so'zidan",
    founderText:
      "«MLC AI'ni odamlarga yaqinroq, tushunarliroq va foydaliroq qilish uchun paydo bo'lgan. O'zbekistonda ko'proq mutaxassislar, kuchli jamoalar, texnologik kompaniyalar va real natija beradigan amaliy AI loyihalari bo'lishini xohlaymiz.»",
    missionCards: [
      { title: "Missiya", text: "O'zbekistonni AI orqali rivojlantirish." },
      { title: "Maqsadlar", text: "Kuchli AI ekotizimini yaratish: ko'proq mutaxassislar, loyihalar, kompaniyalar va real joriy etishlar." },
      { title: "O'zbekiston uchun", text: "Bilim, aloqalar, mahsulotlar va amaliyot orqali mamlakatning yangi texnologik davrga tezroq kirishiga yordam berish." }
    ],
    focusTitle: "Nimaga fokus qilamiz",
    focusAreas: [
      { title: "Hamjamiyat", text: "Tadbirlar, networking, tajriba almashinuvi va jonli AI muhiti atrofida odamlarni jamlaymiz." },
      { title: "Ta'lim", text: "Odamlar va kompaniyalarga AI'ni amaliy dasturlar va formatlar orqali o'zlashtirishga yordam beramiz." },
      { title: "Dasturlash", text: "Biznes uchun amaliy AI yechimlar, avtomatlashtirishlar, assistentlar va integratsiyalarni ishga tushiramiz." },
      { title: "AI Media", text: "Brendlar uchun vizual konseptlar, roliklar, social-kreativlar va AI-production yaratamiz." }
    ],
    valueTitle: "Odamlar va mamlakatga nima beramiz",
    values: [
      "AI'ga yolg'izlik va tartibsizliksiz tushunarli kirish",
      "tadbirlar, ekspertlar, mentorlar va hamkorlarga kirish",
      "ishda qo'llash mumkin bo'lgan amaliy ko'nikmalar",
      "AI muhitida karyera va loyiha imkoniyatlari",
      "AI'ni oldinga siljitayotgan kuchli insonlar muhiti"
    ]
  },
  community: {
    metaTitle: "Hamjamiyat | MLC",
    metaDescription: "MLC AI hamjamiyati: tadbirlar, tanishuvlar, amaliyot va o'sish.",
    title: "AI Hamjamiyat",
    stats: [
      { value: "3500+", label: "ishtirokchi" },
      { value: "50+", label: "tadbir" },
      { value: "6000+", label: "tashrif" }
    ],
    formatsTitle: "Hamjamiyat ichida nimalar bo'ladi",
    formats: [
      { title: "Mitaplar va ma'ruzalar", text: "AI amaliyotchilari, founderlar, muhandislar va product jamoalar bilan real case'lar tahlili.", items: ["AI trendlari", "amaliy case'lar", "ekspertlar bilan savollar"] },
      { title: "Networking", text: "Ishtirokchilar hamfikrlar, kelajakdagi hamkasblar, hamkorlar, mentorlar va jamoalarni topadigan formatlar.", items: ["tanishuvlar", "karyera aloqalari", "hamkorliklar"] },
      { title: "Amaliy tahlillar", text: "Instrumentlar, promptlar, avtomatlashtirishlar, portfolio, loyiha g'oyalari va real vazifalarni ko'rib chiqamiz.", items: ["vazifalar tahlili", "AI instrumentlar", "shovqin o'rniga amaliyot"] },
      { title: "Katta tadbirlar", text: "Konferensiyalar, hamjamiyat kechalari, demo day, ochiq muhokamalar va hamkorlar bilan kollaboratsiyalar.", items: ["konferensiyalar", "demo day", "community party"] }
    ],
    pastTitle: "Oldingi tadbirlar",
    pastBadge: "hamjamiyat fotolari",
    pastEvents: [
      { title: "AI Rewind", meta: "Konferensiya va AI trendlar sharhi" },
      { title: "ML Gap", meta: "Ma'ruzalar va case tahlillari" },
      { title: "ML Party", meta: "Networking va hamjamiyat oqshomi" },
      { title: "Partner Meetups", meta: "Ofis tashriflari va master-klasslar" },
      { title: "AI Hackathon", meta: "Jamoalar va real AI mahsulotlar" },
      { title: "ML Contest", meta: "Kaggle challenge va musobaqalar" }
    ],
    valueTitle: "Ishtirokchi nima oladi",
    valueFlow: ["meet", "learn", "grow"],
    values: [
      "AI sohasida real nima bo'layotganini tushunish",
      "odamlar, kompaniyalar, mentorlar va imkoniyatlarga kirish",
      "savol berish va yo'nalishni tez topish mumkin bo'lgan muhit",
      "o'qish, loyiha boshlash va kasbda o'sish motivatsiyasi",
      "ishtirokchilar, biznes, ta'lim va davlat tashabbuslari o'rtasidagi aloqa"
    ],
    joinTitle: "Qanday qo'shilish mumkin",
    joinSteps: [
      ["01", "Anonslarni kuzatish", "MLC'ga obuna bo'ling va mavzu hamda darajangizga mos tadbirlarni tanlang."],
      ["02", "Uchrashuvlarga kelish", "Ishtirokchilar bilan tanishing, savollar bering va muhokamalarga qo'shiling."],
      ["03", "AI muhitida o'sish", "Hamjamiyatdan ta'lim, loyihalar, karyera va hamkorlikka kirish nuqtasi sifatida foydalaning."]
    ]
  },
  education: {
    metaTitle: "Ta'lim | MLC",
    metaDescription: "MLC AI ta'limi: o'qish, amaliyot va karyera o'sishi.",
    title: "AI Ta'lim",
    stats: [
      { value: "400+", label: "bitiruvchi" },
      { value: "70%", label: "ishga joylashgan" },
      { value: "8+", label: "o'qitilgan kompaniya" }
    ],
    companiesTitle: "+8 o'qitilgan kompaniya",
    companiesText: "Biz jamoalarga AI'ni ishga joriy etishga yordam beramiz: ilk instrumentlardan kundalik vazifalar uchun amaliy ssenariylargacha.",
    partnersBadge: "va boshqa hamkorlar",
    graduatesTitle: "+400 Bitiruvchi",
    internshipTitle: "Stajirovka",
    formatsTitle: "AI ta'limida nima beramiz",
    cohortsTitle: "O'tgan potoklar",
    cohortsGraduates: "bitiruvchi",
    cohortsEmployed: "ishga joylashgan",
    galleryTitle: "Darslardan suratlar",
    formats: [
      { title: "Shaxsiy ta'lim", text: "Talaba maqsadiga mos individual yo'l: hozirgi darajani ko'ramiz, dastur tuzamiz, qulay tempda harakat qilamiz va ko'nikmalarni amaliy natijaga olib chiqamiz." },
      { title: "Talabalar uchun guruh ta'limi", text: "Jonli darslar, stajirovkalar, hamkor ofislariga tashriflar, master-klasslar, intervyu va rezumega tayyorgarlik. Bu shunchaki kurs emas, talaba tezroq o'sadigan muhit." },
      { title: "Korporativ ta'lim", text: "Jamoalar uchun custom AI dasturlar: jarayonlarni avtomatlashtirish, shaxsiy samaradorlik, kontent, hisobot, prezentatsiya, analitika va biznesning boshqa amaliy ssenariylari." },
      { title: "01AI platformasi", text: "AI'ni moslashuvchan o'rganmoqchi bo'lganlar uchun online ta'lim: tushunarli modullar, amaliy topshiriqlar va joy hamda jadvalga bog'lanmagan bilim." }
    ]
  },
  development: ru.development,
  aiMedia: ru.aiMedia,
  timeline: {
    sectionTitle: "MLC tarixi",
    milestoneLabel: "Milestone",
    sourceLabel: "Manba",
    t_e01_title: "INHA Universitetida MLC tashkil topdi",
    t_e01_desc: "Markaziy Osiyodagi birinchi AI klubi INHA University in Tashkentda tashkil etildi. Talabalar va entuziastlarning kichik tashabbuslari O'zbekistondagi barcha AI hamjamiyatining boshlang'ich nuqtasiga aylandi.",
    t_e02_title: "Birinchi Open Meeting — IT-Park Uzbekistan",
    t_e02_desc: "Hamjamiyatning birinchi ochiq tadbirlari.",
    t_e03_title: "ML Party — 100+ ishtirokchi",
    t_e03_desc: "Birinchi ML Party 300 dan ortiq ishtirokchini bir joyga to'pladi — bu tashkilotchilarning o'zlari uchun ham kutilmagan edi. Mehmonlar orasida myTaxi va Express24 asoschisi Akmal Paiziyev ham bor edi. Bu kecha isbotladi: O'zbekistonda AI hamjamiyati bor va u katta.",
    t_e04_title: "Python video kursi ishga tushdi",
    t_e04_desc: "MLC ning birinchi ta'lim mahsuloti.",
    t_e05_title: "Birinchi ML Gap",
    t_e05_desc: "AI keyslarini chuqur tahlil qilish formati.",
    t_e06_title: "AI Rewind 2022 — O'zbekistondagi eng yirik AI tadbiri",
    t_e06_desc: "1834 ta ro'yxatdan o'tish, 700+ ishtirokchi, mahalliy va xalqaro yirik kompaniyalardan 13 spiker. Hamkorlar: Alif Tech, Yangi O'zbekiston Universiteti, Digital Generation. O'sha paytdagi O'zbekistonning eng yirik AI tadbirlari — AI tushunchasi ommada endigina shakllanayotgan davrda.",
    t_e07_title: "Birinchi mlc.course",
    t_e07_desc: "4 oy: Machine Learning + soft skills + networking.",
    t_e08_title: "Birinchi ML Contest",
    t_e08_desc: "Kaggle vazifalari. G'oliblar offer va stajirovka oladi.",
    t_e09_title: "President Tech Award — $100 000",
    t_e09_desc: "MLC hamjamiyati a'zolari ICT Week Uzbekistan 2023 doirasida President Tech Award'da $100 000 yutib oldi. Jamoa: Maftuna Ziyamova, Behruz A'zam, David Alkamyan, Yasmina Ablaeva — tibbiy loyiha Sog'Bo'l. MLC ning davlat darajasidagi birinchi yirik g'alabasi.",
    t_e10_title: "Alif Tech bilan memorandum",
    t_e10_desc: "Birinchi korporativ hamkor. Talabalar uchun stajirovka.",
    t_e11_title: "AI Hackathon — 100 mln so'm",
    t_e11_desc: "MLC ning birinchi AI Hackathon'i Yangi O'zbekiston Universitetida 100 mln so'm mukofot fondi bilan o'tdi. Uch kunlik intensiv jamoa ishi. G'oliblar: 🥇 Shifo AI, 🥈 Data Dreamers, 🥉 ICEMEDAI. Ishtirokchilar g'oyalarning ko'lami va sifati bilan hayratga soldi.",
    t_e12_title: "TBC Bank bilan memorandum",
    t_e12_desc: "MLC talabalari TBC Bankda stajirovka oladi.",
    t_e13_title: "Iman Invest bilan memorandum",
    t_e13_desc: "Yangi ta'lim loyihasi talabalari uchun amaliyot.",
    t_e14_title: "Online ML Course ishga tushdi",
    t_e14_desc: "ML Engineer online kursining birinchi oqimi: 25 talaba, Alif Tech, Iman Invest, UzbekVoice'da ikki oylik stajirovka. Natijada — 70% ishga joylashdi. 01AI platformasi va MLC ta'lim yo'nalishining yangi bosqichi boshlandi.",
    t_e15_title: "UzbekVoiceAI bilan hamkorlik",
    t_e15_desc: "MOU. AI ta'limini birgalikda rivojlantirish.",
    t_e16_title: "Global Move bilan hamkorlik",
    t_e16_desc: "Talabalar uchun stajirovka va real loyihalar.",
    t_e17_title: "O'zbekistonning Top 30 AI Liderlari",
    t_e17_desc: "MLC asoschisi Shahriyor Xudoyberdiyev 2025 yilgi O'zbekistonning Top 30 AI Leaders ro'yxatiga kirdi. Milliy darajadagi tan olinish — jamiyat, ta'lim va dasturlash orqali mamlakatning AI ekotizimini uch yil davomida qurishning natijasi.",
    t_e18_title: "Data Analyst kursi ishga tushdi",
    t_e18_desc: "Bozordagi tahlilchilar talabiga javob.",
    t_e19_title: "ML Contest 2",
    t_e19_desc: "Kaggle musobaqasi. 3 kishigacha jamoalar, 5 soat, NUU.",
    t_e20_title: "Raqamli texnologiyalar vazirligi AI Markazida stajirovka",
    t_e20_desc: "O'zbekiston Raqamli texnologiyalar vazirligi huzuridagi Sun'iy Intellekt Markazi bilan rasmiy hamkorlik. MLC talabalari davlat AI markazida stajirovka imkoniyatiga ega bo'ldi — hamjamiyatning davlat AI dasturiga integratsiyasi yo'lidagi birinchi qadam.",
    t_e21_title: "MLC — Milliy AI Hackathon hamkori (Samarqand)",
    t_e21_desc: "Milliy xakaton. MLC rasmiy hamkor sifatida ishtirok etdi.",
    t_e22_title: "TBC Bank, IMAN, Alif, Click da master-klasslar",
    t_e22_desc: "MLC talabalari hamkor kompaniyalarda networking va amaliyot.",
    t_e23_title: "Click da master-klass — AI/ML da karyera",
    t_e23_desc: "MLC talabalari AI/ML sohasida karyera bo'yicha masterclass uchun Click ofisiga tashrif buyurdi: rezyume tuzish, intervyuga tayyorgarlik, kompaniyalarning real talablari. Ish beruvchi bilan jonli muloqot formati — MLC ta'lim dasturining yangi standarti."
  },
  detail: {
    partner: "Hamkor",
    partnerNotFound: "Hamkor sahifasi topilmadi",
    partnerNotFoundText: "Bu material hali qo'shilmagan ko'rinadi. Asosiy sahifaga qaytib, boshqa hamkorni oching.",
    partnerSite: "Hamkor sayti",
    back: "Orqaga",
    home: "Asosiyga",
    openPhoto: "Fotoni ochish",
    close: "Ko'rishni yopish",
    graduateNotFound: "Talaba sahifasi topilmadi",
    graduateNotFoundText: "Bu talaba sahifasi hali tayyor emas yoki havola o'zgargan.",
    backToEducation: "Ta'limga qaytish",
    studentFallbackTitle: "Talaba | ML Community Uzbekistan",
    studentFallbackDescription: "ML Community Uzbekistan bitiruvchisi hikoyasi",
    otherStories: "Boshqa hikoyalar"
  }
};

const en = {
  ...ru,
  eventCategories: enEventCategories,
  events: enEvents,
  zeroOneAi: enZeroOneAi,
  nav: { about: "About", community: "Community", educationGroup: "Education", productsGroup: "Products", education: "Education", individualEdu: "Individual", corporateEdu: "Corporate", b2b: "B2B", development: "Development", aiMedia: "AI for media", platform: "Platform", menu: "Open menu" },
  ticker: ["3500+ members", "Community", "50+ events", "Useful connections", "400+ graduates", "Internship", "70% employed", "Latest trends and news", "8+ trained companies", "The first and only AI community"],
  footer: { text: "The first and only AI community in Uzbekistan. Community, education, development, and AI media.", navigation: "Navigation", contacts: "Contacts", social: "Social media", home: "Home", slogan: "MLC. AI starts here.", confidential: "Confidential. For internal use only." },
  status: { loadingPage: "Loading page" },
  form: { name: "Name", phone: "Phone number", submit: "Send", sending: "Sending...", successTitle: "Thank you, we will contact you soon.", successText: "The MLC team received your request and will get back to you shortly.", error: "Submission failed. Message us directly: @mlc_direct", messagePrefix: "Direction", options: { development: "Development", corporate: "Corporate training", personal: "Personal training", media: "AI for media", partnership: "Partnership" } },
  lead: { eyebrow: "Submit request", title: "Take the first step.", text: "Leave your name, number, and direction. We will help choose the next step: education, development, AI for media, or partnership.", communityTitle: "Take the first step into the community.", communityText: "Follow MLC social media, watch event announcements, and stay closer to the AI environment.", registrationTitle: "Event registration", registrationText: "Announcements and registration links appear on MLC social media.", registrationButton: "View announcements" },
  home: {
    ...ru.home,
    metaDescription: "AI starts here. Community, education, development, and AI for media.",
    heroTitle: "AI starts here",
    heroSubtitle: "The first and only AI community in Uzbekistan",
    presidentQuote: "“Today the whole world has entered the age of artificial intelligence... Artificial intelligence will take humanity to a new stage of civilization. The one who searches and delivers results wins.”",
    presidentSource: "- Shavkat Mirziyoyev. From the speech of the President of Uzbekistan at the meeting on October 21, 2025.",
    founderQuote: "“MLC was created to make AI closer, clearer, and more useful for people, and to develop Uzbekistan through AI.”",
    founderSource: "- Shakhriyor Khudoyberdiyev, head of ML Community Uzbekistan.",
    call: "Call",
    partnersTitle: "Strong partners move forward with us.",
    helpTitle: "Choose your entry point into AI.",
    more: "Learn more",
    gallery: { community: "Community", education: "Education", communityStats: [{ value: "3500+", label: "members" }, { value: "6000+", label: "visits" }, { value: "50+", label: "events" }], educationStats: [{ value: "400+", label: "graduates" }, { value: "70%", label: "employed" }, { value: "8+", label: "trained companies" }] },
    services: [
      { title: "Community", description: "Events, connections, practical reviews, and an environment where it is easier to enter AI and grow faster." },
      { title: "Education", description: "Programs for students, specialists, and companies: from basic AI to applied corporate tracks." },
      { title: "Development", description: "AI bots, RAG, process automation, internal workspaces, and integrations for real business tasks." },
      { title: "AI for media", description: "Videos, product content, AI avatars, visual concepts, and a production process for brands." },
      { title: "Ad, film, or animation?", description: "We create media that looks premium and sticks: ad spots, generative scenes, realistic films, and stylized animations. AI cuts time and cost without losing the wow factor." },
      { title: "Start learning AI now", description: "Head to the 01AI platform and enter the AI field today. Learn at your own pace, access up-to-date materials and practical tracks that help you reach the profession faster." }
    ]
  },
  about: {
    ...ru.about,
    metaTitle: "About | MLC",
    metaDescription: "MLC develops the AI community, education, and applied AI projects in Uzbekistan.",
    title: "About MLC",
    teamTitle: "MLC Team",
    stats: [{ value: "3500+", label: "members" }, { value: "50+", label: "events" }, { value: "4", label: "key directions" }],
    founderRole: "Founder of MLC",
    founderTitle: "From the founder",
    founderText: "“MLC was created to make AI closer, clearer, and more useful for people. We want Uzbekistan to have more specialists, strong teams, technology companies, and practical AI projects that create real results.”",
    missionCards: [{ title: "Mission", text: "Develop Uzbekistan through AI." }, { title: "Goals", text: "Grow a strong AI ecosystem: more specialists, projects, companies, and real implementations." }, { title: "For Uzbekistan", text: "Help the country enter the new technological era faster through knowledge, connections, products, and practice." }],
    focusTitle: "What we focus on",
    focusAreas: [{ title: "Community", text: "We bring people together around events, networking, experience exchange, and a living AI environment." }, { title: "Education", text: "We help people and companies learn AI through practical programs and applied formats." }, { title: "Development", text: "We launch applied AI solutions, automation, assistants, and integrations for business." }, { title: "AI Media", text: "We create visual concepts, videos, social creatives, and AI production for brands." }],
    valueTitle: "What we give people and the country",
    values: ["a clear entry into AI without loneliness and chaos", "access to events, experts, mentors, and partners", "practical skills that can be used at work", "career and project opportunities inside the AI environment", "a strong circle of people moving AI forward"]
  },
  community: {
    ...ru.community,
    metaTitle: "Community | MLC",
    metaDescription: "MLC AI community: events, connections, practice, and growth.",
    title: "AI Community",
    stats: [{ value: "3500+", label: "members" }, { value: "50+", label: "events" }, { value: "6000+", label: "visits" }],
    formatsTitle: "What happens inside the community",
    formats: [
      { title: "Meetups and lectures", text: "Meetings with AI practitioners, founders, engineers, and product teams where we review real cases.", items: ["AI trends", "applied cases", "expert Q&A"] },
      { title: "Networking", text: "Formats where participants find like-minded people, future colleagues, partners, mentors, and teams.", items: ["connections", "career links", "partnerships"] },
      { title: "Practical reviews", text: "We review tools, prompts, automations, portfolios, project ideas, and real participant tasks.", items: ["task reviews", "AI tools", "practice over noise"] },
      { title: "Large events", text: "Conferences, community parties, demo days, public discussions, and collaborations with partners.", items: ["conferences", "demo day", "community party"] }
    ],
    pastTitle: "Past events",
    pastBadge: "community photos",
    pastEvents: [{ title: "AI Rewind", meta: "Conference and AI trend review" }, { title: "ML Gap", meta: "Lectures and case reviews" }, { title: "ML Party", meta: "Networking and community evening" }, { title: "Partner Meetups", meta: "Office visits and masterclasses" }, { title: "AI Hackathon", meta: "Teams and real AI products" }, { title: "ML Contest", meta: "Kaggle challenges and competitions" }],
    valueTitle: "What a member gets",
    values: ["understanding of what is really happening in AI", "access to people, companies, mentors, and opportunities", "an environment where you can ask and quickly find direction", "motivation to learn, launch projects, and grow professionally", "connection between members, business, education, and government initiatives"],
    joinTitle: "How to join",
    joinSteps: [["01", "Follow announcements", "Subscribe to MLC and choose events that match your topic and level."], ["02", "Attend meetups", "Meet participants, ask questions, and join discussions."], ["03", "Grow inside the AI environment", "Use the community as an entry point into education, projects, career, and partnerships."]]
  },
  education: { ...ru.education, metaTitle: "Education | MLC", metaDescription: "MLC AI education: learning, practice, and career growth.", title: "AI Education", stats: [{ value: "400+", label: "graduates" }, { value: "70%", label: "employed" }, { value: "8+", label: "trained companies" }], companiesTitle: "+8 trained companies", companiesText: "We help teams bring AI into work: from first tools to practical scenarios for daily tasks.", partnersBadge: "and other partners", graduatesTitle: "+400 Graduates", internshipTitle: "Internship", formatsTitle: "What we provide in AI education", cohortsTitle: "Past cohorts", cohortsGraduates: "graduates", cohortsEmployed: "employed", galleryTitle: "Photos from classes", formats: [{ title: "Personal training", text: "An individual path for the student’s goal: we assess the current level, build a program, move at a comfortable pace, and bring skills to practical results." }, { title: "Group training for students", text: "Live lessons, internships, partner office visits, masterclasses, interview and CV preparation. Not just a course, but an environment where students grow faster." }, { title: "Corporate training", text: "Custom AI programs for teams: process automation, personal productivity, content, reporting, presentations, analytics, and other applied business scenarios." }, { title: "01AI platform", text: "Online learning for everyone who wants to learn AI flexibly: clear modules, practical tasks, and access to knowledge without being tied to place or schedule." }] },
  development: ru.development,
  aiMedia: ru.aiMedia,
  timeline: {
    sectionTitle: "MLC History",
    milestoneLabel: "Milestone",
    sourceLabel: "Source",
    t_e01_title: "MLC founded at INHA University",
    t_e01_desc: "The first AI club in Central Asia was founded at INHA University in Tashkent. What started as a small initiative by students and enthusiasts became the starting point for the entire AI community in Uzbekistan.",
    t_e02_title: "First Open Meeting — IT-Park Uzbekistan",
    t_e02_desc: "The first public community event.",
    t_e03_title: "ML Party — 100+ attendees",
    t_e03_desc: "The first ML Party brought together over 300 participants — a surprise even for the organizers. Among the guests was Akmal Paiziev, founder of myTaxi and Express24. That evening proved that the AI community in Uzbekistan exists and it's big.",
    t_e04_title: "Python video course launched",
    t_e04_desc: "The first educational product from MLC.",
    t_e05_title: "First ML Gap",
    t_e05_desc: "A new format for deep AI case reviews.",
    t_e06_title: "AI Rewind 2022 — largest AI event in Uzbekistan",
    t_e06_desc: "1,834 registrations, 700+ attendees, 13 speakers from major local and international companies. Partners: Alif Tech, New Uzbekistan University, Digital Generation. The largest AI event in Uzbekistan at the time — when the very concept of AI was just emerging in public awareness.",
    t_e07_title: "First mlc.course",
    t_e07_desc: "4 months: Machine Learning + soft skills + networking.",
    t_e08_title: "First ML Contest",
    t_e08_desc: "Kaggle tasks. Winners receive job offers and internships.",
    t_e09_title: "President Tech Award — $100 000",
    t_e09_desc: "MLC community members won $100,000 at the President Tech Award during ICT Week Uzbekistan 2023. Team: Maftuna Ziyamova, Behruz Azam, David Alkamyan, Yasmina Ablaeva — medical project Sog'Bo'l. The first major victory for MLC at the national level.",
    t_e10_title: "MOU with Alif Tech",
    t_e10_desc: "First corporate partner. Internships for students.",
    t_e11_title: "AI Hackathon — 100M UZS prize",
    t_e11_desc: "MLC's first AI Hackathon took place at New Uzbekistan University with a prize pool of 100M UZS. Three days of intensive team work. Winners: 🥇 Shifo AI, 🥈 Data Dreamers, 🥉 ICEMEDAI. Participants amazed with the scale and quality of their ideas.",
    t_e12_title: "MOU with TBC Bank",
    t_e12_desc: "MLC students get internship opportunities at TBC Bank.",
    t_e13_title: "MOU with Iman Invest",
    t_e13_desc: "Practice opportunities for students of the new education project.",
    t_e14_title: "Online ML Course launched",
    t_e14_desc: "The first cohort of the online ML Engineer course: 25 students, two-month internships at Alif Tech, Iman Invest, UzbekVoice. Result — 70% got jobs. The launch of the 01AI platform and a new stage in MLC's education direction.",
    t_e15_title: "Partnership with UzbekVoiceAI",
    t_e15_desc: "MOU. Joint development of AI education.",
    t_e16_title: "Partnership with Global Move",
    t_e16_desc: "Internships and real projects for students.",
    t_e17_title: "Top 30 AI Leaders of Uzbekistan",
    t_e17_desc: "MLC founder Shakhriyor Khudoyberdiyev was included in the Top 30 AI Leaders of Uzbekistan 2025. National-level recognition — the result of three years of building the country's AI ecosystem through community, education, and development.",
    t_e18_title: "Data Analyst course launched",
    t_e18_desc: "A response to growing market demand for data analysts.",
    t_e19_title: "ML Contest 2",
    t_e19_desc: "Kaggle competition. Teams up to 3 people, 5 hours, NUU.",
    t_e20_title: "Internship at AI Center under Ministry of Digital Technologies",
    t_e20_desc: "Official partnership with the AI Center under the Ministry of Digital Technologies of Uzbekistan. MLC students gained access to internships at the state AI center — the first step toward integrating the community with the government AI agenda.",
    t_e21_title: "MLC — partner of Milliy AI Hackathon (Samarkand)",
    t_e21_desc: "National hackathon. MLC participated as official partner.",
    t_e22_title: "Masterclasses at TBC Bank, IMAN, Alif, Click",
    t_e22_desc: "MLC students visited partner offices — networking and practice.",
    t_e23_title: "Click masterclass — career in AI/ML",
    t_e23_desc: "MLC students visited the Click office for a masterclass on careers in AI/ML: resume writing, interview preparation, real company requirements. The format of live interaction with an employer — a new standard for the MLC education program."
  },
  detail: { partner: "Partner", partnerNotFound: "Partner page not found", partnerNotFoundText: "It looks like this material has not been added yet. Return to the home page and open another partner.", partnerSite: "Partner website", back: "Back", home: "Home", openPhoto: "Open photo", close: "Close preview", graduateNotFound: "Student page not found", graduateNotFoundText: "This student page is not ready yet or the link has changed.", backToEducation: "Back to education", studentFallbackTitle: "Student | ML Community Uzbekistan", studentFallbackDescription: "Graduate story of ML Community Uzbekistan", otherStories: "Other stories" }
};

const zh = {
  ...en,
  eventCategories: zhEventCategories,
  events: zhEvents,
  zeroOneAi: zhZeroOneAi,
  nav: { about: "关于我们", community: "社区", educationGroup: "教育", productsGroup: "产品", education: "教育", individualEdu: "个人课程", corporateEdu: "企业课程", b2b: "B2B", development: "开发", aiMedia: "AI 媒体", platform: "平台", menu: "打开菜单" },
  ticker: ["3500+ 成员", "社区", "50+ 活动", "有价值的连接", "400+ 毕业生", "实习", "70% 就业", "关注最新趋势与新闻", "8+ 企业培训", "第一个也是唯一的 AI 社区"],
  footer: { text: "乌兹别克斯坦第一个也是唯一的 AI 社区。社区、教育、开发和 AI 媒体。", navigation: "导航", contacts: "联系方式", social: "社交媒体", home: "首页", slogan: "MLC。AI 从这里开始。", confidential: "机密。仅供内部使用。" },
  status: { loadingPage: "页面加载中" },
  form: { name: "姓名", phone: "电话号码", submit: "发送", sending: "发送中...", successTitle: "谢谢，我们会尽快联系您。", successText: "MLC 团队已收到您的申请，并会尽快回复。", error: "发送失败。请直接联系我们：@mlc_direct", messagePrefix: "方向", options: { development: "开发", corporate: "企业培训", personal: "个人培训", media: "AI 媒体", partnership: "合作" } },
  lead: { eyebrow: "提交申请", title: "迈出第一步。", text: "留下姓名、电话和方向。我们会帮助您选择下一步：教育、开发、AI 媒体或合作。", communityTitle: "迈入社区的第一步。", communityText: "关注 MLC 社交媒体，获取活动公告，更接近 AI 环境。", registrationTitle: "活动报名", registrationText: "活动公告和报名链接会发布在 MLC 社交媒体。", registrationButton: "查看公告" },
  home: { ...en.home, metaDescription: "AI 从这里开始。社区、教育、开发和 AI 媒体。", heroTitle: "AI 从这里开始", heroSubtitle: "乌兹别克斯坦第一个也是唯一的 AI 社区", presidentQuote: "“今天，整个世界进入了人工智能时代……人工智能将把人类带入文明的新阶段。寻找并创造结果的人会胜出。”", presidentSource: "- 沙夫卡特·米尔济约耶夫，摘自 2025 年 10 月 21 日会议讲话。", founderQuote: "“MLC 的出现，是为了让 AI 更接近人、更容易理解、更有用，并通过 AI 发展乌兹别克斯坦。”", founderSource: "- Shahriyor Khudoyberdiyev，ML Community Uzbekistan 负责人。", call: "拨打电话", partnersTitle: "强大的合作伙伴与我们一起前进。", helpTitle: "选择您进入 AI 的入口。", more: "了解更多", gallery: { community: "社区", education: "教育", communityStats: [{ value: "3500+", label: "成员" }, { value: "6000+", label: "访问" }, { value: "50+", label: "活动" }], educationStats: [{ value: "400+", label: "毕业生" }, { value: "70%", label: "就业" }, { value: "8+", label: "培训企业" }] }, services: [{ title: "社区", description: "活动、连接、实践解析，以及更容易进入 AI 并更快成长的环境。" }, { title: "教育", description: "面向学生、专业人士和企业的项目：从基础 AI 到应用型企业课程。" }, { title: "开发", description: "AI 机器人、RAG、流程自动化、内部工作台，以及面向真实业务任务的集成。" }, { title: "AI 媒体", description: "视频、产品内容、AI 虚拟人、视觉概念和品牌制作流程。" }, { title: "广告、电影还是动画？", description: "我们创作看起来高端且令人难忘的媒体内容：广告片、生成式场景、写实电影和风格化动画。AI 缩短周期和成本，同时不失震撼效果。" }, { title: "现在就开始学习 AI", description: "前往 01AI 平台，今天就进入 AI 领域。按照自己的节奏学习，获取最新材料和实践课程，帮助您更快进入职业领域。" }] },
  about: { ...en.about, metaTitle: "关于我们 | MLC", metaDescription: "MLC 在乌兹别克斯坦发展 AI 社区、教育和应用型 AI 项目。", title: "关于 MLC", teamTitle: "MLC 团队", stats: [{ value: "3500+", label: "成员" }, { value: "50+", label: "活动" }, { value: "4", label: "核心方向" }], founderRole: "MLC 创始人", founderTitle: "创始人说", founderText: "“MLC 的出现，是为了让 AI 更接近人、更清晰、更有用。我们希望乌兹别克斯坦拥有更多专家、强大团队、科技公司，以及能够带来真实结果的 AI 项目。”", missionCards: [{ title: "使命", text: "通过 AI 发展乌兹别克斯坦。" }, { title: "目标", text: "建设强大的 AI 生态：更多专家、项目、公司和真实落地。" }, { title: "为了乌兹别克斯坦", text: "通过知识、连接、产品和实践，帮助国家更快进入新的技术时代。" }], focusTitle: "我们的关注点", focusAreas: [{ title: "社区", text: "围绕活动、社交、经验交流和真实 AI 环境连接人。" }, { title: "教育", text: "通过实践项目和应用型形式帮助个人与企业学习 AI。" }, { title: "开发", text: "为企业推出应用型 AI 解决方案、自动化、助手和集成。" }, { title: "AI 媒体", text: "为品牌创建视觉概念、视频、社交创意和 AI 制作。" }], valueTitle: "我们为人们和国家带来什么", values: ["清晰进入 AI，不再孤立和混乱", "接触活动、专家、导师和合作伙伴", "可以在工作中使用的实践技能", "AI 环境中的职业和项目机会", "推动 AI 向前发展的强大圈层"] },
  community: { ...en.community, metaTitle: "社区 | MLC", metaDescription: "MLC AI 社区：活动、连接、实践和成长。", title: "AI 社区", stats: [{ value: "3500+", label: "成员" }, { value: "50+", label: "活动" }, { value: "6000+", label: "访问" }], formatsTitle: "社区内部发生什么", pastTitle: "过往活动", pastBadge: "社区照片", valueTitle: "成员能获得什么", joinTitle: "如何加入" },
  education: { ...en.education, metaTitle: "教育 | MLC", metaDescription: "MLC AI 教育：学习、实践和职业成长。", title: "AI 教育", stats: [{ value: "400+", label: "毕业生" }, { value: "70%", label: "就业" }, { value: "8+", label: "培训企业" }], companiesTitle: "+8 家培训企业", companiesText: "我们帮助团队把 AI 带入工作：从最初的工具到日常任务的实践场景。", partnersBadge: "以及其他合作伙伴", graduatesTitle: "+400 毕业生", internshipTitle: "实习", formatsTitle: "我们在 AI 教育中提供什么", cohortsTitle: "往期班级", cohortsGraduates: "名毕业生", cohortsEmployed: "已就业", galleryTitle: "课堂照片" },
  development: en.development,
  aiMedia: en.aiMedia,
  timeline: {
    sectionTitle: "MLC 历史",
    milestoneLabel: "Milestone",
    sourceLabel: "来源",
    t_e01_title: "MLC 在 INHA 大学成立",
    t_e01_desc: "中亚首个AI俱乐部在塔什干INHA大学成立。从学生和爱好者的小小倡议开始，成为了乌兹别克斯坦整个AI社区的起点。",
    t_e02_title: "首届 Open Meeting — IT-Park Uzbekistan",
    t_e02_desc: "社区第一次公开活动。",
    t_e03_title: "ML Party — 100+ 人参与",
    t_e03_desc: "第一届ML Party汇聚了300多名参与者——这甚至让组织者自己都感到惊喜。嘉宾中有myTaxi和Express24创始人Akmal Paiziev。那个夜晚证明：乌兹别克斯坦的AI社区存在，而且规模不小。",
    t_e04_title: "Python 视频课程上线",
    t_e04_desc: "MLC 第一个教育产品。",
    t_e05_title: "首届 ML Gap",
    t_e05_desc: "深度 AI 案例分析新形式。",
    t_e06_title: "AI Rewind 2022 — 乌兹别克斯坦最大 AI 活动",
    t_e06_desc: "1834次注册，700多名参与者，来自大型本地和国际公司的13位演讲者。合作伙伴：Alif Tech、新乌兹别克斯坦大学、Digital Generation。当时乌兹别克斯坦规模最大的AI活动——彼时AI的概念才刚刚在大众意识中萌芽。",
    t_e07_title: "首届 mlc.course",
    t_e07_desc: "4个月：机器学习 + 软技能 + 社交网络。",
    t_e08_title: "首届 ML Contest",
    t_e08_desc: "Kaggle 任务。获奖者获得工作邀请和实习机会。",
    t_e09_title: "总统科技奖 — 10万美元",
    t_e09_desc: "MLC社区成员在ICT Week Uzbekistan 2023的总统科技奖中赢得了10万美元。团队成员：Maftuna Ziyamova、Behruz Azam、David Alkamyan、Yasmina Ablaeva——医疗项目Sog'Bo'l。这是MLC在国家层面取得的首个重大胜利。",
    t_e10_title: "与 Alif Tech 签署备忘录",
    t_e10_desc: "第一个企业合作伙伴，为学生提供实习机会。",
    t_e11_title: "AI Hackathon — 1亿苏姆奖金",
    t_e11_desc: "MLC首届AI Hackathon在新乌兹别克斯坦大学举行，奖金池达1亿苏姆。三天紧张的团队协作。获奖者：🥇 Shifo AI，🥈 Data Dreamers，🥉 ICEMEDAI。参与者以想法的规模和质量令人叹服。",
    t_e12_title: "与 TBC Bank 签署备忘录",
    t_e12_desc: "MLC 学生获得 TBC Bank 实习机会。",
    t_e13_title: "与 Iman Invest 签署备忘录",
    t_e13_desc: "为新教育项目学生提供实践机会。",
    t_e14_title: "在线 ML 课程上线",
    t_e14_desc: "ML Engineer在线课程第一期：25名学生，在Alif Tech、Iman Invest、UzbekVoice进行为期两个月的实习。结果——70%找到了工作。01AI平台启动，MLC教育方向进入新阶段。",
    t_e15_title: "与 UzbekVoiceAI 合作",
    t_e15_desc: "MOU。共同发展 AI 教育。",
    t_e16_title: "与 Global Move 合作",
    t_e16_desc: "为学生提供实习和真实项目机会。",
    t_e17_title: "乌兹别克斯坦 AI 领袖 Top 30",
    t_e17_desc: "MLC创始人Shakhriyor Khudoyberdiyev入选2025年乌兹别克斯坦AI领袖Top 30。这是国家层面的认可——三年来通过社区、教育和开发建设国家AI生态系统的成果。",
    t_e18_title: "数据分析师课程上线",
    t_e18_desc: "回应市场对数据分析师的强劲需求。",
    t_e19_title: "ML Contest 2",
    t_e19_desc: "Kaggle 比赛，最多3人团队，5小时，NUU 举办。",
    t_e20_title: "在数字技术部 AI 中心实习",
    t_e20_desc: "与乌兹别克斯坦数字技术部下属人工智能中心建立正式合作关系。MLC学生获得了在国家AI中心实习的机会——这是社区融入政府AI议程的第一步。",
    t_e21_title: "MLC — Milliy AI Hackathon 合作伙伴（撒马尔罕）",
    t_e21_desc: "全国黑客马拉松，MLC 担任官方合作伙伴。",
    t_e22_title: "在 TBC Bank、IMAN、Alif、Click 举办大师班",
    t_e22_desc: "MLC 学生访问合作公司办公室，参与网络交流和实践。",
    t_e23_title: "Click 大师班 — AI/ML 职业发展",
    t_e23_desc: "MLC学生参观了Click办公室，参加AI/ML职业发展大师班：简历撰写、面试准备、公司实际要求。与雇主现场互动的形式——MLC教育项目的新标准。"
  },
  detail: { partner: "合作伙伴", partnerNotFound: "未找到合作伙伴页面", partnerNotFoundText: "该材料似乎尚未添加。请返回首页并打开其他合作伙伴。", partnerSite: "合作伙伴网站", back: "返回", home: "首页", openPhoto: "打开照片", close: "关闭预览", graduateNotFound: "未找到学生页面", graduateNotFoundText: "该学生页面尚未准备好，或链接已更改。", backToEducation: "返回教育", studentFallbackTitle: "学生 | ML Community Uzbekistan", studentFallbackDescription: "ML Community Uzbekistan 毕业生故事", otherStories: "其他故事" }
};

const uzDevelopment = {
  ...ru.development,
  metaTitle: "Dasturlash | MLC",
  metaDescription: "MLC biznes uchun AI dasturlash va avtomatlashtirish yechimlarini yaratadi.",
  title: "AI Dasturlash",
  stats: [
    { value: "2-4", label: "MVP uchun oy" },
    { value: "6-12", label: "integratsiya uchun oy" },
    { value: "1-2", label: "AI mahsulot uchun yil" }
  ],
  directionsTitle: "AI Dasturlash yo'nalishlari",
  directions: [
    {
      ...ru.development.directions[0],
      title: "Qo'llab-quvvatlash va arizalarni saralash boti",
      text: "Telegram yoki web-bot tez-tez beriladigan savollarga javob beradi, mijoz ma'lumotlarini yig'adi, murakkab murojaatlarni menejerga uzatadi va tarixni saqlaydi.",
      timeline: "2-4 oy",
      items: ["FAQ va ssenariylar", "CRM bilan integratsiya", "operatorga uzatish"]
    },
    {
      ...ru.development.directions[1],
      title: "Hujjatlar va bilimlar bazasi bo'yicha qidiruv",
      text: "Reglamentlar, shartnomalar, instruktsiyalar va o'quv materiallaridan javob topadigan, manbalarni ko'rsatadigan ichki AI yordamchi.",
      timeline: "3-6 oy",
      items: ["hujjatlarni indekslash", "manbalarni keltirish", "kirish huquqlarini nazorat qilish"]
    },
    {
      ...ru.development.directions[2],
      title: "Operatsion vazifalarni avtomatlashtirish",
      text: "Takrorlanadigan jarayonlar uchun yechim: arizalarni tasniflash, hujjat draftlari, bildirishnomalar, statuslar va deadline nazorati.",
      timeline: "4-8 oy",
      items: ["ariza va statuslar", "hujjat shablonlari", "jamoaga bildirishnoma"]
    },
    {
      ...ru.development.directions[3],
      title: "OCR va hujjatlarni qayta ishlash",
      text: "Hisob-faktura, akt, ariza, pasport yoki anketadan ma'lumot ajratib olib, natijani jadval yoki CRM'ga yuboradigan tizim.",
      timeline: "3-7 oy",
      items: ["maydonlarni tanish", "xatolarni tekshirish", "tizimga eksport"]
    },
    {
      ...ru.development.directions[4],
      title: "Qo'ng'iroqlar va servis sifatini tahlil qilish",
      text: "Qo'ng'iroqlar transkripsiyasi, qisqa xulosalar, teglar, skriptlarga rioya etish bahosi va rahbar uchun tushunarli analitika.",
      timeline: "4-9 oy",
      items: ["qo'ng'iroqlarni yozuvga aylantirish", "skriptlarni baholash", "jamoa bo'yicha hisobotlar"]
    },
    {
      ...ru.development.directions[5],
      title: "Sotuv, scoring va prognozlar",
      text: "Lidlarni baholash, talab prognozi, mijoz segmentatsiyasi va ma'lumotlardagi risklarni erta ko'rish uchun modellar va dashboardlar.",
      timeline: "6-12 oy",
      items: ["lid scoring", "talab prognozi", "mijoz segmentlari"]
    },
    {
      ...ru.development.directions[6],
      title: "Jamoa uchun ichki AI kabinet",
      text: "Rollar, prompt shablonlari, so'rovlar tarixi, hujjatlarga kirish va bo'limlar uchun tayyor ssenariylar bilan yagona ish joyi.",
      timeline: "6-14 oy",
      items: ["xodim rollari", "vazifa shablonlari", "tarix va nazorat"]
    },
    {
      ...ru.development.directions[7],
      title: "Mahsulotga uzoq muddatli AI integratsiya",
      text: "Mavjud sayt, CRM, LMS, marketplace yoki ichki platformaga AI funksiyalarini bosqichma-bosqich qo'shish, qo'llab-quvvatlash va rivojlantirish.",
      timeline: "1-2 yil",
      items: ["yo'l xaritasi", "API va interfeyslar", "relizlarni qo'llab-quvvatlash"]
    }
  ],
  processTitle: "AI'ni natijaga qanday olib boramiz",
  processText: "Jamoa AI haqida prezentatsiya emas, sinash, o'lchash va rivojlantirish mumkin bo'lgan ishlaydigan instrument oladi.",
  process: [
    { title: "Audit va imkoniyatlar xaritasi", text: "AI tez natija beradigan jarayonlarni topamiz, ma'lumotlar, risklar, qiymat va ishga tushirish ustuvorligini baholaymiz." },
    { title: "Qisqa siklda prototip", text: "Ishlaydigan MVP yig'amiz, jamoaga real ssenariyni ko'rsatamiz va talablarni amalda tez aniqlaymiz." },
    { title: "Jarayonlarga integratsiya", text: "Kerakli tizimlarni ulaymiz, huquqlar, ssenariylar, analitika va foydalanuvchilar uchun qulay interfeysni sozlaymiz." },
    { title: "Ishga tushirish va qo'llab-quvvatlash", text: "Sifatni kuzatamiz, prompt va modellarni yaxshilaymiz, yangi funksiyalar qo'shamiz va jamoaga yechimdan foydalanishda yordam beramiz." }
  ],
  outputTitle: "Buyurtmachi nima oladi",
  outputs: [
    "tayyor web-servis yoki ichki instrument",
    "aniq rol uchun bot yoki assistent",
    "CRM, bilimlar bazasi, sayt yoki messenjer bilan integratsiya",
    "sifat va foydalanish metrikalari bo'lgan dashboard",
    "hujjatlar, jamoa uchun trening va rivojlanish rejasi"
  ]
};

const enDevelopment = {
  ...ru.development,
  metaTitle: "Development | MLC",
  metaDescription: "AI development and automation for business by MLC.",
  title: "AI Development",
  stats: [
    { value: "2-4", label: "months for MVP" },
    { value: "6-12", label: "months for integration" },
    { value: "1-2", label: "years for AI product" }
  ],
  directionsTitle: "AI Development Directions",
  directions: [
    { ...ru.development.directions[0], title: "Support and lead intake bot", text: "A Telegram or web bot that answers frequent questions, collects client data, routes complex requests to a manager, and keeps the conversation history.", timeline: "2-4 months", items: ["FAQ and scripts", "CRM integration", "operator handoff"] },
    { ...ru.development.directions[1], title: "Search across documents and knowledge bases", text: "An internal AI assistant that finds answers in policies, contracts, instructions, and training materials while showing the source.", timeline: "3-6 months", items: ["document indexing", "source citations", "access control"] },
    { ...ru.development.directions[2], title: "Operational task automation", text: "A solution for repeated workflows: request classification, document drafts, notifications, statuses, and deadline control.", timeline: "4-8 months", items: ["requests and statuses", "document templates", "team notifications"] },
    { ...ru.development.directions[3], title: "OCR and document processing", text: "A system that extracts fields from invoices, acts, applications, passports, or forms and sends the result to a table or CRM.", timeline: "3-7 months", items: ["field recognition", "error checks", "system export"] },
    { ...ru.development.directions[4], title: "Call analysis and service quality", text: "Call transcription, short summaries, tags, script compliance scoring, and clear analytics for sales or support managers.", timeline: "4-9 months", items: ["call transcription", "script scoring", "team reports"] },
    { ...ru.development.directions[5], title: "Sales, scoring, and forecasts", text: "Models and dashboards for lead scoring, demand forecasting, customer segmentation, and early risk detection in data.", timeline: "6-12 months", items: ["lead scoring", "demand forecast", "customer segments"] },
    { ...ru.development.directions[6], title: "Internal AI workspace for teams", text: "One workspace with roles, prompt templates, request history, document access, and ready scenarios for departments.", timeline: "6-14 months", items: ["employee roles", "task templates", "history and control"] },
    { ...ru.development.directions[7], title: "Long-term AI integration into a product", text: "Gradual AI functionality inside an existing website, CRM, LMS, marketplace, or internal platform with support and development.", timeline: "1-2 years", items: ["roadmap", "API and interfaces", "release support"] }
  ],
  processTitle: "How we bring AI to a working result",
  processText: "The team receives not a presentation about AI, but a working tool that can be tested, measured, and improved.",
  process: [
    { title: "Audit and opportunity map", text: "We find processes where AI can create fast impact and assess data, risks, cost, and launch priority." },
    { title: "Prototype in a short cycle", text: "We build a working MVP, show the team a real scenario, and quickly clarify requirements in practice." },
    { title: "Integration into workflows", text: "We connect the required systems, set up permissions, scenarios, analytics, and a convenient user interface." },
    { title: "Launch and support", text: "We monitor quality, improve prompts and models, add new features, and help the team use the solution." }
  ],
  outputTitle: "What the client receives",
  outputs: [
    "a ready web service or internal tool",
    "a bot or assistant for a specific role",
    "integration with CRM, knowledge base, website, or messenger",
    "a dashboard with quality and usage metrics",
    "documentation, team training, and a development plan"
  ]
};

const zhDevelopment = {
  ...enDevelopment,
  metaTitle: "开发 | MLC",
  metaDescription: "MLC 为企业提供 AI 开发与自动化。",
  title: "AI 开发",
  stats: [
    { value: "2-4", label: "个月完成 MVP" },
    { value: "6-12", label: "个月完成集成" },
    { value: "1-2", label: "年打造 AI 产品" }
  ],
  directionsTitle: "AI 开发方向",
  directions: [
    { ...enDevelopment.directions[0], title: "支持与线索处理机器人", text: "Telegram 或网页机器人，回答常见问题、收集客户信息、把复杂请求转给经理，并保存沟通历史。", timeline: "2-4 个月", items: ["FAQ 与脚本", "CRM 集成", "转接人工"] },
    { ...enDevelopment.directions[1], title: "文档与知识库搜索", text: "内部 AI 助手，可在制度、合同、说明和培训材料中查找答案，并显示来源。", timeline: "3-6 个月", items: ["文档索引", "来源引用", "权限控制"] },
    { ...enDevelopment.directions[2], title: "运营任务自动化", text: "面向重复流程的解决方案：请求分类、文档草稿、通知、状态和截止日期控制。", timeline: "4-8 个月", items: ["请求与状态", "文档模板", "团队通知"] },
    { ...enDevelopment.directions[3], title: "OCR 与文档处理", text: "从发票、申请、护照或表格中提取字段，并把结果发送到表格或 CRM。", timeline: "3-7 个月", items: ["字段识别", "错误检查", "导出到系统"] },
    { ...enDevelopment.directions[4], title: "通话分析与服务质量", text: "通话转写、摘要、标签、脚本执行评分，以及给销售或客服主管的清晰分析。", timeline: "4-9 个月", items: ["通话转写", "脚本评分", "团队报告"] },
    { ...enDevelopment.directions[5], title: "销售、评分与预测", text: "用于线索评分、需求预测、客户分群和早期风险发现的模型与仪表盘。", timeline: "6-12 个月", items: ["线索评分", "需求预测", "客户分群"] },
    { ...enDevelopment.directions[6], title: "团队内部 AI 工作台", text: "包含角色、提示词模板、请求历史、文档访问和部门场景的统一工作空间。", timeline: "6-14 个月", items: ["员工角色", "任务模板", "历史与控制"] },
    { ...enDevelopment.directions[7], title: "长期 AI 产品集成", text: "把 AI 功能逐步集成到网站、CRM、LMS、市场平台或内部系统中，并持续支持。", timeline: "1-2 年", items: ["路线图", "API 与界面", "版本支持"] }
  ],
  processTitle: "我们如何把 AI 做到结果",
  processText: "团队获得的不是 AI 演示，而是可以测试、衡量并继续发展的工作工具。",
  process: [
    { title: "审计与机会地图", text: "找到 AI 能快速产生价值的流程，并评估数据、风险、成本和启动优先级。" },
    { title: "短周期原型", text: "搭建可工作的 MVP，向团队展示真实场景，并在实践中快速明确需求。" },
    { title: "集成到流程", text: "连接所需系统，配置权限、场景、分析和易用界面。" },
    { title: "上线与支持", text: "监控质量，优化提示词和模型，增加功能，并帮助团队使用解决方案。" }
  ],
  outputTitle: "客户会得到什么",
  outputs: ["可工作的网页服务或内部工具", "面向具体角色的机器人或助手", "与 CRM、知识库、网站或消息工具的集成", "包含质量与使用指标的仪表盘", "文档、团队培训和发展计划"]
};

const uzAiMedia = {
  ...ru.aiMedia,
  metaTitle: "Media uchun AI | MLC",
  metaDescription: "MLC AI media, reklama va vizual kontent yaratadi.",
  title: "Media uchun AI",
  stats: [
    { value: "1-2", label: "konsept uchun kun" },
    { value: "3-7", label: "rolik uchun kun" },
    { value: "10+", label: "kontent formati" }
  ],
  directionsTitle: "AI Media yo'nalishlari",
  directions: [
    { ...ru.aiMedia.directions[0], title: "Reklama roliklari", text: "Mahsulot, servis yoki tadbir uchun qisqa video ads: g'oya, ssenariy, vizual uslub, sahnalar generatsiyasi va final montaj.", timeline: "1-2 hafta", items: ["15-60 soniya", "script va storyboard", "sotsial tarmoqlar uchun adaptatsiya"] },
    { ...ru.aiMedia.directions[1], title: "Product kontent", text: "Kartochka, banner, prezentatsiya va landinglar uchun mahsulotni turli sahna va uslublarda ko'rsatadigan vizuallar.", timeline: "3-7 kun", items: ["banner va key visual", "product shots", "kampaniya variantlari"] },
    { ...ru.aiMedia.directions[2], title: "Reels, Shorts va social kreativlar", text: "Instagram, TikTok, YouTube Shorts va Telegram uchun yagona vizual yo'nalishdagi vertikal qisqa videolar seriyasi.", timeline: "2-5 kun", items: ["vertikal format", "kreativlar seriyasi", "muqova va captions"] },
    { ...ru.aiMedia.directions[3], title: "AI avatarlar va tushuntiruvchi videolar", text: "Ta'lim, promo, instruktsiya va ichki kommunikatsiyalar uchun murakkab suratga olishsiz boshlovchi yoki personajli video.", timeline: "1-2 hafta", items: ["skript va ovoz", "avatar video", "lokalizatsiya"] },
    { ...ru.aiMedia.directions[4], title: "Vizual konseptlar", text: "To'liq productiondan oldin moodboard, stilistika, kadrlar va kampaniyaning vizual tilini tez yig'amiz.", timeline: "2-4 kun", items: ["moodboard", "style frames", "visual direction"] },
    { ...ru.aiMedia.directions[5], title: "Storyboard va animatic", text: "Rolikni productiondan oldin ko'rish uchun kadrlar, ketma-ketlik, ritm, dinamika va hikoya strukturasini tayyorlaymiz.", timeline: "3-7 kun", items: ["storyboard", "animatic", "sahna struktura"] },
    { ...ru.aiMedia.directions[6], title: "Launch uchun kreativ paketlar", text: "Mahsulot, kurs, tadbir yoki reklama kampaniyasi starti uchun vizuallar va qisqa videolar to'plami.", timeline: "1-3 hafta", items: ["yagona uslub", "bir nechta format", "tez iteratsiyalar"] },
    { ...ru.aiMedia.directions[7], title: "Kontent jamoasi uchun AI pipeline", text: "Jamoa kontentni tezroq va bir uslubda muntazam yaratishi uchun jarayon, shablon va qoidalarni sozlaymiz.", timeline: "2-4 hafta", items: ["prompt shablonlari", "brand rules", "jamoani o'qitish"] }
  ],
  productionTitle: "Production qanday quriladi",
  production: [
    { title: "Brif va g'oya", text: "Mahsulot, auditoriya, platformalar, brend cheklovlari va kontent berishi kerak bo'lgan natijani aniqlaymiz." },
    { title: "Ssenariy va vizual uslub", text: "Rolik strukturasini, moodboard, referenslar, key frames va tasdiqlash uchun aniq yo'nalishni yig'amiz." },
    { title: "AI production", text: "Sahnalar, tasvirlar, ovoz, motion elementlar yoki avatar videoni generatsiya qilib, draft versiyani yig'amiz." },
    { title: "Final yig'ish", text: "Montaj, titr, ovoz, rang, formatlarni yakunlaymiz va materiallarni kerakli platformalar uchun eksport qilamiz." }
  ],
  outputTitle: "Buyurtmachi nima oladi",
  outputs: ["reklama, sotsial tarmoq yoki prezentatsiya uchun tayyor videolar", "key visual, bannerlar, muqovalar va product shots", "kelishish uchun storyboard, moodboard va style frames", "vertikal, kvadrat va wide formatlarga adaptatsiya", "keyingi production uchun uslub va jarayon bo'yicha guide"]
};

const enAiMedia = {
  ...ru.aiMedia,
  metaTitle: "AI for media | MLC",
  metaDescription: "AI media, advertising, and visual content production by MLC.",
  title: "AI for media",
  stats: [
    { value: "1-2", label: "days for concept" },
    { value: "3-7", label: "days for video" },
    { value: "10+", label: "content formats" }
  ],
  directionsTitle: "AI Media Directions",
  directions: [
    { ...ru.aiMedia.directions[0], title: "Advertising videos", text: "Short video ads for a product, service, or event: idea, script, visual style, generated scenes, and final edit.", timeline: "1-2 weeks", items: ["15-60 seconds", "script and storyboard", "social adaptations"] },
    { ...ru.aiMedia.directions[1], title: "Product content", text: "Visuals for cards, banners, presentations, and landing pages where a product needs to be shown quickly in different scenes and styles.", timeline: "3-7 days", items: ["banners and key visual", "product shots", "campaign variants"] },
    { ...ru.aiMedia.directions[2], title: "Reels, Shorts, and social creatives", text: "Series of short vertical videos for Instagram, TikTok, YouTube Shorts, and Telegram with one visual direction.", timeline: "2-5 days", items: ["vertical format", "creative series", "covers and captions"] },
    { ...ru.aiMedia.directions[3], title: "AI avatars and explainer videos", text: "Presenter or character videos for learning, promo, instructions, and internal communications without a heavy shooting process.", timeline: "1-2 weeks", items: ["script and voice", "avatar video", "localization"] },
    { ...ru.aiMedia.directions[4], title: "Visual concepts", text: "We quickly assemble a moodboard, style, frames, and the campaign's visual language before full production.", timeline: "2-4 days", items: ["moodboard", "style frames", "visual direction"] },
    { ...ru.aiMedia.directions[5], title: "Storyboards and animatics", text: "We help preview the future video before production: frames, sequence, rhythm, rough dynamics, and story structure.", timeline: "3-7 days", items: ["storyboard", "animatic", "scene structure"] },
    { ...ru.aiMedia.directions[6], title: "Creative launch packages", text: "A set of visuals and short videos for launching a product, course, event, or advertising campaign.", timeline: "1-3 weeks", items: ["consistent style", "multiple formats", "fast iterations"] },
    { ...ru.aiMedia.directions[7], title: "AI pipeline for content teams", text: "We set up the process, templates, and rules so the team can create content faster and in one style.", timeline: "2-4 weeks", items: ["prompt templates", "brand rules", "team training"] }
  ],
  productionTitle: "How production is built",
  production: [
    { title: "Brief and idea", text: "We clarify the product, audience, platforms, brand limits, and the result the content should deliver." },
    { title: "Script and visual style", text: "We assemble the video structure, moodboard, references, key frames, and a clear direction for approval." },
    { title: "AI production", text: "We generate scenes, images, voice, motion elements, or avatar video and assemble the draft version." },
    { title: "Final assembly", text: "We finalize editing, titles, sound, color, formats, and export materials for the required platforms." }
  ],
  outputTitle: "What the client receives",
  outputs: ["ready videos for ads, social media, or presentations", "key visual, banners, covers, and product shots", "storyboard, moodboard, and style frames for approval", "adaptations for vertical, square, and wide formats", "a style and process guide for future production"]
};

const zhAiMedia = {
  ...enAiMedia,
  metaTitle: "AI 媒体 | MLC",
  metaDescription: "MLC 使用 AI 制作媒体、广告与视觉内容。",
  title: "AI 媒体",
  stats: [
    { value: "1-2", label: "天完成概念" },
    { value: "3-7", label: "天完成视频" },
    { value: "10+", label: "内容格式" }
  ],
  directionsTitle: "AI 媒体方向",
  directions: [
    { ...enAiMedia.directions[0], title: "广告视频", text: "为产品、服务或活动制作短视频广告：创意、脚本、视觉风格、场景生成和最终剪辑。", timeline: "1-2 周", items: ["15-60 秒", "脚本与分镜", "社交平台适配"] },
    { ...enAiMedia.directions[1], title: "产品内容", text: "用于卡片、横幅、演示和落地页的视觉内容，快速展示产品在不同场景和风格中的样子。", timeline: "3-7 天", items: ["横幅与主视觉", "产品图", "活动版本"] },
    { ...enAiMedia.directions[2], title: "Reels、Shorts 与社交创意", text: "为 Instagram、TikTok、YouTube Shorts 和 Telegram 制作统一视觉方向的竖屏短视频系列。", timeline: "2-5 天", items: ["竖屏格式", "创意系列", "封面与字幕"] },
    { ...enAiMedia.directions[3], title: "AI 虚拟人与讲解视频", text: "用于培训、宣传、说明和内部沟通的主持人或角色视频，无需复杂拍摄。", timeline: "1-2 周", items: ["脚本与声音", "虚拟人视频", "本地化"] },
    { ...enAiMedia.directions[4], title: "视觉概念", text: "在完整制作前快速整理 moodboard、风格、关键画面和活动视觉语言。", timeline: "2-4 天", items: ["moodboard", "风格帧", "视觉方向"] },
    { ...enAiMedia.directions[5], title: "分镜与 animatic", text: "在制作前预览视频：画面、顺序、节奏、粗略动态和故事结构。", timeline: "3-7 天", items: ["分镜", "animatic", "场景结构"] },
    { ...enAiMedia.directions[6], title: "上线创意包", text: "为产品、课程、活动或广告上线准备视觉和短视频素材包。", timeline: "1-3 周", items: ["统一风格", "多种格式", "快速迭代"] },
    { ...enAiMedia.directions[7], title: "内容团队 AI 流程", text: "搭建流程、模板和规则，让团队更快并以统一风格持续生产内容。", timeline: "2-4 周", items: ["提示词模板", "品牌规则", "团队培训"] }
  ],
  productionTitle: "Production 如何搭建",
  production: [
    { title: "简报与创意", text: "明确产品、受众、平台、品牌限制，以及内容需要带来的结果。" },
    { title: "脚本与视觉风格", text: "整理视频结构、moodboard、参考、关键画面和可审批的清晰方向。" },
    { title: "AI production", text: "生成场景、图像、声音、动态元素或虚拟人视频，并组装初版。" },
    { title: "最终制作", text: "完成剪辑、字幕、声音、色彩和格式，并导出到所需平台。" }
  ],
  outputTitle: "客户会得到什么",
  outputs: ["用于广告、社交媒体或演示的成品视频", "主视觉、横幅、封面和产品图", "用于确认的分镜、moodboard 和风格帧", "竖屏、方形和宽屏格式适配", "后续制作的风格与流程指南"]
};

const zhCommunity = {
  ...zh.community,
  formats: [
    { title: "Meetup 与讲座", text: "与 AI 实践者、founder、工程师和产品团队见面，拆解真实案例。", items: ["AI 趋势", "应用案例", "专家问答"] },
    { title: "Networking", text: "参与者可以找到同路人、未来同事、合作伙伴、导师和团队。", items: ["认识新伙伴", "职业连接", "合作机会"] },
    { title: "实践拆解", text: "拆解工具、prompt、自动化、作品集、项目想法和参与者真实任务。", items: ["任务拆解", "AI 工具", "少噪音，多实践"] },
    { title: "大型活动", text: "会议、社区聚会、demo day、公开讨论，以及与合作伙伴的联合活动。", items: ["会议", "demo day", "社区聚会"] }
  ],
  pastEvents: [
    { title: "AI Rewind", meta: "AI 趋势会议与回顾" },
    { title: "ML Gap", meta: "讲座与案例拆解" },
    { title: "ML Party", meta: "Networking 与社区夜晚" },
    { title: "Partner Meetups", meta: "企业与大学活动" },
    { title: "AI Hackathon", meta: "团队与真实 AI 产品" },
    { title: "ML Contest", meta: "Kaggle 挑战与竞赛" }
  ],
  valueFlow: ["meet", "learn", "grow"],
  values: ["理解 AI 领域真实发生的事情", "接触人、公司、导师和机会", "可以提问并快速找到方向的环境", "学习、启动项目并职业成长的动力", "连接参与者、企业、教育和政府倡议"],
  joinSteps: [
    ["01", "关注公告", "订阅 MLC，并选择适合主题和水平的活动。"],
    ["02", "参加见面会", "认识参与者、提出问题并加入讨论。"],
    ["03", "在 AI 环境中成长", "把社区作为进入学习、项目、职业和合作的入口。"]
  ]
};

const zhEducation = {
  ...zh.education,
  formats: [
    { title: "个人学习", text: "根据学生目标制定个人路径：评估当前水平、搭建项目、按舒适节奏推进，并把技能带到实践结果。" },
    { title: "学生小组学习", text: "现场课程、实习、合作伙伴办公室访问、masterclass、面试和简历准备。这不只是课程，而是让学生更快成长的环境。" },
    { title: "企业培训", text: "为团队定制 AI 项目：流程自动化、个人效率、内容、报告、演示、分析和其他业务场景。" },
    { title: "01AI 平台", text: "面向所有想灵活学习 AI 的人：清晰模块、实践任务，以及不受地点和时间限制的知识访问。" }
  ]
};

export const siteCopy = {
  ru,
  uz: { ...uz, development: uzDevelopment, aiMedia: uzAiMedia },
  en: { ...en, development: enDevelopment, aiMedia: enAiMedia },
  zh: { ...zh, community: zhCommunity, education: zhEducation, development: zhDevelopment, aiMedia: zhAiMedia }
} as const;

export function getSiteLanguage(language: string | undefined): SiteLanguage {
  const normalized = language?.split("-")[0] as SiteLanguage | undefined;
  return normalized && normalized in siteCopy ? normalized : "ru";
}

export function useSiteCopy() {
  const { i18n } = useTranslation();
  return siteCopy[getSiteLanguage(i18n.language ?? i18n.resolvedLanguage)];
}
