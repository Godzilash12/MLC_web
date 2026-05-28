import { ArrowRight, Building2, ClipboardCheck, Lightbulb, Presentation, Sparkles, Users2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";
import { SectionReveal } from "@/components/SectionReveal";
import { TeamGrid } from "@/components/TeamGrid";
import { b2bCasesFallback, b2bMentors } from "@/data/fallbackContent";
import { useB2bCases } from "@/hooks/useCMS";
import { usePageMeta } from "@/hooks/usePageMeta";

const icons = [Lightbulb, Presentation, Sparkles, ClipboardCheck, Building2, Users2];

export function B2BPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";
  const page = t("b2b", { returnObjects: true }) as any;
  const { data: cases } = useB2bCases();

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

  const mentors =
    locale === "uz"
      ? b2bMentors.map((member, index) => ({
          ...member,
          ...[
          { role_mlc: "AI Strategy Mentor", role_external: "10+ yil tajriba, ex-TBC" },
          { role_mlc: "Data Analytics Mentor", role_external: "BI, SQL, dashboards" },
          { role_mlc: "Automation Mentor", role_external: "LLM systems, integrations" }
        ][index]
        }))
      : locale === "en"
        ? b2bMentors.map((member, index) => ({
            ...member,
            ...[
            { role_mlc: "AI Strategy Mentor", role_external: "10+ years of experience, ex-TBC" },
            { role_mlc: "Data Analytics Mentor", role_external: "BI, SQL, dashboards" },
            { role_mlc: "Automation Mentor", role_external: "LLM systems, integrations" }
          ][index]
          }))
        : b2bMentors;

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

  const fallbackQuote =
    locale === "uz"
      ? { quote_text: "Jamoa AI vositalari bo'yicha amaliy tushunchaga ega bo'ldi va ularni tezda kundalik jarayonlarga olib kirdi.", quote_author: "HR Team, Ucell" }
      : locale === "en"
        ? { quote_text: "The team gained a practical understanding of AI tools and quickly transferred them into daily workflows.", quote_author: "HR Team, Ucell" }
        : { quote_text: "Команда получила практическое понимание AI-инструментов и быстро перенесла их в ежедневные процессы.", quote_author: "HR Team, Ucell" };

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
            <img src="https://placehold.co/1000x850/F6F3FE/2D1B69?text=B2B+Training" alt="Corporate AI training" className="relative aspect-[5/4] w-full rounded-[26px] object-cover" />
          </div>
        </SectionReveal>
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

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.cases.eyebrow}</p>
            <h2 className="section-title">{page.cases.title}</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {(cases.length ? cases : b2bCasesFallback).map((item) => (
                <SectionReveal key={item.id}>
                  <div className="card-surface flex h-36 items-center justify-center p-6">
                    {item.logo_url ? <img src={item.logo_url} alt={item.company_name} className="max-h-14 object-contain" /> : <p className="text-xl font-semibold text-text">{item.company_name}</p>}
                  </div>
                </SectionReveal>
              ))}
            </div>
            <SectionReveal>
              <blockquote className="rounded-[28px] bg-primary p-8 text-white shadow-soft">
                <p className="text-2xl font-semibold leading-10 tracking-[-0.03em]">“{(cases[0] ?? fallbackQuote).quote_text}”</p>
                <footer className="mt-6 text-sm uppercase tracking-[0.2em] text-white/70">{(cases[0] ?? fallbackQuote).quote_author}</footer>
              </blockquote>
            </SectionReveal>
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

      <section id="b2b-form" className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">{page.form.eyebrow}</p>
              <h2 className="section-title">{page.form.title}</h2>
            </div>
          </SectionReveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <LeadForm leadType="b2b" sourcePage="/b2b" showMessage />
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
