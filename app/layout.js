import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Franco Caraffa',
  description: 'Portafolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#003049] bg-gradient-to-r from-[#003049] to-[#05121a]`} >{children}</body>
    </html>
  )
}
