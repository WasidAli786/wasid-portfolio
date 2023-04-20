import React from "react";

export default function Button({ title }) {
  return (
    <>
      <button className="primary_btn">
        <span>{title ?? "title"}</span>
      </button>
    </>
  );
}
