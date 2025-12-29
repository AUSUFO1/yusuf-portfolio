"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiWordpress,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiGithub,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

const STACK = [
  {
    title: "Frontend Engineering",
    tools: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & CMS",
    tools: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    ],
  },
  {
    title: "Mobile (Secondary)",
    tools: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ],
  },
  {
    title: "Databases & Tools",
    tools: [
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <span className="text-sm uppercase tracking-widest text-foreground-muted">
            Technologies & Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-accent">
            My Stack
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Frontend-focused engineer with full-stack, CMS, and system design experience.
          </p>
        </div>

        {/* STACK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STACK.map((group, i) => (
            <div
              key={i}
              className="rounded-2xl border border-accent/40
              bg-background-card/60 backdrop-blur-md p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {group.tools.map((tool, j) => {
                  const Icon = tool.icon;

                  return (
                    <div
                      key={j}
                      title={tool.name}
                      className="
                        group flex flex-col items-center gap-2 text-center
                        rounded-xl p-3
                        transition-all duration-300
                        hover:bg-accent/10
                        hover:-translate-y-1
                        cursor-default
                      "
                    >
                      <Icon
                        className="
                          w-7 h-7 text-foreground-muted
                          transition-all duration-300
                          group-hover:drop-shadow-md
                        "
                        style={{ color: tool.color }}
                      />
                      <span className="text-sm text-foreground-muted group-hover:text-foreground transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
