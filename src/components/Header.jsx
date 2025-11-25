import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMenu  } from 'react-icons/fi';
import { MdClose } from "react-icons/md";
import ContactForm from './ContactForm';
import { FaXTwitter } from "react-icons/fa6";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const [contactFormOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => setContactFormOpen(true)
    const closeContactForm = () => setContactFormOpen(false)

    const socialLinks = [
        {icon: FiGithub, url: "https://github.com/devrajesh01"},
        {icon: FaXTwitter , url: "https://x.com/rajesh_kumar027"},
        {icon: FiLinkedin, url: "https://www.linkedin.com/in/rajesh-kumar01"}
    ]

    return (
        <header className="absolute w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.3,
                        duration: 1.2,
                    }}
                    className="flex items-center"
                >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-white font-bold text-xl mr-3">
                        T
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                        TechifyLabs
                    </span>
                </motion.div>

                {/* Navigation Links */}
                <nav className="lg:flex hidden space-x-8">
                    {["About", "Project", "Experience", "Contact"].map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.7 + idx * 0.2,
                            }}
                            className="relative text-white dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                            aria-label={item}
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-violet-600 transition-all group-hover:w-full duration-300"></span>
                        </motion.a>
                    ))}
                </nav>

                {/* Social icons and Hire button */}
                <div className="md:flex hidden items-center space-x-4">
                    
                    {socialLinks.map(({icon: Icon,url}, i) => (
                        <motion.a
                            key={i}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3, duration: 0.8 }}
                            className="text-white dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                        >
                            <Icon className="w-5 h-5" />
                        </motion.a>
                    ))}

                    <motion.button
                        onClick={openContactForm}
                        initial={{ opacity: 0, scale: 0.8 }}

                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.6,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                        }}
                        className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300"
                    >
                        Contact Us
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        className="text-gray-300"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <MdClose className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.5 }}
                className="md:hidden overflow-hidden bg-gray-900 dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
            >
                <nav className="flex flex-col items-center space-y-2">
                    {[ "About", "Project", "Experience", "Contact"].map((item, indx) => (
                        <a
                            onClick={toggleMenu}
                            href={`#${item.toLowerCase()}`}
                            className="text-white dark:text-gray-300 font-medium py-2"
                            key={indx}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 ">
                    <div className="flex space-x-5 justify-center ">
                        {
                            socialLinks.map(({icon: Icon, url}, idex)=>(
                                <a key={idex} href={url}><Icon className='h-5 w-5 text-gray-300 ' /></a>
                            ))
                        }                        
                        
                    </div>
                    <button
                        onClick={() => { toggleMenu(), openContactForm() }}
                        className='mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 text-bold ' >
                        Contact Me
                    </button>

                </div>
            </motion.div>
            {/* contact form */}
            <AnimatePresence>
                {
                    contactFormOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}

                            className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4  ">
                           <ContactForm closeContactForm={closeContactForm} closeIcon={true}  />

                        </motion.div>
                    )}
            </AnimatePresence>

        </header>
    );
};
export default Header;
