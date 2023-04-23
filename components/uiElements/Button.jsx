import React from "react";

export default function Button({ title, type, onClick }) {
  return (
    <>
      <button
        className="h-[50px] px-5 primary_btn"
        type={type ?? "button"}
        onClick={onClick}
      >
        <span>{title ?? "title"}</span>
      </button>
    </>
  );
}
