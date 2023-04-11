import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'My Google',
  description: 'A Google clone built with NextJS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}

      {/* @ts-expect-error Server Component */}
      <Footer />
      </body>
    </html>
  )
}
