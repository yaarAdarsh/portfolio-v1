import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs text-dim mb-1">{label}</dt>
      <dd className="text-[0.98rem]">{value}</dd>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-linesoft py-10 md:py-10">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading>About</SectionHeading>
        </Reveal>
        <Reveal>
          <div className="grid md:grid-cols-[.9fr_1.1fr] gap-8 md:gap-14 items-start">
            <div className="space-y-4 text-muted max-w-xl">
              <p>
                I&apos;m a full-stack engineer who likes owning a feature from the
                database to the pixel — designing the schema in the morning and
                arguing with CSS by the afternoon.
              </p>
              <p>
                Most recently I&apos;ve been working in TypeScript across React and
                Node, with a growing interest in the infrastructure side:
                deployment, observability, and making systems boring in the good
                way.
              </p>
              <p>
                Outside of shipping code, I read changelogs I don&apos;t need to,
                contribute the occasional fix to open-source tools I use, and
                I&apos;m currently learning{" "}
                <span className="text-text">Go</span>.
              </p>
            </div>
            <dl className="flex flex-row flex-wrap md:flex-col gap-6 md:gap-6 border-t md:border-t-0 md:border-l border-line pt-6 md:pt-0 md:pl-6">
              <Fact label="Based in" value="Bengaluru, India · open to remote" />
              <Fact label="Currently" value="Software Engineer, Company Name" />
              <Fact label="Focus" value="TypeScript, React, Node, Postgres" />
              <Fact label="Learning" value="Go, distributed systems" />
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
