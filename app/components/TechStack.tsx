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
    title: "Frontend",
    tools: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend / CMS",
    tools: [
      { name: "PHP", icon: SiPhp },
      { name: "WordPress", icon: SiWordpress },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    title: "Mobile / Cross-Platform",
    tools: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "React Native", icon: SiReact },
    ],
  },
  {
    title: "Database / Tools",
    tools: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "GitHub", icon: SiGithub },
      { name: "Firebase", icon: SiFirebase },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="px-6 pb-10">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <span className="text-sm uppercase tracking-widest text-foreground-muted">
            Technologies & Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-accent">
            My Stack
          </h2>
          <p className="text-lg text-foreground-muted">
            Tools I use to design, build, and maintain scalable web solutions.
          </p>
        </div>

        {/* STACK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STACK.map((group, i) => (
            <div
              key={i}
              className="rounded-2xl border border-accent bg-background-card/60 backdrop-blur-md p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent">
                {group.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {group.tools.map((tool, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center gap-2 text-center
                    hover:scale-105 transition-transform"
                    title={tool.name}
                  >
                    <tool.icon className="w-8 h-8 text-accent" />
                    <span className="text-sm text-foreground-muted">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
