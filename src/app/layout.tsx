import './globals.css'
import { Roboto_Flex as Roboto, Playfair_Display as Playfairdisplay } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const playfairdisplay = Playfairdisplay({ subsets: ['latin'], weight: '700', variable: '--font-playfairdisplay'})

export const metadata = {
  title: 'Lawyes',
  description: 'Sites de advogados famíliar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${playfairdisplay.variable} bg-salmon-50`}>{children}</body>
    </html>
  )
}
