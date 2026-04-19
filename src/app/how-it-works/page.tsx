import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const R2 = 'https://pub-b6f613d422474f1ea6487305aad291ed.r2.dev'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'How Tiny Sports helps grassroots clubs and coaches access government grants — a simple, step-by-step guide.',
}

const steps = [
  {
    number: '01',
    title: 'Tell us about your program',
    description:
      'Get in touch and tell us about your club or coaching program. Who are your athletes? What do you need funding for? We ask a few simple questions to understand your situation.',
    detail:
      'No formal application needed at this stage — just a conversation. We work with coaches who run community programs as sole traders, small clubs that lack the administrative resources to apply independently, and programs serving athletes who face financial barriers to participation.',
  },
  {
    number: '02',
    title: 'We assess your eligibility — for free',
    description:
      "We review the current grant landscape and identify which programs your situation is eligible for. We'll tell you what's available, what the amounts are, and what a realistic application looks like.",
    detail:
      'This assessment is free and carries no obligation. We only proceed if there is a genuine funding opportunity that makes sense for your program. We will be honest if we do not think an application is likely to succeed — grant assessors are experienced readers and a weak application wastes everyone\'s time.',
  },
  {
    number: '03',
    title: 'We write the application together',
    description:
      "You know your program. We know how to frame it for a grant assessor. We draft the application, ask you for the specific details we need — athlete numbers, budget items, program outcomes — and you review and sign off before anything is submitted.",
    detail:
      "The grant application is submitted in Tiny Sports' name, because Tiny Sports is the incorporated entity eligible to receive government funding. Your program is the partner that delivers the funded activity. This is the core of how the model works — your program gets the funding, Tiny Sports handles the paperwork.",
  },
  {
    number: '04',
    title: 'Tiny Sports submits and manages the process',
    description:
      'We lodge the application, respond to any assessor queries, and manage the process through to a decision. You do not need to interact with the grant body directly.',
    detail:
      'Government grant programs can take 6–12 weeks to assess. We track the status and keep you informed. If additional information is requested, we handle it. If the application is unsuccessful, we assess whether it is worth reapplying in the next round.',
  },
  {
    number: '05',
    title: 'Funding approved — money reaches your program',
    description:
      'If the application is successful, the grant funds are paid into the Tiny Sports bank account. We then disburse the money to your program under a Partner Service Agreement for the approved activity.',
    detail:
      "The Partner Service Agreement specifies exactly what the funding is for, how it will be spent, and the timeline. Funds are only released for the approved purpose — this is a requirement of government grant programs and it protects both your program and Tiny Sports. You spend the money on the approved items and provide receipts.",
  },
  {
    number: '06',
    title: 'Acquittal — we handle the reporting',
    description:
      "Most government grants require an acquittal report after the funded activity is complete. We prepare this report, drawing on the receipts and outcome information you provide. You review it before it's submitted.",
    detail:
      'A strong acquittal builds our track record with the grant body and makes future applications stronger. It also provides the evidence base for case studies and impact reporting, which helps us secure more funding for your program and others like it.',
  },
]

const eligibility = [
  'Independent coaches operating as sole traders',
  'Small community sports clubs with limited admin capacity',
  'Programs serving athletes facing financial barriers to participation',
  'Clubs without existing government grant relationships',
  'Programs in Victoria or Queensland (our current focus — expanding nationally)',
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
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                How it works
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-8">
                Tiny Sports acts as the incorporated entity that applies for
                government grants on behalf of grassroots clubs and coaches who
                can&apos;t access that funding directly. Here is what the
                process looks like from first contact through to funded
                outcomes.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/who-we-help">Who we help</Link>
                </Button>
              </div>
            </div>
            <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:mt-0">
              <Image
                src={`${R2}/photos/img_0844.jpg`}
                alt="Athletes running into the surf at a triathlon event"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The core problem */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Why this exists
            </h2>
            <div className="text-muted-foreground mt-6 space-y-4 text-lg leading-8">
              <p>
                Government grants for community sport are designed to help
                grassroots programs — but many of the coaches running those
                programs are ineligible to apply. If you operate as a sole
                trader, most state government grant programs will not accept
                your application. You need to be an incorporated organisation.
              </p>
              <p>
                Incorporating costs time and money, requires ongoing ASIC
                compliance, and often isn&apos;t practical for a coach whose
                focus is their athletes — not their paperwork. So the funding
                sits unused while the programs that need it most are locked out.
              </p>
              <p>
                Tiny Sports is the incorporated entity. We apply. You deliver
                the program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              The process, step by step
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              From first contact to funded program — here is exactly what
              happens.
            </p>
          </div>
          <div className="mt-16 space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="lg:grid lg:grid-cols-[auto_1fr] lg:gap-12"
              >
                {/* Step number */}
                <div className="mb-4 lg:mb-0">
                  <div className="bg-primary flex h-16 w-16 items-center justify-center rounded-2xl">
                    <span className="text-primary-foreground text-xl font-bold">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="bg-border mx-auto mt-4 hidden h-full w-px lg:block" />
                  )}
                </div>
                {/* Content */}
                <div className="bg-card rounded-xl border p-8">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground mt-3 text-base leading-7">
                    {step.description}
                  </p>
                  <p className="text-muted-foreground mt-3 text-sm leading-6">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Who can apply
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Tiny Sports works with coaches and clubs who are doing the right
                thing for their athletes but cannot access government funding
                directly.
              </p>
              <ul className="mt-8 space-y-3">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-bold tracking-tight">
                Who we can&apos;t help (yet)
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Government grants for community sport have specific eligibility
                criteria. Some situations fall outside what we can support.
              </p>
              <ul className="mt-8 space-y-3">
                {notEligible.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span className="text-muted-foreground text-sm leading-6">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 text-sm">
                If you&apos;re not sure whether your program is eligible, get in
                touch. We will give you an honest answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo + CTA */}
      <section className="bg-teal-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:mb-0">
              <Image
                src={`${R2}/photos/img_0907.jpg`}
                alt="Cyclist on a closed road course, Gold Coast skyline in the background"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Ready to find out what funding is available?
              </h2>
              <p className="text-muted-foreground mt-6 text-lg leading-8">
                The eligibility check is free. Tell us about your program and
                we will let you know what grants exist and whether an
                application is likely to be worth pursuing.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Check your eligibility
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/grants">View grant programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
