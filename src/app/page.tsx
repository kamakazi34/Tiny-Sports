import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const R2 = 'https://pub-b6f613d422474f1ea6487305aad291ed.r2.dev'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'Tiny Sports Limited',
  description:
    'Not-for-profit company that applies for and acquits government grants on behalf of Australian grassroots sports clubs and independent coaches.',
  url: 'https://tiny-sports.org',
  areaServed: 'Australia',
  email: 'jake.martin@tiny-sports.org',
}

const grantPrograms = [
  {
    name: 'Sporting Club Grants Program',
    body: 'Sport and Recreation Victoria',
    amounts: '$750 to $5,000 per category',
    status: 'Closed. Next round expected 2027',
    open: false,
  },
  {
    name: 'Category 1: Uniforms and Equipment',
    body: 'SRV Sporting Club Grants',
    amounts: 'Up to $1,000',
    status: 'Closed. Next round expected 2027',
    open: false,
  },
  {
    name: 'Category 3: Access and Events',
    body: 'SRV Sporting Club Grants',
    amounts: '$2,500 to $5,000',
    status: 'Closed. Next round expected 2027',
    open: false,
  },
  {
    name: 'Category 4: Travel',
    body: 'SRV Sporting Club Grants',
    amounts: '$750 per athlete, up to 8',
    status: 'Closed. Next round expected 2027',
    open: false,
  },
  {
    name: 'Active Clubs Funding',
    body: 'Sport and Recreation Queensland',
    amounts: 'Up to $2,500',
    status: 'Monitoring. Next round TBA',
    open: true,
  },
  {
    name: 'Emerging Athlete Pathways',
    body: 'Sport and Recreation Queensland',
    amounts: 'Various',
    status: 'Ongoing. Enquire for details',
    open: true,
  },
]

const compliance = [
  {
    title: 'Victorian Fair Play Code',
    body: 'We adhere to and promote the Fair Play Code across every program we support. Its five principles of integrity, respect, responsibility, fairness and safety are conditions of our partner agreements.',
    href: 'https://sport.vic.gov.au/publications-and-resources/community-sport-resources/fair-play-code',
    linkText: 'Fair Play Code, Sport and Recreation Victoria',
  },
  {
    title: 'Child Safe Standards',
    body: 'Where participants under 18 are involved, partner organisations must have implemented the Child Safe Standards, including workforce screening and documented child safety policies. We confirm this in every application.',
    href: 'https://ccyp.vic.gov.au/child-safe-standards',
    linkText: 'Child Safe Standards, CCYP Victoria',
  },
  {
    title: 'National Anti-Doping Policy',
    body: 'We comply with the Australian National Anti-Doping Scheme where required, and partner organisations are expected to meet Sport Integrity Australia requirements relevant to their level of competition.',
    href: 'https://www.sportintegrity.gov.au/what-we-do/anti-doping',
    linkText: 'Anti-Doping, Sport Integrity Australia',
  },
]

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero: solid forest panel + full-bleed photo */}
      <section className="bg-teal-700">
        <div className="grid lg:grid-cols-[5fr_6fr]">
          <div className="flex items-center px-4 py-16 sm:px-6 sm:py-24 lg:py-28 lg:pr-14 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <div className="max-w-xl">
              <p className="eyebrow-on-dark">Not-for-profit grant partner</p>
              <h1 className="font-heading mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                Grant funding for the people who actually run grassroots sport
              </h1>
              <p className="mt-6 text-lg leading-8 text-teal-100">
                Most community sport in Australia is run by sole-trader coaches
                and volunteer clubs who are locked out of government grants by
                their structure. Tiny Sports is the incorporated entity that
                applies on their behalf, then gets the funding to the athletes.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button
                  asChild
                  size="lg"
                  className="hover:bg-mint bg-white text-teal-800"
                >
                  <Link href="/how-it-works">How it works</Link>
                </Button>
                <Link
                  href="/who-we-help"
                  className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  Who we help &rarr;
                </Link>
              </div>
              <p className="mt-10 text-xs tracking-wide text-teal-300">
                Company Limited by Guarantee
              </p>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src={`${R2}/photos/img_0819.jpg`}
              alt="Jarasport triathlon athletes before the swim leg, Gold Coast"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* The funding gap */}
      <section className="border-border border-b py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">The problem</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The funding is there. The eligibility is not.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-ink text-lg leading-8">
                State grant programs exist to fund community sport. But if you
                coach as a sole trader, or run a club with no incorporated
                structure, most of those programs will not accept your
                application. The money sits unclaimed while the programs it was
                designed for go without.
              </p>
              <p className="text-muted-foreground mt-5 text-lg leading-8">
                Tiny Sports closes that gap. We are the incorporated
                not-for-profit that applies, receives and acquits the grant. Our
                partners keep doing what they do best: coaching athletes and
                running programs. Funds are only ever released for the approved
                purpose, under a formal partner agreement.
              </p>
              <p className="mt-8">
                <Link href="/about" className="link-teal text-sm font-semibold">
                  Read how Tiny Sports started &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three steps */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The model</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One partner, three steps
              </h2>
            </div>
            <Link
              href="/how-it-works"
              className="link-teal text-sm font-semibold"
            >
              The full six-step process &rarr;
            </Link>
          </div>
          <div className="border-border mt-14 grid gap-y-12 border-t pt-12 md:grid-cols-3 md:gap-x-12">
            {[
              {
                n: '01',
                title: 'You tell us about your program',
                body: 'A conversation, not a form. We ask who your athletes are and what the funding would pay for, then check your eligibility for free.',
              },
              {
                n: '02',
                title: 'We write and lodge the application',
                body: 'The application goes in under Tiny Sports, the incorporated entity grant programs require. You review everything before it is submitted.',
              },
              {
                n: '03',
                title: 'Funding reaches your athletes',
                body: 'Approved funds flow to your program under a partner agreement, spent only on the approved items. We handle the acquittal reporting.',
              },
            ].map((step) => (
              <div key={step.n}>
                <p className="font-heading text-5xl font-extrabold text-teal-200">
                  {step.n}
                </p>
                <h3 className="font-heading mt-4 text-xl font-bold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-7">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width photo band */}
      <section className="relative">
        <div className="relative h-[340px] sm:h-[440px]">
          <Image
            src={`${R2}/photos/img_0844.jpg`}
            alt="Athletes running into the surf at the start of a triathlon"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
            sizes="100vw"
          />
        </div>
        <p className="text-muted-foreground mx-auto max-w-7xl px-4 py-3 text-xs sm:px-6 lg:px-8">
          Jarasport athletes at a Gold Coast triathlon. All photography on this
          site is of real athletes from our partner programs.
        </p>
      </section>

      {/* Grant programs table */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Funding landscape</p>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Grant programs we work with
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Current focus: Victorian and Queensland state programs, with
              national coverage growing as the partner network expands. Status
              shown as at the last review.
            </p>
          </div>
          <div className="border-border mt-12 border-t">
            {grantPrograms.map((grant) => (
              <div
                key={grant.name}
                className="border-border grid gap-1 border-b py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
              >
                <div className="sm:col-span-5">
                  <h3 className="font-heading font-bold">{grant.name}</h3>
                  <p className="text-muted-foreground text-sm">{grant.body}</p>
                </div>
                <p className="text-sm font-medium sm:col-span-3">
                  {grant.amounts}
                </p>
                <p
                  className={`text-sm sm:col-span-4 sm:text-right ${
                    grant.open
                      ? 'font-medium text-amber-600'
                      : 'text-muted-foreground'
                  }`}
                >
                  {grant.status}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/grants" className="link-teal text-sm font-semibold">
              View all grant guides &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Jarasport story */}
      <section className="bg-mint py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <p className="eyebrow">Founding partner</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl">
                Jarasport is the reason Tiny Sports exists
              </h2>
              <p className="text-ink mt-6 text-lg leading-8">
                Jarasport is an independent triathlon and cycling coaching
                program in Victoria. Coach Simon has taken athletes from their
                first session through to ITU Triathlon World Championships.
              </p>
              <p className="text-ink/80 mt-4 leading-8">
                As a sole trader, Jarasport was ineligible for every Sport and
                Recreation Victoria grant category, despite running exactly the
                kind of community program those grants were created to fund.
                Working through that problem with Simon became the model for
                Tiny Sports: one incorporated entity, applying on behalf of the
                programs that cannot.
              </p>
              <dl className="border-mint-mid bg-mint-mid mt-8 grid grid-cols-1 gap-px border sm:grid-cols-3">
                {[
                  { label: 'Sport', value: 'Triathlon and cycling' },
                  { label: 'Location', value: 'Victoria' },
                  { label: 'Athletes at', value: 'ITU World Championships' },
                ].map((item) => (
                  <div key={item.label} className="bg-white px-5 py-4">
                    <dt className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      {item.label}
                    </dt>
                    <dd className="font-heading mt-1 text-sm font-bold">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-9">
                <Button asChild size="lg">
                  <Link href="/contact">Partner with us</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="relative aspect-[16/9]">
                <Image
                  src={`${R2}/photos/img_0833.jpg`}
                  alt="Jarasport athletes on the beach before a triathlon swim start"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square">
                  <Image
                    src={`${R2}/photos/img_0858.jpg`}
                    alt="Two athletes running into the surf at a swim start"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={`${R2}/photos/img_1164.jpg`}
                    alt="Jarasport cyclist racing on a closed road course"
                    fill
                    className="object-cover object-bottom"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Standards</p>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The conditions we hold ourselves and our partners to
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              These are requirements of government grant funding, and of working
              with us.
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {compliance.map((item) => (
              <div key={item.title} className="border-t-2 border-teal-700 pt-6">
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-6">
                  {item.body}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-teal mt-4 inline-block text-sm font-semibold"
                >
                  {item.linkText} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-teal-700 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Is your program missing out on funding?
            </h2>
            <p className="mt-4 text-lg leading-8 text-teal-100">
              If you coach or run a community sports program in Victoria or
              Queensland, there is a reasonable chance funding exists that you
              cannot currently reach. The eligibility check is free and we will
              give you an honest answer either way.
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
                href="/how-it-works"
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                See the process first &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
