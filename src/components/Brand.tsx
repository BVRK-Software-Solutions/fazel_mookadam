export default function Brand({ light = false }: { light?: boolean }) {
    const logoUrl = `${import.meta.env.BASE_URL}logo-mark.svg`

    return (
        <a
            href="#top"
            aria-label="Dr Fazel Mookadam home"
            className="inline-flex items-center gap-3"
        >
            <span
                className={`grid size-10 place-items-center rounded-full shadow-sm ${light ? 'text-brand-100 bg-white/10' : 'text-brand-800 bg-white'}`}
            >
                <img src={logoUrl} alt="" className="size-9" />
            </span>
            <span>
                <strong
                    className={`font-display block text-[17px] leading-tight ${light ? 'text-white' : 'text-brand-950'}`}
                >
                    Dr Fazel Mookadam
                </strong>
                <small
                    className={`mt-1 block text-[9px] font-bold tracking-[.18em] uppercase ${light ? 'text-white/50' : 'text-muted'}`}
                >
                    General Practitioner
                </small>
            </span>
        </a>
    )
}
