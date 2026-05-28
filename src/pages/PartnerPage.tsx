import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SectionReveal } from "@/components/SectionReveal";
import { getPartnerStoryByIdLocalized } from "@/data/partnerContent";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getSiteLanguage, useSiteCopy } from "@/lib/siteCopy";

export function PartnerPage() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = getSiteLanguage(i18n.language);
  const partner = id ? getPartnerStoryByIdLocalized(id, lang) : undefined;
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const copy = useSiteCopy().detail;

  useEffect(() => {
    if (!activeImage) return undefined;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeImage]);

  usePageMeta(
    partner ? `${partner.name} | ML Community Uzbekistan` : `${copy.partner} | ML Community Uzbekistan`,
    partner?.description ?? copy.partner
  );

  if (!partner) {
    return (
      <section className="section-divider">
        <div className="section-shell py-20 sm:py-24">
          <SectionReveal>
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
              <p className="eyebrow">{copy.partner}</p>
              <h1 className="section-title mt-4">{copy.partnerNotFound}</h1>
              <p className="section-copy mx-auto mt-6 max-w-2xl">
                {copy.partnerNotFoundText}
              </p>
              <Link to="/" className="button-secondary mt-8 inline-flex">
                {copy.home} <ArrowUpRight size={18} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    );
  }

  const orderedBlocks = [...partner.blocks].sort((left, right) => left.order - right.order);
  const mainTextBlock = orderedBlocks.find((block) => block.type === "text");
  const galleryBlocks = orderedBlocks.filter((block) => block.type === "image_group");

  return (
    <div className="section-divider">
      <section className="section-shell py-16 sm:py-20">
        <SectionReveal>
          <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:p-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition hover:text-white">
              <ArrowLeft size={16} /> {copy.back}
            </Link>

            <h1 className="section-title mt-6 max-w-5xl">{partner.name}</h1>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="flex flex-col items-center gap-5">
                <div className="w-full overflow-hidden rounded-[1.8rem] border border-black/6 bg-white shadow-[0_18px_40px_rgba(19,15,31,0.08)]">
                  <div className="flex min-h-[220px] items-center justify-center p-8">
                    <img
                      src={partner.logo_url}
                      alt={partner.name}
                      className="max-h-[120px] w-full object-contain"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>

                {partner.website_url ? (
                  <a href={partner.website_url} target="_blank" rel="noreferrer" className="button-primary">
                    {copy.partnerSite} <ArrowUpRight size={18} />
                  </a>
                ) : null}
              </div>

              <div className="max-w-3xl text-lg leading-8 text-text-secondary">
                <p>{mainTextBlock?.type === "text" ? mainTextBlock.value : partner.description}</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {galleryBlocks.map((block) =>
        block.type === "image_group" ? (
          <section key={`gallery-${block.order}`} className="section-shell py-6 sm:py-8">
            <SectionReveal>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {block.images.map((image, index) => (
                  <button
                    key={`${block.order}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={`group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] text-left transition hover:-translate-y-1 ${
                      block.images.length === 1 ? "sm:col-span-2 xl:col-span-4" : block.images.length === 2 ? "xl:col-span-2" : ""
                    }`}
                    aria-label={`${copy.openPhoto} ${index + 1} ${copy.partner} ${partner.name}`}
                  >
                    <img
                      src={image}
                      alt={`${partner.name} ${index + 1}`}
                      className="aspect-video h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </SectionReveal>
          </section>
        ) : null
      )}

      {activeImage ? (
        <div
          className="fixed inset-0 z-[220] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${copy.openPhoto} ${copy.partner} ${partner.name}`}
        >
          <button
            type="button"
            className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setActiveImage(null)}
            aria-label={copy.close}
          >
            <X size={22} />
          </button>

          <div className="max-h-[92vh] max-w-[92vw] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0f0a19] shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <img
              src={activeImage}
              alt={partner.name}
              className="max-h-[92vh] max-w-[92vw] object-contain"
              loading="eager"
              decoding="async"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
