import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "Single-Origin Beans",
    icon: <FaCameraRetro className="text-5xl text-[#8B6F47] group-hover:text-[#D4A574] transition-colors duration-300" />,
    link: "#",
    description: "Ethically sourced from coffee farms around the world, each origin offers unique flavors.",
    aosDelay: "300",
  },
  {
    name: "Artisanal Roasting",
    icon: <GiNotebook className="text-5xl text-[#8B6F47] group-hover:text-[#D4A574] transition-colors duration-300" />,
    link: "#",
    description: "Small-batch roasting brings out the best in every bean with precision and care.",
    aosDelay: "500",
  },
  {
    name: "Cozy Community",
    icon: <SlNote className="text-5xl text-[#8B6F47] group-hover:text-[#D4A574] transition-colors duration-300" />,
    link: "#",
    description: "Experience a welcoming space where coffee lovers connect and create memories together.",
    aosDelay: "700",
  },
];

const Features = () => {
  return (
    <section className="bg-[#2A1810] text-[#F5E6D3] py-24">
      <div className="container mx-auto px-4 min-h-[600px] flex flex-col justify-center items-center">
        <div className="w-full max-w-6xl">
          <h2
            data-aos="fade-up"
            className="h2 text-center mb-16 font-serif"
          >
            Why Choose <span className='bg-gradient-to-r from-[#8B6F47] to-[#D4A574] bg-clip-text text-transparent'>Brew & Soul</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="card group space-y-6 text-center bg-[#3D2817] border-[#8B6F47]/30"
              >
                <div className="flex justify-center"> 
                  {data.icon}
                </div>
                <h3 className="h3 font-serif">{data.name}</h3>
                <p className="body text-[#D4A574]/80">{data.description}</p>
                <a
                  href={data.link}
                  className="link-hover inline-block font-semibold text-[#D4A574]"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
