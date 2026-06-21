import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useSiteCopy } from "@/lib/siteCopy";

const navItemClass = ({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? "nav-link--active" : ""}`;

const mobileLangs = [
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const copy = useSiteCopy();
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.split("-")[0] ?? "ru";
  const tickerLoop = [...copy.ticker, ...copy.ticker];

  useEffect(() => {
    setOpen(false);
    setOpenMobileDropdown(null);
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
                      {copy.nav.individualEdu}
                    </NavLink>
                    <NavLink
                      to="/b2b"
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {copy.nav.corporateEdu}
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

      {/* Mobile menu with max-height animation */}
      <div
        className="xl:hidden overflow-hidden"
        style={{
          maxHeight: open ? "600px" : "0px",
          opacity: open ? 1 : 0,
          transition: "max-height 300ms ease, opacity 300ms ease",
        }}
      >
        <div className="site-mobile-nav-shell mx-3 mt-3 rounded-[1.5rem] border border-white/10 bg-[#120d1fea] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/about"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base font-semibold text-white"
            >
              {copy.nav.about}
            </NavLink>

            <NavLink
              to="/community"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base font-semibold text-white"
            >
              {copy.nav.community}
            </NavLink>

            {/* Образование dropdown */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={() =>
                  setOpenMobileDropdown(openMobileDropdown === "education" ? null : "education")
                }
                className="flex w-full items-center justify-between px-4 py-3.5 text-base font-semibold text-white"
              >
                {copy.nav.educationGroup}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openMobileDropdown === "education" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: openMobileDropdown === "education" ? "200px" : "0px",
                  transition: "max-height 300ms ease",
                }}
              >
                <div className="flex flex-col gap-0.5 border-t border-white/10 p-2">
                  <NavLink
                    to="/education"
                    className="rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {copy.nav.individualEdu}
                  </NavLink>
                  <NavLink
                    to="/b2b"
                    className="rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {copy.nav.corporateEdu}
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Услуги dropdown */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={() =>
                  setOpenMobileDropdown(openMobileDropdown === "products" ? null : "products")
                }
                className="flex w-full items-center justify-between px-4 py-3.5 text-base font-semibold text-white"
              >
                {copy.nav.productsGroup}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openMobileDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: openMobileDropdown === "products" ? "200px" : "0px",
                  transition: "max-height 300ms ease",
                }}
              >
                <div className="flex flex-col gap-0.5 border-t border-white/10 p-2">
                  <NavLink
                    to="/development"
                    className="rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {copy.nav.development}
                  </NavLink>
                  <NavLink
                    to="/ai-media"
                    className="rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {copy.nav.aiMedia}
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink
              to="/01ai"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base font-semibold text-white"
            >
              01AI
            </NavLink>

            <a
              href="https://01ai.uz"
              target="_blank"
              rel="noreferrer"
              className="button-primary py-2 text-sm"
            >
              {copy.nav.platform} ↗
            </a>

            {/* Inline language switcher — горизонтальный ряд */}
            <div className="flex gap-2 pt-1">
              {mobileLangs.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => void i18n.changeLanguage(lang.code)}
                  className={[
                    "flex-1 rounded-xl border py-2.5 text-sm font-semibold transition",
                    locale === lang.code
                      ? "border-white/30 bg-white/15 text-white"
                      : "border-white/10 bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
