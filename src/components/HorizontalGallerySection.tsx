import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionReveal } from "@/components/SectionReveal";
import type { GalleryItem, StatItem } from "@/data/mlcContent";
import { useCountUpWhenActive } from "@/hooks/useCountUpWhenActive";
import { useInViewOnce } from "@/hooks/useInViewOnce";

type HorizontalGallerySectionProps = {
  id: string;
  title: string;
  description?: string;
  items: GalleryItem[];
  stats: StatItem[];
  href: string;
};

function digitCount(value: string) {
  return (value.match(/\d/g) ?? []).length;
}

function numericPart(value: string) {
  return value.replace(/[^\d]/g, "");
}

function suffixPart(value: string) {
  return value.replace(/[\d]/g, "");
}

function DigitDrum({ value }: { value: number }) {
  const safe = Number.isFinite(value) ? Math.max(0, value) : 0;
  const display = String(safe);

  return (
    <>
      {display.split("").map((digit, index) => (
        <span key={`${index}-${digit}`} className="digit-drum" aria-hidden="true">
          <span className="digit-drum__track" style={{ transform: `translateY(-${Number(digit) * 10}%)` }}>
            {Array.from({ length: 10 }, (_, slot) => (
              <span key={slot} className="digit-drum__slot">
                {slot}
              </span>
            ))}
          </span>
        </span>
      ))}
    </>
  );
}

function AnimatedStatValue({ value, active }: { value: string; active: boolean }) {
  const digits = numericPart(value);
  const suffix = suffixPart(value);
  const target = Number(digits || "0");
  const current = useCountUpWhenActive(target, active, 2000);
  const padded = String(current).padStart(Math.max(digitCount(value), String(target).length), "0");

  return (
    <span className="stat-card__value" aria-label={value}>
      <DigitDrum value={Number(padded)} />
      {suffix ? <span className="stat-card__suffix">{suffix}</span> : null}
    </span>
  );
}

function RibbonCard({ item, priority = false }: { item: GalleryItem; priority?: boolean }) {
  return (
    <article className="collage-ribbon__card aspect-video">
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt=""
          className="collage-ribbon__image"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      ) : (
        <div className={`collage-ribbon__placeholder collage-ribbon__placeholder--${item.tone}`} />
      )}
    </article>
  );
}

function CollageRibbon({ items, id }: { items: GalleryItem[]; id: string }) {
  return (
    <div className="collage-ribbon">
      <div className="collage-ribbon__fade collage-ribbon__fade--left" />
      <div className="collage-ribbon__fade collage-ribbon__fade--right" />
      <div className="collage-ribbon__viewport" aria-label={`${id} photo collage`}>
        <div className={`collage-ribbon__track collage-ribbon__track--${id}`}>
          {[0, 1].map((loopIndex) => (
            <div
              key={`${id}-loop-${loopIndex}`}
              className="collage-ribbon__loop"
              aria-hidden={loopIndex === 1 ? "true" : undefined}
            >
              {items.map((item, index) => (
                <RibbonCard
                  key={`${loopIndex}-${item.imageUrl ?? item.title}-${index}`}
                  item={item}
                  priority={loopIndex === 0 && index < 6}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HorizontalGallerySection({
  id,
  title,
  items,
  stats,
  href
}: HorizontalGallerySectionProps) {
  const statsReveal = useInViewOnce<HTMLDivElement>({ threshold: 0.45 });

  return (
    <section id={id} className="section-divider">
      <div className="section-shell py-10 sm:py-14 lg:py-16">
        <SectionReveal>
          <div className="section-title-inline">
            <Link to={href} className="section-title-link section-title">
              {title}
              <span className="section-link-icon" aria-hidden="true">
                <ArrowUpRight size={42} strokeWidth={2.2} className="section-link-icon__svg" />
              </span>
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-8">
          <SectionReveal>
            <CollageRibbon items={items} id={id} />
          </SectionReveal>
        </div>

        <div ref={statsReveal.ref} className="mt-6 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <SectionReveal key={`${id}-${stat.label}`}>
              <article className="card-surface stat-card p-6">
                <AnimatedStatValue value={stat.value} active={statsReveal.inView} />
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.28em] text-text-secondary">{stat.label}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
