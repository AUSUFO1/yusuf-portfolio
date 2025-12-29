"use client";

import { useState, useEffect } from "react";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiWordpress,
  SiPhp,
  SiTailwindcss,
  SiMongodb,
  SiFlutter,
} from "react-icons/si";

const TITLES = ["Frontend Engineer", "Web Developer"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    const current = TITLES[titleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTitleIndex((i) => (i + 1) % TITLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width >= 1024) setRadius(200);
      else if (width >= 768) setRadius(150);
      else if (width >= 640) setRadius(120);
      else setRadius(95);
    };

    // Update immediately on mount
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const outerTech = [
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: SiNextdotjs, color: "#000000" },
    { Icon: SiTailwindcss, color: "#06B6D4" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiNodedotjs, color: "#339933" },
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiWordpress, color: "#21759B" },
    { Icon: SiPhp, color: "#777BB4" },
    { Icon: SiFlutter, color: "#02569B" },
  ];

  const socialLinks = [
    {
      Icon: SiGmail,
      color: "#EA4335",
      label: "Email",
      href: "mailto:oabubakar2019@gmail.com",
    },
    {
      Icon: SiGithub,
      color: "#181717",
      label: "GitHub",
      href: "https://github.com/AUSUFO1/",
    },
    {
      Icon: SiLinkedin,
      color: "#0A66C2",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abubakar-yusuf-0a6453239",
    },
  ];

  return (
    <section className="px-6 pt-28 pb-8 md:pt-32 lg:min-h-screen lg:flex lg:items-center lg:justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* LEFT */}
        <div className="space-y-8 text-center md:text-left flex flex-col justify-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I am Yusuf
            </h1>

            <div className="relative mt-2">
              {/* Invisible text to reserve space */}
              <h2 
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent select-none pointer-events-none"
                aria-hidden="true"
              >
                Frontend Engineer
              </h2>
              
              {/* Actual typing animation */}
              <h2 className="absolute top-0 left-0 right-0 text-2xl md:text-4xl lg:text-5xl font-bold text-accent text-center md:text-left">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          <p className=" text-lg md:text-xl 
              text-foreground-muted 
              leading-relaxed 
              md:leading-loose
              max-w-2xl 
              mx-auto md:mx-0
              text-left md:text-justify">
            A performance-oriented software engineer specializing in Frontend & Web
            development, delivering top-notch, user-focused solutions within
            agile frameworks.
          </p>

          <div className="flex gap-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:scale-110 transition-transform"
              >
                <social.Icon
                  className="w-10 h-10 lg:h-15 lg:w-15"
                  style={{ color: social.color }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center">
          <div className="relative w-55 h-55 sm:w-70 sm:h-70 md:w-90 md:h-90 lg:w-125 lg:h-125">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
                style={{
                  background: "linear-gradient(to bottom, #ffffff, #000000)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tech Stack
              </h3>
            </div>

            <div 
              className="absolute inset-0 animate-[spin_30s_linear_infinite] transition-transform duration-300"
            >
              {outerTech.map((tech, i) => {
                const angle = (i * 360) / outerTech.length;

                return (
                  <div
                    key={i}
                    className="absolute transition-transform duration-300"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-background-card border flex items-center justify-center shadow-lg">
                      <div className="animate-[spin_30s_linear_infinite_reverse]">
                        <tech.Icon
                          className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                          style={{ color: tech.color }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}