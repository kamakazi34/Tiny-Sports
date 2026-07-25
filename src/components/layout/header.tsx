'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Who We Help', href: '/who-we-help' },
  { name: 'Grants', href: '/grants' },
  { name: 'Board', href: '/board' },
  { name: 'News', href: '/blog' },
  { name: 'Donate a Bike', href: '/donate-a-bike' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-border sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt="Tiny Sports"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="font-heading text-lg font-extrabold tracking-tight text-teal-700">
            Tiny Sports
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-ink/70 rounded-sm px-3 py-2 text-[0.9375rem] font-medium transition-colors hover:text-teal-700"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="default" className="ml-3">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="mt-8 flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-ink/80 hover:bg-mint rounded-sm px-3 py-3 text-base font-medium transition-colors hover:text-teal-700"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get in touch
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
