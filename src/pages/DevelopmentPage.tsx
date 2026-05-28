import {
  Bot,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Eye,
  MoveRight,
  LineChart,
  Mic,
  Network,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteCopy } from "@/lib/siteCopy";

const developmentStats = [
  { value: "2-4", label: "месяца на MVP" },
  { value: "6-12", label: "месяцев на интеграцию" },
  { value: "1-2", label: "года на AI-продукт" }
];

const aiDirections = [
  {
    icon: Bot,
    title: "Бот поддержки и первичной обработки заявок",
    text: "Telegram или web-бот, который отвечает на частые вопросы, собирает данные клиента, передает сложные обращения менеджеру и сохраняет историю.",
    timeline: "2-4 месяца",
    items: ["FAQ и сценарии", "интеграция с CRM", "передача оператору"]
  },
  {
    icon: DatabaseZap,
    title: "Поиск по документам и базе знаний",
    text: "Внутренний AI-помощник, который ищет ответы в регламентах, договорах, инструкциях, обучающих материалах и показывает источники.",
    timeline: "3-6 месяцев",
    items: ["индексация документов", "цитирование источников", "контроль доступа"]
  },
  {
    icon: Workflow,
    title: "Автоматизация операционных задач",
    text: "Решение для повторяющихся процессов: классификация заявок, подготовка черновиков документов, уведомления, статусы и контроль дедлайнов.",
    timeline: "4-8 месяцев",
    items: ["заявки и статусы", "шаблоны документов", "уведомления команде"]
  },
  {
    icon: Eye,
    title: "OCR и обработка документов",
    text: "Система, которая извлекает данные из счетов, актов, заявлений, паспортов или анкет и передает результат в таблицу или CRM.",
    timeline: "3-7 месяцев",
    items: ["распознавание полей", "проверка ошибок", "экспорт в систему"]
  },
  {
    icon: Mic,
    title: "Анализ звонков и качества сервиса",
    text: "Транскрибация звонков, краткие итоги, теги, оценка соблюдения скриптов и понятная аналитика для руководителя отдела продаж или поддержки.",
    timeline: "4-9 месяцев",
    items: ["расшифровка звонков", "оценка скриптов", "отчеты по команде"]
  },
  {
    icon: LineChart,
    title: "Продажи, скоринг и прогнозы",
    text: "Модели и дашборды для оценки лидов, прогноза спроса, сегментации клиентов и раннего поиска рисков в данных.",
    timeline: "6-12 месяцев",
    items: ["скоринг лидов", "прогноз спроса", "сегменты клиентов"]
  },
  {
    icon: Code2,
    title: "Внутренний AI-кабинет для команды",
    text: "Единое рабочее место с ролями, шаблонами промптов, историей запросов, доступом к документам и готовыми сценариями для отделов.",
    timeline: "6-14 месяцев",
    items: ["роли сотрудников", "шаблоны задач", "история и контроль"]
  },
  {
    icon: Network,
    title: "Долгосрочная AI-интеграция в продукт",
    text: "Постепенное внедрение AI-функций в существующий сайт, CRM, LMS, marketplace или внутреннюю платформу с поддержкой и развитием.",
    timeline: "1-2 года",
    items: ["дорожная карта", "API и интерфейсы", "поддержка релизов"]
  }
];

const aiDirectionIcons = [Bot, DatabaseZap, Workflow, Eye, Mic, LineChart, Code2, Network];

const deliverySteps = [
  {
    title: "Аудит и карта возможностей",
    text: "Находим процессы, где AI даст быстрый эффект, оцениваем данные, риски, стоимость и приоритет запуска."
  },
  {
    title: "Прототип за короткий цикл",
    text: "Собираем рабочий MVP, показываем команде реальный сценарий и быстро уточняем требования на практике."
  },
  {
    title: "Интеграция в процессы",
    text: "Подключаем нужные системы, настраиваем права, сценарии, аналитику и удобный интерфейс для пользователей."
  },
  {
    title: "Запуск и сопровождение",
    text: "Следим за качеством, улучшаем промпты и модели, добавляем новые функции и помогаем команде пользоваться решением."
  }
];

const outputs = [
  "готовый web-сервис или внутренний инструмент",
  "бот или ассистент под конкретную роль",
  "интеграция с CRM, базой знаний, сайтом или мессенджером",
  "дашборд с метриками качества и использования",
  "документация, обучение команды и план развития"
];

export function DevelopmentPage() {
  const copy = useSiteCopy().development;
  usePageMeta(copy.metaTitle, copy.metaDescription);

  return (
    <>
      <section className="section-shell section-space grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
        <div className="lg:col-span-2">
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
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="max-w-4xl">
              <h2 className="section-title">{copy.directionsTitle}</h2>
            </div>
          </SectionReveal>

          <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.directions.map((item, index) => {
              const Icon = aiDirectionIcons[index] ?? Bot;

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
              <h2 className="section-title">{copy.processTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-text-secondary">
                {copy.processText}
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-4">
            {copy.process.map((step, index) => (
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
            <div className="grid gap-8 rounded-[2.2rem] bg-[radial-gradient(circle_at_12%_10%,rgba(67,216,255,0.16),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(255,101,219,0.18),transparent_30%),linear-gradient(145deg,rgba(22,16,36,0.96),rgba(9,6,15,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Code2 size={32} strokeWidth={1.8} />
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
                    <ShieldCheck className="mt-1 shrink-0 text-[#43d8ff]" size={21} />
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
