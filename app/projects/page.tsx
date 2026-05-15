"use client";
import { useState } from "react";

const projects = [
  {
    title: "LightHouse",
    tech: ["React", "FastAPI", "XGBoost", "Ollama", "AWS EC2", "LangGraph"],
    description:
      "Real-time disaster monitoring platform that processes Bluesky social posts through an ML classifier and local LLM for automated event detection and categorization.",
    bullets: [
      "Designed workflow pipeline for preprocessing tweet data and classifying using XGBoost classifier",
      "Integrated local Ollama LLM with custom prompting for disaster metadata extraction including event type, geographic location, and urgency level",
      "Built React UI dashboard displaying real-time disaster alerts with interactive filtering and maps",
    ],
    github: "https://github.com/EJcoding/LightHouse",
    demo: "http://lighthouse-2025.netlify.app",
  },
  {
    title: "Kvault",
    tech: ["React", "Node.js", "LangChain", "Supabase", "Commander.js", "PostgreSQL"],
    description:
      "Version-controlled note-taking platform with real-time sync, a CLI tool for offline workflows, and AI-powered document summarization and QA.",
    bullets: [
      "Developed CLI tool using Commander.js for efficient note synchronization and offline workflows",
      "Integrated LangChain AI for document summarization and QA chatbot interactions with user content",
      "Built scalable PostgreSQL database with Supabase for robust data persistence",
    ],
    github: "https://github.com/affiq23/kvault",
    demo: "https://kvault.vercel.app/",
  },
  {
    title: "Expense Tracker",
    tech: ["React", "Next.js", "TypeScript", "Express.js", "Tesseract.js", "Multer"],
    description:
      "Full-stack expense tracking app with receipt image upload and OCR data extraction, reducing manual entry for everyday transactions.",
    bullets: [
      "Implemented Tesseract.js OCR engine to automatically extract expense data from receipt images",
      "Built RESTful API with Express.js and Multer for file uploads and expense management",
      "Created responsive interface with expense history, sorting, filtering, and receipt display features",
    ],
    github: "https://github.com/affiq23/expense-tracker",
    demo: null,
  },
  {
    title: "STEM4stems",
    tech: ["React", "TypeScript", "Three.js", "OpenAI API"],
    description:
      "Interactive educational platform using 3D visualizations and AI-generated content to teach STEM concepts to younger students.",
    bullets: [
      "Built responsive frontend with Three.js integration for dynamic 3D visualizations optimized for performance",
      "Integrated OpenAI API to generate real-time educational content and adaptive quiz questions",
    ],
    github: "https://github.com/affiq23/stem4stems",
    demo: "https://stem4stems.vercel.app/",
  },
];

function ProjectCard({
  title,
  tech,
  description,
  bullets,
  github,
  demo,
}: (typeof projects)[0]) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-sm">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display font-bold text-xl">{title}</h3>
          <div className="flex gap-2 shrink-0">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-border rounded-full text-xs font-semibold hover:border-[#111] transition-colors"
            >
              GitHub
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-[#111] rounded-full text-xs font-semibold bg-[#111] text-white hover:bg-[#333] transition-colors"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-[#444] leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs border border-border rounded-full text-[#555]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-border px-5 py-3 flex justify-between items-center bg-[#FAFAF8]">
        <span className="text-xs text-muted">{bullets.length} highlights</span>
        <button
          onClick={() => setOpen(!open)}
          className="text-[11px] font-semibold tracking-wide hover:opacity-60 transition-opacity"
        >
          {open ? "Hide details −" : "Show details +"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-5 py-4 bg-bg">
          <ol className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="text-muted font-mono text-xs mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[#222]">{b}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex items-baseline gap-4 mb-5">
        <span className="text-xs text-muted font-mono">03</span>
        <h2 className="font-display font-bold text-4xl">Projects</h2>
      </div>
      <hr className="border-border mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}