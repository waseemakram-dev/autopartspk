'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  MessageSquare,
  Search,
  Camera,
  MapPin,
  ShieldCheck,
  Store,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Logo } from './logo';
import { shopInfo } from '@/data/partsData';
import { GrowthPlanButton } from './Button';

interface NavbarProps {
  onOpenPartFinder?: () => void;
  onOpenLocation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartFinder, onOpenLocation }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = shopInfo.phone;
  const whatsappNumber = shopInfo.whatsapp;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Assalam o Alaikum! Mujhe Auto Parts & Accessories PK Bahawalpur se spare parts ki price aur availability confirm karni hai.")}`;
  const phoneLink = `tel:${phoneNumber.replace(/\s+/g, '')}`;

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      {/* FLOATING SLEEK WHITE + TRANSPARENT GLASS CAPSULE NAVBAR */}
      <div className={`pointer-events-auto max-w-[1400px] mx-auto rounded-2xl sm:rounded-full transition-all duration-300 border ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-2xl border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.18)] py-2 sm:py-2.5 px-4 sm:px-6 text-slate-900'
          : 'bg-white/80 hover:bg-white/90 backdrop-blur-xl border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-2.5 sm:py-3 px-4 sm:px-6 text-slate-800'
        } flex items-center justify-between gap-4`}>

        {/* 1. BRAND LOGO */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <Logo size="md" />
        </a>

        {/* 2. CENTER DESKTOP NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-machina font-bold uppercase tracking-wider text-slate-700">
          <a
            href="/about"
            className="hover:text-[#e03627] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e03627] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            About Us
          </a>

          <a
            href="/#brands"
            className="hover:text-[#e03627] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e03627] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Car Brands
          </a>

          <a
            href="/#categories"
            className="hover:text-[#e03627] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e03627] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Spare Categories
          </a>

          <a
            href="/#products"
            className="hover:text-[#e03627] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e03627] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Stock Catalog
          </a>

          <a
            href="/#snap-send"
            className="hover:text-[#e03627] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e03627] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Snap & Send
          </a>

          <a
            href="/#bahawalpur"
            className="hover:text-[#e03627] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e03627] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Store Location
          </a>
        </nav>

        {/* 3. RIGHT CALL & WHATSAPP ACTION BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Direct Store Phone Dial */}
          <a
            href={phoneLink}
            className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100/90 hover:bg-slate-200 border border-slate-200/90 text-xs font-machina text-slate-800 transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#e03627]" />
            <span className="font-bold">{phoneNumber}</span>
          </a>

          {/* Signature GrowthPlanButton from Button.tsx */}
          <GrowthPlanButton
            text="WhatsApp Inquiry"
            href={whatsappLink}
            variant="red"
            className="!py-2 !px-5 !text-xs shadow-lg shadow-red-500/30"
          />
        </div>

        {/* 4. MOBILE MENU TRIGGER */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-800" />}
          </button>
        </div>

      </div>

      {/* MOBILE EXPANDED MENU DRAWER (Pure Solid White Capsule with High-Contrast Typography) */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden mt-2 max-w-[1400px] mx-auto rounded-3xl bg-white border border-slate-200 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">

          {/* Quick Dual Actions Bar */}
          <div className="grid grid-cols-2 gap-2.5 pb-3 border-b border-slate-100">
            <a
              href={phoneLink}
              className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-machina font-bold text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#e03627]" />
              <span>Call Counter</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#e03627] hover:bg-[#c92a1c] text-xs font-machina font-bold text-white shadow-lg shadow-red-500/25 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Navigation Links (Crisp Dark Text with Hover Red Glow) */}
          <div className="space-y-1 text-xs font-machina uppercase tracking-wider font-bold text-slate-800">
            <a
              href="#brands"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#e03627] transition-colors"
            >
              <span>Car Brands (Toyota, Honda, Suzuki)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#categories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#e03627] transition-colors"
            >
              <span>Spare Categories (Brakes, Shocks, Filters)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#e03627] transition-colors"
            >
              <span>Fast-Moving Stock Catalog</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#snap-send"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#e03627] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#e03627]" />
                <span>Snap & Send Part Photo</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#bahawalpur"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#e03627] transition-colors"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#e03627]" />
                <span>Physical Store Location</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Shop Hours Status in Mobile Drawer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-machina text-slate-600">
            <span className="flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-[#e03627]" />
              <span>Ayyoub Chowk, Bahawalpur</span>
            </span>
            <span className="text-[#e03627] font-bold">● Counter Open</span>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;

