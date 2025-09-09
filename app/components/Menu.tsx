"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [open]);

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.div
        initial={false}
        animate={{ scale: open ? 1.1 : 1, opacity: 0.9 }}
        transition={{ duration: 0.5 }}
        className="relative w-20 h-20 rounded-full bg-[#00ADB5]/10 backdrop-blur-md shadow-[0_0_40px_rgba(0,173,181,0.3)] flex items-center justify-center"
      >
        <motion.button
          onClick={() => setOpen(!open)}
          animate={{ rotate: open ? 1440 : -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="p-4 rounded-full hover:scale-110 transition-transform"
        >
          <Image
            src="/menu.svg"
            alt="Menu"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </motion.button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
              exit={{ scale: 0.8, opacity: 0, rotate: -180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-80 h-80 rounded-bl-[100%] bg-[#00ADB5]/10 backdrop-blur-xl shadow-[0_0_60px_rgba(0,173,181,0.4)] flex flex-col justify-center overflow-hidden"
            >
              <nav className="flex flex-col text-white font-semibold h-full justify-evenly">
                <a
                  href="#about"
                  className="flex items-center justify-center h-12 w-1/2 self-end border-b border-white/30 hover:bg-white/10 transition"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="flex items-center justify-center h-14 w-2/3 self-end border-b border-white/30 hover:bg-white/10 transition"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center h-16 w-5/6 self-end hover:bg-white/10 transition"
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
