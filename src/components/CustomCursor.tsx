'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const cursor = cursorRef.current;
        if (!cursor) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 2;
        let isHovered = false;
        let isClicked = false;
        let animationFrameId: number;

        // Position immediately
        cursor.style.opacity = '1';
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        };

        const onMouseDown = () => {
            isClicked = true;
            updateCursorSize();
        };

        const onMouseUp = () => {
            isClicked = false;
            updateCursorSize();
        };

        const updateCursorSize = () => {
            if (!cursor) return;
            const size = isHovered ? 54 : 26;
            cursor.style.width = `${size}px`;
            cursor.style.height = `${size}px`;
        };

        // Smooth 60-120fps hardware loop
        const renderLoop = () => {
            const dx = mouseX - currentX;
            const dy = mouseY - currentY;
            currentX += dx * 0.25;
            currentY += dy * 0.25;

            if (cursor) {
                const scale = isClicked ? 0.75 : 1;
                cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${scale})`;
            }

            animationFrameId = requestAnimationFrame(renderLoop);
        };

        // Listen for hover over text and interactive elements
        const handleHover = () => {
            const hoverables = document.querySelectorAll(
                'a, button, select, input, textarea, [role="button"], .cursor-pointer, h1, h2, h3, h4, h5, p, span, img'
            );

            hoverables.forEach((el) => {
                el.addEventListener('mouseenter', () => {
                    isHovered = true;
                    updateCursorSize();
                });
                el.addEventListener('mouseleave', () => {
                    isHovered = false;
                    updateCursorSize();
                });
            });
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        animationFrameId = requestAnimationFrame(renderLoop);
        handleHover();

        const observer = new MutationObserver(handleHover);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, [mounted]);

    if (!mounted || typeof document === 'undefined') return null;

    return createPortal(
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '26px',
                height: '26px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 999999999,
                mixBlendMode: 'difference',
                opacity: 1,
                transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
                transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform, width, height'
            }}
        />,
        document.body
    );
};

export default CustomCursor;
