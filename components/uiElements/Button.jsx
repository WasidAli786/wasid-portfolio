import React from "react";

export default function Button({ title, isFull }) {
  return (
    <>
      <button className="primary_btn">{title ?? "title"}</button>
    </>
  );
}
