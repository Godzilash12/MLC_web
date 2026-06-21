import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Users, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { EVENT_CATEGORIES, getCategoryById, type EventEdition } from "@/data/eventsData";
import { useSiteCopy } from "@/lib/siteCopy";

type LightboxState = { photos: string[]; index: number } | null;

function yearRange(editions: EventEdition[]) {
  const years = editions.map((edition) => edition.year);
  const min = Math.min(...years);
  const max = Math.max(...years);
  return min === max ? String(max) : `${max}-${min}`;
}

function groupEditionsByYear(editions: EventEdition[]) {
  return editions.reduce<Record<number, EventEdition[]>>((groups, edition) => {
    groups[edition.year] = [...(groups[edition.year] ?? []), edition];
    return groups;
  }, {});
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      setCount(Math.round((value * frame) / totalFrames));
      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, 24);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <span className="font-mono text-3xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

function PhotoPreview({
  edition,
  emoji,
  onOpen,
}: {
  edition: EventEdition;
  emoji: string;
  onOpen: (photos: string[], index: number) => void;
}) {
  const [activePhoto, setActivePhoto] = useState(0);
  const timerRef = useRef<number | null>(null);
  const photos = edition.photos.length > 0 ? edition.photos : edition.coverImage ? [edition.coverImage] : [];
  const hasPhotos = photos.length > 0;

  function stopSlideshow() {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setActivePhoto(0);
  }

  function startSlideshow() {
    if (photos.length < 2 || timerRef.current !== null) {
      return;
    }
    timerRef.current = window.setInterval(() => {
      setActivePhoto((index) => (index + 1) % photos.length);
    }, 1500);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  if (!hasPhotos) {
    return (
      <div className="flex aspect-video items-center justify-center bg-surface text-6xl text-text-secondary">
        {emoji}
      </div>
    );
  }

  return (
    <button
      type="button"
      className="block aspect-video w-full overflow-hidden bg-surface"
      onMouseEnter={startSlideshow}
      onMouseLeave={stopSlideshow}
      onFocus={startSlideshow}
      onBlur={stopSlideshow}
      onClick={() => onOpen(photos, activePhoto)}
    >
      <img
        src={photos[activePhoto]}
        alt={edition.title}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </button>
  );
}

function SourceButton({ sourceUrl, label = 'Источник' }: { sourceUrl?: string; label?: string }) {
  if (!sourceUrl) {
    return null;
  }

  return (
    <a href={sourceUrl} target="_blank" rel="noreferrer" className="button-ghost mt-6">
      {label}
      <ExternalLink size={16} aria-hidden="true" />
    </a>
  );
}

function SpeakersCarousel({ speakers }: {
  speakers: { name: string; title: string; photo: string; title_uz?: string; title_en?: string; title_zh?: string }[]
}) {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split('-')[0] ?? 'ru';

  return (
    <div className='flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory'>
      {speakers.map((sp, i) => {
        const speakerTitle = locale === 'uz' ? (sp.title_uz ?? sp.title)
          : locale === 'en' ? (sp.title_en ?? sp.title)
          : locale === 'zh' ? (sp.title_zh ?? sp.title)
          : sp.title;
        return (
          <div
            key={`${sp.name}-${i}`}
            className='relative w-40 shrink-0 snap-start overflow-hidden rounded-[1.4rem] bg-surface'
            style={{ aspectRatio: '3/4' }}
          >
            {sp.photo ? (
              <img
                src={sp.photo}
                alt={sp.name}
                className='absolute inset-0 h-full w-full object-cover object-top'
                loading='lazy'
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className='absolute inset-0 flex items-center justify-center bg-primary/20'>
                <span className='text-3xl font-bold text-white/40'>
                  {sp.name.charAt(0)}
                </span>
              </div>
            )}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-3'>
              <p className='text-xs font-bold leading-4 text-white'>
                {sp.name}
              </p>
              <p className='mt-0.5 text-[10px] leading-3 text-white/60'>
                {speakerTitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SpeakerAvatar({ name, photo }: { name: string; photo: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface text-sm font-bold text-text">
      {photo && !failed ? (
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        initials
      )}
    </div>
  );
}

function EditionInfo({ categoryColor, edition, categoryId }: { categoryColor: string; edition: EventEdition; categoryId?: string }) {
  const copy = useSiteCopy();
  const catCopy = categoryId === 'office-visits' ? copy.partnerMeetups
    : categoryId === 'ml-party' ? copy.mlParty
    : categoryId === 'ml-contest' ? copy.mlContest
    : copy.mlGap;
  const eventsCopy = copy.events as Record<string, string> | undefined;
  const desc = edition.descriptionKey
    ? (eventsCopy?.[edition.descriptionKey] ?? edition.description)
    : edition.description;

  return (
    <div className="p-6 lg:p-8">
      <p className="font-mono text-5xl font-bold text-accent" style={{ color: categoryColor }}>
        {edition.year}
      </p>
      <h3 className="mt-4 text-3xl font-bold text-text">{edition.title}</h3>
      <p className="mt-3 text-base text-text-secondary">{edition.dateLabel}</p>
      <p className="mt-3 flex items-center gap-2 text-base text-text-secondary">
        <Users size={18} className="text-accent" aria-hidden="true" />
        {edition.participantCount}+ {catCopy.attendees ?? 'участников'}
      </p>
      <p className="mt-5 text-base leading-8 text-text-secondary">{desc}</p>
      <SourceButton sourceUrl={edition.sourceUrl} label={catCopy.sourceLabel ?? 'Источник'} />
    </div>
  );
}

function EditionExtras({ edition, categoryId }: { edition: EventEdition; categoryId?: string }) {
  const copy = useSiteCopy();
  const catCopy = categoryId === 'office-visits' ? copy.partnerMeetups
    : categoryId === 'ml-party' ? copy.mlParty
    : categoryId === 'ml-contest' ? copy.mlContest
    : copy.mlGap;
  return (
    <>
      {edition.partners && edition.partners.length > 0 && (
        <div className="mt-8">
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-text">{catCopy.sectionPartners ?? 'Партнёры'}</h3>
          </div>
          <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {edition.partners.map((p, i) => {
              const cardClass = p.logo
                ? "flex h-16 items-center justify-center rounded-[1.2rem] bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-[1.04] hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
                : "flex h-16 items-center justify-center rounded-[1.2rem] bg-white px-4 py-3 shadow-[0_2px_16px_rgba(0,0,0,0.12)]";

              return (
                <a
                  key={i}
                  href={p.url ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClass}
                >
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-9 w-full object-contain"
                    />
                  ) : (
                    <span className="text-center text-xs font-bold text-gray-700 leading-tight">
                      {p.name}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {edition.sources && edition.sources.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-text">{catCopy.sectionSources ?? 'Источники'}</h3>
          <div className="flex flex-wrap gap-3">
            {edition.sources.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 min-w-[120px] items-center justify-center rounded-[1.2rem] bg-white px-4 shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-[1.04]"
              >
                {s.logo ? (
                  <img src={s.logo} alt={s.platform} className="max-h-7 max-w-[100px] object-contain" />
                ) : (
                  <span className="text-xs font-bold text-gray-700">{s.platform} ↗</span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function EditionCard({
  categoryColor,
  edition,
  emoji,
  onOpen,
  categoryId,
}: {
  categoryColor: string;
  edition: EventEdition;
  emoji: string;
  onOpen: (photos: string[], index: number) => void;
  categoryId?: string;
}) {
  const copy = useSiteCopy();
  const catCopy = categoryId === 'office-visits' ? copy.partnerMeetups
    : categoryId === 'ml-party' ? copy.mlParty
    : categoryId === 'ml-contest' ? copy.mlContest
    : copy.mlGap;
  const seen = new Set<string>();
  const allSpeakers = [
    ...(edition.speakers ?? []),
    ...(edition.additionalSpeakers ?? []),
  ].filter(sp => {
    const key = sp.name.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const hasPhotos = edition.photos.length > 0 || Boolean(edition.coverImage);
  const hasSpeakers = allSpeakers.length > 0;
  const infoOnly = !hasPhotos && !hasSpeakers;

  return (
    <SectionReveal>
      <article className="card-surface overflow-hidden rounded-[2rem]">
        {infoOnly ? (
          <>
            <EditionInfo categoryColor={categoryColor} edition={edition} categoryId={categoryId} />
            <div className="px-6 pb-6 lg:px-8 lg:pb-8">
              <EditionExtras edition={edition} categoryId={categoryId} />
            </div>
          </>
        ) : (
          <>
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <PhotoPreview edition={edition} emoji={emoji} onOpen={onOpen} />
              <EditionInfo categoryColor={categoryColor} edition={edition} categoryId={categoryId} />
            </div>
            <div className="px-6 pb-6 lg:px-8 lg:pb-8">
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-text">{catCopy.sectionSpeakers ?? 'Спикеры'}</h3>
                <div className="mt-5">
                  <SpeakersCarousel speakers={allSpeakers} />
                </div>
              </div>
              <EditionExtras edition={edition} categoryId={categoryId} />
            </div>
          </>
        )}
      </article>
    </SectionReveal>
  );
}

const hackathonPeoplePhotos = [
  "/events/hackathon-2024/mentor(1).webp",
  "/events/hackathon-2024/mentor(2).webp",
  "/events/hackathon-2024/mentor(3).webp",
  "/events/hackathon-2024/mentor(4).webp",
  "/events/hackathon-2024/mentor(5).webp",
  "/events/hackathon-2024/mentor(6).webp",
  "/events/hackathon-2024/mentor(7).webp",
  "/events/hackathon-2024/speaker(1).webp",
  "/events/hackathon-2024/speaker(2).webp",
  "/events/hackathon-2024/speaker(3).webp",
  "/events/hackathon-2024/speaker(4).webp",
  "/events/hackathon-2024/speaker(5).webp",
];

function HackathonPage({
  edition,
}: {
  edition: EventEdition;
  onOpen: (photos: string[], index: number) => void;
}) {
  const copy = useSiteCopy();
  const ah = (copy as Record<string, unknown>).aiHackathon as Record<string, string> | undefined;
  const eventsCopy = copy.events as Record<string, string> | undefined;
  const desc = edition.descriptionKey
    ? (eventsCopy?.[edition.descriptionKey] ?? edition.description)
    : edition.description;

  return (
    <>
      <section className="section-shell pt-4">
        <SectionReveal>
          <div
            className="overflow-hidden rounded-[2rem] p-8 lg:p-12"
            style={{
              background:
                "radial-gradient(circle at 20% 50%, rgba(123,45,201,0.4), transparent 50%), radial-gradient(circle at 80% 20%, rgba(67,100,255,0.3), transparent 50%), linear-gradient(135deg, #0A0A1E, #1A0A3E)",
            }}
          >
            <p className="w-fit rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/80">
              ⚡ Главный ивент MLC
            </p>
            <h1 className="display-title mt-5">AI Hackathon</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-text-secondary">
              Три дня. Команды. Реальные AI-продукты.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <div className="glass-panel rounded-[1.4rem] px-6 py-4">
                <AnimatedCounter value={400} suffix="+" />
                <p className="mt-2 text-xs text-text-secondary">{ah?.statAttendees ?? copy.mlGap.attendees ?? 'участников'}</p>
              </div>
              <div className="glass-panel rounded-[1.4rem] px-6 py-4">
                <AnimatedCounter value={100} suffix="M" />
                <p className="mt-2 text-xs text-text-secondary">сум призовой фонд</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="overflow-hidden py-4">
              <div
                className="flex animate-marquee gap-3 hover:[animation-play-state:paused]"
                style={{ animation: "marquee 80s linear infinite", width: "max-content" }}
              >
                {[...edition.photos, ...edition.photos].map((src, index) => (
                  <div key={`${src}-${index}`} className="h-64 w-96 shrink-0 overflow-hidden rounded-[1.2rem]">
                    <img
                      src={src}
                      alt={`Hackathon photo ${index + 1}`}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <article className="card-surface mt-10 rounded-[2rem] p-8">
              <p className="text-base leading-8 text-text-secondary">{desc}</p>
            </article>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-14">
              <h2 className="section-title">Победители</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <article className="card-surface rounded-[1.7rem] border border-yellow-500/30 bg-gradient-to-br from-yellow-500/5 to-transparent p-6 text-center">
                  <div className="mb-3 text-5xl">🥇</div>
                  <p className="text-xs uppercase tracking-widest text-text-muted">1 место</p>
                  <h3 className="mt-2 text-xl font-bold text-white">Shifo AI</h3>
                </article>
                <article className="card-surface rounded-[1.7rem] border border-gray-400/30 p-6 text-center">
                  <div className="mb-3 text-5xl">🥈</div>
                  <p className="text-xs uppercase tracking-widest text-text-muted">2 место</p>
                  <h3 className="mt-2 text-xl font-bold text-white">Data Dreamers</h3>
                </article>
                <article className="card-surface rounded-[1.7rem] border border-orange-700/30 p-6 text-center">
                  <div className="mb-3 text-5xl">🥉</div>
                  <p className="text-xs uppercase tracking-widest text-text-muted">3 место</p>
                  <h3 className="mt-2 text-xl font-bold text-white">ICEMEDAI</h3>
                </article>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-14">
              <h2 className="section-title">Менторы и спикеры</h2>
              <p className="mt-4 text-lg text-text-secondary">Информация на фото ниже</p>
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {hackathonPeoplePhotos.map((src, index) => (
                  <article key={src} className="card-surface overflow-hidden rounded-[1.4rem] p-3">
                    <img
                      src={src}
                      alt={`Hackathon mentor or speaker ${index + 1}`}
                      className="w-full rounded-[1rem] object-contain"
                      loading="lazy"
                    />
                  </article>
                ))}
              </div>
              <p className="mt-3 text-center text-sm text-text-muted">
                {"\u0412\u0441\u0435 \u043c\u0435\u043d\u0442\u043e\u0440\u044b \u0438 \u0441\u043f\u0438\u043a\u0435\u0440\u044b \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0430"}
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            {edition.partners && edition.partners.length > 0 ? (
              <div className="mt-14">
                <div className="mb-5">
                  <h3 className="text-lg font-semibold text-text">{ah?.sectionPartners ?? copy.mlGap.sectionPartners ?? 'Партнёры'}</h3>
                </div>
                <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                  {edition.partners.map((p, i) => {
                    const cardClass = p.logo
                      ? "flex h-16 items-center justify-center rounded-[1.2rem] bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-[1.04] hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
                      : "flex h-16 items-center justify-center rounded-[1.2rem] bg-white px-4 py-3 shadow-[0_2px_16px_rgba(0,0,0,0.12)]";

                    return (
                      <a
                        key={i}
                        href={p.url ?? '#'}
                        target="_blank"
                        rel="noreferrer"
                        className={cardClass}
                      >
                        {p.logo ? (
                          <img
                            src={p.logo}
                            alt={p.name}
                            className="max-h-9 w-full object-contain"
                          />
                        ) : (
                          <span className="text-center text-xs font-bold text-gray-700 leading-tight">
                            {p.name}
                          </span>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </SectionReveal>

          {edition.sources && edition.sources.length > 0 && (
            <SectionReveal>
              <div className="mt-14">
                <h2 className="section-title">{ah?.sectionSources ?? copy.mlGap.sectionSources ?? 'Источники'}</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {edition.sources.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-14 min-w-[120px] items-center justify-center rounded-[1.2rem] bg-white px-4 shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-[1.04]"
                    >
                      {s.logo ? (
                        <img
                          src={s.logo}
                          alt={s.platform}
                          className="max-h-7 max-w-[100px] object-contain"
                        />
                      ) : (
                        <span className="text-xs font-bold text-gray-700">
                          {s.platform} ↗
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>
    </>
  );
}

function RewindPage({
  edition,
  editionCount,
  onOpen,
}: {
  edition: EventEdition;
  editionCount: number;
  onOpen: (photos: string[], index: number) => void;
}) {
  const copy = useSiteCopy();
  const ar = copy.aiRewind;
  const seen = new Set<string>();
  const allSpeakers = [
    ...(edition.speakers ?? []),
    ...(edition.additionalSpeakers ?? []),
  ].filter(sp => {
    const key = sp.name.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return (
    <>
      <section className="section-shell pt-4">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14">
            <img
              src="/events/rewind-2023/hero-bg.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              style={{ filter: 'blur(3px)', transform: 'scale(1.06)' }}
            />

            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 10% 60%,
                    rgba(180,20,80,0.55), transparent 55%),
                  radial-gradient(circle at 90% 20%,
                    rgba(123,45,201,0.45), transparent 55%),
                  linear-gradient(135deg,
                    rgba(10,10,30,0.85), rgba(26,0,32,0.80))
                `,
              }}
            />

            <div className="relative z-10">
              <p className="w-fit rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/80">
                {ar.badge}
              </p>
              <h1 className="display-title mt-5">AI Rewind</h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-text-secondary">
                {ar.subtitle}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <div className="rounded-[1.4rem] bg-white/8 px-6 py-4">
                  <p className="font-mono text-3xl font-bold text-white">{edition.participantCount}+</p>
                  <p className="mt-2 text-xs text-white/50">{ar.statAttendees}</p>
                </div>
                <div className="rounded-[1.4rem] bg-white/8 px-6 py-4">
                  <p className="font-mono text-3xl font-bold text-white">{allSpeakers.length}</p>
                  <p className="mt-2 text-xs text-white/50">{ar.statSpeakers}</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="section-shell">
        <SectionReveal>
          <article className="card-surface mt-6 rounded-[2rem] p-8">
            <p className="text-base leading-8 text-text-secondary">
              {ar.desc}
            </p>
          </article>
        </SectionReveal>

        <SectionReveal>
          <div className="overflow-hidden py-4 mt-2">
            <div className="flex gap-3 animate-marquee" style={{ animation: 'marquee 45s linear infinite', width: 'max-content' }}>
              {[...edition.photos, ...edition.photos].map((src, i) => (
                <div key={i} className="h-56 w-80 shrink-0 overflow-hidden rounded-[1.2rem]">
                  <img
                    src={src}
                    alt={`AI Rewind photo ${i + 1}`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mt-14">
            <h2 className="section-title">{ar.sectionSpeakers}</h2>
            <div className="mt-5">
              <SpeakersCarousel speakers={allSpeakers} />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mt-14">
            <h2 className="section-title">{ar.sectionPartners}</h2>
            <div className="mt-5 grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {edition.partners?.map((p, i) => {
                const cardClass = p.logo
                  ? "flex h-16 items-center justify-center rounded-[1.2rem] bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-[1.04] hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
                  : "flex h-16 items-center justify-center rounded-[1.2rem] bg-white px-4 py-3 shadow-[0_2px_16px_rgba(0,0,0,0.12)]";

                return (
                  <a
                    key={i}
                    href={p.url ?? '#'}
                    target="_blank"
                    rel="noreferrer"
                    className={cardClass}
                  >
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="max-h-9 w-full object-contain"
                      />
                    ) : (
                      <span className="text-center text-xs font-bold text-gray-700 leading-tight">
                        {p.name}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          {edition.sources && edition.sources.length > 0 && (
            <div className="mt-14">
              <h2 className="section-title">{ar.sectionSources ?? 'Источники'}</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {edition.sources.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 min-w-[120px] items-center justify-center rounded-[1.2rem] bg-white px-4 shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-[1.04]"
                  >
                    {s.logo ? (
                      <img
                        src={s.logo}
                        alt={s.platform}
                        className="max-h-7 max-w-[100px] object-contain"
                      />
                    ) : (
                      <span className="text-xs font-bold text-gray-700">
                        {s.platform} ↗
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </SectionReveal>
      </section>
    </>
  );
}

function Lightbox({ lightbox, setLightbox }: { lightbox: LightboxState; setLightbox: (state: LightboxState) => void }) {
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  function goToIndex(index: number) {
    if (!lightbox) {
      return;
    }
    setLightbox({ photos: lightbox.photos, index });
  }

  function goToPrevious() {
    if (!lightbox) {
      return;
    }
    setLightbox({
      photos: lightbox.photos,
      index: (lightbox.index - 1 + lightbox.photos.length) % lightbox.photos.length,
    });
  }

  function goToNext() {
    if (!lightbox) {
      return;
    }
    setLightbox({
      photos: lightbox.photos,
      index: (lightbox.index + 1) % lightbox.photos.length,
    });
  }

  useEffect(() => {
    if (!lightbox) {
      return undefined;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightbox(null);
      }
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
      if (event.key === "ArrowRight") {
        goToNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, setLightbox]);

  useEffect(() => {
    if (!lightbox || !thumbnailsRef.current) {
      return;
    }
    const activeThumb = thumbnailsRef.current.children[lightbox.index] as HTMLElement | undefined;
    activeThumb?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [lightbox?.index, lightbox?.photos.length]);

  if (!lightbox) {
    return null;
  }

  const canNavigate = lightbox.photos.length > 1;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90" onClick={() => setLightbox(null)}>
      <button
        type="button"
        className="absolute right-5 top-5 z-10 rounded-full bg-surface p-3 text-text"
        onClick={(event) => {
          event.stopPropagation();
          setLightbox(null);
        }}
        aria-label="Закрыть"
      >
        <X size={22} />
      </button>

      <div className="flex max-h-[95vh] max-w-[95vw] flex-col items-center px-4" onClick={(event) => event.stopPropagation()}>
        <div className="relative flex w-full items-center justify-center">
          {canNavigate ? (
            <button
              type="button"
              className="absolute left-0 z-10 -translate-x-full rounded-full bg-surface p-3 text-text sm:static sm:mr-4 sm:translate-x-0"
              onClick={goToPrevious}
              aria-label="Предыдущее фото"
            >
              <ChevronLeft size={28} />
            </button>
          ) : null}

          <img
            src={lightbox.photos[lightbox.index]}
            alt=""
            className="max-h-[70vh] max-w-[min(90vw,72rem)] object-contain"
          />

          {canNavigate ? (
            <button
              type="button"
              className="absolute right-0 z-10 translate-x-full rounded-full bg-surface p-3 text-text sm:static sm:ml-4 sm:translate-x-0"
              onClick={goToNext}
              aria-label="Следующее фото"
            >
              <ChevronRight size={28} />
            </button>
          ) : null}
        </div>

        {canNavigate ? (
          <div
            ref={thumbnailsRef}
            className="scrollbar-none flex w-full max-w-[min(90vw,72rem)] justify-center gap-2 overflow-x-auto py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {lightbox.photos.map((photo, index) => (
              <button
                key={`${photo}-${index}`}
                type="button"
                onClick={() => goToIndex(index)}
                aria-label={`Фото ${index + 1}`}
                aria-current={index === lightbox.index}
                className={[
                  "h-16 w-16 shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 md:h-20 md:w-20",
                  index === lightbox.index
                    ? "scale-105 border-2 border-accent opacity-100"
                    : "border-2 border-transparent opacity-40 hover:opacity-80",
                ].join(" ")}
              >
                <img src={photo} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function EventCategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const copy = useSiteCopy();
  const category = getCategoryById(categoryId ?? "");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  if (!category) {
    return (
      <section className="section-shell pt-6 pb-4">
        <button type="button" className="button-ghost" onClick={() => navigate("/community")}>
          <ArrowLeft size={18} aria-hidden="true" />
          {copy.nav.community}
        </button>
        <h1 className="display-title mt-3">Мероприятие не найдено</h1>
      </section>
    );
  }

  const sortedEditions = [...category.editions].sort((first, second) => second.year - first.year);
  const editionsByYear = groupEditionsByYear(sortedEditions);
  const years = Object.keys(editionsByYear)
    .map(Number)
    .sort((first, second) => second - first);
  const totalEditions = sortedEditions.length;
  const catKey = category.id.replace(/-/g, "_");
  const eventCategoriesCopy = copy.eventCategories as Record<string, string> | undefined;
  const catSubtitle = eventCategoriesCopy?.[`${catKey}_subtitle`] ?? category.subtitle;
  const catDesc = eventCategoriesCopy?.[`${catKey}_desc`] ?? category.description;
  const catCopy = category.id === 'office-visits' ? copy.partnerMeetups
    : category.id === 'ml-party' ? copy.mlParty
    : category.id === 'ml-contest' ? copy.mlContest
    : copy.mlGap;

  function openLightbox(photos: string[], index: number) {
    if (photos.length > 0) {
      setLightbox({ photos, index });
    }
  }

  return (
    <>
      <section className="section-shell pt-6 pb-4">
        <SectionReveal>
          <button type="button" className="button-ghost" onClick={() => navigate("/community")}>
            <ArrowLeft size={18} aria-hidden="true" />
            {copy.nav.community}
          </button>
        </SectionReveal>
      </section>

      {category.id === "ai-hackathon" ? (
        <HackathonPage edition={sortedEditions[0]} onOpen={openLightbox} />
      ) : category.id === "ai-rewind" ? (
        <RewindPage edition={sortedEditions[0]} editionCount={category.editions.length} onOpen={openLightbox} />
      ) : (
        <>
          <section className="section-shell">
            <SectionReveal>
              <div className="card-surface mb-8 rounded-[2rem] p-7">
              <p className="eyebrow">{category.meta}</p>
              <h1 className="display-title">{category.title}</h1>
              {catSubtitle ? (
                <p className="mt-2 text-base font-semibold text-accent">
                  {catSubtitle}
                </p>
              ) : null}
              {catDesc ? (
                <p className="mt-3 max-w-3xl text-base leading-7 text-text-secondary">
                  {catDesc}
                </p>
              ) : null}
              <p className="mt-4 text-sm text-text-muted">
                {totalEditions} {catCopy.editions ?? 'выпусков'} · {yearRange(sortedEditions)}
              </p>
              </div>
            </SectionReveal>
          </section>

          {years.map((year) => (
            <section key={year} className="section-divider">
              <div className="section-shell section-space">
                <SectionReveal>
                  <h2 className="section-title">{year}</h2>
                </SectionReveal>
                <div className="mt-8 grid gap-6">
                  {editionsByYear[year].map((edition) => (
                    <EditionCard
                      key={edition.id}
                      categoryColor={category.color}
                      edition={edition}
                      emoji={category.emoji}
                      onOpen={openLightbox}
                      categoryId={category.id}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
    </>
  );
}
