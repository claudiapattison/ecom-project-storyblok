import type { Meta, StoryObj } from '@storybook/react'
import { CallToActionGrid } from './CallToActionGrid'
import { CallToActionBuilder } from './../CallToAction/CallToActionBuilder'
import { ImageBuilder } from '../../../utils/Builders/ImageBuilder'

const image = new ImageBuilder()
  .withFilename('/placeholder/cta2.jpg')
  .withAlt('headphones')
  .build()

const imageFeature = new ImageBuilder()
  .withFilename('/placeholder/cta1.jpg')
  .withAlt('headphones')
  .build()

const mock = new CallToActionBuilder()
  .withTitle('ZX9 SPEAKER')
  .withText(
    'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
  )
  .withImage(image)
  .build()

const featureMock = new CallToActionBuilder()
  .withTitle('ZX9 SPEAKER')
  .withText(
    'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
  )
  .withFeature(true)
  .withImage(imageFeature)
  .build()

const meta: Meta<typeof CallToActionGrid> = {
  title: 'Components/Call to Action Grid',
  component: CallToActionGrid
}

export default meta
type Story = StoryObj<typeof CallToActionGrid>

export const Default: Story = {
  args: {
    blok: {
      item: [mock, featureMock, mock]
    }
  }
}
