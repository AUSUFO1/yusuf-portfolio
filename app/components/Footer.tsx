"use client";

import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SiWhatsapp, SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-5 px-6 overflow-hidden">
      
      <div className="relative max-w-6xl mx-auto space-y-8">

        {/* MAIN CTA SECTION */}
        <div className="text-center space-y-4">
          <div className="inline-block">
            <span className="text-sm uppercase tracking-widest text-foreground-muted">
              Let's Connect
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">
            Build Something Great Together!
          </h3>
          
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat about web development? 
            I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        {/* PRIMARY CONTACT BUTTONS */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a
            href="mailto:oabubakar2019@gmail.com"
            className="
              group relative px-6 py-3
              bg-accent text-background 
              rounded-full font-medium text-sm
              transition-all duration-300 
              hover:shadow-lg hover:shadow-accent/30
              hover:scale-105 active:scale-95
              flex items-center gap-2
            "
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="https://wa.me/2348137844165"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group px-6 py-3
              bg-background-card/60 backdrop-blur-md 
              border border-accent/40
              text-foreground
              rounded-full font-medium text-sm
              transition-all duration-300 
              hover:border-accent hover:bg-accent/5
              hover:scale-105 active:scale-95
              flex items-center gap-2
            "
          >
            <SiWhatsapp className="w-4 h-4" style={{ color: "#25D366" }} />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* DIVIDER */}
        <div className="w-20 h-px bg-accent/30 mx-auto" />

        {/* SOCIAL LINKS */}
        <div className="flex justify-center items-center gap-5 flex-wrap">
          <a
            href="https://github.com/AUSUFO1"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center gap-2 
              text-foreground-muted hover:text-accent
              transition-all duration-300
              hover:scale-110
            "
            aria-label="GitHub"
          >
            <SiGithub 
              className="w-5 h-5 group-hover:drop-shadow-lg transition-all" 
              style={{ color: "#181717" }}
            />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/abubakar-yusuf-0a6453239"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center gap-2 
              text-foreground-muted hover:text-accent
              transition-all duration-300
              hover:scale-110
            "
            aria-label="LinkedIn"
          >
            <SiLinkedin 
              className="w-5 h-5 group-hover:drop-shadow-lg transition-all" 
              style={{ color: "#0A66C2" }}
            />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>

        {/* BOTTOM INFO */}
        <div className="pt-4 space-y-3">
          {/* LOCATION */}
          <div className="flex justify-center items-center gap-2 text-sm text-foreground-muted">
            <MapPin className="w-4 h-4" style={{ color: "#4285F4" }} />
            <span>Based in Nigeria</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Available for work" />
          </div>

          {/* COPYRIGHT */}
          <div className="text-center text-sm text-foreground-muted">
            <p>
              © {currentYear} <span className="text-accent font-medium">Yusuf</span>. 
              Crafted with care and lots of coffee ☕
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}