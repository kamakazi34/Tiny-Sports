import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
    subtitle: 'Sole traders',
    description:
      'If you run a coaching program as a sole trader, in triathlon, cycling, swimming, athletics, team sports, martial arts or anything else, you are almost certainly ineligible to apply for Sport and Recreation Victoria or Queensland Active Clubs grants directly. Those programs require an incorporated entity. Tiny Sports is that entity.',
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
      'Many small clubs have the volunteers, the athletes and the programs, but not the time or expertise to write grant applications. A club secretary who also coaches three nights a week cannot spend another 20 hours researching and writing an application. We do the grant work so your volunteers can focus on the sport.',
    details: [
      'Clubs with fewer than 200 members',
      'Clubs without paid administrative staff',
      'Clubs that have never applied for a government grant',
      'Clubs that applied unsuccessfully in the past',
      'Newly incorporated clubs building their first grant track record',
    ],
    image: `${R2}/photos/s0000162.jpg`,
    imageAlt: 'Group of cyclists on a beachside path',
  },
  {
    title: 'Programs serving disadvantaged athletes',
    subtitle: 'Removing barriers',
    description:
      'Grants for community sport exist to increase participation, particularly for athletes facing financial, geographic or social barriers. Programs working with low-income families, Indigenous communities, athletes with disabilities, or young people in under-resourced areas are exactly what these grants are designed to fund. Tiny Sports prioritises these programs.',
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
  'Running and athletics',
  'Football (all codes)',
  'Netball',
  'Basketball',
  'Tennis',
  'Martial arts',
  'Gymnastics',
  'Rowing',
  'Water polo',
  'Volleyball',
]

export default function WhoWeHelpPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-border border-b py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow">Who we help</p>
              <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Locked out by structure, not by merit
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-8">
                Tiny Sports works with independent coaches and small community
                sports clubs who cannot reach government grants because of how
                they are structured, not because their programs are unworthy of
                funding.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Talk to us about your program</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${R2}/photos/img_0833.jpg`}
                  alt="Jarasport athletes on the beach before a triathlon event"
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

      {/* The incorporation gap */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">The gap</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                The incorporation gap
              </h2>
            </div>
            <div className="text-ink/85 space-y-5 leading-8 lg:col-span-7 lg:col-start-6">
              <p>
                Government grant programs for grassroots sport typically require
                applicants to be incorporated: a company, an association, or a
                registered body. The requirement exists for good reasons. It
                provides accountability, governance, and an entity that can
                enter into legal agreements.
              </p>
              <p>
                The problem is that much of the best grassroots sport in
                Australia is run by individual coaches who never incorporated.
                They did not need to. They just started coaching and their
                programs grew. Now there is funding available that they cannot
                touch because of how they are structured, not because of what
                they are doing.
              </p>
              <p className="text-ink font-semibold">
                Tiny Sports closes that gap. We provide the incorporated
                structure. The coach keeps running their program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="bg-mint py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Three profiles</p>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-teal-900">
              The programs we support
            </h2>
          </div>
          <div className="mt-14 space-y-20">
            {profiles.map((profile, index) => (
              <div
                key={profile.title}
                className={`grid gap-10 lg:grid-cols-12 lg:items-start ${
                  index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div
                  className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-8' : ''}`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={profile.image}
                      alt={profile.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                </div>
                <div
                  className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-7'}`}
                >
                  <p className="eyebrow">{profile.subtitle}</p>
                  <h3 className="font-heading mt-2 text-2xl font-bold text-teal-900">
                    {profile.title}
                  </h3>
                  <p className="text-ink/85 mt-4 leading-7">
                    {profile.description}
                  </p>
                  <ul className="divide-mint-mid border-mint-mid mt-6 divide-y border-y">
                    {profile.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-ink/80 flex items-baseline gap-3 py-2.5 text-sm"
                      >
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 shrink-0 bg-teal-500"
                        />
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

      {/* Sports */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Sport-agnostic</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                Sports we work with
              </h2>
              <p className="text-muted-foreground mt-4 leading-7">
                The grant programs we work with cover all community sports. If
                your sport is not listed, that is not a barrier. We can assess
                your eligibility either way.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
                {sports.map((sport) => (
                  <li
                    key={sport}
                    className="border-border border-b py-3 text-sm font-medium"
                  >
                    {sport}
                  </li>
                ))}
                <li className="border-border text-muted-foreground border-b py-3 text-sm font-medium">
                  All other community sports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geography + Jarasport */}
      <section className="border-border border-t py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Where we operate</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                Victoria and Queensland first
              </h2>
              <div className="text-ink/85 mt-6 space-y-5 leading-8">
                <p>
                  Tiny Sports was incorporated in 2026 and is currently focused
                  on grant programs in Victoria and Queensland, where the SRV
                  Sporting Club Grants Program and Queensland&apos;s Active
                  Clubs funding are active.
                </p>
                <p>
                  Our first partner program, Jarasport, is based in Victoria. We
                  are actively seeking partner coaches and clubs in Queensland,
                  New South Wales and other states.
                </p>
                <p>
                  Geographic scope will expand as we build our grant track
                  record. If you are based elsewhere, get in touch anyway. It is
                  worth a conversation.
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow">Founding partner</p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight">
                Jarasport, the proof of concept
              </h2>
              <div className="text-ink/85 mt-6 space-y-5 leading-7">
                <p>
                  Jarasport is Tiny Sports&apos; founding partner program: a
                  triathlon and cycling coaching operation in Victoria run by
                  Coach Simon, whose athletes have competed at ITU World
                  Championships level.
                </p>
                <p>
                  Coach Simon operates as a sole trader. Despite outstanding
                  results at community level, Jarasport could not access Sport
                  and Recreation Victoria grants without an incorporated
                  partner. Tiny Sports was built to solve exactly this problem.
                </p>
                <p>
                  We are now looking to replicate the model with coaches and
                  clubs across Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Does this sound like your program?
            </h2>
            <p className="mt-4 text-lg leading-8 text-teal-100">
              Get in touch. We will ask a few questions about your program and
              let you know whether there is funding available and whether Tiny
              Sports can help you access it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button
                asChild
                size="lg"
                className="hover:bg-mint bg-white text-teal-800"
              >
                <Link href="/contact">Talk to us</Link>
              </Button>
              <Link
                href="/how-it-works"
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                How it works &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
