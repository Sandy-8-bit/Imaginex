import { useState } from "react";
import { motion } from "framer-motion";
import ContactUsPopup from "./Popup/ContactUs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile sidebar
  const [isOpen2, setIsOpen2] = useState(false); // Contact popup
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false); // Mobile dropdown
  const [isServicesHovered, setIsServicesHovered] = useState(false); // Desktop popover

let hoverTimeout: NodeJS.Timeout | null = null;

const handleMouseEnter = () => {
  if (hoverTimeout) clearTimeout(hoverTimeout);
  setIsServicesHovered(true);
};

const handleMouseLeave = () => {
  hoverTimeout = setTimeout(() => {
    setIsServicesHovered(false);
  }, 100); // 1 second delay
};

  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-[100] bg-[#0E0A0F]"
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center border-b border-[#2E2132] justify-between px-20 py-5 relative">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <ul className="flex items-center gap-8 text-white alex relative">
          <li className="cursor-pointer hover:text-[#DC7FF3] transition-colors duration-200">Home</li>
          <li className="cursor-pointer hover:text-[#DC7FF3] transition-colors duration-200">Training</li>
          
          {/* Desktop popover on hover */}
         <div
  className="relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <li className="cursor-pointer hover:text-[#DC7FF3] transition-colors duration-200">
    Services
  </li>
  {isServicesHovered && (
    <div className="absolute top-full left-0 mt-2 w-64 bg-[#211824] border border-[#3a2d3c] rounded-lg shadow-lg py-4 z-50">
      <ul className="flex flex-col px-4 gap-3 text-sm text-white text-start">
        <li className="hover:text-[#DC7FF3] transition cursor-pointer">AI Patent Consulting</li>
        <li className="hover:text-[#DC7FF3] transition cursor-pointer">Product Engineering</li>
        <li className="hover:text-[#DC7FF3] transition cursor-pointer">IP & AI Training</li>
      </ul>
    </div>
  )}
</div>


          <li className="cursor-pointer hover:text-[#DC7FF3] transition-colors duration-200">Contact</li>
        </ul>
        <button
          onClick={() => setIsOpen2(true)}
          className="rounded-[6px] alex px-5 flex py-3 items-center gap-2 bg-[#AF2ECB] shadow-[inset_0_0_9px_1px_#DC7FF3] hover:brightness-110 transition"
        >
          <p>Contact Us</p>
          <img src="/contact-icon.svg" alt="contact" />
        </button>
      </div>

      {/* Mobile Top Bar */}
      <div className="flex md:hidden items-center border-b border-[#2E2132] justify-between px-6 py-4">
        <img src="/logo.png" className="h-10" alt="logo" />
        <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <img src="/menu-icon.png" alt="menu" />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bg-gradient-to-b from-[#0E0A0F] to-[#443149] h-full w-[60%] text-white alex p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <img src="/logo.png" alt="logo" className="h-8" />
          <button
            className="bg-[#B53ECF] rounded-[9px] p-1 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="space-y-6 text-[16px]">
          <li className="flex items-center gap-3 bg-[#483A4B] rounded-[5px] p-3 cursor-pointer hover:bg-[#5b4960] transition">
            <img src="/mission-icon.svg" className="w-6 h-6" alt="Home" />
            Home
          </li>
          <li className="flex items-center gap-3 bg-[#483A4B] rounded-[5px] p-3 cursor-pointer hover:bg-[#5b4960] transition">
            <img src="/ecosystem-icon.svg" className="w-6 h-6" alt="Training" />
            Training
          </li>

          {/* Services - Expandable in Sidebar */}
          <li className="flex flex-col bg-[#483A4B] rounded-[5px]">
            <div
              className="flex items-center gap-3 p-3 cursor-pointer hover:bg-[#5b4960] transition"
              onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
            >
              <img src="/impact-icon.svg" className="w-6 h-6" alt="Services" />
              <span>Services</span>
              <span className="ml-auto text-xs">{isServicesOpenMobile ? "▲" : "▼"}</span>
            </div>
            {isServicesOpenMobile && (
              <ul className="px-5 pb-3 text-sm flex flex-col gap-3">
                <li className="hover:text-[#DC7FF3] cursor-pointer transition  w-full">AI Patent Consulting</li>
                <li className="hover:text-[#DC7FF3] cursor-pointer transition">Product Engineering</li>
                <li className="hover:text-[#DC7FF3] cursor-pointer transition">IP & AI Training</li>
              </ul>
            )}
          </li>

          <li onClick={() => setIsOpen2(true)} className="flex items-center gap-3 bg-[#483A4B] rounded-[5px] p-3 cursor-pointer hover:bg-[#5b4960] transition">
            <img src="/contact-icon.svg" className="w-6 h-6" alt="Contact" />
            Contact
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}></div>
      )}
      {isOpen2 && <ContactUsPopup onClose={() => setIsOpen2(false)} />}
    </motion.div>
  );
};

export default Navbar;
