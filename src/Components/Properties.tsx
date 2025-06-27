import React from 'react'
import { Rolling } from './ui/Rolling'
import { Rollingleft } from './ui/Rollingleft'

const Properties = () => {
  return (
            <div className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-5 justify-center items-center text-center">
          <div>
            <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] anybody bg-gradient-to-br from-white  via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
              Unlock the Full Potential of Your Intellectual Properties
            </p>
          </div>
    
          <div>
            <p className="font-medium text-[10px] sm:text-[14px] lg:text-[16px] text-[#F8E9FE] mx-auto">
              THE ImagineX is an AI-native innovation consultancy helping clients uncover, develop, and monetize intellectual property. Using our industry-leading framework, we support the full patent lifecycle—from ideation to enforcement—through advanced analytics, strategic insights, and technical expertise.
            </p>
          </div>
    
          <div className="">
            <Rolling/>
             <Rollingleft/>
          </div>
        </div>
  )
}

export default Properties