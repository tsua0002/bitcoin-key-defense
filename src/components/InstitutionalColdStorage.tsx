import { useTranslation } from "react-i18next";

const InstitutionalColdStorage = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8">
        {t("institutional.title")}
      </h2>

      <div className="space-y-4 max-w-2xl mb-12">
        <p className="font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
          {t("institutional.intro")}
        </p>
      </div>

      {/* Stack Diagram */}
      <div className="my-16">
        <p className="font-display text-xs font-bold text-muted-foreground mb-8 uppercase tracking-widest">
          {t("institutional.stackLabel")}
        </p>

        <div className="space-y-0 max-w-2xl">
          {/* Hardware Layer */}
          <div className="border border-border p-6">
            <h3 className="font-display text-sm font-bold text-primary mb-2">
              {t("institutional.hardwareLayer")}
            </h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
              {t("institutional.hardwareSub")}
            </p>
          </div>

          <div className="flex justify-center py-2">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-foreground"
              strokeWidth="1"
            >
              <line x1="12" y1="0" x2="12" y2="14" stroke="currentColor" />
              <path d="M7 10 L12 14 L17 10" stroke="currentColor" fill="none" />
            </svg>
          </div>

          {/* Backup Layer */}
          <div className="border border-border p-6">
            <h3 className="font-display text-sm font-bold text-primary mb-2">
              {t("institutional.backupLayer")}
            </h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
              {t("institutional.backupSub")}
            </p>
          </div>

          <div className="flex justify-center py-2">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-foreground"
              strokeWidth="1"
            >
              <line x1="12" y1="0" x2="12" y2="14" stroke="currentColor" />
              <path d="M7 10 L12 14 L17 10" stroke="currentColor" fill="none" />
            </svg>
          </div>

          {/* Script Layer */}
          <div className="border border-border p-6">
            <h3 className="font-display text-sm font-bold text-primary mb-2">
              {t("institutional.scriptLayer")}
            </h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
              {t("institutional.scriptSub")}
            </p>
          </div>

          <div className="flex justify-center py-2">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-foreground"
              strokeWidth="1"
            >
              <line x1="12" y1="0" x2="12" y2="14" stroke="currentColor" />
              <path d="M7 10 L12 14 L17 10" stroke="currentColor" fill="none" />
            </svg>
          </div>

          {/* Policy Layer */}
          <div className="border border-border p-6">
            <h3 className="font-display text-sm font-bold text-primary mb-2">
              {t("institutional.policyLayer")}
            </h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
              {t("institutional.policySub")}
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="mt-16 mb-16">
        <h3 className="font-display text-sm font-bold text-foreground mb-4">
          {t("institutional.workflowTitle")}
        </h3>
        <div className="space-y-4 max-w-2xl">
          <p className="font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {t("institutional.workflowBody")}
          </p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            <em>{t("institutional.btslNote")}</em>{" "}
            <a
              href="https://btsl-playground.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {t("institutional.btslLink")}
            </a>
          </p>
        </div>
      </div>

      {/* Four Cards */}
      <div className="mt-16 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Operational */}
          <div className="border border-border p-6">
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {t("institutional.card1Limit")}
            </p>
            <p className="font-body text-sm text-primary font-medium">
              {t("institutional.card1Question")}
            </p>
          </div>

          {/* Card 2: Backup & Recovery */}
          <div className="border border-border p-6">
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {t("institutional.card2Limit")}
            </p>
            <p className="font-body text-sm text-primary font-medium">
              {t("institutional.card2Question")}
            </p>
          </div>

          {/* Card 3: Physical Coercion */}
          <div className="border border-border p-6">
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {t("institutional.card3Limit")}
            </p>
            <p className="font-body text-sm text-primary font-medium">
              {t("institutional.card3Question")}
            </p>
          </div>

          {/* Card 4: Quantum Horizon */}
          <div className="border border-border p-6">
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {t("institutional.card4Limit")}
            </p>
            <p className="font-body text-sm text-primary font-medium">
              {t("institutional.card4Question")}
            </p>
          </div>
        </div>

        <p className="mt-8 font-body text-xs text-muted-foreground italic max-w-2xl">
          {t("institutional.cardsDisclaimer")}
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-16 max-w-2xl">
        <p className="font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
          {t("institutional.ctaText")}
        </p>
        <a href="#consultation" className="font-body text-sm text-primary hover:underline">
          {t("institutional.ctaLink")}
        </a>
      </div>
    </section>
  );
};

export default InstitutionalColdStorage;
