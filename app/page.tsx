import Link from 'next/link';

interface BrandItem {
  name: string;
  href: string;
  logo?: string;
  heightClass?: string;
}

export default function HomePage() {
  const brands: BrandItem[] = [
    {
      name: 'Babbel',
      href: 'https://www.instagram.com/babbel/',
      logo: '/babbel-logo.png',
      heightClass: 'h-4',
    },
    {
      name: 'Mental Floss',
      href: 'https://www.mentalfloss.com',
      logo: '/mentalfloss-logo.png',
      heightClass: 'h-4',
    },
    {
      name: 'Upworthy',
      href: 'https://www.upworthy.com',
      logo: '/Logo_Upworthy.webp',
      heightClass: 'h-3.5',
    },
    {
      name: 'Priorities USA',
      href: 'https://priorities.org',
      logo: '/priorities-logo.png',
      heightClass: 'h-5',
    },
    {
      name: 'Sideswipe',
      href: 'https://www.youtube.com/@hatchednyc',
      logo: '/sideswipe.logo.jpg',
      heightClass: 'h-4',
    },
    {
      name: 'Hook Arts Media',
      href: 'https://hookarts.org',
      logo: '/hookarts-logo.png',
      heightClass: 'h-4',
    },
    {
      name: 'SeriesFest',
      href: 'https://www.seriesfest.com',
      logo: '/seriesfest-logo.png',
      heightClass: 'h-5',
    },
  ];

  return (
    <main className="relative z-10 min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-8 md:px-12 md:py-10">
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
            <p className="text-xs uppercase tracking-wider text-stone-500 mt-1 font-medium">
              Video Producer/Strategist · New York City
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/case-studies"
              className="relative text-stone-600 transition-colors hover:text-stone-950 after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full"
            >
              Case Studies
            </Link>
            <Link
              href="/selected-work"
              className="relative text-stone-600 transition-colors hover:text-stone-950 after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full"
            >
              Selected Work
            </Link>
            <a
              href="/resume.pdf?v=2"
              target="_blank"
              className="group flex items-center gap-1.5 text-stone-600 hover:text-rose-700 transition-colors font-mono text-xs"
            >
              <span>Resume</span>
              <svg
                className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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

        <section className="pt-8 pb-7 max-w-3xl">
          <p className="font-serif text-2xl font-normal leading-snug text-stone-900 md:text-3xl md:leading-snug">
            I lead teams that deliver{' '}
            <span className="whitespace-nowrap italic text-rose-900 font-normal">
              massive visibility
            </span>{' '}
            and lasting{' '}
            <span className="whitespace-nowrap italic text-rose-900 font-normal">
              business impact
            </span>{' '}
            for brands and digital publishers.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-stone-500">
            Billions of views, real revenue growth
          </p>
        </section>

        <section className="border-t border-stone-200/80 pt-5 pb-9">
          <div className="flex items-center justify-between pb-2.5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-600" />
              <h2 className="text-xs uppercase tracking-widest text-stone-500 font-mono font-medium">
                Producer Reel
              </h2>
            </div>
            <span className="text-xs font-mono text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/80" />
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-stone-950 p-1 shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-stone-900/10">
            <iframe
              src="https://player.vimeo.com/video/798611414?h=464d0a8aa1&title=0&byline=0&portrait=0"
              title="Jonathan Mayer — Producer Reel"
              className="h-full w-full rounded-lg border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        {/* BRANDS & COLLABORATORS */}
        <section className="border-t border-stone-200/80 pt-6 pb-7">
          <p className="text-xs uppercase tracking-wider text-stone-500 font-medium mb-4">
            Selected Brands &amp; Collaborators
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 items-center justify-center rounded-lg border border-stone-200/80 bg-white px-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-stone-300 hover:bg-stone-50/60 hover:shadow-sm"
                title={brand.name}
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`${brand.heightClass || 'h-4'} max-w-[110px] object-contain grayscale opacity-60 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100`}
                  />
                ) : (
                  <span className="text-xs font-mono text-stone-600 transition-colors group-hover:text-stone-950">
                    {brand.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-stone-200/80 pt-6 pb-2">
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-xs uppercase tracking-widest text-stone-500 font-mono">
              Deep Dives
            </h2>
            <Link
              className="text-xs font-mono text-rose-700 hover:text-rose-950 hover:underline underline-offset-4 flex items-center gap-1 font-medium"
              href="/case-studies"
            >
              <span>View All Studies</span> →
            </Link>
          </div>
          <Link
            className="group block p-6 rounded-md bg-white border border-stone-200/90 hover:border-rose-300 transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_-6px_rgba(244,114,182,0.12)]"
            href="/case-studies"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-rose-800 uppercase font-semibold">
                    Featured Client · Babbel
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="rounded-full bg-rose-50 px-2.5 py-0.5 text-[11px] font-mono font-medium text-rose-800 border border-rose-200">
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
                  →
                </span>
              </div>
            </div>
          </Link>
        </section>

        <footer className="mt-20 pt-10 border-t border-stone-200/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm">
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