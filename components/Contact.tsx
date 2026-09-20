import Reveal from "./Reveal";

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-xs text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="font-body text-sm bg-ink border border-line rounded-lg px-3.5 py-3 focus:outline-none focus:border-amber transition-colors"
      />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-t border-linesoft py-20 md:py-28">
      <div className="max-w-[760px] mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="border border-line rounded-2xl p-8 md:p-14 text-center bg-ink2 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_130%_at_50%_0%,rgba(240,180,41,.07),transparent_70%)]" />
            <div className="relative">
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-3">
                Let&apos;s talk
              </h2>
              <p className="text-muted max-w-md mx-auto mb-8">
                I&apos;m looking for full-stack work on a team that ships often
                and reviews carefully. Send a note directly, or reach me on
                email.
              </p>

              {/* Static inputs — no backend to submit to yet.
                  Wire this up to Formspree, Resend, or an API route if you want real submissions. */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4 text-left">
                <Field id="cf-name" label="Name" placeholder="Jane Recruiter" />
                <Field id="cf-email" label="Email" placeholder="jane@company.com" type="email" />
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label htmlFor="cf-msg" className="font-mono text-xs text-muted">
                    Message
                  </label>
                  <textarea
                    id="cf-msg"
                    name="message"
                    rows={4}
                    placeholder="Tell me a bit about the role..."
                    className="font-body text-sm bg-ink border border-line rounded-lg px-3.5 py-3 focus:outline-none focus:border-amber transition-colors resize-y"
                  />
                </div>
              </div>

              <a
                href="mailto:you@email.com?subject=Let%27s%20talk"
                className="inline-block px-6 py-3 rounded-lg text-sm font-semibold bg-amber text-[#1A1204] hover:bg-[#FFC845] transition"
              >
                Send message
              </a>
              <p className="font-mono text-xs text-dim mt-4">
                Opens your email client with the fields above — or write
                directly to{" "}
                <a
                  href="mailto:you@email.com"
                  className="text-amber border-b border-amber/15"
                >
                  you@email.com
                </a>
              </p>

              <div className="flex justify-center gap-7 mt-9 text-sm text-muted flex-wrap">
                <a href="https://github.com/yourhandle" className="hover:text-amber transition">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourhandle" className="hover:text-amber transition">
                  LinkedIn
                </a>
                <a href="/resume.pdf" className="hover:text-amber transition">
                  Résumé
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
