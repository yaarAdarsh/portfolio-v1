import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";
import MockScreen from "./MockScreen";

const projects = [
  {
    title: "Vyapar Pustika",
    what: "End-to-end procurement management system for Requisitions, Indents, Enquiries, Quotations, and Purchase Orders.",
    points: [
      <>
        Features{" "}
        <b className="text-text font-medium">permission-based authorization</b>{" "}
        for vendors, dealers, and employees, enabling controlled access across
        different stages of the procurement workflow.
      </>,
      "Designed the database schema manually and implemented multi-level approval workflows, enabling faster and more streamlined operations.",
      <>
        Can easily handle:{" "}
        <b className="text-text font-medium">~2,000 monthly users</b>.
      </>,
    ],
    tags: ["TypeScript", "Next", "Node", "Express", "Postgres", "Lucide"],
    links: [
      { label: "Live site", href: "https://vyapar-pustika.vercel.app/" },
      {
        label: "Source code",
        href: "https://github.com/yaarAdarsh/vyapar_pustika",
      },
    ],
    img: "/project1.png",
    alternate: "Vyapar Pustika screenshot",
  },
  {
    title: "Sentimental Attendance System",
    what: "AI powered attendace system which recommends Songs and Shayari based on your mood.",
    points: [
      "Uses OpenCV and ML model for facial detection and categorise facial expressions in 6 mood.",
      "Recommends music tracks based on the detected mood.",
      "Recommends poetry based on the detected mood.",
      "Also provides a Flask API endpoint for integrating the model with other applications."
    ],
    tags: ["Node", "Express", "Redis", "Docker", "AWS"],
    links: [
      { label: "Live site", href: "https://github.com/yaarAdarsh/SentimentalAttendanceSystem" },
      { label: "Source code", href: "https://github.com/yaarAdarsh/SentimentalAttendanceSystem" },
    ],
    img: "/project2.png",
    alternate: "Attendance System screenshot",
  },
  // {
  //   title: "Project Three",
  //   what: "Smaller is fine here. A tool you built to scratch your own itch usually reads better than an unfinished clone of something famous.",
  //   points: ["One or two lines is plenty for a third project."],
  //   tags: ["Python", "FastAPI", "SQLite"],
  //   links: [{ label: "Source code", href: "#" }],
  // },
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
                        target="blank"
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
                    <img
                      src={p.img}
                      alt={p.alternate}
                      className="block w-full h-full object-cover shadow-white shadow-sm"
                    />
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
