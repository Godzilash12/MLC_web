import { Suspense, lazy } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionReveal } from "@/components/SectionReveal";
import { partnerLogos } from "@/data/partnerContent";
import { communityGallery, educationGallery, serviceCards } from "@/data/mlcContent";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteCopy } from "@/lib/siteCopy";

const HorizontalGallerySection = lazy(() =>
  import("@/components/HorizontalGallerySection").then((module) => ({ default: module.HorizontalGallerySection }))
);
const PartnersMarquee = lazy(() =>
  import("@/components/PartnersMarquee").then((module) => ({ default: module.PartnersMarquee }))
);
const MlcLeadForm = lazy(() => import("@/components/MlcLeadForm").then((module) => ({ default: module.MlcLeadForm })));

function IntroBanner() {
  const copy = useSiteCopy().home;

  return (
    <section className="intro-banner home-screen">
      <div className="intro-banner__backdrop" />
      <div className="intro-banner__orb intro-banner__orb--one" />
      <div className="intro-banner__orb intro-banner__orb--two" />

      <div className="intro-globe-shell">
        <div className="intro-earth-wrap">
          <img
            src="/earth.avif"
            alt=""
            width="4094"
            height="1268"
            className="intro-earth-image"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="intro-banner__map intro-banner__map--enter">
        <img
          src="/uzbekistan-map.svg"
          alt=""
          width="1000"
          height="652"
          className="intro-banner__map-core"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="intro-banner__copy intro-banner__copy-enter">
        <div>
          <h1 className="intro-banner__title">{copy.heroTitle}</h1>
          <p className="intro-banner__subtitle">{copy.heroSubtitle}</p>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  const copy = useSiteCopy().home;

  return (
    <section className="section-divider">
      <div className="section-shell py-16 sm:py-20">
        <div className="space-y-14">
          <SectionReveal>
            <div className="president-message lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
              <div className="portrait-panel portrait-panel--president president-message__photo">
                <img
                  src="/president.avif"
                  alt="President of Uzbekistan"
                  width="1280"
                  height="853"
                  className="portrait-panel__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="president-message__copy mt-8 lg:mt-0">
                <article className="quote-card">
                  <h2 className="section-title story-title">
                    {copy.presidentQuote}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-text-secondary">
                    {copy.presidentSource}
                  </p>
                </article>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="president-message lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
              <div className="portrait-panel portrait-panel--founder president-message__photo">
                <img
                  src="/shakhriyor.avif"
                  alt="Shakhriyor Khudoyberdiyev"
                  width="1800"
                  height="2250"
                  className="portrait-panel__image portrait-panel__image--founder"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>

              <div className="president-message__copy mt-8 lg:mt-0">
                <article className="quote-card">
                  <h2 className="section-title story-title">
                    {copy.founderQuote}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-text-secondary">{copy.founderSource}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="https://www.linkedin.com/in/shakhrior-kh/" target="_blank" rel="noreferrer" className="button-secondary">
                      LinkedIn <ArrowUpRight size={20} />
                    </a>
                    <a href="tel:+998501006622" className="button-secondary">
                      {copy.call} <Phone size={20} />
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const copy = useSiteCopy().home;

  return (
    <section className="section-divider">
      <div className="section-shell py-14 sm:py-16">
        <SectionReveal>
          <h2 className="section-title max-w-5xl">{copy.partnersTitle}</h2>
        </SectionReveal>

        <div className="mt-8">
          <Suspense fallback={<div className="h-40 rounded-[2rem] border border-white/8 bg-white/5" />}>
            <PartnersMarquee items={partnerLogos} light />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function HelpSection() {
  const copy = useSiteCopy().home;

  return (
    <section className="section-divider">
      <div className="section-shell py-16 sm:py-20">
        <SectionReveal>
          <h2 className="help-section__title">{copy.helpTitle}</h2>
        </SectionReveal>

        <div className="mt-8 grid gap-5">
          {serviceCards.map((card, index) => {
            const translated = copy.services[index] ?? card;

            return (
            <SectionReveal key={card.number}>
              <article className="service-card service-card--compact lg:grid-cols-[7rem_minmax(0,1fr)_auto]">
                <div className="service-card__number">{card.number}</div>
                <div>
                  <h3 className="service-card__title">{translated.title}</h3>
                  <p className="service-card__text">{translated.description}</p>
                  <Link to={card.href} className="button-ghost mt-5">
                    {copy.more} <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div className="service-card__emoji" aria-hidden="true">
                  {card.emoji}
                </div>
              </article>
            </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const copy = useSiteCopy();

  return (
    <section className="section-divider">
      <div className="section-shell py-16 sm:py-20">
        <SectionReveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow">{copy.lead.eyebrow}</p>
            <h2 className="section-title">{copy.lead.title}</h2>
            <p className="section-copy mx-auto mt-6 max-w-4xl">
              {copy.lead.text}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10">
          <Suspense fallback={<div className="h-44 rounded-[2rem] border border-white/8 bg-white/5" />}>
            <MlcLeadForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const copy = useSiteCopy().home;
  usePageMeta(copy.metaTitle, copy.metaDescription);

  return (
    <div className="homepage-snap">
      <IntroBanner />
      <StorySection />

      <Suspense fallback={<div className="section-shell py-16" />}>
        <HorizontalGallerySection id="community" title={copy.gallery.community} items={communityGallery} stats={[...copy.gallery.communityStats]} href="/community" />
      </Suspense>

      <Suspense fallback={<div className="section-shell py-16" />}>
        <HorizontalGallerySection id="education" title={copy.gallery.education} items={educationGallery} stats={[...copy.gallery.educationStats]} href="/education" />
      </Suspense>

      <PartnersSection />
      <HelpSection />
      <ContactSection />
    </div>
  );
}
