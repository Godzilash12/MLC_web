import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Handshake,
  Lightbulb,
  Megaphone,
  MessageCircle,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SectionReveal } from "@/components/SectionReveal";
import { EVENT_CATEGORIES } from "@/data/eventsData";
import { useCountUpWhenActive } from "@/hooks/useCountUpWhenActive";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteCopy } from "@/lib/siteCopy";

const communityStats = [
  { value: "3500+", label: "участников" },
  { value: "50+", label: "мероприятий" },
  { value: "6000+", label: "посещений" }
];

const communityFormats = [
  {
    icon: CalendarDays,
    title: "Митапы и лекции",
    text: "Встречи с практиками AI, founders, инженерами и продуктовыми командами, где разбираем реальные кейсы.",
    items: ["AI-тренды", "прикладные кейсы", "вопросы с экспертами"]
  },
  {
    icon: MessageCircle,
    title: "Нетворкинг",
    text: "Форматы, где участники находят единомышленников, будущих коллег, партнёров, менторов и команды.",
    items: ["знакомства", "карьерные связи", "партнёрства"]
  },
  {
    icon: Lightbulb,
    title: "Практические разборы",
    text: "Разбираем инструменты, промпты, автоматизации, портфолио, идеи проектов и реальные задачи участников.",
    items: ["разборы задач", "AI-инструменты", "практика вместо шума"]
  },
  {
    icon: Megaphone,
    title: "Большие события",
    text: "Конференции, вечеринки сообщества, демо-дни, публичные дискуссии и коллаборации с партнёрами.",
    items: ["конференции", "demo day", "community party"]
  }
];

const communityFormatIcons = [CalendarDays, MessageCircle, Lightbulb, Megaphone];

const pastEvents = [
  {
    title: "AI Rewind",
    meta: "Конференция и обзор AI-трендов",
    image: "/community-avif/Frame 1.avif"
  },
  {
    title: "ML Gap",
    meta: "Лекции и разборы кейсов",
    image: "/community-avif/Frame 10.avif"
  },
  {
    title: "ML Party",
    meta: "Нетворкинг и вечер сообщества",
    image: "/community-avif/Frame 11.avif"
  },
  {
    title: "Guest Lectures",
    meta: "Встречи с экспертами индустрии",
    image: "/community-avif/Frame 13-1.avif"
  },
  {
    title: "Partner Meetups",
    meta: "События с компаниями и вузами",
    image: "/community-avif/Frame 4.avif"
  },
  {
    title: "Community Talks",
    meta: "Открытые разговоры о рынке AI",
    image: "/community-avif/photo-2026-04-23-11-17-54.avif"
  }
];

const communityValue = [
  "понимание, что реально происходит в AI-сфере",
  "доступ к людям, компаниям, менторам и возможностям",
  "среда, где можно задать вопрос и быстро найти направление",
  "мотивация учиться, запускать проекты и расти в профессии",
  "связь между участниками, бизнесом, образованием и государственными инициативами"
];

function digitCount(value: string) {
  return (value.match(/\d/g) ?? []).length;
}

function numericPart(value: string) {
  return value.replace(/[^\d]/g, "");
}

function suffixPart(value: string) {
  return value.replace(/[\d]/g, "");
}

function AnimatedStatValue({ value, active }: { value: string; active: boolean }) {
  const digits = numericPart(value);
  const suffix = suffixPart(value);
  const target = Number(digits || "0");
  const current = useCountUpWhenActive(target, active);
  const display = String(current).padStart(Math.max(digitCount(value), String(target).length), "0");

  return (
    <span className="inline-flex items-baseline justify-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl" aria-label={value}>
      {display}
      {suffix ? <span className="stat-card__suffix">{suffix}</span> : null}
    </span>
  );
}

export function CommunityPage() {
  const navigate = useNavigate();
  const copy = useSiteCopy().community;
  const statsReveal = useInViewOnce<HTMLDivElement>({ threshold: 0.45 });
  usePageMeta(copy.metaTitle, copy.metaDescription);
  const pastEventsWithId = pastEvents.map((event) => ({
    ...event,
    categoryId: EVENT_CATEGORIES.find((c) => c.title === event.title)?.id ?? null,
  }));

  return (
    <>
      <section className="section-shell section-space">
        <SectionReveal>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display-title text-balance">{copy.title}</h1>
          </div>
        </SectionReveal>

        <div ref={statsReveal.ref} className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
          {copy.stats.map((item) => (
            <SectionReveal key={item.label}>
              <div className="glass-panel rounded-[1.7rem] px-6 py-6 text-center">
                <AnimatedStatValue value={item.value} active={statsReveal.inView} />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary">{item.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{copy.formatsTitle}</h2>
          </SectionReveal>

          <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.formats.map((item, index) => {
              const Icon = communityFormatIcons[index] ?? CalendarDays;

              return (
                <SectionReveal key={item.title}>
                  <article className="glass-panel group flex h-full min-h-[22rem] flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition duration-300 group-hover:bg-white/15">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-white">{item.title}</h3>
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
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="section-title max-w-4xl">{copy.pastTitle}</h2>
              <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-text-secondary">
                {copy.pastBadge}
              </span>
            </div>
          </SectionReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.pastEvents.map((event, index) => {
              const image = pastEvents[index]?.image ?? pastEvents[0].image;
              const categoryId = pastEventsWithId[index]?.categoryId;

              return (
              <SectionReveal key={event.title}>
                <article
                  onClick={categoryId ? () => navigate(`/community/events/${categoryId}`) : undefined}
                  className={[
                    "group relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-[#15101f] transition duration-300 hover:-translate-y-1",
                    categoryId ? "cursor-pointer" : "",
                  ].join(" ")}
                >
                  <img
                    src={image}
                    alt={event.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,15,0.05),rgba(9,6,15,0.22)_42%,rgba(9,6,15,0.92)_100%)]" />
                  <div className="relative z-10 flex h-full min-h-[24rem] flex-col justify-end p-6">
                    <p className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#43d8ff]">
                      {event.meta}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">{event.title}</h3>
                  </div>
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
            <div className="grid gap-8 rounded-[2.2rem] bg-[radial-gradient(circle_at_12%_10%,rgba(67,216,255,0.16),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(255,101,219,0.18),transparent_30%),linear-gradient(145deg,rgba(22,16,36,0.96),rgba(9,6,15,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Users size={32} strokeWidth={1.8} />
                  </div>
                  <h2 className="section-title max-w-3xl">{copy.valueTitle}</h2>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/80">
                  <span className="rounded-full bg-white/10 px-4 py-2">{copy.valueFlow[0]}</span>
                  <ArrowUpRight className="text-[#ff7ad9]" size={18} aria-hidden="true" />
                  <span className="rounded-full bg-white/10 px-4 py-2">{copy.valueFlow[1]}</span>
                  <ArrowUpRight className="text-[#ff7ad9]" size={18} aria-hidden="true" />
                  <span className="rounded-full bg-white/10 px-4 py-2">{copy.valueFlow[2]}</span>
                </div>
              </div>

              <div className="grid gap-4">
                {copy.values.map((value) => (
                  <div key={value} className="glass-panel flex items-start gap-4 rounded-[1.7rem] px-5 py-5">
                    <Handshake className="mt-1 shrink-0 text-[#43d8ff]" size={21} />
                    <p className="text-base leading-8 text-text-secondary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionReveal>
            <h2 className="section-title">{copy.joinTitle}</h2>
          </SectionReveal>

          <div className="grid gap-4">
            {copy.joinSteps.map(([number, title, text]) => (
              <SectionReveal key={number}>
                <article className="glass-panel grid gap-5 rounded-[1.7rem] px-5 py-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:px-6">
                  <div className="service-card__number text-4xl sm:text-5xl">{number}</div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">{title}</h3>
                    <p className="mt-3 text-base leading-8 text-text-secondary">{text}</p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
