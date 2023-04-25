import React from "react";

export default function ProgressBar({ items, isVisible }) {
  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-sm lg:text-base text-white uppercase font-normal tracking-wider">
            {items?.title}
          </h1>
          <h2 className="text-gray-300">{items?.percentage}%</h2>
        </div>
        <div className="relative h-3 w-full bg-gray-600 rounded-full">
          <div
            className="skill_line transition-all duration-500 delay-300 absolute top-0 left-0 h-full rounded-full"
            style={{ width: isVisible ? items?.percentage + "%" : "0" }}
          ></div>
        </div>
      </div>
    </>
  );
}
