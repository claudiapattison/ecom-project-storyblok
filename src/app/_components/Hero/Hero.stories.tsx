import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import { HeroBuilder } from './HeroBuilder'
import { ImageBuilder } from '../../../utils/Builders/ImageBuilder'

const image = new ImageBuilder()
  .withFilename('/placeholder/hero-desktop.jpg')
  .withAlt('headphones')
  .build()

const mock = new HeroBuilder()
  .withLabel('New products')
  .withTitle('XX99 MARK II HEADPHONES')
  .withText(
    'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
  )
  .withImage(image)
  .withImageMobile(image)
  .build()

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    blok: mock
  }
}
