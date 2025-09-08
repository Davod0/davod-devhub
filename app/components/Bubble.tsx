"use client";
import { forwardRef, HTMLAttributes } from "react";

interface BubbleProps extends HTMLAttributes<HTMLDivElement> {
  sizeClass: string;
  gradient: string;
  opacity?: string;
  zIndex?: string;
}

const Bubble = forwardRef<HTMLDivElement, BubbleProps>(
  ({ sizeClass, gradient, opacity = "opacity-50", zIndex = "z-40", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`fixed top-0 left-0 pointer-events-none ${zIndex}
        ${sizeClass} rounded-full ${gradient} ${opacity} shadow-md`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
        {...props}
      />
    );
  }
);

Bubble.displayName = "Bubble";

export default Bubble;
