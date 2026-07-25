import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="text-muted-foreground mt-4 max-w-md leading-7">
        The page you are looking for does not exist or has moved.
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/">Back to the homepage</Link>
      </Button>
    </div>
  )
}
