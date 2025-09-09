"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            exit={{ scale: 0.8, opacity: 0, rotate: -180 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-50 h-70 rounded-bl-[10%] bg-[#00ADB5]/10 backdrop-blur-xl
            shadow-[0_0_30px_rgba(0,173,181,0.4)] flex flex-col justify-center overflow-hidden z-0"
          >
            <nav className="flex flex-col text-white font-semibold h-full justify-evenly pt-15">
              <a
                href="#about"
                className="flex items-center justify-center h-12 w-1/2 self-end text-sm
                 border-b border-white/30 transition-transform transition-colors hover:text-[#00ADB5] hover:scale-105"
              >
                About me
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center h-14 w-2/3 self-end text-sm
                 border-b border-white/30 transition-transform transition-colors hover:text-[#00ADB5] hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center h-16 w-5/6 self-end text-sm
                 transition-transform transition-colors hover:text-[#00ADB5] hover:scale-105"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!open)}
        animate={{ rotate: open ? 720 : -360 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="cursor-pointer z-10 relative group"
      >
      <Image
        src="/menu.svg"
        alt="Menu"
        width={40}
        height={40}
        className="w-10 h-10 transition-transform hover:scale-110 invert m-3"
      />
      </motion.button>
    </div>
  );
}
