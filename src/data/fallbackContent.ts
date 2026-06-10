export type TeamMember = {
  id: string;
  name: string;
  role_mlc: string;
  role_external?: string;
  photo_url?: string;
  linkedin_url?: string;
};

export type EventItem = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  tg_post_url?: string;
};

export type Partner = {
  id: string;
  name: string;
  logo_url: string;
  website_url?: string;
  internal_url?: string;
};

export type Course = {
  id: string;
  title: string;
  direction: "data" | "ml" | "ai";
  description: string;
  partner_name: string;
  partner_logo?: string;
  duration: string;
  price: string;
  platform_url: string;
};

export type B2BCase = {
  id: string;
  company_name: string;
  logo_url?: string;
  quote_text?: string;
  quote_author?: string;
};

export type AiSolution = {
  id: string;
  icon: string;
  title: string;
  description: string;
  detail_text: string;
  features: string[];
  price_from: string;
  duration: string;
};

export const contactLinks = {
  email: "info@mlcommunity.uz",
  phone: "+998 50 100 66 22",
  telegramChannel: "https://t.me/mlc_uz",
  telegramSupport: "https://t.me/mlc_direct",
  telegramShakhriyor: "https://t.me/shakhriyor_kh",
  instagram: "https://instagram.com/mlc_uz",
  linkedin: "https://linkedin.com/company/mlcommunity-uz",
  aiPlatform: "https://01ai.uz"
};

export const stats = [
  { value: 3000, suffix: "+", label: "участников" },
  { value: 2022, suffix: "", label: "год основания" },
  { value: 400, suffix: "+", label: "выпускников" }
];


export const teamFallback: TeamMember[] = [
  {
    id: "1",
    name: "Шахриёр Х.",
    role_mlc: "Директор, MLC",
    role_external: "UzVC, AICA",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Shakhriyor",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  },
  {
    id: "2",
    name: "Азиз К.",
    role_mlc: "Lead Mentor",
    role_external: "Uzum",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Aziz",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  },
  {
    id: "3",
    name: "Нозима Р.",
    role_mlc: "Community Manager",
    role_external: "IT Park",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Nozima",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  },
  {
    id: "4",
    name: "Бехруз М.",
    role_mlc: "Tech Lead",
    role_external: "Global Move",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Bekhruz",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  },
  {
    id: "5",
    name: "Шахзода А.",
    role_mlc: "B2B Manager",
    role_external: "AICA",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Shakhzoda",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  },
  {
    id: "6",
    name: "Диёра С.",
    role_mlc: "Event Manager",
    role_external: "INHA University",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Diyora",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  }
];

export const b2bMentors: TeamMember[] = [
  { id:'b2b-01', name:'Шахриёр Худойбердиев',
    role_mlc:'Руководитель · AI Strategy',
    role_external:'Директор · MLC Academy | Аналитик · UzVC',
    photo_url:'/shakhriyor.avif',
    linkedin_url:'https://linkedin.com/in/shakhriyor-kh' },
  { id:'b2b-02', name:'Tokhir Khudoykulov',
    role_mlc:'Data Analytics Mentor',
    role_external:'Data Analyst · Click',
    photo_url:'/b2b/team/tokhir.webp',
    linkedin_url:'https://www.linkedin.com/in/kh-tokhir/' },
  { id:'b2b-03', name:'Mirkamol Mirkamilov',
    role_mlc:'ML Engineering Mentor',
    role_external:'Machine Learning Engineer',
    photo_url:'/shakhriyor.avif',
    linkedin_url:'https://www.linkedin.com/in/mirkamol-mirkamilov-181007223/' },
  { id:'b2b-04', name:'Javlon Zokirov',
    role_mlc:'AI Specialist Mentor',
    role_external:'AI Specialist',
    photo_url:'/b2b/team/javlon.webp',
    linkedin_url:'https://www.linkedin.com/in/javlon-zokirov-1782b4235/' },
  { id:'b2b-05', name:'Sardor Mamarasulov',
    role_mlc:'Computer Vision Mentor',
    role_external:'Computer Vision Engineer · PhD',
    photo_url:'/b2b/team/sardor.webp',
    linkedin_url:'https://www.linkedin.com/in/sardor-mamarasulov-ph-d-454551110/' },
  { id:'b2b-06', name:'Shakhzod Dadabaev',
    role_mlc:'Data Science Mentor',
    role_external:'Data Science Specialist',
    photo_url:'/b2b/team/shakhzod.webp',
    linkedin_url:'https://www.linkedin.com/in/shakhzod-dadabaev/' },
  { id:'b2b-07', name:'Bekhruz Nutfilloev',
    role_mlc:'ML Engineering Mentor',
    role_external:'Machine Learning Engineer',
    photo_url:'/b2b/team/bekhruz.webp',
    linkedin_url:'https://linkedin.com/in/bekhruz-nutfilloev' },
];

export const aiCreatorTeam: TeamMember[] = [
  {
    id: "a1",
    name: "Фаррух Д.",
    role_mlc: "NLP Engineer",
    role_external: "RAG, chatbots, evaluation",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Farrukh",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  },
  {
    id: "a2",
    name: "Ситора П.",
    role_mlc: "CV Engineer",
    role_external: "Detection, OCR, analytics",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Sitora",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  },
  {
    id: "a3",
    name: "Абдулла Р.",
    role_mlc: "MLOps Lead",
    role_external: "Deployment, observability",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Abdulla",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  }
];

export const eventsFallback: EventItem[] = [
  {
    id: "e1",
    title: "ML Gap",
    description: "Открытая серия лекций и разборов кейсов с лидерами индустрии.",
    event_date: "2025-03-14",
    image_url: "https://placehold.co/1200x630/F6F3FE/2D1B69?text=ML+Gap",
    tg_post_url: contactLinks.telegramChannel
  },
  {
    id: "e2",
    title: "AI Rewind",
    description: "Ежегодная конференция по AI и data-практикам в Узбекистане.",
    event_date: "2025-01-21",
    image_url: "https://placehold.co/1200x630/EDE9F8/2D1B69?text=AI+Rewind",
    tg_post_url: contactLinks.telegramChannel
  },
  {
    id: "e3",
    title: "ML Party",
    description: "Комьюнити-вечер с нетворкингом, анонсами и живыми демо.",
    event_date: "2024-12-11",
    image_url: "https://placehold.co/1200x630/F6F3FE/2D1B69?text=ML+Party",
    tg_post_url: contactLinks.instagram
  },
  {
    id: "e4",
    title: "Guest Lectures",
    description: "Встречи с AI-командами банков, стартапов и госинициатив.",
    event_date: "2024-10-25",
    image_url: "https://placehold.co/1200x630/EDE9F8/2D1B69?text=Guest+Lectures",
    tg_post_url: contactLinks.telegramChannel
  }
];

export const partnersFallback: Partner[] = [
  { id: "p1", name: "Alif Bank", logo_url: "https://placehold.co/200x80/FFFFFF/2D1B69?text=Alif" },
  { id: "p2", name: "TBC Bank", logo_url: "https://placehold.co/200x80/FFFFFF/2D1B69?text=TBC" },
  { id: "p3", name: "IT Park Uzbekistan", logo_url: "https://placehold.co/200x80/FFFFFF/2D1B69?text=IT+Park" },
  { id: "p4", name: "Ministry of Digital Technologies", logo_url: "https://placehold.co/200x80/FFFFFF/2D1B69?text=Ministry" },
  { id: "p5", name: "INHA University", logo_url: "https://placehold.co/200x80/FFFFFF/2D1B69?text=INHA" },
  { id: "p6", name: "UzVC", logo_url: "https://placehold.co/200x80/FFFFFF/2D1B69?text=UzVC" },
  { id: "p7", name: "AICA", logo_url: "https://placehold.co/200x80/FFFFFF/2D1B69?text=AICA" },
  { id: "p8", name: "Global Move", logo_url: "https://placehold.co/200x80/FFFFFF/2D1B69?text=Global+Move" }
];

export const coursesFallback: Course[] = [
  {
    id: "c1",
    title: "Data Analytics",
    direction: "data",
    description: "SQL, Python, BI, статистика и построение продуктовой аналитики.",
    partner_name: "Совместно с TBC Bank",
    duration: "3-4 месяца",
    price: "от 1 200 000 сум",
    platform_url: contactLinks.aiPlatform
  },
  {
    id: "c2",
    title: "ML Engineering",
    direction: "ml",
    description: "Python, машинное обучение, модели, пайплайны и деплой.",
    partner_name: "Совместно с Alif",
    duration: "4-6 месяцев",
    price: "от 1 600 000 сум",
    platform_url: contactLinks.aiPlatform
  },
  {
    id: "c3",
    title: "AI Specialist",
    direction: "ai",
    description: "LLM, prompt engineering, copilots и автоматизация команд.",
    partner_name: "Новый набор 2026",
    duration: "3 месяца",
    price: "от 1 400 000 сум",
    platform_url: contactLinks.aiPlatform
  }
];

export const b2bCasesFallback = [
  {
    id: "case-01",
    company_name: "Ucell / COSCOM",
    logo_url: "",
    employees_trained: 45,
    quote_text: "Команда получила практическое понимание AI-инструментов и быстро перенесла их в ежедневные процессы.",
    quote_author: "HR Team, Ucell",
  },
  {
    id: "case-02",
    company_name: "Webster University",
    logo_url: "/trained-companies/webster.png",
    employees_trained: 30,
    quote_text: "Практический семинар по AI-компетенциям. Участники сразу начали применять инструменты в работе.",
    quote_author: "Webster University Tashkent",
  },
  {
    id: "case-03",
    company_name: "UzEnergoInspektsiya",
    logo_url: "",
    employees_trained: 25,
    quote_text: "AI-обучение для специалистов энергетического сектора. Фокус на автоматизации отчётности.",
    quote_author: "UzEnergoInspektsiya",
  },
  {
    id: "case-04",
    company_name: "Компания",
    logo_url: "",
    employees_trained: 0,
    quote_text: "TODO: добавить отзыв.",
    quote_author: "TODO",
  },
  {
    id: "case-05",
    company_name: "Компания",
    logo_url: "",
    employees_trained: 0,
    quote_text: "TODO: добавить отзыв.",
    quote_author: "TODO",
  },
  {
    id: "case-06",
    company_name: "Компания",
    logo_url: "",
    employees_trained: 0,
    quote_text: "TODO: добавить отзыв.",
    quote_author: "TODO",
  },
];

export const b2bTotalTrained = b2bCasesFallback.reduce(
  (sum, c) => sum + c.employees_trained,
  0
);

export const aiSolutionsFallback: AiSolution[] = [
  {
    id: "s1",
    icon: "💬",
    title: "Чат-боты на базе LLM",
    description: "Telegram, WhatsApp и web-боты с контекстом компании и аналитикой диалогов.",
    detail_text:
      "Разрабатываем умных ассистентов для поддержки, продаж и внутренней помощи командам. Настраиваем тон, знания, интеграции и аналитику.",
    features: [
      "Кастомная логика и personality",
      "Интеграция с CRM и базой знаний",
      "Русский, узбекский и английский языки",
      "Отчеты по диалогам и SLA"
    ],
    price_from: "от $900",
    duration: "от 3 недель"
  },
  {
    id: "s2",
    icon: "🔍",
    title: "RAG-системы",
    description: "Поиск по документам и внутренним регламентам с цитатами и правами доступа.",
    detail_text:
      "Строим внутренние AI-поисковики для документации, процедур и нормативной базы, чтобы команда получала быстрые и проверяемые ответы.",
    features: [
      "Подключение PDF, Notion, Drive, CRM",
      "Ответы с цитатами из источников",
      "Разграничение доступа по ролям",
      "Оценка качества ответов"
    ],
    price_from: "от $1 500",
    duration: "от 4 недель"
  },
  {
    id: "s3",
    icon: "👁",
    title: "Computer Vision",
    description: "OCR, распознавание объектов, контроль качества и видеоаналитика.",
    detail_text:
      "Проектируем CV-решения для контроля операций, распознавания документов и автоматизации визуальных проверок в реальном времени.",
    features: [
      "OCR для документов и чеков",
      "Детекция событий и объектов",
      "Интеграция с IP-камерами",
      "Панели мониторинга"
    ],
    price_from: "от $2 500",
    duration: "от 5 недель"
  },
  {
    id: "s4",
    icon: "📊",
    title: "Аналитика и прогнозирование",
    description: "Модели для спроса, churn, сегментации и финансового планирования.",
    detail_text:
      "Помогаем бизнесу перейти от разрозненной отчетности к моделям, которые подсказывают риски, тренды и точки роста.",
    features: [
      "Прогнозирование спроса и выручки",
      "Сегментация и scoring",
      "Dashboards для менеджмента",
      "ML-мониторинг"
    ],
    price_from: "от $1 800",
    duration: "от 4 недель"
  },
  {
    id: "s5",
    icon: "🔄",
    title: "Автоматизация процессов",
    description: "Копилоты и AI-потоки для рутинных задач внутри команды.",
    detail_text:
      "Автоматизируем обработку заявок, создание контента, ответы по шаблонам и внутренние операции с помощью LLM и workflow-инструментов.",
    features: [
      "Аудит ручных операций",
      "Подключение к CRM и мессенджерам",
      "Human-in-the-loop сценарии",
      "Пошаговая аналитика"
    ],
    price_from: "от $1 000",
    duration: "от 2 недель"
  },
  {
    id: "s6",
    icon: "🗣",
    title: "Voice AI и ASR",
    description: "Распознавание речи, voicebots и анализ звонков.",
    detail_text:
      "Собираем решения для call-центров и сервисных команд: транскрибация, summary, QA-контроль и голосовые ассистенты.",
    features: [
      "ASR и speaker diarization",
      "Анализ качества звонков",
      "Summary и next steps",
      "Поддержка узбекского и русского"
    ],
    price_from: "от $2 000",
    duration: "от 4 недель"
  }
];

export const graduateTestimonials = [
  {
    id: "g1",
    name: "Муниса А.",
    role: "Data Analyst в fintech-компании",
    quote:
      "До курса я не работала с SQL. Сейчас строю отчеты для продуктовой команды и уверенно прохожу собеседования.",
    image: "https://placehold.co/120x120/F6F3FE/2D1B69?text=MA"
  },
  {
    id: "g2",
    name: "Сардор Ж.",
    role: "ML Engineer в startup",
    quote:
      "Самое ценное в 01AI - реальные проекты и менторы, которые показывают индустриальный подход, а не только теорию.",
    image: "https://placehold.co/120x120/F6F3FE/2D1B69?text=SJ"
  },
  {
    id: "g3",
    name: "Шахноза К.",
    role: "AI Specialist в EdTech",
    quote:
      "После программы я собрала первого internal copilot для команды и получила новую роль внутри компании.",
    image: "https://placehold.co/120x120/F6F3FE/2D1B69?text=SK"
  }
];

export const homeFaq = [
  {
    question: "Кто может стать участником MLC?",
    answer:
      "Любой, кто интересуется AI/ML — от студентов до CTO. Комьюнити открыто для тех, кто хочет учиться, общаться и запускать проекты."
  },
  {
    question: "Как попасть на ваши мероприятия?",
    answer:
      "Следите за анонсами в Telegram-канале @mlc_uz. Большинство мероприятий открытые, а регистрация появляется заранее."
  },
  {
    question: "Что такое 01AI.uz?",
    answer:
      "Это образовательная платформа MLC с направлениями Data Analytics, ML Engineering и AI Specialist, созданная вместе с практикующими менторами."
  },
  {
    question: "Как заказать корпоративное обучение?",
    answer:
      "Оставьте заявку на странице B2B или напишите нам в Telegram. Мы проведем короткий аудит и соберем программу под вашу команду."
  },
  {
    question: "Есть ли сертификаты по окончании курсов?",
    answer:
      "Да. Выпускники получают сертификат MLC и, при наличии партнерской программы, совместный сертификат с компанией-партнером."
  },
  {
    question: "Как стать ментором или партнером?",
    answer:
      "Свяжитесь с нами через страницу контактов или напрямую через Telegram. Мы открыты к совместным программам, выступлениям и спецпроектам."
  }
];

export const b2bFaq = [
  {
    question: "Какой минимальный размер группы?",
    answer: "Обычно от 5 до 50+ человек. Подстраиваемся под формат команды и глубину программы."
  },
  {
    question: "Как проходит оплата?",
    answer: "Выставляем счет на юридическое лицо. Возможна поэтапная оплата по согласованному графику."
  },
  {
    question: "Есть ли корпоративный сертификат?",
    answer: "Да, участники получают именной сертификат MLC. При желании добавляем логотип вашей компании."
  },
  {
    question: "Можно ли провести обучение на нашей территории?",
    answer: "Да. Работаем офлайн, онлайн и в гибридном формате, включая выездные интенсивы."
  },
  {
    question: "Сколько длится программа?",
    answer: "От одного дня до трех месяцев. Зависит от целей, уровня команды и объема практики."
  }
];

export const homeEventFormats = [
  {
    title: "AI Rewind",
    description: "Ежегодная конференция по AI-практикам и кейсам региона."
  },
  {
    title: "ML Party",
    description: "Нетворкинг-вечер для комьюнити, выпускников и партнеров."
  },
  {
    title: "ML Gap",
    description: "Серия открытых лекций и профессиональных дискуссий."
  },
  {
    title: "Guest Lectures",
    description: "Встречи с командами компаний, банков и стартапов."
  }
];
export const coreTeam: TeamMember[] = [
  {
    id: 'core-01',
    name: 'Шахриёр Худойбердиев',
    role_mlc: 'Основатель & CEO',
    role_external: 'Аналитик · UzVC | Директор · MLC Academy',
    photo_url: '/shakhriyor.avif',
    linkedin_url: 'https://linkedin.com/in/shakhriyor-kh',
  },
  {
    id: 'core-02',
    name: 'Бехруз Аъзам',
    role_mlc: 'ML Instructor',
    role_external: 'ML Engineer · AlgoFrog',
    photo_url: '/team/behruz.webp',
    linkedin_url: 'https://uz.linkedin.com/in/behruz-azam',
  },
  {
    id: 'core-03',
    name: 'Азимбек Исматуллаев',
    role_mlc: 'Education Manager',
    role_external: 'Project Manager · Ipak Yuli Bank',
    photo_url: '/team/azimbek.webp',
    linkedin_url: 'https://www.linkedin.com/in/azimbek-ismatullaev-b24088207/',
  },
  {
    id: 'core-04',
    name: 'Адам Саидов',
    role_mlc: 'Community',
    role_external: 'Growth Product Manager · BirBir',
    photo_url: '/team/adam.webp',
    linkedin_url: 'https://www.linkedin.com/in/adam-saidov/',
  },
  {
    id: 'core-05',
    name: 'Жасурбек Мамуров',
    role_mlc: 'Community',
    role_external: 'INHA University in Tashkent',
    photo_url: '/team/jasurbek.webp',
    linkedin_url: 'https://www.linkedin.com/in/jmamurov/',
  },
  {
    id: 'core-06',
    name: 'Кобилжон Косимов',
    role_mlc: 'Head of ML Club NewUU',
    role_external: 'COO · RepliUz',
    photo_url: '/team/kobiljon.webp',
    linkedin_url: 'https://uz.linkedin.com/in/kobiljon',
  },
  {
    id: 'core-07',
    name: 'Амир Каримов',
    role_mlc: 'COO ML Course',
    role_external: 'Product Manager · LexoraAI',
    photo_url: '/team/amir.webp',
    linkedin_url: 'https://www.linkedin.com/in/amir-karimov-5ba2732a0/',
  },
  {
    id: 'core-08',
    name: 'Исламбек Каримов',
    role_mlc: 'Community',
    role_external: 'UzVC',
    photo_url: '/team/islambek.webp',
    linkedin_url: 'https://www.linkedin.com/in/islambek-kadyrov-0461a4254/',
  },
  {
    id: 'core-09',
    name: 'Камилла Жураева',
    role_mlc: 'Community',
    role_external: 'Data Scientist · Ucell',
    photo_url: '/team/kamilla.webp',
    linkedin_url: 'https://www.linkedin.com/in/kamilla-juraeva-data-scientist/',
  },
  {
    id: 'core-10',
    name: 'Малика Рустамова',
    role_mlc: 'Community',
    role_external: 'Product Manager · Uzum',
    photo_url: '/team/malika.webp',
    linkedin_url: 'https://www.linkedin.com/in/malika-rustamova-a213bb1a9/',
  },
  {
    id: 'core-11',
    name: 'Нодира Ибрагимова',
    role_mlc: 'Community',
    role_external: 'Director of Launch Lab · School 21',
    photo_url: '/team/nodira.webp',
    linkedin_url: 'https://www.linkedin.com/in/nodira-ibrogimova/',
  },
  {
    id: 'core-12',
    name: 'Назокатхон Шерматова',
    role_mlc: 'Community',
    role_external: 'Product Manager · KDB Bank Uzbekistan',
    photo_url: '/team/nazokatkhon.webp',
    linkedin_url: 'https://www.linkedin.com/in/algonazokat/',
  },
  {
    id: 'core-13',
    name: 'Убайдуллох Пулат',
    role_mlc: 'Community',
    role_external: 'BDC · C-Space',
    photo_url: '/team/ubaydulloh.webp',
    linkedin_url: 'https://www.linkedin.com/in/ubaydullohpulat/',
  },
];

export const coreTeamByLocale: Record<string, typeof coreTeam> = {
  ru: coreTeam,
  uz: [
    { id: 'core-01', name: 'Shahriyor Xudoyberdiyev', role_mlc: "Asoschisi & CEO", role_external: "Tahlilchi · UzVC | Direktor · MLC Academy", photo_url: '/shakhriyor.avif', linkedin_url: 'https://linkedin.com/in/shakhriyor-kh' },
    { id: 'core-02', name: "Behruz A'zam", role_mlc: "ML O'qituvchisi", role_external: "ML Engineer · AlgoFrog", photo_url: '/team/behruz.webp', linkedin_url: 'https://uz.linkedin.com/in/behruz-azam' },
    { id: 'core-03', name: 'Azimbek Ismatullayev', role_mlc: "Ta'lim menejeri", role_external: "Loyiha menejeri · Ipak Yuli Bank", photo_url: '/team/azimbek.webp', linkedin_url: 'https://www.linkedin.com/in/azimbek-ismatullaev-b24088207/' },
    { id: 'core-04', name: 'Adam Saidov', role_mlc: 'Community', role_external: "O'sish mahsulot menejeri · BirBir", photo_url: '/team/adam.webp', linkedin_url: 'https://www.linkedin.com/in/adam-saidov/' },
    { id: 'core-05', name: 'Jasurbek Mamurov', role_mlc: 'Community', role_external: "INHA University in Tashkent", photo_url: '/team/jasurbek.webp', linkedin_url: 'https://www.linkedin.com/in/jmamurov/' },
    { id: 'core-06', name: 'Kobiljon Qosimov', role_mlc: 'ML Club NewUU rahbari', role_external: "COO · RepliUz", photo_url: '/team/kobiljon.webp', linkedin_url: 'https://uz.linkedin.com/in/kobiljon' },
    { id: 'core-07', name: 'Amir Karimov', role_mlc: 'ML Course COO', role_external: "Mahsulot menejeri · LexoraAI", photo_url: '/team/amir.webp', linkedin_url: 'https://www.linkedin.com/in/amir-karimov-5ba2732a0/' },
    { id: 'core-08', name: 'Islambek Karimov', role_mlc: 'Community', role_external: "UzVC", photo_url: '/team/islambek.webp', linkedin_url: 'https://www.linkedin.com/in/islambek-kadyrov-0461a4254/' },
    { id: 'core-09', name: 'Kamilla Juraeva', role_mlc: 'Community', role_external: "Data Scientist · Ucell", photo_url: '/team/kamilla.webp', linkedin_url: 'https://www.linkedin.com/in/kamilla-juraeva-data-scientist/' },
    { id: 'core-10', name: 'Malika Rustamova', role_mlc: 'Community', role_external: "Mahsulot menejeri · Uzum", photo_url: '/team/malika.webp', linkedin_url: 'https://www.linkedin.com/in/malika-rustamova-a213bb1a9/' },
    { id: 'core-11', name: 'Nodira Ibragimova', role_mlc: 'Community', role_external: "Launch Lab direktori · School 21", photo_url: '/team/nodira.webp', linkedin_url: 'https://www.linkedin.com/in/nodira-ibrogimova/' },
    { id: 'core-12', name: "Nazokatxon Shermatova", role_mlc: 'Community', role_external: "Mahsulot menejeri · KDB Bank Uzbekistan", photo_url: '/team/nazokatkhon.webp', linkedin_url: 'https://www.linkedin.com/in/algonazokat/' },
    { id: 'core-13', name: 'Ubaydulloh Pulat', role_mlc: 'Community', role_external: "BDC · C-Space", photo_url: '/team/ubaydulloh.webp', linkedin_url: 'https://www.linkedin.com/in/ubaydullohpulat/' },
  ],
  en: [
    { id: 'core-01', name: 'Shakhriyor Khudoyberdiyev', role_mlc: "Founder & CEO", role_external: "Analyst · UzVC | Director · MLC Academy", photo_url: '/shakhriyor.avif', linkedin_url: 'https://linkedin.com/in/shakhriyor-kh' },
    { id: 'core-02', name: 'Behruz Azam', role_mlc: "ML Instructor", role_external: "ML Engineer · AlgoFrog", photo_url: '/team/behruz.webp', linkedin_url: 'https://uz.linkedin.com/in/behruz-azam' },
    { id: 'core-03', name: 'Azimbek Ismatullayev', role_mlc: "Education Manager", role_external: "Project Manager · Ipak Yuli Bank", photo_url: '/team/azimbek.webp', linkedin_url: 'https://www.linkedin.com/in/azimbek-ismatullaev-b24088207/' },
    { id: 'core-04', name: 'Adam Saidov', role_mlc: 'Community', role_external: "Growth Product Manager · BirBir", photo_url: '/team/adam.webp', linkedin_url: 'https://www.linkedin.com/in/adam-saidov/' },
    { id: 'core-05', name: 'Jasurbek Mamurov', role_mlc: 'Community', role_external: "INHA University in Tashkent", photo_url: '/team/jasurbek.webp', linkedin_url: 'https://www.linkedin.com/in/jmamurov/' },
    { id: 'core-06', name: 'Kobiljon Kosimov', role_mlc: 'Head of ML Club NewUU', role_external: "COO · RepliUz", photo_url: '/team/kobiljon.webp', linkedin_url: 'https://uz.linkedin.com/in/kobiljon' },
    { id: 'core-07', name: 'Amir Karimov', role_mlc: 'COO ML Course', role_external: "Product Manager · LexoraAI", photo_url: '/team/amir.webp', linkedin_url: 'https://www.linkedin.com/in/amir-karimov-5ba2732a0/' },
    { id: 'core-08', name: 'Islambek Karimov', role_mlc: 'Community', role_external: "UzVC", photo_url: '/team/islambek.webp', linkedin_url: 'https://www.linkedin.com/in/islambek-kadyrov-0461a4254/' },
    { id: 'core-09', name: 'Kamilla Juraeva', role_mlc: 'Community', role_external: "Data Scientist · Ucell", photo_url: '/team/kamilla.webp', linkedin_url: 'https://www.linkedin.com/in/kamilla-juraeva-data-scientist/' },
    { id: 'core-10', name: 'Malika Rustamova', role_mlc: 'Community', role_external: "Product Manager · Uzum", photo_url: '/team/malika.webp', linkedin_url: 'https://www.linkedin.com/in/malika-rustamova-a213bb1a9/' },
    { id: 'core-11', name: 'Nodira Ibragimova', role_mlc: 'Community', role_external: "Director of Launch Lab · School 21", photo_url: '/team/nodira.webp', linkedin_url: 'https://www.linkedin.com/in/nodira-ibrogimova/' },
    { id: 'core-12', name: 'Nazokatkhon Shermatova', role_mlc: 'Community', role_external: "Product Manager · KDB Bank Uzbekistan", photo_url: '/team/nazokatkhon.webp', linkedin_url: 'https://www.linkedin.com/in/algonazokat/' },
    { id: 'core-13', name: 'Ubaydulloh Pulat', role_mlc: 'Community', role_external: "BDC · C-Space", photo_url: '/team/ubaydulloh.webp', linkedin_url: 'https://www.linkedin.com/in/ubaydullohpulat/' },
  ],
  zh: [
    { id: 'core-01', name: 'Shakhriyor Khudoyberdiyev', role_mlc: "创始人 & CEO", role_external: "分析师 · UzVC | 总监 · MLC学院", photo_url: '/shakhriyor.avif', linkedin_url: 'https://linkedin.com/in/shakhriyor-kh' },
    { id: 'core-02', name: 'Behruz Azam', role_mlc: "ML讲师", role_external: "ML工程师 · AlgoFrog", photo_url: '/team/behruz.webp', linkedin_url: 'https://uz.linkedin.com/in/behruz-azam' },
    { id: 'core-03', name: 'Azimbek Ismatullayev', role_mlc: "教育经理", role_external: "项目经理 · Ipak Yuli银行", photo_url: '/team/azimbek.webp', linkedin_url: 'https://www.linkedin.com/in/azimbek-ismatullaev-b24088207/' },
    { id: 'core-04', name: 'Adam Saidov', role_mlc: '核心团队', role_external: "增长产品经理 · BirBir", photo_url: '/team/adam.webp', linkedin_url: 'https://www.linkedin.com/in/adam-saidov/' },
    { id: 'core-05', name: 'Jasurbek Mamurov', role_mlc: '核心团队', role_external: "塔什干INHA大学", photo_url: '/team/jasurbek.webp', linkedin_url: 'https://www.linkedin.com/in/jmamurov/' },
    { id: 'core-06', name: 'Kobiljon Kosimov', role_mlc: 'NewUU ML俱乐部负责人', role_external: "COO · RepliUz", photo_url: '/team/kobiljon.webp', linkedin_url: 'https://uz.linkedin.com/in/kobiljon' },
    { id: 'core-07', name: 'Amir Karimov', role_mlc: 'ML课程COO', role_external: "产品经理 · LexoraAI", photo_url: '/team/amir.webp', linkedin_url: 'https://www.linkedin.com/in/amir-karimov-5ba2732a0/' },
    { id: 'core-08', name: 'Islambek Karimov', role_mlc: '核心团队', role_external: "UzVC", photo_url: '/team/islambek.webp', linkedin_url: 'https://www.linkedin.com/in/islambek-kadyrov-0461a4254/' },
    { id: 'core-09', name: 'Kamilla Juraeva', role_mlc: '核心团队', role_external: "数据科学家 · Ucell", photo_url: '/team/kamilla.webp', linkedin_url: 'https://www.linkedin.com/in/kamilla-juraeva-data-scientist/' },
    { id: 'core-10', name: 'Malika Rustamova', role_mlc: '核心团队', role_external: "产品经理 · Uzum", photo_url: '/team/malika.webp', linkedin_url: 'https://www.linkedin.com/in/malika-rustamova-a213bb1a9/' },
    { id: 'core-11', name: 'Nodira Ibragimova', role_mlc: '核心团队', role_external: "Launch Lab总监 · School 21", photo_url: '/team/nodira.webp', linkedin_url: 'https://www.linkedin.com/in/nodira-ibrogimova/' },
    { id: 'core-12', name: 'Nazokatkhon Shermatova', role_mlc: '核心团队', role_external: "产品经理 · KDB银行乌兹别克斯坦", photo_url: '/team/nazokatkhon.webp', linkedin_url: 'https://www.linkedin.com/in/algonazokat/' },
    { id: 'core-13', name: 'Ubaydulloh Pulat', role_mlc: '核心团队', role_external: "BDC · C-Space", photo_url: '/team/ubaydulloh.webp', linkedin_url: 'https://www.linkedin.com/in/ubaydullohpulat/' },
  ],
};
export const zeroOneAiTeam: TeamMember[] = [
  {
    id: "ai-t01",
    name: "Шахриёр Худойбердиев",
    role_mlc: "Founder & CEO",
    photo_url: "/01ai/team/shakhriyor.webp",
    linkedin_url: "https://linkedin.com/in/shakhriyor-kh",
  },
  {
    id: "ai-t02",
    name: "Шамсиддин Худойбердиев",
    role_mlc: "Chief Technology Officer (CTO)",
    photo_url: "/01ai/team/shamsiddin.webp",
    linkedin_url: "https://www.linkedin.com/in/shamsiddin-khudoyberdiev/",
  },
  {
    id: "ai-t03",
    name: "Abdulaziz Akbarov",
    role_mlc: "Lead Backend Engineer",
    photo_url: "/01ai/team/abdulaziz-akbarov.webp",
    linkedin_url: "https://uz.linkedin.com/in/abdulaziz-akbarov-a3186b31a",
  },
  {
    id: "ai-t04",
    name: "Jasurbek Xakimbekov",
    role_mlc: "Lead Frontend Engineer",
    photo_url: "/01ai/team/jasurbek.webp",
    linkedin_url: "https://www.linkedin.com/in/khakimbekov/",
  },
  {
    id: "ai-t05",
    name: "Yusuf Abdurakhimov",
    role_mlc: "Machine Learning Specialist & Lecturer",
    photo_url: "/01ai/team/yusuf.webp",
    linkedin_url: "https://www.linkedin.com/in/mrabdurakhimov/",
  },
  {
    id: "ai-t06",
    name: "Nilufar Kiyamova",
    role_mlc: "Lead Industry Expert & Speaker",
    photo_url: "/01ai/team/nilufar.webp",
    linkedin_url: "https://www.linkedin.com/in/nilufar-kiyamova-54a628380/",
  },
  {
    id: "ai-t07",
    name: "Abdulaziz Abduqaxxorov",
    role_mlc: "Head of Media & Video Production",
    photo_url: "/01ai/team/abdulaziz-abduqaxxorov.webp",
    linkedin_url: "https://www.linkedin.com/in/abdulaziz-abduqaxxorov-600b33237/",
  },
];

export const zeroOneAiTeamByLocale: Record<string, typeof zeroOneAiTeam> = {
  ru: zeroOneAiTeam,
  uz: [
    { id: "ai-t01", name: "Shahriyor Xudoyberdiyev", role_mlc: "Asoschisi & CEO", role_external: "Direktor · MLC Academy", photo_url: "/shakhriyor.avif", linkedin_url: "https://linkedin.com/in/shakhriyor-kh" },
    { id: "ai-t02", name: "Shamsiddin Xudoyberdiyev", role_mlc: "Bosh texnologiya direktori (CTO)", role_external: "", photo_url: "/01ai/team/shamsiddin.webp", linkedin_url: "https://www.linkedin.com/in/shamsiddin-khudoyberdiev/" },
    { id: "ai-t03", name: "Abdulaziz Akbarov", role_mlc: "Bosh Backend Muhandis", role_external: "", photo_url: "/01ai/team/abdulaziz-akbarov.webp", linkedin_url: "https://uz.linkedin.com/in/abdulaziz-akbarov-a3186b31a" },
    { id: "ai-t04", name: "Jasurbek Xakimbekov", role_mlc: "Bosh Frontend Muhandis", role_external: "", photo_url: "/01ai/team/jasurbek.webp", linkedin_url: "https://www.linkedin.com/in/khakimbekov/" },
    { id: "ai-t05", name: "Yusuf Abdurakhimov", role_mlc: "Mashina o'rganish mutaxassisi va o'qituvchi", role_external: "", photo_url: "/01ai/team/yusuf.webp", linkedin_url: "https://www.linkedin.com/in/mrabdurakhimov/" },
    { id: "ai-t06", name: "Nilufar Kiyamova", role_mlc: "Bosh sanoat eksperti va spiker", role_external: "", photo_url: "/01ai/team/nilufar.webp", linkedin_url: "https://www.linkedin.com/in/nilufar-kiyamova-54a628380/" },
    { id: "ai-t07", name: "Abdulaziz Abduqaxxorov", role_mlc: "Media va video ishlab chiqarish bo'limi rahbari", role_external: "", photo_url: "/01ai/team/abdulaziz-abduqaxxorov.webp", linkedin_url: "https://www.linkedin.com/in/abdulaziz-abduqaxxorov-600b33237/" },
  ],
  en: [
    { id: "ai-t01", name: "Shakhriyor Khudoyberdiyev", role_mlc: "Founder & CEO", role_external: "Director · MLC Academy", photo_url: "/shakhriyor.avif", linkedin_url: "https://linkedin.com/in/shakhriyor-kh" },
    { id: "ai-t02", name: "Shamsiddin Khudoyberdiyev", role_mlc: "Chief Technology Officer (CTO)", role_external: "", photo_url: "/01ai/team/shamsiddin.webp", linkedin_url: "https://www.linkedin.com/in/shamsiddin-khudoyberdiev/" },
    { id: "ai-t03", name: "Abdulaziz Akbarov", role_mlc: "Lead Backend Engineer", role_external: "", photo_url: "/01ai/team/abdulaziz-akbarov.webp", linkedin_url: "https://uz.linkedin.com/in/abdulaziz-akbarov-a3186b31a" },
    { id: "ai-t04", name: "Jasurbek Xakimbekov", role_mlc: "Lead Frontend Engineer", role_external: "", photo_url: "/01ai/team/jasurbek.webp", linkedin_url: "https://www.linkedin.com/in/khakimbekov/" },
    { id: "ai-t05", name: "Yusuf Abdurakhimov", role_mlc: "Machine Learning Specialist & Lecturer", role_external: "", photo_url: "/01ai/team/yusuf.webp", linkedin_url: "https://www.linkedin.com/in/mrabdurakhimov/" },
    { id: "ai-t06", name: "Nilufar Kiyamova", role_mlc: "Lead Industry Expert & Speaker", role_external: "", photo_url: "/01ai/team/nilufar.webp", linkedin_url: "https://www.linkedin.com/in/nilufar-kiyamova-54a628380/" },
    { id: "ai-t07", name: "Abdulaziz Abduqaxxorov", role_mlc: "Head of Media & Video Production", role_external: "", photo_url: "/01ai/team/abdulaziz-abduqaxxorov.webp", linkedin_url: "https://www.linkedin.com/in/abdulaziz-abduqaxxorov-600b33237/" },
  ],
  zh: [
    { id: "ai-t01", name: "Shakhriyor Khudoyberdiyev", role_mlc: "\u521b\u59cb\u4eba & CEO", role_external: "\u603b\u76d1 · MLC\u5b66\u9662", photo_url: "/shakhriyor.avif", linkedin_url: "https://linkedin.com/in/shakhriyor-kh" },
    { id: "ai-t02", name: "Shamsiddin Khudoyberdiyev", role_mlc: "\u9996\u5e2d\u6280\u672f\u5b98 (CTO)", role_external: "", photo_url: "/01ai/team/shamsiddin.webp", linkedin_url: "https://www.linkedin.com/in/shamsiddin-khudoyberdiev/" },
    { id: "ai-t03", name: "Abdulaziz Akbarov", role_mlc: "\u9996\u5e2d\u540e\u7aef\u5de5\u7a0b\u5e08", role_external: "", photo_url: "/01ai/team/abdulaziz-akbarov.webp", linkedin_url: "https://uz.linkedin.com/in/abdulaziz-akbarov-a3186b31a" },
    { id: "ai-t04", name: "Jasurbek Xakimbekov", role_mlc: "\u9996\u5e2d\u524d\u7aef\u5de5\u7a0b\u5e08", role_external: "", photo_url: "/01ai/team/jasurbek.webp", linkedin_url: "https://www.linkedin.com/in/khakimbekov/" },
    { id: "ai-t05", name: "Yusuf Abdurakhimov", role_mlc: "\u673a\u5668\u5b66\u4e60\u4e13\u5bb6\u4e0e\u8bb2\u5e08", role_external: "", photo_url: "/01ai/team/yusuf.webp", linkedin_url: "https://www.linkedin.com/in/mrabdurakhimov/" },
    { id: "ai-t06", name: "Nilufar Kiyamova", role_mlc: "\u9996\u5e2d\u884c\u4e1a\u4e13\u5bb6\u4e0e\u6f14\u8bb2\u8005", role_external: "", photo_url: "/01ai/team/nilufar.webp", linkedin_url: "https://www.linkedin.com/in/nilufar-kiyamova-54a628380/" },
    { id: "ai-t07", name: "Abdulaziz Abduqaxxorov", role_mlc: "\u5a92\u4f53\u4e0e\u89c6\u9891\u5236\u4f5c\u8d1f\u8d23\u4eba", role_external: "", photo_url: "/01ai/team/abdulaziz-abduqaxxorov.webp", linkedin_url: "https://www.linkedin.com/in/abdulaziz-abduqaxxorov-600b33237/" },
  ],
};

export interface AiCohort {
  id: string;
  name: string;
  track: string;
  year: number;
  month: string;
  graduates: number;
  employed: number;
  employedText?: string;
  worksAt?: string;
  photo: string;
}

export const zeroOneAiCohorts: AiCohort[] = [
  {
    id: "mle-1",
    name: "MLE-1",
    track: "Machine Learning Engineering",
    year: 2025,
    month: "September 2024 - January 2025",
    graduates: 13,
    employed: 85,
    employedText: "11 of 13",
    worksAt: "Global Movement, IMANUM, TBC Uzbekistan, Alif Tech",
    photo: "/01ai/cohorts/mle-1.webp",
  },
  {
    id: "mle-2",
    name: "MLE-2",
    track: "Machine Learning Engineering",
    year: 2025,
    month: "December 2024 - April 2025",
    graduates: 19,
    employed: 74,
    employedText: "14 of 19",
    worksAt: "UzbekVoice, TBC, Alif",
    photo: "/01ai/cohorts/mle-2.webp",
  },
  {
    id: "mle-3",
    name: "MLE-3",
    track: "Machine Learning Engineer",
    year: 2025,
    month: "December 2025 - May 2025",
    graduates: 24,
    employed: 88,
    employedText: "21 of 24",
    photo: "/01ai/cohorts/mle-3.webp",
  },
  {
    id: "da-1",
    name: "DA-1",
    track: "Data Analytics",
    year: 2026,
    month: "December 2025 - May 2026",
    graduates: 9,
    employed: 56,
    employedText: "5 of 9",
    photo: "/01ai/cohorts/da-1.webp",
  },
];
