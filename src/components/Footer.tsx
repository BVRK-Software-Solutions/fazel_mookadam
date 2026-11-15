import { Phone } from 'lucide-react'
import { practice } from '../data'
import Brand from './Brand'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const copyrightYears = currentYear === 2026 ? '2026' : `2026 - ${currentYear}`

    return (
        <>
            <section
                aria-label="Emergency information"
                className="bg-[#493f66] px-4 py-6 text-white"
            >
                <div className="mx-auto flex max-w-[1160px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <strong className="font-display text-lg font-normal">
                            This practice is not an emergency service.
                        </strong>
                        <span className="block text-xs text-white/65">
                            For a life-threatening emergency, call 112 from a mobile or 10177 for an
                            ambulance.
                        </span>
                    </div>
                    <a
                        href="tel:112"
                        className="rounded-lg border border-white/40 px-5 py-2 text-sm font-bold"
                    >
                        Call 112
                    </a>
                </div>
            </section>
            <footer className="bg-[#062f29] px-4 pt-15 pb-24 text-white/60 md:pb-7">
                <div className="mx-auto max-w-[1160px]">
                    <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-center">
                        <Brand light />
                        <nav className="flex flex-wrap gap-6 text-xs">
                            <a href="#about" className="hover:text-white">
                                About
                            </a>
                            <a href="#care" className="hover:text-white">
                                Patient care
                            </a>
                            <a href="#hours" className="hover:text-white">
                                Hours
                            </a>
                            <a href="#contact" className="hover:text-white">
                                Contact
                            </a>
                        </nav>
                        <p className="text-xs">Serving Laudium & greater Centurion</p>
                    </div>
                    <div className="flex flex-col justify-between gap-2 pt-6 text-[10px] tracking-wide md:flex-row">
                        <span>© {copyrightYears} Dr Fazel Mookadam</span>
                        <span>
                            Practice no. {practice.practiceNumber} · HPCSA {practice.hpcsaNumber}
                        </span>
                        <span>Information on this site is not medical advice.</span>
                    </div>
                </div>
            </footer>
            <div className="fixed inset-x-0 bottom-0 z-50 bg-white p-2.5 shadow-[0_-7px_25px_rgba(7,61,52,.12)] md:hidden">
                <a
                    href={`tel:${practice.phoneHref}`}
                    className="bg-brand-800 flex items-center justify-center gap-2 rounded-lg p-3 text-sm font-bold text-white"
                >
                    <Phone className="size-4" /> Call the practice
                </a>
            </div>
        </>
    )
}
