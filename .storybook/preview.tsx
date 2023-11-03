import type { Preview } from '@storybook/react'
import { Manrope } from 'next/font/google'
import '../scss/styles.scss'
import React from 'react'
import StoryblokProvider from '../src/components/StoryblokProvider'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--ff-primary',
  display: 'swap'
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <div className={`${manrope.variable}`} style={{ fontFamily: 'Manrope' }}>
        <StoryblokProvider>
          <Story />
        </StoryblokProvider>
      </div>
    )
  ]
}

export default preview
