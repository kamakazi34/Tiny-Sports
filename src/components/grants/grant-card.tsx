import Link from 'next/link'
import { StatusBadge } from './status-badge'

interface GrantCardProps {
  slug: string
  title: string
  state: string
  status: 'open' | 'closed' | 'upcoming'
  amount?: string | null
  deadline?: string | null
  excerpt?: string | null
}

const stateLabels: Record<string, string> = {
  national: 'National',
  nsw: 'NSW',
  vic: 'VIC',
  qld: 'QLD',
  wa: 'WA',
  sa: 'SA',
  tas: 'TAS',
  act: 'ACT',
  nt: 'NT',
}

export function GrantCard({
  slug,
  title,
  state,
  status,
  amount,
  deadline,
  excerpt,
}: GrantCardProps) {
  return (
    <Link
      href={`/grants/${slug}`}
      className="group border-border flex h-full flex-col border bg-white p-7 transition-colors hover:border-teal-500"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
          {stateLabels[state] || state}
        </p>
        <StatusBadge status={status} />
      </div>
      <h3 className="font-heading mt-3 text-lg leading-snug font-bold transition-colors group-hover:text-teal-600">
        {title}
      </h3>
      {excerpt && (
        <p className="text-muted-foreground mt-3 text-sm leading-6">
          {excerpt}
        </p>
      )}
      <div className="mt-auto pt-6">
        <dl className="border-border space-y-1.5 border-t pt-4 text-sm">
          {amount && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Amount</dt>
              <dd className="font-medium">{amount}</dd>
            </div>
          )}
          {deadline && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Deadline</dt>
              <dd className="font-medium">
                {new Date(deadline).toLocaleDateString('en-AU', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </Link>
  )
}
