"use client";
import { useState } from "react";
import Link from "next/link";

const skills = [
  {
    label: "Languages",
    color: "#1b5a89",
    items: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "C++", icon: "/icons/cpp.svg" },
      { name: "Swift", icon: "/icons/swift.png" },
      { name: "Go", icon: "/icons/go.png" }, 
    ],
  },
  {
    label: "Frameworks & Libraries",
    color: "#38761d",
    items: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.jpeg" },
      { name: "Node.js", icon: "/icons/nodejs.png" },
      { name: "Flask", icon: "/icons/flask.png" },
      { name: "Express", icon: "/icons/express.png" },
      { name: "LangChain", icon: "/icons/langchain.png" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
    ],
  },
  {
    label: "Tools & Technologies",
    color: "#cc0000",
    items: [
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "PostgreSQL", icon: "/icons/postgres.png" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Supabase", icon: "/icons/supabase.jpg" },
      { name: "Prisma", icon: "/icons/prisma.jpg" },
      { name: "Prometheus", icon: "/icons/prom.png" }, 
      { name: "Grafana", icon: "/icons/grafana.jpeg" }, 
    ],
  },
];

function SkillRow({ label, color, items }: { label: string; color: string; items: { name: string; icon: string | null }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left hover:opacity-60 transition-opacity"
      >
        <div className="flex items-center gap-3">
          <span
            className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
            style={{ backgroundColor: color }}
          />
          <span className="font-display font-bold text-sm tracking-widest uppercase">
            {label}
          </span>
        </div>
        <div className="flex items-center gap-3 text-muted">
          <span className="text-xs">{items.length} Skills</span>
          <span className="text-base leading-none font-light">{open ? "−" : "+"}</span>
        </div>
      </button>
      {open && (
        <div className="flex flex-wrap gap-2 pb-5">
          {items.map((skill) => (
            <span
              key={skill.name}
              className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-full text-sm bg-white text-[#0F172A]"
            >
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-4 h-4 object-contain"
                />
              )}
              {skill.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="pt-4 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 items-start">
        <div>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-muted mb-5">
            Portfolio · 2026
          </p>
          <h1 className="font-display font-extrabold text-[80px] leading-[0.9] tracking-tight mb-6 text-[#0F172A]">
            Affiq<br />Mohammed
          </h1>
          <p className="text-muted text-base mb-10">
            Computer Science · UT Dallas · May 2026
          </p>
          

          {/* Featured Project Replaces the Terminal */}
          <div className="max-w-[420px] border border-border rounded-xl bg-white overflow-hidden hover:shadow-sm transition-shadow">
            <div className="p-5 border-b border-border bg-[#F8FAFC]">
              <div className="flex justify-between items-start mb-3">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-muted">
                  Featured Project
                </p>
                <a
                  href="http://lighthouse-2025.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 border border-[#0F172A] rounded-md text-[10px] font-bold bg-[#0F172A] text-white hover:bg-[#334155] hover:border-[#334155] transition-colors"
                >
                  Live ↗
                </a>
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F172A] mb-2">LightHouse</h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Real-time disaster monitoring platform that processes Bluesky social posts through an ML classifier and local LLM for automated event detection.
              </p>
            </div>
            <div className="p-4 bg-white flex flex-wrap gap-2">
              {["React", "FastAPI", "XGBoost", "AWS EC2"].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-medium border border-border rounded-full text-[#334155] bg-[#F8FAFC]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="border border-border rounded-xl p-5 bg-white">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-muted mb-3">
              Education
            </p>
            <p className="font-display font-bold text-base leading-snug text-[#0F172A]">
              B.S. Computer Science
            </p>
            <p className="text-sm text-muted mt-1">UT Dallas · Aug 2022 – May 2026</p>
            <p className="text-sm text-muted">Richardson, TX</p>
          </div>

          <div className="border border-border rounded-xl p-5 bg-white">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-muted mb-3">
              Next Up
            </p>
            <p className="font-display font-bold text-base leading-snug text-[#0F172A]">
              Technology App Development Analyst
            </p>
            <p className="text-sm text-muted mt-1">Citi · Starting July 2026</p>
            <p className="text-sm text-muted">Irving, TX</p>
          </div>

          <div className="border border-border rounded-xl p-5 bg-white">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-muted mb-2">
              About
            </p>
            <p className="text-sm leading-relaxed text-[#334155]">
              CS student at UTD passionate about full-stack development, DevOps, and data science.
              I love building things that are useful and working with people who care about craft.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="flex items-baseline gap-4 mb-5">
          <span className="text-xs text-muted font-mono">01</span>
          <h2 className="font-display font-bold text-4xl text-[#0F172A]">Skills</h2>
        </div>
        <hr className="border-border mb-1" />
        <div className="border border-border rounded-xl bg-white px-5">
          {skills.map((s) => (
            <SkillRow key={s.label} {...s} />
          ))}
        </div>
      </section>
    </div>
  );
}