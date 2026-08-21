'use client';

import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'light' | 'dark' | 'color';
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
    className = '',
    size = 'md'
}) => {
    const sizeMap = {
        sm: { img: 'h-10 sm:h-12' },
        md: { img: 'h-14 sm:h-16 md:h-18' },
        lg: { img: 'h-20 sm:h-24' },
        xl: { img: 'h-28 sm:h-36' },
    };

    const currentSize = sizeMap[size];

    return (
        <div className={`flex items-center justify-center select-none ${className}`}>
            {/* Clean, Large Logo without white box wrapper */}
            <div className="relative flex items-center justify-center group overflow-hidden rounded-xl">
                <img
                    src="/logo.jpeg"
                    alt="Auto Parts & Accessories PK"
                    className={`${currentSize.img} w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-xl`}
                />
            </div>
        </div>
    );
};

export default Logo;
