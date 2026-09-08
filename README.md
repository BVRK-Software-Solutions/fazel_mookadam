# Dr Fazel Mookadam — Practice Website

A responsive, frontend-only practice website built with React, TypeScript, Vite, and Tailwind CSS.

## Development

```powershell
npm install
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173`.

## Quality checks

```powershell
npm run lint
npm run format:check
npm run build
npm run preview
```

Run `npm run format` to format the full project. Prettier is configured with the Tailwind CSS plugin, so utility classes are kept in a consistent order.

The production-ready static site is generated in `dist/` and can be deployed to any static host.

## Structure

- `src/App.tsx` — page composition
- `src/components/` — reusable React sections and UI components
- `src/data.ts` — typed practice details and opening hours
- `src/index.css` — Tailwind import, brand theme tokens, and a small global layer
- `public/logo-mark.svg` — prescription-inspired calligraphic F logo
- `public/favicon.svg` — matching browser favicon
- `assets/` — supplied visiting card and prescription references

There is no backend, database, form submission, tracking, or patient-data collection.

## Information notes

Practice identity, registration, address, telephone, mobile, and email details were transcribed from the supplied visiting card and prescription. Public directories were used to cross-check the GP speciality, address, telephone number, and published opening hours. Because those sources disagree on operating hours, the website asks visitors to call ahead.

Sources consulted:

- [Medpages practitioner profile](https://www.medpages.info/sf/index.php?page=person&personcode=59725)
- [Waze place profile and detailed hours](https://www.waze.com/live-map/directions/za/gp/centurion/dr-fazel-mookadam?to=place.ChIJC2hlTDJ9lR4RvCadxTCajUY)
- [GEMS family practitioner network directory](https://www.gems.gov.za/-/media/Healthcare-Providers-PDFS/network-of-healthcare-providers-pdfs-monthly-update/Primary-healthcare/Family-Practitioner/REO/REO1_014GP.pdf)
- [Discovery Flexicare GP Network](https://mso.discoveryholdings.com/assets/discoverycoza/employers-and-group-admin/flexicare/flexicare-gp-network-list.pdf)
- [South African Government emergency contact guidance](https://www.gov.za/news/media-statements/reporting-emergency-calls-11-dec-2013)

Design-pattern research:

- [Doctive medical website examples](https://www.doctive.org/portfolio)
- [Modern Family Medicine](https://modernfamilymedicine.com/about-us/)
- [South African medical-practice website guidance](https://www.jwd.co.za/website-design-for-medical-practices-south-africa/)
- [Tabflows primary-care website examples](https://www.tabflows.com/blog/dpc-website-examples)

The hero uses the supplied photograph of Dr Mookadam from [the provided source](https://yusratours.co.za/wp-content/uploads/2024/09/1-3.jpg), stored locally in `assets/dr-fazel-mookadam.jpg`.

Before publishing, the doctor or practice manager should verify the displayed hours and confirm which medical-aid arrangements and services may be advertised.
