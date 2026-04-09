// app/layout.tsx
import { Playfair_Display, Inter, Geist } from 'next/font/google'
import { Provider } from './provider'
import '../styles/globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(playfair.variable, inter.variable, "font-sans", geist.variable)}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}