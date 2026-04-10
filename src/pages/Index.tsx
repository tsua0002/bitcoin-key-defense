import WrenchComic from "@/components/WrenchComic";
import SSSDemo from "@/components/SSSDemo";
import { Shield, Target, AlertTriangle, Mail, Github } from "lucide-react";
import React, { useState } from "react";

const SectionDivider = () => <hr className="border-border my-0" />;

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

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
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display text-xs font-bold tracking-wider text-foreground">PHYSICAL SECURITY</span>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-6">
              {["Threat Model", "SSS Demo", "Consultation"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/\s/g, "-")}`}
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href="https://github.com/tsua0002/bitcoin-key-defense"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </nav>

      {/* Section 1 — Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
          Your encryption is perfect.<br />
          <span className="text-primary">Your attacker doesn't care.</span>
        </h1>
        <p className="mt-6 font-body text-lg text-muted-foreground max-w-xl">
          The threat to your Bitcoin is not cryptographic. It is physical.
        </p>
        <WrenchComic />
      </section>

      <SectionDivider />

      {/* Section 2 — Threat Model */}
      <section id="threat-model" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-12">
          Who are you protecting against?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Shield,
              title: "The Opportunist",
              body: "Does not know how much you hold. Targets of opportunity. Standard security (hardware wallet, safe, discretion) is sufficient. The new self-custody declaration law is a direct attack against this layer.",
            },
            {
              icon: Target,
              title: "The Targeted Professional",
              body: "Knows you hold significant value (from a data leak, a public declaration, social engineering). Patient. May return. Standard security fails here. Time and distribution are your only real tools.",
            },
            {
              icon: AlertTriangle,
              title: "The Coercive Attacker",
              body: "Has leverage (family, duration, escalation). No architecture eliminates this entirely. The goal is not invulnerability — it is making the attack too costly, too slow, and too uncertain to be worth it.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-display text-sm font-bold text-foreground mb-3">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 font-body text-xs text-muted-foreground italic">
          No architecture guarantees absolute protection. The goal is asymmetric cost: the attack must cost more than the expected gain.
        </p>
      </section>

      <SectionDivider />

      {/* Section 3 — Cryptography */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8">
          The primitives that governments and institutions use — are now accessible to you.
        </h2>
        <div className="space-y-4 max-w-2xl">
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            For decades, advanced cryptographic architectures — secret distribution, threshold signatures, time-delayed access — were reserved for state actors and large financial institutions.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Bitcoin and its surrounding tooling have made these primitives accessible to any holder willing to implement them correctly. The gap between a government and an individual is no longer the cryptography available — it is the implementation, the operational security, and the architecture built around it.
          </p>
        </div>
        <blockquote className="my-12 py-8 border-t border-b border-border">
          <p className="font-display text-lg sm:text-xl font-bold text-primary text-center leading-relaxed">
            "If someone captures the President, they don't get the nuclear codes.<br />Not alone. Not like that."
          </p>
        </blockquote>
        <p className="font-body text-sm text-muted-foreground text-center">
          The same architectural principle applies to your Bitcoin.
        </p>
      </section>

      <SectionDivider />

      {/* Section 4 — SSS Demo */}
      <section id="sss-demo" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
          See it work. Understand why it matters.
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-10 max-w-2xl">
          Shamir's Secret Sharing splits a secret into N shares, requiring M of them to reconstruct it. No single share reveals anything about the secret.
        </p>
        <SSSDemo />
      </section>

      <SectionDivider />

      {/* Section 5 — What Exists Above */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8">
          SSS is a strong foundation. There are levels above.
        </h2>
        <div className="space-y-4 max-w-2xl">
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            SSS has one structural limitation: the secret must be reconstructed at some point, creating a moment of exposure. During reconstruction, the full secret exists in one place — however briefly.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Institutional environments use architectures where the secret is never reconstructed in full. Distributed computation allows signing without any single party holding the complete key. These approaches — used by major custody providers and financial institutions — are becoming accessible but require careful, contextual implementation.
          </p>
          <p className="font-body text-sm text-foreground leading-relaxed font-medium">
            The right architecture depends on your threat model, your holdings, and your operational constraints. There is no universal answer.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6 — CTA */}
      <section id="consultation" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6">
          Your situation is unique. Your architecture should be too.
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          A recommendation without context is a bad recommendation. I offer tailored security architecture consultations for Bitcoin holders — from threat model assessment to implementation guidance.
        </p>

        <div className="space-y-6 max-w-2xl">
          {[
            {
              title: "Security Audit & Threat Assessment",
              desc: "I define who you're protecting against and map your current exposure.",
            },
            {
              title: "Architecture Recommendation",
              desc: "A written, personalized document detailing the architecture adapted to your profile and holdings. Implementation remains your responsibility.",
            },
            {
              title: "Guided Implementation",
              desc: "Step-by-step guidance as you implement. I never touch your keys. Ever.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="py-4 border-b border-border last:border-b-0">
              <h3 className="font-display text-sm font-bold text-foreground mb-1">{title}</h3>
              <p className="font-body text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-xs text-muted-foreground italic max-w-2xl">
          All services are advisory in nature. Implementation decisions and operational responsibility remain solely with the client. I hold no access to client funds or secrets.
        </p>

        <button
          onClick={() => setContactOpen(!contactOpen)}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium rounded hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          Request a consultation
        </button>

        {contactOpen &&
          (submitted ? (
            <div className="mt-8 max-w-md p-6 border border-orange-300 bg-orange-50 rounded">
              <p className="font-mono text-sm text-orange-800">
                Message envoyé. Je reviendrai vers vous rapidement.
              </p>
            </div>
          ) : (
            <form className="mt-8 space-y-4 max-w-md" onSubmit={handleContactSubmit}>
              <input
                name="name"
                type="text"
                required
                placeholder="Name"
                className="w-full px-3 py-2.5 bg-popover border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full px-3 py-2.5 bg-popover border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Describe your situation briefly"
                className="w-full px-3 py-2.5 bg-popover border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="px-6 py-2.5 bg-foreground text-background font-mono text-sm font-medium rounded hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </form>
          ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="font-mono text-xs text-muted-foreground text-center">
            Bitcoin security architecture · Advisory services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
