import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    blok: {
      label: 'Mock Label',
      title: 'Mock Title',
      text: 'Mock Text',
      link: '/mock-link',

      image: {
        filename: '/placeholder/hero-desktop.jpg',
        alt: 'Mock Image Alt Text'
      },

      imageMobile: {
        filename: '/placeholder/hero-desktop.jpg',
        alt: 'Mock Mobile Image Alt Text'
      }
    }
  }
}
