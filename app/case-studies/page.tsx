import React from 'react';
import Link from 'next/link';

interface ProgramCallout {
  badge: string;
  headline: string;
  description: string;
  linkText: string;
  linkUrl: string;
  stats: { label: string; value: string }[];
}

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  role: string;
  year: string;
  metrics: string;
  summary: string;
  strategy: string;
  deliverables: React.ReactNode;
  videoEmbedUrl?: string;
  programFeature?: ProgramCallout;
  mediaGroup?: {
    horizontalUrl: string;
    verticalUrls: [string, string];
  };
}

const FEATURED_PROJECTS: CaseStudy[] = [
  {
    id: 'global-brand-doc',
    title: 'Modernizing a Legacy Brand',
    client: 'Babbel',
    role: 'Global Lead, Organic Social',
    year: '2022-2026',
    metrics: '1B+ Organic Views',
    summary:
      'Came onto established brand with floundering social media presence (stuck below 25K TikTok followers) with goal of increasing impressions and followers.',
    strategy:
      'Retrained video producers & social managers, developed/deployed custom analytics, player-coached to drive massive increase in cadence and engagement.',
    deliverables: (
      <>
        Thousands of videos published per year, 30Xed audience, 200Xed annual
        video views. Launched{' '}
        <a
          href="https://www.tiktok.com/@learnspanishbabbel"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-rose-900 underline decoration-rose-300 underline-offset-2 hover:text-rose-950 transition-colors"
        >
          Learn Spanish
        </a>{' '}
        vertical to generate qualified leads.
      </>
    ),
    mediaGroup: {
      horizontalUrl: 'https://www.youtube.com/embed/ymx6qVE1Fm0',
      verticalUrls: [
        'https://www.instagram.com/reel/DVjFhcgjrWh/embed',
        'https://www.tiktok.com/player/v1/7525823985397927223',
      ],
    },
  },
  {
    id: 'keyman',
    title: 'Overcoming Key Man Risk',
    client: 'Mental Floss',
    role: 'Head of Video',
    year: '2019-2022',
    metrics: '+220% YouTube Revenue YoY',
    summary:
      'After departure of star talent (John Green) before my arrival, audience engagement and YouTube revenue plumetted. How could we reconnect with audiences to drive meaningful engagement on a limited budget?',
    strategy:
      'Overhauled worfklows, working with staff writers/editors behind & in front of camera. Installed test-and-learn approach and developed talent/audience relationships through live videos, new series, and interactive community features.',
    deliverables:
      'Increased output 150% with smaller team, more than 3xed YouTube Revenue, hundreds of millions of annual views across platforms. Conceived & produced new winning series/formats like "Food History."',
    videoEmbedUrl:
      'https://www.youtube.com/embed/KdtpBKKIvrk?list=PLYT7t0pcxEINn7R0XjGy3aj4cuLj8bn9U',
  },
  {
    id: 'growth-language-media',
    title: 'Turning a founder-led non-profit into a lasting changemaker',
    client: 'Hook Arts Media (formerly Dance Theatre Etcetera)',
    role: 'Media/Marketing Manager, later Associate Director',
    year: '2010-2015',
    metrics: 'Annual org. budget and cash reserves each grew 200%+',
    summary:
      'Joined a community arts non-profit whose mission had diverged radically from original conception. How could we set the organization up to creating meaningful change for young artists for years to come?',
    strategy:
      'Created new budgeting practices to support teaching work, piloted and helped fundraise for youth arts education programs that continue to run to this day, participated in organizational rebranding.',
    deliverables:
      'Dance Theatre Etcetera (founded as a dance company, but long since pivoted to arts education in Red Hook, Brooklyn) was eventually renamed Hook Arts Media. The org. was set up for financial stability and continues to serve thousands of young people annually.',
    programFeature: {
      badge: 'Program Initiative & Direct Impact',
      headline: 'Digital Connections — Advanced Filmmaking & Media Fellowships',
      description:
        'A multi-tiered, paid youth film and digital production fellowship providing students from historically disinvested communities with hands-on camera operation, narrative development, and industry-standard post-production training.',
      linkText: 'Explore Digital Connections on Hook Arts Media',
      linkUrl: 'https://www.hookarts.org/digital-connections',
      stats: [
        { label: 'Workforce Model', value: 'Paid Student Fellowships' },
        { label: 'Core Curriculum', value: 'Documentary, Narrative & Editing' },
        { label: 'Community Focus', value: 'Red Hook & NYC Transfer Schools' },
        {
          label: 'Alumni Trajectory',
          value: 'Industry Placements & Film School',
        },
      ],
    },
  },
];

export default function CaseStudiesPage() {
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

 {/* HEADER SECTION */}
 <section className="pt-8 pb-6">
          <h1 className="text-2xl font-medium tracking-tight text-stone-900 md:text-3xl">
            Case Studies
          </h1>
          <p className="mt-2 text-sm italic text-stone-500">
            Selected creative challenges and how I approached them
          </p>
        </section>

        {/* CASE STUDIES STACK */}
        <div className="space-y-20 pt-4 border-t border-stone-200/80">
          {FEATURED_PROJECTS.map((project) => (
            <article key={project.id} className="space-y-4 pt-4">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    {project.client} &middot; {project.year}
                  </span>
                  <span className="inline-block rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-xs text-rose-800 font-mono">
                    {project.metrics}
                  </span>
                </div>
                <h2 className="mt-1.5 text-2xl font-medium tracking-tight text-stone-900">
                  {project.title}
                </h2>
                <p className="text-sm text-stone-500 mt-0.5 font-mono">
                  Role: {project.role}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-3 pb-1 border-t border-stone-200/80 text-sm">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-stone-500 mb-1.5 font-mono">
                    The Challenge
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-stone-500 mb-1.5 font-mono">
                    Execution & Scope
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    {project.strategy}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-stone-500 mb-1.5 font-mono">
                    Deliverables
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    {project.deliverables}
                  </p>
                </div>
              </div>

              {/* MEDIA & ARTIFACT RENDERING */}
              {project.programFeature ? (
                <div className="rounded-md border border-stone-200/90 bg-white p-6 md:p-8 shadow-[0_4px_24px_-4px_rgba(244,114,182,0.08)]">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-200/70">
                    <div className="space-y-2 max-w-2xl">
                      <span className="inline-block rounded-full border border-rose-200 bg-rose-50/70 px-2.5 py-0.5 text-[10px] font-mono text-rose-700 uppercase tracking-wider">
                        {project.programFeature.badge}
                      </span>
                      <h3 className="text-xl font-medium text-stone-900">
                        {project.programFeature.headline}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {project.programFeature.description}
                      </p>
                    </div>
                    <a
                      href={project.programFeature.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-mono font-medium text-rose-900 shadow-sm transition-all hover:border-rose-400 hover:bg-rose-50/50 shrink-0 self-start"
                    >
                      <span>{project.programFeature.linkText}</span>
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
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5">
                    {project.programFeature.stats.map((stat, idx) => (
                      <div key={idx} className="space-y-1">
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-stone-400">
                          {stat.label}
                        </span>
                        <span className="block text-xs font-medium text-stone-800">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : project.mediaGroup ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
                  <div className="md:col-span-7 aspect-video w-full overflow-hidden rounded-md bg-stone-900 border border-stone-200/90 shadow-[0_12px_36px_-12px_rgba(244,114,182,0.18)]">
                    <iframe
                      src={project.mediaGroup.horizontalUrl}
                      title={`${project.title} - Main Feature`}
                      className="h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-5 grid grid-cols-2 gap-3">
                    {project.mediaGroup.verticalUrls.map((url, i) => (
                      <div
                        key={i}
                        className="aspect-[9/16] w-full overflow-hidden rounded-md bg-stone-900 border border-stone-200/90 shadow-[0_12px_36px_-12px_rgba(244,114,182,0.18)]"
                      >
                        <iframe
                          src={url}
                          title={`${project.title} - Social Cut ${i + 1}`}
                          className="h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-stone-900 border border-stone-200/90 shadow-[0_12px_36px_-12px_rgba(244,114,182,0.18)]">
                  <iframe
                    src={project.videoEmbedUrl}
                    title={project.title}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}
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
