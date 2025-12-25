"use client";

import { Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border-subtle">
      <div className="max-w-4xl mx-auto text-center space-y-4">

        {/* HEADER */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Reach out
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Have a project you want me to work on, a suggestion to share, or just
            want to start a conversation? I'm always open.
          </p>
        </div>

        {/* CONTACT ICONS */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {/* WhatsApp */}
          <a
            href="https://wa.me/2348137844165"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-110 transition-transform group"
            aria-label="WhatsApp"
          >
            <SiWhatsapp 
              className="w-6 h-6 group-hover:drop-shadow-lg transition-all" 
              style={{ color: "#25D366" }}
            />
            <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors">
              WhatsApp
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:oabubakar2019@gmail.com"
            className="flex items-center gap-2 hover:scale-110 transition-transform group"
            aria-label="Email"
          >
            <Mail 
              className="w-6 h-6 group-hover:drop-shadow-lg transition-all" 
              style={{ color: "#EA4335" }}
            />
            <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors">
              Email
            </span>
          </a>
        </div>

        {/* LOCATION */}
        <div className="flex justify-center items-center gap-2 text-sm text-foreground-muted">
          <MapPin className="w-4 h-4" style={{ color: "#4285F4" }} />
          <span>Nigeria</span>
        </div>
      </div>
    </footer>
  );
}