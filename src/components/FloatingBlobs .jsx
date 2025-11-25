import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import DotLine from "./DotLine";

// 👉 bring in the animated right-side element
const AnimatedSphere = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.8 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.8, 1, 0.8],
        borderRadius: ["50%", "40%", "50%"],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-64 h-64 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 
                 rounded-full shadow-[0_0_50px_rgba(147,51,234,0.7)]"
    />
  );
};

const HeroSections = () => {
  return (
    <section className="h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      <div className="container flex flex-col xl:flex-row items-center justify-between w-full h-full relative">
        {/* LEFT SIDE */}
        <div
          className={`flex flex-col items-start gap-5 ${styles.paddingX} z-40`}
        >
          <DotLine />
          <div className="xl:mb-0 mb-[20%]">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5,
              }}
              className={`${styles.heroHeadText} text-white`}
            >
              👋 Hi, I'm <span className="text-[#915EFF]">Rajesh</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.8,
                duration: 1.5,
              }}
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              I am a software developer with strong focus on creating <br className="sm:block hidden" />
              clean and user-friendly web applications.
            </motion.p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center items-center w-full xl:w-1/2">
          <AnimatedSphere />
        </div>
      </div>

      {/* SCROLL INDICATOR (bottom center) */}
      <div className="absolute xs:bottom-2 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 z-10 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSections;
