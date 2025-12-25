"use client";

import Image from "next/image";

const EXPERIENCES = [
  {
    company: "National Gallery of Art (NGA)",
    role: "Web Developer / Front-End Support Engineer",
    duration: "JAN 2025 - DEC 2025",
    location: "Abuja",
    logo: "/ngalogo.png",
    responsibilities: [
      "Supported and enhanced web and digital platforms used by the national cultural institution, contributing to public-facing and internal web solutions.",
      "Assisted in developing and maintaining the NGA Virtual Gallery, ensuring responsive layouts, consistent branding, and smooth user interactions across devices.",
      "Implemented content updates and UI improvements in collaboration with design and communications teams to maintain accuracy and visual consistency.",
      "Ensured cross-browser compatibility, accessibility, and performance optimization for all supported web pages.",
      "Collaborated with team members on web-related tasks, debugging frontend issues and supporting deployment and content workflows.",
    ],
  },
  {
    company: "IWeb.ng",
    role: "Web Developer / WordPress Website Manager",
    duration: "NOV 2020 - DEC 2023",
    location: "Gwagwalada, Abuja",
    logo: "/iweb.ng.png",
    responsibilities: [
      "Built, optimized, and maintained 10+ production websites using WordPress, HTML, CSS, and JavaScript, ensuring 99.9% uptime and reliable performance across devices.",
      "Implemented front-end optimizations (asset optimization, caching strategies, responsive layouts) that improved page load speed and overall user experience.",
      "Collaborated with stakeholders to execute SEO-focused content updates, contributing to a 20% increase in organic traffic across managed platforms.",
      "Customized WordPress themes and integrated plugins to deliver scalable, business-aligned features while maintaining clean and maintainable codebases.",
      "Worked closely with site administrators and content teams to enforce security best practices, performing regular updates and audits that reduced security risks by ~30%.",
      "Provided technical support and guidance to 13+ content contributors, resolving frontend and CMS-related issues and improving publishing efficiency.",
      "Managed hosting environments and performed database optimization (MySQL) to ensure stable and efficient site operations.",
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
                  <p className="text-lg font-semibold text-accent mt-1">
                    {exp.company}
                  </p>
                  <p className="text-foreground-muted text-sm mt-1">
                    {exp.duration} | {exp.location}
                  </p>
                </div>

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