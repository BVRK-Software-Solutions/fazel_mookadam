import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { practice } from '../data'
import Brand from './Brand'

const links = [
    ['About', '#about'],
    ['Patient care', '#care'],
    ['Hours', '#hours'],
    ['Contact', '#contact'],
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-brand-950/5 border-b border-black/5 bg-white/90 py-3 shadow-lg backdrop-blur-xl' : 'bg-transparent py-4 md:py-6'}`}
        >
            <div className="mx-auto flex w-[min(1160px,calc(100%-2rem))] items-center justify-between">
                <Brand />
                <button
                    type="button"
                    className="text-brand-950 rounded-lg p-2 md:hidden"
                    aria-expanded={open}
                    aria-controls="site-nav"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                    <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                </button>
                <nav
                    id="site-nav"
                    aria-label="Main navigation"
                    className={`${open ? 'flex' : 'hidden'} shadow-soft absolute top-20 right-4 left-4 flex-col rounded-2xl border border-black/5 bg-white p-3 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
                >
                    {links.map(([label, href]) => (
                        <a
                            key={href}
                            onClick={() => setOpen(false)}
                            href={href}
                            className="hover:bg-brand-50 hover:text-brand-800 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition md:p-0 md:hover:bg-transparent"
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href={`tel:${practice.phoneHref}`}
                        className="bg-brand-800 shadow-brand-800/15 hover:bg-brand-950 mt-1 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 md:mt-0"
                    >
                        Call the practice
                    </a>
                </nav>
            </div>
        </header>
    )
}
