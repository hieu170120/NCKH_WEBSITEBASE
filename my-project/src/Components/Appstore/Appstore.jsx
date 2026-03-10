import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <section className="py-20 bg-[#2A1810] transition-colors duration-300">
      <div className="container mx-auto px-4 min-h-[400px] flex items-center justify-center">
        
        <div className="space-y-6 max-w-xl w-full flex flex-col items-center">
          <h2
            data-aos="fade-up"
            className="h2 text-center text-[#F5E6D3] font-serif"
          >
            Download Our App
          </h2>
          
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="body text-center sm:px-10 text-[#D4A574]/80"
          >
            Order ahead, earn rewards, and never miss our new releases with the Brew & Soul app.
          </p>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a href="#" data-aos="fade-up" data-aos-delay="500" className="hover:scale-105 transition-transform" aria-label="Download on App Store">
              <img
                src={AppStoreImg}
                alt="Download Brew & Soul on App Store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                loading="lazy"
              />
            </a>
            <a href="#" data-aos="fade-up" data-aos-delay="700" className="hover:scale-105 transition-transform" aria-label="Download on Google Play">
              <img
                src={PlayStoreImg}
                alt="Download Brew & Soul on Google Play"
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
