import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants"; // Make sure your services array is properly defined

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring" },
  },
};

const About = () => {
  return (
    <section id="about" className="py-16 pl-6 pr-3 max-w-7xl mx-auto bg-black">
      {/* Section Heading */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className="mb-4"
      >
        <p className="md:text-sm text-xl text-white/60">Introduction</p>
        <h2 className="text-4xl font-bold text-white">Overview</h2>
      </motion.div>

      {/* Section Description */}
      <motion.p
        className="text-white/70 text-lg leading-7 w-full mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        We have a team of skilled developers with strong technical expertise across multiple platforms. Our capabilities include full-stack web development using HTML, CSS, JavaScript, React, PHP, Laravel, Python, WordPress, and Shopify. We also offer high-quality mobile application development for both iOS and Android.

        We deliver clean, modern, and user-friendly digital solutions tailored to your business needs.
        You can explore our full range of services to see how we can help bring your ideas to life.
      </motion.p>

      {/* Service Cards */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariant}
            whileHover={{
              scale: 1.05,
              rotateZ: 1,
              transition: { type: "spring", stiffness: 250, damping: 18 },
            }}
            className="w-full max-w-[250px] bg-gradient-to-br from-purple-600 to-pink-500 p-[2px] rounded-xl shadow-lg group"
          >
            <div className="bg-gray-900 rounded-xl py-10 px-6 flex flex-col items-center transition-all duration-300 ease-in-out group-hover:shadow-[0_0_20px_#915EFF]">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-white text-lg sm:text-xl font-semibold text-center">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default About;
