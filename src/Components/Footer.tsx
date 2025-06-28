import { useState } from "react";
import ContactUsPopup from "./Popup/ContactUs";

const Footer = () => {
  function scrollToElementByIdWithOffset(id:any, offset = 100) {

  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

const[isOpen, setIsOpen] = useState(false);


  return (
    <footer className="bg-[#0E0A0F] text-white border-t border-[#2E2132]">
      <div className="flex flex-col md:flex-row justify-between gap-10 px-5 sm:px-20 py-10">
        {/* Logo & Description */}
        <div className="flex-1">
          <img src="/logo.png" alt="logo" className="mb-4 w-32" />
          <p className="text-sm text-gray-300">
            ImagineX is a True Human Enterprise — where ideas become patents, patents into products, and innovation serves humanity.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1">
          <ul className="flex cursor-pointer flex-col gap-2 md:items-center">
            {["Home", "About", "Pillars", ].map((link) => (
              <li key={link}>
                <a  onClick={() => scrollToElementByIdWithOffset(link.toLowerCase())} className="hover:text-purple-400 transition-colors duration-200">
                  {link}
                </a>
               
              </li>
              
            ))}
            <li className="cursor-pointer hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(true)}>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1">
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Patent Tech Consulting</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Analysis and Enforcement</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Patent Monetization & Licensing</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Patent Insights & Analysis</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <ul className="flex flex-col gap-2 md:items-end">
            <li><a href="mailto:info@imaginex.com" className="hover:text-purple-400 transition-colors duration-200">info@imaginex.com</a></li>
            <li><a href="tel:+91123456789" className="hover:text-purple-400 transition-colors duration-200">+91 123456789</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Background with Copyright */}
      {/* Responsive Footer Background */}
<div>

        
        <div className=" w-full px-5 sm:px-20 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 z-10">
          <p>© 2025 ImagineX Innovations. All rights reserved.</p>
          <p>Bangalore</p>
        </div>
      </div>
      {isOpen && <ContactUsPopup onClose={() => setIsOpen(false)} />}
    </footer>

    
  );
};

export default Footer;
