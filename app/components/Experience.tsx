"use client";

import Image from "next/image";

const EXPERIENCES = [
  {
    company: "National Gallery of Art (NGA)",
    role: "Information Service",
    duration: "JAN 2025 - DEC 2025",
    location: "Head of Service, Abuja",
    logo: "/ngalogo.png",
    responsibilities: [
      "Supported web and digital content platforms used by the gallery",
      "Assisted with website updates, content management, and branding consistency",
      "Collaborated on graphics and web-related tasks",
      "Ensured accessibility and performance across devices",
    ],
  },
  {
    company: "iWeb",
    role: "WordPress Website Manager",
    duration: "NOV 2020 - DEC 2023",
    location: "Gwagwalada, Abuja",
    logo: "/iweb.ng.png",
    responsibilities: [
      "Managed and maintained multiple WordPress websites",
      "Handled updates, security, backups, and performance optimization",
      "Published and structured web content",
      "Collaborated with writers and developers",
      "Provided technical support and site troubleshooting",
    ],
  },
];

export default function Experience() {
  return (
    <section className="px-6 py-8 md:py-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-sm uppercase tracking-widest text-foreground-muted">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-accent">
            Professional Experience
          </h2>
          <p className="text-lg text-foreground-muted">
            Building and managing web solutions across diverse platforms and industries.
          </p>
        </div>

        {/* EXPERIENCE CONTENT */}
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="flex gap-6">
              {/* Company Logo */}
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-lg bg-background-section border border-border-subtle flex items-center justify-center overflow-hidden">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Experience Details */}
              <div className="flex-1 space-y-3">
                {/* Header */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-foreground-muted text-sm mt-1">
                    {exp.duration} | {exp.location}
                  </p>
                </div>

                {/* Company Name */}
                <p className="text-lg font-semibold text-foreground">
                  {exp.company}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-accent mt-1.5 shrink-0">⚡</span>
                      <p className="text-foreground-muted leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}