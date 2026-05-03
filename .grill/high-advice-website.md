# Grill: High Advice Website
Date: 2026-05-03

## Intent
Convert two distinct visitor types: (1) gérant in crisis mode who needs to act NOW, (2) patient comparer who is evaluating cabinets. Website currently serves neither well — too generic for the first, too low-friction-CTA for the second.

## Constraints
- Proof must be real, not invented. Fictional testimonials are a liability with a skeptical audience.
- WhatsApp availability claim (2h response, weekends) must be actually sustainable — it is a promise made in public.
- Callback model requires someone at High Advice to actually call leads back within a reasonable window.

## Key decisions
- **Decision:** Replace generic hero headline with crisis-specific copy. **Reason:** gérant's 11pm thought is "ma déclaration IS est dans 3 jours" — not "je cherche un conseil à haute valeur." **Alternative considered:** keeping aspirational brand headline — rejected because it fails the 5-second recognition test.
- **Decision:** Add floating WhatsApp button with pre-filled message. **Reason:** 2h WhatsApp response is the real differentiator — it must be the primary CTA, not buried in footer. **Alternative considered:** phone call CTA — rejected, higher friction for a gérant who may be in a meeting.
- **Decision:** Replace email mailto CTA with embedded callback form (name, phone, dropdown). **Reason:** email is highest-friction CTA — blank email kills patient visitor conversion. **Alternative considered:** keep email — rejected because High Advice confirmed callback capacity.
- **Decision:** Two visitors, two jobs. Homepage converts the urgent one. Service pages educate the patient one. **Reason:** different decision states require different content depth and CTA types.

## Surfaced assumptions
- Testimonials on current site are fictional — gérant audience is skeptical, will not trust generic quotes.
- "Réponse en 2h WhatsApp" is the actual differentiator but does not appear anywhere on the site.
- Hero headline could belong to any professional services firm — zero specificity to the gérant's actual pain.
- Service pages currently have no form — only a mailto link that opens blank email client.

## Open questions
- What is the real WhatsApp number for High Advice?
- When will authentic client testimonials (specifically mentioning weekend/urgent response) be available?
- What is the target callback window once form is submitted — same day? 2 hours?

## Out of scope
- No redesign of visual identity or color system — brand guide followed.
- No backend/server — static HTML only, form will need a third-party service (Formspree, etc.) or WhatsApp redirect.
