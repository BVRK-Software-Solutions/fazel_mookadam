import { ArrowUpRight, Mail, MapPin, Phone, Smartphone } from 'lucide-react'
import { hours, practice } from '../data'
import SectionHeading from './SectionHeading'

export function Hours() {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' }))
    const currentTime = now.getHours() + now.getMinutes() / 60
    const today = hours.find(({ dayIndex }) => dayIndex === now.getDay())!
    const isOpen = today.periods.some(([start, end]) => currentTime >= start && currentTime < end)
    return (
        <section
            id="hours"
            className="bg-brand-950 relative overflow-hidden px-4 py-24 text-white md:py-30"
        >
            <div className="border-accent-light/15 absolute -top-64 -right-44 size-[600px] rounded-full border shadow-[0_0_0_70px_rgba(184,175,224,.025),0_0_0_140px_rgba(184,175,224,.018)]" />
            <div className="relative mx-auto grid max-w-[1160px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
                <div>
                    <SectionHeading eyebrow="Practice hours" light>
                        Plan your <em className="text-accent-light font-normal">visit.</em>
                    </SectionHeading>
                    <p className="my-7 max-w-md text-white/65">
                        These are the practice hours currently shown online. Please call ahead
                        before travelling, particularly on Fridays, weekends and public holidays.
                    </p>
                    <a
                        href={`tel:${practice.phoneHref}`}
                        className="text-brand-950 inline-flex rounded-lg bg-white px-6 py-4 text-sm font-bold transition hover:-translate-y-0.5"
                    >
                        Confirm by phone
                    </a>
                </div>
                <div className="text-ink rounded-3xl bg-white p-6 shadow-2xl md:p-9">
                    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                        <div>
                            <small className="text-muted block text-[9px] font-bold tracking-widest uppercase">
                                Today · {today.day}
                            </small>
                            <strong className="font-display text-brand-950 text-lg md:text-xl">
                                {today.label}
                            </strong>
                        </div>
                        <span
                            className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-extrabold tracking-wide uppercase ${isOpen ? 'bg-brand-50 text-brand-800' : 'bg-orange-50 text-orange-800'}`}
                        >
                            {isOpen ? 'Open now' : 'Closed now'}
                        </span>
                    </div>
                    <dl className="my-3">
                        {hours.map((item) => (
                            <div
                                key={item.day}
                                className={`hover:bg-accent/10 flex justify-between rounded-lg px-2 py-2 text-xs transition-colors duration-200 sm:text-sm ${item.dayIndex === now.getDay() ? 'bg-brand-50 text-brand-950 font-bold' : ''}`}
                            >
                                <dt className={item.dayIndex === now.getDay() ? '' : 'text-muted'}>
                                    {item.day}
                                </dt>
                                <dd className="ml-3 text-right font-semibold">{item.label}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="text-muted mt-4 text-center text-[10px]">
                        Hours may change without notice. Public holidays may differ.
                    </p>
                </div>
            </div>
        </section>
    )
}

const contacts = [
    {
        icon: Phone,
        label: 'Practice telephone',
        value: practice.phone,
        href: `tel:${practice.phoneHref}`,
    },
    {
        icon: Smartphone,
        label: 'Mobile',
        value: practice.mobile,
        href: `tel:${practice.mobileHref}`,
    },
    { icon: Mail, label: 'Email', value: practice.email, href: `mailto:${practice.email}` },
]

export function Contact() {
    return (
        <section id="contact" className="bg-cream px-4 py-24 md:py-30">
            <div className="mx-auto max-w-[1160px]">
                <SectionHeading eyebrow="Contact & location">
                    Ready when you need <em className="text-accent font-normal">to reach us.</em>
                </SectionHeading>
                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl border border-black/5 bg-white p-6 md:p-9">
                        {contacts.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="group grid grid-cols-[2.25rem_1fr_auto] items-center gap-4 border-b border-slate-200 py-4"
                            >
                                <Icon className="text-brand-600 size-5 stroke-[1.7]" />
                                <span>
                                    <small className="text-muted block text-[9px] font-bold tracking-widest uppercase">
                                        {label}
                                    </small>
                                    <strong className="text-brand-950 group-hover:text-brand-600 block text-sm">
                                        {value}
                                    </strong>
                                </span>
                                <b className="text-accent font-normal">↗</b>
                            </a>
                        ))}
                        <div className="grid grid-cols-[2.25rem_1fr] items-center gap-4 py-4">
                            <MapPin className="text-brand-600 size-5 stroke-[1.7]" />
                            <span>
                                <small className="text-muted block text-[9px] font-bold tracking-widest uppercase">
                                    Practice address
                                </small>
                                <strong className="text-brand-950 block text-sm leading-6">
                                    {practice.address.map((line) => (
                                        <span key={line} className="block">
                                            {line}
                                        </span>
                                    ))}
                                </strong>
                            </span>
                        </div>
                        <a
                            href={practice.mapUrl}
                            target="_blank"
                            rel="noopener"
                            className="bg-brand-800 hover:bg-brand-950 mt-5 inline-flex rounded-lg px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5"
                        >
                            Open in Google Maps
                        </a>
                    </div>
                    <a
                        href={practice.mapUrl}
                        target="_blank"
                        rel="noopener"
                        aria-label="Open practice location in Google Maps"
                        className="relative min-h-[450px] overflow-hidden rounded-3xl bg-[linear-gradient(140deg,#d9e6e2,#edf0e8)]"
                    >
                        <div className="absolute top-[34%] -left-[10%] h-5 w-[125%] -rotate-12 bg-white/85" />
                        <div className="absolute top-0 left-[65%] h-full w-4 rotate-6 bg-white/85" />
                        <div className="bg-accent/15 ring-accent/7 absolute top-[42%] left-[53%] grid size-17 -translate-1/2 place-items-center rounded-full ring-[18px]">
                            <MapPin className="fill-accent text-accent size-10 drop-shadow-lg" />
                        </div>
                        <div className="bg-brand-950/95 absolute right-6 bottom-6 left-6 rounded-xl p-5 text-white backdrop-blur">
                            <small className="block text-[9px] font-bold tracking-widest text-white/55 uppercase">
                                Find the practice
                            </small>
                            <strong className="font-display my-1 block text-xl">
                                H.S. Ebrahim Centre
                            </strong>
                            <span className="flex items-center gap-1 text-xs text-emerald-100">
                                Get directions{' '}
                                <ArrowUpRight aria-hidden="true" className="size-3.5" />
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
