import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ImArrowUpRight2 } from "react-icons/im";

import { github } from "../assets";
import { projects } from "../constants";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1, delay: index * 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.05 }}
      className='bg-[#1f1f2e] p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer shadow-lg'
      onClick={() => window.open(source_code_link, "_blank")}
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3'>
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            className='bg-black bg-opacity-50 w-10 h-10 rounded-full flex justify-center items-center hover:bg-opacity-70 transition duration-300'
          >
            <ImArrowUpRight2 />

          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-gray-400 text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="project" className="w-full py-12 bg-gradient-to-b from-[#0f172a]/95 via-black to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <p className="text-gray-400 text-sm md:text-base">Our Work</p>
          <h2 className="text-white text-2xl md:text-4xl font-bold mt-1">Projects</h2>
        </div>

        {/* Description */}
        <div className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed text-center">
          <p>
            The following projects showcase the skills, creativity, and expertise of the TechifyLabs development team. Each project includes a brief overview along with links to code repositories and live demos. These real-world examples highlight our ability to solve complex problems, work with a wide range of technologies, and deliver high-quality solutions through effective teamwork and project management.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 flex flex-wrap justify-center gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>

      
  );
};
export default Works;
