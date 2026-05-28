import graduateDetails from "@/data/graduateDetails.json";
import type { SiteLanguage } from "@/lib/siteCopy";

type GraduateBlockRaw =
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

type GraduateRaw = {
  id: number;
  fullname: string;
  company: string;
  position: string;
  title: string;
  subtitle: string;
  photo: string;
  courseId: number;
  blocks: GraduateBlockRaw[];
  createdAt: string;
};

type GraduateTranslation = {
  title: string;
  subtitle: string;
  position: string;
  blocks: Record<number, string>;
};

export type GraduateBlock =
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

export type GraduateStory = {
  id: string;
  numericId: number;
  name: string;
  company: string;
  position: string;
  title: string;
  subtitle: string;
  photo: string;
  teaser: string;
  blocks: GraduateBlock[];
};

function mediaUrl(fileName?: string) {
  return fileName ? `/graduates-avif/${fileName.replace(/\.[^.]+$/, "")}.avif` : "";
}

function stripHtml(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|h1|h2|h3|blockquote|em|strong)>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function buildTeaser(blocks: GraduateBlock[]) {
  const firstText = blocks.find((block) => block.type === "text");
  if (!firstText || firstText.type !== "text") return "";
  const plain = stripHtml(firstText.value);
  return plain.length > 180 ? `${plain.slice(0, 177).trim()}...` : plain;
}

const graduateTranslations: Record<number, GraduateTranslation> = {
  15: {
    title: "От инженерного мышления к Data Science",
    subtitle: "Как техническая база превращается в сильную аналитическую карьеру",
    position: "Data Scientist",
    blocks: {
      1: "<p>Когда Ахрорбек пришёл в MLC, у него уже была крепкая техническая база. Но ему было важно не просто писать код, а глубже понять, как данные превращаются в выводы, решения и работающие модели. Именно поэтому он выбрал путь через практику, системную аналитику и реальные задачи.</p>",
      3: "<p>Во время обучения он прошёл путь от фундаментальных тем до прикладных ML-кейсов: строил модели, тестировал гипотезы, ошибался, переделывал и постепенно собрал сильное профессиональное мышление. Сегодня Ахрорбек работает Data Scientist в UzInfocom и использует тот же подход в реальных проектах: думать через данные, проверять идеи на практике и доводить решение до результата.</p>"
    }
  },
  14: {
    title: "От обучения к первой сильной роли",
    subtitle: "Путь Самандара от курса к работе в продуктовой команде",
    position: "Data Analyst",
    blocks: {
      1: "<p><strong>MLC:</strong> Самандар, как проходил ваш переход от курса к реальной работе?</p><p><strong>Самандар:</strong> Сразу после завершения обучения мне предложили стажировку. Это был очень важный этап: я смог увидеть, как теоретические знания работают в настоящей команде и на реальных задачах. Рядом были менторы, которые помогали двигаться увереннее и быстрее адаптироваться.</p><p><strong>MLC:</strong> Что из опыта MLC оказалось самым полезным?</p><p><strong>Самандар:</strong> Помимо технической базы, MLC дал мне среду, где можно было не бояться задавать вопросы, пробовать и расти через практику. Именно эта поддержка сильно повлияла на мой старт. После стажировки я остался в IMANUM уже в роли Data Analyst.</p>"
    }
  },
  13: {
    title: "Первые шаги в AI и Data Science",
    subtitle: "История роста выпускницы, которая превратила интерес в профессию",
    position: "Data Scientist",
    blocks: {
      1: "<p>Ситора пришла в MLC с живым интересом к данным и желанием разобраться, как аналитика и искусственный интеллект работают в настоящей среде. Уже на первых этапах обучения она почувствовала, что Data Science — это не только про цифры, но и про умение видеть за ними реальные закономерности и решения.</p>",
      3: "<p>Постепенно интерес превратился в устойчивую профессиональную траекторию. Практические задания, менторская поддержка и атмосфера сильного сообщества помогли Ситоре выстроить портфолио и почувствовать уверенность в собственном направлении. Она не просто изучала модели, а училась мыслить как специалист по данным.</p>",
      5: "<p>Сегодня Ситора продолжает развиваться в Data Science и использует знания, полученные в MLC, как фундамент для новых проектов и роста. Её история показывает, что уверенный старт в AI начинается с правильной среды, живой практики и людей, которые помогают не останавливаться на полпути.</p>"
    }
  },
  12: {
    title: "Когда системность становится преимуществом",
    subtitle: "Путь к сильной инженерной роли через глубокую подготовку",
    position: "Senior Software Engineer",
    blocks: {
      1: "<p>Темурмалик строил свой путь последовательно: крепкая база, дисциплина, практика и постоянное усложнение задач. В MLC он усилил фундамент, научился глубже смотреть на архитектуру решений и работать с технологиями не поверхностно, а вдумчиво и системно.</p><p>Сегодня он занимает позицию Senior Software Engineer в EPAM Systems. Его история — это пример того, как сильная образовательная среда и привычка разбираться в деталях превращаются в уверенный карьерный рост и высокий инженерный уровень.</p>"
    }
  },
  11: {
    title: "MLC помог мне найти своё направление",
    subtitle: "История входа в мир больших данных",
    position: "Big Data Engineer",
    blocks: {
      1: "<p>Когда Ильхомжон только выбирал направление в data-сфере, MLC стал для него точкой ясности. Здесь сложные темы объяснялись через практику, а работа над задачами помогала не просто понимать материал, а применять его руками в реальном процессе.</p><p><em>«MLC стал важной частью моего профессионального фундамента. Здесь я получил не только знания, но и уверенность в том, что двигаюсь в правильную сторону».</em></p>",
      2: "<p>Сегодня Ильхомжон работает Big Data Engineer в IpotekaBank OTP Group и занимается задачами на больших объёмах данных. Всё, что когда-то начиналось с первых вопросов и экспериментов в MLC, со временем превратилось в устойчивую профессиональную роль и сильную техническую базу.</p>"
    }
  },
  10: {
    title: "Поддержка, которая доводит до результата",
    subtitle: "О первой практике и старте карьеры в Computer Vision",
    position: "Computer Vision Engineer",
    blocks: {
      1: "<p><strong>MLC:</strong> Что было самым важным после завершения курса?</p><p><strong>Батирнияз:</strong> Самое ценное — это поддержка после обучения. Нам помогали с резюме, доводили проекты до сильного уровня и подсказывали, как увереннее выходить на рынок труда.</p><p><strong>MLC:</strong> Что это изменило для вас?</p><p><strong>Батирнияз:</strong> Именно так я нашёл первую стажировку, а позже вышел на роль Computer Vision Engineer в AKS Labs. MLC дал мне не только знания, но и понимание, как применять их в реальной профессиональной среде.</p>"
    }
  },
  9: {
    title: "От первых проектов к большой технологической среде",
    subtitle: "История роста ML-инженера",
    position: "ML Engineer",
    blocks: {
      1: "<p>Азиз пришёл в MLC с желанием глубже понять машинное обучение и превратить интерес в реальную карьеру. Через практику, проекты и постоянную обратную связь он быстро вышел на уровень, где знания начали работать на настоящих задачах и продуктовых кейсах.</p>",
      3: "<p>Сегодня Азиз работает ML Engineer в Uzum Technologies. Его история — хороший пример того, как системное обучение, участие в проектах и сильное окружение помогают за короткое время вырасти в специалиста, готового к серьёзной технологической нагрузке.</p>"
    }
  },
  8: {
    title: "Смена направления, которая сработала",
    subtitle: "От веб-разработки к машинному обучению",
    position: "ML Engineer",
    blocks: {
      1: "<p>До прихода в MLC Нурмухаммед занимался веб-разработкой, но понял, что хочет полностью сменить траекторию и уйти в AI. В MLC он получил структурированное обучение, много практики и возможность проверить себя на реальных кейсах, а не только на теории.</p><p>Постепенно знания превратились в сильное портфолио, а затем и в профессиональный старт. Сегодня Нурмухаммед работает ML Engineer в Alif Bank и продолжает развиваться в машинном обучении уже на уровне реальных бизнес-задач.</p>"
    }
  },
  7: {
    title: "Сильное сообщество может ускорить карьеру",
    subtitle: "Как практика и связи превращаются в результат",
    position: "ML Engineer",
    blocks: {
      1: "<p><strong>MLC:</strong> Что для вас было самым ценным в MLC?</p><p><strong>Аброр:</strong> Не только обучение, но и само сообщество. Здесь я оказался среди людей с похожими целями, а каждое мероприятие давало новые знакомства, идеи и практический импульс.</p><p><strong>MLC:</strong> Повлиял ли нетворкинг на вашу карьеру?</p><p><strong>Аброр:</strong> Очень сильно. Именно через окружение и проекты MLC я получил тот толчок, который помог выйти на первую серьёзную практику. Сейчас я работаю ML Engineer в Timloch.ai и до сих пор ощущаю, насколько важной была эта среда на старте.</p>"
    }
  },
  6: {
    title: "Одно решение может изменить весь путь",
    subtitle: "История выпускника, который быстро вырос в управленческую роль",
    position: "COO",
    blocks: {
      1: "<p>Кобилжон пришёл в MLC как обычный студент, но очень быстро начал превращать обучение в действия. Каждое мероприятие, каждый разговор и каждый проект стали для него частью более крупной траектории роста.</p><p>После курса он прошёл стажировку в Global Move, а затем получил предложение на международную AI-роль. Сегодня Кобилжон работает COO в RepliUz, управляет командами и участвует в сложных продуктовых решениях. Его история показывает, как быстро может меняться масштаб возможностей, если всерьёз включиться в работу.</p>"
    }
  },
  5: {
    title: "Углубление знаний вывело меня на новый уровень",
    subtitle: "История роста в продукте и AI",
    position: "Product Manager",
    blocks: {
      1: "<p>Когда Азиза пришла в MLC, у неё уже был опыт в AI-среде, но не хватало глубины и системности. Обучение помогло выстроить полноценное понимание искусственного интеллекта и того, как эти знания использовать в продуктовой работе.</p><p>Сегодня она работает Product Manager в BRB-Tech и параллельно развивает собственный AI-стартап. Для неё MLC стал не просто курсом, а средой, которая помогла подняться на следующий профессиональный уровень и смелее смотреть на технологические проекты.</p>"
    }
  },
  4: {
    title: "Кто ищет — тот находит",
    subtitle: "История о среде, которая помогает двигаться вперёд",
    position: "Разработчик",
    blocks: {
      1: "<p><strong>MLC:</strong> Что вы выделили бы в MLC в первую очередь?</p><p><strong>Абдулазиз:</strong> Это не только обучение, а живое сообщество. Здесь постоянно появляются новые знакомства, идеи и возможности для роста.</p><p><strong>MLC:</strong> Что это дало вам лично?</p><p><strong>Абдулазиз:</strong> Атмосфера сообщества сильно повлияла на моё развитие. Сегодня я работаю разработчиком в TBC Bank и во многом опираюсь на тот опыт, который получил именно в MLC.</p><p><strong>MLC:</strong> Что бы вы посоветовали новым участникам?</p><p><strong>Абдулазиз:</strong> Быть активными, использовать нетворкинг и не ждать идеального момента. В MLC очень многое зависит от того, насколько вы сами готовы двигаться вперёд.</p>"
    }
  }
};

export const graduateStories: GraduateStory[] = (graduateDetails as GraduateRaw[]).map((graduate) => {
  const translation = graduateTranslations[graduate.id];

  const translatedBlocks: GraduateBlock[] = graduate.blocks
    .map((block) =>
      block.type === "image_group"
        ? {
            ...block,
            images: block.images.map((image) => mediaUrl(image))
          }
        : {
            ...block,
            value: translation?.blocks?.[block.order] ?? "<p>История этого выпускника скоро появится в полном формате.</p>"
          }
    )
    .sort((left, right) => left.order - right.order);

  return {
    id: String(graduate.id),
    numericId: graduate.id,
    name: graduate.fullname.trim(),
    company: graduate.company.trim(),
    position: translation?.position ?? graduate.position.trim(),
    title: translation?.title ?? graduate.title.trim(),
    subtitle: translation?.subtitle ?? graduate.subtitle.trim(),
    photo: mediaUrl(graduate.photo),
    teaser: buildTeaser(translatedBlocks),
    blocks: translatedBlocks
  };
});

export function getGraduateStoryById(id: string) {
  return graduateStories.find((graduate) => graduate.id === id);
}

const graduateTranslationsUz: Record<number, GraduateTranslation> = {
  15: {
    title: "Muhandislik tafakkuridan Data Science ga",
    subtitle: "Texnik baza kuchli analitik kareraga qanday aylanadi",
    position: "Data Scientist",
    blocks: {
      1: "<p>Akhroрbek MLC ga kelganida uning allaqachon mustahkam texnik bazasi bor edi. Ammo unga shunchaki kod yozish emas, balki ma'lumotlar qanday tushunchalarga, qarorlar va ishlaydigan modellarga aylanishini chuqurroq tushunish muhim edi. Shuning uchun u amaliyot, tizimli tahlil va real vazifalar orqali o'sish yo'lini tanladi.</p>",
      3: "<p>O'qish davomida u asosiy mavzulardan amaliy ML keyslariga o'tdi: modellar qurdi, gipotezalar sinadi, xato qildi, qayta ishladi va asta-sekin kuchli professional tafakkurni shakllantirdi. Bugun Akhroрbek UzInfocom da Data Scientist sifatida ishlaydi va xuddi shu yondashuvni real loyihalarda qo'llaydi: ma'lumotlar orqali o'ylash, g'oyalarni amalda sinash va yechimlarni natijaga olib borish.</p>"
    }
  },
  14: {
    title: "O'qishdan birinchi kuchli rolga",
    subtitle: "Samandarning kursdan product jamoasida ishlashga yo'li",
    position: "Data Analyst",
    blocks: {
      1: "<p><strong>MLC:</strong> Samandar, kursdan haqiqiy ishga o'tish qanday bo'ldi?</p><p><strong>Samandar:</strong> O'qishni tugatganimdan so'ng darhol menga stajirovka taklif qilishdi. Bu juda muhim bosqich bo'ldi: nazariy bilimlar haqiqiy jamoada va real vazifalarda qanday ishlashini ko'rish imkoniyatim bo'ldi. Yonimda ishonch bilan oldinga yurish va tezroq moslashishga yordam beradigan mentorlar bor edi.</p><p><strong>MLC:</strong> MLC tajribasidan eng foydali narsa nima bo'ldi?</p><p><strong>Samandar:</strong> Texnik bazadan tashqari, MLC menga savol berishdan qo'rqmaslik, sinab ko'rish va amaliyot orqali o'sish mumkin bo'lgan muhit berdi. Aynan shu qo'llab-quvvatlash mening startimga kuchli ta'sir ko'rsatdi. Stajirovkadan so'ng IMANUM da Data Analyst sifatida qoldim.</p>"
    }
  },
  13: {
    title: "AI va Data Science da birinchi qadamlar",
    subtitle: "Qiziqishni kasb ga aylantirgan bitiruvchining o'sish hikoyasi",
    position: "Data Scientist",
    blocks: {
      1: "<p>Sitora MLC ga ma'lumotlarga bo'lgan jonli qiziqish va analitika hamda sun'iy intellekt haqiqiy muhitda qanday ishlashini tushunish istagi bilan keldi. O'qishning ilk bosqichlaridayoq u Data Science nafaqat raqamlar haqida ekanligini, balki ularning ortidagi real qonuniyatlar va yechimlarni ko'ra bilish haqida ekanligini his qildi.</p>",
      3: "<p>Asta-sekin qiziqish barqaror professional yo'nalishga aylandi. Amaliy topshiriqlar, mentor qo'llab-quvvatlashi va kuchli hamjamiyat muhiti Sitoraga portfolio tuzish va o'z yo'nalishiga ishonch hosil qilishga yordam berdi. U shunchaki modellarni o'rganib qolmay, ma'lumotlar mutaxassisi kabi fikrlashni ham o'rgandi.</p>",
      5: "<p>Bugun Sitora Data Science sohasida rivojlanishda davom etmoqda va MLC da olgan bilimlarini yangi loyihalar va o'sish uchun poydevor sifatida qo'llaydi. Uning hikoyasi AI da ishonchli start to'g'ri muhit, jonli amaliyot va davom etishga yordam beradigan odamlardan boshlanishini ko'rsatadi.</p>"
    }
  },
  12: {
    title: "Tizimlilik ustunlikka aylanganida",
    subtitle: "Chuqur tayyorgarlik orqali kuchli muhandislik roliga yo'l",
    position: "Senior Software Engineer",
    blocks: {
      1: "<p>Temurmalik o'z yo'lini izchil qurdi: mustahkam baza, intizom, amaliyot va vazifalarning doimiy murakkablashuvi. MLC da u poydevorini mustahkamladi, yechimlar arxitekturasiga chuqurroq qarashni o'rgandi va texnologiyalar bilan yuzaki emas, balki o'ylab va tizimli ishladi.</p><p>Bugun u EPAM Systems da Senior Software Engineer lavozimini egallaydi. Uning hikoyasi kuchli ta'lim muhiti va tafsilotlarga kirishish odati ishonchli karyera o'sishiga va yuqori muhandislik darajasiga qanday aylanishini ko'rsatadi.</p>"
    }
  },
  11: {
    title: "MLC menga yo'nalishimni topishga yordam berdi",
    subtitle: "Katta ma'lumotlar dunyosiga kirish hikoyasi",
    position: "Big Data Engineer",
    blocks: {
      1: "<p>Ilkhomjon ma'lumotlar sohasida yo'nalishini tanlayotganida, MLC uning uchun aniqlik nuqtasiga aylandi. Bu yerda murakkab mavzular amaliyot orqali tushuntirilardi va vazifalar ustida ishlash unga materialni shunchaki tushunib qolmasdan, uni haqiqiy jarayonda o'z qo'llari bilan qo'llashga yordam berdi.</p><p><em>«MLC mening professional asosimning muhim qismiga aylandi. Bu yerda nafaqat bilim, balki to'g'ri yo'nalishda harakat qilayotganimga ishonch ham oldim».</em></p>",
      2: "<p>Bugun Ilkhomjon IpotekaBank OTP Group da Big Data Engineer sifatida ishlaydi va katta hajmdagi ma'lumotlar bilan vazifalar bajaradi. MLC da birinchi savol va tajribalardan boshlangan hamma narsa vaqt o'tishi bilan barqaror professional rolga va kuchli texnik bazaga aylandi.</p>"
    }
  },
  10: {
    title: "Natijaga olib boradigan qo'llab-quvvatlash",
    subtitle: "Birinchi amaliyot va Computer Vision sohasidagi karyera starti haqida",
    position: "Computer Vision Engineer",
    blocks: {
      1: "<p><strong>MLC:</strong> Kursni tugatgandan so'ng eng muhim narsa nima bo'ldi?</p><p><strong>Batirniyaz:</strong> Eng qimmatli narsa — o'qishdan keyingi qo'llab-quvvatlash edi. Bizga rezume tuzishda yordam berishdi, loyihalarni kuchli darajaga olib chiqishdi va mehnat bozoriga ishonch bilan qanday chiqishni ko'rsatishdi.</p><p><strong>MLC:</strong> Bu siz uchun nimani o'zgartirdi?</p><p><strong>Batirniyaz:</strong> Aynan shunday birinchi stajirovkani topdim, keyinroq esa AKS Labs da Computer Vision Engineer roliga o'tdim. MLC menga nafaqat bilim, balki uni haqiqiy professional muhitda qanday qo'llashni ham tushunishni berdi.</p>"
    }
  },
  9: {
    title: "Birinchi loyihalardan katta texnologik muhitga",
    subtitle: "ML muhandisning o'sish hikoyasi",
    position: "ML Engineer",
    blocks: {
      1: "<p>Aziz machine learning ni chuqurroq tushunish va qiziqishni haqiqiy karyeraga aylantirish istagi bilan MLC ga keldi. Amaliyot, loyihalar va doimiy fikr-mulohaza orqali u tez orada bilimlar real vazifalar va product keyslarida ishlashni boshlagan darajaga yetdi.</p>",
      3: "<p>Bugun Aziz Uzum Technologies da ML Engineer sifatida ishlaydi. Uning hikoyasi tizimli o'qish, loyihalarda ishtirok etish va kuchli muhit qisqa vaqt ichida jiddiy texnik yuklamaga tayyor mutaxassisga aylanishga qanday yordam berishini ko'rsatuvchi yaxshi misol.</p>"
    }
  },
  8: {
    title: "Muvaffaqiyat bilan yakunlangan yo'nalish o'zgarishi",
    subtitle: "Veb-dasturlashdan machine learning ga",
    position: "ML Engineer",
    blocks: {
      1: "<p>MLC ga kelishdan oldin Nurmuhammed veb-dasturlash bilan shug'ullangan, ammo butunlay yo'nalishini o'zgartirish va AI ga o'tishni xohlaganligini anglab yetdi. MLC da u tuzilgan o'qish, ko'plab amaliyot va faqat nazariya emas, real keyslar ustida o'zini sinash imkoniyatini oldi.</p><p>Asta-sekin bilimlar kuchli portfolioga, so'ngra professional startga aylandi. Bugun Nurmuhammed Alif Bank da ML Engineer sifatida ishlaydi va machine learning da rivojlanishni endi real biznes vazifalari darajasida davom ettirmoqda.</p>"
    }
  },
  7: {
    title: "Kuchli hamjamiyat karyerani tezlashtirishi mumkin",
    subtitle: "Amaliyot va aloqalar qanday qilib natijaga aylanadi",
    position: "ML Engineer",
    blocks: {
      1: "<p><strong>MLC:</strong> MLC da siz uchun eng qimmatli narsa nima edi?</p><p><strong>Abror:</strong> Nafaqat o'qish, balki hamjamiyatning o'zi. Bu yerda o'xshash maqsadlari bo'lgan odamlar orasida bo'ldim va har bir tadbir yangi tanishuvlar, g'oyalar va amaliy impuls berdi.</p><p><strong>MLC:</strong> Networking karyerangizga ta'sir qildimi?</p><p><strong>Abror:</strong> Juda kuchli. Aynan MLC muhiti va loyihalari orqali birinchi jiddiy amaliyotga yetishishga yordam bergan turtki oldim. Hozir Timloch.ai da ML Engineer sifatida ishlayman va start davrida shu muhit qanchalik muhim bo'lganini hamon his qilaman.</p>"
    }
  },
  6: {
    title: "Bitta qaror butun yo'lni o'zgartirishi mumkin",
    subtitle: "Tez boshqaruv roliga o'sib chiqqan bitiruvchining hikoyasi",
    position: "COO",
    blocks: {
      1: "<p>Kobiljón MLC ga oddiy talaba sifatida keldi, lekin juda tez o'qishni harakatlarga aylantira boshladi. Har bir tadbir, har bir suhbat va har bir loyiha kattaroq o'sish traektoriyasining bir qismiga aylandi.</p><p>Kursdan so'ng u Global Move da stajirovka o'tdi, keyin esa xalqaro AI roliga taklif oldi. Bugun Kobiljón RepliUz da COO sifatida ishlaydi, jamoalarni boshqaradi va murakkab product qarorlarida ishtirok etadi. Uning hikoyasi ish bilan haqiqatan shug'ullanilsa imkoniyatlar miqyosi qanchalik tez o'zgarishi mumkinligini ko'rsatadi.</p>"
    }
  },
  5: {
    title: "Bilimlarni chuqurlashtirish meni yangi darajaga olib chiqdi",
    subtitle: "Product va AI da o'sish hikoyasi",
    position: "Product Manager",
    blocks: {
      1: "<p>Aziza MLC ga kelganida uning allaqachon AI muhitida tajribasi bor edi, ammo chuqurlik va tizimlilik yetishmayotgandi. O'qish sun'iy intellektni to'liq tushunishni va bu bilimlarni product ishida qanday qo'llashni shakllantirishga yordam berdi.</p><p>Bugun u BRB-Tech da Product Manager sifatida ishlaydi va parallel ravishda o'z AI startapini rivojlantirmoqda. U uchun MLC shunchaki kurs emas, balki keyingi professional darajaga ko'tarilishga va texnologik loyihalarga yanada dadil qarashga yordam bergan muhit bo'ldi.</p>"
    }
  },
  4: {
    title: "Qidirgan topadi",
    subtitle: "Oldinga harakatlanishga yordam beradigan muhit haqida hikoya",
    position: "Dasturchi",
    blocks: {
      1: "<p><strong>MLC:</strong> MLC da nimani eng avvalo ajratib ko'rsatardingiz?</p><p><strong>Abdulaziz:</strong> Bu shunchaki o'qish emas, jonli hamjamiyat. Bu yerda doimo yangi tanishuvlar, g'oyalar va o'sish imkoniyatlari paydo bo'ladi.</p><p><strong>MLC:</strong> Bu shaxsan sizga nima berdi?</p><p><strong>Abdulaziz:</strong> Hamjamiyat muhiti mening rivojlanishimga kuchli ta'sir ko'rsatdi. Bugun TBC Bank da dasturchi sifatida ishlayotirman va ko'p jihatdan aynan MLC da olgan tajribamga tayanaman.</p><p><strong>MLC:</strong> Yangi ishtirokchilarga nima maslahad berardingiz?</p><p><strong>Abdulaziz:</strong> Faol bo'ling, networkingdan foydalaning va ideal momentni kutmang. MLC da ko'p narsa o'zingiz qanchalik oldinga harakat qilishga tayyorligingizga bog'liq.</p>"
    }
  }
};

const graduateTranslationsEn: Record<number, GraduateTranslation> = {
  15: {
    title: "From engineering thinking to Data Science",
    subtitle: "How a technical foundation turns into a strong analytical career",
    position: "Data Scientist",
    blocks: {
      1: "<p>When Akhroрbek joined MLC, he already had a solid technical foundation. But what mattered to him was not just writing code — he wanted to understand more deeply how data turns into insights, decisions, and working models. That is why he chose to grow through practice, systematic analysis, and real tasks.</p>",
      3: "<p>During his training he went from foundational topics to applied ML cases: he built models, tested hypotheses, made mistakes, iterated, and gradually developed strong professional thinking. Today Akhroрbek works as a Data Scientist at UzInfocom and applies the same approach to real projects: think through data, test ideas in practice, and bring solutions to completion.</p>"
    }
  },
  14: {
    title: "From training to the first strong role",
    subtitle: "Samandar's path from a course to working in a product team",
    position: "Data Analyst",
    blocks: {
      1: "<p><strong>MLC:</strong> Samandar, how did your transition from the course to real work go?</p><p><strong>Samandar:</strong> Right after finishing my training I was offered an internship. It was a very important stage: I could see how theoretical knowledge works in a real team on actual tasks. There were mentors nearby who helped me move with more confidence and adapt faster.</p><p><strong>MLC:</strong> What from the MLC experience was most useful?</p><p><strong>Samandar:</strong> Beyond the technical foundation, MLC gave me an environment where I was not afraid to ask questions, try things, and grow through practice. That support had a strong impact on my start. After the internship I stayed at IMANUM in the role of Data Analyst.</p>"
    }
  },
  13: {
    title: "First steps in AI and Data Science",
    subtitle: "The growth story of a graduate who turned interest into a profession",
    position: "Data Scientist",
    blocks: {
      1: "<p>Sitora came to MLC with a genuine interest in data and a desire to understand how analytics and artificial intelligence work in a real environment. Already in the early stages of her training she felt that Data Science is not just about numbers, but about being able to see the real patterns and solutions behind them.</p>",
      3: "<p>Gradually, interest turned into a stable professional trajectory. Practical assignments, mentoring support, and the atmosphere of a strong community helped Sitora build a portfolio and gain confidence in her own direction. She was not just studying models, she was learning to think like a data specialist.</p>",
      5: "<p>Today Sitora continues to develop in Data Science and uses the knowledge from MLC as a foundation for new projects and growth. Her story shows that a confident start in AI begins with the right environment, hands-on practice, and people who help you keep going.</p>"
    }
  },
  12: {
    title: "When being systematic becomes an advantage",
    subtitle: "The path to a strong engineering role through deep preparation",
    position: "Senior Software Engineer",
    blocks: {
      1: "<p>Temurmalik built his path consistently: strong foundation, discipline, practice, and constant increase in task complexity. At MLC he strengthened his foundation, learned to look deeper at solution architecture, and worked with technologies not superficially but thoughtfully and systematically.</p><p>Today he holds the position of Senior Software Engineer at EPAM Systems. His story is an example of how a strong educational environment and the habit of getting into details turn into confident career growth and a high engineering level.</p>"
    }
  },
  11: {
    title: "MLC helped me find my direction",
    subtitle: "A story of entering the world of big data",
    position: "Big Data Engineer",
    blocks: {
      1: "<p>When Ilkhomjon was just choosing his direction in the data world, MLC became his point of clarity. Here complex topics were explained through practice, and working on tasks helped him not just understand the material but apply it with his own hands in a real process.</p><p><em>&ldquo;MLC became an important part of my professional foundation. Here I received not only knowledge but also confidence that I was moving in the right direction.&rdquo;</em></p>",
      2: "<p>Today Ilkhomjon works as a Big Data Engineer at IpotekaBank OTP Group, working with large data volumes. Everything that once started with first questions and experiments at MLC over time turned into a stable professional role and a strong technical foundation.</p>"
    }
  },
  10: {
    title: "The support that takes you all the way to the result",
    subtitle: "On the first internship and the start of a career in Computer Vision",
    position: "Computer Vision Engineer",
    blocks: {
      1: "<p><strong>MLC:</strong> What was most important after completing the course?</p><p><strong>Batirniyaz:</strong> The most valuable thing was the support after training. They helped us with our CVs, brought projects up to a strong level, and guided us on how to enter the job market with more confidence.</p><p><strong>MLC:</strong> What did that change for you?</p><p><strong>Batirniyaz:</strong> That is exactly how I found my first internship, and later moved into the role of Computer Vision Engineer at AKS Labs. MLC gave me not only knowledge but also an understanding of how to apply it in a real professional environment.</p>"
    }
  },
  9: {
    title: "From first projects to a large tech environment",
    subtitle: "The growth story of an ML engineer",
    position: "ML Engineer",
    blocks: {
      1: "<p>Aziz came to MLC with a desire to understand machine learning more deeply and turn that interest into a real career. Through practice, projects, and constant feedback he quickly reached the level where knowledge started working on real tasks and product cases.</p>",
      3: "<p>Today Aziz works as an ML Engineer at Uzum Technologies. His story is a good example of how systematic learning, project involvement, and a strong environment can help someone quickly grow into a specialist ready for serious technical challenges.</p>"
    }
  },
  8: {
    title: "The direction change that worked",
    subtitle: "From web development to machine learning",
    position: "ML Engineer",
    blocks: {
      1: "<p>Before coming to MLC, Nurmuhammed worked in web development, but realized he wanted to fully switch tracks and go into AI. At MLC he got structured training, lots of practice, and the opportunity to test himself on real cases rather than just theory.</p><p>Gradually, knowledge turned into a strong portfolio and then into a professional start. Today Nurmuhammed works as an ML Engineer at Alif Bank and continues to develop in machine learning now at the level of real business tasks.</p>"
    }
  },
  7: {
    title: "A strong community can accelerate your career",
    subtitle: "How practice and connections turn into results",
    position: "ML Engineer",
    blocks: {
      1: "<p><strong>MLC:</strong> What was most valuable about MLC for you?</p><p><strong>Abror:</strong> Not just the education, but the community itself. Here I found myself among people with similar goals, and every event gave new connections, ideas, and practical momentum.</p><p><strong>MLC:</strong> Did the networking affect your career?</p><p><strong>Abror:</strong> Very strongly. It was precisely through the MLC environment and projects that I got the push that helped me reach my first serious internship. Now I work as an ML Engineer at Timloch.ai and still feel how important that environment was at the start.</p>"
    }
  },
  6: {
    title: "One decision can change the whole path",
    subtitle: "The story of a graduate who quickly grew into a management role",
    position: "COO",
    blocks: {
      1: "<p>Kobiljón came to MLC as an ordinary student but very quickly started turning his learning into actions. Every event, every conversation, and every project became part of a larger growth trajectory.</p><p>After the course he interned at Global Move and then received an offer for an international AI role. Today Kobiljón works as COO at RepliUz, manages teams, and participates in complex product decisions. His story shows how quickly the scale of opportunity can change when you truly commit to the work.</p>"
    }
  },
  5: {
    title: "Going deeper with knowledge took me to a new level",
    subtitle: "A growth story in product and AI",
    position: "Product Manager",
    blocks: {
      1: "<p>When Aziza came to MLC, she already had experience in the AI space, but lacked depth and structure. The training helped her build a full understanding of artificial intelligence and how to use that knowledge in product work.</p><p>Today she works as a Product Manager at BRB-Tech and is simultaneously developing her own AI startup. For her, MLC was not just a course but an environment that helped her step up to the next professional level and look at technology projects with greater confidence.</p>"
    }
  },
  4: {
    title: "Those who seek will find",
    subtitle: "A story about an environment that helps you move forward",
    position: "Developer",
    blocks: {
      1: "<p><strong>MLC:</strong> What would you highlight about MLC first of all?</p><p><strong>Abdulaziz:</strong> This is not just education, it is a living community. Here new connections, ideas, and growth opportunities constantly appear.</p><p><strong>MLC:</strong> What did it give you personally?</p><p><strong>Abdulaziz:</strong> The community atmosphere had a strong influence on my development. Today I work as a developer at TBC Bank and rely heavily on the experience I gained at MLC.</p><p><strong>MLC:</strong> What would you advise new participants?</p><p><strong>Abdulaziz:</strong> Be active, use networking, and do not wait for the perfect moment. In MLC a lot depends on how ready you are to move forward yourself.</p>"
    }
  }
};

const graduateTranslationsZh: Record<number, GraduateTranslation> = {
  15: {
    title: "从工程思维到 Data Science",
    subtitle: "技术基础如何转化为强大的分析师职业",
    position: "Data Scientist",
    blocks: {
      1: "<p>当 Akhroрbek 加入 MLC 时，他已经有了扎实的技术基础。但对他来说重要的不只是写代码——他想更深入地理解数据如何转化为洞察、决策和可运行的模型。这就是为什么他选择通过实践、系统分析和真实任务来成长。</p>",
      3: "<p>在学习过程中，他从基础主题走到应用型 ML 案例：构建模型、测试假设、犯错、迭代，并逐渐形成了强大的职业思维。如今，Akhroрbek 在 UzInfocom 担任 Data Scientist，并将同样的方式应用于真实项目：通过数据思考，在实践中验证想法，将解决方案推向结果。</p>"
    }
  },
  14: {
    title: "从培训到第一个重要角色",
    subtitle: "Samandar 从课程到产品团队工作的历程",
    position: "Data Analyst",
    blocks: {
      1: "<p><strong>MLC：</strong>Samandar，你从课程过渡到实际工作的过程是怎样的？</p><p><strong>Samandar：</strong>完成培训后，我立刻收到了实习邀请。这是非常重要的阶段：我能看到理论知识在真实团队和实际任务中如何发挥作用。身边有导师帮助我更自信地前进并更快地适应。</p><p><strong>MLC：</strong>MLC 经历中什么最有用？</p><p><strong>Samandar：</strong>除了技术基础之外，MLC 给了我一个不怕提问、可以尝试、通过实践成长的环境。正是这种支持对我的起步产生了很大影响。实习结束后，我留在 IMANUM 担任 Data Analyst。</p>"
    }
  },
  13: {
    title: "AI 与 Data Science 的第一步",
    subtitle: "一位将兴趣转化为职业的毕业生成长故事",
    position: "Data Scientist",
    blocks: {
      1: "<p>Sitora 带着对数据的浓厚兴趣，以及想了解分析和人工智能在真实环境中如何运作的渴望来到 MLC。在学习的早期阶段，她就感受到 Data Science 不只是关于数字，而是能够看到数字背后真实规律和解决方案的能力。</p>",
      3: "<p>渐渐地，兴趣转化为稳定的职业轨迹。实践任务、导师支持和强大社区的氛围帮助 Sitora 建立了作品集，并对自己的方向充满信心。她不只是在学习模型，而是在学习像数据专家一样思考。</p>",
      5: "<p>如今，Sitora 继续在 Data Science 领域发展，并将 MLC 学到的知识作为新项目和成长的基础。她的故事表明，在 AI 中迈出自信的第一步，始于正确的环境、实践经验，以及帮助你坚持前行的人。</p>"
    }
  },
  12: {
    title: "当系统性成为优势",
    subtitle: "通过深厚准备走向强大工程师角色的路",
    position: "Senior Software Engineer",
    blocks: {
      1: "<p>Temurmalik 的成长路径循序渐进：扎实的基础、纪律、实践，以及不断提升的任务复杂度。在 MLC，他巩固了基础，学会从更深的角度看待解决方案架构，并以深思熟虑、系统化的方式而非浅尝辄止地使用技术。</p><p>如今，他在 EPAM Systems 担任 Senior Software Engineer。他的故事说明，强大的学习环境和深入细节的习惯，能转化为自信的职业成长和高水平的工程师能力。</p>"
    }
  },
  11: {
    title: "MLC 帮我找到了自己的方向",
    subtitle: "进入大数据世界的故事",
    position: "Big Data Engineer",
    blocks: {
      1: "<p>当 Ilkhomjon 还在为数据领域选择方向时，MLC 成了他的清晰点。在这里，复杂的主题通过实践来解释，任务上的练习帮助他不只是理解材料，而是亲手在真实过程中应用它。</p><p><em>&ldquo;MLC 成为了我职业基础的重要部分。在这里，我不只获得了知识，还获得了走在正确方向上的信心。&rdquo;</em></p>",
      2: "<p>如今，Ilkhomjon 在 IpotekaBank OTP Group 担任 Big Data Engineer，处理大规模数据任务。曾经在 MLC 从第一个问题和实验开始的一切，随着时间的推移，变成了稳定的职业角色和扎实的技术基础。</p>"
    }
  },
  10: {
    title: "将你带向结果的支持",
    subtitle: "关于第一次实习和计算机视觉职业起步",
    position: "Computer Vision Engineer",
    blocks: {
      1: "<p><strong>MLC：</strong>完成课程后什么最重要？</p><p><strong>Batirniyaz：</strong>最有价值的是培训后的支持。他们帮助我们改简历、将项目提升到高水平，并指导我们如何更自信地进入就业市场。</p><p><strong>MLC：</strong>这对你改变了什么？</p><p><strong>Batirniyaz：</strong>就是这样，我找到了第一份实习，后来在 AKS Labs 担任 Computer Vision Engineer。MLC 给了我知识，也让我理解如何在真实的职业环境中应用它。</p>"
    }
  },
  9: {
    title: "从第一个项目到大型技术环境",
    subtitle: "一位 ML 工程师的成长故事",
    position: "ML Engineer",
    blocks: {
      1: "<p>Aziz 来到 MLC，希望更深入地理解机器学习，并将这份兴趣转化为真实的职业。通过实践、项目和持续反馈，他很快达到了让知识开始在真实任务和产品案例中发挥作用的水平。</p>",
      3: "<p>如今，Aziz 在 Uzum Technologies 担任 ML Engineer。他的故事很好地说明了系统学习、参与项目和强大的环境，如何帮助一个人在短时间内成长为能够应对严肃技术挑战的专家。</p>"
    }
  },
  8: {
    title: "成功的方向转变",
    subtitle: "从 Web 开发到机器学习",
    position: "ML Engineer",
    blocks: {
      1: "<p>在加入 MLC 之前，Nurmuhammed 从事 Web 开发，但意识到自己想要完全转变方向，进入 AI 领域。在 MLC，他获得了系统培训、大量实践，以及在真实案例而非仅仅是理论上检验自己的机会。</p><p>渐渐地，知识转化为强大的作品集，进而成为职业起点。如今，Nurmuhammed 在 Alif Bank 担任 ML Engineer，并继续在真实业务任务层面发展机器学习能力。</p>"
    }
  },
  7: {
    title: "强大的社区能加速你的职业成长",
    subtitle: "实践与人脉如何转化为结果",
    position: "ML Engineer",
    blocks: {
      1: "<p><strong>MLC：</strong>MLC 对你来说最有价值的是什么？</p><p><strong>Abror：</strong>不只是培训，而是社区本身。在这里，我找到了一群有相似目标的人，每一次活动都带来了新的连接、想法和实践动力。</p><p><strong>MLC：</strong>人脉对你的职业生涯有影响吗？</p><p><strong>Abror：</strong>影响很大。正是通过 MLC 的环境和项目，我得到了帮助我获得第一次正式实习的推动力。现在我在 Timloch.ai 担任 ML Engineer，仍然感受到当初那个环境在起步阶段有多重要。</p>"
    }
  },
  6: {
    title: "一个决定能改变整个路径",
    subtitle: "一位迅速成长为管理角色的毕业生故事",
    position: "COO",
    blocks: {
      1: "<p>Kobiljón 以普通学生的身份来到 MLC，但很快就开始将学习转化为行动。每一次活动、每一次对话和每一个项目都成为更大成长轨迹的一部分。</p><p>课程结束后，他在 Global Move 实习，随后获得了国际 AI 职位的邀请。如今，Kobiljón 在 RepliUz 担任 COO，管理团队，参与复杂的产品决策。他的故事展示了当你真正投入工作时，机遇的规模可以改变得多么迅速。</p>"
    }
  },
  5: {
    title: "深化知识将我带到新的高度",
    subtitle: "产品与 AI 领域的成长故事",
    position: "Product Manager",
    blocks: {
      1: "<p>当 Aziza 来到 MLC 时，她已经有了 AI 领域的经验，但缺乏深度和系统性。培训帮助她建立了对人工智能的全面理解，以及如何在产品工作中运用这些知识。</p><p>如今，她在 BRB-Tech 担任 Product Manager，同时还在发展自己的 AI 创业公司。对她来说，MLC 不只是一门课程，而是帮助她迈上下一个职业高度、更自信地看待技术项目的环境。</p>"
    }
  },
  4: {
    title: "寻找者方能找到",
    subtitle: "关于一个帮助你前行的环境的故事",
    position: "开发者",
    blocks: {
      1: "<p><strong>MLC：</strong>关于 MLC，您首先会强调什么？</p><p><strong>Abdulaziz：</strong>这不只是教育，而是一个有生命力的社区。这里不断出现新的连接、想法和成长机会。</p><p><strong>MLC：</strong>这对您个人带来了什么？</p><p><strong>Abdulaziz：</strong>社区氛围对我的成长有很大影响。现在我在 TBC Bank 做开发者，很大程度上依赖于我在 MLC 积累的经验。</p><p><strong>MLC：</strong>您会给新参与者什么建议？</p><p><strong>Abdulaziz：</strong>积极参与，利用人脉，不要等待完美的时机。在 MLC，很多事情取决于你自己准备好向前走的程度。</p>"
    }
  }
};

const translationsByLang: Partial<Record<Exclude<SiteLanguage, "ru">, Record<number, GraduateTranslation>>> = {
  uz: graduateTranslationsUz,
  en: graduateTranslationsEn,
  zh: graduateTranslationsZh
};

function buildGraduateStories(lang: SiteLanguage): GraduateStory[] {
  const translations = lang === "ru" ? graduateTranslations : (translationsByLang[lang] ?? graduateTranslations);

  return (graduateDetails as GraduateRaw[]).map((graduate) => {
    const translation = translations[graduate.id];

    const translatedBlocks: GraduateBlock[] = graduate.blocks
      .map((block) =>
        block.type === "image_group"
          ? { ...block, images: block.images.map((image) => mediaUrl(image)) }
          : {
              ...block,
              value:
                translation?.blocks?.[block.order] ??
                (lang === "ru"
                  ? "<p>История этого выпускника скоро появится в полном формате.</p>"
                  : lang === "uz"
                    ? "<p>Bu bitiruvchi hikoyasi tez orada to'liq formatda chiqadi.</p>"
                    : lang === "zh"
                      ? "<p>该毕业生的故事即将以完整形式发布。</p>"
                      : "<p>This graduate's story will appear in full format soon.</p>")
            }
      )
      .sort((left, right) => left.order - right.order);

    return {
      id: String(graduate.id),
      numericId: graduate.id,
      name: graduate.fullname.trim(),
      company: graduate.company.trim(),
      position: translation?.position ?? graduate.position.trim(),
      title: translation?.title ?? graduate.title.trim(),
      subtitle: translation?.subtitle ?? graduate.subtitle.trim(),
      photo: mediaUrl(graduate.photo),
      teaser: buildTeaser(translatedBlocks),
      blocks: translatedBlocks
    };
  });
}

export function getGraduateStoriesLocalized(lang: SiteLanguage): GraduateStory[] {
  return buildGraduateStories(lang);
}

export function getGraduateStoryByIdLocalized(id: string, lang: SiteLanguage): GraduateStory | undefined {
  return buildGraduateStories(lang).find((graduate) => graduate.id === id);
}
