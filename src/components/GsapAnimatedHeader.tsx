'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface GsapAnimatedHeaderProps {
    badgeText?: string;
    badgeIcon?: React.ReactNode;
    titleText: string;
    highlightText?: string;
    descriptionText?: string;
    align?: 'center' | 'left';
    theme?: 'dark' | 'light';
    className?: string;
}

export const GsapAnimatedHeader: React.FC<GsapAnimatedHeaderProps> = ({
    badgeText,
    badgeIcon,
    titleText,
    highlightText,
    descriptionText,
    align = 'center',
    theme = 'light',
    className = ''
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const eyebrowRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const container = containerRef.current;
        const eyebrowEl = eyebrowRef.current;
        const titleEl = titleRef.current;
        const descEl = descRef.current;

        if (!container) return;

        // Utility: Split element text into character spans
        const splitIntoSpans = (element: HTMLElement) => {
            const nodes = Array.from(element.childNodes);

            nodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent;
                    if (!text || text.trim() === '') return;

                    const fragment = document.createDocumentFragment();
                    const words = text.split(/(\s+)/);

                    words.forEach(word => {
                        if (word.trim() === '') {
                            fragment.appendChild(document.createTextNode(word));
                        } else {
                            const wordSpan = document.createElement('span');
                            wordSpan.style.display = 'inline-block';
                            wordSpan.style.whiteSpace = 'nowrap';

                            for (const char of word) {
                                const charSpan = document.createElement('span');
                                charSpan.innerText = char;
                                charSpan.style.display = 'inline-block';
                                charSpan.classList.add('gsap-split-char');
                                wordSpan.appendChild(charSpan);
                            }
                            fragment.appendChild(wordSpan);
                        }
                    });

                    node.parentNode?.replaceChild(fragment, node);
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    splitIntoSpans(node as HTMLElement);
                }
            });
        };

        // Split text nodes into spans for animation
        if (eyebrowEl) splitIntoSpans(eyebrowEl);
        if (titleEl) splitIntoSpans(titleEl);

        const eyebrowChars = eyebrowEl ? eyebrowEl.querySelectorAll('.gsap-split-char') : [];
        const titleChars = titleEl ? titleEl.querySelectorAll('.gsap-split-char') : [];

        // Set initial GSAP hidden states (prevents FOUC)
        if (eyebrowChars.length > 0) gsap.set(eyebrowChars, { opacity: 0, y: 10 });
        if (titleChars.length > 0) gsap.set(titleChars, { opacity: 0, x: 20 });
        if (descEl) gsap.set(descEl, { opacity: 0, y: 10 });

        // ScrollTrigger Timeline - Super Snappy & 3x Faster Speed
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top 92%',
                    toggleActions: 'play none none none'
                }
            });

            // 1. Eyebrow badge: Snappy letter fade-in-up
            if (eyebrowChars.length > 0) {
                tl.to(eyebrowChars, {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                    stagger: 0.006,
                    ease: 'power3.out'
                }, 0);
            }

            // 2. Title: Snappy letter fade-in-right
            if (titleChars.length > 0) {
                tl.to(titleChars, {
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                    stagger: 0.006,
                    ease: 'power3.out'
                }, 0.05);
            }

            // 3. Description: Snappy y: 10px to 0 fade-in
            if (descEl) {
                tl.to(descEl, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power3.out'
                }, 0.12);
            }
        }, container);

        return () => ctx.revert();
    }, [badgeText, titleText, highlightText, descriptionText]);

    const alignClass = align === 'center'
        ? 'text-center max-w-2xl mx-auto flex flex-col items-center'
        : 'text-left max-w-2xl space-y-3';

    const isDark = theme === 'dark';

    return (
        <div ref={containerRef} className={`${alignClass} ${className} mb-10 sm:mb-14 select-none`}>
            {/* Status Eyebrow Badge */}
            {badgeText && (
                <div
                    ref={eyebrowRef}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-machina font-bold uppercase tracking-wider mb-3 ${
                        isDark
                            ? 'bg-[#d31826]/15 border border-[#d31826]/40 text-[#ff5747]'
                            : 'bg-[#d31826]/10 text-[#d31826]'
                    }`}
                >
                    {badgeIcon}
                    <span>{badgeText}</span>
                </div>
            )}

            {/* GSAP Character Split Title */}
            <h2
                ref={titleRef}
                className={`font-druk text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-tight ${
                    isDark ? 'text-white' : 'text-[#0f1115]'
                }`}
            >
                {titleText}{' '}
                {highlightText && (
                    <span className="text-[#d31826]">{highlightText}</span>
                )}
            </h2>

            {/* GSAP Description Paragraph */}
            {descriptionText && (
                <p
                    ref={descRef}
                    className={`font-machina text-xs sm:text-sm mt-2.5 max-w-lg leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                >
                    {descriptionText}
                </p>
            )}
        </div>
    );
};

export default GsapAnimatedHeader;
