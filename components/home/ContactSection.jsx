import Image from "next/image";
import React from "react";
import Button from "../uiElements/Button";
import TextArea from "../uiElements/TextArea";
import TextField from "../uiElements/TextField";

export default function ContactSection() {
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="shadow_title_primary text-7xl text-white font-bold">
            Get in Touch
          </h1>
          <h2 className="text-xl text-gray-400">
            I am available for freelance work. Connect with me by just sending
            your email.
          </h2>
          <div className="h-2 w-80 bg-[#E7B10A]"></div>
        </div>
        <div className="grid grid-cols-12 gap-10 mt-20">
          <div className="primary_card_effect col-span-5 rounded-xl p-5 space-y-5">
            <h1 className="text-2xl text-white font-medium">Wasid Ali</h1>
            <h2 className="text-xl text-gray-400">Front-end Engineer</h2>
            <div className="h-2 w-80 bg-[#E7B10A]"></div>
            <h2 className="text-xl text-gray-400">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </h2>
            <ul className="space-y-2 text-lg text-white">
              <li>
                Location: <span>Lahore, PK</span>
              </li>
              <li>
                Phone: <span>0309-2591948</span>
              </li>
              <li>
                Email:{" "}
                <span>
                  <a href="mailto:wasidasif1122@gmail.com">
                    wasidasif1122@gmail.com
                  </a>
                </span>
              </li>
            </ul>
            <div className="flex gap-5">
              <div className="primary_card_effect h-12 w-12 center">
                <Image
                  src="/images/twitter.svg"
                  height={25}
                  width={25}
                  alt="twitter"
                />
              </div>
              <div className="primary_card_effect h-12 w-12 center">
                <Image
                  src="/images/facebook.svg"
                  height={25}
                  width={25}
                  alt="facebook"
                />
              </div>
              <div className="primary_card_effect h-12 w-12 center">
                <Image
                  src="/images/linkedin.svg"
                  height={25}
                  width={25}
                  alt="linkedin"
                />
              </div>
            </div>
          </div>
          <div className="primary_card_effect rounded-xl p-5 col-span-7">
            <div className="grid grid-cols-2 gap-5">
              <TextField
                name="name"
                placeText="Enter your name"
                label="your name"
              />
              <TextField
                name="email"
                placeText="Enter your email"
                label="your email"
              />
            </div>
            <TextField
              name="subject"
              placeText="Enter your subject"
              label="your subject"
            />
            <TextArea
              name="message"
              placeText="Enter your message"
              label="your message"
            />
            <Button title="send message" isFull />
          </div>
        </div>
      </div>
    </>
  );
}
