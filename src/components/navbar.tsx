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
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I would like to inquire about genuine spare parts at Auto Parts & Accessories PK Bahawalpur.")}`;
  const phoneLink = `tel:${phoneNumber.replace(/\s+/g, '')}`;

  return (
    <header className="w-full sticky top-0 z-50 px-3 sm:px-6 py-2.5 transition-all duration-300">
      {/* FLOATING SLEEK AUTOMOTIVE GLASS CAPSULE NAVBAR */}
      <div className={`max-w-[1400px] mx-auto rounded-2xl sm:rounded-full transition-all duration-300 border ${
        isScrolled
          ? 'bg-[#0f1115]/95 backdrop-blur-2xl border-white/15 shadow-2xl shadow-black/40 py-2.5 px-4 sm:px-6'
          : 'bg-[#12161f]/90 backdrop-blur-xl border-white/10 shadow-xl py-3 px-4 sm:px-6'
      } flex items-center justify-between gap-4 text-white`}>

        {/* 1. BRAND LOGO */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <Logo size="md" variant="light" />
        </a>

        {/* 2. CENTER DESKTOP NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-machina font-semibold uppercase tracking-wider text-slate-300">
          <a
            href="#brands"
            className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e03627] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Car Brands
          </a>

          <a
            href="#categories"
            className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e03627] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Spare Categories
          </a>

          <a
            href="#products"
            className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#e03627] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Stock Catalog
          </a>

          {/* "Snap & Send" Highlight Pill Tab */}
          <a
            href="#snap-send"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e03627]/15 border border-[#e03627]/40 text-[#ff4d3d] hover:bg-[#e03627] hover:text-white transition-all text-[11px] font-bold"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Snap & Send</span>
          </a>

          <a
            href="#bahawalpur"
            className="hover:text-white transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
          >
            <MapPin className="w-3.5 h-3.5 text-[#e03627]" />
            <span>Bahawalpur Store</span>
          </a>
        </nav>

        {/* 3. RIGHT CALL & WHATSAPP ACTION BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Direct Store Phone Dial */}
          <a
            href={phoneLink}
            className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-machina text-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#e03627]" />
            <span className="font-bold">{phoneNumber}</span>
          </a>

          {/* Signature GrowthPlanButton from Button.tsx */}
          <GrowthPlanButton
            text="WhatsApp Inquiry"
            href={whatsappLink}
            className="!py-2 !px-5 !text-xs !bg-[#e03627] !text-white !border-[#e03627] shadow-lg shadow-red-500/30"
          />
        </div>

        {/* 4. MOBILE MENU TRIGGER & QUICK CHAT */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-[#e03627] text-[11px] font-machina font-bold uppercase tracking-wider text-white flex items-center gap-1.5 shadow-md"
          >
            <MessageSquare className="w-3 h-3 fill-current" />
            <span>Chat</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

      </div>

      {/* MOBILE EXPANDED MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-[1400px] mx-auto rounded-3xl bg-[#0f1115]/98 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          
          {/* Quick Dual Actions Bar */}
          <div className="grid grid-cols-2 gap-2.5 pb-3 border-b border-white/10">
            <a
              href={phoneLink}
              className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-machina font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#e03627]" />
              <span>Call Counter</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#e03627] text-xs font-machina font-bold text-white shadow-lg shadow-red-500/30"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1 text-xs font-machina uppercase tracking-wider font-semibold text-slate-300">
            <a
              href="#brands"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
            >
              <span>Car Brands (Toyota, Honda, Suzuki)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href="#categories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
            >
              <span>Spare Categories (Brakes, Shocks, Filters)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href="#snap-send"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-[#e03627]/10 text-[#ff4d3d] border border-[#e03627]/30 font-bold"
            >
              <span className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Snap & Send Part Photo
              </span>
              <ChevronRight className="w-4 h-4 text-[#e03627]" />
            </a>

            <a
              href="#products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
            >
              <span>Fast-Moving Stock</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href="#bahawalpur"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#e03627]" />
                Bahawalpur Store Location & Delivery
              </span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Shop Hours Status in Mobile Drawer */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-machina text-slate-400">
            <span className="flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-emerald-400" />
              <span>Model Town, Dubai Chowk</span>
            </span>
            <span className="text-emerald-400 font-bold">● Open Now</span>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;
