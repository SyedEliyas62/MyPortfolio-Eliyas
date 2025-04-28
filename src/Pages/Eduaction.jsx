// Education.jsx
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Kalasalingam Academy of Research and Education",
    duration: "2021 - 2025",
    description:
      "Graduated with a strong foundation in computer science concepts, including software development, data structures, and machine learning. Participated actively in coding competitions and hackathons.",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "sri chaitanya junior college vijayawada",
    duration: "2019 - 2021",
    description:
      "Specialized in Mathematics, Physics, and Chemistry (MPC stream). Built strong analytical and problem-solving skills essential for engineer",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Narayana e-Techno Schools Nandyal",
    duration: "2019",
    description:
      "Completed SSC with strong academic performance, laying a solid foundation in science and mathematics. Actively participated in Kabaddi tournaments, developing teamwork, leadership, and strategic thinking skills.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Education = () => {
  return (
    <motion.section
      id="education"
      className="text-white bg-[#121212] py-16 px-5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold">Education</h2>
        <p className="text-gray-400 text-lg mt-4">
          My educational background has laid a strong foundation for my career
          in technology.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-purple-500/30 transition-all"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-orange-500">
              {edu.degree}
            </h3>
            <p className="text-lg text-gray-300 mt-2">{edu.institution}</p>
            <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>
            <p className="text-gray-400 mt-4 text-sm">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
