import React from "react";
import { motion } from "framer-motion";
import MyPhoto from "../assets/PortfoiloPhoto.png";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const leftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
};

const rightVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 50 } },
};

const floatVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 10, stiffness: 100 } },
};

const AboutMe = () => {
  return (
    <section className="flex flex-col  bg-gray-900 md:flex-row items-center p-8 md:p-16 gap-5 shadow-md overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1"
      >
        {/* Left Side Text */}
        <motion.div variants={leftVariants}>
          <h1 className="text-4xl text-white md:text-5xl font-display mb-4">
            Hi, I Am <span className="text-white">SYED ELIYAS</span>,
            <br />
            <span className="text-orange-500">Software Engineer.</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            A passionate MERN Stack Developer skilled in React.js, Node.js, and Tailwind CSS.
            I enjoy building dynamic web applications and am always learning new technologies
            to enhance my skills. Currently focused on mastering advanced Java concepts and
            exploring innovative state management techniques.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-md font-secondary hover:bg-orange-500 hover:text-white transition duration-300"
            >
              <a href="/">KNOW MORE</a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-teal-600 text-white rounded-md font-secondary hover:bg-teal-700 transition duration-300"
            >
              <a href="#projects" 
              >SEE MY PROJECTS</a>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side Image + Social Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 flex justify-center relative md:-ml-12"
      >
        {/* Main Image */}
        <motion.div
          variants={rightVariants}
          className="relative w-[300px] h-[400px] bg-gray-300 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden"
        >
          <img
            src={MyPhoto}
            alt="Profile"
            className="h-full w-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={floatVariants}
          className="hidden md:flex flex-col gap-4 absolute right-[-70px] top-1/2 transform -translate-y-1/2"
        >
          <a
            href=""
            target="_blank"
            className="bg-teal-500 text-white px-6 py-3 rounded-xl text-center font-bold tracking-widest hover:bg-teal-600 transition"
          >
            LINKEDIN
          </a>
          <a
            href=""
            target="_blank"
            className="bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-xl text-center font-bold tracking-widest hover:bg-teal-50 transition"
          >
            GITHUB
          </a>
          <a
            href=""
            target="_blank"
            className="bg-teal-500 text-white px-6 py-3 rounded-xl text-center font-bold tracking-widest hover:bg-teal-600 transition"
          >
            TWITTER
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
