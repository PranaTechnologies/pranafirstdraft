import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { FEATURED_BLOG_POST, SITE_URL } from "@/data/site-content";
import { ClosingBand } from "@/components/ClosingBand";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: FEATURED_BLOG_POST.slug }];
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== FEATURED_BLOG_POST.slug) {
    return { title: "Technical Blog" };
  }
  return {
    title: FEATURED_BLOG_POST.title,
    description: FEATURED_BLOG_POST.summary,
    alternates: { canonical: `/research/${FEATURED_BLOG_POST.slug}` },
    openGraph: {
      title: `${FEATURED_BLOG_POST.title} | Perception Labs`,
      description: FEATURED_BLOG_POST.summary,
      url: `${SITE_URL}/research/${FEATURED_BLOG_POST.slug}`,
      type: "article",
    },
  };
}

export default async function ResearchArticlePage({ params }: PageParams) {
  const { slug } = await params;
  if (slug !== FEATURED_BLOG_POST.slug) notFound();

  const post = FEATURED_BLOG_POST;

  return (
    <>
      <article className="border-b border-border-grey bg-field pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink transition-colors hover:text-graphite"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>All Technical Blogs</span>
          </Link>

          <div className="mt-8 rounded-sm border border-border-grey bg-surface px-4 py-3 font-mono text-xs uppercase tracking-[0.11em] text-graphite">
            {post.status}
          </div>

          <header className="mt-8 border-b border-border-grey pb-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
              {post.code} · {post.discipline} · {post.publishedDate} · {post.readingTime}
            </p>
            <h1 className="mt-4 font-display text-[2.25rem] font-light leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[3.25rem]">
              {post.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-muted-ink">
              {post.summary}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.11em] text-graphite">
              {post.author}
            </p>
          </header>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-display text-2xl font-medium text-graphite">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-[1.72] text-muted-ink"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.equation && (
                  <pre className="overflow-x-auto rounded-sm border border-deep-border bg-deep-field px-5 py-4 font-mono text-sm text-signal">
                    {section.equation}
                  </pre>
                )}
              </section>
            ))}

            <section className="rounded-card border border-border-grey bg-surface p-7">
              <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-graphite">
                SCOPE &amp; LIMITATIONS
              </h2>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-ink">
                {post.limitations.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>

            <section className="border-t border-border-grey pt-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                RELATED ARCHITECTURE
              </h2>
              <ul className="mt-3 space-y-2 text-base text-graphite">
                {post.references.map((ref) => (
                  <li key={ref}>• {ref}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <ClosingBand />
    </>
  );
}
