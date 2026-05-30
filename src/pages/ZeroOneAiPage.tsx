import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LeadForm } from "@/components/LeadForm";
import { SectionReveal } from "@/components/SectionReveal";
import { TeamGrid } from "@/components/TeamGrid";
import { zeroOneAiCohorts, zeroOneAiTeam } from "@/data/fallbackContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export function ZeroOneAiPage() {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";

  usePageMeta("01AI — AI обучение · MLC", "Платформа 01AI: курсы, профессии и скиллы по AI");

  const tracks = [
    {
      icon: "🤖",
      label: locale === "uz" ? "Kasblar" : locale === "en" ? "Professions" : "Профессии",
      title: "ML Engineer",
      desc: locale === "uz" ? "Python, ML modellar, real loyihalar." : locale === "en" ? "Python, ML models, real projects." : "Python, ML-модели, реальные проекты.",
    },
    {
      icon: "📊",
      label: locale === "uz" ? "Kasblar" : locale === "en" ? "Professions" : "Профессии",
      title: "Data Analyst",
      desc: locale === "uz" ? "SQL, BI asboblar, ma'lumotlarni tahlil." : locale === "en" ? "SQL, BI tools, data analysis." : "SQL, BI-инструменты, анализ данных.",
    },
    {
      icon: "⚡",
      label: locale === "uz" ? "Skills" : locale === "en" ? "Skills" : "Скиллы",
      title: "Prompt Engineering",
      desc: locale === "uz" ? "LLM bilan tizimli ishlash." : locale === "en" ? "Systematic work with LLMs." : "Системная работа с LLM.",
    },
    {
      icon: "🎯",
      label: locale === "uz" ? "Skills" : locale === "en" ? "Skills" : "Скиллы",
      title: locale === "uz" ? "AI menejerlar uchun" : locale === "en" ? "AI for managers" : "AI для менеджеров",
      desc: locale === "uz" ? "Rahbarlar uchun strategiya va asboblar." : locale === "en" ? "Strategy and tools for leaders." : "Стратегия и инструменты для руководителей.",
    },
    {
      icon: "📚",
      label: locale === "uz" ? "Kurslar" : locale === "en" ? "Courses" : "Курсы",
      title: "ML Intensive",
      desc: locale === "uz" ? "Tezlashtirilgan format, 6 hafta." : locale === "en" ? "Accelerated format, 6 weeks." : "Интенсивный формат, 6 недель.",
    },
    {
      icon: "🌐",
      label: locale === "uz" ? "Kurslar" : locale === "en" ? "Courses" : "Курсы",
      title: locale === "uz" ? "AI Asoslari" : locale === "en" ? "AI Fundamentals" : "Основы AI",
      desc: locale === "uz" ? "Noldan boshlash, 4 hafta." : locale === "en" ? "Start from zero, 4 weeks." : "Старт с нуля, 4 недели.",
    },
  ];

  const heroTitle = locale === "uz" ? "AI o'rganishni hozir boshlang" : locale === "en" ? "Start learning AI now" : "Начни учить AI прямо сейчас";
  const heroText = locale === "uz" ? "01AI — ML Community'ning ta'lim platformasi. Kurslar, professiyalar va ko'nikmalar AI sohasiga kirishingizga yordam beradi." : locale === "en" ? "01AI is the education platform by ML Community. Courses, professions, and skills to help you enter the AI field." : "01AI — образовательная платформа ML Community. Курсы, профессии и скиллы, которые помогут вам войти в AI.";
  const tracksTitle = locale === "uz" ? "Dasturlar" : locale === "en" ? "Programs" : "Программы";
  const cohortsTitle = locale === "uz" ? "O'tgan potoklar" : locale === "en" ? "Past cohorts" : "Прошлые потоки";
  const galleryTitle = locale === "uz" ? "Darslardan suratlar" : locale === "en" ? "Photos from classes" : "Фотографии с уроков";
  const teamTitle = locale === "uz" ? "Jamoa" : locale === "en" ? "Team" : "Команда 01AI";
  const platformBtn = locale === "uz" ? "Platformaga o'tish" : locale === "en" ? "Go to platform" : "Перейти на платформу";
  const enrollBtn = locale === "uz" ? "Ariza qoldirish" : locale === "en" ? "Apply" : "Оставить заявку";
  const graduatesLabel = locale === "uz" ? "bitiruvchi" : locale === "en" ? "graduates" : "выпускников";
  const employedLabel = locale === "uz" ? "ishga joylashgan" : locale === "en" ? "employed" : "трудоустроенных";

  return (
    <>
      <section className="section-shell grid gap-12 py-16 lg:grid-cols-[1fr_0.92fr] lg:py-20">
        <SectionReveal>
          <p className="eyebrow">01AI · ML Community</p>
          <h1 className="display-title">{heroTitle}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">{heroText}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="https://01ai.uz" target="_blank" rel="noreferrer" className="button-primary">
              {platformBtn}
              <ArrowRight size={18} />
            </a>
            <a href="#01ai-form" className="button-secondary">
              {enrollBtn}
            </a>
          </div>
        </SectionReveal>
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface p-5 shadow-soft">
            <div className="absolute inset-0 dot-pattern opacity-50" />
            {/* TODO [IMAGE]: заменить на скриншот/фото платформы 01ai.uz */}
            <img
              src="/education-avif/Frame 2.avif"
              alt="01AI Platform"
              className="relative aspect-[5/4] w-full rounded-[26px] object-cover"
            />
          </div>
        </SectionReveal>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">01ai.uz</p>
            <h2 className="section-title">{tracksTitle}</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tracks.map((track) => (
              <SectionReveal key={track.title}>
                <article className="card-surface p-6">
                  <div className="text-4xl">{track.icon}</div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {track.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-text">{track.title}</h3>
                  <p className="mt-3 text-base leading-7 text-text-secondary">{track.desc}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{cohortsTitle}</h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {zeroOneAiCohorts.map((cohort) => (
              <SectionReveal key={cohort.id}>
                <article className="card-surface overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={cohort.photo}
                      alt={cohort.name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-text">{cohort.name}</h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-accent">
                        {cohort.track}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-text-secondary">{cohort.month}</p>
                    {cohort.graduates > 0 && (
                      <div className="mt-4 flex gap-4">
                        <div>
                          <p className="font-mono text-2xl font-bold text-text">{cohort.graduates}</p>
                          <p className="text-xs text-text-secondary">{graduatesLabel}</p>
                        </div>
                        <div>
                          <p className="font-mono text-2xl font-bold text-accent">{cohort.employed}%</p>
                          <p className="text-xs text-text-secondary">{employedLabel}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{galleryTitle}</h2>
          </SectionReveal>
          <div className="mt-10 columns-2 gap-3 md:columns-3 xl:columns-4">
            {[
              // TODO [IMAGE]: заменить на реальные фото с уроков 01AI
              "/education-avif/Frame 2.avif",
              "/education-avif/Frame 3.avif",
              "/education-avif/Frame 3-2.avif",
              "/education-avif/Frame 3-3.avif",
              "/education-avif/Frame 4.avif",
              "/education-avif/Frame 5.avif",
              "/education-avif/Frame 6.avif",
              "/education-avif/Frame 6-1.avif",
            ].map((src, i) => (
              <SectionReveal key={src}>
                <div className="mb-3 overflow-hidden rounded-[1.2rem]" style={{ breakInside: "avoid" }}>
                  <img src={src} alt={`Class photo ${i + 1}`} className="w-full object-cover transition duration-500 hover:scale-[1.03]" loading="lazy" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{teamTitle}</h2>
          </SectionReveal>
          <div className="mt-12">
            <TeamGrid members={zeroOneAiTeam} dataSection="01ai-team" />
          </div>
        </div>
      </section>

      <section id="01ai-form" className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">
                {locale === "uz" ? "Hoziroq ro'yxatdan o'ting" : locale === "en" ? "Sign up now" : "Записаться на курс"}
              </h2>
            </div>
          </SectionReveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <LeadForm leadType="b2c" sourcePage="/01ai" showMessage />
          </div>
        </div>
      </section>
    </>
  );
}
