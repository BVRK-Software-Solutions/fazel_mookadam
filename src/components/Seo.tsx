import { useEffect } from 'react'

export default function Seo() {
    useEffect(() => {
        const configuredUrl = import.meta.env.VITE_SITE_URL?.trim()
        const canonicalUrl = configuredUrl
            ? new URL(import.meta.env.BASE_URL, configuredUrl).href
            : new URL(import.meta.env.BASE_URL, window.location.origin).href

        let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
        if (!canonical) {
            canonical = document.createElement('link')
            canonical.rel = 'canonical'
            document.head.appendChild(canonical)
        }
        canonical.href = canonicalUrl

        let openGraphUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
        if (!openGraphUrl) {
            openGraphUrl = document.createElement('meta')
            openGraphUrl.setAttribute('property', 'og:url')
            document.head.appendChild(openGraphUrl)
        }
        openGraphUrl.content = canonicalUrl
    }, [])

    return null
}
