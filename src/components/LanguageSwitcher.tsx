import { useTranslation } from "react-i18next";

const languages = [
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" }
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
      {languages.map(({ code, label }) => {
        const active = i18n.language.startsWith(code);

        return (
          <button
            key={code}
            type="button"
            onClick={() => void i18n.changeLanguage(code)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
              active ? "bg-white text-[#120d1f]" : "text-text-secondary hover:bg-white/10 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
