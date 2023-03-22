import React from "react";
import { navData } from "@/config/db";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="">
        <div className="container h-[70px] flex items-center justify-between">
          <h1 className="text-4xl text-white font-bold uppercase">wasid.</h1>
          <ul className="list_items flex items-center space-x-6">
            {navData.map((items, index) => (
              <li key={index} className="text-lg text-gray-400 font-medium">
                <Link href={items?.link}>{items?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
