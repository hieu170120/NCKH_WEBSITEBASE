import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "Captivating Videos",
    icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Safe Transactions",
    icon: <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Reality",
    icon: <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "700",
  },
];

const Features = () => {
  return (
    <section className="bg-dark text-white py-14">
      {/* Container với mx-auto để căn giữa và px-4 để tránh dính lề mobile */}
      <div className="container mx-auto px-4 sm:min-h-[600px] flex flex-col justify-center items-center">
        <div className="w-full max-w-6xl">
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Why Choose Us
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