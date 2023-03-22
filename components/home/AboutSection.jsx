import React from "react";
import NextImage from "../NextImage";

export default function AboutSection() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 mt-20">
        <div className="relative h-[500px] w-[500px]">
          <NextImage
            src="/images/portfolio1.jpg"
            alt="about-me"
            className="object-contain"
          />
        </div>
        <div className="space-y-10">
          <h1 className="shadow_title_primary text-7xl text-white font-bold">
            About me
          </h1>
          <div className="h-2 w-3/4 bg-[#E7B10A]"></div>
          <p className="text-lg text-gray-400 tracking-wide">
            Motivated and skilled Front End Engineer with number of years
            experience in building scalable and responsive web applications.
            Proficient in developing user interfaces using ReactJS Next Js and
            integrating with RESTful APIs. Strong knowledge of Javascript tech
            stack including React Js Next Js, Redux, Middlewares, Api
            handling, UI libraries, Code Optimization etc. Skilled in debugging,
            troubleshooting, and maintaining code to ensure optimal performance
            and scalability. My first priority is to writing clean and high
            quality code for better reusability and performance.
          </p>
        </div>
      </div>
    </>
  );
}
