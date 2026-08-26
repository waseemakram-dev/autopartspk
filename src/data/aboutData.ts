export interface AboutStat {
    id: string;
    value: string;
    label: string;
    urduLabel: string;
    icon: string;
}

export interface TrustPillar {
    id: string;
    title: string;
    urduTitle: string;
    description: string;
    icon: string;
    badge: string;
}

export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

export interface AboutFaq {
    question: string;
    answer: string;
}

export const aboutStats: AboutStat[] = [
    {
        id: 'years',
        value: '15+',
        label: 'Years Counter Experience',
        urduLabel: '15+ سال کا تجربہ',
        icon: 'Award'
    },
    {
        id: 'parts',
        value: '5,000+',
        label: 'Genuine Spares Ready In Stock',
        urduLabel: '5,000+ جنوئن پارٹس',
        icon: 'PackageCheck'
    },
    {
        id: 'customers',
        value: '12,000+',
        label: 'Satisfied Customer Trust',
        urduLabel: '12,000+ مطمئن صارفین',
        icon: 'Users'
    },
    {
        id: 'brands',
        value: '100%',
        label: 'Genuine OEM & Japanese Guarantee',
        urduLabel: '100٪ اصل پارٹس',
        icon: 'Shield'
    }
];

export const trustPillars: TrustPillar[] = [
    {
        id: 'genuine',
        title: 'Zero Counterfeit & Copy Parts Guarantee',
        urduTitle: '100٪ اصل پارٹس کی گارنٹی',
        description: 'We strictly sell 100% authentic auto parts with original Japanese packaging, manufacturer barcode stamps, and security seals.',
        icon: 'ShieldCheck',
        badge: '100% Genuine OEM'
    },
    {
        id: 'fitment',
        title: 'Chassis VIN Matching System',
        urduTitle: 'فریم نمبر کے مطابق درست فٹنگ',
        description: 'Eliminate fitment errors! Share your vehicle Chassis/Frame number, and our specialists will verify exact OEM part numbers before dispatch.',
        icon: 'SearchCheck',
        badge: 'Guaranteed Fitment'
    },
    {
        id: 'counter',
        title: 'Ayyoub Chowk Physical Store Counter',
        urduTitle: 'کاؤنٹر پر آ کر خود چیک کریں',
        description: 'Visit our physical counter at Ayyoub Chowk, Bahawalpur to inspect parts in-hand and purchase at direct wholesale rates.',
        icon: 'Store',
        badge: 'Physical Counter'
    },
    {
        id: 'snap-response',
        title: '5-Minute WhatsApp Part Finder',
        urduTitle: 'منٹ میں واٹس ایپ پر جواب 5',
        description: 'Don\'t know the part name or code? Simply WhatsApp photos of your old part, and we will confirm price and availability within 5 minutes.',
        icon: 'MessageSquare',
        badge: 'Instant Support'
    }
];

export const shopTimeline: TimelineEvent[] = [
    {
        year: '2009',
        title: 'Established First Counter at Ayyoub Chowk',
        description: 'Started as a retail counter store at Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur.'
    },
    {
        year: '2015',
        title: 'Expanded to Honda & 660cc Japanese Imported Spares',
        description: 'Introduced specialized inventory for Japanese 660cc vehicles (Mira, Move, Alto, Vitz) alongside Toyota, Suzuki, and Honda parts.'
    },
    {
        year: '2020',
        title: 'Same-Day Regional Cargo Network',
        description: 'Launched daily same-day cargo dispatch for mechanics and car owners across Ahmedpur East, Yazman, Lodhran, and Hasilpur.'
    },
    {
        year: '2026',
        title: 'WhatsApp Snap & Send Digital Part Finder',
        description: 'Rolled out direct WhatsApp photo catalog and instant part verification platform for customer convenience.'
    }
];

export const aboutFaqs: AboutFaq[] = [
    {
        question: "How can I verify that the part is 100% genuine?",
        answer: "Har part hamare counter par physically verify hota hai — aap khud check kar sakte hain WhatsApp pe photo bhej kar ya counter par aa kar."
    },
    {
        question: "How long has Auto Parts & Accessories PK been serving Bahawalpur?",
        answer: "Hum pichle 15+ saal se Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur mein physical store counter chala rahe hain."
    },
    {
        question: "What is your exchange policy if a part doesn't fit?",
        answer: "Aap gari ka chassis VIN number share karein exact matching part lene ke liye. Agar unused part ho, toh 7 din ke andar counter par easy exchange available hai."
    },
    {
        question: "Do you only serve Bahawalpur, or nearby areas too?",
        answer: "Hamara main physical counter Ayyoub Chowk, Bahawalpur par hai. City mein fast pickup & rider delivery available hai, aur surrounding tehsils ke liye daily cargo dispatch service hai."
    }
];
