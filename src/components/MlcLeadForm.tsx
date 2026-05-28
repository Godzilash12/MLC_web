import { ChevronDown, Send } from "lucide-react";
import { type FormEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLeadForm, type LeadType } from "@/hooks/useLeadForm";
import { useSiteCopy } from "@/lib/siteCopy";

const optionConfigs = [
  { value: "development", leadType: "b2b" as LeadType },
  { value: "corporate", leadType: "b2b" as LeadType },
  { value: "personal", leadType: "b2c" as LeadType },
  { value: "media", leadType: "ai_creator" as LeadType },
  { value: "partnership", leadType: "partner" as LeadType }
];

export function MlcLeadForm({
  defaultOption = "development",
  sourcePage = "/"
}: {
  defaultOption?: string;
  sourcePage?: string;
}) {
  const copy = useSiteCopy();
  const { submitLead, loading, success, error } = useLeadForm();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState(defaultOption);
  const [open, setOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const options = optionConfigs.map((item) => ({
    ...item,
    label: copy.form.options[item.value as keyof typeof copy.form.options]
  }));

  const selected = options.find((item) => item.value === option) ?? options[0];

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!open || !dropdownRef.current) return;

    const rect = dropdownRef.current.getBoundingClientRect();
    const estimatedMenuHeight = options.length * 58 + 12;
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    setOpenUpward(spaceBelow < estimatedMenuHeight && spaceAbove > spaceBelow);
  }, [open]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await submitLead({
      name,
      contact: phone,
      lead_type: selected.leadType,
      message: `${copy.form.messagePrefix}: ${selected.label}`,
      source_page: sourcePage
    });
  }

  if (success) {
    return (
      <div className="glass-panel rounded-[2rem] p-8 text-center">
        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">{copy.form.successTitle}</h3>
        <p className="mt-4 text-base leading-8 text-text-secondary">
          {copy.form.successText}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mlc-lead-form glass-panel rounded-[2rem] p-5 sm:p-7 lg:p-8 ${open ? "mlc-lead-form--dropdown-open" : ""}`}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.1fr_auto] lg:items-center">
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder={copy.form.name} />
        <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder={copy.form.phone} />
        <div ref={dropdownRef} className={`form-dropdown ${open ? "form-dropdown--open" : ""} ${openUpward ? "form-dropdown--upward" : ""}`}>
          <button
            type="button"
            className="form-dropdown__trigger"
            onClick={() => setOpen((value) => !value)}
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <span>{selected.label}</span>
            <ChevronDown size={18} className="form-dropdown__chevron" />
          </button>
          {open ? (
            <div className="form-dropdown__menu" role="listbox" aria-label={copy.form.messagePrefix}>
              {options.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  className={`form-dropdown__option ${item.value === option ? "form-dropdown__option--active" : ""}`}
                  onClick={() => {
                    setOption(item.value);
                    setOpen(false);
                  }}
                  role="option"
                  aria-selected={item.value === option}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={loading || !name.trim() || !phone.trim()}
          className="button-primary min-w-[11rem] justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={16} />
          {loading ? copy.form.sending : copy.form.submit}
        </button>
      </div>

      {error ? <p className="mt-4 text-sm text-[#ff9cbf]">{copy.form.error}</p> : null}
    </form>
  );
}
