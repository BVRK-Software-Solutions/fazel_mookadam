import { Clock3, HeartPulse, Stethoscope, UsersRound } from 'lucide-react'
import { practice } from '../data'
import SectionHeading from './SectionHeading'

export function About() {
    const credentials = [
        ['Qualification', 'M.D.'],
        ['HPCSA registration', practice.hpcsaNumber],
        ['Practice number', practice.practiceNumber],
    ]
    return (
        <section id="about" className="px-4 py-24 md:py-30">
            <div className="mx-auto grid max-w-[1160px] gap-12 md:grid-cols-[.9fr_1.1fr] md:gap-20">
                <SectionHeading eyebrow="About the practice">
                    A familiar doctor for your{' '}
                    <em className="text-accent font-normal">everyday health.</em>
                </SectionHeading>
                <div className="text-muted border-slate-200 md:border-l md:pl-14">
                    <p className="text-ink mt-0 text-xl leading-8">
                        Dr Fazel Mookadam is a registered general practitioner based in Laudium,
                        serving the broader Centurion community from the H.S. Ebrahim Centre.
                    </p>
                    <p className="mt-5">
                        As a local GP practice, the focus is primary care: a considered first point
                        of contact for everyday health concerns, ongoing care and guidance on the
                        next appropriate step.
                    </p>
                    <dl className="mt-9 grid gap-4 border-t border-slate-200 pt-7 sm:grid-cols-3">
                        {credentials.map(([term, detail]) => (
                            <div key={term}>
                                <dt className="text-[9px] font-bold tracking-widest uppercase">
                                    {term}
                                </dt>
                                <dd className="font-display text-brand-950 mt-1 text-xl">
                                    {detail}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}

const careItems = [
    {
        icon: Stethoscope,
        title: 'General consultations',
        body: 'Assessment and guidance for new or ongoing, non-emergency health concerns.',
    },
    {
        icon: HeartPulse,
        title: 'Ongoing health support',
        body: 'Follow-up conversations and continuity of care for longer-term health needs.',
    },
    {
        icon: Clock3,
        title: 'Preventative care',
        body: 'Health checks, risk conversations and practical guidance for staying well.',
    },
    {
        icon: UsersRound,
        title: 'Family health',
        body: 'A convenient local point of care for the health needs of individuals and families.',
    },
]

export function Care() {
    return (
        <section id="care" className="bg-[#f3f7f4] px-4 py-24 md:py-30">
            <div className="mx-auto max-w-[1160px]">
                <SectionHeading eyebrow="How a GP can help" centred>
                    Care that starts with <em className="text-accent font-normal">listening.</em>
                </SectionHeading>
                <p className="text-muted mx-auto mt-6 max-w-2xl text-center">
                    General practice is often your first stop for non-emergency health concerns.
                    Contact the practice to confirm the right consultation for your needs.
                </p>
                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {careItems.map(({ icon: Icon, title, body }, index) => (
                        <article
                            key={title}
                            className="group hover:border-brand-100 hover:shadow-brand-950/8 relative rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                        >
                            <span className="font-display text-accent/70 absolute top-6 right-6 text-sm italic">
                                0{index + 1}
                            </span>
                            <Icon className="text-brand-600 my-9 size-11 stroke-[1.4]" />
                            <h3 className="font-display text-brand-950 text-[22px]">{title}</h3>
                            <p className="text-muted mt-3 text-sm leading-6">{body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
