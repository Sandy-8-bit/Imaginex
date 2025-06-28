import type React from "react";

interface ComponentElements {
  title: React.ReactNode;
  imgUrl: string;
  p:React.ReactNode;
}

export const Component: React.FC<ComponentElements> = ({ title, imgUrl,p }) => {
  return (
    <div className="w-full h-full relative rounded-2xl flex gap-2.5 flex-wrap flex-col justify-start items-center gradient-border-inner overflow-clip">
      <div className=" h-[303.8px] flex flex-col justify-start items-center text-center">
        <div className="h-[64px] mt-2">
          <p className="text-md sm:text-xl md:text-xl lg:text-xl text-white font-semibold">
            {title}
          </p>
          <p className="text-sm text-white font-normal w-full">
            {p} 
          </p>
        </div>
        <div className="relative h-[183.38px] flex flex-col items-center -bottom-1/3">
          <div className="absolute bottom-5/6 w-[90px] h-[90px] rounded-[29.5px] z-12 flex justify-center items-center bg-white/5 backdrop-blur-2xl mt-4">
            <img className="w-[54.84px] h-[54.84px]" src={imgUrl} alt="" />
          </div>
          <div className="absolute bottom-1/4 w-[185.06px] h-[160.63px] rounded-[12px] bg-white/3 hover:w-[290px] z-11 transition-all duration-500 ease-in-out">
            {/* Decorative box */}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-40 sm:-bottom-60 ">
        <img src="/gradient.png" alt="" />
      </div>
    </div>
  );
};
