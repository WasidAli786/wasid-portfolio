import React, { useEffect, useRef, useState } from "react";
import AboutSection from "@/components/home/AboutSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import SkillSection from "@/components/home/SkillSection";
import ContactSection from "@/components/home/ContactSection";
import Button from "@/components/uiElements/Button";
import Navbar from "@/components/layout/Navbar";
import NextImage from "@/components/NextImage";
import NextHead from "@/components/NextHead";

export default function Home() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const skillSectionRef = useRef(null);
  const [isSkillVisible, setIsSkillVisible] = useState(false);

  //* only run when skill section in visible
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsSkillVisible(entry.isIntersecting);
    });
    observer.observe(skillSectionRef.current);
    return () => observer.disconnect();
  }, [isSkillVisible]);

  //* scroll to particular section
  function scrollView(id) {
    switch (id) {
      case 1:
        aboutRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        break;
      case 2:
        skillRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        break;
      case 3:
        portfolioRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        break;
      case 4:
        contactRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        break;
      default:
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const onScrollToSection = (id) => {
    scrollView(id);
  };

  const onScrollToContactForm = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };
  return (
    <>
      <NextHead
        title="Wasid-Ali | Portfolio"
        description="Looking for a skilled front-end developer to bring your website or application to life? I am front-end developers specialize in creating visually stunning and user-friendly web pages using HTML, CSS, React JS and Next JS with any UI library and integrate API's. From design mockups to responsive layouts, i can help bring your vision to life and ensure that your online presence is optimized for success. Contact us today to learn more about how our front-end development services can help take your website to the next level."
        ogImage="/images/ogImage.png"
        favicon="/favicon.png"
      />
      <Navbar onClick={onScrollToSection} />
      <div className="container w-full">
        <div className="min-h-[calc(100vh-70px)] md:grid grid-cols-12 md:gap-10 items-center py-10 md:py-0">
          <div className="col-span-6 lg:col-span-7 space-y-6">
            <h2 className="text-3xl xl:text-4xl text-white font-medium tracking-wider">
              Hello, I&apos;m
            </h2>
            <h1 className="primary_title">Wasid Ali</h1>
            <div className="flex items-center gap-4">
              <span className="h-1 w-10 bg-primary"></span>
              <h3 className="text-3xl xl:text-4xl text-primary font-bold tracking-wider">
                Front-End Engineer
              </h3>
            </div>
            <p className="description_title">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <Button title="Hire Me" onClick={onScrollToContactForm} />
          </div>
          <div className="col-span-6 lg:col-span-5 flex justify-center md:justify-end mt-14 md:mt-0">
            <div className="image_box relative h-60 sm:h-72 lg:h-[400px] w-60 sm:w-72 lg:min-w-[400px] bg-[rgba(0,0,0,0.5)] rounded-full overflow-hidden">
              <div className="imageBox_content">
                <div className="relative h-full w-full">
                  <NextImage
                    src="/images/portfolioPic.png"
                    alt="wasid-portfolio"
                    className="object-cover"
                    isPriority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20" ref={aboutRef}>
          <AboutSection onClick={onScrollToContactForm} />
        </div>
        <div className="pt-20" ref={skillRef}>
          <SkillSection
            isSkillVisible={isSkillVisible}
            skillSectionRef={skillSectionRef}
          />
        </div>
        <div className="pt-20" ref={portfolioRef}>
          <PortfolioSection />
        </div>
        <div className="pt-20" ref={contactRef}>
          <ContactSection />
        </div>
      </div>
    </>
  );
}
