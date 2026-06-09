import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionReveal } from "@/components/SectionReveal";
import { TeamGrid } from "@/components/TeamGrid";
import { zeroOneAiCohorts, zeroOneAiTeamByLocale } from "@/data/fallbackContent";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteCopy } from "@/lib/siteCopy";

const galleryPhotos = Array.from({ length: 9 }, (_, index) => `/01ai/gallery/photo-${index + 1}.webp`);

export function ZeroOneAiPage() {
  const copy = useSiteCopy().zeroOneAi;
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";
  const localizedTeam = zeroOneAiTeamByLocale[locale] ?? zeroOneAiTeamByLocale.ru;
  const tracks = [
    {
      icon: "🎙️",
      label: copy.skillLabel,
      title: "ElevenLabs: Professional AI-ovozlashtirish",
      desc: copy.tracks[0].desc,
      url: "https://www.01ai.uz/skills/38",
      banner: "/01ai/courses/course-1.webp",
    },
    {
      icon: "🎬",
      label: copy.skillLabel,
      title: "Higgsfield AI: Video generatsiya qilish",
      desc: copy.tracks[1].desc,
      url: "https://www.01ai.uz/skills/37",
      banner: "/01ai/courses/course-2.webp",
    },
    {
      icon: "🤖",
      label: copy.skillLabel,
      title: "Sun'iy intellekt orqali rasm va videolar",
      desc: copy.tracks[2].desc,
      url: "https://www.01ai.uz/skills/27",
      banner: "/01ai/courses/course-3.webp",
    },
    {
      icon: "🚀",
      label: copy.courseLabel,
      title: "AI Startup",
      desc: copy.tracks[3].desc,
      url: "https://www.01ai.uz/courses/25",
      banner: "/01ai/courses/course-4.webp",
    },
    {
      icon: "✨",
      label: copy.courseLabel,
      title: "AI Ijodkor",
      desc: copy.tracks[4].desc,
      url: "https://www.01ai.uz/courses/31",
      banner: "/01ai/courses/course-5.webp",
    },
  ];

  usePageMeta(`01AI - ${copy.heroTitle}`, copy.heroSubtitle);

  return (
    <>
      <section className="section-shell grid gap-12 py-16 lg:grid-cols-[1fr_0.92fr] lg:py-20">
        <SectionReveal>
          <p className="eyebrow">01AI · ML Community</p>
          <h1 className="display-title">{copy.heroTitle}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">{copy.heroSubtitle}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="https://01ai.uz" target="_blank" rel="noreferrer" className="button-primary">
              {copy.heroBtn}
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
            <h2 className="section-title">{copy.tracksTitle}</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tracks.map((track) => (
              <SectionReveal key={track.title}>
                <article className="card-surface overflow-hidden transition duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[800/996] overflow-hidden bg-white/5">
                    <img
                      src={track.banner}
                      alt={track.title}
                      className="h-full w-full object-contain transition duration-500 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {track.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-6 tracking-[-0.02em] text-white">
                      {track.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {track.desc}
                    </p>
                    <a href={track.url} target="_blank" rel="noreferrer" className="button-ghost mt-4 text-sm">
                      {copy.learnMore} ↗
                    </a>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{copy.cohortsTitle}</h2>
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
                        <p className="text-xs text-text-secondary">{copy.cohortsGraduates}</p>
                      </div>
                      <div>
                        <p className="font-mono text-2xl font-bold text-accent">
                          {cohort.employedText ?? `${cohort.employed}%`}
                        </p>
                        <p className="text-xs text-text-secondary">{copy.cohortsEmployed}</p>
                      </div>
                    </div>
                    {cohort.worksAt ? (
                      <p className="mt-4 text-sm leading-6 text-text-muted">{cohort.worksAt}</p>
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
            <h2 className="section-title">{copy.galleryTitle}</h2>
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
            <h2 className="section-title">{copy.teamTitle}</h2>
          </SectionReveal>
          <div className="mt-12">
            <TeamGrid members={localizedTeam} dataSection="01ai-team" />
          </div>
        </div>
      </section>

    </>
  );
}
