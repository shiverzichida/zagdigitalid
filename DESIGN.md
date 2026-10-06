# ZAG Digital — Design System & Visual Guidelines
<!-- Impeccable Design Standard for AI & Engineers -->

## 1. Product Identity & Brand Voice
- **Name:** ZAG Digital Indonesia (CV IT Konsultan)
- **Domain:** [zagdigitalid.com](https://zagdigitalid.com)
- **Positioning:** High-End Software Engineering, Enterprise Information Systems (Logistics / ERP), and Smart Hardware IoT (Face ID Gates & Biometric Lockers).
- **Visual Voice:** Precise, Architectural, Modern, Trustworthy, Restrained Enterprise.
- **Target Audience:** Business Owners, Operations Directors, IT Managers, and Entrepreneurs who value rock-solid stability and real execution over gimmicks.

---

## 2. Core Design Principles (Anti "AI Slop")

### ❌ What We Strictly Avoid:
1. **No Meaningless Neon Blobs:** No excessive random purple/pink blurs that serve no navigational or content purpose.
2. **No "Cards Nested in Cards":** Do not put boxed cards inside another heavy boxed card. Use whitespace, subtle dividers, and typography hierarchy instead of repetitive borders.
3. **No Low-Contrast Text:** Text must never blend into dark backgrounds. Secondary text must meet WCAG AA contrast standards ($\ge$ 4.5:1 ratio).
4. **No Cluttered Gradients:** Gradients are reserved exclusively for primary CTA buttons and subtle hero accent headlines—never on ordinary body elements.
5. **No Decorative Bloat:** Every badge, icon, and button must communicate a real piece of information or action.

### ✅ What We Enforce:
1. **Intentional Hierarchy:** The most important action (WhatsApp Consultation) must be unmistakably clear on every viewport.
2. **Tactile Micro-Interactions:** Buttons have active scaling (`active:scale-[0.98]`), borders brighten on hover (`hover:border-cyan-500/50`), and transitions are swift ($150\text{ms} - 250\text{ms}$).
3. **Proof-First Presentation:** Emphasize live links, real screenshots, verified metrics, and contractual guarantees (e.g., 30-Day Free Minor Maintenance).
4. **Responsive Integrity:** Flawless layout on 360px mobile viewports through 4K displays.

---

## 3. Color Tokens & Semantic Usage

```
Background Primary   : #070a12 (Deep Cosmic Slate)
Background Surface   : #0c1322 (Elevated Card Surface)
Background Hover     : #131d33 (Interactive Hover Surface)

Border Subtle        : rgba(255, 255, 255, 0.08)
Border Hover         : rgba(6, 182, 212, 0.40) (Cyan 500 Glow)

Text Primary         : #f8fafc (Slate 50 - High Crisp Readability)
Text Secondary       : #cbd5e1 (Slate 300 - High Contrast Description)
Text Muted           : #94a3b8 (Slate 400 - Metadata & Labels)

Accent Cyan          : #06b6d4 (Cyan 500 - Primary Brand Accent)
Accent Sky           : #38bdf8 (Sky 400 - Highlight Text)
Accent Emerald       : #10b981 (Emerald 500 - Active Status / WhatsApp)
Accent Indigo        : #6366f1 (Indigo 500 - Secondary Tech Accent)
```

---

## 4. Typography Scale

- **Display Headline:** `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight`
- **Section Heading (H2):** `text-3xl sm:text-4xl font-extrabold tracking-tight text-white`
- **Card Heading (H3):** `text-xl font-bold text-white`
- **Body Regular:** `text-sm sm:text-base text-slate-300 leading-relaxed`
- **Micro / Badge:** `text-xs font-mono tracking-wider font-semibold`
- **Fonts:**
  - Primary UI: `Plus Jakarta Sans`, sans-serif
  - System / Monospace: `JetBrains Mono`, monospace

---

## 5. Spacing & Rhythm System
- **Section Vertical Padding:** `py-20 md:py-28`
- **Component Gap:** `gap-4 sm:gap-6 lg:gap-8`
- **Card Inner Padding:** `p-6 sm:p-7`
- **Button Padding:** `px-5 py-3 rounded-xl font-semibold`

---

## 6. Component Checklist for Future Extensions
When adding new pages or features:
- [ ] Is contrast verified for dark mode?
- [ ] Are mobile tap targets $\ge 44\times 44$ px?
- [ ] Are external links decorated with clear icons and `rel="noopener noreferrer"`?
- [ ] Does it avoid nested container cards?
- [ ] Is there an immediate route to WhatsApp (`089619320345`)?
