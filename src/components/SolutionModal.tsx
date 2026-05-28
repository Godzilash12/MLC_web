import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, X } from "lucide-react";
import { type FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { contactLinks, type AiSolution } from "@/data/fallbackContent";
import { useLeadForm } from "@/hooks/useLeadForm";

export function SolutionModal({
  solution,
  onClose
}: {
  solution: AiSolution;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const [step, setStep] = useState<"detail" | "form" | "success">("detail");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const { submitLead, loading, error } = useLeadForm();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitted = await submitLead({
      name,
      contact,
      lead_type: "ai_creator",
      source_page: "/ai-creator",
      message: `[${solution.icon} ${solution.title}]${comment ? `: ${comment}` : ""}`
    });
    if (submitted) {
      setStep("success");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(30,16,64,0.5)] p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[560px] overflow-y-auto rounded-[24px] bg-white p-6 shadow-soft sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" onClick={onClose} className="absolute right-5 top-5 text-hint hover:text-primary">
          <X size={22} />
        </button>

        <AnimatePresence mode="wait">
          {step === "detail" ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="text-5xl">{solution.icon}</div>
              <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text">{solution.title}</h3>
              <p className="mt-4 text-base leading-8 text-text-secondary">{solution.detail_text}</p>
              <div className="mt-6 space-y-3">
                {solution.features.map((feature) => (
                  <div key={feature} className="rounded-2xl bg-surface px-4 py-3 text-sm font-medium text-text-secondary">
                    ✓ {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-primary">
                  {solution.price_from}
                </div>
                <div className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-primary">
                  {solution.duration}
                </div>
              </div>
              <button type="button" className="button-primary mt-8 w-full justify-center" onClick={() => setStep("form")}>
                {t("solutionModal.apply")}
              </button>
            </motion.div>
          ) : null}

          {step === "form" ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              onSubmit={handleSubmit}
            >
              <button type="button" className="button-ghost" onClick={() => setStep("detail")}>
                <ArrowLeft size={16} />
                {t("solutionModal.back")}
              </button>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t("solutionModal.requestFor")}</p>
              <div className="mt-3 rounded-2xl bg-surface p-4">
                <p className="text-lg font-semibold text-text">
                  {solution.icon} {solution.title}
                </p>
              </div>
              <div className="mt-5 grid gap-4">
                <input value={name} onChange={(event) => setName(event.target.value)} placeholder={t("form.name")} />
                <input
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  placeholder={t("solutionModal.contactPlaceholder")}
                />
                <textarea
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder={t("solutionModal.commentPlaceholder")}
                />
              </div>
              {error ? <p className="mt-4 text-sm text-[#E24B4A]">{error}</p> : null}
              <button
                type="submit"
                disabled={loading || !name.trim() || !contact.trim()}
                className="button-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? t("form.sending") : t("form.submit")}
              </button>
            </motion.form>
          ) : null}

          {step === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="text-center"
            >
              <CheckCircle2 className="mx-auto text-primary" size={46} />
              <h3 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-text">{t("form.successTitle")}</h3>
              <p className="mt-4 text-base leading-8 text-text-secondary">
                {t("solutionModal.successText", { title: solution.title })}
              </p>
              <a href={contactLinks.telegramSupport} target="_blank" rel="noreferrer" className="button-ghost mt-4">
                {t("solutionModal.contactNow")}
              </a>
              <button type="button" onClick={onClose} className="button-primary mt-8 w-full justify-center">
                {t("solutionModal.close")}
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
