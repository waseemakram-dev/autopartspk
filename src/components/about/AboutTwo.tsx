import React from "react";

export const AboutTwo: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage & Floating Badges */}
          <div className="lg:col-span-7 relative">
            <div className="relative inline-block w-full max-w-xl mx-auto lg:max-w-none">
              
              {/* Main Image 1 (Offset Top Right) */}
              <div className="pl-12 md:pl-36 rounded-xl overflow-hidden">
                <img
                  src="/assets/img/normal/about_2-1.png"
                  alt="Fixturbo Auto Repair"
                  className="w-full h-auto object-cover rounded-xl shadow-lg max-h-[380px]"
                />
              </div>

              {/* Secondary Image 2 (Bottom Left) */}
              <div className="-mt-16 md:-mt-24 rounded-xl overflow-hidden max-w-[280px] md:max-w-[340px] relative z-0 border-4 border-white shadow-xl">
                <img
                  src="/assets/img/normal/about_2-2.png"
                  alt="Fixturbo Service"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Red Badge (Top Left Overlay) */}
              <div className="absolute top-0 left-0 bg-[#e03627] text-white p-5 md:p-6 rounded-xl shadow-xl flex flex-col items-start min-w-[160px] z-10">
                <img src="/assets/img/icon/about_icon2-1.svg" alt="Customers Icon" className="w-10 h-10 mb-2 filter brightness-0 invert" />
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">12k+</h3>
                <p className="text-xs md:text-sm font-semibold mt-1">Trusted Customers</p>
              </div>

              {/* White Badge (Bottom Right Overlay) */}
              <div className="absolute bottom-4 right-2 sm:right-8 bg-white p-4 md:p-5 rounded-xl shadow-2xl border border-gray-100 flex flex-col items-center z-10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#e03627] flex items-center justify-center p-2.5">
                    <img src="/assets/img/icon/about_icon2-2.png" alt="Experience" className="w-full h-full object-contain filter brightness-0 invert" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#0f1115]">15<span className="text-[#e03627]">+</span></h3>
                </div>
                <p className="text-xs md:text-sm font-bold text-gray-700 mt-2">Years Of Experience</p>
              </div>

            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Header */}
            <div className="mb-8">
              <span className="inline-block text-[#e03627] font-bold text-sm uppercase tracking-wider mb-2">
                Know About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1115] leading-tight mb-4 relative">
                Bahawalpur Mein Aap Ka Bharosemand Auto Parts Store{" "}
                <span className="inline-block relative">
                  <img
                    className="h-3 w-auto inline-block ml-1 opacity-80"
                    src="/assets/img/bg/title-bg-shape.png"
                    alt="Shape"
                  />
                </span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Hum Toyota, Honda, aur Suzuki gaadiyon ke liye 100% genuine replacement spare parts stock karte hain — Ayyoub Chowk, near Cheeka Wala Chowk, Bahawalpur mein located hamare counter se. Har part verify kar ke diya jata hai, taake aap ko sahi part, sahi price par mile.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 p-3">
                  <img src="/assets/img/icon/about_icon2-3.svg" alt="100% Genuine Parts" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-[#0f1115] mb-1">
                    100% Genuine Parts
                  </h5>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Har part counter par physically verify hota hai — zero counterfeit ya local duplicate copy parts.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 p-3">
                  <img src="/assets/img/icon/about_icon2-4.svg" alt="Fast Part Matching" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-[#0f1115] mb-1">
                    Fast Part Matching
                  </h5>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    15+ saal ka tajurba sahi part exact identify karne mein, chahe purana part number mit chuka ho.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
