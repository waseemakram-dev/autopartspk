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
        "Assalam o Alaikum! Mujhe Auto Parts & Accessories PK Bahawalpur se car spare parts ki inquiry karni hai."
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

        const mm = gsap.matchMedia();

        // 💻 DESKTOP ONLY (min-width: 768px): Full GSAP Scroll Animation & Car Towing
        mm.add("(min-width: 768px)", () => {
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

                // Natural sag curve
                const midX = (x1 + x2) / 2;
                const sag = Math.min(40, Math.max(6, dist * 0.05 * (1 - progress * 0.5)));
                const midY = (y1 + y2) / 2 + sag;

                const pathData = `M ${x1},${y1} Q ${midX},${midY} ${x2},${y2}`;
                ropePath.setAttribute('d', pathData);
                if (ropeShadow) {
                    ropeShadow.setAttribute('d', `M ${x1},${y1 + 4} Q ${midX},${midY + 4} ${x2},${y2 + 4}`);
                }

                // Sync the fiber highlight layer
                const fiberEl = document.getElementById('ropeFiberPath');
                if (fiberEl) fiberEl.setAttribute('d', pathData);
                if (ropeShadow) {
                    const shadowPathData = `M ${x1},${y1 + 10} Q ${midX},${midY + 14} ${x2},${y2 + 10}`;
                    ropeShadow.setAttribute('d', shadowPathData);
                }
            };

            const screenW = window.innerWidth;
            const carStartOffset = screenW + 280;
            const cardStartOffset = screenW + 1200;
            const carMidX = screenW * 0.12;
            const carPullTargetX = -(screenW * 0.35);
            const carExitX = -(screenW + 500);

            // Initial positions
            gsap.set(car, { x: carStartOffset, y: 0, opacity: 1 });
            gsap.set(card, { x: cardStartOffset, y: 0, rotation: -4, scale: 0.95 });
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
                        setIsSettled(self.progress >= 0.58);
                    }
                }
            });

            // PHASE 1: Car ENTERS ALONE from right
            tl.to(
                car,
                {
                    x: carMidX,
                    duration: 0.28,
                    ease: 'power2.out',
                },
                0
            );

            if (frontWheel && rearWheel) {
                tl.to(
                    [frontWheel, rearWheel],
                    {
                        rotation: -720,
                        transformOrigin: '50% 50%',
                        duration: 0.28,
                        ease: 'none'
                    },
                    0
                );
            }

            // PHASE 2: Rope tightens & pulls card in
            tl.to(
                car,
                {
                    x: carPullTargetX,
                    duration: 0.34,
                    ease: 'power1.inOut'
                },
                0.28
            );

            tl.to(
                card,
                {
                    x: 0,
                    rotation: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.34,
                    ease: 'power2.out'
                },
                0.28
            );

            if (frontWheel && rearWheel) {
                tl.to(
                    [frontWheel, rearWheel],
                    {
                        rotation: -1800,
                        transformOrigin: '50% 50%',
                        duration: 0.34,
                        ease: 'none'
                    },
                    0.28
                );
            }

            // PHASE 3: Car drives off left
            tl.to(
                car,
                {
                    x: carExitX,
                    duration: 0.38,
                    ease: 'power2.in'
                },
                0.62
            );

            if (frontWheel && rearWheel) {
                tl.to(
                    [frontWheel, rearWheel],
                    {
                        rotation: -3200,
                        transformOrigin: '50% 50%',
                        duration: 0.38,
                        ease: 'none'
                    },
                    0.62
                );
            }

            // Rope fades out
            if (ropePath) {
                tl.to(
                    [ropePath, ropeShadow],
                    {
                        opacity: 0,
                        duration: 0.15,
                        ease: 'power2.in'
                    },
                    0.62
                );
            }

            // Hold state until pin ends
            tl.to({}, { duration: 0.4 }, 0.6);

            // Initial render of rope
            updateRope(0);
        });

        // 📱 MOBILE ONLY (max-width: 767px): Pure static state, zero animation, zero pinning
        mm.add("(max-width: 767px)", () => {
            setIsSettled(true);
            if (card) {
                gsap.set(card, { clearProps: "all" });
            }
        });

        return () => mm.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="cta-section"
            className="relative w-full py-16 sm:py-24 md:py-0 md:h-screen bg-[#0c1017] border-y border-white/10 overflow-hidden flex items-center justify-center select-none"
        >
            {/* Automotive Racing Ambient Track Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Track Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`,
                        backgroundSize: '28px 28px'
                    }}
                />

                {/* Speed streak lines */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e03627]/30 to-transparent -translate-y-24" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-28" />

                {/* Subtle Ambient Red Glows */}
                <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#e03627]/12 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#e03627]/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Dynamic SVG Rope Canvas Overlay (Desktop Only) */}
            <svg
                className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-20"
                style={{ overflow: 'visible' }}
            >
                <defs>
                    {/* Tow Strap: Racing Red Gradient */}
                    <linearGradient id="towStrapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7f1d1d" />
                        <stop offset="30%" stopColor="#dc2626" />
                        <stop offset="50%" stopColor="#ef4444" />
                        <stop offset="70%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#7f1d1d" />
                    </linearGradient>

                    {/* Strap highlight sheen */}
                    <linearGradient id="ropeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.0" />
                        <stop offset="35%" stopColor="#ffffff" stopOpacity="0.6" />
                        <stop offset="65%" stopColor="#ffffff" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
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
            {/* 🚗 MODERN SIDE-VIEW SVG SPORTS CAR (Desktop Only)         */}
            {/* ========================================================= */}
            <div
                ref={carRef}
                className="hidden md:block absolute top-1/2 -translate-y-[110%] sm:-translate-y-[105%] z-30 pointer-events-none will-change-transform"
                style={{ transformOrigin: 'center center' }}
            >
                <div className="relative w-[260px] sm:w-[360px] md:w-[440px] lg:w-[480px]">
                    {/* Car Tow Hook (Rope Anchor Point) */}
                    <div
                        ref={carHookRef}
                        className="absolute right-[8px] top-[74%] w-4 h-4 -translate-y-1/2 flex items-center justify-center"
                    >
                        <span className="w-3 h-3 rounded-full bg-[#e03627] border-2 border-slate-900 shadow-md shadow-red-500/50 block animate-pulse" />
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
                className="relative z-40 w-full max-w-[800px] mx-auto px-4 sm:px-6"
            >
                {/* Metal Tow Hook Ring on Left Edge (Desktop Only) */}
                <div
                    ref={cardHookRef}
                    className="hidden md:flex absolute -left-1 sm:left-1.5 top-8 sm:top-12 z-50 w-7 h-7 sm:w-8 sm:h-8 -translate-x-1/2 items-center justify-center pointer-events-none"
                >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#e03627] to-[#991b1b] border-2 border-slate-900 flex items-center justify-center shadow-lg shadow-red-500/40">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0c1017] border border-[#e03627]" />
                    </div>
                </div>

                {/* Main Dark Card Container */}
                <div className="bg-[#11141b] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-white/10 shadow-[0_8px_60px_rgba(0,0,0,0.9)] relative overflow-hidden text-center flex flex-col items-center">
                    {/* Top Racing Accent Stripe (Pure Brand Red) */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#e03627]" />

                    {/* Corner Ambient Glow */}
                    <div className="absolute top-0 right-0 w-56 h-56 bg-[#e03627]/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Top Row: Badge + Live Indicator (Centered) */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-5 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e03627]/10 border border-[#e03627]/30 text-[10px] sm:text-[11px] font-machina font-bold text-[#e03627] uppercase tracking-widest">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Bahawalpur's #1 Genuine Parts Store</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-machina text-slate-300">
                            <span className="w-2 h-2 rounded-full bg-[#e03627] animate-pulse block" />
                            <span>WhatsApp Desk Live</span>
                        </div>
                    </div>

                    {/* Main Heading (Centered & High-Impact) */}
                    <h2 className="font-druk text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight mb-3 max-w-2xl mx-auto">
                        NEED CAR SPARE PARTS?{' '}
                        <span className="text-[#e03627]">
                            CHAT ON WHATSAPP NOW!
                        </span>
                    </h2>

                    {/* Subheading (Centered) */}
                    <p className="text-slate-400 font-sans text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
                        Send a photo of your old part or your vehicle chassis number — our auto specialists will confirm exact OEM prices and stock in <strong className="text-white">under 5 minutes</strong>.
                    </p>

                    {/* Buttons Row — Matching GrowthPlanButton Components (Centered) */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
                        {/* WhatsApp CTA */}
                        <GrowthPlanButton
                            text="Inquire on WhatsApp"
                            href={whatsappLink}
                            variant="red"
                            className="w-full sm:w-auto text-center justify-center shadow-xl shadow-red-500/30"
                        />

                        {/* Call CTA */}
                        <GrowthPlanButton
                            text={`Call: ${shopInfo.phone}`}
                            href={phoneLink}
                            variant="outline"
                            className="w-full sm:w-auto text-center justify-center"
                        />
                    </div>

                    {/* 3 Trust Badges Footer (Centered 3 Columns) */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-5 border-t border-white/10 text-slate-300 font-machina text-[11px] sm:text-xs uppercase tracking-wider">
                        <div className="flex items-center justify-center gap-2 text-center">
                            <ShieldCheck className="w-4 h-4 text-[#e03627] shrink-0" />
                            <span>Quality Replacement Spares</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-center">
                            <Zap className="w-4 h-4 text-[#e03627] shrink-0" />
                            <span>Instant Counter Inspection</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-center">
                            <Phone className="w-4 h-4 text-[#e03627] shrink-0" />
                            <span>Direct Handover</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
