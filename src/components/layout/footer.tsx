import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  organisation: [
    { name: 'About', href: '/about' },
    { name: 'Board', href: '/board' },
    { name: 'News', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  working: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Who We Help', href: '/who-we-help' },
    { name: 'Services', href: '/services' },
  ],
  programs: [
    { name: 'Grant Guides', href: '/grants' },
    { name: 'Donate a Bike', href: '/donate-a-bike' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo-white.svg"
                alt="Tiny Sports"
                width={34}
                height={34}
                className="h-[34px] w-[34px]"
              />
              <span className="font-heading text-lg font-extrabold tracking-tight">
                Tiny Sports
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-teal-200">
              A not-for-profit company that applies for and acquits government
              grants on behalf of the grassroots coaches and clubs who cannot
              apply as sole traders.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-teal-200">
              <p>
                <a
                  href="mailto:jake.martin@tiny-sports.org"
                  className="transition-colors hover:text-white"
                >
                  jake.martin@tiny-sports.org
                </a>
              </p>
              <p>
                <a
                  href="tel:+61437218197"
                  className="transition-colors hover:text-white"
                >
                  0437 218 197
                </a>
              </p>
              <p>West End, Queensland</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-teal-300 uppercase">
              Organisation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.organisation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-100 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-teal-300 uppercase">
              Working with us
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.working.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-100 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-teal-300 uppercase">
              Programs
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-100 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <div className="flex flex-col gap-2 text-xs leading-5 text-teal-300 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} Tiny Sports Limited. Company
              Limited by Guarantee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
