"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-3.5 backdrop-blur-md bg-ink/80 border-b transition-transform duration-300 ${
          scrolled ? "translate-y-0 border-linesoft" : "-translate-y-full border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-sm tracking-tight">
            Adarsh Sahu
          </a>
          <div className="hidden md:flex gap-8 text-sm text-muted">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-amber transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 w-6 p-1"
          >
            <span
              className={`block h-0.5 w-full bg-text transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text transition-transform duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display font-semibold text-2xl hover:text-amber transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
