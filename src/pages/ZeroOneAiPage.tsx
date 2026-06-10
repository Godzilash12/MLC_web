import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionReveal } from "@/components/SectionReveal";
import { TeamGrid } from "@/components/TeamGrid";
import { zeroOneAiTeamByLocale } from "@/data/fallbackContent";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteCopy } from "@/lib/siteCopy";

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
