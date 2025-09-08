"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const mainBubbleRef = useRef<HTMLDivElement>(null);
  const smallBubblesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
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
            bubble.style.transform = `translate3d(${last.x + size / 2 - 10 + i * 6}px, ${
              last.y + size / 2 - 10 + i * 6
            }px, 0) scale(1)`;
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
    <main className="relative flex flex-col min-h-screen items-center justify-center bg-gradient-to-tr from-indigo-100 via-teal-50 to-purple-100 dark:from-indigo-950 dark:via-gray-900 dark:to-purple-900 text-gray-900 dark:text-white px-6 transition-colors duration-700">
      {/* Main bubble */}
      <div
        ref={mainBubbleRef}
        className="
          fixed top-0 left-0 pointer-events-none z-50
          w-20 h-20
          rounded-full
          bg-gradient-to-tr from-indigo-400 via-teal-300 to-purple-400
          opacity-40
          shadow-xl
          transition-transform duration-150 ease-out
        "
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Smaller trailing bubbles */}
      {bubbleSizes.map((size, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) smallBubblesRef.current[i] = el;
          }}
          className={`
            fixed top-0 left-0 pointer-events-none z-40
            ${size}
            rounded-full
            bg-gradient-to-tr from-indigo-300 via-teal-200 to-purple-300
            opacity-30
            shadow-md
          `}
          style={{ transform: "translate3d(-100px, -100px, 0)" }}
        />
      ))}

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="blur-[100px] opacity-60 m-auto w-2/3 h-2/3 bg-gradient-to-tr from-indigo-400 via-teal-900 to-purple-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg">
        <div className="w-52 h-59 rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-indigo-100 dark:border-indigo-900">
          <Image
            src="/davod.png"
            alt="Portfolio picture"
            width={208}
            height={208}
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold mb-4 text-center tracking-tight">
          Hi, I am <span className="text-indigo-500 dark:text-indigo-400">Davod</span>
        </h1>
        <p className="max-w-xl text-lg text-center mb-10 font-medium text-gray-600 dark:text-gray-300">
          Full stack web developer crafting clean, scalable and performant applications
        </p>
        <div className="flex gap-4">
          <a
            href="./projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 text-white shadow-md shadow-indigo-100 dark:shadow-indigo-900 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold text-base"
          >
            View Projects
          </a>
          <a
            href="./contact"
            className="px-6 py-3 rounded-full border-2 border-indigo-400 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all duration-300 font-semibold text-base shadow-md shadow-indigo-100 dark:shadow-indigo-900"
          >
            Contact Me
          </a>
        </div>
        <footer className="mt-16 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Davod Nikoyi. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
