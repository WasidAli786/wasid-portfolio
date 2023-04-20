import React from "react";
import Button from "../uiElements/Button";
import TextArea from "../uiElements/TextArea";
import TextField from "../uiElements/TextField";
import { socialData } from "@/config/db";
import NextImage from "../NextImage";

export default function ContactSection() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="primary_title">Get in Touch</h1>
          <h2 className="description_title">
            I am available for freelance work. Connect with me by just sending
            your email.
          </h2>
        </div>
        <div className="grid grid-cols-12 md:gap-10 mt-10">
          <div className="col-span-full md:col-span-6 space-y-5 order-last md:order-first mt-10 md:mt-0">
            <h1 className="text-3xl xl:text-5xl xl:leading-snug text-white font-bold tracking-wider">
              Let&apos;s chat. <br /> Tell me about your <br /> project.
            </h1>
            <p className="description_title">
              Let&apos;s create something together.
            </p>
            <ul className="text-lg text-white space-y-2">
              <li className="flex items-center">
                <span className="block w-20">Address</span> :
                <span className="ml-10">Lahore, Pakistan</span>
              </li>
              <li className="flex items-center">
                <span className="block w-20">Phone</span> :
                <span className="ml-10">0309-2591948</span>
              </li>
              <li className="flex items-center">
                <span className="block w-20">Email</span> :
                <span className="ml-10">wasidasif1122@gmail.com</span>
              </li>
            </ul>
            <div className="flex gap-5">
              {socialData?.map((items, index) => (
                <div
                  className="h-12 w-12 center rounded-lg border border-gray-800 cursor-pointer transition hover:scale-110"
                  key={index}
                >
                  <div className="relative h-6 w-6">
                    <NextImage src={items?.icon} alt="social_images" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-full md:col-span-6">
            <div className="sm:grid grid-cols-2 gap-5">
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
            <Button title="send message" />
          </div>
        </div>
      </div>
    </>
  );
}
