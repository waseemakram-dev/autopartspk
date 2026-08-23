'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqsData, shopInfo } from '@/data/partsData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[1400px] mx-auto">
                {/* Centered Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 flex flex-col items-center">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#e03627]/10 text-[10px] sm:text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider mb-3 whitespace-nowrap">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span className="sm:hidden">FREQUENTLY ASKED QUESTIONS</span>
                        <span className="hidden sm:inline">COMMON QUESTIONS • FREQUENTLY ASKED QUESTIONS</span>
                    </div>
                    <h2 className="font-druk text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#11141a]">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                    <p className="text-slate-600 font-sans text-xs sm:text-sm mt-2 max-w-lg mx-auto leading-relaxed">
                        Essential details regarding genuine parts, ordering process, counter pickup, and store policies.
                    </p>
                </div>

            {/* FAQs Accordion with Smooth Animated Height */}
            <div className="max-w-3xl mx-auto space-y-3">
                {faqsData.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-druk text-base sm:text-lg uppercase tracking-tight text-[#11141a]">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#e03627]' : ''
                                        }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 text-xs sm:text-sm font-sans text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>

            {/* Quick WhatsApp Assistance */}
            <div className="text-center mt-8">
                <p className="text-xs font-machina text-slate-500 mb-2">
                    Have a specific question not covered here?
                </p>
                <a
                    href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Assalam o Alaikum! Mujhe Auto Parts & Accessories PK Bahawalpur se car parts ke baray mein sawal poochna hai.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-machina font-bold text-[#e03627] hover:underline"
                >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Chat Directly with our Auto Specialist on WhatsApp</span>
                </a>
            </div>
            </div>
        </section>
    );
};

export default FaqSection;
