import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SectionReveal } from "@/components/SectionReveal";
import { getGraduateStoriesLocalized, getGraduateStoryByIdLocalized } from "@/data/graduateContent";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getSiteLanguage, useSiteCopy } from "@/lib/siteCopy";

export function GraduatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = getSiteLanguage(i18n.language);
  const graduate = id ? getGraduateStoryByIdLocalized(id, lang) : undefined;
  const copy = useSiteCopy().detail;

  usePageMeta(
    graduate ? `${graduate.name} | ML Community Uzbekistan` : copy.studentFallbackTitle,
    graduate?.teaser ?? copy.studentFallbackDescription
  );

  if (!graduate) {
    return (
      <section className="section-divider">
        <div className="section-shell py-20 sm:py-24">
          <SectionReveal>
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
              <h1 className="section-title">{copy.graduateNotFound}</h1>
              <p className="section-copy mx-auto mt-6 max-w-2xl">
                {copy.graduateNotFoundText}
              </p>
              <button type="button" onClick={() => navigate(-1)} className="button-secondary mt-8 inline-flex">
                {copy.backToEducation} <ArrowUpRight size={18} />
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>
    );
  }

  const orderedBlocks = [...graduate.blocks].sort((left, right) => left.order - right.order);
  const textBlocks = orderedBlocks.filter((block) => block.type === "text");
  const imageGroups = orderedBlocks.filter((block) => block.type === "image_group");
  const leadText = textBlocks[0];
  const trailingTexts = textBlocks.slice(1);
  const otherStories = getGraduateStoriesLocalized(lang).filter((item) => item.id !== graduate.id).slice(0, 4);

  return (
    <div className="section-divider">
      <section className="section-shell py-16 sm:py-20">
        <SectionReveal>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.62fr] lg:items-stretch">
            <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition hover:text-white"
              >
                <ArrowLeft size={16} /> {copy.back}
              </button>

              <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,5vw,4.6rem)] font-bold tracking-[-0.055em] leading-[0.95] text-white">
                {graduate.title}
              </h1>

              {graduate.subtitle ? <p className="mt-8 text-lg leading-8 text-white/72">{graduate.subtitle}</p> : null}

              <p className="mt-4 text-lg font-medium text-[#bba7ff]">
                {graduate.name} — {graduate.position}, {graduate.company}
              </p>
            </div>

            <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <img
                src={graduate.photo}
                alt={graduate.name}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </SectionReveal>
      </section>

      {leadText && leadText.type === "text" ? (
        <section className="section-shell pb-8">
          <SectionReveal>
            <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur-xl">
              <div className="graduate-richtext" dangerouslySetInnerHTML={{ __html: leadText.value }} />
            </div>
          </SectionReveal>
        </section>
      ) : null}

      {imageGroups.map((block) =>
        block.type === "image_group" ? (
          <section key={`gallery-${block.order}`} className="section-shell py-6 sm:py-8">
            <SectionReveal>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {block.images.map((image, index) => (
                  <div
                    key={`${block.order}-${index}`}
                    className={`overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] ${
                      block.images.length === 1 ? "sm:col-span-2 xl:col-span-4" : block.images.length === 2 ? "xl:col-span-2" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${graduate.name} ${index + 1}`}
                      className="aspect-video h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </SectionReveal>
          </section>
        ) : null
      )}

      {trailingTexts.length ? (
        <section className="section-shell py-8">
          <div className="grid gap-6">
            {trailingTexts.map((block) =>
              block.type === "text" ? (
                <SectionReveal key={`text-${block.order}`}>
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-8">
                    <div className="graduate-richtext" dangerouslySetInnerHTML={{ __html: block.value }} />
                  </div>
                </SectionReveal>
              ) : null
            )}
          </div>
        </section>
      ) : null}

      {otherStories.length ? (
        <section className="section-shell py-8 pb-16 sm:pb-20">
          <SectionReveal>
            <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-bold tracking-[-0.05em] text-white">{copy.otherStories}</h2>
          </SectionReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {otherStories.map((story) => (
              <SectionReveal key={story.id}>
                <Link
                  to={`/graduates/${story.id}`}
                  className="group relative flex min-h-[23rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#15101f] transition duration-300 hover:-translate-y-1"
                >
                  <img
                    src={story.photo}
                    alt={story.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,15,0.04),rgba(9,6,15,0.14)_40%,rgba(9,6,15,0.92)_100%)]" />
                  <div className="relative z-10 mt-auto flex min-h-[9.5rem] w-full items-end justify-between gap-4 p-5">
                    <div>
                      <h3 className="max-w-[11.5rem] text-[1.7rem] font-semibold tracking-[-0.04em] leading-[0.96] text-white">{story.name}</h3>
                      <p className="mt-3 text-base font-medium text-white/85">{story.company}</p>
                    </div>
                    <span className="mb-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/6 text-white backdrop-blur-md">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
