import WrenchComic from "@/components/WrenchComic";
import SSSDemo from "@/components/SSSDemo";
import { Shield, Target, AlertTriangle, Mail, Github } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SectionDivider = () => <hr className="border-border my-0" />;

const Index = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const navLinks = useMemo(
    () =>
      [
        { href: "#threat-model", label: t("nav.threatModel") },
        { href: "#sss-demo", label: t("nav.sssDemo") },
        { href: "#consultation", label: t("nav.consultation") },
      ] as const,
    [t],
  );

  const threatColumns = useMemo(
    () => [
      {
        icon: Shield,
        title: t("threatModel.opportunistTitle"),
        body: t("threatModel.opportunistBody"),
      },
      {
        icon: Target,
        title: t("threatModel.targetedTitle"),
        body: t("threatModel.targetedBody"),
      },
      {
        icon: AlertTriangle,
        title: t("threatModel.coerciveTitle"),
        body: t("threatModel.coerciveBody"),
      },
    ],
    [t],
  );

  const consultationTiers = useMemo(
    () => [
      { title: t("consultation.tier1Title"), desc: t("consultation.tier1Desc") },
      { title: t("consultation.tier2Title"), desc: t("consultation.tier2Desc") },
      { title: t("consultation.tier3Title"), desc: t("consultation.tier3Desc") },
    ],
    [t],
  );

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/mpqogoaa", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSending(false);
    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display text-xs font-bold tracking-wider text-foreground">{t("nav.brand")}</span>
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden sm:flex items-center gap-6">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <div
              className="flex items-center gap-1 font-mono text-xs border border-border rounded px-1 py-0.5"
              role="group"
              aria-label={t("nav.language")}
            >
              <button
                type="button"
                onClick={() => navigate("/", { replace: true })}
                className={`px-2 py-0.5 rounded transition-colors ${
                  i18n.resolvedLanguage?.startsWith("en")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={i18n.resolvedLanguage?.startsWith("en")}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => navigate("/fr", { replace: true })}
                className={`px-2 py-0.5 rounded transition-colors ${
                  i18n.resolvedLanguage?.startsWith("fr")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={i18n.resolvedLanguage?.startsWith("fr")}
              >
                FR
              </button>
            </div>
            <a
              href="https://github.com/tsua0002/bitcoin-key-defense"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("nav.githubAria")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
          {t("hero.title1")}
          <br />
          <span className="text-primary">{t("hero.title2")}</span>
        </h1>
        <p className="mt-6 font-body text-lg text-muted-foreground max-w-xl">{t("hero.subtitle")}</p>
        <WrenchComic />
      </section>

      <SectionDivider />

      <section id="threat-model" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-12">{t("threatModel.title")}</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {threatColumns.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-display text-sm font-bold text-foreground mb-3">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 font-body text-xs text-muted-foreground italic">{t("threatModel.disclaimer")}</p>
      </section>

      <SectionDivider />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8">{t("crypto.title")}</h2>
        <div className="space-y-4 max-w-2xl">
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{t("crypto.p1")}</p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{t("crypto.p2")}</p>
        </div>
        <blockquote className="my-12 py-8 border-t border-b border-border">
          <p className="font-display text-lg sm:text-xl font-bold text-primary text-center leading-relaxed">
            {t("crypto.quoteLine1")}
            <br />
            {t("crypto.quoteLine2")}
          </p>
        </blockquote>
        <p className="font-body text-sm text-muted-foreground text-center">{t("crypto.quoteAfter")}</p>
      </section>

      <SectionDivider />

      <section id="sss-demo" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">{t("sss.sectionTitle")}</h2>
        <p className="font-body text-sm text-muted-foreground mb-10 max-w-2xl">{t("sss.sectionIntro")}</p>
        <SSSDemo />
      </section>

      <SectionDivider />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8">{t("above.title")}</h2>
        <div className="space-y-4 max-w-2xl">
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{t("above.p1")}</p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{t("above.p2")}</p>
          <p className="font-body text-sm text-foreground leading-relaxed font-medium">{t("above.p3")}</p>
        </div>
      </section>

      <SectionDivider />

      <section id="consultation" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6">{t("consultation.title")}</h2>
        <p className="font-body text-sm text-muted-foreground mb-12 max-w-2xl leading-relaxed">{t("consultation.intro")}</p>

        <div className="space-y-6 max-w-2xl">
          {consultationTiers.map(({ title, desc }) => (
            <div key={title} className="py-4 border-b border-border last:border-b-0">
              <h3 className="font-display text-sm font-bold text-foreground mb-1">{title}</h3>
              <p className="font-body text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-xs text-muted-foreground italic max-w-2xl">{t("consultation.disclaimer")}</p>

        <button
          onClick={() => setContactOpen(!contactOpen)}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium rounded hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          {t("consultation.cta")}
        </button>

        {contactOpen &&
          (submitted ? (
            <div className="mt-8 max-w-md p-6 border border-orange-300 bg-orange-50 rounded">
              <p className="font-mono text-sm text-orange-800">{t("consultation.formSuccess")}</p>
            </div>
          ) : (
            <form className="mt-8 space-y-4 max-w-md" onSubmit={handleContactSubmit}>
              <input
                name="name"
                type="text"
                required
                placeholder={t("consultation.formName")}
                className="w-full px-3 py-2.5 bg-popover border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                name="email"
                type="email"
                required
                placeholder={t("consultation.formEmail")}
                className="w-full px-3 py-2.5 bg-popover border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder={t("consultation.formMessage")}
                className="w-full px-3 py-2.5 bg-popover border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="px-6 py-2.5 bg-foreground text-background font-mono text-sm font-medium rounded hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? t("consultation.sending") : t("consultation.send")}
              </button>
            </form>
          ))}
      </section>

      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="font-mono text-xs text-muted-foreground text-center">{t("footer.tagline")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
