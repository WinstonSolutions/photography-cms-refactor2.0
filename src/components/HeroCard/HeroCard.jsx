import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { GiVitruvianMan } from "react-icons/gi";
import { GiMountainCave } from "react-icons/gi";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "ANIMAL",
    content: "Pet Photography",
    description:
      "Capturing the adorable personalities of cats and dogs.",
    icon: <GiSittingDog className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "PORTAIT",
    content: "Portrait Photography",
    description:
      "Our portrait photography is about highlighting your individuality and confidence.",
    icon: <GiVitruvianMan  className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "LANDSCAPE",
    content: "Nature Photography",
    description:
      "We capture the breathtaking landscapes and hidden gems around the globe.",
    icon: <GiMountainCave className="text-7xl" />,
    aosDelay: "700",
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[150px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0] animate-slowWave"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
