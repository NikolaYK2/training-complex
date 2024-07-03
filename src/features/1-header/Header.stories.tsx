import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/features/1-header/Header'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
