import React from "react";

export default function TextField({ name, placeText, label }) {
  return (
    <>
      <div className="flex flex-col mb-5">
        <label className="text-gray-400 text-sm font-medium uppercase mb-3 tracking-wider">
          {label ?? "label"}
        </label>
        <input
          name={name ?? "name"}
          placeholder={placeText ?? "Enter text here"}
          className="h-14 bg-[#191b1e] px-3 transition rounded-lg border-2 border-[#191b1e] outline-none
    shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)inset,-1px_-3px_3px_-2px_rgba(255,255,255,0.2)inset] focus:border-[#E7B10A]"
        />
      </div>
    </>
  );
}