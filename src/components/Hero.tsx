import { ArrowUpRight, BadgeCheck, MapPin, Phone } from 'lucide-react'
import doctorImage from '../../assets/dr-fazel-mookadam.jpg'
import { hours, practice } from '../data'

export default function Hero() {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' }))
    const today = hours.find(({ dayIndex }) => dayIndex === now.getDay())!
    const currentTime = now.getHours() + now.getMinutes() / 60
    const isOpen = today.periods.some(([start, end]) => currentTime >= start && currentTime < end)
    return (
        <section
            id="top"
            className="relative overflow-hidden bg-[linear-gradient(124deg,#f7f5ee_0_61%,#edf7f3_61%_100%)] pt-32 md:pt-40"
        >
            <div
                aria-hidden="true"
                className="border-accent/15 absolute top-24 -right-64 size-[520px] rounded-full border shadow-[0_0_0_70px_rgba(116,99,167,.03)]"
            />
            <div className="relative mx-auto grid min-h-[590px] w-[min(1160px,calc(100%-2rem))] items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
                <div className="motion-safe:animate-[fade-up_.7s_ease-out_both]">
                    <p className="text-brand-800 mb-5 flex items-center gap-2.5 text-[11px] font-extrabold tracking-[.2em] uppercase">
                        <span className="h-px w-5 bg-current" /> Community GP · Laudium, Centurion
                    </p>
                    <h1 className="font-display text-brand-950 text-[clamp(3.5rem,7vw,5.4rem)] leading-[.96] tracking-[-.05em]">
                        Everyday care.
                        <br />
                        <em className="text-accent font-normal">Close to home.</em>
                    </h1>
                    <p className="my-7 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                        Thoughtful, accessible general practice care for individuals and families in
                        the Laudium community.
                    </p>
                    <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-center">
                        <a
                            href={`tel:${practice.phoneHref}`}
                            className="bg-brand-800 shadow-brand-800/20 hover:bg-brand-950 inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                        >
                            <Phone className="size-4" /> Call {practice.phone}
                        </a>
                        <a
                            href="#contact"
                            className="border-brand-600/40 text-brand-800 inline-flex items-center gap-1 self-center border-b pb-0.5 text-sm font-bold"
                        >
                            Get directions <ArrowUpRight aria-hidden="true" className="size-4" />
                        </a>
                    </div>
                    <div className="text-muted mt-8 flex flex-col gap-2 text-xs font-semibold sm:flex-row sm:gap-6">
                        <span className="flex items-center gap-2">
                            <BadgeCheck className="text-brand-600 size-4" /> Registered practitioner
                        </span>
                        <span>Practice no. {practice.practiceNumber}</span>
                    </div>
                </div>
                <div className="relative mx-auto min-h-[500px] w-full max-w-[570px] motion-safe:animate-[fade-up_.7s_.12s_ease-out_both] motion-safe:opacity-0 md:min-h-[590px]">
                    <div className="shadow-soft absolute top-0 right-[4%] h-[460px] w-[min(370px,90%)] overflow-hidden rounded-t-[11rem] rounded-b-3xl bg-linear-to-br from-[#cfe5dd] to-[#e4ddf0] md:right-14 md:h-[540px] md:w-[410px]">
                        <img
                            src={doctorImage}
                            alt="Dr Fazel Mookadam"
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="from-brand-950/90 absolute inset-x-0 bottom-0 h-40 bg-linear-to-t to-transparent" />
                        <div className="absolute right-8 bottom-7 left-8 text-white">
                            <span className="font-display block text-2xl">Dr Fazel Mookadam</span>
                            <small className="mt-1 block text-[10px] font-bold tracking-[.15em] text-white/70 uppercase">
                                M.D. · General Practitioner
                            </small>
                        </div>
                    </div>
                    <div className="absolute top-10 left-0 flex items-center gap-3 rounded-xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
                        <span
                            className={`size-2.5 rounded-full ${isOpen ? 'bg-emerald-500 ring-4 ring-emerald-500/10' : 'bg-red-500 ring-4 ring-red-500/10'}`}
                        />
                        <div>
                            <small className="text-muted block text-[9px] tracking-widest uppercase">
                                Today’s hours
                            </small>
                            <strong className="text-xs">{today.label}</strong>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-10 flex items-center gap-3 rounded-xl border border-white bg-white/90 px-4 py-4 shadow-xl backdrop-blur">
                        <MapPin className="text-accent size-6" />
                        <div>
                            <strong className="block text-xs">H.S. Ebrahim Centre</strong>
                            <small className="text-muted text-[10px]">
                                140 Bengal Street, Laudium
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-brand-950 relative mx-auto grid w-[min(1160px,calc(100%-2rem))] divide-y divide-white/10 rounded-t-2xl text-white md:grid-cols-3 md:divide-x md:divide-y-0">
                {[
                    ['01', 'Located in', 'Central Laudium'],
                    ['02', 'Hours begin', '10:00 most days'],
                    ['03', 'Appointments', 'Call ahead'],
                ].map(([number, label, value]) => (
                    <div key={number} className="flex items-center gap-4 px-7 py-5">
                        <span className="font-display text-accent-light text-xl italic">
                            {number}
                        </span>
                        <p>
                            <small className="block text-[9px] font-bold tracking-widest text-white/50 uppercase">
                                {label}
                            </small>
                            <strong className="font-display font-normal">{value}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
