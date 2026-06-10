import {
  BadgeCheck,
  BrainCircuit,
  Compass,
  Flag,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { MlcTimeline } from "@/components/MlcTimeline";
import { SectionReveal } from "@/components/SectionReveal";
import { TeamGrid } from "@/components/TeamGrid";
import { coreTeamByLocale, zeroOneAiTeamByLocale, b2bMentorsByLocale } from "@/data/fallbackContent";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteCopy } from "@/lib/siteCopy";

const aboutStats = [
  { value: "3500+", label: "участников" },
  { value: "50+", label: "мероприятий" },
  { value: "4", label: "ключевых направления" }
];

const focusAreas = [
  {
    icon: Users,
    title: "Сообщество",
    text: "Собираем людей вокруг событий, нетворкинга, обмена опытом и живой AI-среды."
  },
  {
    icon: GraduationCap,
    title: "Образование",
    text: "Помогаем людям и компаниям осваивать AI через практические программы и прикладные форматы."
  },
  {
    icon: BrainCircuit,
    title: "Разработка",
    text: "Запускаем прикладные AI-решения, автоматизации, ассистентов и интеграции для бизнеса."
  },
  {
    icon: Sparkles,
    title: "AI Media",
    text: "Создаем визуальные концепты, ролики, social-креативы и AI-production для брендов."
  }
];

const focusAreaIcons = [Users, GraduationCap, BrainCircuit, Sparkles];

const missionCards = [
  {
    icon: Compass,
    title: "Миссия",
    text: "Развивать Узбекистан через ИИ."
  },
  {
    icon: Target,
    title: "Цели",
    text: "Вырастить сильную AI-экосистему: больше специалистов, проектов, компаний и реальных внедрений."
  },
  {
    icon: Flag,
    title: "Для Узбекистана",
    text: "Помочь стране быстрее входить в новую технологическую эпоху через знания, связи, продукты и практику."
  }
];

const missionCardIcons = [Compass, Target, Flag];

const valueForPeople = [
  "понятный вход в AI без одиночества и хаоса",
  "доступ к мероприятиям, экспертам, менторам и партнерам",
  "практические навыки, которые можно применять в работе",
  "карьерные и проектные возможности внутри AI-среды",
  "сильное окружение людей, которые двигают AI вперед"
];

export function AboutPage() {
  const { i18n } = useTranslation();
  const siteCopy = useSiteCopy();
  const copy = siteCopy.about;
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";
  const localizedTeam = [...(coreTeamByLocale[locale] ?? coreTeamByLocale.ru)];
  const localizedB2b = b2bMentorsByLocale[locale] ?? b2bMentorsByLocale.ru;
  const localizedAiTeam = zeroOneAiTeamByLocale[locale] ?? zeroOneAiTeamByLocale.ru;
  const combinedTeam = [
    ...localizedTeam.filter((m) => m.id !== 'core-11'),
    ...localizedB2b.filter((m) => m.id !== 'b2b-01'),
    ...localizedAiTeam.filter((m) => m.id !== 'ai-t01'),
  ];
  usePageMeta(copy.metaTitle, copy.metaDescription);

  return (
    <>
      <section className="section-shell section-space">
        <SectionReveal>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display-title text-balance">{copy.title}</h1>
          </div>
        </SectionReveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
          {copy.stats.map((item) => (
            <SectionReveal key={item.label}>
              <div className="glass-panel rounded-[1.7rem] px-6 py-6 text-center">
                <div className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{item.value}</div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary">{item.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="grid gap-8 rounded-[2.2rem] bg-[radial-gradient(circle_at_14%_12%,rgba(109,67,255,0.22),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(255,101,219,0.16),transparent_28%),linear-gradient(145deg,rgba(24,17,38,0.96),rgba(9,6,15,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[0.86fr_1.14fr] lg:p-8">
              <div className="relative min-h-[24rem] overflow-hidden rounded-[1.8rem] bg-[#15101f]">
                <img
                  src="/shakhriyor.avif"
                  alt="Shakhriyor Khudoyberdiyev"
                  width="1800"
                  height="2250"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,15,0),rgba(9,6,15,0.2)_45%,rgba(9,6,15,0.92)_100%)]" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-2xl font-semibold tracking-[-0.035em] text-white">Shakhriyor Khudoyberdiyev</p>
                  <p className="mt-2 text-sm text-text-secondary">{copy.founderRole}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Lightbulb size={32} strokeWidth={1.8} />
                </div>
                <h2 className="section-title">{copy.founderTitle}</h2>
                <p className="mt-6 text-lg leading-9 text-text-secondary">
                  {copy.founderText}
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title mb-10">{copy.teamTitle ?? "Core Team"}</h2>
          </SectionReveal>
          <SectionReveal>
            <TeamGrid members={combinedTeam} dataSection="about-team" />
          </SectionReveal>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title mb-10">{siteCopy.timeline.sectionTitle}</h2>
          </SectionReveal>
          <MlcTimeline />
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <div className="grid gap-5 lg:grid-cols-3">
            {copy.missionCards.map((item, index) => {
              const Icon = missionCardIcons[index] ?? Compass;
              return (
                <SectionReveal key={item.title}>
                  <article className="glass-panel h-full rounded-[2rem] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white">{item.title}</h2>
                    <p className="mt-4 text-base leading-8 text-text-secondary">{item.text}</p>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{copy.focusTitle}</h2>
          </SectionReveal>

          <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.focusAreas.map((item, index) => {
              const Icon = focusAreaIcons[index] ?? Users;
              return (
                <SectionReveal key={item.title}>
                  <article className="glass-panel h-full rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-white">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-text-secondary">{item.text}</p>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="grid gap-8 rounded-[2.2rem] bg-[radial-gradient(circle_at_12%_10%,rgba(255,101,219,0.16),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(67,216,255,0.16),transparent_30%),linear-gradient(145deg,rgba(22,16,36,0.96),rgba(9,6,15,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <ShieldCheck size={32} strokeWidth={1.8} />
                </div>
                <h2 className="section-title max-w-3xl">{copy.valueTitle}</h2>
              </div>

              <div className="grid gap-4">
                {copy.values.map((value) => (
                  <div key={value} className="glass-panel flex items-start gap-4 rounded-[1.7rem] px-5 py-5">
                    <BadgeCheck className="mt-1 shrink-0 text-[#43d8ff]" size={21} />
                    <p className="text-base leading-8 text-text-secondary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
