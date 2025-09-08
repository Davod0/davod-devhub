"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Custom menu icon with spin animation */}
      <motion.button
        onClick={() => setOpen(!open)}
        animate={{ rotate: open ? 720 : 0 }} // two full spins
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="p-2 rounded-md bg-white/20 dark:bg-black/20 backdrop-blur-md hover:scale-110 transition-transform"
      >
        <Image
          src="/menu.svg"
          alt="Menu"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </motion.button>

      {/* Half-circle menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            exit={{ scale: 0, opacity: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-80 h-80 rounded-bl-full bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500 shadow-xl flex flex-col justify-center overflow-hidden"
          >
            <nav className="flex flex-col text-white font-semibold h-full justify-evenly">
              <a
                href="#about"
                className="flex items-center justify-center h-12 w-1/2 self-end border-b border-white hover:bg-white/20 transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center h-14 w-2/3 self-end border-b border-white hover:bg-white/20 transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center h-16 w-5/6 self-end hover:bg-white/20 transition"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
