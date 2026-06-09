export interface Speaker {
  id: string;
  name: string;
  title: string;
  photo: string;
}

export interface EventEdition {
  id: string;
  title: string;
  year: number;
  dateLabel: string;
  location: string;
  participantCount: number;
  description: string;
  descriptionKey?: string;
  sourceUrl?: string;
  coverImage: string;
  photos: string[];
  speakers: Speaker[];
  highlights?: string[];
}

export interface EventCategory {
  id: string;
  title: string;
  meta: string;
  emoji: string;
  color: string;
  coverImage: string;
  subtitle?: string;
  description?: string;
  editions: EventEdition[];
}

function speaker(name: string, title: string, photo: string): Speaker {
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    title,
    photo,
  };
}

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: "ai-rewind",
    title: "AI Rewind",
    meta: "Конференция и обзор AI-трендов",
    emoji: "↺",
    color: "#ff7ad9",
    coverImage: "/events/rewind-2023/photo-1.webp",
    subtitle: "Конференция и обзор AI-трендов",
    description: "AI Rewind — ежегодный итоговый ивент ML Community. Собираем лучших спикеров, разбираем главные тренды уходящего года в AI и смотрим, что ждёт нас дальше. Это не просто лекции — это живая дискуссия, нетворкинг и атмосфера, где AI-сообщество Узбекистана встречается вместе.",
    editions: [
      {
        id: "rewind-2023",
        descriptionKey: "event_rewind_2023",
        title: "AI Rewind 2022",
        dateLabel: "18 февраля 2023",
        year: 2023,
        location: "Ташкент",
        participantCount: 700,
        description:
          "Ежегодный итоговый ивент MLC собрал 700+ участников - крупнейший AI-ивент Узбекистана на тот момент. 13 спикеров из ведущих местных и международных компаний, 1834 регистрации. Партнёры: Alif Tech, New Uzbekistan University, Digital Generation.",
        sourceUrl: "https://t.me/mlc_uz/193",
        coverImage: "/events/rewind-2023/photo-1.webp",
        photos: [
          "/events/rewind-2023/photo-1.webp",
          "/events/rewind-2023/photo-2.webp",
          "/events/rewind-2023/photo-3.webp",
          "/events/rewind-2023/photo-4.webp",
          "/events/rewind-2023/photo-5.webp",
          "/events/rewind-2023/photo-6.webp",
          "/events/rewind-2023/photo-7.webp",
        ],
        speakers: [
          speaker("Saidamir Marufkhujaev", "Head of Data, IMANUM", "/events/rewind-2023/speaker-saidamir.webp"),
          speaker("Nuriddin Lafizov", "CEO, Alif Uzbekistan", "/events/rewind-2023/speaker-nuriddin.webp"),
          speaker("Bakhtiyor Khasanov", "CEO, UzbekVoice", "/events/speakers/bakhtiyor-khasanov.webp"),
          speaker("Vadim Zakharyan", "CTO & Co-founder, Billz", "/events/rewind-2023/speaker-vadim.webp"),
          speaker("Anvar Narzullaev", "CEO & Co-founder, Mohirdev", "/events/rewind-2023/speaker-anvar.webp"),
        ],
      },
    ],
  },
  {
    id: "ml-gap",
    title: "ML Gap",
    meta: "Лекции, воркшопы и разборы кейсов",
    emoji: "▣",
    color: "#43d8ff",
    coverImage: "/events/gap-2024-09/photo-1.webp",
    subtitle: "Лекции и разборы кейсов",
    description: "ML Gap — формат глубоких погружений. Приглашаем экспертов из индустрии, которые разбирают реальные кейсы, делятся опытом и отвечают на живые вопросы. Не теория ради теории — только практические инсайты, которые можно применить уже сегодня.",
    editions: [
      {
        id: "gap-2024-12",
        descriptionKey: "event_gap_2024_12",
        title: "ML Gap",
        dateLabel: "8 декабря 2024",
        year: 2024,
        location: "Ташкент",
        participantCount: 30,
        description:
          "Вдохновляющая встреча с яркими спикерами - живые истории из индустрии, практические инсайты и нетворкинг в атмосфере ML Community.",
        sourceUrl: "https://t.me/mlc_uz/601",
        coverImage: "/events/gap-2024-12/photo-1.webp",
        photos: [
          "/events/gap-2024-12/photo-1.webp",
          "/events/gap-2024-12/photo-2.webp",
          "/events/gap-2024-12/photo-3.webp",
          "/events/gap-2024-12/photo-4.webp",
          "/events/gap-2024-12/photo-5.webp",
        ],
        speakers: [],
      },
      {
        id: "gap-2024-09",
        descriptionKey: "event_gap_2024_09",
        title: "ML Gap × Yandex",
        dateLabel: "18 сентября 2024",
        year: 2024,
        location: "Ташкент",
        participantCount: 150,
        description:
          "Невероятный вечер с Александром Крайновым - глубокое погружение в современный AI. Атмосфера инноваций, новые знания, вдохновение и ценные нетворкинг-связи.",
        sourceUrl: "https://t.me/mlc_uz/541",
        coverImage: "/events/gap-2024-09/photo-1.webp",
        photos: [
          "/events/gap-2024-09/photo-1.webp",
          "/events/gap-2024-09/photo-2.webp",
          "/events/gap-2024-09/photo-3.webp",
          "/events/gap-2024-09/photo-4.webp",
          "/events/gap-2024-09/photo-5.webp",
        ],
        speakers: [
          speaker("Alexander Krainov", "Director AI Technologies, Yandex", "/events/speakers/alexander-krainov.webp"),
          speaker("Gennady Evstratov", "Head of Development, Yandex Uzbekistan", "/events/speakers/gennady-evstratov.webp"),
        ],
      },
      {
        id: "gap-2024-01",
        descriptionKey: "event_gap_2024_01",
        title: "ML Gap × PC",
        dateLabel: "20 января 2024",
        year: 2024,
        location: "Ташкент",
        participantCount: 30,
        description:
          "Нетрадиционный MLC & PC GAP - совместный ивент с партнёрами. Участники повысили знания и наладили связи с профессионалами индустрии в неформальной обстановке.",
        sourceUrl: "https://t.me/mlc_uz/323",
        coverImage: "/events/gap-2024-01/photo-1.webp",
        photos: [
          "/events/gap-2024-01/photo-1.webp",
          "/events/gap-2024-01/photo-2.webp",
          "/events/gap-2024-01/photo-3.webp",
        ],
        speakers: [
          speaker("Muzaffar Djalalov", "CDTO, UWED", "/events/gap-2024-01/speaker-muzaffar.webp"),
          speaker("Bakhtiyor Khasanov", "CEO, UzbekVoice", "/events/gap-2024-01/speaker-bakhtiyor.webp"),
        ],
      },
      {
        id: "gap-2023-11",
        descriptionKey: "event_gap_2023_11",
        title: "ML Gap",
        dateLabel: "18 ноября 2023",
        year: 2023,
        location: "Ташкент",
        participantCount: 40,
        description:
          "Практический воркшоп: snacks & coding, разбор резюме участников, нетворкинг и возможность получить уникальные NFT-токены. Разборы задач в живом режиме.",
        sourceUrl: "https://t.me/mlc_uz/294",
        coverImage: "/events/gap-2023-11/photo-1.webp",
        photos: [
          "/events/gap-2023-11/photo-1.webp",
          "/events/gap-2023-11/photo-2.webp",
          "/events/gap-2023-11/photo-3.webp",
          "/events/gap-2023-11/photo-4.webp",
          "/events/gap-2023-11/photo-5.webp",
        ],
        speakers: [
          speaker("Bekhruz Azam", "ML Engineer", "/events/gap-2023-11/speaker-behruz.webp"),
          speaker("Khurshid Juraev", "AI Specialist", "/events/gap-2023-11/speaker-khurshid.webp"),
        ],
      },
      {
        id: "gap-2023-04",
        descriptionKey: "event_gap_2023_04",
        title: "ML Gap",
        dateLabel: "1 апреля 2023",
        year: 2023,
        location: "C-Space Coworking, Ташкент",
        participantCount: 100,
        description:
          "Второй ML Gap в C-Space Coworking. Неформальная конференция ML-энтузиастов с международными спикерами. 100+ участников, живые разборы и нетворкинг.",
        sourceUrl: "https://t.me/mlc_uz/217",
        coverImage: "/events/gap-2023-04/image19.webp",
        photos: [
          "/events/gap-2023-04/image19.webp",
          "/events/gap-2023-04/image20.webp",
          "/events/gap-2023-04/image21.webp",
          "/events/gap-2023-04/image22.webp",
          "/events/gap-2023-04/image23.webp",
          "/events/gap-2023-04/image24.webp",
        ],
        speakers: [
          speaker("Valeriy Babushkin", "VP of Data Science, Blockchain.com", "/events/gap-2023-04/speaker-valeriy.webp"),
          speaker("Irina Elisova", "ML Developer, MTS", "/events/gap-2023-04/speaker-irina.webp"),
        ],
      },
      {
        id: "gap-2022-12",
        descriptionKey: "event_gap_2022_12",
        title: "ML Gap",
        dateLabel: "10 декабря 2022",
        year: 2022,
        location: "Ташкент",
        participantCount: 50,
        description:
          "Первый ML Gap - встреча студентов ИНХА, участников IT Park, Iman Invest и других организаций. Формат живых разборов и нетворкинга в кругу AI-энтузиастов.",
        sourceUrl: "https://t.me/mlc_uz/153",
        coverImage: "/events/gap-2022-12/photo-1.webp",
        photos: [
          "/events/gap-2022-12/photo-1.webp",
          "/events/gap-2022-12/photo-2.webp",
          "/events/gap-2022-12/photo-3.webp",
          "/events/gap-2022-12/photo-4.webp",
          "/events/gap-2022-12/photo-5.webp",
        ],
        speakers: [
          speaker("Saidamir Marufkhujaev", "Head of Data, IMANUM", "/events/gap-2022-12/speaker-saidamir.webp"),
          speaker("Gayrat Burkhonov", "Deputy Director, Digital Tashkent", "/events/gap-2022-12/speaker-gayrat.webp"),
        ],
      },
    ],
  },
  {
    id: "ml-party",
    title: "ML Party",
    meta: "Нетворкинг и вечер сообщества",
    emoji: "✦",
    color: "#a78bfa",
    coverImage: "/events/party-2022/photo-1.webp",
    subtitle: "Нетворкинг и вечер сообщества",
    description: "ML Party — это вечер, где AI-сообщество собирается не ради слайдов, а ради людей. Неформальная атмосфера, живое общение, новые знакомства. Именно здесь завязываются проекты, находятся команды и появляются идеи, которые потом становятся реальностью.",
    editions: [
      {
        id: "party-2025",
        descriptionKey: "event_party_2025",
        title: "ML Party",
        dateLabel: "1 ноября 2025",
        year: 2025,
        location: "Ташкент",
        participantCount: 100,
        description:
          "Вечер идей, вдохновения и настоящей ML-энергии. Спасибо спикерам, гостям и всем кто создал атмосферу!",
        sourceUrl: "https://t.me/mlc_uz/708",
        coverImage: "/events/party-2025/image79.webp",
        photos: [
          "/events/party-2025/image79.webp",
          "/events/party-2025/image80.webp",
          "/events/party-2025/image81.webp",
          "/events/party-2025/image82.webp",
          "/events/party-2025/image83.webp",
          "/events/party-2025/image84.webp",
          "/events/party-2025/image85.webp",
          "/events/party-2025/image86.webp",
          "/events/party-2025/image87.webp",
          "/events/party-2025/image88.webp",
        ],
        speakers: [
          speaker("Dmitry Korgun", "Product Development Lead, Yandex Pro", "/events/party-2025/speaker-dmitry.webp"),
          speaker("Nodira Karabaeva", "AI Annotation Lead, TBC Bank", "/events/party-2025/speaker-nodira.webp"),
        ],
      },
      {
        id: "party-2024",
        descriptionKey: "event_party_2024",
        title: "ML Party",
        dateLabel: "19 сентября 2024",
        year: 2024,
        location: "Ташкент",
        participantCount: 70,
        description:
          "Вечер для AI, Data и Startup-энтузиастов: живая музыка, нетворкинг и содержательные дискуссии. Незабываемая атмосфера ML Community.",
        sourceUrl: "https://t.me/mlc_uz/571",
        coverImage: "/events/party-2024/image69.webp",
        photos: [
          "/events/party-2024/image69.webp",
          "/events/party-2024/image70.webp",
          "/events/party-2024/image71.webp",
          "/events/party-2024/image72.webp",
          "/events/party-2024/image73.webp",
          "/events/party-2024/image74.webp",
          "/events/party-2024/image75.webp",
          "/events/party-2024/image76.webp",
          "/events/party-2024/image77.webp",
        ],
        speakers: [
          speaker("Alexander Krainov", "Director AI Technologies, Yandex", "/events/speakers/alexander-krainov.webp"),
          speaker("Gennady Evstratov", "Head of Development, Yandex Uzbekistan", "/events/speakers/gennady-evstratov.webp"),
          speaker("Hikmatilla Ubaydullayev", "Executive Director, AICA", "/events/party-2024/speaker-hikmatilla.webp"),
        ],
      },
      {
        id: "party-2023",
        descriptionKey: "event_party_2023",
        title: "ML Party",
        dateLabel: "13 мая 2023",
        year: 2023,
        location: "Ташкент",
        participantCount: 130,
        description:
          "130+ участников из индустрии, экспертов и энтузиастов собрались для обмена инсайтами и нетворкинга. День живых дискуссий, вдохновения и ML-сообщества.",
        sourceUrl: "https://t.me/mlc_uz/240",
        coverImage: "/events/party-2023/image58.webp",
        photos: [
          "/events/party-2023/image58.webp",
          "/events/party-2023/image59.webp",
          "/events/party-2023/image60.webp",
          "/events/party-2023/image61.webp",
          "/events/party-2023/image62.webp",
          "/events/party-2023/image63.webp",
          "/events/party-2023/image64.webp",
          "/events/party-2023/image65.webp",
          "/events/party-2023/image66.webp",
        ],
        speakers: [
          speaker("Viktor Sizov", "CEO, DataDep", "/events/party-2023/speaker-viktor.webp"),
          speaker("Sanjar Adilov", "ML and Data Algorithms, EPAM", "/events/party-2023/speaker-sanjar.webp"),
          speaker("Bakhodir Akhmedov", "Rector, New Uzbekistan University", "/events/speakers/bahodir-ahmedov.webp"),
        ],
      },
      {
        id: "party-2022",
        descriptionKey: "event_party_2022",
        title: "ML Party",
        dateLabel: "21 апреля 2022",
        year: 2022,
        location: "Ташкент",
        participantCount: 300,
        description:
          "Первый ML Party - более 300 участников, профессионалы и новички вместе. Среди гостей основатель myTaxi и Express24 Акмал Паизиев. Вечер доказал: AI-сообщество в Узбекистане есть и оно большое.",
        sourceUrl: "https://t.me/mlc_uz/99",
        coverImage: "/events/party-2022/photo-1.webp",
        photos: [
          "/events/party-2022/photo-1.webp",
          "/events/party-2022/photo-2.webp",
          "/events/party-2022/photo-3.webp",
          "/events/party-2022/photo-4.webp",
          "/events/party-2022/photo-5.webp",
          "/events/party-2022/photo-6.webp",
        ],
        speakers: [
          speaker("Bahodir Ahmedov", "Rector, New Uzbekistan University", "/events/speakers/bahodir-ahmedov.webp"),
          speaker("Muhammadsaid Mamasaidov", "Tahrirchi, Founder", "/events/party-2022/speaker-muhammadsaid.webp"),
        ],
      },
    ],
  },
  {
    id: "office-visits",
    title: "Partner Meetups",
    meta: "Офис-визиты и мастер-классы с партнёрами",
    emoji: "⌂",
    color: "#fbbf24",
    coverImage: "/community-avif/Frame 4.avif",
    subtitle: "Мастер-классы у партнёров",
    description: "Студенты MLC посещают офисы компаний-партнёров — изнутри. Живые мастер-классы от специалистов, экскурсии по рабочим пространствам, прямые вопросы тем, кто уже работает в индустрии. Лучший способ понять, как устроена реальная работа в AI и tech-компаниях Узбекистана.",
    editions: [
      {
        id: "meetup-2026-05",
        descriptionKey: "event_meetup_2026_05",
        title: "Мастер-класс в Click",
        dateLabel: "9 мая 2026",
        year: 2026,
        location: "Click Office, Ташкент",
        participantCount: 30,
        description:
          "Студенты MLC в Click: составление резюме, подготовка к интервью, требования компаний. Реальные практики интервью и нетворкинг с командой.",
        sourceUrl: "https://t.me/mlc_uz/843",
        coverImage: "/events/meetup-2026-05/image104.webp",
        photos: [
          "/events/meetup-2026-05/image104.webp",
          "/events/meetup-2026-05/image105.webp",
          "/events/meetup-2026-05/image106.webp",
          "/events/meetup-2026-05/image107.webp",
          "/events/meetup-2026-05/image108.webp",
          "/events/meetup-2026-05/image109.webp",
        ],
        speakers: [
          speaker("Viktoriya Plakida", "IT Recruiter, Click", "/events/meetup-2026-05/speaker-viktoriya.webp"),
          speaker("Shokhjahon Nishonov", "Data Scientist, Click", "/events/meetup-2026-05/speaker-shokhjahon.webp"),
        ],
      },
      {
        id: "meetup-2026-04",
        descriptionKey: "event_meetup_2026_04",
        title: "Мастер-класс в Alif",
        dateLabel: "10 апреля 2026",
        year: 2026,
        location: "Alif, Ташкент",
        participantCount: 20,
        description:
          "Студенты MLC в офисе Alif: Muslima Sabirova и Kamilla Veyskerber поделились экспертизой. Экскурсия и нетворкинг с командой.",
        coverImage: "/events/meetup-2026-04/image112.webp",
        photos: [
          "/events/meetup-2026-04/image112.webp",
          "/events/meetup-2026-04/image113.webp",
          "/events/meetup-2026-04/image114.webp",
          "/events/meetup-2026-04/image115.webp",
          "/events/meetup-2026-04/image116.webp",
        ],
        speakers: [],
      },
      {
        id: "meetup-2026-03",
        descriptionKey: "event_meetup_2026_03",
        title: "Мастер-класс в IMAN",
        dateLabel: "18 марта 2026",
        year: 2026,
        location: "IMAN, Ташкент",
        participantCount: 20,
        description:
          "Студенты MLC в IMAN: практические задачи по трудоустройству, разбор реальных проблем, Data Analytics и ML-тренды. Экскурсия по офису.",
        sourceUrl: "https://t.me/mlc_uz/784",
        coverImage: "/events/meetup-2026-03/image98.webp",
        photos: [
          "/events/meetup-2026-03/image98.webp",
          "/events/meetup-2026-03/image99.webp",
          "/events/meetup-2026-03/image100.webp",
          "/events/meetup-2026-03/image101.webp",
          "/events/meetup-2026-03/image102.webp",
          "/events/meetup-2026-03/image103.webp",
        ],
        speakers: [],
      },
      {
        id: "meetup-tbc",
        descriptionKey: "event_meetup_tbc",
        title: "Мастер-класс в TBC Bank",
        dateLabel: "20 февраля 2026",
        year: 2026,
        location: "TBC Bank, Ташкент",
        participantCount: 30,
        description:
          "Студенты MLC посетили TBC Bank: AI-департамент и передовые технологии, HR-культура банка, Product Data Analytics. Экскурсия по офису и нетворкинг с командой.",
        sourceUrl: "https://t.me/mlc_uz/775",
        coverImage: "/events/meetup-tbc/image91.webp",
        photos: [
          "/events/meetup-tbc/image91.webp",
          "/events/meetup-tbc/image92.webp",
          "/events/meetup-tbc/image93.webp",
          "/events/meetup-tbc/image94.webp",
          "/events/meetup-tbc/image95.webp",
          "/events/meetup-tbc/image96.webp",
          "/events/meetup-tbc/image97.webp",
        ],
        speakers: [],
      },
    ],
  },
  {
    id: "ai-hackathon",
    title: "AI Hackathon",
    meta: "Главный ивент MLC: команды и реальные AI-продукты",
    emoji: "⚡",
    color: "#a78bfa",
    coverImage: "/events/hackathon-2024/photo-info.webp",
    subtitle: "Разработка AI-решений за 48 часов",
    description: "AI Hackathon — главное событие ML Community. Три дня интенсивной командной работы, менторы из индустрии, реальные задачи и призовой фонд. Команды строят работающие AI-продукты с нуля. Здесь рождаются стартапы, находятся партнёры и проверяются идеи на прочность.",
    editions: [
      {
        id: "hackathon-2024",
        descriptionKey: "event_hackathon_2024",
        title: "AI Hackathon 2024",
        dateLabel: "16-18 февраля 2024",
        year: 2024,
        location: "New Uzbekistan University",
        participantCount: 400,
        description:
          "Первый AI Hackathon MLC - три дня интенсивной командной разработки с призовым фондом 100 млн сум. Победители: Shifo AI, Data Dreamers, ICEMEDAI.",
        sourceUrl: "https://t.me/mlc_uz/440",
        coverImage: "/events/hackathon-2024/photo-info.webp",
        photos: [
          "/events/hackathon-2024/image117.webp",
          "/events/hackathon-2024/image118.webp",
          "/events/hackathon-2024/image119.webp",
          "/events/hackathon-2024/image120.webp",
          "/events/hackathon-2024/image121.webp",
          "/events/hackathon-2024/image122.webp",
          "/events/hackathon-2024/image123.webp",
          "/events/hackathon-2024/image124.webp",
          "/events/hackathon-2024/image125.webp",
          "/events/hackathon-2024/image126.webp",
          "/events/hackathon-2024/image127.webp",
          "/events/hackathon-2024/image128.webp",
          "/events/hackathon-2024/image129.webp",
          "/events/hackathon-2024/image130.webp",
          "/events/hackathon-2024/image131.webp",
          "/events/hackathon-2024/image132.webp",
          "/events/hackathon-2024/image133.webp",
          "/events/hackathon-2024/image134.webp",
          "/events/hackathon-2024/image135.webp",
          "/events/hackathon-2024/image136.webp",
          "/events/hackathon-2024/image137.webp",
          "/events/hackathon-2024/image138.webp",
        ],
        speakers: [],
        highlights: ["🥇 Shifo AI", "🥈 Data Dreamers", "🥉 ICEMEDAI", "Призовой фонд: 100 млн сум"],
      },
    ],
  },
  {
    id: "ml-contest",
    title: "ML Contest",
    meta: "Kaggle-соревнования и командные ML-челленджи",
    emoji: "⌁",
    color: "#34d399",
    coverImage: "",
    subtitle: "Соревнование по ML-задачам",
    description: "ML Contest — командное Kaggle-соревнование. Несколько часов, реальные датасеты, ограниченное время. Команды до трёх человек соревнуются в решении задач машинного обучения. Отличный способ проверить свои навыки, познакомиться с единомышленниками и получить обратную связь от экспертов.",
    editions: [
      {
        id: "contest-2026",
        descriptionKey: "event_contest_2026",
        title: "ML Contest",
        dateLabel: "17 января 2026",
        year: 2026,
        location: "New Uzbekistan University",
        participantCount: 100,
        description:
          "Machine Learning Challenge совместно с ML Club NewUU в НУУ. Sun'iy intellekt va real muammolar maydoni - командное Kaggle-соревнование.",
        sourceUrl: "https://t.me/mlc_uz/749",
        coverImage: "/events/contest-2026/image156.webp",
        photos: [
          "/events/contest-2026/image156.webp",
          "/events/contest-2026/image157.webp",
          "/events/contest-2026/image158.webp",
          "/events/contest-2026/image159.webp",
          "/events/contest-2026/image160.webp",
          "/events/contest-2026/image161.webp",
          "/events/contest-2026/image162.webp",
        ],
        speakers: [],
      },
      {
        id: "contest-2023",
        descriptionKey: "event_contest_2023",
        title: "ML Contest",
        dateLabel: "26 сентября 2023",
        year: 2023,
        location: "Ташкент",
        participantCount: 40,
        description:
          "Команды до 3 человек решали задачи с Kaggle в течение 5 часов. Онлайн-участие доступно, призы только для офлайн-участников.",
        sourceUrl: "https://t.me/mlc_uz/273",
        coverImage: "",
        photos: [],
        speakers: [],
      },
    ],
  },
];

export function getCategoryById(id: string): EventCategory | undefined {
  return EVENT_CATEGORIES.find((category) => category.id === id);
}
