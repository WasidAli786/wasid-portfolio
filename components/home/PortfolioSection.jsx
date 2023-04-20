import { portfolioData } from "@/config/db";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NextImage from "../NextImage";

export default function PortfolioSection() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="primary_title">Projects & Developments</h1>
          <h2 className="description_title">
            Showcase of my latest works, projects and developments.
          </h2>
        </div>
        <div className="mt-10">
          <VerticalTimeline>
            {portfolioData.map((items, index) => (
              <VerticalTimelineElement
                contentStyle={{ borderTop: "4px solid #0e9e2c" }}
                className="vertical-timeline-element--work"
                icon={
                  <div className="h-full w-full center">
                    <div className="relative h-8 w-8">
                      <NextImage src={items?.icon} alt={items?.title} />
                    </div>
                  </div>
                }
                iconStyle={{ background: "white" }}
                date={<h1 className="text-gray-400">{items?.company}</h1>}
                key={index}
              >
                <div className="flex flex-wrap gap-2">
                  {items?.tags?.map((items, index) => (
                    <div
                      className="h-8 w-fit center px-4 rounded-full bg-primary"
                      key={index}
                    >
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
                  className="text-blue-500 hover:underline"
                >
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
