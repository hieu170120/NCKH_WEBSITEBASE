import React from "react";
import PropTypes from "prop-types";
import VRExperience1 from "../../assets/vr-experience-1.png";
import VRExperience2 from "../../assets/vr-experience-2.png";
import VRExperience3 from "../../assets/vr-experience-3.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <section className="py-20 relative bg-[#2A1810] text-[#F5E6D3] transition-colors duration-300">
      <div className="container mx-auto px-4 min-h-[620px] flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center w-full max-w-6xl">
          
          {/* images section - 3 images grid */}
          <div data-aos="fade-up" data-aos-once="false" className="w-full">
            <div className="grid grid-cols-2 gap-4 place-items-center">
              {/* Left-top image */}
              <div className="col-span-1 row-span-2 w-full">
                <img 
                  src={VRExperience1} 
                  alt="Specialty coffee preparation at Brew & Soul" 
                  className="w-full h-auto max-w-full rounded-lg shadow-2xl shadow-[#8B6F47]/30 hover:shadow-[#8B6F47]/50 transition-shadow duration-300 object-cover aspect-[3/4]"
                  loading="lazy"
                />
              </div>
              
              {/* Right-top image */}
              <div className="col-span-1 w-full">
                <img 
                  src={VRExperience2} 
                  alt="Cozy coffee shop atmosphere" 
                  className="w-full h-auto max-w-full rounded-lg shadow-lg shadow-[#D4A574]/30 hover:shadow-[#D4A574]/50 transition-shadow duration-300 object-cover aspect-square"
                  loading="lazy"
                />
              </div>
              
              {/* Right-bottom image */}
              <div className="col-span-1 w-full">
                <img 
                  src={VRExperience3} 
                  alt="Coffee details and pastries" 
                  className="w-full h-auto max-w-full rounded-lg shadow-lg shadow-[#8B6F47]/30 hover:shadow-[#8B6F47]/50 transition-shadow duration-300 object-cover aspect-square"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* text content section */}
          <div className="relative space-y-6">
            <div className="relative z-10 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h2
                data-aos="fade-up"
                data-aos-delay="300"
                className="h2 font-serif"
              >
                Artisanal

                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B6F47] to-[#D4A574]">

                  {" "}Perfection

                </span>

              </h2>
              <p 
                data-aos="fade-up" 
                data-aos-delay="500"
                className="body max-w-[550px] text-[#D4A574]/80"
              >
                Handcrafted espresso drinks, carefully prepared by our expert baristas. Each cup is made with precision and passion.
              </p>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                  aria-label="View our menu"
                >
                  View Menu
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className="secondary-btn flex items-center justify-center gap-2"
                  aria-label="Play coffee preparation video"
                >
                  <BiPlayCircle className="text-xl" aria-hidden="true" />
                  See Process
                </button>
              </div>
            </div>
            
            {/* background color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-[#8B6F47] to-[#D4A574] rounded-full absolute bottom-[-50px] right-[-150px] blur-[100px] opacity-10 -z-10 hidden sm:block"></div>
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
