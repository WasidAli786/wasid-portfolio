import React, { useState } from "react";
import { navData } from "@/config/db";
import NextImage from "../NextImage";
import SideBar from "./SideBar";

export default function Navbar({ onClick }) {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  return (
    <>
      <div className="border-b border-gray-700 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container h-[70px] flex items-center justify-between">
          <h1 className="text-4xl text-white font-bold uppercase">wa.</h1>
          <div className="hidden md:block">
            <ul className="list_items flex items-center space-x-6">
              {navData.map((items, index) => (
                <li
                  key={index}
                  className="text-lg font-medium"
                  onClick={() => onClick(index)}
                >
                  {items?.title}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="relative h-7 w-7 cursor-pointer block md:hidden"
            onClick={() => setIsDrawerVisible(true)}
          >
            <NextImage src="/images/menu.svg" alt="wasid-portfolio-menu" />
          </div>
        </nav>
      </div>
      <div className="block md:hidden">
        <SideBar
          isDrawerVisible={isDrawerVisible}
          setIsDrawerVisible={setIsDrawerVisible}
          onClick={onClick}
        />
      </div>
    </>
  );
}
