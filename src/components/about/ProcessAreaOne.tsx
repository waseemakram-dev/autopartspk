import React from "react";

export const ProcessAreaOne: React.FC = () => {
  return (
    <section className="process-area-1 position-relative overflow-hidden bg-white py-20">
      <style>{`
        @keyframes processSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes processSpin2 {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        .process-area-1 {
          position: relative;
        }

        .portfolio-shape-img-wrap {
          opacity: 0.35;
          position: absolute;
          right: 30px;
          top: 30px;
          z-index: 1;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        @media (min-width: 1280px) {
          .portfolio-shape-img-wrap {
            right: 50px;
          }
        }

        .portfolio-shape-img-wrap .about1-shape-img-1 {
          width: 115px;
          height: 115px;
        }

        .portfolio-shape-img-wrap .about1-shape-img-2 {
          width: 75px;
          height: 75px;
          margin-right: 25px;
          margin-top: -25px;
        }

        .process-spin {
          animation: processSpin 15s linear infinite;
        }
        .process-spin2 {
          animation: processSpin2 15s linear infinite;
        }

        .process-title-area {
          margin-bottom: 50px;
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .process-sub-title {
          display: inline-block;
          line-height: 1.2;
          color: #e03627;
          text-transform: uppercase;
          font-size: 14px;
          position: relative;
          font-weight: 700;
          margin-bottom: 18px;
          letter-spacing: 0.07em;
        }

        .process-sub-title::before,
        .process-sub-title::after {
          content: '';
          position: relative;
          width: 40px;
          height: 2px;
          background: #e03627;
          display: inline-block;
          vertical-align: middle;
          top: -1px;
        }

        .process-sub-title::before {
          margin-right: 12px;
        }

        .process-sub-title::after {
          margin-left: 12px;
        }

        .process-sec-title {
          font-size: 38px;
          font-weight: 900;
          color: #0f1115;
          line-height: 1.25;
          margin: 0;
        }

        /* Process Cards & Connecting Curved Dotted Arrows */
        .process-card-wrap {
          position: relative;
        }

        @media (min-width: 992px) {
          .process-card-wrap:first-child::after {
            content: "";
            position: absolute;
            width: 384px;
            height: 90px;
            background: url("/assets/img/icon/process-arrow-1-1.svg") no-repeat center center;
            background-size: contain;
            right: -210px;
            top: -40px;
            transform: rotate(6deg);
            z-index: 5;
            pointer-events: none;
          }

          .process-card-wrap:nth-child(2)::after {
            content: "";
            position: absolute;
            width: 386px;
            height: 151px;
            background: url("/assets/img/icon/process-arrow-1-2.svg") no-repeat center center;
            background-size: contain;
            right: -175px;
            top: -50px;
            transform: rotate(5deg);
            z-index: 5;
            pointer-events: none;
          }
        }

        .process-card {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .process-card-icon {
          background: #0f1115;
          transition: all 0.4s ease;
          border-radius: 50%;
          height: 90px;
          width: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .process-card:hover .process-card-icon {
          background: #e03627;
        }

        .process-card-title {
          font-size: 22px;
          font-weight: 900;
          margin-top: 22px;
          margin-bottom: 12px;
          color: #0f1115;
        }

        .process-card-text {
          font-size: 15px;
          font-weight: 400;
          color: #555555;
          line-height: 1.6;
          max-width: 320px;
          margin: 0 auto;
        }

        @media (min-width: 992px) {
          .process-card.process-card-center {
            margin-top: 77px;
          }
        }
      `}</style>

      {/* Gear Animation directly inside section at absolute far right */}
      <div className="portfolio-shape-img-wrap hidden lg:flex">
        <img
          className="about1-shape-img-1 process-spin"
          src="/assets/img/normal/about_shape1-2.svg"
          alt="Fixturbo Gear Top"
        />
        <img
          className="about1-shape-img-2 process-spin2"
          src="/assets/img/normal/about_shape1-1.svg"
          alt="Fixturbo Gear Bottom"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title Area */}
        <div className="flex justify-center">
          <div className="max-w-2xl text-center">
            <div className="process-title-area">
              <span className="process-sub-title">Kaise Kaam Karta Hai</span>
              <h2 className="process-sec-title">
                Fast Part Identification & Counter Pickup
              </h2>
            </div>
          </div>
        </div>

        {/* Grid Area matching upper section width */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          <div className="process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon shadow-md">
                <img src="/assets/img/icon/process-icon-1-1.svg" alt="Fast Part Identification" className="w-11 h-11 object-contain" />
              </div>
              <h4 className="process-card-title">Fast Part Identification</h4>
              <p className="process-card-text">
                Apne part ki photo ya gaari ka model WhatsApp par bhejein — 5 minute mein price aur availability confirm ho jati hai.
              </p>
            </div>
          </div>

          <div className="process-card-wrap">
            <div className="process-card process-card-center">
              <div className="process-card-icon shadow-md">
                <img src="/assets/img/icon/process-icon-1-2.svg" alt="Genuine OEM Verification" className="w-11 h-11 object-contain" />
              </div>
              <h4 className="process-card-title">Genuine OEM Verification</h4>
              <p className="process-card-text">
                Har part counter par verify hota hai — sirf 100% genuine Japanese/OEM standard ke mutabiq spares diye jate hain.
              </p>
            </div>
          </div>

          <div className="process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon shadow-md">
                <img src="/assets/img/icon/process-icon-1-3.svg" alt="Counter Pickup Ready" className="w-11 h-11 object-contain" />
              </div>
              <h4 className="process-card-title">Counter Pickup Ready</h4>
              <p className="process-card-text">
                Confirm karne ke baad seedha hamare counter se part collect kar sakte hain — koi wait ya delay nahi. Direct city & cargo delivery available.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessAreaOne;
