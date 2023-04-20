import React from "react";
import Image from "next/image";
import NextImage from "../NextImage";

export default function Footer() {
  const date = new Date();
  const current_year = date.getFullYear();

  const onBottomToTopScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="h-20 w-full center border-t border-gray-800 mt-20">
        <h1 className="text-lg text-white tracking-wider">
          © {current_year}. All rights reserved. Developed by Wasid Ali
        </h1>
      </div>
      <div
        className="primary_card_effect h-12 w-12 center fixed right-5 bottom-5 cursor-pointer"
        onClick={onBottomToTopScroll}
      >
        <div className="relative h-10 w-10 center rounded-lg border border-gray-800 cursor-pointer transition hover:scale-110">
          <NextImage src="/images/arrow.svg" alt="wasid-portfolio" />
        </div>
      </div>
    </>
  );
}
