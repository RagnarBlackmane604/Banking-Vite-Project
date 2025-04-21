import React from 'react';

const mockup = "/assets/image-mockups.png";
const bgIntroMobile = "/assets/bg-intro-mobile.svg";
const bgIntroDesktop = "/assets/bg-intro-desktop.svg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-20 min-h-[700px] md:min-h-[600px]">
      {/* Mobile Layout */}
      <div className="relative md:hidden">
        <div
          className="absolute inset-0 h-[500px] bg-no-repeat bg-cover bg-top mt-[-95px]"
          style={{ backgroundImage: `url(${bgIntroMobile})` }}
        ></div>
        <div className="relative z-10 flex justify-center">
          <img src={mockup} alt="Phone mockups" className="w-[90%] mt-[-135px]" />
        </div>
      </div>

      {/* Desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-no-repeat bg-contain bg-right h-full top-[-180px] right-[-225px]"
        style={{ backgroundImage: `url(${bgIntroDesktop})` }}
      ></div>

      <div className="hidden md:block absolute z-10 right-[-50px] top-[-80px] w-[500px]">
        <img src={mockup} alt="Phone mockups" />
      </div>

      {/* Text */}
      <div className="relative z-20 px-6 pt-10 text-center md:text-left md:max-w-xl md:ml-12 lg:ml-24 md:py-32">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-slate-800">
          Next Generation <br className="hidden md:block" />
          Digital Banking
        </h1>
        <p className="text-gray-500 mt-6 text-base md:text-lg w-[350px] md:w-[400px] mx-auto md:mx-0">
          Take your financial life online. Your Easybank account will be your one-stop-shop for spending, saving,
          budgeting, investing and much more.
        </p>
        <button className="mt-8 bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm hover:opacity-90 transition">
          Request Invite
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
