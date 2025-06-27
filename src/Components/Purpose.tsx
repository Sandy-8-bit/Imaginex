import { div } from 'framer-motion/client';
import React from 'react'


const data = [
  {
    name: "Patent Tech Consulting",
    description:
      "End-to-end, AI-driven IP discovery, drafting, valuation, monetization, and capability building.",
  },
  {
    name: "Our Ecosystem",
    description:
      "End-to-end, AI-driven IP discovery, drafting, valuation, monetization, and capability building",
  },
  {
    name: "Mission",
    description:
      "End-to-end, AI-driven IP discovery, drafting, valuation, monetization, and capability building.",
  },
    {
    name: "Mission",
    description:
      "End-to-end, AI-driven IP discovery, drafting, valuation, monetization, and capability building.",
  }
];
const Purpose = () => {
  return (
        <div className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-5 justify-center items-center text-center">
      <div>
        <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] anybody bg-gradient-to-br from-white via-white/90 to-[#9b2f9f] bg-[length:250%] bg-[0%_0%] text-transparent bg-clip-text leading-tight">
          Driving Innovation with Purpose
        </p>
      </div>

      <div>
        <p className="font-medium text-[10px] sm:text-[14px] lg:text-[16px] text-[#F8E9FE] mx-auto">
          Discover the four pillars that define THE ImagineX’s mission to empower humanity through innovation and technology.
        </p>
      </div>

      <div className="flex flex-wrap flex-row  gap-6">
        {data.map((item, index) => (
          <div key={index} className='flex flex-col w-full md:w-[48%] gap-2 px-5 py-6 md:px-10 md:py-12 bg-gradient-to-b from-[#0E0A0F] to-[#211824] rounded-lg justify-between'>
            <p className='text-[14px] md:text-[28px] text-start'>{item.name}</p>
            <p className='text-[10px] md:text-[16px] text-start'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Purpose