import { useTranslation } from "react-i18next";

const InstitutionalColdStorage = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6">
        {t("institutional.title")}
      </h2>

      {/* Intro paragraph */}
      <div className="space-y-4 max-w-2xl mb-12">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {t("institutional.intro")}
        </p>
      </div>

      {/* Stack diagram section */}
      <div className="mb-16">
        <p className="font-display text-xs font-semibold text-foreground uppercase tracking-widest mb-8">
          {t("institutional.stackLabel")}
        </p>

        {/* SVG Stack Diagram */}
        <svg
          viewBox="0 0 400 600"
          className="w-full max-w-md mx-auto mb-12"
          style={{ border: "1px solid var(--color-border)" }}
        >
          {/* Hardware Layer */}
          <rect x="20" y="20" width="360" height="100" fill="none" stroke="currentColor" strokeWidth="1" />
          <text
            x="200"
            y="50"
            textAnchor="middle"
            className="font-display text-sm font-bold"
            fill="var(--color-primary)"
          >
            {t("institutional.hardwareLayer")}
          </text>
          <text
            x="200"
            y="80"
            textAnchor="middle"
            className="font-body text-xs"
            fill="currentColor"
          >
            {t("institutional.hardwareSub")}
          </text>

          {/* Arrow 1 */}
          <line x1="200" y1="120" x2="200" y2="140" stroke="currentColor" strokeWidth="1" />
          <polygon points="200,145 195,138 205,138" fill="currentColor" />

          {/* Backup Layer */}
          <rect x="20" y="150" width="360" height="100" fill="none" stroke="currentColor" strokeWidth="1" />
          <text
            x="200"
            y="180"
            textAnchor="middle"
            className="font-display text-sm font-bold"
            fill="var(--color-primary)"
          >
            {t("institutional.backupLayer")}
          </text>
          <text
            x="200"
            y="210"
            textAnchor="middle"
            className="font-body text-xs"
            fill="currentColor"
          >
            {t("institutional.backupSub")}
          </text>

          {/* Arrow 2 */}
          <line x1="200" y1="250" x2="200" y2="270" stroke="currentColor" strokeWidth="1" />
          <polygon points="200,275 195,268 205,268" fill="currentColor" />

          {/* Script Layer */}
          <rect x="20" y="280" width="360" height="100" fill="none" stroke="currentColor" strokeWidth="1" />
          <text
            x="200"
            y="310"
            textAnchor="middle"
            className="font-display text-sm font-bold"
            fill="var(--color-primary)"
          >
            {t("institutional.scriptLayer")}
          </text>
          <text
            x="200"
            y="340"
            textAnchor="middle"
            className="font-body text-xs"
            fill="currentColor"
          >
            {t("institutional.scriptSub")}
          </text>

          {/* Arrow 3 */}
          <line x1="200" y1="380" x2="200" y2="400" stroke="currentColor" strokeWidth="1" />
          <polygon points="200,405 195,398 205,398" fill="currentColor" />

          {/* Policy Layer */}
          <rect x="20" y="410" width="360" height="100" fill="none" stroke="currentColor" strokeWidth="1" />
          <text
            x="200"
            y="440"
            textAnchor="middle"
            className="font-display text-sm font-bold"
            fill="var(--color-primary)"
          >
            {t("institutional.policyLayer")}
          </text>
          <text
            x="200"
            y="470"
            textAnchor="middle"
            className="font-body text-xs"
            fill="currentColor"
          >
            {t("institutional.policySub")}
          </text>
        </svg>
      </div>

      {/* Workflow section */}
      <div className="mb-16">
        <h3 className="font-display text-lg font-bold text-foreground mb-6">
          {t("institutional.workflowTitle")}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          {t("institutional.workflowBody")}
        </p>
        <p className="font-body text-xs text-muted-foreground leading-relaxed mb-2">
          {t("institutional.btslNote")}
          {" "}
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

      {/* 4 Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Card 1 */}
        <div className="p-6 border border-border rounded">
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            {t("institutional.card1Limit")}
          </p>
          <p className="font-body text-sm text-primary font-semibold">
            {t("institutional.card1Question")}
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border border-border rounded">
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            {t("institutional.card2Limit")}
          </p>
          <p className="font-body text-sm text-primary font-semibold">
            {t("institutional.card2Question")}
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 border border-border rounded">
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            {t("institutional.card3Limit")}
          </p>
          <p className="font-body text-sm text-primary font-semibold">
            {t("institutional.card3Question")}
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 border border-border rounded">
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            {t("institutional.card4Limit")}
          </p>
          <p className="font-body text-sm text-primary font-semibold">
            {t("institutional.card4Question")}
          </p>
        </div>
      </div>

      {/* Cards disclaimer */}
      <p className="font-body text-xs text-muted-foreground italic mb-12 max-w-2xl">
        {t("institutional.cardsDisclaimer")}
      </p>

      {/* CTA section */}
      <div className="space-y-4">
        <p className="font-body text-sm text-foreground leading-relaxed max-w-2xl">
          {t("institutional.ctaText")}
        </p>
        <a
          href="#consultation"
          className="inline-block text-primary hover:underline font-body text-sm"
        >
          {t("institutional.ctaLink")}
        </a>
      </div>
    </section>
  );
};

export default InstitutionalColdStorage;
