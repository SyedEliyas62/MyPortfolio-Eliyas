import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

// Project data
const projects = [
  {
    image: project1,
    techStack: ["React Js", "Next Js", "TypeScript", "TailwindCss"],
    title: "RemoveDev",
    duration: "Jan 2025 – Mar 2025",
    description:
      "Built a RemoteDev platform using React, TypeScript, and TailwindCSS. The platform enables developers to collaborate remotely.",
  },
  {
    image: project2,
    techStack: ["React Js", "Tailwind CSS"],
    title: "Razorpay-Clone",
    duration: "Nov 2024 – Jan 2025",
    description:
      "Implemented a fully responsive landing page with modern UI components and smooth animations. Focused on pixel-perfect design, section-based layout, and optimized performance.",
  },
  {
    image: "your-image-link-or-path-3",
    techStack: ["Spring Boot", "Microservices", "MySQL"],
    title: "Project Name 3",
    duration: "Jul 2024 – Present",
    description: "Brief description about third project features.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="text-white bg-[#121212] py-10 px-5"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="text-gray-400 text-lg mt-4">
          I have worked on a wide range of projects. From web apps to deployment. Here are some of my projects.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-[#1a1a1a] p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            {/* Project Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-40 object-cover mb-5"
            />

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[#d8772c] text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Title and Description */}
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{project.duration}</p>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
