import type { Metadata } from 'next'
import { ContactForm } from '@/components/shared/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Tiny Sports. We help Australian community sports clubs and coaches access government grants.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-border border-b py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Tell us about your program
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Whether you need help with a grant application or want to talk
              through how the partner model works, start here. The eligibility
              check is free.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            {/* Contact info */}
            <div className="lg:col-span-4">
              <h2 className="font-heading text-xl font-bold">
                Contact details
              </h2>
              <dl className="divide-border border-border mt-6 divide-y border-y">
                <div className="py-4">
                  <dt className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:jake.martin@tiny-sports.org"
                      className="link-teal text-sm font-medium"
                    >
                      jake.martin@tiny-sports.org
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="tel:+61437218197"
                      className="link-teal text-sm font-medium"
                    >
                      0437 218 197
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm font-medium">
                    Australia-wide, remote
                  </dd>
                </div>
              </dl>

              <div className="mt-8">
                <h3 className="font-heading text-sm font-bold">
                  Response time
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-6">
                  We aim to respond within two business days. For urgent grant
                  deadline queries, note the deadline in your message.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
