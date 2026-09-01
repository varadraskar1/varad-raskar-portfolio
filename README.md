# Varad Raskar — Portfolio

Production-oriented Next.js portfolio based strictly on the supplied portfolio brief and uploaded certificate/photo assets.

## Important source limitation
A resume PDF was referenced in the brief but was **not present in the supplied files**. The site therefore does not create a fake resume, fake resume URL, or inferred resume content. Add the real PDF as `public/resume.pdf` and change the About CTA in `components/Portfolio.tsx` when it is available.

HTB and TryHackMe profile URLs were also not supplied, so they are not displayed as broken links.

## Stack
- Next.js + TypeScript
- Framer Motion
- Lucide React
- CSS with responsive/reduced-motion support
- Resend for the contact API

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Contact environment variables
- `RESEND_API_KEY` — Resend API key
- `CONTACT_TO` — inbox that should receive messages
- `CONTACT_FROM` — optional verified sender; configure this in production

Without these variables, the form intentionally returns a clear configuration error rather than pretending to send mail.

## Vercel
1. Push this directory to GitHub.
2. Import the repository into Vercel.
3. Add `RESEND_API_KEY`, `CONTACT_TO`, and optionally `CONTACT_FROM` under Project Settings → Environment Variables.
4. Deploy.

## Content architecture
- Skills: `lib/data.ts` → `skills`
- Experience: `lib/data.ts` → `experience`
- Certifications: `lib/data.ts` → `certifications`
- Projects: `lib/data.ts` → `projects`
- Social links: `lib/data.ts` → `profile`
- Research: `lib/data.ts` → `research`

## Add a future project
Add one object to `projects` in `lib/data.ts`. The project UI reads its metadata and expandable details from that object.

## Add a future certification
Add a certification object to `certifications` and place the actual certificate asset under `public/certificates/`.

## Replace the profile photo
Replace `public/profile.jpg` with the desired image while preserving the filename, or update the `Image` source in `components/Portfolio.tsx`.

## Resume
When the actual resume is available, place it at `public/resume.pdf` and replace the disabled `RESUME PENDING` control with a real `/resume.pdf` link.

## Assumptions / boundaries
- The internship dates are taken from the user-provided brief: 12 June 2026 — 12 August 2026.
- No unsupported technologies were added to the projects.
- Certificate metadata is only shown where visible in the supplied files.
- The AI certificate visually names Blocks eBlock and OpenxAI; the site preserves that source wording rather than inventing a credential ID.
- The supplied HackEthics certificate did not show a date in extracted text, so the date is left as not stated.
- The supplied LFC102 and Linux Unhatched images do not expose a date in the visible artwork, so dates are not invented.
