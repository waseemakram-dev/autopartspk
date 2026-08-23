"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "dark" | "red" | "outline" | "white";
}

/**
 * 1. BookCallButton - Signature Framer White Pill Button with Expanding Dot Background Effect
 */
export function BookCallButton({
  text = "BOOK A CALL",
  href = "#contact",
  className = "",
  onClick,
  variant = "white",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const bgStyle = variant === "red" 
    ? "bg-[#e03627] text-white border-[#e03627]"
    : variant === "dark"
    ? "bg-[#141414] text-white border-white/20"
    : variant === "outline"
    ? "bg-white/10 text-white border-white/25 backdrop-blur-sm"
    : "bg-[#fef9ff] text-[#141414] border-white/80";

  // Calculate text color dynamically to guarantee 100% contrast in both normal & hover states
  const textColor = variant === "white"
    ? (isHovered ? "#ffffff" : "#141414")
    : (isHovered ? "#141414" : "#ffffff");

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      whileHover="hover"
      className={`relative inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] gap-2 sm:gap-3.5 md:gap-5 overflow-hidden cursor-pointer select-none border shadow-xl py-2 px-4 sm:py-2.5 sm:px-5 md:px-6 ${bgStyle} ${className}`}
      style={{
        borderRadius: "50px",
      }}
    >
      {/* Button Text */}
      <span
        className="relative z-10 text-[11px] sm:text-[13px] md:text-[14px] font-semibold tracking-wide transition-colors duration-300 uppercase font-machina whitespace-nowrap"
        style={{
          color: textColor,
        }}
      >
        {text}
      </span>

      {/* Expanding Dot Animation Wrapper */}
      <div
        className="relative z-1 w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] flex items-center justify-center shrink-0"
        style={{ zIndex: 1 }}
      >
        {/* Expanding Dot */}
        <motion.div
          className="absolute w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full pointer-events-none"
          style={{ 
            backgroundColor: variant === "white" 
              ? "#141414" 
              : "#ffffff" 
          }}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 85 },
          }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
        />

        {/* Inner Dot */}
        <motion.div
          className="absolute w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] rounded-full z-20 pointer-events-none"
          style={{ 
            backgroundColor: variant === "white" 
              ? "#ffffff" 
              : "#141414" 
          }}
          variants={{
            initial: { opacity: 0, scale: 0.5 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        />
      </div>
    </motion.a>
  );
}

/**
 * 2. GrowthPlanButton - Dual-Arrow Slide Pill Button ("GET MY GROWTH PLAN")
 */
export function GrowthPlanButton({
  text = "GET MY GROWTH PLAN",
  href = "#pricing",
  className = "",
  onClick,
  variant = "dark",
}: ButtonProps) {
  // Theme color definitions based on variant
  const themes = {
    dark: {
      initialBg: "rgb(20, 20, 20)",
      initialText: "rgb(255, 255, 255)",
      initialBorder: "rgba(255, 255, 255, 0.15)",
      hoverBg: "rgb(255, 255, 255)",
      hoverText: "rgb(20, 20, 20)",
      hoverBorder: "rgb(255, 255, 255)",
      arrowInitialBg: "rgb(255, 255, 255)",
      arrowInitialText: "rgb(20, 20, 20)",
      arrowHoverBg: "rgb(20, 20, 20)",
      arrowHoverText: "rgb(255, 255, 255)",
    },
    red: {
      initialBg: "rgb(224, 54, 39)",
      initialText: "rgb(255, 255, 255)",
      initialBorder: "rgb(224, 54, 39)",
      hoverBg: "rgb(255, 255, 255)",
      hoverText: "rgb(224, 54, 39)",
      hoverBorder: "rgb(255, 255, 255)",
      arrowInitialBg: "rgb(255, 255, 255)",
      arrowInitialText: "rgb(224, 54, 39)",
      arrowHoverBg: "rgb(224, 54, 39)",
      arrowHoverText: "rgb(255, 255, 255)",
    },
    outline: {
      initialBg: "rgba(255, 255, 255, 0.08)",
      initialText: "rgb(255, 255, 255)",
      initialBorder: "rgba(255, 255, 255, 0.25)",
      hoverBg: "rgb(255, 255, 255)",
      hoverText: "rgb(20, 20, 20)",
      hoverBorder: "rgb(255, 255, 255)",
      arrowInitialBg: "rgb(255, 255, 255)",
      arrowInitialText: "rgb(20, 20, 20)",
      arrowHoverBg: "rgb(20, 20, 20)",
      arrowHoverText: "rgb(255, 255, 255)",
    },
    white: {
      initialBg: "rgb(255, 255, 255)",
      initialText: "rgb(20, 20, 20)",
      initialBorder: "rgb(226, 232, 240)",
      hoverBg: "rgb(224, 54, 39)",
      hoverText: "rgb(255, 255, 255)",
      hoverBorder: "rgb(224, 54, 39)",
      arrowInitialBg: "rgb(20, 20, 20)",
      arrowInitialText: "rgb(255, 255, 255)",
      arrowHoverBg: "rgb(255, 255, 255)",
      arrowHoverText: "rgb(224, 54, 39)",
    },
  };

  const currentTheme = themes[variant] || themes.dark;

  return (
    <motion.a
      href={href}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      className={`relative inline-flex items-center justify-center min-h-[42px] sm:min-h-[46px] py-2 px-4 sm:py-2.5 sm:px-5 md:px-6 rounded-full text-xs sm:text-sm font-semibold cursor-pointer select-none overflow-hidden border shadow-xl ${className}`}
      variants={{
        initial: {
          backgroundColor: currentTheme.initialBg,
          color: currentTheme.initialText,
          borderColor: currentTheme.initialBorder,
        },
        hover: {
          backgroundColor: currentTheme.hoverBg,
          color: currentTheme.hoverText,
          borderColor: currentTheme.hoverBorder,
        },
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderRadius: "50px" }}
    >
      {/* Left Arrow Circle (Slides In on Hover) */}
      <motion.div
        className="rounded-full flex items-center justify-center shrink-0 overflow-hidden"
        variants={{
          initial: {
            x: -16,
            opacity: 0,
            width: 0,
            height: 24,
            marginRight: 0,
            backgroundColor: currentTheme.arrowHoverBg,
            color: currentTheme.arrowHoverText,
          },
          hover: {
            x: 0,
            opacity: 1,
            width: 24,
            height: 24,
            marginRight: 8,
            backgroundColor: currentTheme.arrowHoverBg,
            color: currentTheme.arrowHoverText,
          },
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
      </motion.div>

      {/* Button Text */}
      <motion.span
        variants={{
          initial: { color: currentTheme.initialText },
          hover: { color: currentTheme.hoverText },
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 font-semibold tracking-wide text-[11px] sm:text-[13px] md:text-[14px] uppercase font-machina whitespace-nowrap"
      >
        {text}
      </motion.span>

      {/* Right Arrow Circle (Slides Out on Hover) */}
      <motion.div
        className="rounded-full flex items-center justify-center shrink-0 overflow-hidden"
        variants={{
          initial: {
            x: 0,
            y: 0,
            opacity: 1,
            width: 24,
            height: 24,
            marginLeft: 8,
            backgroundColor: currentTheme.arrowInitialBg,
            color: currentTheme.arrowInitialText,
          },
          hover: {
            x: 16,
            y: -16,
            opacity: 0,
            width: 0,
            height: 24,
            marginLeft: 0,
            backgroundColor: currentTheme.arrowInitialBg,
            color: currentTheme.arrowInitialText,
          },
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
      </motion.div>
    </motion.a>
  );
}

/**
 * 3. FramerPillButton - Framer Expanding Fill + Vertical Text Slide + Sliding Arrow Button (used in Pricing, 404 & Contact Form)
 */
export function FramerPillButton({
  text = "GO HOME",
  href,
  className = "",
  onClick,
  type,
}: ButtonProps) {
  const content = (
    <>
      {/* Background Fill Scale Animation on Hover */}
      <motion.div
        className="framer-en6tir absolute inset-0 rounded-[50px] pointer-events-none z-0 bg-[#4555fd]"
        style={{ transformOrigin: "0% 50%" }}
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Centered Wrapper holding Text + Arrow Inline Together */}
      <div className="relative z-10 flex items-center justify-center gap-3.5 mx-auto text-center">
        {/* Vertical Sliding Text */}
        <div className="framer-x6s7lu relative h-[24px] overflow-hidden">
          <motion.div
            className="flex flex-col items-center"
            variants={{
              initial: { y: 0 },
              hover: { y: -24 },
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="h-[24px] flex items-center font-semibold tracking-wide text-base sm:text-lg text-[#141414]">
              {text}
            </span>
            <span className="h-[24px] flex items-center font-semibold tracking-wide text-base sm:text-lg text-white">
              {text}
            </span>
          </motion.div>
        </div>

        {/* Sliding Arrow Icon Container right next to text */}
        <div className="framer-1qmizm2 relative w-5 h-5 flex items-center justify-center shrink-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              initial: { x: 0, y: 0, opacity: 1 },
              hover: { x: 16, y: -16, opacity: 0 },
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ArrowUpRight className="w-5 h-5 stroke-[2.5] text-[#141414]" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              initial: { x: -16, y: 16, opacity: 0 },
              hover: { x: 0, y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ArrowUpRight className="w-5 h-5 stroke-[2.5] text-white" />
          </motion.div>
        </div>
      </div>
    </>
  );

  const baseClasses = `relative inline-flex items-center justify-center h-[56px] sm:h-[60px] px-8 sm:px-10 rounded-[50px] text-base font-semibold cursor-pointer select-none overflow-hidden shadow-xl border border-white/10 bg-[#fef9ff] text-[#141414] ${className}`;

  if (type) {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        initial="initial"
        whileHover="hover"
        className={baseClasses}
        style={{ borderRadius: "50px" }}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href || "/"}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      className={baseClasses}
      style={{ borderRadius: "50px" }}
    >
      {content}
    </motion.a>
  );
}

