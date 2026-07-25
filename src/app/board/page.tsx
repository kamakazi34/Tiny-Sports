import type { Metadata } from 'next'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Our Board',
  description:
    'Meet the founding board of Tiny Sports Limited: volunteer directors with backgrounds in technology, sport, architecture, education, and community development.',
}

const boardMembers = [
  {
    name: 'Jake Martin Alderman',
    role: 'Chairperson',
    location: 'Brisbane, QLD',
    background:
      "Jake is a sports architect and the sole trader behind SARO (Sports Architecture Research Office), with experience designing and advocating for community sport infrastructure. He founded Tiny Sports after identifying a systemic gap between available government grant funding and the grassroots coaches and clubs who needed it most but couldn't access it directly. He leads the organisation's grant strategy, ASIC compliance, and partner relationships.",
    linkedin: null,
    tags: ['Architecture', 'Grant Strategy', 'Governance'],
  },
  {
    name: 'Saxon Fletcher',
    role: 'Director',
    location: null,
    background:
      "Saxon brings expertise in technology and engineering. As a team member at Supabase, he works at the intersection of developer tooling and open-source infrastructure. He contributes to Tiny Sports' digital systems, data management approach, and technical governance.",
    linkedin: 'https://www.linkedin.com/in/saxonfletcher',
    tags: ['Technology', 'Engineering', 'Open Source'],
  },
  {
    name: 'William Speirs',
    role: 'Director',
    location: null,
    background:
      'William contributes community sport and participation experience to the board. He brings a practical, on-the-ground perspective on what grassroots clubs and athletes actually need from a support organisation, and what makes grant applications compelling to assessors.',
    linkedin: null,
    tags: ['Community Sport', 'Participation'],
  },
  {
    name: 'Katie Fletcher',
    role: 'Director',
    location: null,
    background:
      "Katie brings experience in community engagement and sport. She contributes to Tiny Sports' approach to working with partner clubs and coaches, keeping the organisation focused on practical outcomes for athletes rather than bureaucratic process.",
    linkedin: null,
    tags: ['Community Engagement', 'Sport'],
  },
  {
    name: 'James Pearce',
    role: 'Director',
    location: 'New Zealand',
    background:
      "James brings an international perspective to the board. Based in New Zealand, he contributes experience in sport and community development, and participates remotely in board meetings. His involvement reflects Tiny Sports' commitment to drawing on diverse expertise regardless of geography.",
    linkedin: null,
    tags: ['Sport', 'Community Development', 'International'],
  },
]

export default function BoardPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-border border-b py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Governance</p>
            <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our board
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Tiny Sports Limited is governed by a founding board with
              backgrounds spanning technology, architecture, education and
              community sport. Every director is a volunteer. No director is
              paid.
            </p>
          </div>
        </div>
      </section>

      {/* Board members */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="divide-border divide-y">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="grid gap-4 py-10 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-start justify-between gap-4 lg:block">
                    <div>
                      <h2 className="font-heading text-xl font-bold">
                        {member.name}
                      </h2>
                      <p className="mt-0.5 text-sm font-semibold text-teal-600">
                        {member.role}
                      </p>
                      {member.location && (
                        <p className="text-muted-foreground mt-0.5 text-sm">
                          {member.location}
                        </p>
                      )}
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground mt-1 inline-flex transition-colors hover:text-teal-600"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-muted-foreground text-xs font-semibold tracking-[0.1em] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-ink/85 leading-7">{member.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance note */}
      <section className="bg-mint py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Accountability</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-teal-900">
                Governance
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="text-ink/85 space-y-5 leading-8">
                <p>
                  Tiny Sports Limited is a Company Limited by Guarantee
                  incorporated under the Corporations Act 2001 (Cth). The board
                  operates under a formal Constitution, Conflict of Interest
                  Policy and Financial Management Policy, all available on
                  request.
                </p>
                <p>
                  Directors are required to disclose any conflicts of interest
                  and absent themselves from decisions where a conflict exists.
                  We are applying for ACNC charity registration, which will add
                  further transparency obligations and unlock DGR status.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/contact">Request governance documents</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
