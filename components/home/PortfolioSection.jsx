import { portfolioData } from "@/config/db";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function PortfolioSection() {
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="shadow_title_primary text-7xl text-white font-bold">
            Projects & Developments
          </h1>
          <h2 className="text-xl text-gray-400">
            Showcase of my latest works, projects and developments.
          </h2>
          <div className="h-2 w-80 bg-[#E7B10A]"></div>
        </div>
        <div className="mt-10">
          <VerticalTimeline>
            {portfolioData.map((items, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                icon={
                  <div className="h-full center">
                    <img
                      src={items?.icon}
                      height={30}
                      width={30}
                      alt={items?.title}
                    />
                  </div>
                }
                iconStyle={{ background: "#E7B10A" }}
                date={
                  <h1 className="text-gray-400">
                    FRENIFY LLC ( 2018 — Today )
                  </h1>
                }
                key={index}>
                <div className="flex flex-wrap gap-2">
                  {items?.tags?.map((items, index) => (
                    <div
                      className="h-8 w-fit center px-4 rounded-full bg-[#E7B10A]"
                      key={index}>
                      <h1 className="text-sm font-medium capitalize text-white">
                        {items}
                      </h1>
                    </div>
                  ))}
                </div>
                <h1 className="text-xl font-semibold mt-1">{items?.title}</h1>
                <h3 className="font-medium">{items?.location}</h3>
                <a
                  href={items?.link}
                  target="_blank"
                  className="text-blue-500 hover:underline">
                  {items?.link}
                </a>
                <p className="text-gray-400">
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading.
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}
