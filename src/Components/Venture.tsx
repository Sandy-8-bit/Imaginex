import { useState } from "react";

const dummyData = [
  {
    title: "Extended Patent Seeding Development",
    content: "We identify gaps in current IP and provide tailored R&D roadmaps to seed future patents."
  },
  {
    title: "Prototype Acceleration",
    content: "We rapidly build MVPs to validate market demand and iterate with real feedback."
  },
  {
    title: "Innovation-as-a-Service",
    content: "Leverage our cross-domain teams to solve deep-tech challenges as a service."
  },
  {
    title: "Venture Co-Creation",
    content: "We partner with institutions and inventors to spin out startups around IP."
  },
  {
    title: "Startup Studio Programs",
    content: "From hiring to product to go-to-market — we build companies from scratch."
  },
];

const Venture = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-5 justify-center items-center text-center">
      <div>
        <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] anybody bg-gradient-to-br from-white via-white/90 to-[#9b2f9f] bg-[length:250%] bg-[0%_0%] text-transparent bg-clip-text leading-tight">
          Technology Trainning and <br /> Venture Studio
        </p>
      </div>

      <div>
        <p className="font-medium text-[10px] sm:text-[14px] lg:text-[16px] text-[#F8E9FE] mx-auto">
          We convert patented ideas and emerging concepts into real-world solutions.
        </p>
      </div>

      <div className="flex flex-col w-full gap-3">
        {dummyData.map((item, index) => (
          <div
            key={index}
            className={`w-full p-6 border rounded-[12px] cursor-pointer transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "border-[#d38bdb] bg-gradient-to-br from-black via-[#2a0038] to-[#9b2f9f]/40"
                : "border-[#4B0056] bg-transparent"
            }`}
            onClick={() => toggleCard(index)}
          >
            <div className="flex items-center justify-between">
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-white text-left">
                {item.title}
              </p>
              <img
                src={openIndex === index ? "/Minus.svg" : "/Plus.svg"}
                alt="Toggle"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>

            {/* Content - Expandable */}
            {openIndex === index && (
              <div className="mt-4 text-[14px] sm:text-[15px] text-[#e9c7f3] text-left transition-opacity duration-300 ease-in-out">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venture;
