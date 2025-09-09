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
              className="absolute top-0 right-0
                w-20 h-42 sm:w-30 sm:h-52 md:w-40 md:h-62 lg:w-50 lg:h-72
                rounded-bl-[10%] bg-[#00ADB5]/10 backdrop-blur-xl
                shadow-[0_0_30px_rgba(0,173,181,0.4)] flex flex-col justify-center overflow-hidden z-0"
            >
              <nav className="flex flex-col text-white font-medium sm:font-semibold h-full justify-evenly pt-13 pr-2">
                <a
                  href="#about"
                  className="flex items-center justify-center
                    h-12 w-1/2 self-end
                    text-[8px] sm:text-xs md:text-sm lg:text-base
                    border-b border-white/30
                    transition-transform transition-colors hover:text-[#00ADB5] hover:scale-105"
                >
                 Contact
                </a>
                <a
                  href="#projects"
                  className="flex items-center justify-center
                    h-14 w-2/3 self-end
                    text-[8px] sm:text-xs md:text-sm lg:text-base
                    border-b border-white/30
                    transition-transform transition-colors hover:text-[#00ADB5] hover:scale-105"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center
                    h-16 w-5/6 self-end
                    text-[8px] sm:text-xs md:text-sm lg:text-base
                    transition-transform transition-colors hover:text-[#00ADB5] hover:scale-105"
                >
                  About Me
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
            src="./svg/menu.svg"
            alt="Menu"
            width={40}
            height={40}
            className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10
              transition-transform hover:scale-110 invert m-3"
          />
        </motion.button>
      </div>
    );
  }
