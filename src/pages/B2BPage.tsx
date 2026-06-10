import { ArrowRight, ArrowUpRight, Building2, ClipboardCheck, Lightbulb, Presentation, Sparkles, Users2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionReveal } from "@/components/SectionReveal";
import { TeamGrid } from "@/components/TeamGrid";
import { b2bMentorsByLocale } from "@/data/fallbackContent";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteCopy } from "@/lib/siteCopy";

const icons = [Lightbulb, Presentation, Sparkles, ClipboardCheck, Building2, Users2];

const trainedCompanies = [
  { name: "Biznesni Rivojlantirish Banki", shortName: "BRB", domain: "brb.uz", href: "https://brb.uz/" },
  { name: "Navoi Mining and Metallurgical Company", shortName: "NGMK", domain: "ngmk.uz", href: "https://ngmk.uz/en/" },
  {
    name: "UNDP Uzbekistan",
    shortName: "UNDP",
    domain: "undp.org",
    href: "https://www.undp.org/uzbekistan",
    logoSrc: "/trained-companies/undp.svg"
  },
  {
    name: "Akkermann Cement",
    shortName: "Akkermann",
    domain: "akkermann.ru",
    href: "https://www.akkermann.ru/english/"
  },
  { name: "Exadel Poland", shortName: "Exadel Poland", domain: "exadel.com", href: "https://exadel.com/" },
  { name: "Paynet", shortName: "Paynet", domain: "paynet.uz", href: "https://paynet.uz/ru" },
  { name: "Ministry of Internal Affairs", shortName: "MIA", domain: "gov.uz", href: "https://gov.uz/ru/iiv" },
  {
    name: "Webster University in Tashkent",
    shortName: "Webster",
    domain: "webster.uz",
    href: "https://www.webster.uz/"
  }
];

const localLogoByDomain: Record<string, string> = {
  "brb.uz": "/trained-companies/brb.png",
  "ngmk.uz": "/trained-companies/ngmk.png",
  "akkermann.ru": "/trained-companies/akkermann.png",
  "exadel.com": "/trained-companies/exadel.png",
  "paynet.uz": "/trained-companies/paynet.png",
  "gov.uz": "/trained-companies/mvd.webp",
  "webster.uz": "/trained-companies/webster.png"
};

const logoUrl = (domain: string) => localLogoByDomain[domain] ?? `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;

export function B2BPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";
  const page = t("b2b", { returnObjects: true }) as any;
  const educationCopy = useSiteCopy().education;

  const programs =
    locale === "uz"
      ? [
          { title: "Menejerlar uchun AI", description: "Rahbarlar uchun strategiya, asboblar va AI fikrlash." },
          { title: "Jamoalar uchun Data Analytics", description: "SQL, BI vositalari va ma'lumotlarga asoslangan qarorlar madaniyati." },
          { title: "ML Engineering", description: "Python, ML pipeline'lar va mahsulot uchun amaliy modellar." },
          { title: "AI Automation", description: "Rutina vazifalarni avtomatlashtirish, copilots va GPT integratsiyalar." },
          { title: "Prompt Engineering", description: "Jamoalar uchun LLM vositalari bilan tizimli ishlash." },
          { title: "Moslashtirilgan dastur", description: "Sohangiz, jamoa darajasi va biznes kontekstingiz uchun." }
        ]
      : locale === "en"
        ? [
            { title: "AI for managers", description: "Strategy, tools, and AI thinking for leaders." },
            { title: "Data Analytics for teams", description: "SQL, BI tools, and a data-driven decision culture." },
            { title: "ML Engineering", description: "Python, ML pipelines, and applied models for products." },
            { title: "AI Automation", description: "Automation of routine tasks, copilots, and GPT integrations." },
            { title: "Prompt Engineering", description: "Systematic work with LLM tools for teams." },
            { title: "Custom program", description: "Tailored to your industry, team level, and business context." }
          ]
        : [
            { title: "AI для менеджеров", description: "Стратегия, инструменты и AI-мышление для руководителей." },
            { title: "Data Analytics для команд", description: "SQL, BI-инструменты и культура решений на основе данных." },
            { title: "ML Engineering", description: "Python, ML-пайплайны и прикладные модели для продукта." },
            { title: "AI Automation", description: "Автоматизация рутинных задач, copilots и GPT-интеграции." },
            { title: "Prompt Engineering", description: "Системная работа с LLM-инструментами для команд." },
            { title: "Кастомная программа", description: "Под отрасль, уровень команды и конкретный бизнес-контекст." }
          ];

  const mentors = b2bMentorsByLocale[locale] ?? b2bMentorsByLocale.ru;

  const processSteps =
    locale === "uz"
      ? [
          ["01", "Ariza", "Sayt yoki Telegram orqali so'rov qoldirasiz."],
          ["02", "Audit", "Biznes kontekstini, maqsadlarni va jamoa darajasini o'rganamiz."],
          ["03", "Dastur", "O'quv reja, format va amaliyotni tayyorlaymiz."],
          ["04", "Ta'lim", "Sessiyalar o'tkazamiz, feedback va sertifikat beramiz."]
        ]
      : locale === "en"
        ? [
            ["01", "Request", "You leave a request on the site or via Telegram."],
            ["02", "Audit", "We study your business context, goals, and team level."],
            ["03", "Program", "We prepare the curriculum, format, and practice."],
            ["04", "Training", "We run sessions, provide feedback, and issue certificates."]
          ]
        : [
            ["01", "Заявка", "Оставляете запрос на сайте или в Telegram."],
            ["02", "Аудит", "Изучаем контекст бизнеса, цели и уровень команды."],
            ["03", "Программа", "Готовим учебный план, формат и практику."],
            ["04", "Обучение", "Проводим сессии, даем фидбек и сертификаты."]
          ];

  const faqItems =
    locale === "uz"
      ? [
          { question: "Minimal guruh hajmi qancha?", answer: "Odatda 5 kishidan 50+ kishigacha. Formatni jamoa ehtiyojiga moslaymiz." },
          { question: "To'lov qanday amalga oshiriladi?", answer: "Yuridik shaxsga hisob chiqaramiz. Bosqichma-bosqich to'lov ham mumkin." },
          { question: "Korporativ sertifikat bormi?", answer: "Ha, ishtirokchilar MLC sertifikati oladi. Istasangiz kompaniya logotipini qo'shamiz." },
          { question: "Treningni sizning hududingizda o'tkazish mumkinmi?", answer: "Ha. Offline, online va hybrid formatlarda ishlaymiz." },
          { question: "Dastur qancha davom etadi?", answer: "Bir kundan uch oygacha. Maqsad va amaliyot hajmiga qarab belgilanadi." }
        ]
      : locale === "en"
        ? [
            { question: "What is the minimum group size?", answer: "Usually from 5 to 50+ people. We adapt the format to your team’s needs." },
            { question: "How does payment work?", answer: "We invoice the legal entity. Staged payments are also possible." },
            { question: "Is there a corporate certificate?", answer: "Yes, participants receive an MLC certificate. We can add your company logo as well." },
            { question: "Can the training be held at your office?", answer: "Yes. We work offline, online, and in hybrid formats." },
            { question: "How long does the program last?", answer: "From one day to three months depending on goals and practice depth." }
          ]
        : [
            { question: "Какой минимальный размер группы?", answer: "Обычно от 5 до 50+ человек. Подстраиваемся под формат команды и глубину программы." },
            { question: "Как проходит оплата?", answer: "Выставляем счет на юридическое лицо. Возможна поэтапная оплата по согласованному графику." },
            { question: "Есть ли корпоративный сертификат?", answer: "Да, участники получают именной сертификат MLC. При желании добавляем логотип вашей компании." },
            { question: "Можно ли провести обучение на вашей территории?", answer: "Да. Работаем офлайн, онлайн и в гибридном формате." },
            { question: "Сколько длится программа?", answer: "От одного дня до трех месяцев. Зависит от целей, уровня команды и объема практики." }
          ];

  usePageMeta(page.metaTitle, page.metaDescription);

  return (
    <>
      <section className="section-shell grid gap-12 py-16 lg:grid-cols-[1fr_0.92fr] lg:py-20">
        <SectionReveal>
          <p className="eyebrow">{page.hero.eyebrow}</p>
          <h1 className="display-title">{page.hero.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">{page.hero.text}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#b2b-form" className="button-primary">
              {page.hero.proposal}
              <ArrowRight size={18} />
            </a>
            <a href="https://t.me/mlc_direct" target="_blank" rel="noreferrer" className="button-secondary">
              {page.hero.telegram}
            </a>
          </div>
        </SectionReveal>
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface p-5 shadow-soft">
            <div className="absolute inset-0 dot-pattern opacity-50" />
            <img
              src="/b2b/hero.webp"
              alt="Корпоративные курсы MLC"
              className="relative aspect-[5/4] w-full rounded-[26px] object-cover"
            />
          </div>
        </SectionReveal>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <h2 className="section-title">{educationCopy.companiesTitle}</h2>
                <p className="mt-5 text-lg leading-8 text-text-secondary">
                  {educationCopy.companiesText}
                </p>
              </div>
              <span className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-text-secondary">
                {educationCopy.partnersBadge}
              </span>
            </div>
          </SectionReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trainedCompanies.map((company) => (
              <SectionReveal key={company.name}>
                <a
                  href={company.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open website ${company.name}`}
                  className="trained-company-card group flex min-h-[14rem] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <ArrowUpRight className="trained-company-card__arrow" size={18} aria-hidden="true" />
                  <div className="trained-company-card__logo flex h-24 w-24 items-center justify-center rounded-[1.7rem] p-4">
                    <img
                      src={company.logoSrc ?? logoUrl(company.domain)}
                      alt={`${company.shortName} logo`}
                      width="96"
                      height="96"
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">{company.shortName}</p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{company.name}</p>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.programs.eyebrow}</p>
            <h2 className="section-title">{page.programs.title}</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = icons[index];
              return (
                <SectionReveal key={program.title}>
                  <article className="card-surface p-6">
                    <Icon className="text-accent" size={26} />
                    <h3 className="mt-5 text-2xl font-semibold text-text">{program.title}</h3>
                    <p className="mt-4 text-base leading-8 text-text-secondary">{program.description}</p>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.mentors.eyebrow}</p>
            <h2 className="section-title">{page.mentors.title}</h2>
          </SectionReveal>
          <div className="mt-12">
            <TeamGrid members={mentors} dataSection="b2b-mentors" />
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.process.eyebrow}</p>
            <h2 className="section-title">{page.process.title}</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map(([step, title, text]) => (
              <SectionReveal key={step}>
                <div className="card-surface p-6">
                  <p className="font-mono text-4xl font-bold text-primary">{step}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-text">{title}</h3>
                  <p className="mt-3 text-base leading-8 text-text-secondary">{text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.faq.eyebrow}</p>
            <h2 className="section-title">{page.faq.title}</h2>
          </SectionReveal>
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
