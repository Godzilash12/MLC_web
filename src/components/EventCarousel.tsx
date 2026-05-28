import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { EventItem } from "@/data/fallbackContent";

export function EventCarousel({ items }: { items: EventItem[] }) {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % items.length);
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, [items.length]);

  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-[28px] border border-border bg-primary p-3 shadow-soft">
        <div className="grid gap-6 rounded-[22px] bg-white p-4 lg:grid-cols-[1.2fr_0.8fr] lg:p-6">
          <img
            src={activeItem.image_url}
            alt={activeItem.title}
            data-section="events-carousel"
            className="aspect-[16/10] h-full w-full rounded-[20px] object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col justify-between rounded-[20px] bg-surface p-6">
            <div>
              <p className="eyebrow">События</p>
              <h3 className="text-3xl font-bold tracking-[-0.03em] text-text">{activeItem.title}</h3>
              <p className="mt-4 text-base leading-8 text-text-secondary">{activeItem.description}</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary">
                <CalendarDays size={16} />
                {new Date(activeItem.event_date).toLocaleDateString(i18n.language === "uz" ? "uz-UZ" : i18n.language === "en" ? "en-US" : "ru-RU")}
              </div>
              {activeItem.tg_post_url ? (
                <a href={activeItem.tg_post_url} target="_blank" rel="noreferrer" className="button-primary">
                  {t("home.events.details")}
                  <ExternalLink size={16} />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-7 flex gap-2">
          <button
            type="button"
            className="rounded-full bg-white/90 p-3 text-primary shadow-card"
            onClick={() => setActiveIndex((value) => (value - 1 + items.length) % items.length)}
            aria-label="Previous event"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            className="rounded-full bg-white/90 p-3 text-primary shadow-card"
            onClick={() => setActiveIndex((value) => (value + 1) % items.length)}
            aria-label="Next event"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeIndex === index ? "bg-primary text-white" : "bg-surface text-text-secondary hover:bg-surface-2"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
