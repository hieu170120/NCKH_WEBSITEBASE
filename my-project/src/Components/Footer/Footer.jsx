import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Contact", link: "#contact" },
  { id: 4, title: "Blog", link: "#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 mt-14 rounded-t-3xl transition-colors duration-300">
      {/* Thêm mx-auto để căn giữa footer */}
      <div data-aos="fade-down" className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 py-10 gap-10">
          
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3 text-white">
              Meta<span className="text-primary">Verse</span>
            </h1>
            <p className="text-sm text-gray-400">
              Welcome to the next evolution of the internet. We're building a thriving ecosystem where creators, 
              developers, and users can connect, create, and thrive together in immersive virtual worlds.
            </p>
            
            {/* Contact section */}
            <div className="mt-6 space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-primary" />
                <p>Tp. Thủ Đức, TP. Hồ Chí Minh</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-primary" />
                <p>+84 123 456 789</p>
              </div>
            </div>

            {/* Social handle */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                aria-label="Follow us on Facebook"
                className="text-3xl text-gray-400 hover:text-primary duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                aria-label="Follow us on Instagram"
                className="text-3xl text-gray-400 hover:text-primary duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                aria-label="Follow us on LinkedIn"
                className="text-3xl text-gray-400 hover:text-primary duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Footer Links section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-white">Quick Links</h1>
              <ul className="space-y-3 text-gray-400">
                {FooterLinks.map((link) => (
                  <li key={link.id} className="hover:translate-x-1 hover:text-primary duration-300">
                    <a 
                      href={link.link}
                      className="focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-white">Resources</h1>
              <ul className="space-y-3 text-gray-400">
                {["Documentation", "YOLO v8", "Dataset"].map((item, index) => (
                  <li key={index} className="hover:translate-x-1 hover:text-primary duration-300">
                    <a 
                      href="#"
                      className="focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-white">Support</h1>
              <ul className="space-y-3 text-gray-400">
                {["FAQ", "Privacy Policy", "Terms"].map((item, index) => (
                  <li key={index} className="hover:translate-x-1 hover:text-primary duration-300">
                    <a 
                      href="#"
                      className="focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="text-center py-5 border-t-2 border-gray-700 text-gray-500 text-sm">
          © 2026 Vũ Minh Hiếu - UTE NCKH. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;