import React from 'react';
import Link from 'next/link';

interface CreditItem {
  role: string;
  name: string;
}

interface ProjectItem {
  id: string;
  tag: string;
  badge?: string;
  title: string;
  roleDescription: string;
  embedUrl: string;
  synopsis: string;
  credits: CreditItem[];
}

const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: 'mental-floss',
    tag: 'Mental Floss · Flagship Educational Franchise',
    badge: '775K+ views on this episode, 100M+ on series',
    title: 'The List Show',
    roleDescription: 'Head of Video',
    embedUrl: 'https://www.youtube.com/embed/Sqfl802xx2k',
    synopsis:
      'Supervised studio and remote editorial production for high-cadence fact-based science, history, and trivia programming that defined Mental Floss’s YouTube voice and scaled subscriber retention.',
    credits: [
      { role: 'Supervising Producer', name: 'Jonathan Mayer' },
      { role: 'Publication', name: 'Mental Floss Video' },
      { role: 'Format', name: 'Explainer / Infotainment Series' },
      { role: 'Distribution', name: 'YouTube, Meta & Syndication' },
    ],
  },
  {
    id: 'aliens',
    tag: 'Hatched · Original Digital Series',
    badge: 'SeriesFest & Catalyst Selection',
    title: 'Aliens',
    roleDescription:
      'Creator, Writer, Director · ft. Ayo Edebiri, Ilana Glazer, Catherine Cohen, Matt Rogers',
    embedUrl: 'https://www.youtube.com/embed/19zrjAaRVLE',
    synopsis:
      'A sad comedy series. Low-budget animated series made with some of the funniest actors alive.',
    credits: [
      { role: 'Starring', name: 'Ayo Edebiri & Larry Owens' },
      { role: 'Written & Directed by', name: 'Jonathan Mayer' },
      { role: 'Platform / Production', name: 'Hatched' },
      {
        role: 'Official Selection',
        name: 'SeriesFest & Catalyst Story Institute',
      },
    ],
  },
  {
    id: 'upworthy',
    tag: 'Upworthy · Digital Commission',
    badge: 'Viral Impact',
    title: 'Holiday Satire',
    roleDescription: 'Producer & Director',
    embedUrl: 'https://www.youtube.com/embed/QGGmZIFy7pA', // Swap with your Upworthy video embed URL
    synopsis:
      'Commissioned by Upworthy to create a holiday-themed piece of political satire, I collaboratd with comedian Phoebe Robinson on this short.',
    credits: [
      { role: 'Producer / Director', name: 'Jonathan Mayer' },
      { role: 'Publisher', name: 'Upworthy' },
      { role: 'Format', name: 'Digital Short Doc ' },
      { role: 'Starring:', name: 'Phoebe Robinson, Jessica Williams' },
    ],
  },
];

export default function SelectedWorkPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <div className="mx-auto max-w-5xl px-6 py-8 md:px-12 md:py-10">
        {/* NAVIGATION */}
        <header className="flex flex-col justify-between gap-4 border-b border-stone-200/80 pb-6 sm:flex-row sm:items-center">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-stone-900 hover:opacity-80 transition-opacity"
            >
              Jonathan Mayer
            </Link>
            <p className="text-xs uppercase tracking-widest text-stone-500 mt-1 font-mono">
              Video Producer/Strategist &middot; New York City
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-stone-600 hover:text-rose-700 transition-colors"
            >
              &larr; Overview
            </Link>
            <Link
              href="/case-studies"
              className="text-stone-600 hover:text-rose-700 transition-colors"
            >
              Case Studies
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

        {/* PAGE HEADER */}
        <section className="pt-8 pb-4">
          <h1 className="text-2xl font-medium tracking-tight text-stone-900 md:text-3xl">
            Selected Work & Series
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Original narrative comedy, high-cadence digital franchises, and
            civic documentaries.
          </p>
        </section>

        {/* SHORT-FORM & VERTICAL VIDEO SECTION */}
        <section className="border-t border-stone-200/80 pt-10 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-600 animate-pulse" />
                <h2 className="text-xs uppercase tracking-widest text-stone-500 font-mono font-medium">
                  High-Impact Short-Form &amp; Reels
                </h2>
              </div>
              <p className="mt-1 font-serif text-2xl font-normal text-stone-900">
                Format innovation, viral reach &amp; audience acquisition
              </p>
            </div>
            <span className="text-xs font-mono text-stone-400">
              TikTok, Instagram Reels, YouTube Shorts
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* ITEM 1: TikTok - 12.5M Views */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-2.5 py-0.5 text-[11px] font-mono text-white">
                    TikTok · Babbel
                  </span>
                  <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-rose-800">
                    12.5M Views
                  </span>
                </div>

                {/* Aspect 9:14 Frame */}
                <a
                  href="https://www.tiktok.com/@babbel/video/7491313947853802794?utm_campaign=tt4d_open_api&utm_source=6997707748318117889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[9/14] w-full overflow-hidden rounded-xl bg-stone-900 shadow-inner group-hover:ring-2 group-hover:ring-rose-400/50 transition-all"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-t from-black/80 via-stone-900/60 to-black/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <svg className="h-5 w-5 fill-white ml-0.5" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <p className="mt-4 font-serif text-lg text-stone-100 italic">
                      “Step One Way” Format
                    </p>
                    <p className="mt-1 text-[11px] font-mono text-stone-300 uppercase tracking-wider">
                      Watch on TikTok ↗
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-4">
                <h3 className="text-sm font-semibold text-stone-900">
                  Original Format Architecture
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                  Ideated and directed the breakout “Step One Way” language comparison format, which scaled across organic channels to generate over <strong className="font-semibold text-stone-800">150M+ franchise views</strong>.
                </p>
              </div>
            </div>

            {/* ITEM 2: Instagram Reel - 930K Views */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-0.5 text-[11px] font-mono text-stone-700">
                    Instagram Reel
                  </span>
                  <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-rose-800">
                    930K+ Views
                  </span>
                </div>

                {/* Aspect 9:14 Frame */}
                <a
                  href="https://www.instagram.com/reels/DDuiew-x6Vd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[9/14] w-full overflow-hidden rounded-xl bg-stone-900 shadow-inner group-hover:ring-2 group-hover:ring-rose-400/50 transition-all"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-t from-black/80 via-stone-900/60 to-black/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <svg className="h-5 w-5 fill-white ml-0.5" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <p className="mt-4 font-mono text-xs text-rose-300 font-medium">
                      +18,000 New Followers
                    </p>
                    <p className="mt-1 text-[11px] font-mono text-stone-300 uppercase tracking-wider">
                      Watch on Instagram ↗
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-4">
                <h3 className="text-sm font-semibold text-stone-900">
                  Direct Acquisition Conversion
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                  Engineered for maximum profile visit conversion, yielding an outsized <strong className="font-semibold text-stone-800">+18,000 follower surge</strong> on a sub-1M view threshold.
                </p>
              </div>
            </div>

            {/* ITEM 3: Instagram Reel - 1.8M Views */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-0.5 text-[11px] font-mono text-stone-700">
                    Instagram Reel
                  </span>
                  <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-rose-800">
                    1.8M Views
                  </span>
                </div>

                {/* Aspect 9:14 Frame */}
                <a
                  href="https://www.instagram.com/reels/DYzaYRHx55Q/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[9/14] w-full overflow-hidden rounded-xl bg-stone-900 shadow-inner group-hover:ring-2 group-hover:ring-rose-400/50 transition-all"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-t from-black/80 via-stone-900/60 to-black/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <svg className="h-5 w-5 fill-white ml-0.5" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <p className="mt-4 font-mono text-xs text-rose-300 font-medium">
                      +4,000 New Followers
                    </p>
                    <p className="mt-1 text-[11px] font-mono text-stone-300 uppercase tracking-wider">
                      Watch on Instagram ↗
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-4">
                <h3 className="text-sm font-semibold text-stone-900">
                  Viral Retention &amp; Audience Growth
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                  High-hook retention pacing that drove <strong className="font-semibold text-stone-800">1.8M views</strong> and converted <strong className="font-semibold text-stone-800">+4K net-new followers</strong> from a single organic asset.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS LIST */}
        <div className="space-y-24 pt-4 border-t border-stone-200/80">
          {SELECTED_PROJECTS.map((project) => (
            <article key={project.id} className="pt-4 space-y-6">
              {/* Project Title & Metadata Header */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    {project.tag}
                  </span>
                  {project.badge && (
                    <span className="inline-block rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-xs text-rose-800 font-mono">
                      {project.badge}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900">
                  {project.title}
                </h2>
                <p className="text-sm text-stone-500 font-mono">
                  {project.roleDescription}
                </p>
              </div>

              {/* Video Embed */}
              <div className="relative aspect-video w-full overflow-hidden rounded-md bg-stone-900 border border-stone-200/90 shadow-[0_12px_36px_-12px_rgba(244,114,182,0.18)]">
                <iframe
                  src={project.embedUrl}
                  title={project.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Synopsis & Key Credits */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-stone-200/80 text-sm">
                <div className="md:col-span-6 space-y-2">
                  <h3 className="text-xs uppercase tracking-wider text-stone-500 font-mono">
                    Project
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    {project.synopsis}
                  </p>
                </div>
                <div className="md:col-span-6 space-y-2">
                  <h3 className="text-xs uppercase tracking-wider text-stone-500 font-mono">
                    Credits & Scope
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {project.credits.map((credit, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="block text-xs font-mono text-stone-400">
                          {credit.role}
                        </span>
                        <span className="font-medium text-stone-800">
                          {credit.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-28 pt-10 border-t border-stone-200/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm">
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