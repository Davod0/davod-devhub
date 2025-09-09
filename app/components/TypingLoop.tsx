import { useEffect, useState } from "react";

interface TypingLoopProps {
  lines: string[];
  typingSpeed?: number;
  pauseAfter?: number;
}

export function TypingLoop({ lines, typingSpeed = 100, pauseAfter = 1500 }: TypingLoopProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentLine.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfter);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % lines.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, lines, typingSpeed, pauseAfter]);

  return (
  <span
    className="inline-block text:medium sm:text-lg md:text-xl lg:text-2xl text-center mb-5 font-medium leading-relaxed"
    style={{ minWidth: `${Math.max(...lines.map(l => l.length))}ch` }}
  >
    {displayedText}
  </span>
);
}
