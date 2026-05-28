import type { Partner } from "@/data/fallbackContent";
import type { SiteLanguage } from "@/lib/siteCopy";

export type PartnerStoryBlock =
  | {
      type: "text";
      order: number;
      value: string;
    }
  | {
      type: "image_group";
      order: number;
      images: string[];
    };

export type PartnerStory = Partner & {
  numericId: number;
  description: string;
  hero_image_url?: string;
  blocks: PartnerStoryBlock[];
};

function mediaUrl(fileName?: string) {
  return fileName ? `/partners-avif/${fileName.replace(/\.[^.]+$/, "")}.avif` : "";
}

export const partnerStories: PartnerStory[] = [
  {
    id: "18",
    numericId: 18,
    name: "IMPACT.T",
    logo_url: mediaUrl("image_2026-04-07_16-30-55-1775561640195.png"),
    hero_image_url: mediaUrl("photo_2026-04-09_12-40-41-1776166198467.jpg"),
    website_url: "https://impactthub.uz/",
    internal_url: "/partners/18",
    description: "Некоторые места — это просто четыре стены. А некоторые становятся центром движения. IMPACT.T — именно такое место.",
    blocks: [
      {
        type: "image_group",
        order: 1,
        images: [
          mediaUrl("photo_2026-04-09_12-40-41-1776166198467.jpg"),
          mediaUrl("photo_2026-04-14_16-28-48-1776166198484.jpg"),
          mediaUrl("photo_2026-04-14_16-29-21-1776166198461.jpg"),
          mediaUrl("photo_2026-04-09_12-37-54-1776764510415.jpg")
        ]
      },
      {
        type: "text",
        order: 2,
        value:
          "Первый ML Party в истории ML Community вспыхнул именно здесь: более 200 участников, 10 спикеров и в зале — люди, стоявшие за MyTaxi, Workly и другими сильными проектами, включая серийного предпринимателя Акмала Пайзиева. Тот вечер никто не планировал как «первое большое событие», но он стал историей. И эта история началась в IMPACT.T.\n\nС тех пор многое изменилось: вырос масштаб, расширились форматы, усложнились идеи. Но IMPACT.T остался тем же — надёжным, открытым и всегда готовым поддержать. В наших инициативах их участие ощущается и как пространство, и как опора.\n\nЭто не просто старый партнёр. Это тот, кто был рядом и остался рядом."
      }
    ]
  },
  {
    id: "16",
    numericId: 16,
    name: "IT-Park Uzbekistan",
    logo_url: mediaUrl("it-park-1772014405223.png"),
    website_url: "https://www.it-park.uz/",
    internal_url: "/partners/16",
    description: "Говорят, первый шаг всегда самый сложный. В нашем первом шаге рядом был IT Park — и это многое упростило.",
    blocks: [
      {
        type: "text",
        order: 1,
        value:
          "С самого первого мероприятия и до сегодняшнего дня IT Park Uzbekistan остаётся одним из самых постоянных партнёров MLC. Без лишних слов — только доверие, последовательная поддержка и реальное участие."
      }
    ]
  },
  {
    id: "15",
    numericId: 15,
    name: "C-Space Coworking",
    logo_url: mediaUrl("c-space-1772014413624.png"),
    website_url: "https://cspace.uz/",
    internal_url: "/partners/15",
    description: "Это не просто партнёрство — это практическая поддержка.",
    blocks: [
      {
        type: "text",
        order: 1,
        value:
          "ML Gap — это не только обучение. Это среда, где люди думают, обсуждают, спорят и открывают новое. Для такого процесса нужно правильное пространство. C-Space бесплатно даёт именно его: удобный коворкинг, открытую дверь и ноль барьеров."
      }
    ]
  },
  {
    id: "14",
    numericId: 14,
    name: "TBC Uzbekistan",
    logo_url: mediaUrl("tbc-bank-1772014422922.png"),
    hero_image_url: mediaUrl("photo_2026-04-14_16-31-26-1776764644882.jpg"),
    website_url: "https://tbcbank.uz/",
    internal_url: "/partners/14",
    description: "Учиться — это одно. Применять знания в реальной среде — совсем другое. TBC Uzbekistan соединяет эти два мира.",
    blocks: [
      {
        type: "image_group",
        order: 1,
        images: [
          mediaUrl("photo_2026-04-14_16-31-26-1776764644882.jpg"),
          mediaUrl("photo_2024-03-06_17-59-40-1776166401067.jpg"),
          mediaUrl("photo_2026-04-09_12-34-04-1776166432877.jpg"),
          mediaUrl("photo_2026-04-09_12-33-58-1776764645095.jpg")
        ]
      },
      {
        type: "text",
        order: 2,
        value:
          "Курсы Data Analytics мы организуем вместе. Но после обучения история не заканчивается: для выпускников открывается возможность стажировки внутри TBC. Экскурсии в офис, знакомство с рабочей атмосферой, опыт внутри настоящей команды — всё это стало частью партнёрства между MLC и TBC.\n\nОни не просто поддерживают курс. Они становятся партнёром роста."
      }
    ]
  },
  {
    id: "13",
    numericId: 13,
    name: "Alif Bank Uzbekistan",
    logo_url: mediaUrl("alif-bank-1772014432800.png"),
    hero_image_url: mediaUrl("photo_2026-04-09_12-32-23-1776166688146.jpg"),
    website_url: "https://www.alif.uz/en/",
    internal_url: "/partners/13",
    description: "Фразу «технологии для людей» повторяют часто. Alif это доказывает — и вместе с MLC делает доказательство ещё сильнее.",
    blocks: [
      {
        type: "image_group",
        order: 1,
        images: [
          mediaUrl("photo_2026-04-09_12-32-23-1776166688146.jpg"),
          mediaUrl("img_6416-1776167748363.jpg"),
          mediaUrl("img_6456-1776167748817.jpg"),
          mediaUrl("dsc00184-1776167747934.jpg"),
          mediaUrl("dsc00150-1776167747948.jpg"),
          mediaUrl("2k2a9632-1776167924170.jpg")
        ]
      },
      {
        type: "text",
        order: 2,
        value:
          "Мы вместе запускаем обучение по направлению Machine Learning Engineer. После завершения курса для выпускников открывается стажировка внутри Alif — с реальными задачами и живыми проектами. В офисе проходят мастер-классы, живые встречи с практиками и знакомство с тем, как устроена индустрия изнутри.\n\nС Alif каждый выбор — это не только сертификат, но и фундамент под следующий этап карьеры."
      }
    ]
  },
  {
    id: "12",
    numericId: 12,
    name: "Ministry of Digital Technologies of the Republic of Uzbekistan",
    logo_url: mediaUrl("ministry-of-digital-technologies-of-the-republic-of-uzbekistan-1772014442259.png"),
    hero_image_url: mediaUrl("605948478_18049513121692817_47727238636618674_n-1776764792436.jpg"),
    website_url: "https://gov.uz/en/digital",
    internal_url: "/partners/12",
    description: "Это не просто меморандум. Это момент, когда масштаб начал меняться.",
    blocks: [
      {
        type: "image_group",
        order: 1,
        images: [
          mediaUrl("605948478_18049513121692817_47727238636618674_n-1776764792436.jpg"),
          mediaUrl("607168746_18049513112692817_2714286543222924460_n-1776764792411.jpg"),
          mediaUrl("606977662_18049513022692817_1801504401788720172_n-1776764910187.jpg"),
          mediaUrl("607758744_18049513031692817_8219825078348734693_n-1776764909431.jpg")
        ]
      },
      {
        type: "text",
        order: 2,
        value:
          "MLC установило официальное партнёрство с Центром искусственного интеллекта при Министерстве цифровых технологий Республики Узбекистан. Теперь участники сообщества получают возможность проходить стажировки внутри AI Center — на реальных задачах и в проектах государственного масштаба.\n\nКроме того, уже началась совместная работа по внедрению AI в государственные структуры, подготовке кадров и построению образовательной системы. Для MLC это важная точка перехода: от движения сообщества к участию в системных изменениях. Будущее AI в Узбекистане строится уже сейчас, и мы участвуем в этом процессе."
      }
    ]
  },
  {
    id: "11",
    numericId: 11,
    name: "IMAN",
    logo_url: mediaUrl("imanum-1-1772291470545.png"),
    hero_image_url: mediaUrl("photo_2026-04-09_12-32-41-1776765079788.jpg"),
    website_url: "https://imanum.app/",
    internal_url: "/partners/11",
    description: "Fintech и AI долго существовали параллельно. Партнёрство MLC и Imanum убрало стену между этими двумя мирами.",
    blocks: [
      {
        type: "image_group",
        order: 1,
        images: [
          mediaUrl("photo_2026-04-09_12-32-41-1776765079788.jpg"),
          mediaUrl("photo_2024-03-19_11-54-40-1776765080167.jpg"),
          mediaUrl("photo_2026-03-18_15-56-06-1776166899495.jpg"),
          mediaUrl("photo_2026-04-09_12-32-54-1776166899503.jpg")
        ]
      },
      {
        type: "text",
        order: 2,
        value:
          "После подписания меморандума для выпускников MLC официально открылась возможность стажировки в Iman Invest. Это не просто практика. Это вход в реальную fintech-среду, в живую команду и в работу с настоящей ответственностью.\n\nДеньги двигаются не только через банковский счёт, но и через технологии. Imanum хорошо это понимает. И теперь выпускники MLC могут увидеть этот мир своими глазами."
      }
    ]
  },
  {
    id: "10",
    numericId: 10,
    name: "Global Move",
    logo_url: mediaUrl("global-move-1772014453019.png"),
    hero_image_url: mediaUrl("photo_2025-02-07_11-45-38-1776765409888.jpg"),
    website_url: "https://globalmove.uz/",
    internal_url: "/partners/10",
    description: "Искусственный интеллект — это не только модель, но и её внедрение в реальный бизнес. Global Move находится именно в этой точке.",
    blocks: [
      {
        type: "image_group",
        order: 1,
        images: [mediaUrl("photo_2025-02-07_11-45-38-1776765409888.jpg")]
      },
      {
        type: "text",
        order: 2,
        value:
          "Между MLC и Global Move установлено официальное партнёрство. Теперь студенты MLC могут проходить стажировку внутри Global Move, работая с настоящими задачами, ответственностью и результатом. Это правильная среда, чтобы проверять AI-навыки в действии."
      }
    ]
  },
  {
    id: "9",
    numericId: 9,
    name: "Central Asian Association for AI",
    logo_url: mediaUrl("aica-4-1772291677250.png"),
    website_url: "https://aica.uz/",
    internal_url: "/partners/9",
    description: "Некоторые партнёрства остаются на бумаге. Наше с AICA видно на сцене.",
    blocks: [
      {
        type: "text",
        order: 1,
        value:
          "National AI Hackathon 2025 в Самарканде, AICA Awards 2025 — за этими событиями стоит общая работа, единая цель и одно направление движения. AICA формирует AI-экосистему в масштабе Центральной Азии, а MLC остаётся одним из её самых активных участников.\n\nНас объединяет умение думать на уровне региона."
      }
    ]
  },
  {
    id: "8",
    numericId: 8,
    name: "UzbekVoice.ai",
    logo_url: mediaUrl("uzbekvoiceai-1772014474809.png"),
    hero_image_url: mediaUrl("photo_2026-04-09_12-36-34-1776168310084.jpg"),
    website_url: "https://uzbekvoice.ai/",
    internal_url: "/partners/8",
    description: "Некоторые становятся партнёрами. Некоторые остаются друзьями. UzbekVoice.ai — и то, и другое.",
    blocks: [
      {
        type: "image_group",
        order: 1,
        images: [mediaUrl("photo_2026-04-09_12-36-34-1776168310084.jpg"), mediaUrl("photo_2026-04-09_12-36-30-1776168309259.jpg")]
      },
      {
        type: "text",
        order: 2,
        value:
          "Наше партнёрство уходит далеко назад: ML Rewind 2022, совместные проекты и UzbekVoice Camp, организованный при участии MLC. Основатель Баходир Хасанов для MLC — не просто партнёр, а часть этого пути.\n\nПосле официального меморандума дружба получила новую форму: студенты MLC получили возможность проходить стажировку в UzbekVoice.ai. Это реальная практика в речевых технологиях и NLP — одном из самых прикладных направлений для подготовки AI-специалистов в Узбекистане."
      }
    ]
  },
  {
    id: "7",
    numericId: 7,
    name: "Yoshlar Ishlari Agentligi",
    logo_url: mediaUrl("yoshlar-ishlari-agentligi-1772014485158.png"),
    website_url: "https://yoshlar.gov.uz/uz",
    internal_url: "/partners/7",
    description: "Партнёр по работе с молодёжью, ростом и созданием новых возможностей.",
    blocks: []
  },
  {
    id: "6",
    numericId: 6,
    name: "INHA University In Tashkent",
    logo_url: mediaUrl("iut-3-1772019575589.png"),
    website_url: "https://inha.uz/",
    internal_url: "/partners/6",
    description: "У всего есть родина. Родина MLC — INHA.",
    blocks: [
      {
        type: "text",
        order: 1,
        value:
          "Именно здесь всё началось: первые занятия по Python, первые ошибки, первые вопросы «что это вообще такое?». Небольшая, но любопытная группа людей без большого опыта, зато с сильной верой в своё дело — все основатели MLC учились в этих стенах и формировались в этой среде.\n\nINHA University — это не просто университет. Это место рождения Machine Learning Club. И университет поддержал эту идею с самого начала — без ожиданий и без лишних условий."
      }
    ]
  }
];

export const partnerLogos: Partner[] = partnerStories.map((partner) => ({
  id: partner.id,
  name: partner.name,
  logo_url: partner.logo_url,
  website_url: partner.website_url,
  internal_url: partner.internal_url
}));

type PartnerTranslation = {
  description: string;
  blocks?: Record<number, string>;
};

const partnerTranslations: Record<string, Partial<Record<Exclude<SiteLanguage, "ru">, PartnerTranslation>>> = {
  "18": {
    uz: {
      description: "Ba'zi joylar shunchaki to'rt devor. Ba'zilari esa harakatning markaziga aylanadi. IMPACT.T — aynan shunday joy.",
      blocks: {
        2: "ML Community tarixidagi birinchi ML Party aynan shu yerda bo'ldi: 200 dan ortiq ishtirokchi, 10 ta spiker va zalda — MyTaxi, Workly va boshqa kuchli loyihalar ortidagi odamlar, jumladan serial tadbirkor Akmal Payziyer. O'sha kechani hech kim 'birinchi katta tadbir' sifatida rejalashtirmagan edi, lekin u tarixga kirdi. Va bu tarix IMPACT.T da boshlandi.\n\nO'shandan beri ko'p narsa o'zgardi: miqyos o'sdi, formatlar kengaydi, g'oyalar murakkablashdi. Lekin IMPACT.T o'zgicha qoldi — ishonchli, ochiq va har doim qo'llab-quvvatlashga tayyor. Bizning tashabbuslarimizdagi ishtirokini ham maydon, ham tayanch sifatida his etish mumkin.\n\nBu shunchaki eski hamkor emas. Bu yonida bo'lgan va yonida qolgan hamkor."
      }
    },
    en: {
      description: "Some places are just four walls. Others become the center of a movement. IMPACT.T is exactly that kind of place.",
      blocks: {
        2: "The very first ML Party in ML Community history happened right here: more than 200 participants, 10 speakers, and in the room — the people behind MyTaxi, Workly, and other strong projects, including serial entrepreneur Akmal Payziyev. No one planned that evening as the 'first big event,' but it became history. And that history began at IMPACT.T.\n\nA lot has changed since then: the scale grew, formats expanded, ideas got more complex. But IMPACT.T stayed the same — reliable, open, and always ready to support. In our initiatives, their involvement feels like both a space and a foundation.\n\nThis is not just an old partner. This is one who was there and stayed."
      }
    },
    zh: {
      description: "有些地方只是四面墙。而有些地方会成为一场运动的中心。IMPACT.T 就是这样的地方。",
      blocks: {
        2: "ML Community 历史上的第一场 ML Party 就在这里举办：超过 200 名参与者、10 位演讲者，现场还有 MyTaxi、Workly 等强大项目背后的人，包括连续创业者 Akmal Payziyev。那个晚上没有人把它规划为「第一次大型活动」，但它成了历史。这段历史从 IMPACT.T 开始。\n\n此后，许多事情发生了变化：规模增长，形式扩展，想法变得更加复杂。但 IMPACT.T 始终如一——可靠、开放，随时准备支持。在我们的各项倡议中，他们的参与感觉既是空间，也是支撑。\n\n这不只是一个老合作伙伴。这是一个始终在场的伙伴。"
      }
    }
  },
  "16": {
    uz: {
      description: "Deyishadi, birinchi qadam har doim qiyinroq. Bizning birinchi qadamimizda IT Park yonimizda edi — va bu ko'p narsani osonlashtirdi.",
      blocks: {
        1: "Birinchi tadbirdan boshlab bugungi kungacha IT Park Uzbekistan MLC ning eng doimiy hamkorlaridan biri bo'lib qolmoqda. Ortiqcha so'zsiz — faqat ishonch, izchil qo'llab-quvvatlash va haqiqiy ishtirok."
      }
    },
    en: {
      description: "They say the first step is always the hardest. Our first step had IT Park beside us — and that made everything easier.",
      blocks: {
        1: "From the very first event to this day, IT Park Uzbekistan remains one of MLC's most consistent partners. No extra words — just trust, steady support, and real involvement."
      }
    },
    zh: {
      description: "他们说第一步永远是最难的。我们迈出第一步时，IT Park 在我们身旁——这让很多事情变得容易了。",
      blocks: {
        1: "从第一次活动到今天，IT Park Uzbekistan 一直是 MLC 最稳定的合作伙伴之一。没有多余的话——只有信任、持续的支持和真实的参与。"
      }
    }
  },
  "15": {
    uz: {
      description: "Bu shunchaki hamkorlik emas — bu amaliy qo'llab-quvvatlash.",
      blocks: {
        1: "ML Gap — bu shunchaki o'rganish emas. Bu odamlar o'ylaydigan, muhokama qiladigan, bahs yuritadigan va yangi narsalar kashf etadigan muhit. Bunday jarayon uchun to'g'ri joy kerak. C-Space buni bepul taqdim etadi: qulay kovorking, ochiq eshik va hech qanday to'siq yo'q."
      }
    },
    en: {
      description: "This is not just a partnership — it is practical support.",
      blocks: {
        1: "ML Gap is not just about learning. It is an environment where people think, discuss, debate, and discover. That kind of process needs the right space. C-Space provides it for free: a comfortable coworking area, an open door, and zero barriers."
      }
    },
    zh: {
      description: "这不只是合作关系——这是切实的支持。",
      blocks: {
        1: "ML Gap 不只是学习。它是一个人们思考、讨论、争论和发现新事物的环境。这样的过程需要合适的空间。C-Space 免费提供了这一切：舒适的联合办公空间、开放的大门，以及零门槛。"
      }
    }
  },
  "14": {
    uz: {
      description: "O'rganish bir narsa. Bilimni real muhitda qo'llash — boshqacha narsa. TBC Uzbekistan bu ikki dunyoni bog'laydi.",
      blocks: {
        2: "Data Analytics kurslarini birgalikda tashkil etamiz. Lekin o'qish tugaganidan keyin hikoya tugamaydi: bitiruvchilar uchun TBC ichida stajirovka imkoniyati ochiladi. Ofisga ekskursiyalar, ish muhitini his etish, haqiqiy jamoa ichidagi tajriba — bularning barchasi MLC va TBC hamkorligi bir qismiga aylandi.\n\nUlar shunchaki kursni qo'llab-quvvatlamaydi. Ular o'sish hamkoriga aylanadi."
      }
    },
    en: {
      description: "Learning is one thing. Applying that knowledge in a real environment is quite another. TBC Uzbekistan connects these two worlds.",
      blocks: {
        2: "We co-run Data Analytics courses together. But the story does not end after graduation: graduates get the opportunity to intern inside TBC. Office visits, getting a feel for the working atmosphere, experience inside a real team — all of this became part of the MLC and TBC partnership.\n\nThey do not just support the course. They become a growth partner."
      }
    },
    zh: {
      description: "学习是一回事。在真实环境中应用知识则是另一回事。TBC Uzbekistan 将这两个世界连接起来。",
      blocks: {
        2: "我们共同开展 Data Analytics 课程。但毕业后故事并未结束：毕业生可以在 TBC 内部实习。参观办公室、感受工作氛围、在真实团队中积累经验——这一切都成为 MLC 与 TBC 合作的一部分。\n\n他们不只是支持课程。他们成为成长的伙伴。"
      }
    }
  },
  "13": {
    uz: {
      description: "'Odamlar uchun texnologiya' iborasi ko'p qaytariladi. Alif buni isbotlaydi — va MLC bilan birga bu isbotlash yanada kuchliroq bo'ladi.",
      blocks: {
        2: "Birgalikda Machine Learning Engineer yo'nalishida o'qitishni ishga tushiramiz. Kursni tugatgandan so'ng bitiruvchilar uchun Alif ichida stajirovka imkoniyati ochiladi — real vazifalar va jonli loyihalar bilan. Ofisda master-klasslar, amaliyotchilar bilan jonli uchrashuvlar va industriya ichidan qanday ishlashini ko'rish imkoniyati bor.\n\nAlif bilan har bir tanlov — faqat sertifikat emas, balki karyeradagi keyingi bosqich uchun poydevor."
      }
    },
    en: {
      description: "The phrase 'technology for people' is said often. Alif proves it — and together with MLC the proof gets even stronger.",
      blocks: {
        2: "Together we launch Machine Learning Engineer training. After completing the course, graduates can intern inside Alif — with real tasks and live projects. Master classes, live meetups with practitioners, and a look at how the industry works from the inside are all held in the office.\n\nWith Alif, every choice is not just a certificate — it is the foundation for the next career stage."
      }
    },
    zh: {
      description: "「技术为人服务」这句话常被提及。Alif 用行动证明了它——而与 MLC 的合作让这一证明更加有力。",
      blocks: {
        2: "我们共同开展 Machine Learning Engineer 培训。课程结束后，毕业生可以在 Alif 内部实习——参与真实任务和在线项目。办公室还设有 masterclass、与实践者的线下见面以及深入了解行业运作方式的机会。\n\n选择 Alif，每个决定不只是一张证书——而是下一个职业阶段的基础。"
      }
    }
  },
  "12": {
    uz: {
      description: "Bu shunchaki memorandum emas. Bu miqyos o'zgara boshlagan daqiqa.",
      blocks: {
        2: "MLC O'zbekiston Respublikasi Raqamli texnologiyalar vazirligi huzuridagi Sun'iy intellekt markazi bilan rasmiy hamkorlikni o'rnatdi. Endi jamiyat a'zolari AI markazida stajirovka o'tash imkoniyatiga ega — real vazifalar va davlat miqyosidagi loyihalarda.\n\nBundan tashqari, AI ni davlat tuzilmalariga joriy etish, kadrlar tayyorlash va ta'lim tizimini qurish bo'yicha qo'shma ish boshlandi. MLC uchun bu muhim o'tish nuqtasi: jamiyat harakatidan tizimli o'zgarishlarda ishtirok etishga. O'zbekistonda AI kelajagi hoziroq qurilmoqda va biz bu jarayonning bir qismimiz."
      }
    },
    en: {
      description: "This is not just a memorandum. This is the moment when the scale began to change.",
      blocks: {
        2: "MLC established an official partnership with the Center for Artificial Intelligence under the Ministry of Digital Technologies of the Republic of Uzbekistan. Community members now have the opportunity to intern at the AI Center — working on real tasks and government-scale projects.\n\nJoint work has also begun on AI integration into government structures, workforce development, and building an educational system. For MLC this is a key transition point: from being a community movement to participating in systemic change. The future of AI in Uzbekistan is being built right now, and we are part of that process."
      }
    },
    zh: {
      description: "这不只是一份备忘录。这是规模开始改变的时刻。",
      blocks: {
        2: "MLC 与乌兹别克斯坦共和国数字技术部人工智能中心建立了正式合作关系。社区成员现在有机会在 AI 中心实习——参与真实任务和国家级项目。\n\n双方还开始了将 AI 融入政府机构、培养人才和构建教育体系的联合工作。对 MLC 来说，这是一个重要的转折点：从社区运动参与到系统性变革。乌兹别克斯坦 AI 的未来正在此刻构建，而我们是这一进程的一部分。"
      }
    }
  },
  "11": {
    uz: {
      description: "Fintech va AI uzoq vaqt parallel yashab keldi. MLC va Imanum hamkorligi bu ikki dunyo orasidagi devorni olib tashladi.",
      blocks: {
        2: "Memorandum imzolanganidan so'ng MLC bitiruvchilari Iman Invest da rasman stajirovka imkoniyatini qo'lga kiritdi. Bu shunchaki amaliyot emas. Bu haqiqiy fintech muhitiga, jonli jamoaga va haqiqiy mas'uliyat bilan ishlashga kirish.\n\nPul faqat bank hisobi orqali emas, balki texnologiyalar orqali ham harakatlanadi. Imanum buni yaxshi tushunadi. Va endi MLC bitiruvchilari bu dunyoni o'z ko'zlari bilan ko'ra oladi."
      }
    },
    en: {
      description: "Fintech and AI have long existed in parallel. The partnership between MLC and Imanum removed the wall between these two worlds.",
      blocks: {
        2: "After signing the memorandum, MLC graduates officially gained access to internships at Iman Invest. This is not just practice. It is an entry into a real fintech environment, a live team, and work with genuine responsibility.\n\nMoney moves not only through bank accounts but also through technology. Imanum understands this well. And now MLC graduates can see this world for themselves."
      }
    },
    zh: {
      description: "金融科技与 AI 长期平行存在。MLC 与 Imanum 的合作打破了这两个世界之间的壁垒。",
      blocks: {
        2: "备忘录签署后，MLC 毕业生正式获得了在 Iman Invest 实习的机会。这不只是实习。这是进入真实金融科技环境、有活力的团队，以及承担真实责任的工作。\n\n钱不只通过银行账户流动，也通过技术流动。Imanum 深刻理解这一点。现在，MLC 毕业生可以亲眼看到这个世界。"
      }
    }
  },
  "10": {
    uz: {
      description: "Sun'iy intellekt — bu faqat model emas, balki uni haqiqiy biznesga joriy etish ham. Global Move aynan shu nuqtada joylashgan.",
      blocks: {
        2: "MLC va Global Move o'rtasida rasmiy hamkorlik o'rnatildi. Endi MLC talabalari Global Move ichida stajirovka o'tishi, haqiqiy vazifalar, mas'uliyat va natija bilan ishlash imkoniyatiga ega. Bu AI ko'nikmalarini harakatda sinab ko'rish uchun to'g'ri muhit."
      }
    },
    en: {
      description: "Artificial intelligence is not just the model — it is also its implementation into a real business. Global Move is exactly at that intersection.",
      blocks: {
        2: "An official partnership has been established between MLC and Global Move. Now MLC students can intern inside Global Move, working with real tasks, responsibility, and outcomes. It is the right environment to put AI skills to the test in action."
      }
    },
    zh: {
      description: "人工智能不只是模型，还包括将其落地到真实业务中。Global Move 正处于这一交叉点。",
      blocks: {
        2: "MLC 与 Global Move 建立了正式合作关系。现在，MLC 学生可以在 Global Move 内部实习，参与真实任务、承担责任并看到成果。这是将 AI 技能付诸实践的合适环境。"
      }
    }
  },
  "9": {
    uz: {
      description: "Ba'zi hamkorliklar faqat qog'ozda mavjud. Bizning AICA bilan hamkorligimiz sahnada ko'rinadi.",
      blocks: {
        1: "Samarqanddagi National AI Hackathon 2025, AICA Awards 2025 — bu tadbirlar ortida umumiy ish, yagona maqsad va bir harakat yo'nalishi bor. AICA Markaziy Osiyo miqyosida AI ekotizimini shakllantiradi, MLC esa uning eng faol ishtirokchilaridan biri bo'lib qolmoqda.\n\nBizni birlashtirgan narsa — mintaqa darajasida fikrlash qobiliyati."
      }
    },
    en: {
      description: "Some partnerships exist only on paper. Ours with AICA is visible on stage.",
      blocks: {
        1: "National AI Hackathon 2025 in Samarkand, AICA Awards 2025 — behind these events is shared work, a common goal, and one direction of movement. AICA shapes the AI ecosystem at the scale of Central Asia, and MLC remains one of its most active participants.\n\nWhat unites us is the ability to think at the regional level."
      }
    },
    zh: {
      description: "有些合作关系只停留在纸面上。我们与 AICA 的合作展示在舞台上。",
      blocks: {
        1: "2025 年撒马尔罕 National AI Hackathon、AICA Awards 2025——这些活动背后是共同的工作、相同的目标和同一个方向。AICA 在中亚范围内塑造 AI 生态，MLC 一直是其中最活跃的参与者之一。\n\n将我们联系在一起的，是在区域层面思考的能力。"
      }
    }
  },
  "8": {
    uz: {
      description: "Ba'zilari hamkorga aylanadi. Ba'zilari do'st bo'lib qoladi. UzbekVoice.ai — ikkalasi ham.",
      blocks: {
        2: "Bizning hamkorligimiz juda uzoqqa ketadi: ML Rewind 2022, qo'shma loyihalar va MLC ishtirokida tashkil etilgan UzbekVoice Camp. Asoschisi Bahodir Hasanov MLC uchun shunchaki hamkor emas, balki bu yo'lning bir qismi.\n\nRasmiy memorandumdan so'ng do'stlik yangi shaklga ega bo'ldi: MLC talabalari UzbekVoice.ai da stajirovka o'tash imkoniyatini qo'lga kiritdi. Bu nutq texnologiyalari va NLP da haqiqiy amaliyot — O'zbekistonda AI mutaxassislarini tayyorlashning eng amaliy yo'nalishlaridan biri."
      }
    },
    en: {
      description: "Some become partners. Some remain friends. UzbekVoice.ai is both.",
      blocks: {
        2: "Our partnership goes far back: ML Rewind 2022, joint projects, and UzbekVoice Camp organized with MLC involvement. The founder Bahodir Hasanov is for MLC not just a partner but a part of this journey.\n\nAfter the official memorandum, the friendship took on a new form: MLC students gained the opportunity to intern at UzbekVoice.ai. This is real practice in speech technologies and NLP — one of the most applied directions for training AI specialists in Uzbekistan."
      }
    },
    zh: {
      description: "有些人成为合作伙伴。有些人成为朋友。UzbekVoice.ai 两者都是。",
      blocks: {
        2: "我们的合作由来已久：ML Rewind 2022、联合项目，以及由 MLC 参与组织的 UzbekVoice Camp。创始人 Bahodir Hasanov 对 MLC 来说不只是合作伙伴，更是这段旅程的一部分。\n\n正式备忘录签署后，友谊有了新的形式：MLC 学生获得了在 UzbekVoice.ai 实习的机会。这是在语音技术和 NLP 领域的真实实践——也是培养乌兹别克斯坦 AI 专家最具应用价值的方向之一。"
      }
    }
  },
  "7": {
    uz: { description: "Yoshlar bilan ishlash, o'sish va yangi imkoniyatlar yaratishda hamkor." },
    en: { description: "A partner in youth development, growth, and creating new opportunities." },
    zh: { description: "青年发展、成长与创造新机遇的合作伙伴。" }
  },
  "6": {
    uz: {
      description: "Hamma narsaning vatani bor. MLC vatani — INHA.",
      blocks: {
        1: "Hamma narsa aynan shu yerda boshlandi: birinchi Python darslari, birinchi xatolar, birinchi 'bu umuman nima?' savollari. Katta tajribasi bo'lmagan, ammo o'z ishiga kuchli ishonchi bo'lgan kichik, lekin qiziquvchan odamlar guruhi — barcha MLC asoschilari shu devorlar ichida o'qigan va shu muhitda shakllanган.\n\nINHA University — bu shunchaki universitet emas. Bu Machine Learning Club ning tug'ilgan joyi. Va universitet bu g'oyani boshidanoq qo'llab-quvvatladi — kutishlar va ortiqcha shartlarsiz."
      }
    },
    en: {
      description: "Everything has a home. MLC's home is INHA.",
      blocks: {
        1: "This is where it all began: the first Python classes, the first mistakes, the first questions of 'what even is this?' A small but curious group of people without much experience but with strong belief in their cause — all MLC founders studied within these walls and were shaped by this environment.\n\nINHA University is not just a university. It is the birthplace of Machine Learning Club. And the university supported this idea from the very beginning — without expectations and without unnecessary conditions."
      }
    },
    zh: {
      description: "万物皆有根。MLC 的根在 INHA。",
      blocks: {
        1: "一切都从这里开始：第一堂 Python 课、第一次犯错、第一个「这究竟是什么？」的问题。一小群没有太多经验却对自己的事业充满信念的好奇者——所有 MLC 创始人都在这些墙壁内学习，并在这个环境中成长。\n\nINHA University 不只是一所大学。它是 Machine Learning Club 的诞生地。而这所大学从一开始就支持了这个想法——没有期望，没有多余的条件。"
      }
    }
  }
};

export function getPartnerStoryById(id: string) {
  return partnerStories.find((partner) => partner.id === id);
}

export function getPartnerStoryByIdLocalized(id: string, lang: SiteLanguage): PartnerStory | undefined {
  const base = partnerStories.find((partner) => partner.id === id);
  if (!base || lang === "ru") return base;

  const t = partnerTranslations[id]?.[lang];
  if (!t) return base;

  return {
    ...base,
    description: t.description ?? base.description,
    blocks: base.blocks.map((block) => {
      if (block.type !== "text" || !t.blocks?.[block.order]) return block;
      return { ...block, value: t.blocks[block.order] };
    })
  };
}
