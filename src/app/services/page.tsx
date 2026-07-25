import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Grant writing, brand development, and capacity building services for Australian community sports clubs.',
}

const services = [
  {
    id: 'grants',
    number: '01',
    title: 'Grant Writing Support',
    description:
      'Finding, writing and acquitting government and corporate grants, end to end.',
    features: [
      'Grant discovery and eligibility assessment',
      'Application writing and review',
      'Budget preparation and project planning',
      'Acquittal and reporting guidance',
      'Access to our curated grant guide library',
    ],
  },
  {
    id: 'brand',
    number: '02',
    title: 'Brand Development',
    description:
      'A professional club identity that attracts members, sponsors and community support.',
    features: [
      'Logo and visual identity design guidance',
      'Social media strategy and templates',
      'Sponsor attraction packages',
      'Website and digital presence advice',
      'Communication and marketing planning',
    ],
  },
  {
    id: 'capacity',
    number: '03',
    title: 'Capacity Building',
    description:
      'Stronger club operations for long-term sustainability and growth.',
    features: [
      'Strategic planning workshops',
      'Governance and compliance guidance',
      'Volunteer recruitment and retention',
      'Financial management fundamentals',
      'Risk management and insurance',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-border border-b py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Practical support for community clubs
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Hands-on help designed specifically for community sports clubs. No
              jargon, no unnecessary complexity, and an honest answer when
              something is not worth pursuing.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="border-border grid scroll-mt-24 gap-6 border-t py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-1">
                <p className="font-heading text-4xl font-extrabold text-teal-200">
                  {service.number}
                </p>
              </div>
              <div className="lg:col-span-4">
                <h2 className="font-heading text-2xl font-bold">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mt-3 leading-7">
                  {service.description}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <ul className="divide-border border-border divide-y border-y">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-baseline gap-3 py-3 text-sm"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 bg-teal-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mint py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-teal-900 sm:text-3xl">
                Not sure where to start?
              </h2>
              <p className="text-ink/80 mt-3 leading-7">
                Tell us about your club and we will help you figure out the best
                way forward.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
