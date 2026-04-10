Build a single-page web application in React called "Physical Security for Bitcoin Holders" 

(working title, make it feel like a serious security resource, not a blog).

---

## PURPOSE & POSITIONING

This site belongs to an independent Bitcoin security consultant. The goal is threefold:

1. Educate holders on the real physical threat model (not just "use a hardware wallet")

2. Demonstrate Shamir's Secret Sharing interactively and concretely

3. Position the consultant as someone who operates at an institutional-grade level 

   — without revealing everything — so visitors want to reach out for a personalized plan

The tone is: serious, expert, minimal jargon for the threat model sections, 

technical precision in the SSS demo. Think "security researcher meets trusted advisor", 

not "crypto influencer".

---

## DESIGN DIRECTION
I am providing the XKCD #538 comic as a visual reference for the two-panel 

SVG illustration in Section 1. Use it strictly as conceptual and stylistic 

inspiration — do NOT reproduce it. Create an original SVG in a similar 

clean line-art style that communicates the same idea.

Light theme. White or very light warm off-white base (#FAFAF8 or similar). 

Single sharp accent color (suggest: deep electric blue #1A1AFF or burnt amber #C45000 

— choose what feels most "cryptographic and serious"). 

Typography: pair a geometric monospace display font for titles/code with a clean 

humanist sans-serif for body. No gradients, no purple, no generic crypto aesthetics. 

Think serious financial audit report meets security research paper. 

Generous whitespace. Sections separated by thin lines, not cards or boxes. 

Subtle background texture (very low opacity noise or fine grid — nothing distracting). 

Micro-interactions on hover for buttons and links only. 

Dark text on light backgrounds throughout — no exceptions.

---

## SITE STRUCTURE

### Section 1 — The Real Problem (Hero)

Headline (bold, large): 

"Your encryption is perfect. Your attacker doesn't care."

Subheadline: 

"The threat to your Bitcoin is not cryptographic. It is physical."

Below: recreate visually the concept of the XKCD #538 "Security" comic — 

DO NOT copy the comic itself, recreate it as a clean original two-panel SVG illustration:

- Panel 1: Figure at a computer, surrounded by floating text: 

  "AES-256", "Multisig", "Hardware wallet", "Air-gapped device"

- Panel 2: Same figure, another person next to them holding a simple wrench. 

  Speech bubble: "Give me the key."

Caption below: "$5 wrench. Game over. Unless you architect for this."

---

### Section 2 — The Threat Model

Title: "Who are you protecting against?"

Three columns, clean, no cards — just icon + label + short paragraph:

**The Opportunist**

Does not know how much you hold. Targets of opportunity. 

Standard security (hardware wallet, safe, discretion) is sufficient. 

The new self-custody declaration law is a direct attack against this layer.

**The Targeted Professional**

Knows you hold significant value (from a data leak, a public declaration, 

social engineering). Patient. May return. 

Standard security fails here. Time and distribution are your only real tools.

**The Coercive Attacker**

Has leverage (family, duration, escalation). 

No architecture eliminates this entirely. 

The goal is not invulnerability — it is making the attack too costly, 

too slow, and too uncertain to be worth it.

Small disclaimer at the bottom of this section (subtle, smaller font):

"No architecture guarantees absolute protection. 

The goal is asymmetric cost: the attack must cost more than the expected gain."

---

### Section 3 — Why Cryptography Alone Isn't Enough (and What Changes Everything)

Title: "The primitives that governments and institutions use — are now accessible to you."

Two paragraphs of body text explaining:

- For decades, advanced cryptographic architectures (secret distribution, 

  threshold signatures, time-delayed access) were reserved for state actors 

  and large financial institutions

- Bitcoin and its surrounding tooling have made these primitives accessible 

  to any holder willing to implement them correctly

- The gap between a government and an individual is no longer the cryptography available — 

  it is the implementation, the operational security, and the architecture 

  built around it

End with a pull quote (large, centered, in the accent color):

"If someone captures the President, they don't get the nuclear codes. 

Not alone. Not like that."

Below the quote, one sentence: 

"The same architectural principle applies to your Bitcoin."

---

### Section 4 — Shamir's Secret Sharing: Interactive Demo

Title: "See it work. Understand why it matters."

Brief intro text (2 sentences max):

"Shamir's Secret Sharing splits a secret into N shares, 

requiring M of them to reconstruct it. 

No single share reveals anything about the secret."

#### THE INTERACTIVE DEMO (fully functional):

Build a working SSS implementation in the browser using a well-known JS library 

(use `secrets.js-grempe` loaded via CDN or bundled).

The UI has two modes, toggled by a clean tab or switch: SPLIT and RECONSTRUCT.

**SPLIT mode:**

- Text input: "Enter your secret" (placeholder: "e.g. a seed phrase, a password, any string")

- Number input: "Total shares (N)" — default 3, min 2, max 10

- Number input: "Shares required to reconstruct (M)" — default 2, min 2, max N

- Button: "Split"

- Output: Display each share in a monospace code block, numbered, 

  with a small copy button per share

- Below the shares, show a visual diagram: 

  N circles representing shares, with M highlighted in the accent color 

  and labeled "minimum required". Others labeled "can be lost". 

  Simple SVG, not a third-party chart.

**RECONSTRUCT mode:**

- Dynamic input fields (based on M value) for pasting shares

- Button: "Reconstruct"

- Output: The reconstructed secret in a monospace block

- If reconstruction fails: clear error message "Shares are incompatible or insufficient"

#### Best Practices Panel (always visible next to or below the demo):

Display as a clean numbered list with icons, never bullets:

1. Never store all shares in the same location or medium

2. Never store shares digitally if they protect a seed phrase

3. One share at home, one with a trusted third party, one in a geographically 

   separate location — never a close relative who could be identified

4. The reconstruction moment is your most vulnerable moment — 

   prepare the environment accordingly

5. A share alone reveals nothing. Protect the schema (how many, what threshold), 

   not just the shares.

6. Test your reconstruction before you need it

Small disclaimer below: 

"This demo runs entirely in your browser. Nothing is transmitted. 

Use for educational purposes. For production implementations protecting 

significant value, consult a specialist."

---

### Section 5 — What Exists Above This

Title: "SSS is a strong foundation. There are levels above."

Body text (2-3 short paragraphs):

- Explain briefly that SSS has one structural limitation: 

  the secret must be reconstructed at some point, creating a moment of exposure

- Mention that institutional environments use architectures where 

  the secret is *never* reconstructed in full — distributed computation 

  allows signing without any single party holding the complete key

- These approaches (used by major custody providers and financial institutions) 

  are becoming accessible but require careful, contextual implementation

End with: 

"The right architecture depends on your threat model, your holdings, 

and your operational constraints. There is no universal answer."

DO NOT name specific technologies beyond "distributed threshold computation" 

or "institutional-grade signing schemes". The point is to show the horizon exists, 

not to document it.

---

### Section 6 — CTA (Contact)

Title: "Your situation is unique. Your architecture should be too."

Body (3 lines max):

"A recommendation without context is a bad recommendation. 

I offer tailored security architecture consultations for Bitcoin holders — 

from threat model assessment to implementation guidance."

Three service tiers displayed as clean horizontal blocks (no prices):

**Security Audit & Threat Assessment**

We define who you're protecting against and map your current exposure.

**Architecture Recommendation**

A written, personalized document detailing the architecture adapted to your profile 

and holdings. Implementation remains your responsibility.

**Guided Implementation**

Step-by-step guidance as you implement. I never touch your keys. Ever.

Below the tiers, a small legal disclaimer (subtle, small font):

"All services are advisory in nature. Implementation decisions and operational 

responsibility remain solely with the client. I hold no access to client funds or secrets."

CTA button (accent color, clean): "Request a consultation"

Clicking opens a simple mailto or a minimal contact form (name, email, message).

---

### Footer

Minimal. One line: 

"Bitcoin security architecture · Advisory services · [Your name or handle]"

No social links unless you want to add LinkedIn manually later.

---

## TECHNICAL REQUIREMENTS

- React single page app

- Use secrets.js-grempe for SSS. Attempt to load via CDN first:

  https://cdn.jsdelivr.net/npm/secrets.js-grempe/secrets.min.js

  If the CDN import fails or the library is not available in the environment, 

  automatically fall back to installing it as an npm dependency 

  (npm install secrets.js-grempe) and import it accordingly — 

  handle this without requiring any manual intervention.

- No backend required, fully static

- Fully responsive (mobile first)

- No cookie banners, no analytics, no tracking

- The SSS demo must work completely client-side

- Error states on the demo must be handled gracefully

- All SVG illustrations (wrench comic, share diagram) must be original, 

  built inline in the component — no external image assets required

- Smooth scroll between sections

- Section 4 demo state resets cleanly when switching between SPLIT and RECONSTRUCT modes

---

## WHAT TO AVOID

- No purple gradients

- No generic crypto iconography (coins, rockets, moon references)

- No "we" language — this is a solo expert, not a company

- No promises of invulnerability anywhere on the site

- No detailed MPC implementation instructions

- No prices — consultation pricing is discussed after first contact