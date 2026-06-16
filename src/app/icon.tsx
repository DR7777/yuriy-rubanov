import { ImageResponse } from 'next/og'

// ─── App icon — generated at build time via next/og ──────────────────────────
// Renders the RAC initials badge in brand colours:
//   Deep Navy background · "R" white · "A" gold · "C" white

export const size        = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '7px',
          fontFamily: 'sans-serif',
          fontSize: '13px',
          fontWeight: 900,
          letterSpacing: '-0.5px',
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
