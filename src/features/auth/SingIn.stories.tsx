import type { StoryObj } from '@storybook/react'

import { SingIn } from '@/features/auth/SingIn'

const meta = {
  component: SingIn,
  tags: ['autodocs'],
  title: 'Components/Auth/SingIn',
}

export default meta
type Story = StoryObj

export const Authorization: Story = {}
