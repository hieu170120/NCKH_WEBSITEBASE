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
  { id: 2, title: "Menu", link: "#menu" },
  { id: 3, title: "About", link: "#about" },
  { id: 4, title: "Blog", link: "#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-[#2A1810] mt-14 rounded-t-3xl transition-colors duration-300">
      <div data-aos="fade-down" className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 py-10 gap-10">
          
          {/* Company Details */}
          <div className="py-8 px-4 space-y-6">
            <h3 className="h3 mb-4 flex items-center gap-3 text-[#F5E6D3] font-serif">
              Brew<span className="text-[#D4A574]">&</span>Soul
            </h3>
            <p className="small text-[#D4A574]/70">
              Brew & Soul is dedicated to delivering the finest specialty coffee experience. 
              From ethically sourced beans to expert baristas, we craft every cup with care.
            </p>
            
            {/* Contact section */}
            <div className="mt-6 space-y-3 text-[#D4A574]/70">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-[#8B6F47]" />
                <p>123 Coffee Street, Brew City, BC 12345</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-[#8B6F47]" />
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Social handle */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                aria-label="Follow us on Facebook"
                className="text-3xl text-[#D4A574] hover:text-[#8B6F47] duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B6F47] rounded p-1"
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                aria-label="Follow us on Instagram"
                className="text-3xl text-[#D4A574] hover:text-[#8B6F47] duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B6F47] rounded p-1"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                aria-label="Follow us on LinkedIn"
                className="text-3xl text-[#D4A574] hover:text-[#8B6F47] duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B6F47] rounded p-1"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Footer Links section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h4 className="text-lg font-bold mb-4 text-[#F5E6D3] font-serif">Quick Links</h4>
              <ul className="space-y-3 text-[#D4A574]/70">
                {FooterLinks.map((link) => (
                  <li key={link.id} className="hover:translate-x-1 hover:text-[#8B6F47] duration-300">
                    <a 
                      href={link.link}
                      className="focus:outline-none focus:ring-2 focus:ring-[#8B6F47] rounded px-2 py-1 block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="py-8 px-4">
              <h4 className="text-lg font-bold mb-4 text-[#F5E6D3] font-serif">Coffee Varieties</h4>
              <ul className="space-y-3 text-[#D4A574]/70">
                {["Espresso", "Latte", "Cappuccino"].map((item, index) => (
                  <li key={index} className="hover:translate-x-1 hover:text-[#8B6F47] duration-300">
                    <a 
                      href="#"
                      className="focus:outline-none focus:ring-2 focus:ring-[#8B6F47] rounded px-2 py-1 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h4 className="text-lg font-bold mb-4 text-[#F5E6D3] font-serif">Support</h4>
              <ul className="space-y-3 text-[#D4A574]/70">
                {["FAQ", "Privacy Policy", "Terms"].map((item, index) => (
                  <li key={index} className="hover:translate-x-1 hover:text-[#8B6F47] duration-300">
                    <a 
                      href="#"
                      className="focus:outline-none focus:ring-2 focus:ring-[#8B6F47] rounded px-2 py-1 block"
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
        <div className="text-center py-5 border-t-2 border-[#8B6F47]/30 text-[#D4A574]/50 text-sm">
          © 2024 Brew & Soul Coffee House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
