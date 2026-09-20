import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";
import MockScreen from "./MockScreen";

const projects = [
  {
    title: "Project One",
    what: "One sentence on what it does and who it's for. Lead with the problem it solves, not the framework you used.",
    points: [
      <>
        Replace with a result:{" "}
        <b className="text-text font-medium">cut page load from 4.2s to 900ms</b>{" "}
        by moving rendering server-side.
      </>,
      "Name the hard part you solved, not the CRUD you wrote.",
      <>
        Scale, if you have it:{" "}
        <b className="text-text font-medium">~2,000 monthly users</b>.
      </>,
    ],
    tags: ["TypeScript", "Next.js", "Postgres", "Prisma", "Vercel"],
    links: [
      { label: "Live site", href: "#" },
      { label: "Source code", href: "#" },
    ],
  },
  {
    title: "Project Two",
    what: "Second project. Aim for contrast — if the first was frontend-heavy, make this one backend or infrastructure.",
    points: [
      "Something measurable about reliability, correctness or cost.",
      "A design decision you made, and why you made it that way.",
    ],
    tags: ["Node", "Express", "Redis", "Docker", "AWS"],
    links: [
      { label: "Live site", href: "#" },
      { label: "Source code", href: "#" },
    ],
  },
  {
    title: "Project Three",
    what: "Smaller is fine here. A tool you built to scratch your own itch usually reads better than an unfinished clone of something famous.",
    points: ["One or two lines is plenty for a third project."],
    tags: ["Python", "FastAPI", "SQLite"],
    links: [{ label: "Source code", href: "#" }],
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-linesoft py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading>Selected work</SectionHeading>
        </Reveal>

        <div className="space-y-16 md:space-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <div className="grid md:grid-cols-2 gap-7 md:gap-12 items-center">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted mb-5">{p.what}</p>
                  <ul className="space-y-2 mb-6">
                    {p.points.map((pt, j) => (
                      <li
                        key={j}
                        className="relative pl-5 text-muted text-[0.96rem] before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-sm before:bg-amber before:opacity-65"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-muted bg-raise border border-line rounded-md px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 text-sm font-medium">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="border-b border-amber/15 hover:text-amber hover:border-amber transition pb-0.5"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <ProjectVisual>
                    <MockScreen />
                  </ProjectVisual>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
