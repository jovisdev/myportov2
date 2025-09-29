"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Buttons from "../button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Buttons
        onClick={() => setTheme("light")}
        type="simple"
        className={`${
          theme === "light" ? " border-3" : "border"
        }`}
      >
        ☀️ Light
      </Buttons>

      <Buttons
        onClick={() => setTheme("dark")}
        type="simple"
        className={`${
          theme === "dark" ? " border-3" : "border"
        }`}
      >
        🌙 Dark
      </Buttons>
    </div>
  );
}

