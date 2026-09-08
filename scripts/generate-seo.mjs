import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const outputDirectory = resolve('dist')
const configuredUrl = process.env.VITE_SITE_URL?.trim()

mkdirSync(outputDirectory, { recursive: true })

if (!configuredUrl) {
    writeFileSync(resolve(outputDirectory, 'robots.txt'), 'User-agent: *\nAllow: /\n')
    console.warn('SEO: VITE_SITE_URL is not set; sitemap generation was skipped.')
    process.exit(0)
}

const siteUrl = new URL(configuredUrl)
if (!siteUrl.pathname.endsWith('/')) siteUrl.pathname += '/'
const canonicalUrl = siteUrl.href
const sitemapUrl = new URL('sitemap.xml', canonicalUrl).href
const socialImageUrl = new URL('dr-fazel-mookadam.jpg', canonicalUrl).href
const lastModified = new Date().toISOString().slice(0, 10)
const escapedCanonicalUrl = canonicalUrl.replaceAll('&', '&amp;').replaceAll('"', '&quot;')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${escapedCanonicalUrl}</loc>
        <lastmod>${lastModified}</lastmod>
    </url>
</urlset>
`

writeFileSync(
    resolve(outputDirectory, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
)
writeFileSync(resolve(outputDirectory, 'sitemap.xml'), sitemap)

const indexPath = resolve(outputDirectory, 'index.html')
const indexHtml = readFileSync(indexPath, 'utf8')
    .replaceAll('https://yusratours.co.za/wp-content/uploads/2024/09/1-3.jpg', socialImageUrl)
    .replace(
        '</head>',
        `<link rel="canonical" href="${escapedCanonicalUrl}"><meta property="og:url" content="${escapedCanonicalUrl}"></head>`,
    )
writeFileSync(indexPath, indexHtml)
console.log(`SEO: generated robots.txt and sitemap.xml for ${canonicalUrl}`)
