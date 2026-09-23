const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-linesoft py-14 md:py-16">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-10 mb-10">
          <div>
            <p className="font-display font-bold text-xl tracking-tight mb-2.5">
              Adarsh Sahu
            </p>
            <p className="text-muted text-sm max-w-xs">
              Full-stack engineer building end-to-end web products — from
              interface to infrastructure. Open to new roles.
            </p>
          </div>
          <div>
            <h4 className="text-muted text-sm mb-4">Site</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-amber transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-muted text-sm mb-4">Elsewhere</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://github.com/yourhandle" className="text-sm hover:text-amber transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourhandle" className="text-sm hover:text-amber transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:you@email.com" className="text-sm hover:text-amber transition">
                  Email
                </a>
              </li>
              <li>
                <a href="/resume.pdf" className="text-sm hover:text-amber transition">
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-8 border-t border-linesoft font-mono text-xs text-dim">
          <span>Designed and built by Adarsh Sahu · Updated September 2026</span>
          <a href="#top" className="hover:text-amber transition">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
