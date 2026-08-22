'use client';

import React, { useState } from 'react';
import { faqsData, shopInfo } from '@/data/partsData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="w-full max-w-[1440px] mx-auto py-12 px-4 sm:px-6">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 text-xs font-machina font-bold text-[#e23b2c] uppercase tracking-wider mb-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>COMMON QUESTIONS • FREQUENTLY ASKED QUESTIONS</span>
                </div>
                <h2 className="font-druk text-3xl sm:text-4xl uppercase tracking-tight text-[#11141a]">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className="text-slate-600 font-sans text-xs sm:text-sm mt-2">
                    Essential details regarding genuine parts, ordering process, delivery times, and store policies.
                </p>
            </div>

            {/* FAQs Accordion */}
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
                                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#e23b2c]' : ''
                                        }`}
                                />
                            </button>

                            {isOpen && (
                                <div className="px-5 pb-5 text-xs sm:text-sm font-sans text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                                    {faq.a}
                                </div>
                            )}
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
                    href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Hello! I have a specific question regarding auto spare parts.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-machina font-bold text-[#e23b2c] hover:underline"
                >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Chat Directly with our Auto Specialist on WhatsApp</span>
                </a>
            </div>
        </section>
    );
};

export default FaqSection;
