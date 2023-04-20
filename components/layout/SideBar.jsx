import React from "react";
import { navData } from "@/config/db";
import NextImage from "../NextImage";

export default function SideBar({
  isDrawerVisible,
  setIsDrawerVisible,
  onClick,
}) {
  return (
    <>
      <div
        className={`min-h-screen w-80 bg-[#162025] shadow-2xl transition fixed top-0 right-0 z-[999] ${
          isDrawerVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute top-3 right-3"
          onClick={() => setIsDrawerVisible(false)}
        >
          <div className="relative h-7 w-7 cursor-pointer">
            <NextImage src="/images/close.svg" alt="wasid-portfolio-menu" />
          </div>
        </div>
        <ul className="flex flex-col divide-y divide-gray-700 py-8">
          {navData.map((items, index) => (
            <li
              key={index}
              className="text-lg font-medium py-3 px-5 text-white cursor-pointer transition hover:bg-gray-800"
              onClick={() => {
                onClick(index);
                setIsDrawerVisible(false);
              }}
            >
              {items?.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
