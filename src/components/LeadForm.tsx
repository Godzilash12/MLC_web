import { CheckCircle2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { contactLinks } from "@/data/fallbackContent";
import { type LeadType, useLeadForm } from "@/hooks/useLeadForm";

export function LeadForm({
  leadType,
  sourcePage,
  showMessage = false
}: {
  leadType: LeadType;
  sourcePage: string;
  showMessage?: boolean;
}) {
  const { t } = useTranslation();
  const { submitLead, loading, success, error } = useLeadForm();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [interest, setInterest] = useState("");
  const [leadChoice, setLeadChoice] = useState<LeadType>(leadType);
  const [discover, setDiscover] = useState("telegram");
  const [budget, setBudget] = useState("<$1k");

  const actualLeadType = sourcePage === "/" ? leadChoice : leadType;

  const assembledMessage = [
    company ? `${t("form.labels.company")}: ${company}` : "",
    teamSize ? `${t("form.labels.teamSize")}: ${teamSize}` : "",
    interest ? `${t("form.labels.interest")}: ${interest}` : "",
    discover && sourcePage === "/b2c" ? `${t("form.labels.discover")}: ${discover}` : "",
    leadType === "ai_creator" ? `${t("form.labels.budget")}: ${budget}` : "",
    message
  ]
    .filter(Boolean)
    .join(" | ");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLead({
      name,
      contact,
      lead_type: actualLeadType,
      message: assembledMessage || undefined,
      source_page: sourcePage
    });
  }

  if (success) {
    return (
      <div className="rounded-[28px] border border-border bg-white p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto text-primary" size={42} />
        <h3 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-text">{t("form.successTitle")}</h3>
        <p className="mt-3 text-base leading-8 text-text-secondary">
          {t("form.successText")}{" "}
          <a href={contactLinks.telegramSupport} target="_blank" rel="noreferrer" className="font-semibold text-primary">
            @mlc_direct
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-border bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        {leadType === "b2b" || leadType === "ai_creator" ? (
          <input value={company} onChange={(event) => setCompany(event.target.value)} placeholder={t("form.company")} />
        ) : null}
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder={t("form.name")} />
        <input
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          placeholder={t("form.contact")}
        />
        {leadType === "b2b" ? (
          <>
            <input
              value={teamSize}
              onChange={(event) => setTeamSize(event.target.value)}
              placeholder={t("form.teamSize")}
            />
            <select value={interest} onChange={(event) => setInterest(event.target.value)}>
              <option value="">{t("form.directionPlaceholder")}</option>
              <option value={t("form.directions.aiStrategy")}>{t("form.directions.aiStrategy")}</option>
              <option value={t("form.directions.data")}>{t("form.directions.data")}</option>
              <option value={t("form.directions.ml")}>{t("form.directions.ml")}</option>
              <option value={t("form.directions.automation")}>{t("form.directions.automation")}</option>
              <option value={t("form.directions.custom")}>{t("form.directions.custom")}</option>
            </select>
          </>
        ) : null}
        {sourcePage === "/" ? (
          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-3 rounded-2xl bg-surface p-3">
              {[
                { value: "b2c", label: t("form.leadChoices.b2c") },
                { value: "b2b", label: t("form.leadChoices.b2b") },
                { value: "partner", label: t("form.leadChoices.partner") }
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setLeadChoice(item.value as LeadType)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    leadChoice === item.value ? "bg-primary text-white" : "bg-white text-text-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        {sourcePage === "/b2c" ? (
          <select value={discover} onChange={(event) => setDiscover(event.target.value)} className="md:col-span-2">
            <option value="telegram">{t("form.discover.telegram")}</option>
            <option value="instagram">{t("form.discover.instagram")}</option>
            <option value="friends">{t("form.discover.friends")}</option>
            <option value="search">{t("form.discover.search")}</option>
          </select>
        ) : null}
        {leadType === "ai_creator" ? (
          <select value={budget} onChange={(event) => setBudget(event.target.value)}>
            <option value="<$1k">{t("form.budget.under1k")}</option>
            <option value="$1-5k">{t("form.budget.oneToFive")}</option>
            <option value="$5-20k">{t("form.budget.fiveToTwenty")}</option>
            <option value="$20k+">{t("form.budget.overTwenty")}</option>
          </select>
        ) : null}
        {showMessage || sourcePage === "/" ? (
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={t("form.message")}
            className="md:col-span-2"
          />
        ) : null}
      </div>

      {error ? <p className="mt-4 text-sm text-[#E24B4A]">{error}</p> : null}

      <button
        type="submit"
        disabled={loading || !name.trim() || !contact.trim()}
        className="button-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={16} />
        {loading ? t("form.sending") : t("form.submit")}
      </button>

      <p className="mt-4 text-center text-xs text-hint">
        {t("form.privacy")}
      </p>
    </form>
  );
}
