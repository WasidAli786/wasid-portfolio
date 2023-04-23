import React, { useState } from "react";
import { navData } from "@/config/db";
import SideBar from "./SideBar";
import Button from "../uiElements/Button";

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
              <a href="/images/resume.pdf" download="Wasid_Ali_React_js">
                <Button title="Resume" />
              </a>
            </ul>
          </div>
          <div
            className="cursor-pointer block md:hidden"
            onClick={() => setIsDrawerVisible(true)}
          >
            <i className="uil uil-bars text-3xl text-white"></i>
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
