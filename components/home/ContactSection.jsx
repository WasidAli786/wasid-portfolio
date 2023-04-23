import React, { useRef } from "react";
import Button from "../uiElements/Button";
import TextArea from "../uiElements/TextArea";
import TextField from "../uiElements/TextField";
import { socialData } from "@/config/db";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactSection() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onContactFormSubmit = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          reset();
          console.log(result.text);
        },
        (error) => {
          toast.error("Error while submitting message!");
          console.log(error.text);
        }
      );
  };
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
                <a href={items?.link} target="_blank" key={index}>
                  <div className="primary_btn h-10 w-10 center hover:scale-110">
                    {items?.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-full md:col-span-6">
            <form ref={form} onSubmit={handleSubmit(onContactFormSubmit)}>
              <div className="sm:grid grid-cols-2 gap-5">
                <TextField
                  name="user_name"
                  placeText="Enter your name"
                  label="your name"
                  register={register}
                  errors={errors}
                />
                <TextField
                  name="user_email"
                  placeText="Enter your email"
                  label="your email"
                  type="email"
                  register={register}
                  errors={errors}
                />
              </div>
              <TextField
                name="subject"
                placeText="Enter your subject"
                label="your subject"
                register={register}
                errors={errors}
                isRequired={false}
              />
              <TextArea
                name="message"
                placeText="Enter your message"
                label="your message"
                register={register}
                errors={errors}
              />
              <Button title="send message" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
