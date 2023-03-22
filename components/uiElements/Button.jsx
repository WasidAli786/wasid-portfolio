import React from "react";

export default function Button({ title, isFull }) {
  return (
    <>
      <button className={`primary_button ${isFull ? "w-full" : "w-auto"}`}>
        {title ?? "title"}
      </button>
    </>
  );
}
