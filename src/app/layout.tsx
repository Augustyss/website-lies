import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cranio bij Lies',
  description: 'Craniosacraaltherapie in Bellegem bij Lies — rust, herstel en ontspanning.',
  openGraph: {
    title: 'Cranio bij Lies',
    description: 'Ervaren craniosacraaltherapeut in Bellegem — ervaar diepe ontspanning & herstel.',
    url: 'https://website-lies.vercel.app',
    siteName: 'Cranio bij Lies',
  },
  icons: {
    icon: [
      { url: '/images/logo_lies.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/images/logo_lies.svg',
    apple: '/images/logo_lies.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/images/logo_lies.svg" type="image/svg+xml" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
        {/* Preload kritische Mundial fonts voor betere performance */}
        <link rel="preload" href="/fonts/MundialLight.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/MundialHairItalic.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/MundialDemibold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-bg-cream text-text-main">
        {children}
      </body>
    </html>
  )
}

