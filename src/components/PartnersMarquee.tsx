import { Link } from "react-router-dom";
import type { Partner } from "@/data/fallbackContent";

export function PartnersMarquee({ items, light = false }: { items: Partner[]; light?: boolean }) {
  const duplicated = [...items, ...items];
  const wrapperClass =
    "partners-marquee overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 py-12 backdrop-blur-xl";
  const cardClass = light
    ? "partners-marquee__card flex h-36 min-w-[360px] items-center justify-center rounded-[1.95rem] border border-black/6 bg-white px-12 shadow-[0_18px_40px_rgba(19,15,31,0.08)] transition hover:-translate-y-1"
    : "partners-marquee__card glass-panel flex h-36 min-w-[360px] items-center justify-center rounded-[1.95rem] px-12 transition hover:-translate-y-1";

  return (
    <div className={wrapperClass}>
      <div className="partners-marquee__track flex w-max animate-marquee gap-6 px-6">
        {duplicated.map((partner, index) => {
          const content = partner.logo_url ? (
            <div className="flex items-center justify-center">
              <img
                src={partner.logo_url}
                alt={partner.name}
                width="220"
                height="80"
                className="max-h-20 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : (
            <div className="flex items-center gap-5 text-white/70">
              <span className="h-14 w-14 rounded-[1.5rem] border border-white/10 bg-white/5" />
              <span className="text-base font-semibold uppercase tracking-[0.28em]">Logo</span>
            </div>
          );

          return partner.internal_url ? (
            <Link key={`${partner.id}-${index}`} to={partner.internal_url} className={cardClass}>
              {content}
            </Link>
          ) : (
            <a
              key={`${partner.id}-${index}`}
              href={partner.website_url ?? "#"}
              target={partner.website_url ? "_blank" : undefined}
              rel={partner.website_url ? "noreferrer" : undefined}
              className={cardClass}
            >
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}
