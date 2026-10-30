# VaelWeb — agency website

A responsive dark-mode agency website built with HTML, CSS and vanilla JavaScript. No build tools are required.

## Files
- `index.html` — main agency site, pricing and contact form
- `styles.css` and `portfolio-overrides.css` — styling and responsive project previews
- `script.js` — navigation, motion effects, pricing/contact interactions
- `projects/noir-photography/` — actual NOIR photography portfolio HTML project
- `projects/makgahlela-attorneys/` — actual Makgahlela Attorneys website project and assets

## Run locally
Open `index.html` in VS Code and use Live Server, or open the file directly in a browser. The portfolio cards load the actual project HTML bundled in this ZIP using local iframes; use the “Open live preview” links to inspect each project at full size.

## Before publishing
1. **Email:** the contact flow currently uses `hello@vaelweb.co.za` as a placeholder. Replace it with your real business email in `script.js` if different.
2. **Phone / WhatsApp:** no phone number was available in the conversation, so do not publish a guessed number. Add your number to the contact section and WhatsApp links after editing it.
3. **Contact delivery:** the demo form prepares an email in the visitor's email app; it does not send automatically or store enquiries. Connect a form provider (such as Formspree or Netlify Forms) for reliable submissions and automated confirmations.
4. **Pricing:** ranges are shown as supplied. Confirm scope, CMS requirements, domain/hosting fees, and handover terms in a written quote.
5. **Portfolio permission:** confirm you have permission to display each project and its assets before making the site public.
6. **Brand spelling:** the prompt used both “VaelWeb” and “ValeWeb”; this site uses “VaelWeb” consistently.

## Hosting
The site is static and can be deployed to GitHub Pages, Netlify, or another static host. Custom domains require DNS configuration with the chosen provider.
