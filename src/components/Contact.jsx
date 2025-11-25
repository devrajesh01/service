import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { contactImage } from "../assets";
import ContactForm from "./ContactForm";

const Contact = ({ closeContactForm }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
    id="contact"
      ref={sectionRef}
      className="py-12 px-6 bg-gradient-to-b from-black/95 via-[#0f172a] to-[#0f172a] flex justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[60%] pl-0 md:pl-20"
        >
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-[300px] lg:h-[450px] md:h-[450px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Side Form */}
        <div className="w-full md:w-[40%] flex">
          <ContactForm />
        </div>

      </div>
    </section>

  );
};
export default Contact;
