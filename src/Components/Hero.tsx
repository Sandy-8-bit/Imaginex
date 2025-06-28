import { motion } from "framer-motion";

const Hero = () => {

    function scrollToElementByIdWithOffset(id: any, offset = 100) {
    
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="home"
      className="bg-[url('/herobg.svg')] bg-cover bg-center px-6 sm:px-[110px] lg:px-[220px] py-[80px] sm:py-[100px] lg:py-[120px] flex flex-col gap-5 justify-center items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <p className="font-semibold text-[32px] sm:text-[48px] lg:text-[72px]  bg-gradient-to-br from-white  via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
          Welcome to THE<br /> ImagineX
        </p>
      </motion.div>
            <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <p className="font-medium text-[8px] sm:text-[12px] lg:text-[16px]  bg-gradient-to-br from-white  via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
          THE HUMAN ENTERPRISE
        </p>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <p className="font-medium text-[12px] sm:text-[16px] lg:text-[20px] text-[#F8E9FE] max-w-[800px] mx-auto">
          Empowering innovation through AI-driven patent analytics, strategic IP insights, and future-ready technology solutions.
        </p>
      </motion.div>

      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <motion.button
          
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToElementByIdWithOffset("pillars")}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-[6px] font-medium text-[12px] hover:scale-105 transform  cursor-pointer duration-400 sm:text-[14px] lg:text-[16px] alex px-4 sm:px-5 py-2 sm:py-3 flex items-center gap-2 bg-[#AF2ECB] shadow-[inset_0_0_20px_-1px_#F1D2FC] hover:brightness-110 transition"
        >
          <p>Learn More</p>
          <img src="/top-icon.png" alt="top" className="h-2 sm:h-3 lg:h-3" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
