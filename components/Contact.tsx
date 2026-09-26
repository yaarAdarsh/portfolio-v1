"use client";

import { useState } from "react";
import Reveal from "./Reveal";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        value={value}
        onChange={onChange}
        required
        className="font-body text-sm bg-ink border border-line rounded-lg px-3.5 py-3 focus:outline-none focus:border-amber transition-colors"
      />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");  

    try {
      const response = await fetch("https://mail-backend-red.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Failed to send message",
      );
    } finally {
      setLoading(false);
    }
  }

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
                I&apos;m looking for work on a team that ships often and reviews
                carefully. Send a note directly, or reach me on email.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4 text-left">
                  <Field
                    id="name"
                    label="Name"
                    placeholder="Jane Recruiter"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <Field
                    id="email"
                    label="Email"
                    placeholder="jane@company.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="font-mono text-xs text-muted"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Job opportunity / Collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="font-body text-sm bg-ink border border-line rounded-lg px-3.5 py-3 focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="font-mono text-xs text-muted"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me a bit about the role..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="font-body text-sm bg-ink border border-line rounded-lg px-3.5 py-3 focus:outline-none focus:border-amber transition-colors resize-y"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block px-6 py-3 rounded-lg text-sm font-semibold bg-amber text-[#1A1204] hover:bg-[#FFC845] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>

              {status && (
                <p className="font-mono text-xs text-dim mt-4">{status}</p>
              )}

              <p className="font-mono text-xs text-dim mt-4">
                Or write directly to{" "}
                <a
                  href="mailto:adarshsahu13@email.com"
                  className="text-amber border-b border-amber/15"
                >
                  adarshsahu13@email.com
                </a>
              </p>

              <div className="flex justify-center gap-7 mt-9 text-sm text-muted flex-wrap">
                <a
                  href="https://github.com/yaarAdarsh"
                  className="hover:text-amber transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/adarshsahu1310/"
                  className="hover:text-amber transition"
                >
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
