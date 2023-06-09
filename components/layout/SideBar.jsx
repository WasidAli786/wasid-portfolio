import React from "react";
import { navData } from "@/config/db";
import Button from "../uiElements/Button";

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
          className="absolute top-3 right-3 cursor-pointer"
          onClick={() => setIsDrawerVisible(false)}
        >
          <i className="uil uil-times text-2xl text-white"></i>
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
          <div className="center pt-5">
            <a href="/images/resume.pdf" download="Wasid_Ali_React_js">
              <Button title="Resume" />
            </a>
          </div>
        </ul>
      </div>
    </>
  );
}
