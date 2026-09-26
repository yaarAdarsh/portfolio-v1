import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    when: "2025 — Present",
    title: "Associate Software Developer",
    where: "Dataman Computer Systems Pvt. Ltd.",
    points: [
      "Fullstack web developer working with Next js, Tailwind CSS, Node js, sql, etc. to build end-to-end ERP softwares for paper industry.",
      "Software used in more that 20 states and 5 countries serving 1000+ customers.",
      "Migrated whole project to latest technologies for better scaling and reliability.",
    ],
  },
  // {
  //   when: "2023 — 2024",
  //   title: "Junior Engineer",
  //   where: "Company Name",
  //   points: [
  //     "Keep earlier roles to two lines — the top entry gets read, the rest get skimmed.",
  //     "Drop coursework once you have real roles to show.",
  //   ],
  // },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-linesoft py-20 md:py-28">
      <div className="max-w-[760px] mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading>Experience</SectionHeading>
        </Reveal>
        <div className="border-l border-line pl-8 sm:pl-9 ml-2 space-y-12">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 120} className="relative">
              <span className="absolute -left-[38px] sm:-left-[41px] top-2 w-2.5 h-2.5 rounded-full bg-amber ring-4 ring-ink" />
              <div className="font-mono text-xs text-dim mb-1">{r.when}</div>
              <h3 className="font-display font-bold text-xl tracking-tight mb-0.5">
                {r.title}
              </h3>
              <p className="text-amber text-sm mb-3">{r.where}</p>
              <ul className="space-y-1.5 pl-4 list-disc text-muted text-[0.96rem] max-w-xl">
                {r.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
