You are a world-class web designer and developer who builds premium medical/wellness clinic websites worth $10,000-$20,000. Build a complete Next.js 14+ (App Router, TypeScript, Tailwind CSS) multi-file project for a podology clinic (foot and nail care specialist).

DO NOT output a single HTML file. Output a proper Next.js project with separate component files, organized as described below. This must be a real, scalable codebase — not a self-contained demo page.

═══════════════════════════════════════
STEP 1 — BUSINESS INFORMATION
═══════════════════════════════════════
Business type: Podology clinic (foot & nail care — ingrown nails, fungal nail treatment, diabetic foot care, hardware pedicure, callus/corn removal).
City: Irkutsk, Russia. Language: Russian (all copy, labels, buttons — in Russian).
If specific details (name, phone, exact price list) are missing, use realistic confident defaults that fit a solo/boutique podology practice. Never use lorem ipsum or placeholder text — every word must read as written specifically for this business.

═══════════════════════════════════════
STEP 2 — DESIGN PERSONA: MEDICAL / WELLNESS (PREMIUM, NOT CLINICAL)
═══════════════════════════════════════
Colors: White #FFFFFF base, sage/teal #4F9A8F accent, warm off-white #FAF7F2 sections, dark charcoal #22282B text. Avoid saturated "hospital blue" — this should feel like a boutique wellness studio, not an ER.
Fonts: "Manrope" or "Plus Jakarta Sans" for headings (600-700 weight), "Inter" for body.
Feel: calm, precise, trustworthy, personal — a specialist you'd trust with your feet, not a faceless clinic chain.
Image keywords: pedicure/foot care close-up, clean treatment room, hands working with medical tools, calm spa-adjacent interior. Never use graphic/clinical wound imagery.

═══════════════════════════════════════
STEP 3 — PROJECT STRUCTURE
═══════════════════════════════════════
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  TrustMarquee.tsx
  TrustStats.tsx
  Services.tsx           (tabbed pricing table, see Section 5)
  WhyChooseUs.tsx         (numbered 01-06 grid, see Section 6)
  CareGuidelines.tsx      (before/after procedure checklist, see Section 7)
  Testimonials.tsx        (Swiper carousel)
  CTABanner.tsx
  ContactForm.tsx
  Footer.tsx
  CallButton.tsx          (fixed click-to-call/write-in-messenger button)
lib/
  data.ts                 (all business copy: services, prices, testimonials, stats — as typed exported objects, not hardcoded inline in components)

Use TypeScript interfaces for all data shapes (Service, PriceTier, Testimonial, TrustStat). Import content from lib/data.ts into components — this is what makes it scalable/editable later without touching component code.

Dependencies: framer-motion, swiper, react-countup, lucide-react (icons). No GSAP, no AOS, no Splitting.js, no tsParticles, no Vanilla Tilt, no jQuery-era libraries — keep the stack lean and React-native.

═══════════════════════════════════════
SECTION 1 — HEADER
═══════════════════════════════════════
Sticky, transparent on load, transitions to solid white + blur + shadow after 80px scroll (useEffect + scroll listener, or framer-motion useScroll). Logo/clinic name left. Right: nav links (Услуги, Врач, Отзывы, Контакты), phone number, CTA button "Записаться". Mobile: hamburger → full-screen overlay menu with framer-motion AnimatePresence.

═══════════════════════════════════════
SECTION 2 — HERO
═══════════════════════════════════════
Split layout, left 55% / right 45%, full viewport height.
Left: eyebrow label "ПОДОЛОГИЯ В ИРКУТСКЕ", headline (write a specific 5-7 word headline about healthy, pain-free feet — not generic), subheadline (2 sentences, specific to the practice), two CTAs ("Записаться на приём" primary, "Позвонить" secondary), trust line ("Медицинская лицензия · N лет практики · N+ довольных пациентов").
Animate headline words in with framer-motion stagger (split manually into <span> words, no external splitting library needed).
Right: image with soft rounded clip (border-radius, not diagonal clip-path — softer feels more medical/trustworthy than aggressive angles), floating badge ("Приём с ... года"), subtle floating animation via framer-motion.
Mobile: hide right image, single column.

═══════════════════════════════════════
SECTION 3 — TRUST MARQUEE
═══════════════════════════════════════
CSS-only infinite scroll strip directly below hero, accent color background. Items: "Медицинская лицензия · Стерильные одноразовые инструменты · N лет практики · Индивидуальный подход · Приём по записи ·"

═══════════════════════════════════════
SECTION 4 — TRUST STATS
═══════════════════════════════════════
5 stats row (2x2+1 on mobile), animate count-up on scroll into view with react-countup + Intersection Observer trigger. Icons from lucide-react. Choose stats fitting a solo podology practice: years of practice, patients treated, average rating, response time, something specific (e.g. "0 болезненных процедур" is too gimmicky — pick real credible numbers).

═══════════════════════════════════════
SECTION 5 — SERVICES & PRICING (tabbed, inspired by laserlove.ru reference)
═══════════════════════════════════════
Tabbed interface, 2-3 categories (e.g. "Подология", "Аппаратный маникюр/педикюр", "Уход за ногтями"). Tab switch animates content with framer-motion (AnimatePresence, fade+slight slide).
Each category shows a grid/list of services as cards: service name, short description, price (и, если уместно, "абонемент" на курс процедур — see laserlove pattern of session price + package price). Keep it simple — this is the single most important section for a medical business, since patients want clear pricing before booking. Data comes from lib/data.ts, typed.

═══════════════════════════════════════
SECTION 6 — WHY CHOOSE US (numbered 01-06 grid, inspired by laserlove reference)
═══════════════════════════════════════
Dark or warm-tinted background section, numbered items 01 through 06 (large faded number behind/beside each), each with a short headline and 1-2 sentence description. For podology, use real trust factors: медицинская лицензия, стерилизация и одноразовые инструменты, профильное образование/сертификаты, индивидуальный подход к каждому пациенту, современное оборудование, положительные отзывы. This replaces generic checkmark lists — the numbered layout reads as more substantial/premium.

═══════════════════════════════════════
SECTION 7 — CARE GUIDELINES (new section, inspired by laserlove's prep/aftercare block — has no equivalent in generic templates, but is essential for medical services)
═══════════════════════════════════════
Two-column accordion or toggle: "Перед процедурой" / "После процедуры". List realistic podology pre/post-care recommendations (e.g. не наносить крем на зону обработки в день приёма; после процедуры избегать тесной обуви N дней; и т.п. — write these as plausible professional guidance, not medical claims requiring citation). Use check/cross icons (lucide-react Check / X). This section builds medical credibility that a generic services grid can't.

═══════════════════════════════════════
SECTION 8 — TESTIMONIALS
═══════════════════════════════════════
Swiper React carousel (loop, autoplay, centeredSlides on mobile, 3-up on desktop — same config pattern as before). Write 5 specific, varied testimonials mentioning specific procedures and outcomes. No "Отлично, всё понравилось!" — each must sound like a real patient.

═══════════════════════════════════════
SECTION 9 — CTA BANNER
═══════════════════════════════════════
Centered, light warm background. Large headline with a specific offer (e.g. free initial consultation or diagnostic). Large click-to-call phone number. Reassurance line below CTA button.

═══════════════════════════════════════
SECTION 10 — CONTACT
═══════════════════════════════════════
Two columns: left = contact info (phone, address, hours, links to Telegram/Max/WhatsApp — client already uses Max, so include it explicitly as a booking channel alongside phone), right = simple form (Имя, Телефон, Услуга — select from lib/data.ts services list, Комментарий optional). On submit: client-side success state only for the prototype (no backend yet — comment in code exactly where to wire a real submit handler, e.g. `// TODO: POST to /api/contact once backend is ready`).

═══════════════════════════════════════
SECTION 11 — FOOTER
═══════════════════════════════════════
4-column: Brand + tagline + socials, Услуги (links to service anchors), Контакты, Быстрые ссылки. Bottom bar with copyright + "Лицензия №..." placeholder.

═══════════════════════════════════════
FIXED ELEMENT — CLICK TO CONTACT
═══════════════════════════════════════
Fixed bottom-right circular button, pulsing glow animation (framer-motion or CSS keyframes), opens a small menu on click/hover offering "Позвонить" / "Написать в Max" / "Написать в Telegram" rather than a single phone-only action — since this client's actual clients likely reach her via messenger, not calls.

═══════════════════════════════════════
QUALITY GATE
═══════════════════════════════════════
Before output, confirm:
☐ Real Next.js project structure with separate files, not one HTML file
☐ All business copy lives in lib/data.ts as typed data, not hardcoded in JSX
☐ Framer Motion used for all animation (no GSAP/AOS/Splitting/tsParticles/VanillaTilt)
☐ Services section has working tabs with real prices
☐ Why Choose Us uses the numbered 01-06 layout, medically-relevant content
☐ Care Guidelines (before/after) section exists — this is the section most templates miss
☐ Contact section includes Max/Telegram as booking channels, not just phone
☐ Every word of copy is specific to a podology practice, zero placeholder text
☐ Code compiles with `npm install && npm run dev` with no missing imports

Output the full file tree and the complete code for every file listed in Step 3.