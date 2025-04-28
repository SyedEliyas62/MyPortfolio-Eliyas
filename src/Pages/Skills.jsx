import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaPython } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiCplusplus, SiJavascript } from "react-icons/si";

// Animation Variants for the whole container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

// Animation Variants for each skill card
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } },
};

// Skill Card Component with animation
const SkillCard = ({ icon, name }) => (
  <motion.div
    variants={cardVariants}
    className="flex items-center gap-3 px-6 py-3 bg-gray-800 rounded-xl border border-gray-700 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/30 transition-all"
  >
    {icon}
    <span className="text-white font-medium">{name}</span>
  </motion.div>
);

// Skills data
const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-3xl" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-3xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400 text-3xl" /> },
    ],
  },
  {
    title: "Programming Language",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
      { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-3xl" /> },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
      { name: "VsCode", icon: <VscVscode className="text-white text-3xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">Skills</h2>
          <p className="text-gray-400 text-lg mt-4">
            These are the technologies I've mastered so far in my journey as a developer. I'm always excited to learn new tools and grow my skill set to build more impactful projects.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {skillsData.map((section, idx) => (
            <motion.div
              key={idx}
              className="border-2 border-gray-700 rounded-lg p-6"
              variants={containerVariants}
            >
              <h3 className="text-2xl font-semibold text-center text-orange-500 mb-8">
                {section.title}
              </h3>
              <motion.div
                className="flex flex-wrap justify-center gap-6"
                variants={containerVariants}
              >
                {section.skills.map((skill, index) => (
                  <SkillCard key={index} icon={skill.icon} name={skill.name} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
