import { Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CalendarDays, Instagram, Linkedin, Send } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionReveal } from "@/components/SectionReveal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { contactLinks } from "@/data/fallbackContent";
import { useSiteCopy } from "@/lib/siteCopy";

const MlcLeadForm = lazy(() => import("@/components/MlcLeadForm").then((module) => ({ default: module.MlcLeadForm })));

function CommunityLeadSection() {
  const copy = useSiteCopy();
  const links = [
    {
      label: "Telegram",
      href: contactLinks.telegramChannel,
      icon: Send
    },
    {
      label: "Instagram",
      href: contactLinks.instagram,
      icon: Instagram
    },
    {
      label: "LinkedIn",
      href: contactLinks.linkedin,
      icon: Linkedin
    }
  ];

  return (
    <section className="section-divider">
      <div className="section-shell py-16 sm:py-20">
        <SectionReveal>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="section-title">{copy.lead.communityTitle}</h2>
            <p className="section-copy mx-auto mt-6 max-w-4xl">
              {copy.lead.communityText}
            </p>
          </div>
        </SectionReveal>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <SectionReveal key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel group flex h-full min-h-[13rem] flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white transition duration-300 group-hover:bg-white/15">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-white">{item.label}</h3>
                </a>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal>
          <div className="glass-panel mx-auto mt-5 flex max-w-5xl flex-col gap-4 rounded-[2rem] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                <CalendarDays size={24} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">{copy.lead.registrationTitle}</h3>
                <p className="mt-2 text-base leading-7 text-text-secondary">
                  {copy.lead.registrationText}
                </p>
              </div>
            </div>
            <a href={contactLinks.telegramChannel} target="_blank" rel="noreferrer" className="button-primary w-full sm:w-fit">
              {copy.lead.registrationButton}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function PageLeadSection() {
  const copy = useSiteCopy();

  return (
    <section className="section-divider">
      <div className="section-shell py-16 sm:py-20">
        <SectionReveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow">{copy.lead.eyebrow}</p>
            <h2 className="section-title">{copy.lead.title}</h2>
            <p className="section-copy mx-auto mt-6 max-w-4xl">
              {copy.lead.text}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10">
          <Suspense fallback={<div className="h-44 rounded-[2rem] border border-white/8 bg-white/5" />}>
            <MlcLeadForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export function Layout() {
  const location = useLocation();
  const showGlobalLeadForm = location.pathname !== "/";

  return (
    <div className="min-h-screen bg-bg">
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} style={{ paddingTop: "var(--header-total-height)" }} className="page-shell">
        <Outlet />
        {location.pathname === "/community" ? <CommunityLeadSection /> : showGlobalLeadForm ? <PageLeadSection /> : null}
      </main>
      <Footer />
    </div>
  );
}
