"use client";
import { useState } from "react";

const experiences = [
  {
    role: "Technology Application Analyst",
    company: "Citi",
    logo: "/citi.png", 
    period: "Starting July 2026",
    location: "Irving, TX",
    tags: ["Incoming"],
    bullets: [
      "Incoming Technology Analyst within the App Development track.",
    ],
  },
  {
    role: "Site Reliability Engineer Fellow",
    company: "Meta/Major League Hacking",
    logo: "/mlh.jpg",
    period: "June 2025 – August 2025",
    location: "Remote",
    tags: ["Flask", "Python", "Docker", "MySQL", "Prometheus", "Grafana", "GitHub Actions"],
    bullets: [
      "Developed Flask application with Python ORM for efficient data modeling and database interactions",
      "Containerized application and MySQL services using Docker for consistent deployment environments",
      "Implemented comprehensive monitoring stack with Prometheus metrics, Grafana dashboards, and automated CI/CD pipelines via GitHub Actions",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "UTDesign Studio",
    logo: "/utdesign.jpg",
    period: "June 2025 – August 2025",
    location: "Richardson, TX",
    tags: ["Vue.js", "Nuxt.js", "Prisma", "Express.js"],
    bullets: [
      "Built internal real-time event calendar and merchandise application for client using Vue.js, Nuxt.js, and Prisma, enabling seamless event scheduling and inventory tracking",
      "Developed RESTful API endpoints with Express.js for event operations, user session management, and push notifications",
      "Implemented secure email verification system with token-based authentication to enhance account security and user onboarding",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Texas A&M Health Science Center",
    logo: "/tamu.jpg",
    period: "May 2024 – August 2024",
    location: "Bryan, TX",
    tags: ["Next.js", "React", "PostgreSQL", "Prisma ORM"],
    bullets: [
      "Built internal digital intake portal with dynamic frontend forms and integrated backend data layer, reducing manual data entry by streamlining workflow processes",
      "Designed 20+ responsive UI components in Next.js with reusable React architecture, improving form layouts and user experience consistency",
      "Optimized PostgreSQL database operations using Prisma ORM, implementing efficient CRUD functionality for scalable record management",
    ],
  },
  {
    role: "Member",
    company: "Association for Computing Machinery",
    logo: "/acm.png",
    period: "Fall 2022 – Present",
    location: "UT Dallas",
    tags: [],
    bullets: ["Active participation in workshops, hackathons, and mentorship programs since Fall 2022."],
  },
];

function ExperienceCard({
  role,
  company,
  logo,
  period,
  location,
  tags,
  bullets,
}: (typeof experiences)[0]) {
  const [open, setOpen] = useState(false);
  const hasDetails = bullets.length > 1;

  return (
    <div className="border border-border rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-sm">
      <div className="p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-11 h-11 object-contain rounded-lg border border-border shrink-0 bg-white"
          />
          <div>
            {/* Added py-0.5 and leading-normal to stop Syne letters from clipping */}
            <p className="font-display font-bold text-[15px] leading-normal py-0.5 text-[#0F172A]">
              {role}
            </p>
            <p className="text-sm text-muted">{company}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right hidden md:block">
            <p className="text-xs text-muted">{period}</p>
            <p className="text-xs text-muted">{location}</p>
          </div>
          {hasDetails && (
            <button
              onClick={() => setOpen(!open)}
              className="text-[11px] font-semibold tracking-wide border border-border rounded-full px-3 py-1.5 hover:border-[#0F172A] transition-colors whitespace-nowrap text-[#0F172A]"
            >
              {open ? "Hide" : "Details"}
            </button>
          )}
        </div>
      </div>

      {tags.length > 0 && (
        <div className="px-5 pb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs border border-border rounded-full text-[#334155] bg-[#F8FAFC]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {open && (
        <div className="border-t border-border px-5 py-4 bg-[#F8FAFC]">
          <ol className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="text-muted font-mono text-xs mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[#334155]">{b}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div>
      <div className="flex items-baseline gap-4 mb-5">
        <span className="text-xs text-muted font-mono">02</span>
        <h2 className="font-display font-bold text-4xl text-[#0F172A]">Experience</h2>
      </div>
      <hr className="border-border mb-8" />
      <div className="space-y-3">
        {experiences.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.period}`} {...exp} />
        ))}
      </div>
    </div>
  );
}