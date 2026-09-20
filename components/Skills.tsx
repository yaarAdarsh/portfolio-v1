import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind", "Testing Library"] },
  { title: "Backend", items: ["Node · Express", "FastAPI", "Postgres · Redis", "REST · GraphQL"] },
  { title: "Infrastructure", items: ["Docker", "AWS", "GitHub Actions", "Grafana"] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-linesoft py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading>Tools I reach for</SectionHeading>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-linesoft border border-linesoft rounded-xl overflow-hidden">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="bg-ink2 p-7 h-full">
                <h3 className="font-display font-semibold text-base mb-3">{g.title}</h3>
                <p className="font-mono text-sm text-muted leading-loose">
                  {g.items.map((it, j) => (
                    <span key={j}>
                      {it}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
