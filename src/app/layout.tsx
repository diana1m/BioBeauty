import type { Metadata } from 'next'
import '../styles/globals.scss'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'BioBeauty',
  description: 'Інтернет магазин натуральної косметики',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='uk'>
      <body className={roboto.className}>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
