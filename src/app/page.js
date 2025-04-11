"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js"; // Import Typed.js
import { ProfileImage } from "../../public";

export default function Home() {
  const [currentText, setCurrentText] = useState("I am a Developer");
  const typedTextRef = useRef(null);
  useEffect(() => {
    const blob = document.getElementById("cursor-blob");
  
    const moveBlob = (e) => {
      blob.animate(
        {
          transform: `translate(${e.clientX}px, ${e.clientY}px)`,
        },
        {
          duration: 300,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    };
  
    window.addEventListener("mousemove", moveBlob);
    return () => window.removeEventListener("mousemove", moveBlob);
  }, []);
  
  
  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const options = {
      strings: ["I am a Next.js Developer", "I am a React.js Developer", "I am a Web Designer"],
      typeSpeed: 100,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    // Cleanup Typed.js when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div id="cursor-blob" className="cursor-blob" />
    <main className="min-h-screen bg-black text-green-500 px-4 py-10 font-mono overflow-x-hidden">
      <Header />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Image with green glow */}
        <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_20px_4px_#22c55e] mb-6">
          <Image
            src={ProfileImage} // Update this path if needed
            alt="Nehal Ahmed Qureshi"
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
          <h1 className="text-6xl font-extrabold mb-4 text-green-400 border-b-4 border-green-400">
            Hi, I'm Nehal 👨‍💻
          </h1>

          {/* Typing Effect Text */}
          <div
            ref={typedTextRef}
            className="typed-text-output text-2xl text-green-200"
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 animate-bounce"
        >
          <span className="text-3xl">⬇️</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-400">About Me</h2>
          <p className="text-lg text-green-200">
            I'm a web & app developer with a passion for building clean and
            interactive UIs. I specialize in React, Next.js, and Firebase.
            Currently working at Invention and Innovation.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black bg-opacity-60 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-10 text-center text-green-500"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {["MajikGift", "WhatsApp Clone", "Wizdaa Admin Dashboard"].map(
              (project, i) => (
                <motion.div
                  key={project}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-transparent border-2 border-green-600 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-green-400"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-green-300">
                    {project}
                  </h3>
                  <p className="text-green-100">
                    {project === "MajikGift"
                      ? "An e-commerce gifting platform built with Next.js and Firebase."
                      : project === "WhatsApp Clone"
                      ? "A chat app inspired by WhatsApp built using React and Firebase."
                      :''
                      }
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className="py-20 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-green-400"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-green-200"
        >
          Let's connect! Email me at{" "}
          <a
            href="mailto:nehal@example.com"
            className="underline text-green-400 hover:text-white"
          >
            nehal@example.com
          </a>
        </motion.p>
      </section>
    </main>
        </>

  );
}
