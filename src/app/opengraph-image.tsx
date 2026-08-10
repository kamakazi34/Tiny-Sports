import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Tiny Sports'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#004e3b',
        padding: '80px',
      }}
    >
      <div
        style={{
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: '#f47b20',
          marginBottom: 28,
        }}
      >
        Not-for-profit grant partner
      </div>
      <div
        style={{
          fontSize: 76,
          fontWeight: 800,
          lineHeight: 1.1,
          color: '#ffffff',
          letterSpacing: '-1px',
          maxWidth: 980,
        }}
      >
        Grant funding for the people who actually run grassroots sport
      </div>
      <div
        style={{
          fontSize: 30,
          fontWeight: 800,
          color: '#9adcc6',
          marginTop: 40,
        }}
      >
        Tiny Sports Limited
      </div>
    </div>,
    { ...size }
  )
}
