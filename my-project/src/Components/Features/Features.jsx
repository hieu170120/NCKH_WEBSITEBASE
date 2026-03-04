import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "Immersive Experiences",
    icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "Dive into stunning 3D environments with next-generation graphics and spatial audio.",
    aosDelay: "300",
  },
  {
    name: "Secure Transactions",
    icon: <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "Buy, sell, and trade with blockchain security and transparent smart contracts.",
    aosDelay: "500",
  },
  {
    name: "Social Connectivity",
    icon: <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />,
    link: "#",
    description: "Connect, collaborate, and build communities with people from around the world.",
    aosDelay: "700",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      {/* Container với mx-auto để căn giữa và px-4 để tránh dính lề mobile */}
      <div className="container mx-auto px-4 min-h-[600px] flex flex-col justify-center items-center">
        <div className="w-full max-w-6xl">
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Why Join Our Metaverse
          </h1>

          {/* Grid section - Tự động căn giữa các item bên trong */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-black/40 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300 border border-white/10"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="text-gray-300 group-hover:text-black">{data.description}</p>
                <a
                  href={data.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn More
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