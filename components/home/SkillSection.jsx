import React from "react";
import { skillsData } from "@/config/db";
import ProgressBar from "../uiElements/ProgressBar";

export default function SkillSection({ isVisible }) {
  return (
    <>
      <div>
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="primary_title">Skills</h1>
          <h2 className="description_title">
            Power up your Web Applications with me using these Latest Tools and
            Technologies.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5 mt-10">
          {skillsData?.map((items, index) => (
            <ProgressBar key={index} items={items} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </>
  );
}
