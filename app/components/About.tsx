"use client";

export default function About() {
  return (
    <section className="px-6 mt-5 py-4 md:py-5 md:px-12 lg:px-16">
      <div className="space-y-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-sm uppercase tracking-widest text-foreground-muted">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-accent">
            A bit about me
          </h2>
          <p className="text-lg text-foreground-muted">
            Who I am, what I do, and how I think about building the web.
          </p>
        </div>

        {/* ABOUT CONTENT CARD */}
        <div>
          <div className="rounded-2xl border bg-background-card/60 backdrop-blur-md p-8 md:p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-foreground-muted">
              I am a frontend-focused web developer with hands-on experience
              building, managing, and maintaining real-world websites and
              digital platforms. I have worked as a <strong>Web Administrator</strong> and
              <strong> WordPress Website 
                Manager</strong> at iWeb, ensuring performance,
              security, and content accuracy across multiple sites.
              <br /><br />
              I build web designs following the <strong>K.I.S.S. (Keep It Stupid Simple)</strong> principle,
              prioritizing clarity and simplicity for the best user experience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}