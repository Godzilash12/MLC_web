import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, ChevronRight, MapPin, Users } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { getCategoryById, type EventEdition } from "@/data/eventsData";

export function EventCategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId ?? "");
  const sorted: EventEdition[] = category
    ? [...category.editions].sort((a, b) => b.year - a.year)
    : [];
  const [activeYear, setActiveYear] = useState(sorted[0]?.year ?? 0);
  const [direction, setDirection] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!category) {
    return (
      <div className="section-shell section-space text-center">
        <p className="text-text-secondary">Мероприятие не найдено</p>
        <Link to="/community" className="mt-4 inline-block text-white underline">
          ← Назад
        </Link>
      </div>
    );
  }

  const edition = sorted.find((e) => e.year === activeYear) ?? sorted[0];

  function handleYearChange(year: number) {
    setDirection(year < activeYear ? 1 : -1);
    setActiveYear(year);
  }

  return (
    <>
      <section className="section-shell section-space">
        <SectionReveal>
          <Link
            to="/community"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Сообщество
          </Link>

          <h1 className="display-title">{category.title}</h1>
          <p className="mt-3 text-base text-text-secondary">{category.meta}</p>
          <p className="mt-2 text-sm text-text-muted">
            {sorted.length} {sorted.length === 1 ? "выпуск" : "выпуска"} · с {sorted[sorted.length - 1]?.year} года
          </p>
        </SectionReveal>

        {sorted.length > 1 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {sorted.map((e) => (
              <button
                key={e.year}
                onClick={() => handleYearChange(e.year)}
                className={[
                  "relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                  activeYear === e.year
                    ? "bg-white text-[#0f0e1a] shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    : "border border-white/15 text-text-secondary hover:border-white/30 hover:text-white",
                ].join(" ")}
              >
                {e.year}
              </button>
            ))}
          </div>
        )}
      </section>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <section className="section-divider">
              <div className="section-shell section-space">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                  <div className="overflow-hidden rounded-[2rem]">
                    <img
                      src={edition.coverImage}
                      alt={`${category.title} ${edition.year}`}
                      className="h-72 w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="glass-panel rounded-[2rem] p-6">
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                      {category.title} {edition.year}
                    </h2>
                    <div className="mt-4 flex flex-col gap-2">
                      <span className="flex items-center gap-2 text-sm text-text-secondary">
                        <Calendar size={15} className="text-[#43d8ff]" />
                        {edition.dateLabel}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-text-secondary">
                        <MapPin size={15} className="text-[#43d8ff]" />
                        {edition.location}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-text-secondary">
                        <Users size={15} className="text-[#43d8ff]" />
                        {edition.participantCount}+ участников
                      </span>
                    </div>
                    <p className="mt-5 text-base leading-7 text-text-secondary">{edition.description}</p>
                    {edition.highlights.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {edition.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {edition.speakers.length > 0 && (
              <section className="section-divider">
                <div className="section-shell section-space">
                  <h2 className="section-title">Спикеры</h2>
                  <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
                    {edition.speakers.map((speaker) => (
                      <div
                        key={speaker.id}
                        className="glass-panel flex min-w-[140px] flex-col items-center rounded-[1.5rem] p-4 text-center"
                      >
                        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-white/10">
                          <img
                            src={speaker.photo}
                            alt={speaker.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              const next = e.currentTarget.nextElementSibling as HTMLElement;
                              if (next) next.style.display = "flex";
                            }}
                          />
                          <div
                            className="absolute inset-0 hidden items-center justify-center text-lg font-bold text-white"
                            aria-hidden="true"
                          >
                            {speaker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                        </div>
                        <p className="mt-3 text-sm font-semibold text-white">{speaker.name}</p>
                        <p className="mt-1 text-xs text-text-muted">{speaker.title}</p>
                        <p className="mt-0.5 text-xs font-semibold" style={{ color: category.color }}>
                          {speaker.company}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {edition.photos.length > 0 && (
              <section className="section-divider">
                <div className="section-shell section-space">
                  <h2 className="section-title">Фотографии</h2>
                  <div className="mt-8" style={{ columns: "3 280px", gap: "12px" }}>
                    {edition.photos.map((src, i) => (
                      <button
                        key={src}
                        onClick={() => setLightboxIndex(i)}
                        className="mb-3 block w-full overflow-hidden rounded-[1.2rem] transition duration-300 hover:opacity-90 hover:scale-[1.01]"
                        style={{ breakInside: "avoid" }}
                      >
                        <img
                          src={src}
                          alt={`${category.title} ${edition.year} — фото ${i + 1}`}
                          className="w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : 0));
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <img
            src={edition.photos[lightboxIndex]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-[1.2rem] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i !== null ? Math.min(edition.photos.length - 1, i + 1) : 0));
            }}
          >
            <ChevronRight size={20} />
          </button>
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
            onClick={() => setLightboxIndex(null)}
          >
            ✕ закрыть
          </button>
        </div>
      )}
    </>
  );
}
