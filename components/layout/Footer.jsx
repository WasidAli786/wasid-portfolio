import React from "react";
import Image from "next/image";

export default function Footer() {
  const date = new Date();
  const current_year = date.getFullYear();

  const onBottomToTopScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="h-20 w-full center border-t border-gray-900 mt-20">
        <h1 className="text-lg text-white tracking-wider">
          © {current_year}. All rights reserved. Developed by Wasid Ali
        </h1>
      </div>
      <div
        className="primary_card_effect h-12 w-12 center fixed right-5 bottom-5 cursor-pointer"
        onClick={onBottomToTopScroll}>
        <Image src="/images/arrow.svg" height={25} width={25} alt="linkedin" />
      </div>
    </>
  );
}
