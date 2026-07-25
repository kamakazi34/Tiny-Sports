import type { Metadata } from 'next'
import Link from 'next/link'
import { reader } from '@/lib/keystatic/reader'

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    'News, updates, and guides from Tiny Sports: supporting Australian community sports clubs and coaches to access government grants.',
}

export default async function BlogPage() {
  const posts = await reader.collections.posts.all()

  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0
    const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0
    return dateB - dateA
  })

  return (
    <div>
      {/* Hero */}
      <section className="border-border border-b py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">News</p>
            <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              News and updates
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Organisation updates, grant guidance, and stories from partner
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sortedPosts.length > 0 ? (
            <div className="divide-border border-border divide-y border-y">
              {sortedPosts.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-2 py-8 sm:grid-cols-12 sm:gap-8"
                  >
                    <div className="text-muted-foreground text-sm sm:col-span-3">
                      {post.entry.date && (
                        <time dateTime={post.entry.date}>
                          {new Date(post.entry.date).toLocaleDateString(
                            'en-AU',
                            {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            }
                          )}
                        </time>
                      )}
                      {post.entry.author && (
                        <p className="mt-1">{post.entry.author}</p>
                      )}
                    </div>
                    <div className="sm:col-span-8">
                      <h2 className="font-heading text-xl leading-snug font-bold transition-colors group-hover:text-teal-600">
                        {post.entry.title}
                      </h2>
                      {post.entry.excerpt && (
                        <p className="text-muted-foreground mt-2 leading-7">
                          {post.entry.excerpt}
                        </p>
                      )}
                      <p className="link-teal mt-3 text-sm font-semibold">
                        Read more &rarr;
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No posts published yet. Updates are added as the organisation
              grows.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
