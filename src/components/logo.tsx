'use client';

import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'light' | 'dark' | 'color';
    align?: 'left' | 'center' | 'right';
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
    className = '',
    size = 'md',
    variant = 'color',
    align = 'left'
}) => {
    const sizeMap = {
        sm: { img: 'h-9 sm:h-11' },
        md: { img: 'h-14 sm:h-16 md:h-18' },
        lg: { img: 'h-20 sm:h-26 md:h-30' },
        xl: { img: 'h-24 sm:h-32 md:h-38' },
    };

    const currentSize = sizeMap[size];
    const justifyClass = align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start';

    return (
        <div className={`flex items-center ${justifyClass} select-none ${className}`}>
            {/* Clean Transparent PNG Logo */}
            <div className={`relative flex items-center ${justifyClass} group`}>
                <img
                    src="/logo.png"
                    alt="Auto Parts & Accessories PK"
                    className={`${currentSize.img} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                        variant === 'light' ? 'brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]' : 'drop-shadow-sm'
                    }`}
                />
            </div>
        </div>
    );
};

export default Logo;

