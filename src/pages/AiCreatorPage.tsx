import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LeadForm } from "@/components/LeadForm";
import { SectionReveal } from "@/components/SectionReveal";
import { SolutionModal } from "@/components/SolutionModal";
import { TeamGrid } from "@/components/TeamGrid";
import { aiCreatorTeam, aiSolutionsFallback, type AiSolution } from "@/data/fallbackContent";
import { useAiSolutions } from "@/hooks/useCMS";
import { usePageMeta } from "@/hooks/usePageMeta";

export function AiCreatorPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";
  const page = t("aiCreator", { returnObjects: true }) as any;
  const { data: solutions } = useAiSolutions();
  const [selectedSolution, setSelectedSolution] = useState<AiSolution | null>(null);

  const solutionText: Record<
    string,
    { title: string; description: string; detail_text: string; features: string[]; price_from: string; duration: string }
  > | null =
    locale === "uz"
      ? {
          s1: { title: "LLM asosidagi chatbotlar", description: "Telegram, WhatsApp va web-botlar kompaniya konteksti va dialog analitikasi bilan.", detail_text: "Support, sales va ichki yordam uchun aqlli assistentlar yaratamiz.", features: ["Moslashtirilgan logika", "CRM va knowledge base integratsiyasi", "Rus, o'zbek va ingliz tillari", "Dialoglar bo'yicha hisobotlar"], price_from: "dan $900", duration: "3 haftadan" },
          s2: { title: "RAG tizimlar", description: "Hujjatlar va reglamentlar bo'yicha qidiruv sitatalar bilan.", detail_text: "Ichki hujjatlar va protseduralar uchun AI qidiruv tizimlari quramiz.", features: ["PDF, Notion, Drive ulash", "Manbalar bilan javoblar", "Role-based access", "Sifat baholash"], price_from: "dan $1 500", duration: "4 haftadan" },
          s3: { title: "Computer Vision", description: "OCR, object detection, quality control va video analytics.", detail_text: "Operatsiyalarni nazorat qilish va hujjatlarni tanish uchun CV yechimlar.", features: ["OCR", "Event detection", "Kamera integratsiyasi", "Monitoring panel"], price_from: "dan $2 500", duration: "5 haftadan" },
          s4: { title: "Analitika va forecasting", description: "Demand, churn, segmentatsiya va moliyaviy forecasting modellari.", detail_text: "Biznesga risk va growth nuqtalarini ko'rsatadigan modellarni quramiz.", features: ["Demand forecasting", "Scoring", "Dashboards", "ML monitoring"], price_from: "dan $1 800", duration: "4 haftadan" },
          s5: { title: "Process automation", description: "Jamoa ichidagi rutinalar uchun copilots va AI workflow'lar.", detail_text: "Arizalarni, kontentni va ichki operatsiyalarni LLM bilan avtomatlashtiramiz.", features: ["Manual audit", "CRM integratsiyasi", "Human-in-the-loop", "Bosqichma-bosqich analytics"], price_from: "dan $1 000", duration: "2 haftadan" },
          s6: { title: "Voice AI va ASR", description: "Speech recognition, voicebotlar va qo'ng'iroqlar analyticsi.", detail_text: "Call-center va service jamoalari uchun transcription, summary va QA quramiz.", features: ["ASR", "Call QA", "Summary", "O'zbek va rus tillari"], price_from: "dan $2 000", duration: "4 haftadan" }
        }
      : locale === "en"
        ? {
            s1: { title: "LLM-based chatbots", description: "Telegram, WhatsApp, and web bots with company context and dialogue analytics.", detail_text: "We build smart assistants for support, sales, and internal help.", features: ["Custom logic", "CRM and knowledge base integration", "Russian, Uzbek, and English", "Dialogue reports"], price_from: "from $900", duration: "from 3 weeks" },
            s2: { title: "RAG systems", description: "Search across documents and internal rules with citations.", detail_text: "We build internal AI search for documentation and procedures.", features: ["PDF, Notion, Drive connectors", "Answers with citations", "Role-based access", "Quality evaluation"], price_from: "from $1,500", duration: "from 4 weeks" },
            s3: { title: "Computer Vision", description: "OCR, object detection, quality control, and video analytics.", detail_text: "CV solutions for operations control and document recognition.", features: ["OCR", "Event detection", "Camera integrations", "Monitoring dashboards"], price_from: "from $2,500", duration: "from 5 weeks" },
            s4: { title: "Analytics and forecasting", description: "Models for demand, churn, segmentation, and financial planning.", detail_text: "We help businesses move from fragmented reporting to predictive models.", features: ["Demand forecasting", "Scoring", "Dashboards", "ML monitoring"], price_from: "from $1,800", duration: "from 4 weeks" },
            s5: { title: "Process automation", description: "Copilots and AI flows for routine team operations.", detail_text: "We automate requests, content generation, and internal operations with LLM workflows.", features: ["Manual process audit", "CRM integrations", "Human-in-the-loop", "Step analytics"], price_from: "from $1,000", duration: "from 2 weeks" },
            s6: { title: "Voice AI and ASR", description: "Speech recognition, voicebots, and call analytics.", detail_text: "We build solutions for call centers: transcription, summaries, and QA.", features: ["ASR", "Call QA", "Summaries", "Uzbek and Russian support"], price_from: "from $2,000", duration: "from 4 weeks" }
          }
        : null;

  const items = (solutions.length ? solutions : aiSolutionsFallback).map((solution) => ({
    ...solution,
    ...(solutionText?.[solution.id] ?? {})
  }));

  const localizedTeam =
    locale === "uz"
      ? aiCreatorTeam.map((member, index) => ({
          ...member,
          ...[
          { role_mlc: "NLP Engineer", role_external: "RAG, chatbotlar, evaluation" },
          { role_mlc: "CV Engineer", role_external: "Detection, OCR, analytics" },
          { role_mlc: "MLOps Lead", role_external: "Deployment, observability" }
        ][index]
        }))
      : locale === "en"
        ? aiCreatorTeam.map((member, index) => ({
            ...member,
            ...[
            { role_mlc: "NLP Engineer", role_external: "RAG, chatbots, evaluation" },
            { role_mlc: "CV Engineer", role_external: "Detection, OCR, analytics" },
            { role_mlc: "MLOps Lead", role_external: "Deployment, observability" }
          ][index]
          }))
        : aiCreatorTeam;

  usePageMeta(page.metaTitle, page.metaDescription);

  return (
    <>
      <section className="section-shell grid gap-12 py-16 lg:grid-cols-[1fr_0.92fr] lg:py-20">
        <SectionReveal>
          <p className="eyebrow">{page.hero.eyebrow}</p>
          <h1 className="display-title">{page.hero.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">{page.hero.text}</p>
          <a href="#ai-form" className="button-primary mt-10 inline-flex">
            {page.hero.button}
            <ArrowRight size={18} />
          </a>
        </SectionReveal>
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface p-5 shadow-soft">
            <div className="absolute inset-0 dot-pattern opacity-60" />
            <img src="https://placehold.co/1000x850/F6F3FE/2D1B69?text=AI+Creator" alt="AI Creator showcase" className="relative aspect-[5/4] w-full rounded-[26px] object-cover" />
          </div>
        </SectionReveal>
      </section>

      <section className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.solutions.eyebrow}</p>
            <h2 className="section-title">{page.solutions.title}</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {items.map((solution) => (
              <SectionReveal key={solution.id}>
                <button type="button" onClick={() => setSelectedSolution(solution)} className="card-surface h-full w-full p-6 text-left">
                  <div className="text-4xl">{solution.icon}</div>
                  <h3 className="mt-5 text-2xl font-semibold text-text">{solution.title}</h3>
                  <p className="mt-4 text-base leading-8 text-text-secondary">{solution.description}</p>
                  <span className="button-ghost mt-6">
                    {t("solutionModal.details")}
                    <ArrowRight size={16} />
                  </span>
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <p className="eyebrow">{page.team.eyebrow}</p>
            <h2 className="section-title">{page.team.title}</h2>
          </SectionReveal>
          <div className="mt-12">
            <TeamGrid members={localizedTeam} dataSection="ai-creator-team" />
          </div>
        </div>
      </section>

      <section id="ai-form" className="section-divider">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">{page.form.eyebrow}</p>
              <h2 className="section-title">{page.form.title}</h2>
              <p className="mt-5 text-lg leading-8 text-text-secondary">{page.form.text}</p>
            </div>
          </SectionReveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <LeadForm leadType="ai_creator" sourcePage="/ai-creator" showMessage />
          </div>
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="rounded-[32px] border border-border bg-white p-8 shadow-soft lg:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="eyebrow">{page.why.eyebrow}</p>
                  <h2 className="section-title">{page.why.title}</h2>
                </div>
                <div className="rounded-2xl bg-primary px-6 py-5 text-white">
                  <div className="flex items-center gap-3 text-lg font-semibold">
                    <Sparkles size={20} />
                    {page.why.badge}
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {selectedSolution ? <SolutionModal solution={selectedSolution} onClose={() => setSelectedSolution(null)} /> : null}
    </>
  );
}
