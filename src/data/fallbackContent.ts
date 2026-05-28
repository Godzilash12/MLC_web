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
  {
    id: "m1",
    name: "Алишер Ю.",
    role_mlc: "AI Strategy Mentor",
    role_external: "10+ лет опыта, ex-TBC",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Alisher",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  },
  {
    id: "m2",
    name: "Гузаль Т.",
    role_mlc: "Data Analytics Mentor",
    role_external: "BI, SQL, dashboards",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Guzal",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  },
  {
    id: "m3",
    name: "Жавохир Н.",
    role_mlc: "Automation Mentor",
    role_external: "LLM systems, integrations",
    photo_url: "https://placehold.co/400x400/F6F3FE/2D1B69?text=Javokhir",
    linkedin_url: "https://linkedin.com/company/mlcommunity-uz"
  }
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

export const b2bCasesFallback: B2BCase[] = [
  {
    id: "b1",
    company_name: "Ucell",
    logo_url: "https://placehold.co/220x90/FFFFFF/2D1B69?text=Ucell",
    quote_text:
      "Команда получила практическое понимание AI-инструментов и быстро перенесла их в ежедневные процессы.",
    quote_author: "HR Team, Ucell"
  },
  {
    id: "b2",
    company_name: "TBC Bank",
    logo_url: "https://placehold.co/220x90/FFFFFF/2D1B69?text=TBC+Bank"
  },
  {
    id: "b3",
    company_name: "Alif",
    logo_url: "https://placehold.co/220x90/FFFFFF/2D1B69?text=Alif"
  }
];

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
