import React from "react";

export default function TextArea({
  name,
  placeText,
  label,
  register,
  errors,
  isRequired,
  maximLength,
  minimLength,
}) {
  return (
    <>
      <div className="flex flex-col mb-5">
        <label className="text-gray-400 text-sm font-medium uppercase mb-3 tracking-wider">
          {label ?? "label"}
        </label>
        <textarea
          rows="5"
          name={name ?? "name"}
          placeholder={placeText ?? "Enter text here"}
          className="text-gray-300 bg-[#191b1e] p-3 transition rounded-lg border-2 border-[#191b1e] 
          outline-none shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)inset,-1px_-3px_3px_-2px_rgba(255,255,255,0.2)inset] focus:border-primary"
          {...register(name, {
            required: {
              value: isRequired === false ? false : true,
              message: "This is required",
            },
            maxLength: {
              value: maximLength,
              message: `Value must be maximum ${maximLength}`,
            },
            minLength: {
              value: minimLength,
              message: `Value must be minimum ${minimLength}`,
            },
          })}
        />
        {errors[name] && (
          <span className="text-red-500 text-sm mt-2 ml-5">
            {errors[name].message}
          </span>
        )}
      </div>
    </>
  );
}
