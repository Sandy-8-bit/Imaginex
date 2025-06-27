import React from 'react'

const Whatwedo = () => {
  return (
        <div className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-2 md:gap-5 justify-center items-center text-center">
      <div>
        <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] anybody bg-gradient-to-br from-white via-white/90 to-[#9b2f9f] bg-[length:250%] bg-[0%_0%] text-transparent bg-clip-text leading-tight">
          What We Do?
        </p>
      </div>

      <div>
        <p className="font-medium text-[10px] sm:text-[14px] mb-2 md:mb-0 lg:text-[16px] text-[#F8E9FE] mx-auto">
          Build. Patent. Launch. Lead – With THE ImagineX.
        </p>
      </div>

        <div className="flex justify-start w-full h-[200px] bg-cover md:h-[400px] lg:h-[600px] flex-wrap gap-6 items-end bg-[url('/Group.png')]">
            <div className='flex flex-col gap-2 px-3 py-3 align-start '>
                <p className='text-[12px] text-start font-medium md:text-[12px] lg:text-[20px]'>OUR VISION</p>
            <p className='text-[16px] text-start font-light md:text-[24px] lg:text-[32px]'>Forging a Future of Intelligent Enterprise Transformation and Sustainable Growth</p>
            </div>
        </div>
        <div>
                      <div className='flex flex-col w-full  gap-2 px-5 py-6 md:px-10 md:py-12 bg-gradient-to-b from-[#0E0A0F] to-[#211824] rounded-lg justify-between'>
                        <p className='text-[10px] md:text-[16px] text-justify'>THE ImagineX is a future-focused innovation company driven by the mission to Empowering Humanity through Innovation and Technology (M-HIT). We help transform ideas into patents, and patents into real-world solutions.Our four core pillars—Patent Tech Consulting, Innovation & Product Development, Venture Studio, and Technology Training—enable startups, enterprises, and individuals to unlock IP value, build impactful products, and stay competitive in the age of AI.We deliver trusted, AI-powered patent and innovation solutions backed by expert teams, proven frameworks like xBrain™ AI and Patent Gym™, and a strong track record of IP success and product impact.</p>
                      </div>
        </div>
      
    </div>
  )
}

export default Whatwedo