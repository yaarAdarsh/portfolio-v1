"use client";
import { useRef } from "react";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent) {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    const r = hero.getBoundingClientRect();
    glow.style.left = `${((e.clientX - r.left) / r.width) * 100}%`;
    glow.style.top = `${((e.clientY - r.top) / r.height) * 100}%`;
  }

  return (
    <header
      id="top"
      ref={heroRef}
      onPointerMove={onMove}
      className="relative min-h-screen flex items-center pt-10 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -inset-[10%] opacity-75"
          style={{
            backgroundImage:
              "linear-gradient(#171E27 1px, transparent 1px), linear-gradient(90deg, #171E27 1px, transparent 1px)",
            backgroundSize: "62px 62px",
            maskImage:
              "radial-gradient(ellipse 85% 65% at 30% 35%, #000 0%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 65% at 30% 35%, #000 0%, transparent 78%)",
          }}
        />
        <div
          ref={glowRef}
          className="absolute w-[620px] h-[620px] rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl transition-[left,top] duration-500 ease-out"
          style={{
            left: "22%",
            top: "30%",
            background:
              "radial-gradient(circle, rgba(240,180,41,.13) 0%, rgba(91,141,239,.07) 40%, transparent 68%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
        <div className="grid md:grid-cols-[1.15fr_.85fr] gap-10 md:gap-12 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-muted border border-line rounded-full px-4 py-1.5 mb-8 bg-raise/60">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                Available for software developer roles
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.94] tracking-tighter mb-6 bg-gradient-to-b from-white to-[#A9B6C6] bg-clip-text text-transparent">
                Adarsh Sahu
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-2xl leading-snug max-w-md mb-10 text-[#C6D0DC]">
                I build web products end to end —{" "}
                <b className="text-text font-medium">
                  the interface people use and the services behind it.
                </b>{" "}
                Two years shipping TypeScript, React and Node in production.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mb-14">
                <a
                  href="#work"
                  className="px-6 py-3 rounded-lg text-sm font-semibold bg-amber text-[#1A1204] hover:bg-[#FFC845] hover:-translate-y-0.5 transition"
                >
                  See my work
                </a>
                <a
                  target="blank"
                  href="/Adarsh_Sahu_Resume.pdf"
                  className="px-6 py-3 rounded-lg text-sm font-medium bg-raise/70 border border-line hover:border-dim hover:bg-raise transition"
                >
                  Download resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-8 sm:gap-10 border-t border-linesoft pt-8">
                <div>
                  <div className="font-display font-bold text-2xl text-amber">
                    <CountUp target={1} suffix="+" />
                  </div>
                  <div className="text-sm text-muted mt-1">
                    Years in production
                  </div>
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-amber">
                    <CountUp target={12} suffix="k" />
                  </div>
                  <div className="text-sm text-muted mt-1">
                    Monthly active users served
                  </div>
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-amber">
                    <CountUp target={99.9} suffix="%" decimals={1} />
                  </div>
                  <div className="text-sm text-muted mt-1">
                    Uptime on services I own
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <style>{`
            @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,20px) scale(1.1)} }
            @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-30px) scale(1.08)} }
            @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-15px,15px) scale(0.95)} }
            @keyframes cursor-blink { 0%,100%{opacity:1} 50%{opacity:0} }
            .cursor-blink { animation: cursor-blink 1s step-end infinite; }
            @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
            .float-anim { animation: float 4s ease-in-out infinite; }
            @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
            .spin-slow { animation: spin-slow 10s linear infinite; }
            ::-webkit-scrollbar { width: 6px; }
            ::-webkit-scrollbar-track { background: #0D0A1A; }
            ::-webkit-scrollbar-thumb { background: rgba(168,85,247,0.2); border-radius: 3px; }
            ::-webkit-scrollbar-thumb:hover { background: rgba(168,85,247,0.4); }
          `}</style>

          <Reveal delay={200}>
            {/* Avatar / Visual */}
            <div className="flex items-center justify-center relative mt-10 lg:mt-0">
              <div className="relative float-anim">
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-full spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #A855F7, #EC4899, transparent, #A855F7)",
                    padding: 2,
                    margin: -20,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{ background: "#0D0A1A" }}
                  />
                </div>

                {/* Photo */}
                <div
                  className="relative w-80 h-80 rounded-full overflow-hidden"
                  style={{
                    border: "3px solid rgba(168,85,247,0.3)",
                    boxShadow:
                      "0 0 60px rgba(168,85,247,0.2), inset 0 0 30px rgba(168,85,247,0.05)",
                  }}
                >
                  <img
                    src="./myImg.jpeg"
                    alt="Adarsh Sahu, Software Developer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 60%, rgba(13,10,26,0.4))",
                    }}
                  />
                </div>

                {/* Floating tech badges */}
                {[
                  {
                    label: "Next JS",
                    color: "#6DB33F",
                    top: "0%",
                    right: "-20%",
                  },
                  {
                    label: "C++",
                    color: "#A855F7",
                    bottom: "10%",
                    left: "-25%",
                  },
                  {
                    label: "REST API",
                    color: "#EC4899",
                    top: "40%",
                    right: "-30%",
                  },
                  {
                    label: "Node JS",
                    color: "#818CF8",
                    top: "80%",
                    right: "-20%",
                  },
                  {
                    label: "Express JS",
                    color: "#10B981",
                    top: "-10%",
                    right: "60%",
                  },
                  {
                    label: "SQL",
                    color: "#F97316",
                    top: "40%",
                    right: "100%",
                  },
                  {
                    label: "AI",
                    color: "#FACC15",
                    top: "105%",
                    right: "30%",
                  },
                  {
                    label: "Python",
                    color: "#06B6D4",
                    top: "100%",
                    right: "70%",
                  },
                  {
                    label: "DSA",
                    color: "#F43F5E",
                    top: "-20%",
                    right: "20%",
                  },
                  {
                    label: "TypeScript",
                    color: "#EAB308",
                    top: "15%",
                    right: "100%",
                  },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="absolute px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      ...b,
                      background: "rgba(19,15,36,0.9)",
                      border: `1px solid ${b.color}40`,
                      color: b.color,
                      fontFamily: "Inter, sans-serif",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
