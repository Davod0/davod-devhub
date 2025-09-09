"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Menu from "./components/Menu";
import Bubble from "./components/Bubble";
import { TypingLoop } from "./components/TypingLoop";
import { TitleTyper } from "./components/TitleTyper";

export default function Home() {
  const mainBubbleRef = useRef<HTMLDivElement>(null);
  const smallBubblesRef = useRef<HTMLDivElement[]>([]);
  const [titleDone, setTitleDone] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const positions: { x: number; y: number }[] = [];
    const trailSpacing = 3;
    const size = 100;
    let lastMove = Date.now();

    const moveBubble = (e: MouseEvent) => {
      lastMove = Date.now();
      positions.push({ x: e.clientX - size / 2, y: e.clientY - size / 2 });
      if (positions.length > 200) positions.shift();

      if (mainBubbleRef.current) {
        mainBubbleRef.current.style.transform = `translate3d(${e.clientX - size / 2}px, ${
          e.clientY - size / 2
        }px, 0)`;
      }
    };

    const animate = () => {
      const now = Date.now();
      const last = positions[positions.length - 1];
      if (!last) {
        requestAnimationFrame(animate);
        return;
      }

      if (now - lastMove < 100) {
        smallBubblesRef.current.forEach((bubble, i) => {
          const index = positions.length - 1 - trailSpacing * (i + 1);
          if (bubble && index >= 0) {
            const pos = positions[index];
            bubble.style.transition = "transform 0.15s ease";
            bubble.style.transform = `translate3d(${pos.x + size / 2 - 6}px, ${
              pos.y + size / 2 - 6
            }px, 0) scale(1)`;
            bubble.style.opacity = "0.5";
          }
        });
      } else {
        smallBubblesRef.current.forEach((bubble, i) => {
          if (bubble) {
            bubble.style.transition = "transform 0.9s ease";
            bubble.style.transform = `translate3d(${
              last.x + size / 2 - 10 + i * 6
            }px, ${last.y + size / 2 - 10 + i * 6}px, 0) scale(1)`;
            bubble.style.opacity = "0.5";
          }
        });
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveBubble);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveBubble);
    };
  }, []);

  const bubbleSizes = ["w-6 h-6", "w-5 h-5", "w-4 h-4", "w-3 h-3"];

  return (
    <main
      className="relative flex flex-col min-h-screen items-center justify-center
      bg-[#222831] text-[#00ADB5] px-6 transition-colors duration-700 overflow-hidden"
    >
      <Menu />
      <div className="hidden md:block">
        <Bubble
          ref={mainBubbleRef}
          sizeClass="w-20 h-20"
          gradient="bg-gradient-to-tr from-cyan-400 via-teal-400 to-blue-500"
          opacity="opacity-30"
          zIndex="z-50"
        />
      </div>
      <div className="hidden md:block">
        {bubbleSizes.map((size, i) => (
          <Bubble
            key={i}
            ref={(el) => {
              if (el) smallBubblesRef.current[i] = el;
            }}
            sizeClass={size}
            gradient="bg-gradient-to-tr from-cyan-300 via-teal-300 to-blue-400"
            opacity="opacity-20"
            zIndex="z-40"
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg">
        <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-52 md:h-60 rounded-full overflow-hidden shadow-xl mb-8 border-4 border-white">
          <Image
            src="/davod.png"
            alt="Portfolio picture"
            width={208}
            height={208}
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>

        <h1 className="text-center tracking-tight leading-tight text-white mb-4">
          <TitleTyper text="Hi, I’m Davod" typingSpeed={120} onComplete={() => setTitleDone(true)} />
        </h1>
        {titleDone && (
          <p>
            <TypingLoop
              lines={[
                "Welcome to my portfolio",
                "I am a system developer",
                "I am also a full-stack web developer",
              ]}
              typingSpeed={80}
              pauseAfter={2000}
            />
          </p>
        )}

        <p className="max-w-xl  text:medium sm:text-lg md:text-xl
           lg:text-2xl  text-center mb-10 font-medium leading-relaxed">
          I&apos;m a systems developer with a passion for building efficient backend solutions.
          I&apos;m also a full-stack web developer who enjoys creating clean, responsive and scalable web and mobile applications
        </p>
        <div className="flex gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 hover:rotate-3 transition-transform duration-300"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://github.com/Davod0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 hover:-rotate-3 transition-transform duration-300"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={32}
              height={32}
              className="w-8 h-8 invert"
            />
          </a>
        </div>
        <footer className="mt-20 text-xs text-[#00ADB5] tracking-wide">
          © {new Date().getFullYear()} Davod Nikoyi. Crafted with care.
        </footer>
      </div>
    </main>
  );
}
