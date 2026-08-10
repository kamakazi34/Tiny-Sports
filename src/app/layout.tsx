import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
})

export const viewport = {
  themeColor: '#24503f',
}

export const metadata: Metadata = {
  title: {
    default: 'Tiny Sports',
    template: '%s | Tiny Sports',
  },
  description:
    'Helping Australian community sports clubs with grant writing, brand development, and capacity building.',
  metadataBase: new URL('https://tiny-sports.org'),
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Tiny Sports',
    description:
      'Helping Australian community sports clubs with grant writing, brand development, and capacity building.',
    url: 'https://tiny-sports.org',
    siteName: 'Tiny Sports',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiny Sports',
    description:
      'Helping Australian community sports clubs with grant writing, brand development, and capacity building.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nunito.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
