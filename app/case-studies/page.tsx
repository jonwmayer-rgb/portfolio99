'use client';

import React, { useState } from 'react';
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
  videoBadge?: string;
  videoLabel?: string;
  videoPoster?: string;
  programFeature?: ProgramCallout;
  mediaGroup?: {
    horizontal: {
      url: string;
      poster: string;
      badge: string;
      label: string;
    };
    verticals: [
      {
        url: string;
        poster: string;
        badge: string;
        label: string;
      },
      {
        url: string;
        poster: string;
        badge: string;
        label: string;
      }
    ];
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
      horizontal: {
        url: 'https://www.youtube.com/embed/ymx6qVE1Fm0?autoplay=1',
        poster: 'https://img.youtube.com/vi/ymx6qVE1Fm0/maxresdefault.jpg',
        badge: '3M+ AIO Impressions',
        label: 'How to Learn Spanish',
      },
      verticals: [
        {
          url: 'https://www.instagram.com/reel/DVjFhcgjrWh/embed',
          poster: '/case-babbel-ig.jpg',
          badge: '36 Opt-ins',
          label: 'Direct-Response Reel',
        },
        {
          url: 'https://www.tiktok.com/player/v1/7525823985397927223?autoplay=1',
          poster: '/case-babbel-tt.jpg',
          badge: '150K Views',
          label: 'Organic TikTok Lead-Gen',
        },
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
      'https://www.youtube.com/embed/KdtpBKKIvrk?list=PLYT7t0pcxEINn7R0XjGy3aj4cuLj8bn9U&autoplay=1',
    videoBadge: '200K+ Watch Hours',
    videoLabel: 'Food History Series',
    videoPoster: 'https://img.youtube.com/vi/KdtpBKKIvrk/maxresdefault.jpg',
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
  const [activeMediaId, setActiveMediaId] = useState<string | null>(null);

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
            <p className="text-xs uppercase tracking-wider text-stone-500 mt-1 font-medium">
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
                    Execution &amp; Scope
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
                  {/* Horizontal Feature */}
                  <div className="md:col-span-7 aspect-video w-full overflow-hidden rounded-md bg-stone-950 border border-stone-200/90 shadow-[0_12px_36px_-12px_rgba(244,114,182,0.18)] relative">
                    {activeMediaId === `${project.id}-horizontal` ? (
                      <iframe
                        src={project.mediaGroup.horizontal.url}
                        title={`${project.title} - Main Feature`}
                        className="h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        onClick={() => setActiveMediaId(`${project.id}-horizontal`)}
                        className="group/poster relative h-full w-full cursor-pointer overflow-hidden"
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/poster:scale-105"
                          style={{
                            backgroundImage: `url(${project.mediaGroup.horizontal.poster})`,
                            backgroundColor: '#1c1917',
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-stone-950/60 to-black/40 backdrop-blur-[1.5px] transition-all duration-300 group-hover/poster:backdrop-blur-none" />

                        {/* Top Bug */}
                        <div className="absolute top-3 right-3">
                          <span className="rounded-full border border-rose-300/40 bg-rose-950/80 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-rose-200 backdrop-blur-sm">
                            {project.mediaGroup.horizontal.badge}
                          </span>
                        </div>

                        {/* Center Controls */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-md shadow-lg transition-all duration-300 group-hover/poster:scale-110 group-hover/poster:bg-rose-600">
                            <svg className="h-6 w-6 fill-white ml-0.5" viewBox="0 0 24 24">
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </div>
                          <p className="mt-3 font-serif text-lg font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {project.mediaGroup.horizontal.label}
                          </p>
                          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-stone-200 backdrop-blur-sm ring-1 ring-white/10">
                            Click to Play
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2 Vertical Companions */}
                  <div className="md:col-span-5 grid grid-cols-2 gap-3">
                    {project.mediaGroup.verticals.map((vert, i) => {
                      const isVertPlaying = activeMediaId === `${project.id}-vert-${i}`;
                      return (
                        <div
                          key={i}
                          className="aspect-[9/16] w-full overflow-hidden rounded-md bg-stone-950 border border-stone-200/90 shadow-[0_12px_36px_-12px_rgba(244,114,182,0.18)] relative"
                        >
                          {isVertPlaying ? (
                            <iframe
                              src={vert.url}
                              title={`${project.title} - Social Cut ${i + 1}`}
                              className="h-full w-full border-0 bg-stone-950"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              scrolling="no"
                            />
                          ) : (
                            <div
                              onClick={() => setActiveMediaId(`${project.id}-vert-${i}`)}
                              className="group/vert relative h-full w-full cursor-pointer overflow-hidden"
                            >
                              <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/vert:scale-105"
                                style={{
                                  backgroundImage: `url(${vert.poster})`,
                                  backgroundColor: '#1c1917',
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-stone-950/60 to-black/40 backdrop-blur-[1.5px] transition-all duration-300 group-hover/vert:backdrop-blur-none" />

                              {/* Metric Badge */}
                              <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-center">
                                <span className="rounded-full border border-rose-300/40 bg-rose-950/85 px-2 py-0.5 text-[10px] font-mono font-semibold text-rose-200 backdrop-blur-sm text-center">
                                  {vert.badge}
                                </span>
                              </div>

                              {/* Center Play Button */}
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center text-white">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/25 backdrop-blur-md shadow-md transition-all duration-300 group-hover/vert:scale-110 group-hover/vert:bg-rose-600">
                                  <svg className="h-5 w-5 fill-white ml-0.5" viewBox="0 0 24 24">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                  </svg>
                                </div>
                                <p className="mt-3 font-serif text-sm font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                  {vert.label}
                                </p>
                                <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-stone-200 backdrop-blur-sm">
                                  Play
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-stone-950 border border-stone-200/90 shadow-[0_12px_36px_-12px_rgba(244,114,182,0.18)]">
                  {/* Broadcast Bug */}
                  {project.videoBadge && (
                    <div className="absolute top-3 right-3 z-10 pointer-events-none">
                      <span className="rounded-full border border-rose-300/40 bg-rose-950/85 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-rose-200 backdrop-blur-sm shadow-md">
                        {project.videoBadge}
                      </span>
                    </div>
                  )}

                  {activeMediaId === project.id ? (
                    <iframe
                      src={project.videoEmbedUrl}
                      title={project.title}
                      className="h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      onClick={() => setActiveMediaId(project.id)}
                      className="group/poster relative h-full w-full cursor-pointer overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/poster:scale-105"
                        style={{
                          backgroundImage: `url(${project.videoPoster || 'https://img.youtube.com/vi/KdtpBKKIvrk/maxresdefault.jpg'})`,
                          backgroundColor: '#1c1917',
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-stone-950/60 to-black/40 backdrop-blur-[1.5px] transition-all duration-300 group-hover/poster:backdrop-blur-none" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-md shadow-lg transition-all duration-300 group-hover/poster:scale-110 group-hover/poster:bg-rose-600">
                          <svg className="h-6 w-6 fill-white ml-0.5" viewBox="0 0 24 24">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                        <p className="mt-3 font-serif text-lg font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {project.videoLabel || project.title}
                        </p>
                        <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-stone-200 backdrop-blur-sm ring-1 ring-white/10">
                          Click to Play Series
                        </span>
                      </div>
                    </div>
                  )}
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
              Available for Senior Producer, Head of Video &amp; Agency roles.
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