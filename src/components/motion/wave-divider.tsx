/**
 * Layered wave section divider (haikei-style), drawn in brand tints.
 * Purely decorative: aria-hidden, no interaction.
 *
 * flip renders the waves upside down for use at the bottom of a light
 * section flowing into a dark one.
 */
export function WaveDivider({
  from = 'transparent',
  flip = false,
  className = '',
}: {
  from?: string
  flip?: boolean
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        lineHeight: 0,
        backgroundColor: from,
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: 'clamp(40px, 8vw, 96px)',
        }}
      >
        <path
          d="M0,64 C240,110 480,20 720,52 C960,84 1200,30 1440,66 L1440,120 L0,120 Z"
          fill="#c2e4d3"
          opacity="0.5"
        />
        <path
          d="M0,84 C260,40 520,112 780,78 C1040,44 1260,96 1440,70 L1440,120 L0,120 Z"
          fill="#d8eee1"
        />
      </svg>
    </div>
  )
}
