import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const R2 = 'https://pub-b6f613d422474f1ea6487305aad291ed.r2.dev'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'How Tiny Sports helps grassroots clubs and coaches access government grants, from first conversation to acquittal.',
}

const steps = [
  {
    number: '01',
    title: 'Tell us about your program',
    description:
      'Get in touch and tell us about your club or coaching program. Who are your athletes? What do you need funding for? We ask a few simple questions to understand your situation.',
    detail:
      'No formal application at this stage, just a conversation. We work with coaches who run community programs as sole traders, small clubs without the administrative resources to apply independently, and programs serving athletes who face financial barriers to participation.',
  },
  {
    number: '02',
    title: 'We assess your eligibility, free',
    description:
      'We review the current grant landscape and identify which programs your situation is eligible for. We tell you what is available, the amounts, and what a realistic application looks like.',
    detail:
      "The assessment carries no obligation. We only proceed if there is a genuine funding opportunity that makes sense for your program, and we will say so plainly if we think an application is unlikely to succeed. Grant assessors are experienced readers and a weak application wastes everyone's time.",
  },
  {
    number: '03',
    title: 'We write the application together',
    description:
      'You know your program. We know how to frame it for a grant assessor. We draft the application, ask you for the specifics we need, and you review and sign off before anything is submitted.',
    detail:
      "The application is submitted in Tiny Sports' name, because Tiny Sports is the incorporated entity eligible to receive government funding. Your program is the partner that delivers the funded activity. Your program gets the funding, Tiny Sports handles the paperwork.",
  },
  {
    number: '04',
    title: 'Tiny Sports submits and manages the process',
    description:
      'We lodge the application, respond to assessor queries, and manage the process through to a decision. You do not need to deal with the grant body directly.',
    detail:
      'Government grant programs can take 6 to 12 weeks to assess. We track the status and keep you informed. If additional information is requested, we handle it. If the application is unsuccessful, we assess whether it is worth reapplying in the next round.',
  },
  {
    number: '05',
    title: 'Funding approved, money reaches your program',
    description:
      'Grant funds are paid into the Tiny Sports bank account, then disbursed to your program under a Partner Service Agreement for the approved activity.',
    detail:
      'The agreement specifies exactly what the funding is for, how it will be spent, and the timeline. Funds are only released for the approved purpose. This is a requirement of government grant programs and it protects both your program and Tiny Sports.',
  },
  {
    number: '06',
    title: 'Acquittal, we handle the reporting',
    description:
      'Most government grants require an acquittal report after the funded activity is complete. We prepare it from the receipts and outcomes you provide, and you review it before submission.',
    detail:
      'A strong acquittal builds our track record with the grant body and makes future applications stronger. It also provides the evidence base for case studies and impact reporting, which helps secure more funding for your program and others like it.',
  },
]

const eligibility = [
  'Independent coaches operating as sole traders',
  'Small community sports clubs with limited admin capacity',
  'Programs serving athletes facing financial barriers to participation',
  'Clubs without existing government grant relationships',
  'Programs in Victoria or Queensland, our current focus, expanding nationally',
]

const notEligible = [
  'Professional or semi-professional sporting organisations',
  'Programs primarily focused on elite performance pathways',
  'Businesses seeking commercial grant funding',
  'Programs that have already applied for the same grant',
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-border border-b py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow">The process</p>
              <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                How it works
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-8">
                Tiny Sports acts as the incorporated entity that applies for
                government grants on behalf of grassroots clubs and coaches who
                cannot access that funding directly. This is the process from
                first contact to funded outcome.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get started</Link>
                </Button>
                <Link
                  href="/who-we-help"
                  className="link-teal text-sm font-semibold"
                >
                  Who we help &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${R2}/photos/img_0844.jpg`}
                  alt="Athletes running into the surf at a triathlon event"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Why this exists</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                Sole traders cannot apply. So we do.
              </h2>
            </div>
            <div className="text-ink/85 space-y-5 leading-8 lg:col-span-7 lg:col-start-6">
              <p>
                Government grants for community sport are designed to help
                grassroots programs, but many of the coaches running those
                programs are ineligible to apply. If you operate as a sole
                trader, most state grant programs will not accept your
                application. You need to be an incorporated organisation.
              </p>
              <p>
                Incorporating costs time and money, requires ongoing ASIC
                compliance, and often is not practical for a coach whose focus
                is their athletes rather than their paperwork. So the funding
                sits unused while the programs that need it most are locked out.
              </p>
              <p className="text-ink font-semibold">
                Tiny Sports is the incorporated entity. We apply. You deliver
                the program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-mint py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Step by step</p>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-teal-900">
              From first contact to funded program
            </h2>
          </div>
          <div className="mt-14">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border-mint-mid grid gap-4 border-t py-10 first:border-t-0 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-2">
                  <p className="font-heading text-5xl font-extrabold text-teal-700/25">
                    {step.number}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-heading text-xl font-bold text-teal-900">
                    {step.title}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-ink leading-7">{step.description}</p>
                  <p className="text-ink/70 mt-3 text-sm leading-6">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Eligibility</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                Who can apply
              </h2>
              <p className="text-muted-foreground mt-4 leading-8">
                We work with coaches and clubs doing the right thing for their
                athletes who cannot access government funding directly.
              </p>
              <ul className="divide-border border-border mt-8 divide-y border-y">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 py-3.5">
                    <span
                      aria-hidden
                      className="h-2 w-2 shrink-0 translate-y-[-1px] bg-teal-500"
                    />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Out of scope</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                Who we cannot help yet
              </h2>
              <p className="text-muted-foreground mt-4 leading-8">
                Government grants for community sport have specific criteria.
                Some situations fall outside what we can support.
              </p>
              <ul className="divide-border border-border mt-8 divide-y border-y">
                {notEligible.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 py-3.5">
                    <span
                      aria-hidden
                      className="bg-border h-2 w-2 shrink-0 translate-y-[-1px]"
                    />
                    <span className="text-muted-foreground leading-6">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 text-sm leading-6">
                Not sure whether your program is eligible? Get in touch and we
                will give you an honest answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
                Ready to find out what funding is available?
              </h2>
              <p className="mt-5 text-lg leading-8 text-teal-100">
                The eligibility check is free. Tell us about your program and we
                will let you know what grants exist and whether an application
                is worth pursuing.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button
                  asChild
                  size="lg"
                  className="hover:bg-mint bg-white text-teal-800"
                >
                  <Link href="/contact">Check your eligibility</Link>
                </Button>
                <Link
                  href="/grants"
                  className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  View grant programs &rarr;
                </Link>
              </div>
            </div>
            <div className="relative hidden aspect-[4/3] lg:block">
              <Image
                src={`${R2}/photos/img_0907.jpg`}
                alt="Cyclist on a closed road course with the Gold Coast skyline behind"
                fill
                className="object-cover object-center"
                sizes="45vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
