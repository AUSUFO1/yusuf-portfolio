"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import {
  SiWordpress,
  SiThreedotjs,
  SiElementor,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

type Project = {
  title: string;
  description: string;
  image: string;
  stack: React.ReactNode[];
  live?: string;
};

const featuredProjects: Project[] = [
  {
    title: "OMZ Design",
    description:
      "A sleek and modern platform showcasing OMZ’s architectural expertise. The website highlights their portfolio while offering potential clients an immersive experience.",
    image: "/featured-1.jpeg",
    stack: [<SiWordpress key="wp" />, <SiElementor key="el" />],
  },
  {
    title: "Mohammed A",
    description:
      "A website built to reflect the creativity and elegance of Mohammed A’s interior design services. It serves as both a portfolio and a gateway for client engagement.",
    image: "/featured-2.jpeg",
    stack: [<SiWordpress key="wp" />, <SiElementor key="el" />],
  },
  {
    title: "Driving School",
    description:
      "A professional and user-friendly website designed to streamline the process of learning to drive, with a simple and responsive layout for students and instructors.",
    image: "/featured-3.jpeg",
    stack: [<SiWordpress key="wp" />, <SiElementor key="el" />],
  },
  {
    title: "Majeed Creative",
    description:
      "A website designed for a graphic design studio specializing in unique and impactful designs, combining a clean modern aesthetic with a fully responsive layout.",
    image: "/featured-4.jpeg",
    stack: [<SiWordpress key="wp" />, <SiElementor key="el" />],
  },
];

const projects: Project[] = [
  {
    title: "SneakerX",
    description:
      "A modern sneaker e-commerce platform focused on clean UI, responsive design, and scalable frontend architecture. Built to showcase product listings, branding, and smooth user experience for online retail.",
    image: "/sneakerx.png",
    stack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tw" />,
    ],
    live: "https://sneakerx.vercel.app/",
  },
  {
    title: "NGA Admin Dashboard",
    description:
      "An internal admin dashboard built for the National Gallery of Art (Nigeria) to manage image uploads and gallery content. Designed with usability, security, and performance in mind for non-technical staff.",
    image: "/nga-admin-dashboard.png",
    stack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tw" />,
    ],
        live: "https://virtualgallery.nga.gov.ng/admin/git",
  },
  {
    title: "NGA Virtual Gallery",
    description:
      "An immersive 3D virtual art gallery built for the National Gallery of Art, Nigeria. The platform allows visitors to explore exhibitions online with smooth interactions, responsive design, and optimized performance across devices.",
    image: "/nga-virtual-gallery.png",
    stack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tw" />,
      <SiThreedotjs key="three" />,
    ],
    live: "https://virtualgallery.nga.gov.ng/",
  },
  {
    title: "FraudInfo Platform",
    description:
      "A fraud awareness and information platform designed to educate users on fraud prevention and reporting. Built with a clean UI, structured content flow, and scalability in mind for future integrations.",
    image: "/fraudinfo-platform.png",
    stack: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tw" />,
    ],
    live: "https://fraudinfo-platform.vercel.app/",
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"featured" | "projects">("projects");

  const data = activeTab === "featured" ? featuredProjects : projects;

  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-10 text-center">
          Projects
        </h2>

        {/* CATEGORY BUTTONS */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === "projects"
                ? "bg-accent text-accent-foreground"
                : "border-border-subtle hover:border-accent"
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => setActiveTab("featured")}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === "featured"
                ? "bg-accent text-accent-foreground"
                : "border-border-subtle hover:border-accent"
            }`}
          >
            Featured Projects
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-background-card border border-border-subtle hover:border-accent transition"
            >
              {/* IMAGE */}
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-sm text-foreground-muted">
                  {project.description}
                </p>

                {/* STACK */}
                <div className="flex gap-3 text-accent text-xl">
                  {project.stack.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>

                {/* LIVE LINK */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    View Live <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
