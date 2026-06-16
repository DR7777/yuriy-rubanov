import { ImageResponse } from 'next/og'

export const size        = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)',
          borderRadius: '38px',
          fontFamily: 'sans-serif',
          fontSize: '68px',
          fontWeight: 900,
          letterSpacing: '-2px',
        }}
      >
        <span style={{ color: '#ffffff' }}>R</span>
        <span style={{ color: '#C9A84C' }}>A</span>
        <span style={{ color: '#ffffff' }}>C</span>
      </div>
    ),
    { ...size },
  )
}
