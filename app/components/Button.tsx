"use client";
import { useRouter } from 'next/navigation';

interface ButtonProps {
    title ?: string;
    onClick ?: () => void;
    route ?: string;
}

export default function Button({ title, onClick, route }: ButtonProps) {
    const router = useRouter();
  return (
    <button
        onClick={() => {
        if (onClick) onClick();
        else if (route) router.push(route);
      }}
      className="px-6 py-3 rounded-full bg-[#00ADB5] text-[#222831] shadow-lg hover:bg-[#00cfd6] hover:scale-105 transition-all duration-300 font-semibold text-base tracking-wide cursor-pointer"
      >
        {title ? title : ""}
    </button>
  );
}