# Physical Security for Bitcoin Holders

Single-page site for an independent Bitcoin security consultant: educate on **physical** threat models, demonstrate **Shamir’s Secret Sharing (SSS)** in the browser, and invite **tailored architecture consultations**—without generic crypto marketing noise.

**Live:** [bitcoin-key-defense.vercel.app](https://bitcoin-key-defense.vercel.app/)

---

## Origin

Built in under an hour from a single prompt, following a LinkedIn discussion 
on the French self-custody declaration law — [Projet de loi n°2115, adopté le 7 avril 2026](https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N52985) 
— and its implications for the physical security of Bitcoin holders.

The prompt that generated this site is included in [`PROMPT.md`](./PROMPT.md) — 
not as a boilerplate, but as a demonstration that knowing *what to ask* 
is the actual skill. The code is a commodity. The brief is not.

**Author:** Thomas Suau (@tsua0002) — Bitcoin security architecture consultant.  
**Site:** [bitcoin-key-defense.vercel.app](https://bitcoin-key-defense.vercel.app/)  
**Contact:** via the site or [LinkedIn](www.linkedin.com/in/thomas-s-92932889)

## What this site is for

1. **Threat model** — Reframe risk: the attacker often does not care that your cryptography is “perfect”; leverage and physical exposure matter.
2. **Interactive SSS** — Let visitors split and reconstruct a secret locally so the idea is concrete, not abstract.
3. **Positioning** — Serious, institutional-grade framing: the consultant operates at depth, without turning the page into an MPC handbook, so the right next step is a **personalized** conversation.

Tone: security researcher meets trusted advisor—not influencer hype. No promises of invulnerability; emphasis on **asymmetric cost** (making an attack slower, costlier, and less certain).

---

## Information architecture (page sections)

| Section | Role |
|--------|------|
| **Hero** | Headline + subhead; original two-panel SVG (“wrench” narrative, XKCD #538–inspired idea only, not a copy). |
| **Threat model** | Three adversary classes (opportunist, targeted professional, coercive) + short disclaimer on limits of any architecture. |
| **Cryptography / institutions** | Why advanced primitives are now accessible; pull quote on distributed trust (e.g. nuclear codes analogy). |
| **SSS demo** | Client-only split/reconstruct UI, best-practices panel, educational disclaimers. |
| **Above SSS** | Horizon: reconstruction exposure vs. approaches where the full secret never exists in one place; no deep product-specific MPC docs. |
| **Consultation CTA** | Service tiers (audit, written recommendation, guided implementation), legal advisory disclaimer, contact entry point. |
| **Footer** | Minimal line: advisory / architecture positioning. |

Navigation uses in-page anchors (`#threat-model`, `#sss-demo`, `#consultation`) with a sticky header.

---

## Technical architecture

- **Stack:** [Vite](https://vitejs.dev/) + React 18 + TypeScript, [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) primitives where used.
- **Routing:** [React Router](https://reactrouter.com/) — `/` renders the landing page; unknown paths → `NotFound`.
- **Main entry points:**
  - `src/pages/Index.tsx` — layout, copy, consultation toggle, contact form submission.
  - `src/components/SSSDemo.tsx` — SSS UI and logic.
  - `src/components/WrenchComic.tsx` — hero illustration.
  - `src/components/ShareDiagram.tsx` — share visualization for the demo.
- **Cryptography in the browser:** [`secrets.js-grempe`](https://www.npmjs.com/package/secrets.js-grempe) for Shamir operations; runs **entirely client-side** (no secret payload sent to this app’s servers).
- **Contact:** Form posts to **Formspree** from the client; success/error UX is handled in React state. If you fork the repo, replace the endpoint in `Index.tsx` with your own Formspree (or another) project.
- **Static deployment:** No first-party backend; suitable for static hosts (e.g. Vercel). No cookie banner / analytics required for the original product brief (add explicitly if you change that).

Design constraints from the brief: light theme, strong typographic hierarchy (display mono + humanist sans), single accent, thin section dividers, generous whitespace—**audit report**, not **meme coin**.

---

## Development

```bash
npm install
npm run dev
```

```bash
npm run build    # production bundle
npm run preview  # serve dist locally
npm run lint
npm test         # Vitest
```

---

## Contact & customization

- **Visitors:** use **Request a consultation** on the site to reach the consultant (name, email, message).
- **Maintainers:** update footer name/handle, optional LinkedIn, and Formspree endpoint as needed; keep advisory disclaimers aligned with how you actually deliver services.

Product intent and section copy are captured in detail in [`PROMPT.md`](./PROMPT.md) (briefing + post-launch notes).
