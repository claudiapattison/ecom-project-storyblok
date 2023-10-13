import type { Meta, StoryObj } from '@storybook/react'
import { HeroPage } from './HeroPage'
import { HeroPageBuilder } from './HeroPageBuilder'

const mock = new HeroPageBuilder().withTitle('Headphones').build()

const meta: Meta<typeof HeroPage> = {
  title: 'Components/Hero Page',
  component: HeroPage,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof HeroPage>

export const Default: Story = {
  args: mock
}
