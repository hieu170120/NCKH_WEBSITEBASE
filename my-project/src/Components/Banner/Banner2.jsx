import React from "react";
import BannerPng from "../../assets/banner2.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner2 = ({ togglePlay }) => {
  return (
    // 1. Thay 'ml-auto mr-0 max-w-[90%]' bằng 'w-full'
    <div className="py-12 sm:py-0 relative w-full">
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
                GET READY TO ENJOY VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Movies WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                molestias quia exercitationem ex inventore labore beatae cumque
                et quaerat voluptas?
              </p>
              <div className="flex gap-6 justify-center sm:justify-start">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  onClick={togglePlay}
                  className="flex items-center gap-2 hover:text-primary duration-300"
                >
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* background color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50%] left-[-20%] blur-3xl opacity-30 -z-10"></div>
          </div>

          {/* image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2">
            <img src={BannerPng} alt="VR Guy" className="w-full max-w-[450px] drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;