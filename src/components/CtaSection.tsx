'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Phone, ShieldCheck, Zap, MapPin, Sparkles } from 'lucide-react';
import { shopInfo } from '@/data/partsData';
import { BookCallButton, GrowthPlanButton } from '@/components/Button';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const CtaSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const carRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const ropePathRef = useRef<SVGPathElement>(null);
    const ropeShadowRef = useRef<SVGPathElement>(null);
    const carHookRef = useRef<HTMLDivElement>(null);
    const cardHookRef = useRef<HTMLDivElement>(null);
    const frontWheelRef = useRef<SVGGElement>(null);
    const rearWheelRef = useRef<SVGGElement>(null);
    const [isSettled, setIsSettled] = useState(false);

    const whatsappLink = `https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(
        "Hello! I am looking for genuine auto spare parts. Please share pricing and availability."
    )}`;
    const phoneLink = `tel:${shopInfo.phone.replace(/\s+/g, '')}`;

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const section = sectionRef.current;
        const car = carRef.current;
        const card = cardRef.current;
        const ropePath = ropePathRef.current;
        const ropeShadow = ropeShadowRef.current;
        const carHook = carHookRef.current;
        const cardHook = cardHookRef.current;
        const frontWheel = frontWheelRef.current;
        const rearWheel = rearWheelRef.current;

        if (!section || !car || !card || !ropePath || !carHook || !cardHook) return;

        // Dynamic rope path calculation
        const updateRope = (progress = 0) => {
            if (!section || !carHook || !cardHook || !ropePath) return;

            const sectionRect = section.getBoundingClientRect();
            const carHookRect = carHook.getBoundingClientRect();
            const cardHookRect = cardHook.getBoundingClientRect();

            // Rope endpoints relative to section coordinate space
            const x1 = carHookRect.left + carHookRect.width / 2 - sectionRect.left;
            const y1 = carHookRect.top + carHookRect.height / 2 - sectionRect.top;

            const x2 = cardHookRect.left + cardHookRect.width / 2 - sectionRect.left;
            const y2 = cardHookRect.top + cardHookRect.height / 2 - sectionRect.top;

            const dx = x2 - x1;
            const dy = y2 - y1;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Natural sag curve — tighter when under tension, droopier when slack
            const midX = (x1 + x2) / 2;
            const sag = Math.min(40, Math.max(6, dist * 0.05 * (1 - progress * 0.5)));
            const midY = (y1 + y2) / 2 + sag;

            const pathData = `M ${x1},${y1} Q ${midX},${midY} ${x2},${y2}`;
            ropePath.setAttribute('d', pathData);

            // Sync the fiber highlight layer to the same curve
            const fiberEl = document.getElementById('ropeFiberPath');
            if (fiberEl) fiberEl.setAttribute('d', pathData);

            if (ropeShadow) {
                const shadowPathData = `M ${x1},${y1 + 10} Q ${midX},${midY + 14} ${x2},${y2 + 10}`;
                ropeShadow.setAttribute('d', shadowPathData);
            }
        };

        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            const screenW = window.innerWidth;

            // Distance offsets
            // Car starts off-screen right, card starts even further right (car enters FIRST)
            const carStartOffset = screenW + (isMobile ? 120 : 280);
            // Card is much further right so it stays hidden while car enters
            const cardStartOffset = screenW + (isMobile ? 800 : 1200);
            // Where the car pauses after entering to let rope become taut (center-right of screen)
            const carMidX = isMobile ? screenW * 0.1 : screenW * 0.12;
            // Where car is when card reaches center (car is now left-of-center)
            const carPullTargetX = isMobile ? -(screenW * 0.3) : -(screenW * 0.35);
            const carExitX = -(screenW + 500);

            // Initial positions
            gsap.set(car, { x: carStartOffset, y: 0, opacity: 1 });
            // Card starts FAR right, hidden, waiting to be pulled
            gsap.set(card, { x: cardStartOffset, y: 0, rotation: isMobile ? -2 : -4, scale: 0.95 });
            gsap.set([ropePath, ropeShadow], { opacity: 1 });

            // Pinned GSAP ScrollTrigger Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '+=2200',
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.8,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        updateRope(self.progress);
                        if (self.progress >= 0.58) {
                            setIsSettled(true);
                        } else {
                            setIsSettled(false);
                        }
                    }
                }
            });

            // ============================================================
            // PHASE 1 (0.0 → 0.28): Car ENTERS ALONE from right
            // Card is still hidden off-screen right
            // ============================================================
            tl.to(
                car,
                {
                    x: carMidX,   // Car moves to center-right of screen
                    duration: 0.28,
                    ease: 'power2.out'
                },
                0
            );

            // Wheels spin during entry
            if (frontWheel && rearWheel) {
                tl.to(
                    [frontWheel, rearWheel],
                    {
                        rotation: -540,
                        transformOrigin: '50% 50%',
                        duration: 0.28,
                        ease: 'none'
                    },
                    0
                );
            }

            // ============================================================
            // PHASE 2 (0.28 → 0.62): Car PULLS card from right to center
            // Car continues left while rope drags card into center
            // ============================================================
            tl.to(
                car,
                {
                    x: carPullTargetX,
                    duration: 0.34,
                    ease: 'power1.inOut'
                },
                0.28
            );

            // Card starts being pulled at the same moment (rope becomes taut)
            tl.to(
                card,
                {
                    x: 0,
                    rotation: 0,
                    scale: 1,
                    duration: 0.32,
                    ease: 'power2.out'
                },
                0.3   // slight delay so car clearly moves first before card follows
            );

            // Wheels continue spinning through pull phase
            if (frontWheel && rearWheel) {
                tl.to(
                    [frontWheel, rearWheel],
                    {
                        rotation: -1440,
                        transformOrigin: '50% 50%',
                        duration: 0.34,
                        ease: 'none'
                    },
                    0.28
                );
            }

            // ============================================================
            // PHASE 3 (0.62 → 0.87): Car EXITS left, rope disconnects
            // Card stays centered and locked
            // ============================================================
            tl.to(
                car,
                {
                    x: carExitX,
                    duration: 0.25,
                    ease: 'power2.in'
                },
                0.62
            );

            // Rope fades as car disconnects
            if (ropePath) {
                tl.to(
                    [ropePath, ropeShadow],
                    {
                        opacity: 0,
                        duration: 0.1,
                        ease: 'power1.out'
                    },
                    0.63
                );
            }

            // Wheels spin hard during exit acceleration
            if (frontWheel && rearWheel) {
                tl.to(
                    [frontWheel, rearWheel],
                    {
                        rotation: -2880,
                        transformOrigin: '50% 50%',
                        duration: 0.25,
                        ease: 'power2.in'
                    },
                    0.62
                );
            }

            // Card settles with glow emphasis
            tl.to(
                card,
                {
                    boxShadow: '0 25px 60px -15px rgba(226, 59, 44, 0.25), 0 0 50px 0 rgba(0, 0, 0, 0.7)',
                    duration: 0.12,
                    ease: 'power1.out'
                },
                0.62
            );

            // Hold state until pin ends
            tl.to({}, { duration: 0.4 }, 0.6);

            // Initial render of rope
            updateRope(0);
        }, sectionRef);

        const handleResize = () => {
            ScrollTrigger.refresh();
            updateRope();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="cta-section"
            className="relative w-full h-screen bg-[#0c1017] border-y border-white/10 overflow-hidden flex items-center justify-center select-none"
        >
            {/* Automotive Racing Ambient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Asphalt Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '28px 28px'
                    }}
                />

                {/* Speed streak lines */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e23b2c]/30 to-transparent -translate-y-24" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-28" />

                {/* Ambient Glows */}
                <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#e23b2c]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Dynamic SVG Rope Canvas Overlay */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                style={{ overflow: 'visible' }}
            >
                <defs>
                    {/* Rope color: warm steel/hemp gradient */}
                    <linearGradient id="towStrapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#92400e" />
                        <stop offset="20%" stopColor="#d97706" />
                        <stop offset="50%" stopColor="#fbbf24" />
                        <stop offset="80%" stopColor="#d97706" />
                        <stop offset="100%" stopColor="#92400e" />
                    </linearGradient>

                    {/* Rope highlight sheen gradient */}
                    <linearGradient id="ropeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.0" />
                        <stop offset="35%" stopColor="#fef3c7" stopOpacity="0.55" />
                        <stop offset="65%" stopColor="#fef3c7" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.0" />
                    </linearGradient>

                    {/* Drop shadow filter */}
                    <filter id="ropeGlow" x="-20%" y="-40%" width="140%" height="180%">
                        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.9" />
                        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.5" />
                    </filter>
                </defs>

                {/* Layer 1: Ground shadow blur */}
                <path
                    ref={ropeShadowRef}
                    d=""
                    fill="none"
                    stroke="rgba(0, 0, 0, 0.5)"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {/* Layer 2: Thick rope core - solid dark */}
                <path
                    ref={ropePathRef}
                    d=""
                    fill="none"
                    stroke="url(#towStrapGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    filter="url(#ropeGlow)"
                />

                {/* Layer 3: Braided fiber highlights on top of rope */}
                <path
                    id="ropeFiberPath"
                    d=""
                    fill="none"
                    stroke="url(#ropeHighlight)"
                    strokeWidth="1.8"
                    strokeDasharray="5,7"
                    strokeLinecap="round"
                />
            </svg>

            {/* ========================================================= */}
            {/* 🚗 MODERN SIDE-VIEW SVG SPORTS CAR                       */}
            {/* ========================================================= */}
            <div
                ref={carRef}
                className="absolute top-1/2 -translate-y-[110%] sm:-translate-y-[105%] z-30 pointer-events-none will-change-transform"
                style={{ transformOrigin: 'center center' }}
            >
                <div className="relative w-[260px] sm:w-[360px] md:w-[440px] lg:w-[480px]">
                    {/* Car Tow Hook (Rope Anchor Point) */}
                    <div
                        ref={carHookRef}
                        className="absolute right-[8px] top-[74%] w-4 h-4 -translate-y-1/2 flex items-center justify-center"
                    >
                        <span className="w-3 h-3 rounded-full bg-amber-400 border-2 border-slate-900 shadow-md shadow-amber-500/50 block animate-pulse" />
                    </div>

                    {/* Headlight Forward Beam */}
                    <div
                        className="absolute left-[-140px] top-[60%] w-[180px] h-[80px] pointer-events-none opacity-40"
                        style={{
                            background: 'radial-gradient(ellipse at right center, rgba(255,255,255,0.7) 0%, rgba(226,59,44,0.3) 40%, transparent 80%)',
                            transform: 'perspective(400px) rotateY(-30deg)'
                        }}
                    />

                    {/* SVG Car Graphic */}
                    <svg
                        viewBox="0 0 540 170"
                        className="w-full h-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.85)]"
                    >
                        <defs>
                            <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ff4d3d" />
                                <stop offset="35%" stopColor="#e23b2c" />
                                <stop offset="70%" stopColor="#a31a10" />
                                <stop offset="100%" stopColor="#4f0a05" />
                            </linearGradient>

                            <linearGradient id="glassTint" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#2a384c" stopOpacity="0.95" />
                                <stop offset="50%" stopColor="#141c28" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#080c14" stopOpacity="0.98" />
                            </linearGradient>

                            <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#e2e8f0" />
                                <stop offset="50%" stopColor="#94a3b8" />
                                <stop offset="100%" stopColor="#334155" />
                            </linearGradient>
                        </defs>

                        {/* Under-Chassis Drop Shadow */}
                        <ellipse cx="270" cy="155" rx="250" ry="12" fill="rgba(0,0,0,0.75)" />

                        {/* Car Main Body Shell (Facing Left) */}
                        <path
                            d="M 40 120 
                               L 20 115 
                               Q 15 105 35 98 
                               L 90 92 
                               L 155 58 
                               Q 175 48 220 46 
                               L 350 46 
                               Q 390 48 430 75 
                               L 500 86 
                               Q 525 90 525 110 
                               L 515 125 
                               L 460 125 
                               A 42 42 0 0 0 376 125 
                               L 190 125 
                               A 42 42 0 0 0 106 125 
                               Z"
                            fill="url(#carBodyGrad)"
                        />

                        {/* Lower Diffuser */}
                        <path
                            d="M 30 120 
                               L 106 120 
                               A 42 42 0 0 1 190 120 
                               L 376 120 
                               A 42 42 0 0 1 460 120 
                               L 520 120 
                               L 515 132 
                               L 460 132 
                               A 44 44 0 0 0 376 132 
                               L 190 132 
                               A 44 44 0 0 0 106 132 
                               L 25 132 
                               Z"
                            fill="#11151d"
                        />

                        {/* Cabin Windows Frame */}
                        <path
                            d="M 160 62 
                               L 220 52 
                               L 345 52 
                               Q 380 54 415 78 
                               L 350 78 
                               L 225 78 
                               Z"
                            fill="url(#glassTint)"
                            stroke="#1e293b"
                            strokeWidth="2"
                        />
                        <path
                            d="M 158 63 
                               L 222 53 
                               L 222 78 
                               L 105 88 
                               Z"
                            fill="url(#glassTint)"
                            opacity="0.85"
                        />
                        <line x1="280" y1="52" x2="280" y2="78" stroke="#0f172a" strokeWidth="4" />

                        {/* Headlight Lens */}
                        <polygon points="18,102 48,96 46,108 20,110" fill="#ffffff" />
                        <polygon points="20,103 44,98 42,106 22,108" fill="#38bdf8" opacity="0.9" />

                        {/* Rear Taillight */}
                        <path d="M 515 98 L 528 102 L 522 112 L 508 108 Z" fill="#ff2a1a" />

                        {/* Door Lines */}
                        <path d="M 230 78 L 225 120" stroke="#7f1d1d" strokeWidth="1.5" />
                        <path d="M 335 78 L 330 120" stroke="#7f1d1d" strokeWidth="1.5" />
                        <rect x="245" y="85" width="22" height="4" rx="2" fill="#2d0604" />

                        {/* Rear Tow Shackle */}
                        <g transform="translate(520, 118)">
                            <circle cx="6" cy="6" r="6" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
                            <circle cx="6" cy="6" r="2.5" fill="#1e293b" />
                        </g>

                        {/* FRONT WHEEL */}
                        <g ref={frontWheelRef} transform="translate(148, 125)">
                            <circle cx="0" cy="0" r="38" fill="#18181b" stroke="#27272a" strokeWidth="3" />
                            <circle cx="0" cy="0" r="30" fill="#09090b" />
                            <path d="M -16 -20 A 24 24 0 0 1 12 -22 L 6 -14 A 18 18 0 0 0 -12 -13 Z" fill="#e23b2c" />
                            <circle cx="0" cy="0" r="25" fill="url(#rimGrad)" />
                            <line x1="0" y1="-25" x2="0" y2="25" stroke="#0f172a" strokeWidth="4" />
                            <line x1="-24" y1="-8" x2="24" y2="8" stroke="#0f172a" strokeWidth="4" />
                            <line x1="-20" y1="16" x2="20" y2="-16" stroke="#0f172a" strokeWidth="4" />
                            <line x1="-15" y1="-20" x2="15" y2="20" stroke="#0f172a" strokeWidth="4" />
                            <circle cx="0" cy="0" r="7" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
                        </g>

                        {/* REAR WHEEL */}
                        <g ref={rearWheelRef} transform="translate(418, 125)">
                            <circle cx="0" cy="0" r="38" fill="#18181b" stroke="#27272a" strokeWidth="3" />
                            <circle cx="0" cy="0" r="30" fill="#09090b" />
                            <path d="M -16 -20 A 24 24 0 0 1 12 -22 L 6 -14 A 18 18 0 0 0 -12 -13 Z" fill="#e23b2c" />
                            <circle cx="0" cy="0" r="25" fill="url(#rimGrad)" />
                            <line x1="0" y1="-25" x2="0" y2="25" stroke="#0f172a" strokeWidth="4" />
                            <line x1="-24" y1="-8" x2="24" y2="8" stroke="#0f172a" strokeWidth="4" />
                            <line x1="-20" y1="16" x2="20" y2="-16" stroke="#0f172a" strokeWidth="4" />
                            <line x1="-15" y1="-20" x2="15" y2="20" stroke="#0f172a" strokeWidth="4" />
                            <circle cx="0" cy="0" r="7" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
                        </g>
                    </svg>
                </div>
            </div>

            {/* ========================================================= */}
            {/* 🏷️ CTA POSTER CARD (Towed by Car into Center)             */}
            {/* ========================================================= */}
            <div
                ref={cardRef}
                className="relative z-40 w-full max-w-[800px] mx-auto px-4 sm:px-6 will-change-transform"
            >
                {/* Metal Tow Hook Ring on Left Edge */}
                <div
                    ref={cardHookRef}
                    className="absolute -left-1 sm:left-1.5 top-8 sm:top-12 z-50 w-7 h-7 sm:w-8 sm:h-8 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-slate-900 flex items-center justify-center shadow-lg shadow-amber-500/40">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0c1017] border border-amber-300" />
                    </div>
                </div>

                {/* Main Dark Card Container */}
                <div className="bg-[#11141b] rounded-3xl p-7 sm:p-10 border border-[#e23b2c]/25 shadow-[0_8px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
                    {/* Top Racing Accent Stripe */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e23b2c] via-amber-400 to-[#e23b2c]" />

                    {/* Corner Ambient Glows */}
                    <div className="absolute top-0 right-0 w-56 h-56 bg-[#e23b2c]/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-600/8 rounded-full blur-3xl pointer-events-none" />

                    {/* Top Row: Badge + Live Indicator */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e23b2c]/10 border border-[#e23b2c]/20 text-[10px] font-machina font-bold text-[#ff5748] uppercase tracking-widest">
                            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
                            <span>Bahawalpur's #1 Genuine Parts Store</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-machina text-emerald-400">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse block" />
                            <span>WhatsApp Desk Live</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-druk text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight mb-3">
                        NEED CAR SPARE PARTS?{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d3d] via-[#ff7a6e] to-amber-400">
                            CHAT ON WHATSAPP NOW!
                        </span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
                        Send a photo of your old part or your vehicle chassis number — our auto specialists will confirm exact OEM prices and stock in <strong className="text-white">under 5 minutes</strong>.
                    </p>

                    {/* Buttons Row — Using existing Button components */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                        {/* WhatsApp CTA — BookCallButton (bright white pill) */}
                        <BookCallButton
                            text="Order Parts on WhatsApp"
                            href={whatsappLink}
                            className="w-full sm:w-auto"
                        />

                        {/* Call CTA — GrowthPlanButton (dark pill with arrows) */}
                        <GrowthPlanButton
                            text={`Call: ${shopInfo.phone}`}
                            href={phoneLink}
                            className="w-full sm:w-auto"
                        />
                    </div>

                    {/* 3 Trust Badges Footer */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 border-t border-white/8 text-slate-400 font-machina text-[10px] sm:text-[11px] uppercase tracking-wider">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#ff4d3d] shrink-0" />
                            <span>100% Genuine OEM</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>30-Min Local Delivery</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>Dubai Chowk, Model Town</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>Counter Pickup Available</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
