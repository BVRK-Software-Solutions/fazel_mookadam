import type { ReactNode } from 'react'

export default function SectionHeading({
    eyebrow,
    children,
    centred = false,
    light = false,
}: {
    eyebrow: string
    children: ReactNode
    centred?: boolean
    light?: boolean
}) {
    return (
        <div className={centred ? 'mx-auto max-w-3xl text-center' : ''}>
            <p
                className={`mb-5 flex items-center gap-2.5 text-[11px] font-extrabold tracking-[.2em] uppercase ${centred ? 'justify-center' : ''} ${light ? 'text-emerald-100' : 'text-brand-800'}`}
            >
                <span className="h-px w-5 bg-current" />
                {eyebrow}
            </p>
            <h2
                className={`font-display text-[clamp(2.7rem,5vw,4.2rem)] leading-[.98] tracking-[-.045em] ${light ? 'text-white' : 'text-brand-950'}`}
            >
                {children}
            </h2>
        </div>
    )
}
