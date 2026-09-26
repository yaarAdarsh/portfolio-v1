import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    when: "2021 — 2025",
    title: "B.Tech, Computer Science (AI)",
    desc: "CSJM University, Kanpur.",
  },
  {
    when: "2024",
    title: "ML Certification",
    desc: "Completed ML course by Andrew Ng from cousera.",
  },
  {
    when: "2025",
    title: "DSA",
    desc: "Solved 500+ questions on LeetCode having max rating 1709.",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-linesoft py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading>Education &amp; certifications</SectionHeading>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div className="border border-line rounded-xl p-6 bg-ink2 hover:border-dim hover:-translate-y-0.5 transition h-full">
                <div className="font-mono text-xs text-dim mb-2">{it.when}</div>
                <h3 className="font-display font-bold text-base tracking-tight mb-1">
                  {it.title}
                </h3>
                <p className="text-muted text-sm">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
