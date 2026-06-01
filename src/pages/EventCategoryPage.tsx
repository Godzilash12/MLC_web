import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
    <span className="font-mono text-4xl font-bold text-text">
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

function SourceButton({ sourceUrl }: { sourceUrl?: string }) {
  if (!sourceUrl) {
    return null;
  }

  return (
    <a href={sourceUrl} target="_blank" rel="noreferrer" className="button-ghost mt-6">
      Источник
      <ExternalLink size={16} aria-hidden="true" />
    </a>
  );
}

function SpeakersList({ speakers }: { speakers: EventEdition["speakers"] }) {
  if (speakers.length === 0) {
    return null;
  }

  return (
    <div className="border-t pt-6">
      <h3 className="text-xl font-bold text-text">Спикеры</h3>
      <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
        {speakers.map((speaker) => {
          return (
            <article key={speaker.id} className="min-w-[180px]">
              <div className="flex items-center gap-3">
                <SpeakerAvatar name={speaker.name} photo={speaker.photo} />
                <div>
                  <p className="text-sm font-bold text-text">{speaker.name}</p>
                  <p className="mt-1 text-xs text-text-muted">{speaker.title}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
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

function EditionInfo({ categoryColor, edition }: { categoryColor: string; edition: EventEdition }) {
  const copy = useSiteCopy();
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
        {edition.participantCount}+ участников
      </p>
      <p className="mt-5 text-base leading-8 text-text-secondary">{desc}</p>
      <SourceButton sourceUrl={edition.sourceUrl} />
    </div>
  );
}

function EditionCard({
  categoryColor,
  edition,
  emoji,
  onOpen,
}: {
  categoryColor: string;
  edition: EventEdition;
  emoji: string;
  onOpen: (photos: string[], index: number) => void;
}) {
  const hasPhotos = edition.photos.length > 0 || Boolean(edition.coverImage);
  const hasSpeakers = edition.speakers.length > 0;
  const infoOnly = !hasPhotos && !hasSpeakers;

  return (
    <SectionReveal>
      <article className="card-surface overflow-hidden rounded-[2rem]">
        {infoOnly ? (
          <EditionInfo categoryColor={categoryColor} edition={edition} />
        ) : (
          <>
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <PhotoPreview edition={edition} emoji={emoji} onOpen={onOpen} />
              <EditionInfo categoryColor={categoryColor} edition={edition} />
            </div>
            <div className="px-6 pb-6 lg:px-8 lg:pb-8">
              <SpeakersList speakers={edition.speakers} />
            </div>
          </>
        )}
      </article>
    </SectionReveal>
  );
}

function HackathonPage({
  edition,
  onOpen,
}: {
  edition: EventEdition;
  onOpen: (photos: string[], index: number) => void;
}) {
  const copy = useSiteCopy();
  const eventsCopy = copy.events as Record<string, string> | undefined;
  const desc = edition.descriptionKey
    ? (eventsCopy?.[edition.descriptionKey] ?? edition.description)
    : edition.description;

  return (
    <>
      <section className="section-shell section-space">
        <SectionReveal>
          <div
            className="overflow-hidden rounded-[2rem] p-8 lg:p-12"
            style={{
              background:
                "radial-gradient(circle at 72% 18%, rgba(167,139,250,0.44), transparent 32%), linear-gradient(135deg, #0A0A1E, #1A0A3E)",
            }}
          >
            <p className="eyebrow">⚡ Наш главный ивент</p>
            <h1 className="display-title mt-5">AI Hackathon</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-text-secondary">
              Три дня. Команды. Реальные AI-продукты.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="card-surface p-6">
                <AnimatedCounter value={400} suffix="+" />
                <p className="mt-2 text-sm text-text-secondary">участников</p>
              </div>
              <div className="card-surface p-6">
                <AnimatedCounter value={100} suffix="M" />
                <p className="mt-2 text-sm text-text-secondary">сум призовой фонд</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <article
              className="card-surface overflow-hidden rounded-[2rem]"
              style={{ borderColor: "#a78bfa", boxShadow: "0 0 52px rgba(167, 139, 250, 0.24)" }}
            >
              <div className="p-6 lg:p-8">
                <h2
                  className="text-4xl font-bold text-text lg:text-5xl"
                  style={{
                    background: "linear-gradient(90deg, #ffffff, #a78bfa, #43d8ff)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  AI Hackathon 2024
                </h2>
              </div>

              <button
                type="button"
                className="block w-full bg-surface"
                onClick={() => onOpen(edition.photos, 0)}
              >
                <img src={edition.coverImage} alt={edition.title} className="w-full object-cover" loading="lazy" />
              </button>
              <p className="px-6 pt-4 text-sm text-text-muted lg:px-8">Менторы и спикеры - информация на фото</p>

              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap gap-3">
                  {(edition.highlights ?? []).map((highlight) => (
                    <span key={highlight} className="rounded-full bg-surface px-4 py-2 text-sm font-bold text-text">
                      {highlight}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-base leading-8 text-text-secondary">{desc}</p>
                <SourceButton sourceUrl={edition.sourceUrl} />
              </div>
            </article>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

function Lightbox({ lightbox, setLightbox }: { lightbox: LightboxState; setLightbox: (state: LightboxState) => void }) {
  useEffect(() => {
    if (!lightbox) {
      return undefined;
    }
    const currentLightbox = lightbox;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightbox(null);
      }
      if (event.key === "ArrowLeft") {
        setLightbox({
          photos: currentLightbox.photos,
          index: (currentLightbox.index - 1 + currentLightbox.photos.length) % currentLightbox.photos.length,
        });
      }
      if (event.key === "ArrowRight") {
        setLightbox({
          photos: currentLightbox.photos,
          index: (currentLightbox.index + 1) % currentLightbox.photos.length,
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, setLightbox]);

  if (!lightbox) {
    return null;
  }

  const canNavigate = lightbox.photos.length > 1;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90" onClick={() => setLightbox(null)}>
      <button
        type="button"
        className="absolute right-5 top-5 rounded-full bg-surface p-3 text-text"
        onClick={(event) => {
          event.stopPropagation();
          setLightbox(null);
        }}
        aria-label="Закрыть"
      >
        <X size={22} />
      </button>

      {canNavigate ? (
        <button
          type="button"
          className="absolute left-5 top-1/2 rounded-full bg-surface p-3 text-text"
          onClick={(event) => {
            event.stopPropagation();
            setLightbox({
              photos: lightbox.photos,
              index: (lightbox.index - 1 + lightbox.photos.length) % lightbox.photos.length,
            });
          }}
          aria-label="Предыдущее фото"
        >
          <ChevronLeft size={28} />
        </button>
      ) : null}

      <img
        src={lightbox.photos[lightbox.index]}
        alt=""
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(event) => event.stopPropagation()}
      />

      {canNavigate ? (
        <button
          type="button"
          className="absolute right-5 top-1/2 rounded-full bg-surface p-3 text-text"
          onClick={(event) => {
            event.stopPropagation();
            setLightbox({ photos: lightbox.photos, index: (lightbox.index + 1) % lightbox.photos.length });
          }}
          aria-label="Следующее фото"
        >
          <ChevronRight size={28} />
        </button>
      ) : null}

      {canNavigate ? (
        <div className="absolute bottom-6 flex gap-2">
          {lightbox.photos.map((photo, index) => (
            <button
              key={photo}
              type="button"
              className={["h-2.5 w-2.5 rounded-full", index === lightbox.index ? "bg-surface" : "bg-surface/40"].join(" ")}
              onClick={(event) => {
                event.stopPropagation();
                setLightbox({ photos: lightbox.photos, index });
              }}
              aria-label={`Фото ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function EventCategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = getCategoryById(categoryId ?? "");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  if (!category) {
    return (
      <section className="section-shell section-space">
        <button type="button" className="button-ghost" onClick={() => navigate("/community")}>
          <ArrowLeft size={18} aria-hidden="true" />
          Сообщество
        </button>
        <h1 className="display-title mt-10">Мероприятие не найдено</h1>
      </section>
    );
  }

  const sortedEditions = [...category.editions].sort((first, second) => second.year - first.year);
  const editionsByYear = groupEditionsByYear(sortedEditions);
  const years = Object.keys(editionsByYear)
    .map(Number)
    .sort((first, second) => second - first);
  const totalEditions = sortedEditions.length;

  function openLightbox(photos: string[], index: number) {
    if (photos.length > 0) {
      setLightbox({ photos, index });
    }
  }

  return (
    <>
      <section className="section-shell section-space">
        <SectionReveal>
          <button type="button" className="button-ghost" onClick={() => navigate("/community")}>
            <ArrowLeft size={18} aria-hidden="true" />
            Сообщество
          </button>
        </SectionReveal>
      </section>

      {category.id === "ai-hackathon" ? (
        <HackathonPage edition={sortedEditions[0]} onOpen={openLightbox} />
      ) : (
        <>
          <section className="section-shell">
            <SectionReveal>
              <p className="eyebrow">{category.meta}</p>
              <h1 className="display-title mt-5">{category.title}</h1>
              <p className="mt-5 text-lg text-text-secondary">
                {totalEditions} выпусков · {yearRange(sortedEditions)}
              </p>
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
