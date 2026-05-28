import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionReveal } from "@/components/SectionReveal";
import type { DetailPageContent } from "@/data/mlcContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export function MlcDetailPage({
  content,
  hideActions = false
}: {
  content: DetailPageContent;
  hideActions?: boolean;
}) {
  usePageMeta(content.metaTitle, content.metaDescription);

  return (
    <>
      <section className="section-shell section-space grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <SectionReveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="display-title max-w-5xl">{content.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-secondary">{content.description}</p>

          {!hideActions ? (
            <div className="mt-10 flex flex-wrap gap-4">
              {content.ctaExternal ? (
                <a href={content.ctaHref} target="_blank" rel="noreferrer" className="button-primary">
                  {content.ctaLabel}
                  <ArrowUpRight size={18} />
                </a>
              ) : (
                <a href={content.ctaHref} className="button-primary">
                  {content.ctaLabel}
                  <ArrowUpRight size={18} />
                </a>
              )}

              <Link to="/" className="button-secondary">
                На главную
              </Link>
            </div>
          ) : null}
        </SectionReveal>

        <SectionReveal>
          <div className="mesh-card h-full rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {content.stats.map((item) => (
                <div key={item.label} className="glass-panel rounded-[1.6rem] px-5 py-6">
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{item.value}</div>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-text-secondary">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">Ключевые акценты</p>
            <h2 className="section-title">Что даёт это направление</h2>
          </SectionReveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.highlights.map((item) => (
              <SectionReveal key={item.title}>
                <article className="glass-panel h-full rounded-[2rem] p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-text-secondary">{item.text}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionReveal>
            <p className="eyebrow">Что внутри</p>
            <h2 className="section-title">Как это выглядит в работе</h2>
          </SectionReveal>

          <div className="grid gap-4">
            {content.capabilities.map((item) => (
              <SectionReveal key={item}>
                <div className="glass-panel flex items-start gap-4 rounded-[1.7rem] px-5 py-5">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#ff7ad9]" size={20} />
                  <p className="text-base leading-8 text-text-secondary">{item}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
