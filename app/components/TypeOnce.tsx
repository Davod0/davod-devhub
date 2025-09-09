"use client";
import { useState, useEffect } from "react";

interface TypeOnceProps {
  text: string;
  typingSpeed?: number;
  onComplete?: () => void;
}

export function TypeOnce({ text = "", typingSpeed = 100, onComplete }: TypeOnceProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text || index >= text.length) return;

    const t = setTimeout(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((i) => i + 1);
    }, typingSpeed);

    return () => clearTimeout(t);
  }, [index, text, typingSpeed]);

  useEffect(() => {
    if (index === text.length && onComplete) {
      onComplete();
    }
  }, [index, text.length, onComplete]);

  return <span>{displayedText}</span>;
}
