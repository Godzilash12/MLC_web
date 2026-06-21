import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { TIMELINE_EVENTS, TIMELINE_YEARS } from "@/data/timelineData";
import { useSiteCopy } from "@/lib/siteCopy";

function MilestonePopup({
  title,
  desc,
  photos,
  sourceLabel,
  sourceUrl,
}: {
  title: string;
  desc: string;
  photos: string[];
  sourceLabel: string;
  sourceUrl?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % photos.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute left-0 top-full z-50 mt-3 w-80 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#1a1030] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      style={{ maxWidth: "min(320px, calc(100vw - 2rem))" }}
    >
      <div className="relative h-40 overflow-hidden bg-white/5">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={photos[currentIndex]}
            alt={title}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        {photos.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {photos.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm font-semibold leading-5 text-white">{title}</p>
        <p className="mt-2 text-xs leading-5 text-white/60">{desc}</p>
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-1 text-xs text-white/50 transition-colors hover:text-white"
          >
            <ExternalLink size={11} />
            {sourceLabel}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function MlcTimeline() {
  const copy = useSiteCopy().timeline;
  const [activeYear, setActiveYear] = useState<number>(
    TIMELINE_YEARS[TIMELINE_YEARS.length - 1]
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const events = useMemo(
    () => TIMELINE_EVENTS.filter((event) => event.year === activeYear),
    [activeYear]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {TIMELINE_YEARS.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={[
              "rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200",
              activeYear === year
                ? "bg-white text-[#0f0e1a]"
                : "border border-white/15 text-text-secondary hover:border-white/30 hover:text-white",
            ].join(" ")}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-[7.5rem] top-0 h-full w-px bg-white/10 max-sm:left-16" />

        <AnimatePresence mode="sync">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={[
                "relative mb-4 flex items-start gap-6 max-sm:gap-3",
                hoveredId === event.id ? "z-[100]" : "z-0",
              ].join(" ")}
              onMouseEnter={() => {
                if (event.isMilestone) setHoveredId(event.id);
              }}
              onMouseLeave={() => setHoveredId(null)}
              style={{ position: "relative" }}
            >
              <div className="w-28 shrink-0 pt-1 text-right max-sm:w-14">
                <span className="text-xs font-semibold text-text-muted">{event.dateLabel}</span>
              </div>

              <div
                className={[
                  "relative z-10 mt-2 h-3 w-3 shrink-0 rounded-full border-2",
                  event.isMilestone
                    ? "border-[#ff7ad9] bg-[#ff7ad9] shadow-[0_0_10px_rgba(255,122,217,0.5)]"
                    : "border-white/30 bg-[#0f0e1a]",
                ].join(" ")}
              />

              <div
                className={[
                  "flex-1 rounded-[1.4rem] px-5 py-4 transition-all duration-200",
                  event.isMilestone ? "glass-panel border border-[#ff7ad9]/20" : "glass-panel",
                  event.isMilestone ? "overflow-visible" : "",
                ].join(" ")}
              >
                {event.isMilestone && (
                  <span className="mb-2 inline-block rounded-full bg-[#ff7ad9]/15 px-2.5 py-0.5 text-xs font-semibold text-[#ff7ad9]">
                    {copy.milestoneLabel}
                  </span>
                )}
                <h3 className="text-base font-semibold tracking-[-0.02em] text-white">
                  {copy[event.titleKey as keyof typeof copy] as string}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-text-secondary">
                  {copy[event.descKey as keyof typeof copy] as string}
                </p>
                <AnimatePresence>
                  {hoveredId === event.id && event.photos && event.photos.length > 0 && (
                    <MilestonePopup
                      title={copy[event.titleKey as keyof typeof copy] as string}
                      desc={copy[event.descKey as keyof typeof copy] as string}
                      photos={event.photos}
                      sourceLabel={copy.sourceLabel}
                      sourceUrl={event.sourceUrl}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
