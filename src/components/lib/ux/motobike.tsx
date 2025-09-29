"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function MotoBike() {
  const [isSpeed, setIsSpeed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // keyboard control
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        speed();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const speed = () => {
    if (isSpeed) return;
    setIsSpeed(true);
    setTimeout(() => setIsSpeed(false), 600);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="relative h-40 w-full overflow-hidden border-b-4 ">
        {/* bike */}
        <div
          className={`absolute -bottom-3 left-10 text-6xl transition-transform duration-300 ${
            isSpeed ? "translate-x-5 -rotate-6" : "translate-x-0 rotate-0 scale-100"
          }`}
        >
          <Image src="/assets/images/moto.png" alt="moto" width={80} height={80}/>
        </div>

        {/* Cactus */}
        <div className={`absolute bottom-0 right-0 text-5xl transition-transform ${isSpeed ? "animate-[cactus-move_0.5s_linear_infinite]" : "animate-[cactus-move_1s_linear_infinite]"}`}>
          🌵
        </div>

        {/* bird */}
        <div className={`absolute top-10 right-0 text-5xl transition-transform ${isSpeed ? "animate-[bird-move_0.5s_linear_infinite]" : "animate-[bird-move_2s_linear_infinite]"}`}>
          🦅
        </div>

        {/* sun */}
        <div
          className={`absolute top-0 right-0 text-5xl transition-transform ${
            isSpeed
              ? "animate-[sun-move_38s_linear_infinite]"
              : "animate-[sun-move_40s_linear_infinite]"
          }`}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </div>

        {/* cloud */}
        <div className={`absolute top-3 right-0 text-5xl transition-transform ${isSpeed ? "animate-[cloud-move_20s_linear_infinite]" : "animate-[cloud-move_25s_linear_infinite]"}`}>
          ☁️
        </div>
      </div>

      {/* <button
        onClick={jump}
        className="mt-8 rounded-lg border px-3 py-1 hidden md:block"
      >
        Jump
      </button> */}

      <style jsx>{`
        @keyframes cactus-move {
          from {
            right: -50px;
          }
          to {
            right: 100%;
          }
        }

        @keyframes bird-move {
          from {
            right: -50px;
          }
          to {
            right: 100%;
          }
        }

        @keyframes sun-move {
          from {
            right: -50px;
          }
          to {
            right: 100%;
          }
        }

        @keyframes cloud-move {
          from {
            right: -50px;
          }
          to {
            right: 100%;
          }
        }
      `}</style>
    </section>
  );
}
