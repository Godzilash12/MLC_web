import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useSiteCopy } from "@/lib/siteCopy";

const navItemClass = ({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? "nav-link--active" : ""}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const copy = useSiteCopy();
  const navLinks = [
    { to: "/about", label: copy.nav.about },
    { to: "/community", label: copy.nav.community },
    { to: "/education", label: copy.nav.education },
    { to: "/development", label: copy.nav.development },
    { to: "/ai-media", label: copy.nav.aiMedia }
  ];
  const tickerLoop = [...copy.ticker, ...copy.ticker];

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div className="ticker-shell">
        <div className="ticker-track">
          {tickerLoop.map((item, index) => (
            <span key={`${item}-${index}`} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="site-nav-shell mx-3 mt-2.5 rounded-[1.5rem] border border-white/10 bg-[#120d1fcc] shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="section-shell flex h-[3.9rem] items-center justify-between gap-4">
          <Link to="/" className="group flex items-center">
            <img
              src="/logo.avif"
              alt="ML Community Uzbekistan"
              width="941"
              height="154"
              className="site-logo site-logo--nav"
            />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navItemClass}>
                {link.label}
              </NavLink>
            ))}
            <a href="https://01ai.uz" target="_blank" rel="noreferrer" className="nav-link">
              01AI
            </a>
            <LanguageSwitcher />
          </nav>

          <button
            type="button"
            className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5 text-white xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={copy.nav.menu}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="site-mobile-nav-shell mx-3 mt-3 rounded-[1.5rem] border border-white/10 bg-[#120d1fea] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl xl:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-semibold text-white"
              >
                {link.label}
              </NavLink>
            ))}
            <a href="https://01ai.uz" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-semibold text-white">
              01AI
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      ) : null}
    </header>
  );
}
