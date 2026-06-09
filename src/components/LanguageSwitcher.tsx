import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const langs = [
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" }
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";
  const current = langs.find((l) => l.code === locale) ?? langs[0];

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        {current.label}
        <ChevronDown size={13} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-1.5 min-w-[80px] rounded-[1rem] border border-white/10 bg-[#1a1430] p-1 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          {langs.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                void i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={[
                "block w-full rounded-lg px-3 py-2 text-left text-sm",
                "font-semibold transition hover:bg-white/10",
                locale === lang.code ? "text-white" : "text-text-secondary"
              ].join(" ")}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
