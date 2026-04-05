import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const R2 = 'https://pub-b6f613d422474f1ea6487305aad291ed.r2.dev'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'Tiny Sports Limited',
  description:
    'Helping Australian community sports clubs and coaches secure government grants, build capacity, and grow their programs.',
  url: 'https://tiny-sports.org',
  areaServed: 'Australia',
  email: 'hello@tiny-sports.org',
}

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="to-background relative overflow-hidden bg-gradient-to-b from-teal-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Helping community
                <span className="text-primary"> sports clubs</span> access the
                funding they deserve
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-8">
                Tiny Sports Limited is a for-purpose organisation that helps
                Australian grassroots sports clubs and independent coaches navigate
                government grant programs, build their capacity, and grow their
                programs so they can focus on what matters: the athletes.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/grants">
                    Explore Grants
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`${R2}/photos/img_0819.jpg`}
                alt="Jarasport triathlon athletes at the Gold Coast"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-10 lg:mb-0">
              <Image
                src={`${R2}/photos/cc103714a.jpg`}
                alt="Athlete running in rain during triathlon"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The funding gap in grassroots sport
              </h2>
              <p className="text-muted-foreground mt-6 text-lg leading-8">
                Government grants exist to support community sport but most
                coaches and small clubs don&apos;t know they exist, don&apos;t
                meet the eligibility criteria as sole traders, or don&apos;t have
                the time or capacity to apply. Tiny Sports bridges that gap.
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-8">
                We act as the incorporated entity that applies on behalf of clubs
                and coaches, handling the paperwork, writing the applications,
                and managing the acquittal so the funding gets to where
                it&apos;s needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How we help
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Three core services for clubs and coaches at every stage.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Grant Writing & Submission',
                description:
                  'We identify the right grant programs for your situation, write the applications, and manage the submission and acquittal process end-to-end.',
                href: '/services#grants',
                image: `${R2}/photos/img_2375.jpg`,
                imageAlt: 'Athletes celebrating with medals after event',
                objectPosition: 'object-top',
              },
              {
                title: 'Eligibility & Setup',
                description:
                  "Many coaches and small clubs can't apply for grants directly as sole traders. We help structure your operations so funding is accessible.",
                href: '/services#capacity',
                image: `${R2}/photos/s0000162.jpg`,
                imageAlt: 'Group of cyclists on beachside path',
                objectPosition: 'object-center',
              },
              {
                title: 'Club Capacity Building',
                description:
                  'Governance, strategic planning, financial management, and compliance support — the foundations your club needs to grow sustainably.',
                href: '/services#capacity',
                image: `${R2}/photos/pxl_swim_pool.jpg`,
                imageAlt: 'Swim squad training session in pool',
                objectPosition: 'object-center',
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-card rounded-xl border overflow-hidden transition-shadow hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className={`object-cover ${service.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="group-hover:text-primary text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Programs We Work With */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Grant programs we work with
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              We currently focus on Victorian state government programs, with
              Queensland support coming soon.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Sporting Club Grants Program',
                body: 'Sport and Recreation Victoria',
                amounts: '$750 – $5,000 per category',
                status: 'Open — closes 7 April 2026',
                statusColor: 'text-green-600',
              },
              {
                name: 'Category 1: Uniforms & Equipment',
                body: 'SRV Sporting Club Grants',
                amounts: 'Up to $1,000',
                status: 'Open now',
                statusColor: 'text-green-600',
              },
              {
                name: 'Category 3: Access & Events',
                body: 'SRV Sporting Club Grants',
                amounts: '$2,500 – $5,000',
                status: 'Open now',
                statusColor: 'text-green-600',
              },
              {
                name: 'Category 4: Travel',
                body: 'SRV Sporting Club Grants',
                amounts: '$750 per athlete (up to 8)',
                status: 'Open now',
                statusColor: 'text-green-600',
              },
              {
                name: 'Category 2: Volunteers & Officials',
                body: 'SRV Sporting Club Grants',
                amounts: 'Up to $5,000',
                status: 'Open now',
                statusColor: 'text-green-600',
              },
              {
                name: 'Queensland Programs',
                body: 'Sport and Recreation Queensland',
                amounts: 'Various',
                status: 'Coming soon',
                statusColor: 'text-muted-foreground',
              },
            ].map((grant) => (
              <div key={grant.name} className="bg-card rounded-xl border p-6">
                <h3 className="font-semibold">{grant.name}</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {grant.body}
                </p>
                <p className="mt-3 text-sm font-medium">{grant.amounts}</p>
                <p className={`mt-1 text-xs font-medium ${grant.statusColor}`}>
                  {grant.status}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/grants">
                View all grant guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study — Jarasport */}
      <section className="bg-teal-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Text */}
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide">
                Partner spotlight
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Jarasport — Triathlon &amp; Cycling Coaching, Victoria
              </h2>
              <p className="text-muted-foreground mt-6 text-lg leading-8">
                Jarasport is an independent coaching program based in Victoria,
                specialising in triathlon, road cycling, and velodrome track
                cycling. Coach Simon has developed athletes at every level from
                first-timers to competitors at ITU Triathlon World Championships.
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-8">
                Despite producing world-class results, Jarasport operates as a
                sole-trader business, meaning it was locked out of Sport &amp;
                Recreation Victoria grant programs entirely. Tiny Sports is
                partnering with Jarasport to change that.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { label: 'Sport', value: 'Triathlon & Cycling' },
                  { label: 'Location', value: 'Victoria' },
                  { label: 'Achievement', value: 'World Championship athletes' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-lg px-5 py-4 border">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    <p className="mt-1 font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Work with us like Jarasport
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://www.jarasport.com.au" target="_blank" rel="noopener noreferrer">
                    Visit Jarasport
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            {/* Photos embedded in section */}
            <div className="mt-12 lg:mt-0 space-y-3">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={`${R2}/photos/img_0833.jpg`}
                  alt="Jarasport athletes before triathlon swim start, Gold Coast"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={`${R2}/photos/img_0858.jpg`}
                    alt="Athletes running into the water at swim start"
                    fill
                    className="object-cover object-center"
                    sizes="25vw"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={`${R2}/photos/img_1164.jpg`}
                    alt="Cyclist on closed road course"
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-teal-50 px-8 py-16 text-center sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Is your club or program missing out on funding?
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
              If you coach or run a sports program in Victoria or Queensland,
              there&apos;s a good chance funding is available that you
              don&apos;t know about. Get in touch and we&apos;ll assess your
              eligibility for free.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Check Your Eligibility
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
