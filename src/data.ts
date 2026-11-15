export const practice = {
    phone: '012 374 0539',
    phoneHref: '+27123740539',
    mobile: '082 412 2293',
    mobileHref: '+27824122293',
    email: 'docfazel@mweb.co.za',
    address: ['Office 13, H.S. Ebrahim Centre', '140 Bengal Street, Laudium, 0037'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dr+Fazel+Mookadam+140+Bengal+Street+Laudium',
    practiceNumber: '1572083',
    hpcsaNumber: '0464309',
} as const

export const hours = [
    { day: 'Monday', dayIndex: 1, label: '10:00 – 18:00', periods: [[10, 18]] },
    { day: 'Tuesday', dayIndex: 2, label: '10:00 – 18:00', periods: [[10, 18]] },
    { day: 'Wednesday', dayIndex: 3, label: '10:00 – 18:00', periods: [[10, 18]] },
    { day: 'Thursday', dayIndex: 4, label: '10:00 – 18:00', periods: [[10, 18]] },
    {
        day: 'Friday',
        dayIndex: 5,
        label: '10:00 – 12:00 & 15:00 – 18:00',
        periods: [
            [10, 12],
            [15, 18],
        ],
    },
    { day: 'Saturday', dayIndex: 6, label: '10:00 – 13:00', periods: [[10, 13]] },
    { day: 'Sunday', dayIndex: 0, label: '10:00 – 12:00', periods: [[10, 12]] },
] as const
