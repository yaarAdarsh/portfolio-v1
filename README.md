# Portfolio — Next.js + Tailwind

A dark, technical portfolio site built with Next.js 14 (App Router), TypeScript,
and Tailwind CSS. Converted from a static HTML build of the same design.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit content

Everything is plain JSX/TSX — no CMS, no config file to hunt through.

| What                     | File                              |
|--------------------------|------------------------------------|
| Name, tagline, stats     | `components/Hero.tsx`             |
| Bio + quick facts        | `components/About.tsx`            |
| Projects                 | `components/Work.tsx` (top of file, the `projects` array) |
| Work experience          | `components/Experience.tsx` (the `roles` array) |
| Education/certifications | `components/Education.tsx` (the `items` array) |
| Skills grid              | `components/Skills.tsx` (the `groups` array) |
| Contact info, socials    | `components/Contact.tsx`, `components/Footer.tsx` |
| Site title/meta          | `app/layout.tsx`                  |
| Colors, fonts            | `tailwind.config.ts`              |

Search the codebase for `Adarsh Sahu`, `you@email.com`, `yourhandle`, and
`Company Name` — every placeholder uses one of these.

## Adding your photo

In `components/Hero.tsx`, find the comment block inside the portrait `<div>`
and replace the fallback initials block with:

```tsx
<img src="/you.jpg" alt="Adarsh Sahu" className="w-full h-full object-cover" />
```

Drop `you.jpg` into the `public/` folder (create it if it doesn't exist).

## Adding real project screenshots

Same idea, in `components/MockScreen.tsx` or directly where `<MockScreen />`
is used in `components/Work.tsx` — swap it for an `<img>` pointing at a file
in `public/`.

## Résumé

Put `resume.pdf` in `public/` — the download buttons already link to
`/resume.pdf`.

## Contact form

The form in `components/Contact.tsx` is currently just styled inputs plus a
"Send message" button that opens a pre-filled email — a static export can't
receive form submissions on its own. To make it actually submit:
- Easiest: sign up for a free [Formspree](https://formspree.io) endpoint and
  point the form at it.
- More control: add a Next.js API route (`app/api/contact/route.ts`) that
  emails you via [Resend](https://resend.com) or similar, and call it with
  `fetch` from a small client component.

## Deploying

**Vercel (recommended, made by the Next.js team):**
```bash
npx vercel
```
or connect the GitHub repo at vercel.com — zero config needed.

**Any other host:** run `npm run build` then `npm run start`, or add
`output: "export"` to `next.config.js` for a fully static build you can drop
anywhere (note: doing so means the contact form's email-client fallback is
still the only option, since API routes won't work on a static export).

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Space Grotesk / IBM Plex Sans / IBM Plex Mono via `next/font/google`
