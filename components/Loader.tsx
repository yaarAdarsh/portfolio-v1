"use client";
import { useEffect, useState } from "react";

const NAME = "Adarsh Sahu";

export default function Loader() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 300 : NAME.length * 45 + 900;
    const t1 = setTimeout(() => setHide(true), total);
    const t2 = setTimeout(() => setGone(true), total + 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-ink transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex font-display font-bold text-3xl md:text-5xl tracking-tight">
        {NAME.split("").map((ch, i) => (
          <span
            key={i}
            className="opacity-0 translate-y-3 [animation:letterIn_0.5s_cubic-bezier(0.2,0.7,0.3,1)_forwards]"
            style={{ animationDelay: `${i * 0.045}s` }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </div>
      <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-40 h-0.5 bg-line rounded overflow-hidden">
        <div className="absolute inset-0 bg-amber origin-left [animation:loadFill_1.4s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
      </div>
    </div>
  );
}
