import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center border-b border-[#2E2132] justify-between px-20 py-5">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <ul className="flex items-center gap-8 text-white alex">
            {["Home", "Training", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#DC7FF3] transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="rounded-[6px] alex px-5 flex py-3 items-center gap-2 bg-[#AF2ECB] shadow-[inset_0_0_9px_1px_#DC7FF3] hover:brightness-110 transition">
            <p>Contact Us</p>
            <img src="/contact-icon.svg" alt="contact" />
          </button>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="flex md:hidden items-center border-b border-[#2E2132] justify-between px-6 py-4">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <img src="/menu-icon.png" alt="menu" />
        </div>
      </div>

      {/* Side Nav */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="space-y-6 text-[16px]">
          {[
            { label: "Home", icon: "/mission-icon.svg" },
            { label: "Training", icon: "/ecosystem-icon.svg" },
            { label: "Services", icon: "/impact-icon.svg" },
            { label: "Contact", icon: "/contact-icon.svg" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 bg-[#483A4B] rounded-[5px] p-3 cursor-pointer hover:bg-[#5b4960] transition"
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </motion.div>
  );
};

export default Navbar;
