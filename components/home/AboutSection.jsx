import React from "react";
import NextImage from "../NextImage";
import Button from "../uiElements/Button";

export default function AboutSection({ onClick }) {
  return (
    <>
      <div className="grid grid-cols-12 md:gap-10">
        <div className="hidden md:block col-span-5 relative h-[500px] w-full">
          <NextImage
            src="/images/about.svg"
            alt="about-wasid"
            className="object-contain"
          />
        </div>
        <div className="col-span-full md:col-span-7 space-y-6">
          <h1 className="primary_title">About Me</h1>
          <p className="description_title">
            Motivated and skilled Front End Engineer with number of years
            experience in building scalable and responsive web applications.
            Proficient in developing user interfaces using ReactJS Next Js and
            integrating with RESTful APIs. Strong knowledge of Javascript tech
            stack including React Js Next Js, Redux, Middlewares, Api
            handling, UI libraries, Code Optimization etc. Skilled in debugging,
            troubleshooting, and maintaining code to ensure optimal performance
            and scalability.
          </p>
          <ul className="text-lg text-white space-y-2">
            <li className="flex items-center">
              <span className="block w-20">Address</span> :
              <span className="ml-10">Lahore, Pakistan</span>
            </li>
            <li className="flex items-center">
              <span className="block w-20">Phone</span> :
              <span className="ml-10">0309-2591948</span>
            </li>
            <li className="flex items-center">
              <span className="block w-20">Email</span> :
              <span className="ml-10">wasidasif1122@gmail.com</span>
            </li>
          </ul>
          <div>
            <h1 className="text-3xl text-primary font-semibold">
              My Expertise
            </h1>
            <ul className="flex flex-wrap text-lg text-white gap-x-6 mt-3">
              <li>Javascript</li>
              <li>React Js</li>
              <li>Next Js</li>
              <li>Redux-Toolkit</li>
              <li>Tailwind Css</li>
            </ul>
          </div>
          <Button title="Let's Connect" onClick={onClick} />
        </div>
      </div>
    </>
  );
}
