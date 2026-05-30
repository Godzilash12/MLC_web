import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useSiteCopy } from "@/lib/siteCopy";

const navItemClass = ({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? "nav-link--active" : ""}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const copy = useSiteCopy();
  const navLinks = [
    { to: "/about", label: copy.nav.about },
    { to: "/community", label: copy.nav.community },
    { to: "/education", label: copy.nav.education },
    { to: "/b2b", label: copy.nav.b2b },
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

          <nav className="hidden items-center gap-3 xl:flex">
            <NavLink to="/about" className={navItemClass}>
              {copy.nav.about}
            </NavLink>

            <NavLink to="/community" className={navItemClass}>
              {copy.nav.community}
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("education")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link flex items-center gap-1 ${
                  openDropdown === "education" ? "nav-link--active" : ""
                }`}
              >
                {copy.nav.educationGroup}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    openDropdown === "education" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openDropdown === "education" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full z-50 mt-2 min-w-[180px] rounded-[1.2rem] border border-white/10 bg-[#1a1430] p-2 shadow-[0_16px_48px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                  >
                    <NavLink
                      to="/education"
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {copy.nav.education}
                    </NavLink>
                    <NavLink
                      to="/b2b"
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {copy.nav.b2b}
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("products")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link flex items-center gap-1 ${openDropdown === "products" ? "nav-link--active" : ""}`}
              >
                {copy.nav.productsGroup}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full z-50 mt-2 min-w-[180px] rounded-[1.2rem] border border-white/10 bg-[#1a1430] p-2 shadow-[0_16px_48px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                  >
                    <NavLink
                      to="/development"
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {copy.nav.development}
                    </NavLink>
                    <NavLink
                      to="/ai-media"
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {copy.nav.aiMedia}
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/01ai" className={navItemClass}>
              01AI
            </NavLink>

            <a href="https://01ai.uz" target="_blank" rel="noreferrer" className="button-primary py-2 text-sm">
              {copy.nav.platform} ↗
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
            <NavLink
              to="/01ai"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-semibold text-white"
            >
              01AI
            </NavLink>
            <a href="https://01ai.uz" target="_blank" rel="noreferrer" className="button-primary py-2 text-sm">
              {copy.nav.platform} ↗
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      ) : null}
    </header>
  );
}
