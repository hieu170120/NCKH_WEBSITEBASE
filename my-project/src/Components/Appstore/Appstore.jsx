import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <section className="py-16 bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 min-h-[400px] flex items-center justify-center">
        
        <div className="space-y-6 max-w-xl w-full flex flex-col items-center">
          <h1
            data-aos="fade-up"
            className="text-3xl text-center sm:text-4xl font-bold text-white"
          >
Download Our App
          </h1>
          
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center text-gray-300 sm:px-10"
          >
Experience the metaverse on your mobile device. Download from App Store or Google Play today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a 
              href="#" 
              data-aos="fade-up" 
              data-aos-delay="500" 
              className="hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
              aria-label="Download on App Store"
            >
              <img
                src={AppStoreImg}
                alt="Download UTE NCKH on App Store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                loading="lazy"
              />
            </a>
            <a 
              href="#" 
              data-aos="fade-up" 
              data-aos-delay="700" 
              className="hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
              aria-label="Download on Google Play"
            >
              <img
                src={PlayStoreImg}
                alt="Download UTE NCKH on Google Play"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;