import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import DotLine from "./DotLine";

const HeroSections = () => {
  return (
    <section className="min-h-[60vh] lg:min-h-[70vh] bg-gradient-to-b from-violet-900 to-black flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-[70%_30%] items-center gap-10">

        {/* Left Content (65%) */}
        <div className="flex items-start gap-5">
          <DotLine />
          <div>
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
              👋 Hey, We Are  <span className="text-[#915EFF]">Service Provider</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.8,
                duration: 1.5,
              }}
              className={`${styles.heroSubText} mt-5 mb-4 text-white-100`}
            >
              We have a team of skilled professionals, including software and mobile application developers. We specialize in delivering clean, modern, and user-friendly products to our clients.
              clean and user-friendly web applications.
            </motion.p>           
          </div>
        </div>

        {/* Right Content (35%) */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full border-4 border-t-[#915EFF] border-r-transparent border-b-[#915EFF] border-l-transparent"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-6 h-6 sm:w-8 sm:h-8 bg-[#915EFF] rounded-full mx-auto mt-[35%] shadow-[0_0_20px_#915EFF]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSections;
