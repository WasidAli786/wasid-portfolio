import React from "react";
import { navData } from "@/config/db";
import Link from "next/link";

export default function Navbar({ onClick }) {
  return (
    <>
      <div className="border-b border-gray-700 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container h-[70px] flex items-center justify-between">
          <h1 className="text-4xl text-white font-bold uppercase">wa.</h1>
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
        </nav>
      </div>
    </>
  );
}
