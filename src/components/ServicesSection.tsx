'use client';

import React from 'react';
import { servicesList, ServiceItem, shopInfo } from '@/data/partsData';
import { Camera, ShieldCheck, Store, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
    const getServiceIcon = (iconName: string) => {
        switch (iconName) {
            case 'Camera': return <Camera className="w-6 h-6 text-[#e23b2c]" />;
            case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#e23b2c]" />;
            case 'Store': return <Store className="w-6 h-6 text-[#e23b2c]" />;
            case 'Wrench': return <Wrench className="w-6 h-6 text-[#e23b2c]" />;
            default: return <Wrench className="w-6 h-6 text-[#e23b2c]" />;
        }
    };

    return (
        <section id="services" className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
            <div className="w-full max-w-[1400px] mx-auto">
                {/* Centered Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e03627]/10 text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider mb-3">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>PREMIUM SHOP SERVICES & CUSTOMER ASSURANCE</span>
                </div>
                <h2 className="font-druk text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#11141a]">
                    OUR CORE SERVICES
                </h2>
                <p className="text-slate-600 font-sans text-xs sm:text-sm mt-2 max-w-lg mx-auto leading-relaxed">
                    Purchasing auto parts in Bahawalpur is now seamless — from WhatsApp photo inquiries to hands-on part matching and instant walk-in counter pickups.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {servicesList.map((service: ServiceItem) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                    >
                        <div>
                            {/* Icon & Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 rounded-2xl bg-slate-100 group-hover:bg-[#11141a] transition-colors">
                                    {getServiceIcon(service.icon)}
                                </div>
                                <span className="text-[10px] font-machina font-bold uppercase tracking-wider text-[#e23b2c] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                                    {service.badge}
                                </span>
                            </div>

                            {/* Titles */}
                            <h3 className="font-druk text-xl uppercase tracking-tight text-[#11141a] leading-tight mb-1 group-hover:text-[#e23b2c] transition-colors">
                                {service.title}
                            </h3>
                            <span className="text-xs font-machina text-slate-500 font-medium block mb-3 uppercase tracking-wider">
                                {service.urduTitle}
                            </span>

                            <p className="text-xs font-sans text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        <div className="pt-4 mt-6 border-t border-slate-100">
                            <a
                                href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(`Assalam o Alaikum! Mujhe aap ki ${service.title} service ke baray mein maloomat chahiye.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between text-xs font-machina font-bold text-slate-700 hover:text-[#e23b2c] transition-colors uppercase tracking-wider"
                            >
                                <span>Avail Service</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default ServicesSection;
