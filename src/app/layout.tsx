import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { Manrope } from 'next/font/google'
import StoryblokProvider from '../components/StoryblokProvider'

storyblokInit({
  accessToken: 'HAhQiRUwaIYEaJfUHWncWgtt',
  use: [apiPlugin]
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--ff-primary',
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.png'
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <html lang="en" className={`${manrope.variable}`}>
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
