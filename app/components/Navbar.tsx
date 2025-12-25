"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Download } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) {
    return (
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
        <div
          className="flex items-center justify-between px-5 py-3 md:px-8 md:py-4 
          bg-background-card/50 backdrop-blur-2xl 
          rounded-full border border-border-subtle/40 
          shadow-lg shadow-black/5"
        >
          {/* LOGO */}
          <Link href="/" className="whitespace-nowrap">
            <h1
              className="flex items-center gap-1 font-display
              text-2xl md:text-4xl
              text-accent transition-transform duration-300 hover:scale-105"
            >
              <span className="font-mono text-accent/70">{`<`}</span>
              <span className="font-extrabold">Yusuf&nbsp;Dev</span>
              <span className="font-mono text-accent/70">{` />`}</span>
            </h1>
          </Link>

          <div className="w-10 h-10" />
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <div
        className="flex items-center justify-between px-5 py-3 md:px-8 md:py-4
        bg-background-card/50 backdrop-blur-2xl 
        rounded-full border border-border-subtle/40 
        shadow-lg shadow-black/5"
      >
        {/* LOGO */}
        <Link href="/" className="whitespace-nowrap">
          <h1
            className="flex items-center gap-1 font-display
            text-2xl md:text-4xl
            text-accent transition-transform duration-300 hover:scale-105"
          >
            <span className="font-mono text-accent/70">{`<`}</span>
            <span className="font-extrabold">Yusuf&nbsp;Dev</span>
            <span className="font-mono text-accent/70">{` />`}</span>
          </h1>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 md:gap-6 whitespace-nowrap">
          {/* RESUME DOWNLOAD BUTTON */}
          <a
            href="/ABUBAKAR-YUSUF-CV.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 
            text-xs md:text-sm font-medium 
            text-foreground hover:text-accent 
            transition-all duration-200 
            hover:scale-105 group"
          >
            <span>My Resume</span>
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full 
              bg-background-section/50 
              hover:bg-accent/20 
              border border-border-subtle/30 
              transition-all duration-200"
            aria-label="Toggle Dark Mode"
          >
            {currentTheme === "dark" ? (
              <Sun className="w-4 h-4 text-accent" />
            ) : (
              <Moon className="w-4 h-4 text-accent" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}