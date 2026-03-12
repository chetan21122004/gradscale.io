

## Plan: Update All Content to GradScale

Replace all architecture content with GradScale's Skill & Training Development Program content. Keep the existing black-and-white minimalist theme, dark mode, typography classes, animations, and layout patterns exactly as they are.

### Files to Modify

**1. `src/components/Navigation.tsx`**
- "ARCH STUDIO" → "GRADSCALE"
- Nav links → anchor links: How It Works (`#how-it-works`), Why Join (`#why-join`), Portfolio (`#portfolio`), For Colleges (`#colleges`), FAQ (`#faq`)
- Add "Apply Now" CTA button in desktop nav
- Update mobile menu with same links + Apply Now button

**2. `src/components/Hero.tsx`**
- Remove background image, use solid dark background with gradient overlay
- Headline: "Turn Your Skills Into Real Income While Still in College"
- Sub-headline paragraph about the program
- 5 bullet highlights with checkmarks
- Two CTA buttons: "Apply for Program" and "Partner With Us (Colleges)"
- Keep reveal animations

### New Components (using existing design patterns)

**3. `src/components/StatsBar.tsx`** — Credibility section
- Title: "Helping Students Gain Real Business Exposure"
- 4-column grid: 16+ Client Projects, Unlimited Earning, Certified Program, 24/7 Mentorship
- Use existing `py-32 bg-muted` section pattern

**4. `src/components/IndustryNetwork.tsx`** — Partner companies
- Title: "Our Industry Network"
- Description paragraph
- Grid of 11 company names styled as cards
- Disclaimer text at bottom

**5. `src/components/WhatWeDo.tsx`** — replaces Services
- Title: "A Skill Development Program Focused on Real Business Exposure"
- Description + bullet list of skills students learn
- Mention internship pathway for top performers
- Reuse the numbered item layout from current Services

**6. `src/components/HowItWorks.tsx`** — 4-step process
- Title: "A Simple 4-Step Learning Journey"
- 4 steps with numbered layout (reuse Services pattern): Apply & Onboard, Skill Development, Practical Exposure, Performance Recognition

**7. `src/components/WhyJoin.tsx`** — Benefits
- 5 benefit cards: Performance-Based Earnings, Practical Skill Development, Real Business Exposure, Flexible Work Model, Certification & Career
- Grid layout similar to Services

**8. Update `src/components/Portfolio.tsx`**
- Title: "Projects Delivered Across Multiple Industries"
- Subtitle paragraph about learning opportunities
- Keep existing project card layout but replace with GradScale project names/categories (use placeholder images)

**9. `src/components/ForColleges.tsx`** — replaces About
- Title: "Helping Colleges Provide Practical Industry Exposure"
- Description + 5 bullet points of what GradScale provides
- CTA: "Download College Collaboration Proposal"
- Use About's two-column layout

**10. `src/components/FAQ.tsx`** — replaces Contact
- Title: "Frequently Asked Questions"
- 4 accordion items using existing Accordion component
- Questions: internship certificate, earning limits, technical knowledge, remote program

**11. `src/components/CTASection.tsx`** — Final CTA
- "Start Building Real Professional Skills"
- Description paragraph + Apply Now button + "Limited slots" note

**12. `src/components/Footer.tsx`**
- 4-column footer: GradScale tagline, Programs links, Company links, Connect (LinkedIn, Email)
- Copyright line

### Page & Route Changes

**13. `src/pages/Index.tsx`**
- Compose: Navigation → Hero → StatsBar → IndustryNetwork → WhatWeDo → HowItWorks → WhyJoin → Portfolio → ForColleges → FAQ → CTASection → Footer

**14. `src/App.tsx`**
- Remove routes for /work, /services, /about, /contact, /blog, /blog/:id
- Keep only `/` and `*`

**15. `index.html`**
- Title: "GradScale — Bridging the Gap Between Learning and Earning"
- Meta description updated

### What stays unchanged
- All CSS variables, Tailwind config, dark mode
- ThemeProvider, ThemeToggle
- All UI components (shadcn)
- Typography classes (text-architectural, text-minimal)
- Animation classes (reveal, reveal-delayed)
- Accessibility features (skip links, ARIA, focus styles)

