import React from 'react';
import Link from 'next/link';

// Swap this URL with your Vimeo or YouTube reel embed link
const REEL_EMBED_URL =
  'https://player.vimeo.com/video/798611414?h=464d0a8aa1&title=0&byline=0&portrait=0';

interface ClientLink {
  name: string;
  url: string;
}

const CLIENTS: ClientLink[] = [
  { name: 'Babbel', url: 'https://www.instagram.com/babbel/' },
  { name: 'Mental Floss', url: 'https://www.mentalfloss.com' },
  { name: 'Upworthy', url: 'https://www.upworthy.com' },
  { name: 'Priorities USA', url: 'https://priorities.org' },
  { name: 'Hatched', url: 'https://www.youtube.com/@hatchednyc' },
  { name: 'Hook Arts Media', url: 'https://hookarts.org' },
  { name: 'SeriesFest', url: 'https://www.seriesfest.com' },
];

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-8 md:px-12 md:py-10">
        {/* NAVIGATION */}
        <header className="flex flex-col justify-between gap-4 border-b border-stone-200/80 pb-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold tracking-tight text-stone-900">
                Jonathan Mayer
              </h1>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50/70 px-2.5 py-0.5 text-[10px] font-mono text-rose-700">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                Currently @ Babbel
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-stone-500 mt-1 font-mono">
              Video Producer/Strategist &middot; New York City
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/case-studies"
              className="text-stone-600 hover:text-rose-700 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/selected-work"
              className="text-stone-600 hover:text-rose-700 transition-colors"
            >
              Selected Work
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-1.5 text-stone-600 hover:text-rose-700 transition-colors font-mono text-xs"
            >
              <span>Resume</span>
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </nav>
        </header>

        {/* HERO / EXECUTIVE STATEMENT */}
        <section className="pt-8 pb-7 max-w-3xl">
          <p className="text-2xl font-normal leading-snug text-stone-900 md:text-3xl md:leading-snug">
            I lead teams that deliver{' '}
            <span className="text-rose-900 font-medium">
              massive visibility
            </span>{' '}
            and lasting{' '}
            <span className="text-rose-900 font-medium">business impact</span>{' '}
            for brands and digital publishers.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-stone-500">
            Billions of views, real revenue growth
          </p>
        </section>

        {/* PRODUCER REEL */}
        <section className="border-t border-stone-200/80 pt-5 pb-9">
          <div className="flex items-center justify-between pb-2.5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-600" />
              <h2 className="text-xs uppercase tracking-widest text-stone-500 font-mono font-medium">
                Producer Reel, 2023
              </h2>
            </div>
            <span className="text-xs font-mono text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/80"></span>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-md bg-stone-900 border border-stone-200/90 shadow-[0_12px_36px_-12px_rgba(244,114,182,0.18)]">
            <iframe
              src={REEL_EMBED_URL}
              title="Jonathan Mayer — Producer Reel"
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        {/* CLIENT / BRAND ROSTER (INTERACTIVE LINKS) */}
        <section className="border-t border-stone-200/80 pt-6 pb-7">
          <p className="text-xs uppercase tracking-widest text-stone-400 font-mono mb-3.5">
            Selected Brands & Collaborators
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {CLIENTS.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-mono text-stone-700 shadow-sm transition-all hover:border-rose-400 hover:text-rose-900 hover:bg-rose-50/40 hover:-translate-y-0.5"
              >
                <span>{client.name}</span>
                <svg
                  className="h-2.5 w-2.5 opacity-40 transition-opacity group-hover:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* CASE STUDIES CALLOUT CARD */}
        <section className="border-t border-stone-200/80 pt-6 pb-2">
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-xs uppercase tracking-widest text-stone-500 font-mono">
              Deep Dives
            </h2>
            <Link
              href="/case-studies"
              className="text-xs font-mono text-rose-700 hover:text-rose-900 hover:underline underline-offset-4 flex items-center gap-1 font-medium"
            >
              <span>View All Studies</span> &rarr;
            </Link>
          </div>

          <Link
            href="/case-studies"
            className="group block p-6 rounded-md bg-white border border-stone-200/90 hover:border-rose-300 transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_-6px_rgba(244,114,182,0.12)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-rose-800 uppercase font-semibold">
                    Featured Client &middot; Babbel
                  </span>
                  <span className="text-stone-300">&bull;</span>
                  <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-mono font-medium text-rose-800 border border-rose-200">
                    1B+ Organic Views
                  </span>
                </div>
                <h3 className="text-xl font-medium text-stone-900 mt-1.5 group-hover:text-rose-900 transition-colors">
                  Modernizing a Legacy Brand: 1B+ Organic Views
                </h3>
                <p className="text-sm text-stone-500 mt-2 max-w-2xl leading-relaxed">
                  Retrained video production teams, deployed custom analytics
                  workflows, and scaled audience 30X across TikTok and Reels.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-rose-800">
                <span>Explore Case Studies</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                  &rarr;
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* FOOTER & DIRECT CONTACT */}
        <footer className="mt-20 pt-10 border-t border-stone-200/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm">
          <div>
            <p className="text-stone-900 font-medium">Jonathan Mayer</p>
            <p className="text-xs text-stone-500 mt-0.5">
              Available for Senior Producer, Head of Video & Agency roles.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:jon.w.mayer@gmail.com"
              className="text-rose-800 hover:text-rose-950 hover:underline underline-offset-4 decoration-rose-300 font-mono text-xs font-medium"
            >
              jon.w.mayer@gmail.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-rose-800 text-xs font-mono transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
