import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Donate Your Tri Bike',
  description:
    "Donate your road or triathlon bike to an athlete who needs it. Tiny Sports collects, safety-checks, refurbishes, and donates bikes to athletes who can't afford one.",
}

const donateMailto = `mailto:jake.martin@tiny-sports.org?subject=Bike%20Donation&body=Hi%20Tiny%20Sports%2C%0A%0AI%20would%20like%20to%20donate%20a%20bike.%0A%0AMy%20name%3A%20%0ABike%20details%20(brand%2C%20model%2C%20frame%20size)%3A%20%0ALocation%20(suburb%20%26%20state)%3A%20%0ACondition%20and%20any%20known%20issues%3A%20%0A%0AThanks%2C`

const partnerMailto = `mailto:jake.martin@tiny-sports.org?subject=Bike%20Program%20%E2%80%94%20Workshop%20Partnership&body=Hi%20Tiny%20Sports%2C%0A%0AI%27m%20interested%20in%20volunteering%20as%20a%20mechanic%20or%20workshop%20partner%20for%20the%20Donate%20a%20Bike%20program.%0A%0AName%20or%20business%3A%20%0ALocation%20(suburb%20%26%20state)%3A%20%0AWhat%20I%20can%20offer%3A%20%0A%0AThanks%2C`

const accepted = [
  'Road bikes, any brand, any age',
  'Triathlon and time trial bikes',
  'Bikes that need repairs or a service',
  'Bikes with missing components, we will source parts',
  'Complete setups including wheels, helmets and kit',
]

const partnerTasks = [
  'Carry out safety inspections on donated bikes',
  'Service and refurbish bikes to ride-ready standard',
  'Source or supply consumable parts at cost or donated',
  'Fit and size bikes for recipient athletes where possible',
]

export default function DonateBikePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-teal-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark">Equipment program</p>
            <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Donate your tri bike
            </h1>
            <p className="mt-6 text-lg leading-8 text-teal-100">
              We collect, safety-check, refurbish and donate road and triathlon
              bikes to athletes who cannot afford one. If your bike is gathering
              dust, it could be changing someone&apos;s race season.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="hover:bg-mint bg-white text-teal-800"
              >
                <a href={donateMailto}>Email us your bike details</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How the program works */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">The program</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                How it works
              </h2>
              <div className="text-ink/85 mt-6 space-y-5 leading-8">
                <p>
                  Many talented athletes never reach their potential because
                  equipment costs are simply out of reach. A triathlon bike can
                  cost thousands of dollars, a barrier that has nothing to do
                  with ability or dedication.
                </p>
                <p>
                  Tiny Sports partners with local mechanics and workshops to
                  collect donated bikes, carry out a full safety check and
                  refurbishment, then match them to athletes through our
                  coaching partners.
                </p>
                <p>
                  Every donated bike stays in sport. Every athlete who receives
                  one can focus on training and competing.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="divide-border border-border divide-y border-y">
                {[
                  {
                    n: '01',
                    title: 'You donate',
                    desc: 'Drop off or arrange collection of your bike anywhere in Australia.',
                  },
                  {
                    n: '02',
                    title: 'We refurbish',
                    desc: 'Volunteer mechanics safety-check and restore the bike to ride-ready condition.',
                  },
                  {
                    n: '03',
                    title: 'We match',
                    desc: 'We work with coaching partners to identify athletes who need a bike.',
                  },
                  {
                    n: '04',
                    title: 'They ride',
                    desc: 'The bike goes to an athlete who could not otherwise afford to compete.',
                  },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex items-baseline gap-6 py-5">
                    <p className="font-heading text-2xl font-extrabold text-teal-300">
                      {n}
                    </p>
                    <div>
                      <p className="font-heading font-bold">{title}</p>
                      <p className="text-muted-foreground mt-1 text-sm leading-6">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we accept */}
      <section className="bg-mint py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Donations</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-teal-900">
                What we accept
              </h2>
              <p className="text-ink/80 mt-4 leading-7">
                Every donated bike is safety-checked and refurbished before it
                goes to an athlete, so even if yours needs work, we want to hear
                from you.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="divide-mint-mid border-mint-mid divide-y border-y">
                {accepted.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 py-3.5">
                    <span
                      aria-hidden
                      className="h-2 w-2 shrink-0 bg-teal-500"
                    />
                    <span className="text-ink leading-6">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-ink/70 mt-5 text-sm leading-6">
                We do not currently accept mountain bikes, BMX bikes, or
                children&apos;s bikes. If you are unsure, email us and we will
                let you know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate details */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Ready to donate?</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                Send us your bike details
              </h2>
              <p className="text-muted-foreground mt-4 leading-8">
                Email us with your bike details and we will take it from there.
                Include as much detail as you can and we will get back to you
                within two business days.
              </p>
              <dl className="divide-border border-border mt-8 divide-y border-y text-sm">
                <div className="grid grid-cols-3 gap-4 py-3.5">
                  <dt className="font-semibold">Email</dt>
                  <dd className="col-span-2">
                    <a href={donateMailto} className="link-teal font-medium">
                      jake.martin@tiny-sports.org
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-3.5">
                  <dt className="font-semibold">Subject line</dt>
                  <dd className="text-muted-foreground col-span-2">
                    Bike Donation
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-3.5">
                  <dt className="font-semibold">Include</dt>
                  <dd className="text-muted-foreground col-span-2">
                    Your name; bike brand, model and frame size; your suburb and
                    state; condition and any known issues.
                  </dd>
                </div>
              </dl>
              <div className="mt-8">
                <Button asChild size="lg">
                  <a href={donateMailto}>Email us your bike details</a>
                </Button>
              </div>
            </div>
            <div>
              <p className="eyebrow">Mechanics and workshops</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                Partner with us
              </h2>
              <p className="text-muted-foreground mt-4 leading-8">
                The program runs on the skills of volunteer mechanics and
                workshops who give their time to get bikes back on the road. If
                you run a bike shop, work as a mechanic, or know your way around
                a drivetrain, we want to hear from you.
              </p>
              <ul className="divide-border border-border mt-8 divide-y border-y">
                {partnerTasks.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 py-3.5 text-sm"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 bg-teal-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-5 text-sm leading-6">
                Partner workshops are credited on the Tiny Sports website and in
                communications to recipient athletes and their clubs.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <a href={partnerMailto}>Express interest as a partner</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-teal-700 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Not donating a bike but still want to help?
              </h2>
              <p className="mt-3 leading-7 text-teal-100">
                Tiny Sports also helps community sports clubs and independent
                coaches access government grants. If your program is missing out
                on funding, get in touch.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-5">
              <Button asChild className="hover:bg-mint bg-white text-teal-800">
                <Link href="/contact">Get in touch</Link>
              </Button>
              <Link
                href="/about"
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                About Tiny Sports &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
