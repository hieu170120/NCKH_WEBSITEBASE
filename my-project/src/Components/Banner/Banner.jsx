import React from "react";
import PropTypes from "prop-types";
import BannerPng from "../../assets/banner1.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    // Sửa 1: Thêm bg-white dark:bg-gray-950 và bỏ py-12 thay bằng py-10 để liền mạch nền
    <section className="py-10 relative bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
      {/* Sửa 2: Thêm mx-auto và px-4 để nội dung luôn nằm chính giữa màn hình */}
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
                GET READY TO ENJOY VR
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {" "}Movies with Our Platform
                </span>
              </h1>
              <p 
                data-aos="fade-up" 
                data-aos-delay="500"
                className="text-gray-600 dark:text-gray-300"
              >
                Hệ thống nghiên cứu của sinh viên IT trường UTE ứng dụng công nghệ thực tế ảo vào đời sống thực tiễn.
              </p>
              <div className="flex gap-6 justify-center sm:justify-start">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn px-6 py-2 rounded-lg"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
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