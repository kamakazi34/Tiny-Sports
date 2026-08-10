import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Tiny Sports Limited collects, uses, and protects personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.',
}

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-border border-b py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
            <p className="eyebrow">Privacy Policy</p>
            <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Tiny Sports Limited is committed to protecting the privacy of
              individuals in accordance with the Privacy Act 1988 (Cth) and the
              Australian Privacy Principles (APPs).
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Adopted March 2026. Last updated August 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="prose prose-neutral prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-xl prose-h2:first:mt-0 prose-p:leading-7 prose-li:leading-7 prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Tiny Sports Limited is an Australian not-for-profit company
                limited by guarantee that applies for and acquits government
                grants on behalf of grassroots sports clubs and independent
                coaches. This policy explains how we collect, hold, use, and
                disclose personal information in accordance with the Privacy Act
                1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>

              <h2>2. What Personal Information We Collect</h2>
              <p>
                We collect personal information necessary to carry out our
                functions, including:
              </p>
              <ul>
                <li>
                  <strong>Director and officer information</strong>: name, date
                  of birth, address, email, phone number, and consent
                  declarations required for ASIC registration.
                </li>
                <li>
                  <strong>Grant applicant information</strong>: names,
                  addresses, contact details, and organisational details of
                  grant applicants and recipients.
                </li>
                <li>
                  <strong>Member information</strong>: names and contact details
                  of company members.
                </li>
                <li>
                  <strong>Financial information</strong>: bank account details
                  necessary to make payments to grant recipients.
                </li>
                <li>
                  <strong>Website enquiry information</strong>: name, email
                  address, club or organisation name, and any message content
                  submitted through our website contact form.
                </li>
              </ul>

              <h2>3. How We Collect Information</h2>
              <p>
                We collect personal information directly from individuals where
                practicable, including via registration forms, grant application
                forms, our website contact form, and correspondence.
              </p>

              <h2>4. Why We Collect Information</h2>
              <p>We collect personal information to:</p>
              <ul>
                <li>
                  register and administer the company under the Corporations Act
                  2001 (Cth);
                </li>
                <li>comply with ASIC reporting and lodgement obligations;</li>
                <li>assess and administer grant applications;</li>
                <li>
                  communicate with directors, members, grant applicants, and
                  people who contact us through our website;
                </li>
                <li>comply with our other legal obligations.</li>
              </ul>

              <h2>5. How We Use and Disclose Information</h2>
              <p>
                We will not disclose personal information to third parties
                except:
              </p>
              <ul>
                <li>
                  as required by law, for example disclosure to ASIC of director
                  details under the Corporations Act 2001 (Cth);
                </li>
                <li>
                  to government grant bodies in connection with grant
                  applications and acquittals; or
                </li>
                <li>with the individual&rsquo;s consent.</li>
              </ul>
              <p>
                Director names and addresses are disclosed to ASIC and appear on
                the public register as required by law. If and when Tiny Sports
                Limited is registered as a charity with the Australian Charities
                and Not-for-profits Commission (ACNC), the names of Responsible
                Persons (directors) will also be published on the ACNC Charity
                Register, a public register accessible online. This is a
                mandatory disclosure requirement under the ACNC Act 2012 (Cth).
              </p>

              <h2>6. Website and Data Security</h2>
              <p>
                Our website is hosted on infrastructure that encrypts data in
                transit. We take reasonable steps to protect personal
                information from misuse, interference, loss, unauthorised
                access, modification, or disclosure. Digital records are
                password-protected and access is limited to directors and
                officers who need it to perform their role; physical records,
                where held, are kept in a secure location. Our website uses only
                the technical cookies necessary for the site to function and
                does not use cookies to build advertising profiles of visitors.
              </p>

              <h2>7. Access and Correction</h2>
              <p>
                Individuals may request access to personal information we hold
                about them, or request correction of inaccurate information, by
                contacting us at{' '}
                <a href="mailto:jake.martin@tiny-sports.org">
                  jake.martin@tiny-sports.org
                </a>
                . We will respond within 30 days.
              </p>

              <h2>8. Complaints</h2>
              <p>
                Complaints about our handling of personal information should be
                directed to{' '}
                <a href="mailto:jake.martin@tiny-sports.org">
                  jake.martin@tiny-sports.org
                </a>
                . If a complaint is not resolved to your satisfaction, you may
                contact the Office of the Australian Information Commissioner
                (OAIC) at{' '}
                <a
                  href="https://www.oaic.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  oaic.gov.au
                </a>
                .
              </p>

              <h2>9. Policy Review</h2>
              <p>
                This policy is reviewed annually or following any significant
                change to the company&rsquo;s activities or applicable law.
              </p>

              <hr className="my-10" />

              <p className="text-muted-foreground text-sm">
                Please note, this document was formatted using AI but was
                checked by a human.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
