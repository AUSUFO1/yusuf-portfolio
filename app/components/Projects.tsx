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

type TechStack = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

const techStackMap: Record<string, TechStack> = {
  nextjs: { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  typescript: { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  tailwind: { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  threejs: { name: "Three.js", icon: <SiThreedotjs />, color: "#000000" },
  wordpress: { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
  elementor: { name: "Elementor", icon: <SiElementor />, color: "#92003B" },
};

type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  live?: string;
  featured?: boolean;
};

const allProjects: Project[] = [
  {
    title: "SneakerX",
    description: "A modern sneaker e-commerce platform with clean UI, responsive design, and scalable architecture.",
    image: "/sneakerx.png",
    stack: ["nextjs", "typescript", "tailwind"],
    live: "https://sneakerx-fr3l.vercel.app/",
  },
  {
    title: "NGA Admin Dashboard",
    description: "Internal admin dashboard for National Gallery of Art (Nigeria) to manage uploads and gallery content.",
    image: "/nga-admin-dashboard.png",
    stack: ["nextjs", "typescript", "tailwind"],
    live: "https://virtualgallery.nga.gov.ng/admin/login",
  },
  {
    title: "NGA Virtual Gallery",
    description: "Immersive 3D virtual art gallery built for the National Gallery of Art, Nigeria.",
    image: "/nga-virtual-gallery.png",
    stack: ["nextjs", "typescript", "tailwind", "threejs"],
    live: "https://virtualgallery.nga.gov.ng/",
  },
  {
    title: "FraudInfo Platform",
    description: "Fraud awareness platform designed to educate users on fraud prevention and reporting.",
    image: "/fraudinfo-platform.png",
    stack: ["nextjs", "typescript", "tailwind"],
    live: "https://fraudinfo-platform.vercel.app/",
  },
  {
    title: "OMZ Design",
    description: "Sleek platform showcasing OMZ's architectural expertise with an immersive portfolio experience.",
    image: "/featured-1.jpeg",
    stack: ["wordpress", "elementor"],
    featured: true,
  },
  {
    title: "Mohammed A",
    description: "Portfolio reflecting creativity and elegance of interior design services for client engagement.",
    image: "/featured-2.jpeg",
    stack: ["wordpress", "elementor"],
    featured: true,
  },
  {
    title: "Driving School",
    description: "Professional website streamlining the learning process with responsive layout for students.",
    image: "/featured-3.jpeg",
    stack: ["wordpress", "elementor"],
    featured: true,
  },
  {
    title: "Majeed Creative",
    description: "Graphic design studio website combining clean aesthetics with fully responsive layout.",
    image: "/featured-4.jpeg",
    stack: ["wordpress", "elementor"],
    featured: true,
  },
];

const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden border border-accent/40 bg-background-card/60 backdrop-blur-md animate-pulse">
    <div className="aspect-video bg-accent/5" />
    <div className="p-6 space-y-4">
      <div className="h-6 rounded w-3/4 bg-accent/10" />
      <div className="space-y-2">
        <div className="h-4 rounded bg-accent/10" />
        <div className="h-4 rounded w-5/6 bg-accent/10" />
      </div>
      <div className="flex gap-3">
        <div className="h-6 w-6 rounded bg-accent/10" />
        <div className="h-6 w-6 rounded bg-accent/10" />
        <div className="h-6 w-6 rounded bg-accent/10" />
      </div>
    </div>
  </div>
);

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "featured">("all");
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({});
  const [loading, setLoading] = useState(false);

  const filteredProjects = activeTab === "featured" 
    ? allProjects.filter(p => p.featured)
    : allProjects.filter(p => !p.featured);

  const handleTabChange = (tab: "all" | "featured") => {
    setLoading(true);
    setActiveTab(tab);
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <section className="px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <span className="text-sm uppercase tracking-widest text-foreground-muted">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
            Featured Work
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Crafting digital experiences that blend innovation with purpose
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleTabChange("all")}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-300
              ${activeTab === "all"
                ? "bg-accent text-background shadow-lg shadow-accent/20 scale-105"
                : "bg-background-card/60 backdrop-blur-md border border-accent/40 text-foreground-muted hover:text-accent hover:border-accent/60 hover:bg-accent/5"
              }
            `}
          >
            All Projects
          </button>

          <button
            onClick={() => handleTabChange("featured")}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-300
              ${activeTab === "featured"
                ? "bg-accent text-background shadow-lg shadow-accent/20 scale-105"
                : "bg-background-card/60 backdrop-blur-md border border-accent/40 text-foreground-muted hover:text-accent hover:border-accent/60 hover:bg-accent/5"
              }
            `}
          >
            WordPress Sites
          </button>
        </div>

        {/* PROJECTS GRID */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="
                  group relative rounded-2xl overflow-hidden 
                  border border-accent/40 bg-background-card/60 backdrop-blur-md
                  transition-all duration-500 
                  hover:border-accent hover:shadow-2xl hover:shadow-accent/10 
                  hover:-translate-y-2 hover:bg-background-card/80
                "
              >
                {/* IMAGE CONTAINER */}
                <div className="relative aspect-video overflow-hidden bg-accent/5">
                  {!imageLoadStates[index] && (
                    <div className="absolute inset-0 animate-pulse bg-accent/10" />
                  )}
                  
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className={`
                      object-cover transition-all duration-700 
                      ${imageLoadStates[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
                      group-hover:scale-110
                    `}
                    onLoad={() => setImageLoadStates(prev => ({ ...prev, [index]: true }))}
                  />
                  
                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-foreground-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex gap-3 text-xl pt-2">
                    {project.stack.map((tech) => {
                      const techInfo = techStackMap[tech];
                      return (
                        <span
                          key={tech}
                          className="hover:scale-125 transition-transform duration-200 cursor-pointer hover:drop-shadow-md"
                          title={techInfo.name}
                          style={{ color: techInfo.color }}
                        >
                          {techInfo.icon}
                        </span>
                      );
                    })}
                  </div>

                  {/* LIVE DEMO LINK */}
                  {project.live && (
                    <div className="pt-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2 
                          px-5 py-2.5 
                          bg-accent text-background 
                          text-sm font-medium rounded-lg 
                          transition-all duration-300 
                          hover:shadow-lg hover:shadow-accent/30
                          hover:scale-105
                          active:scale-95
                        "
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}