import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LeadForm } from "@/components/LeadForm";
import { SectionReveal } from "@/components/SectionReveal";
import { contactLinks } from "@/data/fallbackContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export function ContactsPage() {
  const { t } = useTranslation();
  const page = t("contacts", { returnObjects: true }) as any;

  usePageMeta(page.metaTitle, page.metaDescription);

  return (
    <>
      <section className="section-shell section-space">
        <SectionReveal>
          <p className="eyebrow">{page.hero.eyebrow}</p>
          <h1 className="display-title">{page.hero.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">{page.hero.text}</p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Mail, title: page.cards.email, value: contactLinks.email, href: `mailto:${contactLinks.email}` },
            { icon: Phone, title: page.cards.phone, value: contactLinks.phone, href: `tel:${contactLinks.phone.replace(/\s+/g, "")}` },
            { icon: Send, title: page.cards.telegram, value: "@mlc_uz", href: contactLinks.telegramChannel },
            { icon: MessageCircle, title: page.cards.shakhriyor, value: "@shakhriyor_kh", href: contactLinks.telegramShakhriyor }
          ].map((item) => (
            <SectionReveal key={item.title}>
              <a href={item.href} target="_blank" rel="noreferrer" className="card-surface block p-6">
                <item.icon className="text-accent" size={24} />
                <h2 className="mt-4 text-2xl font-semibold text-text">{item.title}</h2>
                <p className="mt-3 text-base leading-8 text-text-secondary">{item.value}</p>
              </a>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-divider bg-surface">
        <div className="section-shell section-space">
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">{page.form.eyebrow}</p>
              <h2 className="section-title">{page.form.title}</h2>
            </div>
          </SectionReveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <LeadForm leadType="partner" sourcePage="/contacts" showMessage />
          </div>
        </div>
      </section>
    </>
  );
}
