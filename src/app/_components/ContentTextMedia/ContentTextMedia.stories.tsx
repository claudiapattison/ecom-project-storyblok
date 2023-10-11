import type { Meta, StoryObj } from '@storybook/react'
import { ContentTextMedia } from './ContentTextMedia'

const meta: Meta<typeof ContentTextMedia> = {
  title: 'Components/Content Text Media',
  component: ContentTextMedia
}

export default meta
type Story = StoryObj<typeof ContentTextMedia>

export const Default: Story = {
  args: {
    blok: {
      title: 'Bringing you the best audio gear',
      text: 'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.',
      image: {
        filename: '/placeholder/hero-desktop.jpg',
        alt: 'Mock Image Alt Text'
      }
    }
  }
}
