import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Swal from "sweetalert2";
import { emailConfig } from "../config/email";
import emailjs from "@emailjs/browser";

const ContactForm = ({ closeContactForm, closeIcon = false }) => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all the fields",
        icon: "error",
        confirmButtonText: "OK"
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name,
          to_name: "Rajesh Kumar",
          from_email: form.email,
          message: form.message
        },
        emailConfig.publicKey
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            title: "Success!",
            text: "Thank you. I will get back to you as soon as possible.",
            icon: "success",
            confirmButtonText: "OK"
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      );
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 30 }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        duration: 0.8
      }}
      className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-300">Get In Touch</h1>
        {closeIcon && (
          <button onClick={closeContactForm}>
            <MdClose className="w-5 h-5 text-gray-300 font-extrabold" />
          </button>
        )}
      </div>

      <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="How Can I Help You?"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-gray-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
