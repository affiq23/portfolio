import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Affiq Mohammed",
  description: "CS Graduate · UT Dallas · Full-Stack & DevOps",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${jakarta.variable}`}>
        <header className="sticky top-0 z-50 bg-[#F8FAFC]/95 backdrop-blur-sm border-b border-border">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="font-display font-bold text-sm tracking-tight hover:opacity-60 transition-opacity text-[#0F172A]"
            >
              Affiq Mohammed
            </Link>
            <div className="flex items-center gap-8">
              <div className="flex gap-8 text-[11px] font-semibold tracking-widest uppercase text-[#0F172A]">
                <Link href="/" className="hover:opacity-50 transition-opacity">
                  Home
                </Link>
                <Link href="/experience" className="hover:opacity-50 transition-opacity">
                  Experience
                </Link>
                <Link href="/projects" className="hover:opacity-50 transition-opacity">
                  Projects
                </Link>
                <Link href="/contact" className="hover:opacity-50 transition-opacity">
                  Contact
                </Link>
              </div>
              <div className="flex items-center gap-3 border-l border-border pl-8">
                <a
                  href="mailto:affiqmohammed23@gmail.com"
                  className="w-8 h-8 flex items-center justify-center border border-border rounded-full hover:border-[#0F172A] hover:bg-[#F1F5F9] transition-all bg-white text-[#0F172A]"
                  title="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/affiq23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-border rounded-full hover:border-[#0F172A] hover:bg-[#F1F5F9] transition-all bg-white text-[#0F172A]"
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/affiq-mohammed-920bb0201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-border rounded-full hover:border-[#0F172A] hover:bg-[#F1F5F9] transition-all bg-white text-[#0F172A]"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto px-6 py-14">{children}</main>
      </body>
    </html>
  );
}