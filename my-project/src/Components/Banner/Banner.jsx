import React from "react";
import PropTypes from "prop-types";
import BannerPng from "../../assets/banner1.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <section className="py-16 relative bg-gray-950 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 min-h-[620px] flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center w-full max-w-6xl">
          
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img 
              src={BannerPng} 
              alt="VR headset" 
              className="w-full max-w-[400px] drop-shadow-xl"
              loading="lazy"
            />
          </div>

          {/* text content section */}
          <div className="lg:pr-1 relative">
            <div className="relative z-10 space-y-5 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h1
                id="banner-heading"
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold leading-tight"
              >
                Build Your Digital
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {" "}Identity
                </span>
              </h1>
              <p 
                data-aos="fade-up" 
                data-aos-delay="500"
                className="text-gray-300"
              >
                Create your avatar, express yourself, and connect with millions of users in an infinite virtual universe.
              </p>
              <div className="flex gap-6 justify-center sm:justify-start">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn px-6 py-2 rounded-lg"
                  aria-label="Get started with VR platform"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className="flex items-center gap-2 font-semibold dark:text-white
                             hover:text-primary transition-colors group
                             focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                  aria-label="Play demo video"
                >
                  <BiPlayCircle className="text-3xl" aria-hidden="true" />
                  See Demo
                </button>
              </div>
            </div>
            
            {/* background color blob - Giảm opacity và chuyển z-index xuống dưới */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[50%] -translate-x-1/2 blur-[100px] opacity-20 -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  togglePlay: PropTypes.func.isRequired,
};

export default Banner;