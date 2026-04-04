import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Users, Target, Lightbulb } from 'lucide-react'

const R2 = 'https://pub-b6f613d422474f1ea6487305aad291ed.r2.dev'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Tiny Sports Limited — our mission to help Australian community sports clubs and independent coaches access government grants and build sustainable programs.',
}

const values = [
  {
    icon: Heart,
    title: 'Athletes First',
    description:
      'Every decision we make is in service of the athletes and communities our partner clubs serve. Funding is a means to an end — and that end is more people playing sport.',
  },
  {
    icon: Users,
    title: 'Inclusion',
    description:
      'Sport is for everyone. We specifically seek to support programs that remove financial barriers to participation and welcome athletes of all backgrounds and abilities.',
  },
  {
    icon: Target,
    title: 'Practical Over Perfect',
    description:
      "We are a small, new organisation. We move fast, do the work, and learn as we go. If we can get funding to one club this month, that matters more than a perfect strategy document.",
  },
  {
    icon: Lightbulb,
    title: 'Transparency',
    description:
      'We are a for-purpose organisation. Our governance documents, conflict of interest policies, and financials are available to anyone who asks.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Tiny Sports
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              A for-purpose Company Limited by Guarantee, founded to help
              Australian grassroots sports clubs and independent coaches access
              the government funding they&apos;re eligible for but can&apos;t
              reach on their own.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-10 lg:mb-0">
              <Image
                src={`${R2}/photos/img_0819.jpg`}
                alt="Jarasport athletes at triathlon event"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          <div className="mx-auto max-w-3xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight">How we started</h2>
            <div className="text-muted-foreground mt-6 space-y-4 text-lg leading-8">
              <p>
                Tiny Sports was founded in 2026 by Jake Martin, a sports
                architect and community sport advocate based in Brisbane. The
                idea came directly from working with Jarasport — a triathlon
                coaching program in Victoria run by coach Simon, whose athletes
                have competed at World Championship level.
              </p>
              <p>
                Simon&apos;s program was doing everything right: developing
                athletes, building community, producing results. But as a sole
                trader, he was ineligible to apply for Sport &amp; Recreation
                Victoria grants directly. Thousands of dollars in available
                funding was sitting on the table, unreachable.
              </p>
              <p>
                The solution was simple: set up a for-purpose organisation that could act
                as the incorporated entity, apply for grants on behalf of clubs
                like Jarasport, and get the funding to the athletes who needed
                it. That&apos;s Tiny Sports.
              </p>
              <p>
                We&apos;re in our founding year — incorporating with ASIC, governed
                by a five-person founding board, and currently submitting our
                first grant applications. We&apos;re small by design and focused entirely on
                making the grant system work for the clubs and coaches who are
                locked out of it.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Legal Structure */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Our structure</h2>
            <div className="text-muted-foreground mt-6 space-y-4 text-lg leading-8">
              <p>
                Tiny Sports Limited is a Company Limited by Guarantee (CLG)
                incorporated under the Corporations Act 2001 (Cth) and regulated
                by the Australian Securities and Investments Commission (ASIC).
                We operate as a for-purpose organisation — no profits are distributed to
                directors or members.
              </p>
              <p>
                We are governed by a five-person founding board and operate
                under a formal Constitution, Conflict of Interest Policy,
                Financial Management Policy, and Privacy Policy. We are applying
                for ACNC charity registration, which will unlock DGR (Deductible
                Gift Recipient) status and tax-exempt treatment.
              </p>
              <p>
                Our registered office is in Queensland. We operate nationally,
                with a current focus on Victorian and Queensland grant programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Our values
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                  <value.icon className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Founding board
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Tiny Sports Limited is governed by six founding directors with
              backgrounds in technology, sport, education, architecture, and community
              development.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { name: 'Jake Martin Alderman', role: 'Chairperson' },
                { name: 'Saxon Fletcher', role: 'Director' },
                { name: 'Jacques Vandenberg', role: 'Director' },
                { name: 'William Speirs', role: 'Director' },
                { name: 'Katie Fletcher', role: 'Director' },
                { name: 'James Pearce', role: 'Director' },
              ].map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-lg border px-5 py-4"
                >
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
