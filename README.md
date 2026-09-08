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

## Share a prototype with GitHub Pages

This repository includes `.github/workflows/deploy-pages.yml`. It builds the Vite application and publishes only the generated `dist/` directory whenever `main` changes. The Vite build uses relative asset paths, so it works at a repository URL such as `https://YOUR-USERNAME.github.io/REPOSITORY/`.

### First deployment

1. Create an empty repository on GitHub. A public repository works with GitHub Free.
2. From this project folder, commit the project and push it to the repository's `main` branch:

    ```powershell
    git init
    git add .
    git commit -m "Deploy Dr Mookadam prototype"
    git branch -M main
    git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY.git
    git push -u origin main
    ```

    Skip `git init`, `git branch`, or `git remote add` when the repository is already configured.

3. On GitHub, open the repository and go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for **Deploy prototype to GitHub Pages** to finish.
6. Open the URL shown by the completed deployment. It will normally be `https://YOUR-USERNAME.github.io/REPOSITORY/`.

Every later push to `main` rebuilds and republishes the prototype. You can also run it manually from **Actions → Deploy prototype to GitHub Pages → Run workflow**.

### Bring the prototype down

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Next to the message showing the live site, open the `…` menu and choose **Unpublish site**.
3. Disable or remove `.github/workflows/deploy-pages.yml` if you do not want a later push or manual workflow run to publish the site again.

Unpublishing removes the live deployment but keeps the repository and its code. To restore the prototype later, re-enable the workflow and run it again. See GitHub's [official unpublishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site).

## Production deployment on GoDaddy

These instructions target **GoDaddy Web Hosting (cPanel)**. GoDaddy Websites + Marketing does not provide a file manager for uploading an arbitrary Vite build. If the account only has Websites + Marketing, add a Web Hosting plan or deploy the static site elsewhere and point the GoDaddy domain to that host.

### 1. Prepare and verify the release

Run the complete release checks locally:

```powershell
npm ci
npm run format:check
npm run lint
npm run build
npm run preview
```

Review the preview URL before uploading. The deployable website is the **contents of `dist/`**, not the source repository or `node_modules/`.

### 2. Back up the existing website

Before replacing anything, open the GoDaddy product dashboard, select the Web Hosting account, and download or back up the current website. For the primary domain, the live directory is normally `public_html`. Keep this backup until the new site has been verified in production. GoDaddy also documents [cPanel website backups](https://www.godaddy.com/en-ca/help/what-is-a-website-backup-20318).

### 3. Upload the production files

1. In GoDaddy, open **My Products → Web Hosting → Manage**.
2. Open **File Manager** for the production domain.
3. Navigate to:
    - `public_html/` for the primary domain; or
    - the configured document root for an addon/subdomain.
4. Remove or archive the old site's files only after confirming the backup.
5. Upload the **contents inside `dist/`** so that `index.html` is directly inside the document root. Do not upload the `dist` folder as an extra nested directory.
6. Alternatively, transfer the same files with SFTP/FTP. GoDaddy's [FileZilla guide](https://www.godaddy.com/en-ca/help/move-my-cpanel-website-with-ftp-and-filezilla-31870) identifies `public_html` as the primary-domain root.

The website is frontend-only, so no Node.js process, database, environment variables, or server-side installation is required on GoDaddy.

### 4. Connect the domain and HTTPS

1. Assign the intended domain to the cPanel hosting account.
2. If DNS is not already connected, use the hosting account's IP address for the root-domain `A` record and point `www` to the root domain using the configuration shown by GoDaddy.
3. Allow DNS changes time to propagate; GoDaddy notes that global propagation can take up to 48 hours.
4. Enable the SSL certificate supplied with the hosting plan and force HTTPS from the GoDaddy/cPanel dashboard.
5. Verify both `https://example.com` and `https://www.example.com`, along with the phone, email, directions, favicon, and mobile navigation.

GoDaddy's troubleshooting guide confirms that cPanel sites belong in `public_html` and covers [domain, DNS, and document-root checks](https://www.godaddy.com/en-ca/help/my-website-isnt-displaying-1593).

### Future production updates

For each release, run the quality checks and `npm run build` again, back up the current live files, then replace them with the new **contents of `dist/`**. Keep at least one known-good build so a release can be rolled back by restoring its files.
