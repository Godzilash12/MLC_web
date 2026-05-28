import { ArrowRight, Briefcase, GraduationCap, MessageSquareText, PlaySquare, Rocket, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LeadForm } from "@/components/LeadForm";
import { SectionReveal } from "@/components/SectionReveal";
import { coursesFallback, graduateTestimonials } from "@/data/fallbackContent";
import { useCourses } from "@/hooks/useCMS";
import { usePageMeta } from "@/hooks/usePageMeta";

const featureIcons = [PlaySquare, Briefcase, MessageSquareText, ShieldCheck, GraduationCap, Rocket];

export function B2CPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";
  const page = t("b2c", { returnObjects: true }) as any;
  const { data: courses } = useCourses();
  const baseCourses = courses.length ? courses : coursesFallback;

  const courseText: Record<string, { title: string; description: string; partner_name: string; duration: string; price: string }> =
    locale === "uz"
      ? {
          c1: { title: "Data Analytics", description: "SQL, Python, BI, statistika va produkt analitika." , partner_name: "TBC Bank bilan hamkorlikda", duration: "3-4 oy", price: "1 200 000 so'mdan" },
          c2: { title: "ML Engineering", description: "Python, machine learning, modellar, pipeline va deploy.", partner_name: "Alif bilan hamkorlikda", duration: "4-6 oy", price: "1 600 000 so'mdan" },
          c3: { title: "AI Specialist", description: "LLM, prompt engineering, copilots va jamoa avtomatizatsiyasi.", partner_name: "Yangi oqim 2026", duration: "3 oy", price: "1 400 000 so'mdan" }
        }
      : locale === "en"
        ? {
            c1: { title: "Data Analytics", description: "SQL, Python, BI, statistics, and product analytics.", partner_name: "In partnership with TBC Bank", duration: "3-4 months", price: "from 1,200,000 UZS" },
            c2: { title: "ML Engineering", description: "Python, machine learning, models, pipelines, and deployment.", partner_name: "In partnership with Alif", duration: "4-6 months", price: "from 1,600,000 UZS" },
            c3: { title: "AI Specialist", description: "LLM, prompt engineering, copilots, and team automation.", partner_name: "New cohort 2026", duration: "3 months", price: "from 1,400,000 UZS" }
          }
        : {
            c1: { title: "Data Analytics", description: "SQL, Python, BI, статистика и построение продуктовой аналитики.", partner_name: "Совместно с TBC Bank", duration: "3-4 месяца", price: "от 1 200 000 сум" },
            c2: { title: "ML Engineering", description: "Python, машинное обучение, модели, пайплайны и деплой.", partner_name: "Совместно с Alif", duration: "4-6 месяцев", price: "от 1 600 000 сум" },
            c3: { title: "AI Specialist", description: "LLM, prompt engineering, copilots и автоматизация команд.", partner_name: "Новый набор 2026", duration: "3 месяца", price: "от 1 400 000 сум" }
          };

  const localizedCourses = baseCourses.map((course) => ({
    ...course,
    ...(courseText[course.id] ?? {})
  }));

  const features =
    locale === "uz"
      ? [
          { title: "Videodarslar", text: "01AI.uz ichida tushunarli temp va trek bilan strukturalangan kurs." },
          { title: "Real loyihalar", text: "Kompaniyalar case'lari ustida ishlaysiz va portfolio yig'asiz." },
          { title: "Jonli sessiyalar", text: "Har hafta mentorlar bilan Q&A va tahlillar." },
          { title: "Student Support", text: "Butun o'qish davomida kuratorlar va support." },
          { title: "Sertifikat", text: "MLC sertifikati va trek bo'yicha hamkor tasdig'i." },
          { title: "Karyera yordami", text: "Networking, tavsiyalar va bozor uchun profilingizni kuchaytirish." }
        ]
      : locale === "en"
        ? [
            { title: "Video lessons", text: "A structured course on 01AI.uz with a clear pace and track." },
            { title: "Real projects", text: "You work on company cases and build a portfolio." },
            { title: "Live sessions", text: "Weekly Q&A and review sessions with mentors." },
            { title: "Student Support", text: "Curators and support throughout the whole journey." },
            { title: "Certificate", text: "MLC certificate and partner validation of the track." },
            { title: "Career support", text: "Networking, recommendations, and a stronger profile on the market." }
          ]
        : [
            { title: "Видеолекции", text: "Структурированный курс в 01AI.uz с понятным темпом и треком." },
            { title: "Реальные проекты", text: "Работаешь на кейсах компаний и собираешь портфолио." },
            { title: "Живые сессии", text: "Q&A и разборы с менторами каждую неделю." },
            { title: "Student Support", text: "Кураторы и поддержка по ходу всего обучения." },
            { title: "Сертификат", text: "Сертификат MLC и партнерские подтверждения трека." },
            { title: "Карьерная помощь", text: "Нетворкинг, рекомендации и усиление профиля на рынке." }
          ];

  const graduateStats =
    locale === "uz"
      ? [["400+", "Bitiruvchilar"], ["83%", "Ishga joylashgan"], ["3-6 oy", "O'qish muddati"]]
      : locale === "en"
        ? [["400+", "Graduates"], ["83%", "Employed"], ["3-6 mo.", "Study duration"]]
        : [["400+", "Выпускников"], ["83%", "Устроились на работу"], ["3-6 мес.", "Срок обучения"]];

  const grads =
    locale === "uz"
      ? graduateTestimonials.map((item, index) => [
          { role: "Fintech kompaniyada Data Analyst", quote: "Kursgacha SQL bilan ishlamaganman. Hozir product jamoa uchun hisobotlar tuzaman va intervyulardan ishonch bilan o'taman." },
          { role: "Startup'da ML Engineer", quote: "Eng katta qiymat - real loyihalar va sanoat yondashuvini ko'rsatadigan mentorlar." },
          { role: "EdTech'da AI Specialist", quote: "Dasturdan keyin jamoa uchun birinchi internal copilot'ni yig'dim va yangi rol oldim." }
        ][index])
      : locale === "en"
        ? graduateTestimonials.map((item, index) => [
            { role: "Data Analyst at a fintech company", quote: "Before the course I did not know SQL. Now I build reports for a product team and pass interviews with confidence." },
            { role: "ML Engineer at a startup", quote: "The biggest value was real projects and mentors who show an industry approach, not just theory." },
            { role: "AI Specialist in EdTech", quote: "After the program I built the first internal copilot for the team and moved into a new role." }
          ][index])
        : graduateTestimonials;

  usePageMeta(page.metaTitle, page.metaDescription);

  return (
    <>
      <section className="section-shell grid gap-12 py-16 lg:grid-cols-[1fr_0.92fr] lg:py-20">
        <SectionReveal>
          <p className="eyebrow">{page.hero.eyebrow}</p>
          <h1 className="display-title">{page.hero.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">{page.hero.text}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#courses" className="button-primary">
              {page.hero.choose}
              <ArrowRight size={18} />
            </a>
            <a href="https://01ai.uz" target="_blank" rel="noreferrer" className="button-secondary">
              {page.hero.open}
            </a>
          </div>
        </SectionReveal>
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface p-5 shadow-soft">
            <div className="absolute inset-0 dot-pattern opacity-50" />
            <img src="https://placehold.co/1000x850/F6F3FE/2D1B69?text=01AI+Students" alt="01AI students" className="relative aspect-[5/4] w-full rounded-[26px] object-cover" />
          </div>
        </SectionReveal>
      </section>

      <section id="courses" className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.directions.eyebrow}</p>
            <h2 className="section-title">{page.directions.title}</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 xl:grid-cols-3">
            {localizedCourses.map((course) => (
              <SectionReveal key={course.id}>
                <article className="card-surface h-full p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{course.direction}</p>
                  <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text">{course.title}</h3>
                  <p className="mt-4 text-base leading-8 text-text-secondary">{course.description}</p>
                  <div className="mt-6 space-y-2 text-sm text-text-secondary">
                    <p>{course.partner_name}</p>
                    <p>{course.duration}</p>
                    <p>{course.price}</p>
                  </div>
                  <a href={course.platform_url} target="_blank" rel="noreferrer" className="button-primary mt-8">
                    {t("solutionModal.details")}
                    <ArrowRight size={18} />
                  </a>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.features.eyebrow}</p>
            <h2 className="section-title">{page.features.title}</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <SectionReveal key={feature.title}>
                  <div className="card-surface p-6">
                    <Icon className="text-accent" size={26} />
                    <h3 className="mt-5 text-2xl font-semibold text-text">{feature.title}</h3>
                    <p className="mt-3 text-base leading-8 text-text-secondary">{feature.text}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.graduates.eyebrow}</p>
            <h2 className="section-title">{page.graduates.title}</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {graduateStats.map(([value, label]) => (
              <SectionReveal key={label}>
                <div className="card-surface p-6">
                  <p className="font-mono text-5xl font-bold text-primary">{value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-text-secondary">{label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {graduateTestimonials.map((graduate, index) => (
              <SectionReveal key={graduate.id}>
                <article className="card-surface h-full p-6">
                  <div className="flex items-center gap-4">
                    <img src={graduate.image} alt={graduate.name} data-section="graduates" className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <h3 className="text-lg font-semibold text-text">{graduate.name}</h3>
                      <p className="text-sm text-text-secondary">{grads[index].role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-8 text-text-secondary">“{grads[index].quote}”</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">{page.form.eyebrow}</p>
              <h2 className="section-title">{page.form.title}</h2>
            </div>
          </SectionReveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <LeadForm leadType="b2c" sourcePage="/b2c" />
          </div>
        </div>
      </section>
    </>
  );
}
