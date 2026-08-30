'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const SpeedometerLoader: React.FC = () => {
    const pathname = usePathname();
    
    // Controlled preloader states
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    // 1. Initial Page Load & Pathname Changes - Fade out smoothly after mount
    useEffect(() => {
        setIsFadingOut(false);
        setIsLoading(true);

        // Keep loader active for 1.8s to display the full speedometer needle rev-up animation
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 1800);

        const hideTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2300);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, [pathname]);

    // 2. Intercept Internal Link Clicks to trigger preloader immediately on click
    useEffect(() => {
        const handleLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor && anchor.href) {
                try {
                    const targetUrl = new URL(anchor.href, window.location.href);
                    const currentUrl = new URL(window.location.href);

                    if (
                        targetUrl.origin === currentUrl.origin &&
                        targetUrl.pathname !== currentUrl.pathname &&
                        !anchor.target &&
                        !e.ctrlKey &&
                        !e.metaKey
                    ) {
                        setIsLoading(true);
                        setIsFadingOut(false);
                    }
                } catch {
                    // Ignore invalid URLs
                }
            }
        };

        window.addEventListener('click', handleLinkClick);
        return () => window.removeEventListener('click', handleLinkClick);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            id="speedometer-preloader"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000000',
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 400ms ease-in-out',
                opacity: isFadingOut ? 0 : 1,
                pointerEvents: isFadingOut ? 'none' : 'auto',
                userSelect: 'none',
            }}
            className="select-none"
        >
            <div className="relative w-[160px] h-[160px] border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(211,24,38,0.25)]">
                
                {/* Outer Dial Circle 1 */}
                <div className="absolute w-[142px] h-[142px] border border-white/40 rounded-full border-r-transparent animate-spin-fast" />

                {/* Inner Dial Circle 2 (Racing Red Accent) */}
                <div className="absolute w-[128px] h-[128px] border border-transparent rounded-full border-r-[#d31826] animate-spin-slow" />

                {/* Major Dial Lines */}
                <div className="absolute w-2.5 h-0.5 bg-white left-[16px] top-1/2 -translate-y-1/2" />
                <div className="absolute w-2.5 h-0.5 bg-white left-[33px] top-[33px] rotate-45" />
                <div className="absolute w-0.5 h-2.5 bg-white top-[16px] left-1/2 -translate-x-1/2" />
                <div className="absolute w-2.5 h-0.5 bg-white right-[33px] top-[33px] rotate-[135deg]" />
                <div className="absolute w-2.5 h-0.5 bg-white right-[16px] top-1/2 -translate-y-1/2" />
                <div className="absolute w-2.5 h-0.5 bg-[#d31826] right-[33px] bottom-[33px] rotate-45 shadow-[0_0_8px_#d31826]" />

                {/* Minor Sublines */}
                <div className="absolute w-1 h-0.5 bg-white/70 left-[21px] top-[50px] rotate-[22.5deg]" />
                <div className="absolute w-1 h-0.5 bg-white/70 left-[50px] top-[21px] rotate-[67.5deg]" />
                <div className="absolute w-1 h-0.5 bg-white/70 right-[50px] top-[21px] rotate-[112.5deg]" />
                <div className="absolute w-1 h-0.5 bg-white/70 right-[21px] top-[50px] rotate-[157.5deg]" />
                <div className="absolute w-1 h-0.5 bg-[#d31826] right-[20px] bottom-[49px] rotate-[22.5deg]" />

                {/* Speedometer Needle */}
                <div className="absolute w-[14px] h-[14px] rounded-full border border-white bg-black z-10 animate-speed-needle">
                    <div className="absolute top-1/2 right-1/2 -translate-y-1/2 w-0 h-0 border-y-[3.5px] border-y-transparent border-r-[48px] border-r-[#d31826] filter drop-shadow-[0_0_6px_#d31826]" />
                </div>

                {/* Loading Text */}
                <div className="absolute top-1/2 mt-4 left-0 w-full text-center text-[10px] font-bold uppercase tracking-widest text-white font-sans">
                    LOADING...
                </div>

            </div>

            {/* Embedded CSS Animations */}
            <style jsx global>{`
                @keyframes spinFast {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes spinSlow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes pegIt {
                    0% { transform: rotate(0deg); }
                    16% { transform: rotate(75deg); }
                    25% { transform: rotate(55deg); }
                    30% { transform: rotate(90deg); }
                    36% { transform: rotate(170deg); }
                    42% { transform: rotate(150deg); }
                    50% { transform: rotate(227deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-spin-fast {
                    animation: spinFast 3s linear infinite;
                }
                .animate-spin-slow {
                    animation: spinSlow 5s linear infinite;
                }
                .animate-speed-needle {
                    animation: pegIt 2.2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default SpeedometerLoader;
