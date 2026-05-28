import {
  BadgeCheck,
  CheckCircle2,
  Clapperboard,
  Film,
  Image,
  Megaphone,
  MonitorPlay,
  MoveRight,
  Palette,
  Play,
  Sparkles,
  UserRound,
  WandSparkles
} from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteCopy } from "@/lib/siteCopy";

const mediaStats = [
  { value: "1-2", label: "дня на концепт" },
  { value: "3-7", label: "дней на ролик" },
  { value: "10+", label: "форматов контента" }
];

const mediaDirections = [
  {
    icon: Megaphone,
    title: "Рекламные ролики",
    text: "Короткие video ads для продукта, сервиса или мероприятия: идея, сценарий, визуальный стиль, генерация сцен и финальная сборка.",
    timeline: "1-2 недели",
    items: ["15-60 секунд", "script и storyboard", "адаптации под соцсети"]
  },
  {
    icon: Image,
    title: "Product-контент",
    text: "Визуалы для карточек, баннеров, презентаций и лендингов, где нужно быстро показать продукт в разных сценах и стилях.",
    timeline: "3-7 дней",
    items: ["баннеры и key visual", "product shots", "варианты под кампании"]
  },
  {
    icon: MonitorPlay,
    title: "Reels, Shorts и social-креативы",
    text: "Серии коротких вертикальных видео для Instagram, TikTok, YouTube Shorts и Telegram с единым визуальным направлением.",
    timeline: "2-5 дней",
    items: ["вертикальный формат", "серии креативов", "обложки и captions"]
  },
  {
    icon: UserRound,
    title: "AI-аватары и объясняющие видео",
    text: "Видео с ведущим или персонажем для обучения, промо, инструкций и внутренних коммуникаций без сложного съемочного процесса.",
    timeline: "1-2 недели",
    items: ["скрипт и голос", "avatar video", "локализация"]
  },
  {
    icon: Palette,
    title: "Визуальные концепты",
    text: "Быстро собираем moodboard, стилистику, кадры и визуальный язык кампании перед полноценным производством.",
    timeline: "2-4 дня",
    items: ["moodboard", "style frames", "visual direction"]
  },
  {
    icon: Film,
    title: "Storyboards и animatic",
    text: "Помогаем увидеть будущий ролик до продакшна: кадры, последовательность, ритм, примерная динамика и структура истории.",
    timeline: "3-7 дней",
    items: ["раскадровка", "animatic", "структура сцен"]
  },
  {
    icon: WandSparkles,
    title: "Креативные пакеты для запусков",
    text: "Набор визуалов и коротких видео под запуск продукта, курса, мероприятия или рекламной кампании.",
    timeline: "1-3 недели",
    items: ["единый стиль", "несколько форматов", "быстрые итерации"]
  },
  {
    icon: Sparkles,
    title: "AI-пайплайн для контент-команды",
    text: "Настраиваем процесс, шаблоны и правила, чтобы команда могла регулярно создавать контент быстрее и в одном стиле.",
    timeline: "2-4 недели",
    items: ["шаблоны промптов", "brand rules", "обучение команды"]
  }
];

const mediaDirectionIcons = [Megaphone, Image, MonitorPlay, UserRound, Palette, Film, WandSparkles, Sparkles];

const productionSteps = [
  {
    title: "Бриф и идея",
    text: "Уточняем продукт, аудиторию, площадки, ограничения бренда и результат, который должен дать контент."
  },
  {
    title: "Сценарий и визуальный стиль",
    text: "Собираем структуру ролика, moodboard, референсы, key frames и понятное направление для утверждения."
  },
  {
    title: "AI production",
    text: "Генерируем сцены, изображения, голос, motion-элементы или avatar-видео и собираем черновую версию."
  },
  {
    title: "Финальная сборка",
    text: "Доводим монтаж, титры, звук, цвет, форматы и экспортируем материалы под нужные платформы."
  }
];

const mediaOutputs = [
  "готовые видео для рекламы, соцсетей или презентации",
  "key visual, баннеры, обложки и product shots",
  "storyboard, moodboard и style frames для согласования",
  "адаптации под вертикальный, квадратный и wide-формат",
  "гайд по стилю и процессу для дальнейшего производства"
];

export function AiMediaPage() {
  const copy = useSiteCopy().aiMedia;
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
            <h2 className="section-title">{copy.directionsTitle}</h2>
          </SectionReveal>

          <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.directions.map((item, index) => {
              const Icon = mediaDirectionIcons[index] ?? Megaphone;

              return (
                <SectionReveal key={item.title}>
                  <article className="glass-panel group flex h-full min-h-[24rem] flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition duration-300 group-hover:bg-white/15">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-white">{item.title}</h3>
                    <p className="mt-3 w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#43d8ff]">
                      {item.timeline}
                    </p>
                    <p className="mt-4 text-base leading-7 text-text-secondary">{item.text}</p>
                    <div className="mt-auto pt-6">
                      {item.items.map((feature) => (
                        <div key={feature} className="mt-2 flex items-center gap-2 text-sm text-text-muted">
                          <CheckCircle2 className="shrink-0 text-[#ff7ad9]" size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionReveal>
            <div className="sticky top-28">
              <h2 className="section-title">{copy.productionTitle}</h2>
            </div>
          </SectionReveal>

          <div className="grid gap-4">
            {copy.production.map((step, index) => (
              <SectionReveal key={step.title}>
                <article className="glass-panel grid gap-5 rounded-[1.7rem] px-5 py-6 transition duration-300 hover:-translate-y-1 sm:grid-cols-[5rem_minmax(0,1fr)] sm:px-6">
                  <div className="service-card__number text-4xl sm:text-5xl">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">{step.title}</h3>
                    <p className="mt-3 text-base leading-8 text-text-secondary">{step.text}</p>
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
            <div className="grid gap-8 rounded-[2.2rem] bg-[radial-gradient(circle_at_12%_10%,rgba(255,101,219,0.16),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(67,216,255,0.16),transparent_30%),linear-gradient(145deg,rgba(22,16,36,0.96),rgba(9,6,15,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Play size={32} strokeWidth={1.8} />
                  </div>
                  <h2 className="section-title max-w-3xl">{copy.outputTitle}</h2>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/80">
                  <span className="rounded-full bg-white/10 px-4 py-2">{copy.flow[0]}</span>
                  <MoveRight className="text-[#ff7ad9]" size={18} aria-hidden="true" />
                  <span className="rounded-full bg-white/10 px-4 py-2">{copy.flow[1]}</span>
                  <MoveRight className="text-[#ff7ad9]" size={18} aria-hidden="true" />
                  <span className="rounded-full bg-white/10 px-4 py-2">{copy.flow[2]}</span>
                </div>
              </div>

              <div className="grid gap-4">
                {copy.outputs.map((output) => (
                  <div key={output} className="glass-panel flex items-start gap-4 rounded-[1.7rem] px-5 py-5">
                    <BadgeCheck className="mt-1 shrink-0 text-[#43d8ff]" size={21} />
                    <p className="text-base leading-8 text-text-secondary">{output}</p>
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
