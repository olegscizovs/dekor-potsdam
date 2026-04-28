# Project: Luxury Decorative Plaster One-Pager

# Project: Luxury Decorative Plaster One-Pager (Secure Architecture)

## 1. Security Protocol (Post-2025/26 Standards)
- **Package Manager:** Use `pnpm` exclusively for strict content-addressable storage and speed.
- **Environment Hardening:** 
  - Create `.npmrc` with `ignore-scripts=true`.
  - Use exact versions in `package.json` (No `^` or `~`).
  - 72-hour cooldown: Do not use packages published within the last 3 days.
- **Automated Defense:** Implement GitHub Actions with `lockfile-lint` to prevent malicious injection.

## 2. Phased Workflow Strategy
- **Phase 1:** Core Boilerplate + Sections 1 (Hero) & 2 (About).
- **Phase 2:** Sections 3 (Highlights) & 4 (Gallery).
- **Phase 3:** Sections 5 (Contacts) & 6 (Footer) + i18n Logic.
- **Phase 4:** Performance tuning (Parallax smoothing & Refinement).

## 3. Site Specification
- **Visuals:** "Ultra-Dark" theme. Use `https://unsplash.com` for high-quality plaster texture placeholders.
- **Animations:** Linear/Square scroll animations using Intersection Observer.
- **Navigation:** Burger menu + Back-to-Top button. Keyboard navigable via `tabindex` and semantic `<button>`/`<a>` tags.

## 1. Architectural Vision
- **Theme:** Ultra-Dark premium aesthetic. 
- **Navigation:** Single-page smooth scroll with a persistent "Back to Top" button and a mobile-friendly burger menu.
- **Multi-language:** Implementation of a lightweight i18n system for German (DE), English (EN), and Russian (RU).

## 2. Section Specifications
- **Hero:** 
  - Top-Left: SVG Logo (CSS rotation animation) with static adjacent text.
  - Center: H1 Hero Text, subtext, and a CTA button that triggers a smooth scroll to Section 2.
- **Section 2 (About):** 50/50 split layout. Responsive "Text & Image" blocks that alternate or stack on mobile.
- **Section 3 (Highlights):** Horizontal card slider. Smooth CSS transitions triggered by `<button>` elements (Left/Right).
- **Section 4 (Gallery):** Dynamic masonry or grid gallery. Implement a secure "Lightbox" effect (full-screen modal) using keyboard-accessible triggers.
- **Section 5 (Contacts):** Text-based contact info (Phone, Email, Address). No clickable `href` tags as per user request to prevent unintended redirects.
- **Section 6 (Footer):** Semantic `<footer>` with a site map linked to all internal IDs.

## 3. Interaction & Animation
- **Parallax/Scroll:** Implement linear or square-motion background elements that respond to the scroll position.
- **Smoothness:** Use `scroll-behavior: smooth` in CSS and `requestAnimationFrame` for custom JS animations to ensure 60fps performance.
- **Keyboard Access:** All interactive elements (`buttons`, `links`) must have clear `:focus` states and proper `tabindex`.

## 4. Prompt Injection & XSS Mitigation
- **Sanitized i18n:** The JSON translation loader must treat all values as static strings. Use a "Strict Mode" loader that rejects any string containing `<script>` or `javascript:` protocols.
- **Safe Image Handling:** When fetching images from Unsplash or dynamic sources, validate the URL structure and prevent the use of `onerror` attributes which are common XSS vectors.
- **Isolated Context:** Maintain a clear boundary between the Agent's system instructions and the website's dynamic content.

## 5. Security & Performance
- **Image Security:** Implement strict `alt` tags and lazy-loading. Use `rel="noopener noreferrer"` for any external links in the future.
- **Content Sanitization:** Ensure the language switching logic does not use `eval()` or dangerous DOM sinks.
- **Responsiveness:** Use `clamp()` for fluid typography and media queries for breakpoint management.

