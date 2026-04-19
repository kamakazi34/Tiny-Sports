import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const R2 = 'https://pub-b6f613d422474f1ea6487305aad291ed.r2.dev'

export const metadata: Metadata = {
  title: 'Who We Help',
  description:
    'Tiny Sports supports independent coaches and small community sports clubs across Australia who cannot access government grants directly.',
}

const profiles = [
  {
    title: 'Independent coaches',
    subtitle: 'Operating as sole traders',
    description:
      "If you run a coaching program as a sole trader — triathlon, cycling, swimming, athletics, team sports, martial arts, or anything else — you are almost certainly ineligible to apply for Sport and Recreation Victoria or Queensland Active Clubs grants directly. These programs require an incorporated entity. Tiny Sports is that entity.",
    details: [
      'Triathlon and multisport coaches',
      'Road and track cycling coaches',
      'Swimming and aquatics coaches',
      'Athletics and running coaches',
      'Strength and conditioning coaches serving community athletes',
      'Coaches across all sporting disciplines at community level',
    ],
    image: `${R2}/photos/img_1164.jpg`,
    imageAlt: 'Cyclist on a closed road course',
  },
  {
    title: 'Small community sports clubs',
    subtitle: 'Limited admin capacity',
    description:
      "Many small clubs have the volunteers, the athletes, and the programs — but not the time or expertise to write grant applications. A club secretary who is also coaching three nights a week cannot also spend 20 hours researching and writing a grant application. We do the grant work so your volunteers can focus on the sport.",
    details: [
      'Clubs with fewer than 200 members',
      'Clubs without paid administrative staff',
      'Clubs that have never applied for a government grant before',
      'Clubs that applied unsuccessfully in the past',
      'Newly incorporated clubs building their first grant track record',
    ],
    image: `${R2}/photos/s0000162.jpg`,
    imageAlt: 'Group of cyclists on a beachside path',
  },
  {
    title: 'Programs serving disadvantaged athletes',
    subtitle: 'Removing barriers to participation',
    description:
      "Government grants for community sport exist to increase participation — particularly for athletes facing financial, geographic, or social barriers. Programs that work with low-income families, Indigenous communities, athletes with disabilities, or young people in under-resourced areas are exactly what these grants are designed to fund. Tiny Sports prioritises these programs.",
    details: [
      'Programs serving athletes from low-income households',
      'Indigenous community sport programs',
      'Disability sports and inclusive programs',
      'Rural and regional programs where participation costs are higher',
      'Youth programs in areas with limited sporting infrastructure',
      'Programs for recently arrived communities and refugees',
    ],
    image: `${R2}/photos/img_2272.jpg`,
    imageAlt: 'Female athlete running mid-race',
  },
]

const sports = [
  'Triathlon',
  'Road cycling',
  'Track cycling',
  'Swimming',
  'Running / athletics',
  'Football (all codes)',
  'Netball',
  'Basketball',
  'Tennis',
  'Martial arts',
  'Gymnastics',
  'Rowing',
  'Water polo',
  'Volleyball',
  'And all other community sports',
]

export default function WhoWeHelpPage() {
  return (
    <div>
      {/* Hero */}
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Who we help
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-8">
                Tiny Sports works with independent coaches and small community
                sports clubs who are locked out of government grants because of
                how they are structured — not because their programs are not
                worthy of funding.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Talk to us about your program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:mt-0">
              <Image
                src={`${R2}/photos/img_0833.jpg`}
                alt="Jarasport athletes on the beach before a triathlon event"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The core insight */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              The incorporation gap
            </h2>
            <div className="text-muted-foreground mt-6 space-y-4 text-lg leading-8">
              <p>
                Government grant programs designed for grassroots sport
                typically require applicants to be an incorporated organisation
                — a company, an association, or a registered body. This
                requirement exists for good reasons: it provides accountability,
                governance, and an entity that can enter into legal agreements.
              </p>
              <p>
                The problem is that a lot of the best grassroots sport in
                Australia is run by individual coaches who never incorporated.
                They did not need to. They just started coaching and their
                programs grew. Now there is government funding available that
                they cannot touch because of how they are structured, not
                because of what they are doing.
              </p>
              <p>
                Tiny Sports closes that gap. We provide the incorporated
                structure. The coach keeps running their program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Three types of programs we support
            </h2>
          </div>
          <div className="mt-16 space-y-16">
            {profiles.map((profile, index) => (
              <div
                key={profile.title}
                className={`lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:mb-0">
                  <Image
                    src={profile.image}
                    alt={profile.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                    {profile.subtitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{profile.title}</h3>
                  <p className="text-muted-foreground mt-4 text-base leading-7">
                    {profile.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {profile.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-muted-foreground flex items-center gap-2 text-sm"
                      >
                        <div className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports we cover */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Sports we work with
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Tiny Sports is sport-agnostic. The grant programs we work with
              cover all community sports. If you coach or run a club in any of
              the following sports — or any sport not listed — we can assess
              your eligibility.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {sports.map((sport) => (
              <span
                key={sport}
                className="bg-muted text-muted-foreground rounded-full px-4 py-2 text-sm font-medium"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Where we operate
              </h2>
              <div className="text-muted-foreground mt-6 space-y-4 text-lg leading-8">
                <p>
                  Tiny Sports was incorporated in 2026 and is currently focused
                  on grant programs in Victoria and Queensland, where the
                  Sport and Recreation Victoria Sporting Club Grants Program and
                  Sport and Recreation Queensland&apos;s Active Clubs funding
                  are active.
                </p>
                <p>
                  Our first partner program, Jarasport, is based in Victoria.
                  We are actively seeking partner coaches and clubs in
                  Queensland, New South Wales, and other states.
                </p>
                <p>
                  Geographic scope will expand as we build our grant track
                  record. If you are based outside Victoria or Queensland, get
                  in touch — it is worth a conversation.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Partner spotlight: Jarasport
              </h2>
              <div className="text-muted-foreground mt-6 space-y-4 text-base leading-7">
                <p>
                  Jarasport is Tiny Sports&apos; founding partner program — a
                  triathlon and cycling coaching operation in Victoria run by
                  Coach Simon, whose athletes have competed at ITU World
                  Championships level.
                </p>
                <p>
                  Coach Simon operates as a sole trader. Despite producing
                  outstanding results at community level, Jarasport could not
                  access Sport and Recreation Victoria grants without an
                  incorporated partner. Tiny Sports was built to solve exactly
                  this problem.
                </p>
                <p>
                  Jarasport is the proof of concept. We are now looking to
                  replicate this model with coaches and clubs across Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-teal-50 px-8 py-16 text-center sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Does this sound like your program?
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
              Get in touch. We will ask a few questions about your program and
              let you know whether there is funding available and whether Tiny
              Sports can help you access it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Talk to us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/how-it-works">How it works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
