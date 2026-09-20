"use client";
import { useRef } from "react";

export default function ProjectVisual({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${py * -6}deg) rotateY(${px * 8}deg)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="rounded-xl overflow-hidden border border-line bg-gradient-to-br from-ink2 to-[#0C1017] shadow-2xl transition-transform duration-200"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
