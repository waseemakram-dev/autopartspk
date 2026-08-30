'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  MessageSquare,
  MapPin,
  Store,
  CheckCircle2,
  Package,
  Info
} from 'lucide-react';
import { Logo } from './logo';
import { shopInfo } from '@/data/partsData';
import { GrowthPlanButton } from './Button';

interface NavbarProps {
  onOpenPartFinder?: () => void;
  onOpenLocation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
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
    <header className="w-full absolute top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300 font-['Space_Grotesk',sans-serif]">
      {/* FLOATING SLEEK WHITE + TRANSPARENT GLASS CAPSULE NAVBAR */}
      <div className={`pointer-events-auto max-w-[1400px] mx-auto rounded-2xl sm:rounded-full transition-all duration-300 border ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-2xl border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.18)] py-2 sm:py-2.5 px-4 sm:px-6 text-slate-900'
          : 'bg-white/80 hover:bg-white/90 backdrop-blur-xl border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-2.5 sm:py-3 px-4 sm:px-6 text-slate-800'
        } flex items-center justify-between gap-4`}>

        {/* 1. BRAND LOGO (Navigates directly to Homepage /) */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 cursor-pointer">
          <Logo size="md" />
        </Link>

        {/* 2. CENTER DESKTOP NAVIGATION LINKS (Only Valid Existing Pages) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-700 font-['Rajdhani',sans-serif]">
          <Link
            href="/"
            className="hover:text-[#d31826] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d31826] after:absolute after:bottom-0 after:left-0 after:transition-all text-sm"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-[#d31826] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d31826] after:absolute after:bottom-0 after:left-0 after:transition-all text-sm"
          >
            Products Catalog
          </Link>

          <Link
            href="/toyota-parts-bahawalpur"
            className="hover:text-[#d31826] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d31826] after:absolute after:bottom-0 after:left-0 after:transition-all text-sm"
          >
            Toyota Parts
          </Link>

          <Link
            href="/honda-parts-bahawalpur"
            className="hover:text-[#d31826] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d31826] after:absolute after:bottom-0 after:left-0 after:transition-all text-sm"
          >
            Honda Parts
          </Link>

          <Link
            href="/suzuki-parts-bahawalpur"
            className="hover:text-[#d31826] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d31826] after:absolute after:bottom-0 after:left-0 after:transition-all text-sm"
          >
            Suzuki Parts
          </Link>

          <Link
            href="/about"
            className="hover:text-[#d31826] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d31826] after:absolute after:bottom-0 after:left-0 after:transition-all text-sm"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#d31826] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d31826] after:absolute after:bottom-0 after:left-0 after:transition-all text-sm"
          >
            Contact
          </Link>
        </nav>

        {/* 3. RIGHT CALL & WHATSAPP ACTION BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Direct Store Phone Dial */}
          <a
            href={phoneLink}
            className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100/90 hover:bg-slate-200 border border-slate-200/90 text-xs font-bold text-slate-800 transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#d31826]" />
            <span className="font-bold">{phoneNumber}</span>
          </a>

          {/* WhatsApp Inquiry Button */}
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

      {/* MOBILE EXPANDED MENU DRAWER (Pure Solid White Capsule with Valid Links) */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden mt-2 max-w-[1400px] mx-auto rounded-3xl bg-white border border-slate-200 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 font-['Space_Grotesk',sans-serif]">

          {/* Quick Dual Actions Bar */}
          <div className="grid grid-cols-2 gap-2.5 pb-3 border-b border-slate-100">
            <a
              href={phoneLink}
              className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d31826]" />
              <span>Call Counter</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#d31826] hover:bg-[#b81320] text-xs font-bold text-white shadow-lg shadow-red-500/25 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Links to Real Existing Pages Only */}
          <div className="space-y-1 text-xs uppercase tracking-wider font-bold text-slate-800">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#d31826] transition-colors"
            >
              <span>Home Page</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#d31826] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4 text-[#d31826]" />
                <span>Products Catalog</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/toyota-parts-bahawalpur"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#d31826] transition-colors"
            >
              <span>Toyota Parts Bahawalpur</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/honda-parts-bahawalpur"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#d31826] transition-colors"
            >
              <span>Honda Parts Bahawalpur</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/suzuki-parts-bahawalpur"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#d31826] transition-colors"
            >
              <span>Suzuki Parts Bahawalpur</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#d31826] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#d31826]" />
                <span>About Our Store</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 hover:text-[#d31826] transition-colors"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d31826]" />
                <span>Contact & Location</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Shop Hours Status in Mobile Drawer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
            <span className="flex items-center gap-1.5 font-bold">
              <Store className="w-3.5 h-3.5 text-[#d31826]" />
              <span>Ayyoub Chowk, Bahawalpur</span>
            </span>
            <span className="text-[#d31826] font-bold">● Counter Open</span>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;
