import React from "react";

export default function Button({ title }) {
  return (
    <>
      <button className="h-[50px] px-5 primary_btn">
        <span>{title ?? "title"}</span>
      </button>
    </>
  );
}
