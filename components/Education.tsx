import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    when: "2019 — 2023",
    title: "B.Tech, Computer Science",
    desc: "University Name — replace with your degree and institution.",
  },
  {
    when: "2024",
    title: "AWS Certified Developer",
    desc: "Or swap for whatever certification is actually relevant to you.",
  },
  {
    when: "2023",
    title: "Relevant coursework or bootcamp",
    desc: "Optional — drop this card if you'd rather keep the section to two.",
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
