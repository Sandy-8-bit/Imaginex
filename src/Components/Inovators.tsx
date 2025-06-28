import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Component } from "./ui/Comp";

const data = [
  {
    title: "Employment Readiness Programs",
    img: "/impact-icon.svg",
  },
  {
    title: "EAI Product Development Training",
    img: "/ecosystem-icon.svg",
  },
  {
    title: "Patent & IP Literacy Programs",
    img: "/mission-icon.svg",
  },
];

const Innovators = () => {
  // Heading animation
  const headingControls = useAnimation();
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { amount: 0.3 });

  useEffect(() => {
    if (headingInView) {
      headingControls.start({ opacity: 1, y: 0 });
    } else {
      headingControls.start({ opacity: 0, y: -20 });
    }
  }, [headingInView, headingControls]);

  // Cards animation
  const cardsControls = useAnimation();
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { amount: 0.3 });

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start({ opacity: 1, y: 0 });
    } else {
      cardsControls.start({ opacity: 0, y: 40 });
    }
  }, [cardsInView, cardsControls]);

  return (
    <div  id="inovators" className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-2 md:gap-5 justify-center items-center text-center">
      
      {/* Heading Animation */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: -20 }}
        animate={headingControls}
        transition={{ duration: 0.6 }}
      >
<p className="font-medium text-[20px] sm:text-[32px] lg:text-[48px] anybody bg-gradient-to-br from-white  via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
  Empowering the Innovators of <br /> Tomorrow
</p>


      </motion.div>

      {/* Good Div Animation */}
      <motion.div
        ref={cardsRef}
        className="good flex w-full gap-2 flex-col md:flex-row md:gap-5"
        initial={{ opacity: 0, y: 40 }}
        animate={cardsControls}
        transition={{ duration: 0.6 }}
      >
        {data.map((item, index) => (
          <Component key={index} title={item.title} imgUrl={item.img} />
        ))}
      </motion.div>
    </div>
  );
};

export default Innovators;
