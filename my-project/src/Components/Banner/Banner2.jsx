import React from "react";
import BannerPng from "../../assets/banner2.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner2 = ({ togglePlay }) => {
  return (
    <div className="py-16 relative w-full bg-gray-950 transition-colors duration-300">
      {/* 2. Thêm mx-auto vào container */}
      <div className="container mx-auto px-4 min-h-[620px] flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center w-full max-w-6xl">
          
          {/* text content section */}
          <div className="order-2 sm:order-1 relative flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative z-10 space-y-5 max-w-xl">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold leading-tight"
              >
                Own Digital{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Assets & NFTs
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-gray-300">
                Trade, collect, and monetize your digital creations in a secure blockchain-powered ecosystem.
              </p>
              <div className="flex gap-6 justify-center sm:justify-start">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                  aria-label="Get started with VR experience"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  onClick={togglePlay}
                  className="flex items-center gap-2 font-semibold text-white
                             hover:text-primary transition-colors
                             focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                  aria-label="Play demo video"
                >
                  <BiPlayCircle className="text-3xl" aria-hidden="true" />
                  See Demo
                </button>
              </div>
            </div>
            {/* background color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50%] left-[-20%] blur-3xl opacity-30 -z-10"></div>
          </div>

          {/* image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2">
            <img 
              src={BannerPng} 
              alt="Person enjoying VR experience with our platform"
              className="w-full max-w-[450px] drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;