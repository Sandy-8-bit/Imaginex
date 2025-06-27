import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const data = [
  {
    name: "Our Impact",
    image: "/impact-icon.svg",
    description:
      "Our mission is to create a world where innovation is accessible, purposeful, and human-centered. Through a unified ecosystem, we bring together patents, products, people, and purpose.Our mission is to create a world where innovation is accessible, purposeful, and atents, products, people, and purpose.",
  },
  {
    name: "Our Ecosystem",
    image: "/ecosystem-icon.svg",
    description:
      "Internally, we build proprietary, cutting-edge technologies that—once mature—are spun off as new businesses (SPVs), contributing to a self-sustaining innovation ecosystem. We further invest in nurturing emerging talent, empowering students and early-stage founders to build ventures that will shape the future of technology and humanity.",
  },
  {
    name: "Mission",
    image: "/mission-icon.svg",
    description:
      "Our mission is to create a world where innovation is accessible, purposeful, and human-centered. Through a unified ecosystem, we bring together patents, products, people, and purpose.Our mission is to create a world where innovation is accessible, purposeful, and atents, products, people, and purpose.",
  },
];

const InnovationCard = ({
  item,
  index,
}: {
  item: (typeof data)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.35, // stagger delay
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full md:w-full lg:w-[31%] flex flex-col justify-between bg-gradient-to-b from-[#0E0A0F] to-[#211824] p-6 rounded-lg"
    >
      <div className="flex items-center mb-4">
        <div className="w-[32px] h-[32px] sm:w-[65px] sm:h-[65px] bg-[#221924] rounded flex items-center justify-center">
          <img
            src={item.image}
            className="w-[20px] h-[20px] sm:w-10 sm:h-10"
            alt={`${item.name} icon`}
          />
        </div>
        <p className="text-[20px] sm:text-[28px] ml-4 text-white font-normal">
          {item.name}
        </p>
      </div>
      <div>
        <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-justify text-[#F8E9FE] font-normal">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Innovation = () => {
  return (
    <div className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-5 justify-center items-center text-center">
      <div>
        <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] anybody bg-gradient-to-br from-white via-white/90 to-[#9b2f9f] bg-[length:250%] bg-[0%_0%] text-transparent bg-clip-text leading-tight">
          Empowering Humanity through Innovation and Technology (M-HIT)
        </p>
      </div>

      <div>
        <p className="font-medium text-[10px] sm:text-[14px] lg:text-[16px] text-[#F8E9FE] mx-auto">
          ImagineX is a True Human Enterprise driven by the mission of Empowering Humanity through Innovation and Technology (M-HIT). We transform ideas into patents, patents into products, and innovation into solutions that serve humanity.
        </p>
      </div>

      <div className="flex justify-between w-full flex-wrap gap-6">
        {data.map((item, index) => (
          <InnovationCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Innovation;
