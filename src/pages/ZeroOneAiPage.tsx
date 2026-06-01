import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LeadForm } from "@/components/LeadForm";
import { SectionReveal } from "@/components/SectionReveal";
import { TeamGrid } from "@/components/TeamGrid";
import { zeroOneAiCohorts, zeroOneAiTeam } from "@/data/fallbackContent";
import { usePageMeta } from "@/hooks/usePageMeta";

const tracks = [
  {
    icon: "01",
    label: "Skill",
    title: "Eleven Labs: Professional ovozlantirish va dublyaj",
    desc: "AI-ovozlashtirish, voice cloning, multitilli dublyaj, audio kitob va tijoriy ovozli kontent yaratish.",
    meta: "20+ soat · Online · Novice",
    url: "https://www.01ai.uz/skills/38",
  },
  {
    icon: "02",
    label: "Skill",
    title: "Higgsfield: AI video va personajlar",
    desc: "Video prompting, avatarlar, lip-sync, vizual effektlar, reklama roligi va animatsion kontent ishlab chiqarish.",
    meta: "20+ soat · Online · Novice",
    url: "https://www.01ai.uz/skills/37",
  },
  {
    icon: "03",
    label: "Skill",
    title: "Sun'iy intellektni nimadan boshlash kerak?",
    desc: "AI texnologiyalarining ishlash prinsiplari, turlari va kundalik hayotdagi amaliy foydasini sodda tilda o'rganish.",
    meta: "10+ soat · Online · Novice",
    url: "https://www.01ai.uz/skills/27",
  },
  {
    icon: "04",
    label: "Course",
    title: "AI Startup",
    desc: "AI yordamida birinchi startapingizni boshlang va g'oyani amaliy mahsulotga aylantirish yo'lini o'rganing.",
    meta: "60+ soat · Online · Novice",
    url: "https://www.01ai.uz/courses/25",
  },
  {
    icon: "05",
    label: "Course",
    title: "AI Ijodkor",
    desc: "Trendda bo'lgan video va rasmlarni AI orqali yarating, ijodiy kontentni tezroq va sifatliroq ishlab chiqing.",
    meta: "40+ soat · Online · Novice",
    url: "https://www.01ai.uz/courses/31",
  },
];

const galleryPhotos = Array.from({ length: 9 }, (_, index) => `/01ai/gallery/photo-${index + 1}.webp`);

export function ZeroOneAiPage() {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";

  usePageMeta(
    "01AI - Raqamli Texnologiyalar Hamma Uchun",
    "01AI platformasi: AI kurslar, skillar va amaliy ta'lim."
  );

  const tracksTitle = locale === "en" ? "Courses and skills" : "Kurslar va skillar";
  const cohortsTitle = locale === "en" ? "Past cohorts" : "O'tgan potoklar";
  const galleryTitle = locale === "en" ? "Photos from classes" : "Darslardan suratlar";
  const teamTitle = locale === "en" ? "01AI team" : "01AI jamoasi";
  const studentsLabel = locale === "en" ? "students" : "student";
  const employedLabel = locale === "en" ? "employed" : "ishga joylashgan";
  const worksAtLabel = locale === "en" ? "Where they work" : "Qayerda ishlashadi";

  return (
    <>
      <section className="section-shell grid gap-12 py-16 lg:grid-cols-[1fr_0.92fr] lg:py-20">
        <SectionReveal>
          <p className="eyebrow">01AI · ML Community</p>
          <h1 className="display-title">Raqamli Texnologiyalar Hamma Uchun</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">
            Sifatli Ta'lim. Hamjamiyat - Kuch. O'yna - Sotib Ol
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="https://01ai.uz" target="_blank" rel="noreferrer" className="button-primary">
              Hoziroq boshlash
              <ArrowRight size={18} />
            </a>
          </div>
        </SectionReveal>
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface p-5 shadow-soft">
            <img
              src="/01ai/hero.webp"
              alt="01AI"
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
                <article className="card-surface flex h-full flex-col p-6">
                  <div className="font-mono text-4xl font-bold text-accent">{track.icon}</div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {track.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-text">{track.title}</h3>
                  <p className="mt-3 text-base leading-7 text-text-secondary">{track.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-text-muted">{track.meta}</p>
                  <a href={track.url} target="_blank" rel="noreferrer" className="button-ghost mt-auto pt-5">
                    01ai.uz
                    <ExternalLink size={14} />
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
            <h2 className="section-title">{cohortsTitle}</h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {zeroOneAiCohorts.map((cohort) => (
              <SectionReveal key={cohort.id}>
                <article className="card-surface h-full overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={cohort.photo}
                      alt={cohort.name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-text">{cohort.name}</h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-accent">
                        {cohort.track}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary">{cohort.month}</p>
                    <div className="mt-4 flex gap-4">
                      <div>
                        <p className="font-mono text-2xl font-bold text-text">{cohort.graduates}</p>
                        <p className="text-xs text-text-secondary">{studentsLabel}</p>
                      </div>
                      <div>
                        <p className="font-mono text-2xl font-bold text-accent">
                          {cohort.employedText ?? `${cohort.employed}%`}
                        </p>
                        <p className="text-xs text-text-secondary">{employedLabel}</p>
                      </div>
                    </div>
                    {cohort.worksAt ? (
                      <p className="mt-4 text-sm leading-6 text-text-muted">
                        {worksAtLabel}: {cohort.worksAt}
                      </p>
                    ) : null}
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
            {galleryPhotos.map((src, index) => (
              <SectionReveal key={src}>
                <div className="mb-3 overflow-hidden rounded-[1.2rem]" style={{ breakInside: "avoid" }}>
                  <img
                    src={src}
                    alt={`01AI class photo ${index + 1}`}
                    className="w-full object-cover transition duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
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
                {locale === "en" ? "Sign up for a course" : "Kursga yoziling"}
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
