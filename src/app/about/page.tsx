import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const R2 = 'https://pub-b6f613d422474f1ea6487305aad291ed.r2.dev'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Tiny Sports Limited is a not-for-profit Company Limited by Guarantee that applies for government grants on behalf of Australian grassroots sports clubs and independent coaches.',
}

const values = [
  {
    title: 'Athletes first',
    description:
      'Every decision is made in service of the athletes and communities our partner clubs serve. Funding is a means to an end, and that end is more people playing sport.',
  },
  {
    title: 'Inclusion',
    description:
      'Sport is for everyone. We prioritise programs that remove financial barriers to participation and welcome athletes of all backgrounds and abilities.',
  },
  {
    title: 'Practical over perfect',
    description:
      'We are a small, new organisation. If we can get funding to one club this month, that matters more than a perfect strategy document.',
  },
  {
    title: 'Transparency',
    description:
      'Our governance documents, conflict of interest policies and financials are available to anyone who asks.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-border border-b py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">About Tiny Sports</p>
            <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Built to get grant funding past the eligibility wall
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Tiny Sports Limited is a not-for-profit Company Limited by
              Guarantee. We exist so that grassroots clubs and sole-trader
              coaches can reach the government funding they are effectively
              eligible for but structurally unable to apply for.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${R2}/photos/img_0819.jpg`}
                  alt="Jarasport athletes at a Gold Coast triathlon"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <p className="text-muted-foreground mt-3 text-xs">
                Jarasport athletes, Gold Coast. The program that started it all.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow">How we started</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                One coach, thousands of dollars out of reach
              </h2>
              <div className="text-ink/85 mt-6 space-y-5 leading-8">
                <p>
                  Tiny Sports was founded in 2026 by Jake Martin, a sports
                  architect and community sport advocate based in Brisbane. The
                  idea came directly from working with Jarasport, a triathlon
                  coaching program in Victoria run by Coach Simon, whose
                  athletes have competed at World Championship level.
                </p>
                <p>
                  Simon&apos;s program was doing everything right: developing
                  athletes, building community, producing results. But as a sole
                  trader he was ineligible to apply for Sport and Recreation
                  Victoria grants directly. Thousands of dollars in available
                  funding sat on the table, unreachable.
                </p>
                <p>
                  The fix was structural. Set up a not-for-profit company that
                  can act as the incorporated entity, apply for grants on behalf
                  of programs like Jarasport, and get the funding to the
                  athletes who need it. That is Tiny Sports.
                </p>
                <p>
                  We incorporated with ASIC in April 2026, governed by a
                  six-person founding board, and are now building a partner
                  network of coaches and clubs across Australia. We are small by
                  design and focused entirely on making the grant system work
                  for the people locked out of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="bg-mint py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Structure</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-teal-900">
                A real company, run properly
              </h2>
            </div>
            <div className="text-ink/85 space-y-5 leading-8 lg:col-span-7 lg:col-start-6">
              <p>
                Tiny Sports Limited is a Company Limited by Guarantee
                incorporated under the Corporations Act 2001 (Cth) and regulated
                by ASIC. No profits are distributed to directors or members.
              </p>
              <p>
                We are governed by a founding board of directors under a formal
                Constitution, Conflict of Interest Policy, Financial Management
                Policy and Privacy Policy. We are applying for ACNC charity
                registration, which will unlock DGR status and tax-exempt
                treatment.
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
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">What we stand for</p>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
            Our values
          </h2>
          <div className="border-border mt-12 grid gap-x-12 gap-y-10 border-t pt-12 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="font-heading text-xl font-bold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-7">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board cross-link */}
      <section className="bg-teal-700 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Governed by a volunteer founding board
              </h2>
              <p className="mt-3 leading-7 text-teal-100">
                Backgrounds in technology, sport, education, architecture and
                community development. No director is paid.
              </p>
            </div>
            <Link
              href="/board"
              className="shrink-0 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Meet the board &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
