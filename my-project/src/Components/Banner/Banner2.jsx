import React from "react";
import BannerPng from "../../assets/banner2.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner2 = ({ togglePlay }) => {
  return (
    <div className="py-20 relative w-full bg-[#2A1810] transition-colors duration-300">
      <div className="container mx-auto px-4 min-h-[620px] flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center w-full max-w-6xl">
          
          {/* text content section */}
          <div className="order-2 sm:order-1 relative flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative z-10 space-y-5 max-w-xl">
              <h2
                data-aos="fade-up"
                data-aos-delay="300"
                className="h2 font-serif"
              >
                Fresh <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B6F47] to-[#D4A574]">
                  Pastries
                </span>
              </h2>
              <p data-aos="fade-up" data-aos-delay="500" className="body text-[#D4A574]/80">
                Pair your perfect brew with our fresh-baked pastries. Sourced locally and made daily, 
                each bite complements your coffee experience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                  aria-label="Order pastries"
                >
                  Order Now
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  onClick={togglePlay}
                  className="secondary-btn flex items-center justify-center gap-2"
                  aria-label="Play baking video"
                >
                  <BiPlayCircle className="text-xl" aria-hidden="true" />
                  See More
                </button>
              </div>
            </div>
            {/* background color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-[#8B6F47] to-[#D4A574] rounded-full absolute bottom-[-50%] left-[-20%] blur-3xl opacity-10 -z-10"></div>
          </div>

          {/* image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 w-full">
            <img 
              src={BannerPng} 
              alt="Fresh pastries and coffee at Brew & Soul"
              className="w-full h-auto max-w-full drop-shadow-2xl rounded-lg object-cover aspect-video"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
