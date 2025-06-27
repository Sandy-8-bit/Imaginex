
import { Component } from "./ui/Comp"

const data =[
    {
        title:"Employment Readiness ",
        img:"/impact-icon.svg"
    },
        {
        title:"Employment Readiness ",
        img:"/impact-icon.svg"
    },
        {
        title:"Employment Readiness ",
        img:"/impact-icon.svg"
    }
]
const Innovators = () => {
  return (
        <div className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-2 md:gap-5 justify-center items-center text-center">
      <div>
        <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] anybody bg-gradient-to-br from-white via-white/90 to-[#9b2f9f] bg-[length:250%] bg-[0%_0%] text-transparent bg-clip-text leading-tight">
          Empowering the Innovators of <br></br>Tomorrow
        </p>
      </div>

        <div className="flex w-full gap-2 md:gap-5">
            {data.map((item, index) => (
                <Component key={index} title={item.title} imgUrl={item.img} />
            ))}
        </div>
      
    </div>
  )
}

export default Innovators