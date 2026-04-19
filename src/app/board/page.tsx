import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Our Board',
  description:
    'Meet the founding board of Tiny Sports Limited — five directors with backgrounds in technology, sport, architecture, education, and community development.',
}

const boardMembers = [
  {
    name: 'Jake Martin Alderman',
    role: 'Chairperson',
    location: 'Brisbane, QLD',
    background:
      'Jake is a sports architect and sole trader behind SARO (Sports Architecture Research Office), with experience designing and advocating for community sport infrastructure. He founded Tiny Sports after identifying a systemic gap between available government grant funding and the grassroots coaches and clubs who needed it most but couldn\'t access it directly. He leads the organisation\'s grant strategy, ASIC compliance, and partner relationships.',
    linkedin: null,
    tags: ['Architecture', 'Grant Strategy', 'Governance'],
  },
  {
    name: 'Saxon Fletcher',
    role: 'Director',
    location: null,
    background:
      'Saxon brings expertise in technology and engineering. As a team member at Supabase, he works at the intersection of developer tooling and open-source infrastructure. He contributes to Tiny Sports\' digital systems, data management approach, and technical governance.',
    linkedin: 'https://www.linkedin.com/in/saxonfletcher',
    tags: ['Technology', 'Engineering', 'Open Source'],
  },
  {
    name: 'William Speirs',
    role: 'Director',
    location: null,
    background:
      'William contributes community sport and participation experience to the board. He brings a practical, on-the-ground perspective on what grassroots clubs and athletes actually need from a support organisation — and what makes grant applications compelling to assessors.',
    linkedin: null,
    tags: ['Community Sport', 'Participation'],
  },
  {
    name: 'Katie Fletcher',
    role: 'Director',
    location: null,
    background:
      'Katie brings experience in community engagement and sport. She contributes to Tiny Sports\' approach to working with partner clubs and coaches, ensuring the organisation stays focused on practical outcomes for athletes rather than bureaucratic process.',
    linkedin: null,
    tags: ['Community Engagement', 'Sport'],
  },
  {
    name: 'James Pearce',
    role: 'Director',
    location: 'New Zealand',
    background:
      'James brings an international perspective to the board. Based in New Zealand, he contributes experience in sport and community development, and participates remotely in board meetings. His involvement reflects Tiny Sports\' commitment to drawing on diverse expertise regardless of geography.',
    linkedin: null,
    tags: ['Sport', 'Community Development', 'International'],
  },
]

export default function BoardPage() {
  return (
    <div>
      {/* Hero */}
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Board
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Tiny Sports Limited is governed by a founding board with
              backgrounds spanning technology, architecture, education,
              and community sport. We operate as a volunteer board — no directors
              are paid.
            </p>
          </div>
        </div>
      </section>

      {/* Board members */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-xl border p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold">{member.name}</h2>
                    <p className="text-primary mt-0.5 text-sm font-semibold">
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
                      className="text-muted-foreground hover:text-primary shrink-0 transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  {member.background}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance note */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Governance</h2>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Tiny Sports Limited is a Company Limited by Guarantee incorporated
              under the Corporations Act 2001 (Cth). The board operates under a
              formal Constitution, Conflict of Interest Policy, and Financial
              Management Policy — all of which are available on request.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Directors are required to disclose any conflicts of interest and
              absent themselves from decisions where a conflict exists. We are
              applying for ACNC charity registration, which will unlock
              additional transparency obligations and DGR status.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/contact">
                  Request governance documents
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
