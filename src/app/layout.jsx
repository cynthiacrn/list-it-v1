import { Montserrat } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/lib/auth'
import './globals.css'
import Header from "@/components/Header";

export const metadata = {
  title: "List it",
  description: "Create, share, and organize your wishlists effortlessly with our intuitive wishlist app. Perfect for birthdays, weddings, Christmas, and more. Never miss the perfect gift again!",
}

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({ children }) {
  const session = await auth()

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-seashell text-black`}
      >
        <SessionProvider session={session}>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
