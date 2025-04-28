import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen  py-16 px-8"
    >
      {/* Contact Title */}
      <motion.h2
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center text-white mb-8"
      >
        Get In Touch
      </motion.h2>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto  p-8 rounded-lg shadow-lg">
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          {/* Name Input */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label
              htmlFor="name"
              className="block text-lg font-secondary text-orange-600 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <label
              htmlFor="email"
              className="block text-lg font-secondary text-orange-600 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label
              htmlFor="message"
              className="block text-lg font-secondary text-orange-600 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your message"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            type="submit"
            className="w-full py-2 px-4 bg-orange-600 text-white font-secondary rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
