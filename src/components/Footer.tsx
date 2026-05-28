import { Instagram, Linkedin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { contactLinks } from "@/data/fallbackContent";
import { useSiteCopy } from "@/lib/siteCopy";

export function Footer() {
  const copy = useSiteCopy();

  return (
    <footer className="section-divider footer-shell bg-[#0d0915]">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4">
          <img
            src="/logo.avif"
            alt="ML Community Uzbekistan"
            width="941"
            height="154"
            className="site-logo site-logo--footer"
          />
          <p className="max-w-xs text-sm leading-7 text-text-secondary">
            {copy.footer.text}
          </p>
        </div>

        <div>
          <p className="footer-title text-xs font-semibold uppercase tracking-[0.25em] text-[#ff65db]">{copy.footer.navigation}</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
            <Link to="/">{copy.footer.home}</Link>
            <Link to="/about">{copy.nav.about}</Link>
            <Link to="/community">{copy.nav.community}</Link>
            <Link to="/education">{copy.nav.education}</Link>
            <Link to="/development">{copy.nav.development}</Link>
            <Link to="/ai-media">{copy.nav.aiMedia}</Link>
            <a href="https://01ai.uz" target="_blank" rel="noreferrer">
              01AI
            </a>
          </div>
        </div>

        <div>
          <p className="footer-title text-xs font-semibold uppercase tracking-[0.25em] text-[#ff65db]">{copy.footer.contacts}</p>
          <div className="mt-4 space-y-3 text-sm text-text-secondary">
            <a className="block" href={`mailto:${contactLinks.email}`}>{contactLinks.email}</a>
            <a className="block" href={`tel:${contactLinks.phone.replace(/\s+/g, "")}`}>{contactLinks.phone}</a>
            <a className="block" href={contactLinks.telegramSupport} target="_blank" rel="noreferrer">
              @mlc_direct
            </a>
          </div>
        </div>

        <div>
          <p className="footer-title text-xs font-semibold uppercase tracking-[0.25em] text-[#ff65db]">{copy.footer.social}</p>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <a className="button-secondary !px-3 !py-3" href={contactLinks.telegramChannel} target="_blank" rel="noreferrer">
              <Send size={16} />
            </a>
            <a className="button-secondary !px-3 !py-3" href={contactLinks.instagram} target="_blank" rel="noreferrer">
              <Instagram size={16} />
            </a>
            <a className="button-secondary !px-3 !py-3" href={contactLinks.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="section-shell flex flex-col gap-2 border-t border-white/10 py-5 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <span>{copy.footer.slogan}</span>
      </div>
    </footer>
  );
}
