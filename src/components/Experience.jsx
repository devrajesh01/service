import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants"; // your timeline data

const textVariant = () => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.75,
      delay: 0.2,
    },
  },
});

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(18, 24, 38, 0.95)",
        color: "#fff",
        border: "1px solid #2A2F4A",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1F2937" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg || "#1f2937",
        color: "#fff",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[22px] font-semibold'>
          {experience.title}
        </h3>
        <p className='text-gray-400 text-[16px] font-medium'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-4 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-gray-300 text-[14px] leading-snug'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-black/95 via-[#0f172a] to-[#0f172a] py-20 px-5 sm:px-10"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-blue-400 text-sm uppercase tracking-wider">
          What We have done so far
        </p>
        <h2 className="text-white text-4xl font-bold">Work Experience</h2>
      </motion.div>

      <div className='flex flex-col max-w-5xl mx-auto'>
        <VerticalTimeline lineColor="#3b82f6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
