"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-black text-green-500 py-4 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-green-400">NehalDev</h1>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-lg hover:text-green-400 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="text-lg hover:text-green-400 transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="#projects" className="text-lg hover:text-green-400 transition-colors duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-lg hover:text-green-400 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}
