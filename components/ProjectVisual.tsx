"use client";

import { useRef } from "react";

export default function ProjectVisual({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 12;
    const rotateX = (0.5 - y) * 12;

    el.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;

    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div className="relative">
      {/* Ambient glow behind card */}
      <div className="absolute -inset-4 rounded-2xl bg-white/35 blur-2xl opacity-60" />

      {/* Card */}
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-gradient-to-br from-ink2 to-[#0C1017] shadow-2xl transition-transform duration-200 ease-out"
      >
        {children}
      </div>
    </div>
  );
}