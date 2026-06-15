import { useTranslation } from "react-i18next";
import { SectionReveal } from "@/components/SectionReveal";
import { TeamGrid } from "@/components/TeamGrid";
import { zeroOneAiTeamByLocale } from "@/data/fallbackContent";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteCopy } from "@/lib/siteCopy";

export function ZeroOneAiPage() {
  const copy = useSiteCopy();
  const c = copy.zeroOneAi;
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";
  const localizedTeam = zeroOneAiTeamByLocale[locale] ?? zeroOneAiTeamByLocale.ru;

  usePageMeta(`01AI - ${c.heroTitle}`, c.heroSubtitle);

  const FORMATS = [
    { emoji: "⚡", title: c.format1Title, desc: c.format1Desc },
    { emoji: "📊", title: c.format2Title, desc: c.format2Desc },
    { emoji: "🎯", title: c.format3Title, desc: c.format3Desc },
  ];

  const FEATURES = [
    { emoji: "🏆", title: c.feature2Title, desc: c.feature2Desc },
    { emoji: "💼", title: c.feature3Title, desc: c.feature3Desc },
    { emoji: "🎮", title: c.feature6Title, desc: c.feature6Desc },
  ];

  return (
    <>
      {/* 1. HERO */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/01ai/hero.webp)" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="section-shell relative z-10 grid gap-12 py-20 lg:grid-cols-[1fr_auto] lg:py-28">
          <SectionReveal>
            <h1 className="display-title">{c.heroTitle}</h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://01ai.uz" target="_blank" rel="noreferrer" className="button-primary">
                {c.ctaBtn}
              </a>
            </div>
          </SectionReveal>

        </div>
      </section>

      {/* 2. ЗАЧЕМ МЫ ЭТО ДЕЛАЕМ */}
      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <h2 className="section-title">{c.whyTitle}</h2>
                <p className="mt-6 text-lg leading-8 text-text-secondary">
                  {c.whyText1?.replace("Data Science", "Machine Learning")}
                </p>
                <p className="mt-5 text-lg leading-8 text-text-secondary">
                  {c.whyText2}
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/shakhriyor.avif"
                  alt="Шахриёр Худойбердиев"
                  className="w-full object-cover rounded-[2rem]"
                  style={{ aspectRatio: "4/5", objectPosition: "top" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="font-semibold text-white">Шахриёр Худойбердиев</p>
                  <p className="text-sm text-white/70">Основатель · MLC Head | AICA Deputy Chairman</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. ТРИ ФОРМАТА ОБУЧЕНИЯ */}
      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{c.formatsTitle}</h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {FORMATS.map((fmt) => (
              <SectionReveal key={fmt.title}>
                <div className="card-surface flex flex-col gap-4 rounded-[1.6rem] p-8">
                  <div className="text-5xl">{fmt.emoji}</div>
                  <h3 className="text-2xl font-bold text-white">{fmt.title}</h3>
                  <p className="text-sm leading-6 text-text-secondary">{fmt.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА */}
      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{c.featuresTitle}</h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {FEATURES.map((feat) => (
              <SectionReveal key={feat.title}>
                <div className="card-surface rounded-[1.6rem] p-6">
                  <div className="text-4xl">{feat.emoji}</div>
                  <h3 className="mt-3 text-lg font-bold text-white">{feat.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{feat.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ИНВЕСТОР */}
      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{c.investorSubtitle}</h2>
          </SectionReveal>
          <SectionReveal>
            <div className="card-surface mt-10 grid grid-cols-[auto_1fr] items-center gap-8 rounded-[2rem] p-8">
              <img
                src="/01ai/team/ulugbek_ismatov.jpg"
                alt={c.investorName}
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{c.investorName}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {c.investorRole}
                </p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {c.investorDesc}
                </p>
                <a
                  href="https://www.instagram.com/ulugbek_creative/"
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost mt-4 text-sm"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 6. КОМАНДА */}
      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{c.teamTitle}</h2>
          </SectionReveal>
          <div className="mt-12">
            <TeamGrid members={localizedTeam} dataSection="01ai-team" />
          </div>
        </div>
      </section>

      {/* 7. ФИНАЛЬНЫЙ CTA */}
      <section className="section-divider">
        <div className="section-shell section-space">
          <div
            className="relative overflow-hidden rounded-[2rem]"
            style={{ minHeight: "320px" }}
          >
            <img
              src="/01ai/cta-bg.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.10)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(15,14,26,0.75), rgba(26,10,48,0.75))" }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center px-8 py-16 text-center">
              <h2 className="section-title">{c.ctaTitle}</h2>
              <a
                href="https://01ai.uz"
                target="_blank"
                rel="noreferrer"
                className="button-primary mt-8"
              >
                {c.ctaBtn}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
