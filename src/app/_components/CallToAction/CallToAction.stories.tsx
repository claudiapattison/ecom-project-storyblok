import type { Meta, StoryObj } from '@storybook/react'
import { CallToAction } from './CallToAction'
import { CallToActionBuilder } from './CallToActionBuilder'
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

const spiltMock = new CallToActionBuilder()
  .withTitle('ZX9 SPEAKER')
  .withText(
    'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
  )
  .withSpilt(true)
  .withImage(imageFeature)
  .build()

const meta: Meta<typeof CallToAction> = {
  title: 'Components/Call to Action',
  component: CallToAction
}

export default meta
type Story = StoryObj<typeof CallToAction>

export const Default: Story = {
  args: {
    blok: mock
  }
}

export const Feature: Story = {
  args: {
    blok: featureMock
  }
}

export const Spilt: Story = {
  args: {
    blok: spiltMock
  }
}
