import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ButtonBuilder, ButtonBuilderLink } from './ButtonBuilder'

const mock = new ButtonBuilder().withChildren('View Product').build()

const mockSecondary = new ButtonBuilder()
  .withChildren('View Product')
  .withVariant('secondary')
  .build()

const typeSubmit = new ButtonBuilder()
  .withChildren('Submit Button')
  .withType('submit')
  .build()

const mockLink = new ButtonBuilderLink()
  .withLink('/example')
  .withChildren('Link Button')
  .build()

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: mock
}

export const Secondary: Story = {
  args: mockSecondary
}

export const Submit: Story = {
  args: typeSubmit
}

export const Link: Story = {
  args: mockLink
}

export const Aria: Story = {
  args: {
    ...mock,
    ariaLabel: 'Aria Label'
  }
}
