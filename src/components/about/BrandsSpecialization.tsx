'use client';

import React from 'react';
import { Car } from 'lucide-react';

interface ConfirmedBrand {
  id: string;
  name: string;
  origin: string;
  models: string[];
  parts: string[];
}

const confirmedBrandsData: ConfirmedBrand[] = [
  {
    id: 'toyota',
    name: 'Toyota',
    origin: 'Japan / Pakistan',
    models: ['Corolla Altis / Grande', 'Yaris', 'Hilux Revo'],
    parts: ['Brake Pads', 'Suspension', 'Spark Plugs', 'Air & Oil Filters'],
  },
  {
    id: 'honda',
    name: 'Honda',
    origin: 'Japan / Pakistan',
    models: ['Civic (Reborn, Oriel, RS)', 'City', 'BR-V'],
    parts: ['Engine Mounts', 'Shocks', 'Disc Rotors', 'Suspension Bushings'],
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    origin: 'Japan / Pakistan',
    models: ['Alto 660cc', 'Cultus', 'Wagon R'],
    parts: ['Clutch Plates', 'Radiators', 'Wheel Bearings', 'Shock Absorbers'],
  },
];

export const BrandsSpecialization: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-[#0f1115] py-16 sm:py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d31826]/10 text-[#d31826] text-xs font-bold uppercase mb-3">
              <Car className="w-3.5 h-3.5" />
              <span>Comprehensive Brand Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1115] tracking-tight">
              In Brands Ke Liye <span className="text-[#d31826]">Genuine Spare Parts</span>
            </h2>
          </div>
          <p className="text-sm font-medium text-gray-600 max-w-md mt-3 md:mt-0">
            Toyota, Honda, aur Suzuki gaadiyon ke genuine OEM replacement parts hamare counter se direct purchase karein.
          </p>
        </div>

        {/* Brands Grid (Confirmed 3 Brands) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {confirmedBrandsData.map((brand) => (
            <div
              key={brand.id}
              className="bg-[#f8fafc] border border-gray-200 hover:border-[#d31826]/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-extrabold text-[#0f1115] group-hover:text-[#d31826] transition-colors">
                    {brand.name}
                  </h3>
                  <span className="text-xs font-mono font-bold bg-[#0f1115] text-white px-3 py-1 rounded-full">
                    {brand.origin}
                  </span>
                </div>

                {/* Popular Models Covered */}
                <div className="mb-5">
                  <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider block mb-2">
                    Covered Models:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {brand.models.map((model, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white text-gray-800 font-bold px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Available Key Spares */}
                <div>
                  <span className="text-[11px] font-extrabold text-[#d31826] uppercase tracking-wider block mb-2">
                    Stocked Key Spares:
                  </span>
                  <ul className="grid grid-cols-2 gap-1.5 text-xs font-semibold text-gray-700">
                    {brand.parts.map((part, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d31826]" />
                        <span>{part}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandsSpecialization;
