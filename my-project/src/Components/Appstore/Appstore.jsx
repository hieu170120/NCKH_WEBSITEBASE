import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <section className="py-10 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* 1. Thêm mx-auto để căn giữa container theo chiều ngang */}
      <div className="container mx-auto px-4 min-h-[400px] flex items-center justify-center">
        
        {/* 2. flex-col và items-center để mọi thứ bên trong (h1, p, div) luôn ở giữa */}
        <div className="space-y-6 max-w-xl w-full flex flex-col items-center">
          <h1
            data-aos="fade-up"
            className="text-3xl text-center sm:text-4xl font-bold text-black dark:text-white"
          >
            Get Started with our app
          </h1>
          
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center text-gray-600 dark:text-gray-300 sm:px-10"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            magnam harum accusantium odit?
          </p>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a href="#" data-aos="fade-up" data-aos-delay="500" className="hover:scale-105 transition-transform">
              <img
                src={AppStoreImg}
                alt="App Store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
            <a href="#" data-aos="fade-up" data-aos-delay="700" className="hover:scale-105 transition-transform">
              <img
                src={PlayStoreImg}
                alt="Play Store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;