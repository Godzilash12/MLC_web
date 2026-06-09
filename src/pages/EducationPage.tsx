import { ArrowUpRight, BriefcaseBusiness, MonitorPlay, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SectionReveal } from "@/components/SectionReveal";
import { zeroOneAiCohorts } from "@/data/fallbackContent";
import { getGraduateStoriesLocalized } from "@/data/graduateContent";
import { getPartnerStoryById } from "@/data/partnerContent";
import { useCountUpWhenActive } from "@/hooks/useCountUpWhenActive";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getSiteLanguage, useSiteCopy } from "@/lib/siteCopy";

const educationStats = [
  { value: "400+", label: "выпускников" },
  { value: "70%", label: "трудоустроенных" },
  { value: "8+", label: "обученных компаний" }
];

const trainedCompanies = [
  { name: "Biznesni Rivojlantirish Banki", shortName: "BRB", domain: "brb.uz", href: "https://brb.uz/" },
  { name: "Navoi Mining and Metallurgical Company", shortName: "NGMK", domain: "ngmk.uz", href: "https://ngmk.uz/en/" },
  {
    name: "UNDP Uzbekistan",
    shortName: "UNDP",
    domain: "undp.org",
    href: "https://www.undp.org/uzbekistan",
    logoSrc: "/trained-companies/undp.svg"
  },
  {
    name: "Akkermann Cement",
    shortName: "Akkermann",
    domain: "akkermann.ru",
    href: "https://www.akkermann.ru/english/"
  },
  { name: "Exadel Poland", shortName: "Exadel Poland", domain: "exadel.com", href: "https://exadel.com/" },
  { name: "Paynet", shortName: "Paynet", domain: "paynet.uz", href: "https://paynet.uz/ru" },
  { name: "Ministry of Internal Affairs", shortName: "MIA", domain: "gov.uz", href: "https://gov.uz/ru/iiv" },
  {
    name: "Webster University in Tashkent",
    shortName: "Webster",
    domain: "webster.uz",
    href: "https://www.webster.uz/"
  }
];

const educationFormats = [
  {
    icon: User,
    title: "Персональное обучение",
    text:
      "Индивидуальная траектория под цель студента: разбираем текущий уровень, собираем программу, двигаемся в комфортном темпе и доводим навыки до практического результата."
  },
  {
    icon: Users,
    title: "Групповое обучение студентов",
    text:
      "Живые уроки, стажировки, визиты в офисы партнёров, мастер-классы, подготовка к интервью и резюме. Это не просто курс, а среда, где студент растёт быстрее."
  },
  {
    icon: BriefcaseBusiness,
    title: "Корпоративное обучение",
    text:
      "Кастомные AI-программы для команд: автоматизация процессов, персональная эффективность, контент, отчётность, презентации, аналитика и другие прикладные сценарии бизнеса."
  },
  {
    icon: MonitorPlay,
    title: "Платформа 01AI",
    text:
      "Онлайн-обучение для всех, кто хочет освоить AI гибко: понятные модули, практические задания и доступ к знаниям без привязки к месту и расписанию."
  }
];

const educationFormatIcons = [User, Users, BriefcaseBusiness, MonitorPlay];

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
    <span
      className="inline-flex items-baseline justify-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl"
      aria-label={value}
    >
      {display}
      {suffix ? <span className="stat-card__suffix">{suffix}</span> : null}
    </span>
  );
}

const localLogoByDomain: Record<string, string> = {
  "brb.uz": "/trained-companies/brb.png",
  "ngmk.uz": "/trained-companies/ngmk.png",
  "akkermann.ru": "/trained-companies/akkermann.png",
  "exadel.com": "/trained-companies/exadel.png",
  "paynet.uz": "/trained-companies/paynet.png",
  "gov.uz": "/trained-companies/mvd.webp",
  "webster.uz": "/trained-companies/webster.png"
};

const logoUrl = (domain: string) => localLogoByDomain[domain] ?? `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;

export function EducationPage() {
  const { i18n } = useTranslation();
  const lang = getSiteLanguage(i18n.language);
  const copy = useSiteCopy().education;
  const statsReveal = useInViewOnce<HTMLDivElement>({ threshold: 0.45 });
  usePageMeta(copy.metaTitle, copy.metaDescription);

  const internshipPartners = ["14", "13", "8", "10", "12", "11"]
    .map((id) => getPartnerStoryById(id))
    .filter((partner): partner is NonNullable<ReturnType<typeof getPartnerStoryById>> => Boolean(partner));

  const internshipPhotos = internshipPartners.flatMap((partner) => {
    const gallery = partner.blocks.find((block) => block.type === "image_group");
    if (gallery?.type === "image_group") return gallery.images.slice(0, 2);
    return partner.hero_image_url ? [partner.hero_image_url] : [];
  });

  const internshipRows = [
    internshipPhotos.filter((_, index) => index % 3 === 0),
    internshipPhotos.filter((_, index) => index % 3 === 1),
    internshipPhotos.filter((_, index) => index % 3 === 2)
  ].map((row) => [...row, ...row]);

  const graduateStoriesLocalized = getGraduateStoriesLocalized(lang);
  const graduateMarqueeItems = [...graduateStoriesLocalized, ...graduateStoriesLocalized];

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
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">{item.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <h2 className="section-title">{copy.companiesTitle}</h2>
                <p className="mt-5 text-lg leading-8 text-text-secondary">
                  {copy.companiesText}
                </p>
              </div>
              <span className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-text-secondary">
                {copy.partnersBadge}
              </span>
            </div>
          </SectionReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trainedCompanies.map((company) => (
              <SectionReveal key={company.name}>
                <a
                  href={company.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open website ${company.name}`}
                  className="trained-company-card group flex min-h-[14rem] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <ArrowUpRight className="trained-company-card__arrow" size={18} aria-hidden="true" />
                  <div className="trained-company-card__logo flex h-24 w-24 items-center justify-center rounded-[1.7rem] p-4">
                    <img
                      src={company.logoSrc ?? logoUrl(company.domain)}
                      alt={`${company.shortName} logo`}
                      width="96"
                      height="96"
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">{company.shortName}</p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{company.name}</p>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="max-w-4xl">
              <h2 className="section-title">{copy.graduatesTitle}</h2>
            </div>
          </SectionReveal>

          <div className="graduate-marquee mt-12">
            <div className="graduate-marquee__track">
              {graduateMarqueeItems.map((graduate, index) => (
                <Link
                  key={`${graduate.id}-${index}`}
                  to={`/graduates/${graduate.id}`}
                  className="group graduate-marquee__card relative isolate flex min-h-[30rem] w-[22rem] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#15101f] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.3)] [transform:translateZ(0)]"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                    <img
                      src={graduate.photo}
                      alt={graduate.name}
                      className="h-full w-full rounded-[inherit] object-cover transition duration-500 group-hover:scale-[1.035] [backface-visibility:hidden]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(9,6,15,0.02),rgba(9,6,15,0.18)_42%,rgba(9,6,15,0.95)_100%)]" />

                  <div className="relative z-10 mt-auto w-full p-6 pr-20">
                    <h3 className="text-[1.95rem] font-semibold tracking-[-0.045em] leading-[0.96] text-white">
                      {graduate.name}
                    </h3>
                    <p className="mt-4 text-[1.05rem] font-medium leading-snug text-white/88">{graduate.company}</p>
                  </div>

                  <span className="pointer-events-none absolute bottom-6 right-6 z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/6 text-white backdrop-blur-md transition group-hover:border-white/30 group-hover:bg-white/10">
                    <ArrowUpRight size={20} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="grid gap-8 overflow-hidden rounded-[2.2rem] bg-[radial-gradient(circle_at_12%_10%,rgba(109,67,255,0.22),transparent_34%),radial-gradient(circle_at_75%_12%,rgba(255,101,219,0.16),transparent_30%),linear-gradient(145deg,rgba(21,15,32,0.96),rgba(10,7,16,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
              <div>
                <h2 className="section-title max-w-2xl">{copy.internshipTitle}</h2>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {internshipPartners.map((partner) => (
                    <Link
                      key={partner.id}
                      to={partner.internal_url ?? `/partners/${partner.id}`}
                      className="group flex min-h-[7.2rem] items-center justify-center rounded-[1.6rem] bg-white p-4 shadow-[0_16px_32px_rgba(16,12,24,0.08)] transition duration-300 hover:-translate-y-1"
                    >
                      <img
                        src={partner.logo_url}
                        alt={partner.name}
                        className="max-h-12 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-3">
                <div className="space-y-3">
                  {internshipRows.map((row, rowIndex) => (
                    <div
                      key={`internship-row-${rowIndex}`}
                      className={`graduate-marquee ${rowIndex === 1 ? "[animation-direction:reverse]" : ""}`}
                    >
                      <div className="graduate-marquee__track gap-3">
                        {row.map((photo, index) => (
                          <div
                            key={`${photo}-${rowIndex}-${index}`}
                            className="relative aspect-video h-auto w-[16.2rem] shrink-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#15101f]"
                          >
                            <img
                              src={photo}
                              alt={`${copy.internshipTitle} ${rowIndex + 1}-${index + 1}`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="max-w-4xl">
              <h2 className="section-title">{copy.formatsTitle}</h2>
            </div>
          </SectionReveal>

          <div className="mt-10 grid auto-rows-fr gap-5 lg:grid-cols-2">
            {copy.formats.map((item, index) => {
              const Icon = educationFormatIcons[index] ?? User;

              return (
                <SectionReveal key={item.title}>
                  <article className="glass-panel group relative flex h-full min-h-[23rem] overflow-hidden rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1">
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#ff65db]/20 blur-3xl transition duration-300 group-hover:bg-[#6d43ff]/25" />
                    <div className="relative flex h-full flex-col">
                      <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                        <Icon size={30} strokeWidth={1.8} />
                      </div>
                      <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
                      <p className="mt-5 text-base leading-8 text-text-secondary">{item.text}</p>
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
            <h2 className="section-title">{copy.cohortsTitle ?? "Прошлые потоки"}</h2>
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
                          <p className="text-xs text-text-secondary">{copy.cohortsGraduates ?? "выпускников"}</p>
                        </div>
                        <div>
                          <p className="font-mono text-2xl font-bold text-accent">{cohort.employed}%</p>
                          <p className="text-xs text-text-secondary">{copy.cohortsEmployed ?? "трудоустроены"}</p>
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

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <h2 className="section-title">{copy.galleryTitle ?? "Фотографии с уроков"}</h2>
          </SectionReveal>
          <div className="mt-10 columns-2 gap-3 md:columns-3 xl:columns-4">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <SectionReveal key={n}>
                <div className="mb-3 overflow-hidden rounded-[1.2rem]" style={{ breakInside: "avoid" }}>
                  <img
                    src={`/01ai/gallery/photo-${n}.webp`}
                    alt={`Lesson photo ${n}`}
                    className="w-full object-cover transition duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
