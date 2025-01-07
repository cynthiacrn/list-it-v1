import { GeistSans } from 'geist/font/sans'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/lib/auth'
import './globals.css'

export const metadata = {
  title: "List it",
  description: "Create, share, and organize your wishlists effortlessly with our intuitive wishlist app. Perfect for birthdays, weddings, Christmas, and more. Never miss the perfect gift again!",
}

export default async function RootLayout({ children }) {
  const session = await auth()

  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} bg-seashell text-black`}
      >
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
