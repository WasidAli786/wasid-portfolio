import React from "react";

export default function Footer() {
  const date = new Date();
  const current_year = date.getFullYear();

  const onBottomToTopScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="h-20 w-full center border-t border-gray-800 mt-20 px-5">
        <h1 className="text-lg text-white tracking-wider text-center">
          © {current_year}. All rights reserved. Developed by Wasid Ali
        </h1>
      </div>
      <div
        className="primary_btn h-10 w-10 center fixed right-5 bottom-5"
        onClick={onBottomToTopScroll}
      >
        <i className="uil uil-angle-up text-3xl text-white"></i>
      </div>
    </>
  );
}
