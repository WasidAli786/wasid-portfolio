import React from "react";
import Image from "next/image";
import { skillsData } from "@/config/db";

export default function SkillSection() {
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="shadow_title_primary title">Skills</h1>
          <h2 className="text-xl text-gray-400">
            Power up your Web Applications with me using these Latest Tools and
            Technologies.
          </h2>
          <div className="horizontal_line w-80"></div>
        </div>
        <div className="grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-14">
          {skillsData.map((items, index) => (
            <div
              key={index}
              className="primary_card_effect flex flex-col items-center justify-between text-center p-5 space-y-5">
              <Image
                src={items?.icon}
                height={50}
                width={50}
                alt={items?.title}
              />
              <h1 className="text-sm font-medium text-gray-400 uppercase">
                {items?.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
