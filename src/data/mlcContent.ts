export type StatItem = {
  value: string;
  label: string;
};

export type GalleryItem = {
  title: string;
  meta: string;
  tone: "violet" | "rose" | "blue" | "gold";
  width: "compact" | "medium" | "wide";
  height: "short" | "medium" | "tall";
  imageUrl?: string;
};

export type ServiceCard = {
  number: string;
  title: string;
  description: string;
  emoji: string;
  href: string;
  external?: boolean;
  label: string;
};

export type DetailPageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  stats: StatItem[];
  highlights: Array<{
    title: string;
    text: string;
  }>;
  capabilities: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
};

export const topTickerItems = [
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
];

export const communityStats: StatItem[] = [
  { value: "3500+", label: "участников" },
  { value: "6000+", label: "посещений" },
  { value: "50+", label: "мероприятий" }
];

export const educationStats: StatItem[] = [
  { value: "400+", label: "выпускников" },
  { value: "70%", label: "трудоустроенных" },
  { value: "8+", label: "обученных компаний" }
];

export const partnerNames = [
  "IT Park",
  "AICA",
  "UzVC",
  "INHA",
  "Alif",
  "TBC",
  "Uzum",
  "Ucell",
  "Yandex Cloud",
  "EPAM"
];

export const communityGallery: GalleryItem[] = [
  {
    title: "Community 01",
    meta: "Фото сообщества",
    tone: "violet",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 1.avif"
  },
  {
    title: "Community 02",
    meta: "Фото сообщества",
    tone: "rose",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 10.avif"
  },
  {
    title: "Community 03",
    meta: "Фото сообщества",
    tone: "blue",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 10-1.avif"
  },
  {
    title: "Community 04",
    meta: "Фото сообщества",
    tone: "gold",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 11.avif"
  },
  {
    title: "Community 05",
    meta: "Фото сообщества",
    tone: "violet",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 11-1.avif"
  },
  {
    title: "Community 06",
    meta: "Фото сообщества",
    tone: "rose",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 12-1.avif"
  },
  {
    title: "Community 07",
    meta: "Фото сообщества",
    tone: "blue",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 13-1.avif"
  },
  {
    title: "Community 08",
    meta: "Фото сообщества",
    tone: "rose",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 13-2.avif"
  },
  {
    title: "Community 09",
    meta: "Фото сообщества",
    tone: "gold",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 14.avif"
  },
  {
    title: "Community 10",
    meta: "Фото сообщества",
    tone: "blue",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 2.avif"
  },
  {
    title: "Community 11",
    meta: "Фото сообщества",
    tone: "violet",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 2-1.avif"
  },
  {
    title: "Community 12",
    meta: "Фото сообщества",
    tone: "gold",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 2фa.avif"
  },
  {
    title: "Community 13",
    meta: "Фото сообщества",
    tone: "rose",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 3a.avif"
  },
  {
    title: "Community 14",
    meta: "Фото сообщества",
    tone: "blue",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 4.avif"
  },
  {
    title: "Community 15",
    meta: "Фото сообщества",
    tone: "violet",
    width: "medium",
    height: "medium",
    imageUrl: "/community-avif/Frame 5a.avif"
  }
];

export const educationGallery: GalleryItem[] = [
  {
    title: "Education 01",
    meta: "Фото обучения",
    tone: "blue",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 2.avif"
  },
  {
    title: "Education 02",
    meta: "Фото обучения",
    tone: "violet",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 2-1.avif"
  },
  {
    title: "Education 03",
    meta: "Фото обучения",
    tone: "rose",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 2-3.avif"
  },
  {
    title: "Education 04",
    meta: "Фото обучения",
    tone: "gold",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 3.avif"
  },
  {
    title: "Education 05",
    meta: "Фото обучения",
    tone: "blue",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 3-2.avif"
  },
  {
    title: "Education 06",
    meta: "Фото обучения",
    tone: "violet",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 3-3.avif"
  },
  {
    title: "Education 07",
    meta: "Фото обучения",
    tone: "rose",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 4.avif"
  },
  {
    title: "Education 08",
    meta: "Фото обучения",
    tone: "gold",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 5.avif"
  },
  {
    title: "Education 09",
    meta: "Фото обучения",
    tone: "blue",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 6.avif"
  },
  {
    title: "Education 10",
    meta: "Фото обучения",
    tone: "rose",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 6-1.avif"
  },
  {
    title: "Education 11",
    meta: "Фото обучения",
    tone: "violet",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/Frame 7.avif"
  },
  {
    title: "Education 12",
    meta: "Фото обучения",
    tone: "blue",
    width: "medium",
    height: "medium",
    imageUrl: "/education-avif/photo-2026-04-23-11-17-54.avif"
  }
];

export const serviceCards: ServiceCard[] = [
  {
    number: "01",
    title: "Будьте частью большого сообщества",
    description:
      "Интересуетесь ИИ, но не знаете с чего начать? Или хотите быть в курсе того, что происходит на рынке? Участвуйте в мероприятиях сообщества, узнавайте последние тренды, находите полезные связи и получайте понятные ответы на свои вопросы. Сообщество рядом, чтобы помочь вам начать уверенно.",
    emoji: "🧠",
    href: "/community",
    label: "Перейти на страницу сообщества"
  },
  {
    number: "02",
    title: "Станьте супермэном, обучившись у нас ИИ",
    description:
      "Будьте на сто шагов впереди, делайте больше и зарабатывайте больше, понимая, как использовать ИИ в работе. Мы поможем вам освоить инструменты, практики и мышление, которые уже меняют рынок.",
    emoji: "🦸",
    href: "/education",
    label: "Перейти на страницу обучения"
  },
  {
    number: "03",
    title: "Обучите своих сотрудников ИИ и создайте команду супергероев",
    description:
      "Сделаем так, чтобы ваша команда не просто слышала про AI, а использовала его каждый день. Адаптируем обучение под ваши процессы, роли и цели, чтобы сотрудники быстрее работали, принимали сильные решения и приносили бизнесу больше результата.",
    emoji: "🛡️",
    href: "/education",
    label: "Посмотреть корпоративное обучение"
  },
  {
    number: "04",
    title: "Автоматизируйте и интегрируйте в свой бизнес ИИ",
    description:
      "Находим точки, где бизнес теряет время и деньги, а затем проектируем AI-автоматизации, ботов, внутренние ассистенты и интеграции под ваши процессы. От аудита и прототипа до запуска и сопровождения.",
    emoji: "⚙️",
    href: "/development",
    label: "Посмотреть направление разработки"
  },
  {
    number: "05",
    title: "Реклама для вашего продукта, реалистичный фильм или мультфильм?",
    description:
      "Создаём медиа, которое выглядит дорого и запоминается: рекламные ролики, генеративные сцены, презентационные видео, реалистичные фильмы и stylized-мультфильмы. AI сокращает сроки и стоимость без потери вау-эффекта.",
    emoji: "🎬",
    href: "/ai-media",
    label: "Перейти в раздел ИИ для медиа"
  },
  {
    number: "06",
    title: "Начните учиться ИИ сейчас",
    description:
      "Переходите на платформу 01AI и входите в AI-сферу уже сегодня. Учитесь в удобном темпе, получайте доступ к актуальным материалам и практическим трекам, которые помогут вам быстрее выйти в профессию.",
    emoji: "🚀",
    href: "https://01ai.uz",
    external: true,
    label: "Открыть 01AI"
  }
];

export const detailPages: Record<string, DetailPageContent> = {
  about: {
    metaTitle: "О нас | MLC",
    metaDescription: "MLC — первое и единственное AI-сообщество в Центральной Азии.",
    eyebrow: "О нас",
    title: "MLC строит среду, где AI становится реальным инструментом роста.",
    description:
      "Мы объединяем людей, компании и практиков вокруг сильного AI-комьюнити, современного обучения и прикладной разработки. Наша цель — сделать так, чтобы искусственный интеллект в Узбекистане и Центральной Азии был понятным, доступным и полезным.",
    stats: [
      { value: "3500+", label: "участников сообщества" },
      { value: "50+", label: "мероприятий и встреч" },
      { value: "400+", label: "выпускников программ" }
    ],
    highlights: [
      {
        title: "Сообщество с живой энергией",
        text: "Мы собираем людей, которым нужен не шум вокруг AI, а реальные связи, обмен опытом и совместный рост."
      },
      {
        title: "Обучение, связанное с рынком",
        text: "Наши программы помогают осваивать навыки, которые сразу применимы в работе, бизнесе и карьере."
      },
      {
        title: "Продуктовый и бизнес-фокус",
        text: "MLC работает не только для вдохновения, но и для внедрения: от первых шагов до автоматизаций и AI-решений."
      }
    ],
    capabilities: [
      "Организуем сильные мероприятия и комьюнити-форматы",
      "Запускаем обучение для людей и корпоративных команд",
      "Помогаем компаниям внедрять AI в процессы и продукты",
      "Создаём медиа и визуальные AI-решения под задачи брендов"
    ],
    ctaLabel: "Связаться с MLC",
    ctaHref: "/#contact"
  },
  community: {
    metaTitle: "Сообщество | MLC",
    metaDescription: "AI-сообщество MLC: события, знакомства, практика и рост.",
    eyebrow: "Сообщество",
    title: "Место, где люди входят в AI-сферу не в одиночку, а вместе с сильным окружением.",
    description:
      "MLC Community — это мероприятия, networking, разговоры с практиками, обмен опытом и ощущение, что вы находитесь внутри движения, которое формирует AI-экосистему региона.",
    stats: [
      { value: "3500+", label: "участников" },
      { value: "6000+", label: "посещений мероприятий" },
      { value: "50+", label: "ивентов и митапов" }
    ],
    highlights: [
      {
        title: "Открытые мероприятия",
        text: "Лекции, панельные дискуссии, вечеринки сообщества, гостевые выступления и разборы кейсов."
      },
      {
        title: "Новые знакомства",
        text: "Участники находят команду, будущих коллег, партнёров, друзей и карьерные возможности."
      },
      {
        title: "Актуальный контекст рынка",
        text: "Мы постоянно держим сообщество рядом с тем, что реально происходит в AI-индустрии."
      }
    ],
    capabilities: [
      "Нетворкинг с людьми из индустрии",
      "Понимание трендов и направлений развития",
      "Поддержка на старте и в карьерном росте",
      "Доступ к анонсам, закрытым форматам и новым инициативам"
    ],
    ctaLabel: "Оставить заявку",
    ctaHref: "/#contact"
  },
  education: {
    metaTitle: "Образование | MLC",
    metaDescription: "AI-образование MLC и 01AI: обучение, практика и карьерный рост.",
    eyebrow: "Образование",
    title: "AI Обучение",
    description:
      "Мы строим программы так, чтобы человек видел практический результат: новые навыки, уверенность в инструментах, проекты в портфолио и реальную готовность использовать AI в работе.",
    stats: [
      { value: "400+", label: "выпускников" },
      { value: "70%", label: "трудоустроенных" },
      { value: "8+", label: "обученных компаний" }
    ],
    highlights: [
      {
        title: "Практика вместо сухой теории",
        text: "Студенты работают с реальными задачами, кейсами и сценариями применения AI в бизнесе и продуктах."
      },
      {
        title: "Маршрут от старта до результата",
        text: "Объясняем сложные вещи просто, постепенно увеличиваем глубину и доводим до уверенной практики."
      },
      {
        title: "Выход в рынок",
        text: "Помогаем вырасти от интереса к AI до позиции, в которой знания начинают приносить деньги и возможности."
      }
    ],
    capabilities: [
      "Персональное обучение и карьерные треки",
      "Корпоративные AI-программы под бизнес",
      "Доступ к 01AI и гибкому темпу обучения",
      "Поддержка менторов и прикладные проекты"
    ],
    ctaLabel: "Открыть 01AI",
    ctaHref: "https://01ai.uz",
    ctaExternal: true
  },
  development: {
    metaTitle: "Разработка | MLC",
    metaDescription: "AI-разработка и автоматизация для бизнеса от MLC.",
    eyebrow: "Разработка",
    title: "Создаём AI-решения, которые экономят время, усиливают команды и двигают бизнес вперёд.",
    description:
      "Разработка в MLC — это не только код, а полный цикл: аудит процессов, проектирование решения, интеграция, запуск и поддержка. Мы работаем там, где AI должен давать измеримый эффект.",
    stats: [
      { value: "AI", label: "автоматизации" },
      { value: "LLM", label: "ассистенты и боты" },
      { value: "RAG", label: "поиск по знаниям" }
    ],
    highlights: [
      {
        title: "Автоматизация рутины",
        text: "Ускоряем повторяющиеся процессы и освобождаем команде время для более ценной работы."
      },
      {
        title: "Интеграции под бизнес",
        text: "Соединяем AI с CRM, внутренними системами, базами знаний, каналами поддержки и операциями."
      },
      {
        title: "Фокус на эффекте",
        text: "Запускаем не ради технологии, а ради скорости, качества сервиса, роста продаж и масштаба."
      }
    ],
    capabilities: [
      "AI-ассистенты и чат-боты",
      "Внутренние knowledge-системы и RAG",
      "Интеграции и workflow-автоматизации",
      "Прототипирование, внедрение и сопровождение"
    ],
    ctaLabel: "Обсудить проект",
    ctaHref: "/#contact"
  },
  "ai-media": {
    metaTitle: "ИИ для медиа | MLC",
    metaDescription: "Создание AI-медиа, рекламы, фильмов и визуального контента с MLC.",
    eyebrow: "ИИ для медиа",
    title: "Помогаем брендам и командам создавать медиа, которое выглядит современно, дорого и запоминается.",
    description:
      "AI для медиа в MLC — это быстрый продакшн, смелые визуальные идеи и новый уровень свободы для брендов. От рекламных видео и product-контента до реалистичных фильмов и stylized-анимации.",
    stats: [
      { value: "Fast", label: "production cycle" },
      { value: "Bold", label: "visual direction" },
      { value: "AI", label: "creative pipeline" }
    ],
    highlights: [
      {
        title: "Рекламные ролики и product-видео",
        text: "Собираем визуал, который помогает продавать продукт, объяснять ценность и выделяться на рынке."
      },
      {
        title: "Фильмы и storytelling",
        text: "Создаём реалистичные или стилизованные сцены, в которых AI ускоряет производство и расширяет креатив."
      },
      {
        title: "Контент для digital-кампаний",
        text: "Делаем креативы, тизеры, шоты и визуальные серии для соцсетей, презентаций и запусков."
      }
    ],
    capabilities: [
      "AI-видеопродакшн и motion",
      "Stylized и realistic visual concepts",
      "Креативы для брендов и продуктов",
      "Поддержка полного цикла от идеи до финального файла"
    ],
    ctaLabel: "Оставить заявку",
    ctaHref: "/#contact"
  }
};



