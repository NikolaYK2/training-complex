import type { StoryObj } from '@storybook/react'

import { SignIn } from '@/features/auth/login/SignIn'

const meta = {
  argTypes: {
    description: { type: 'string' },
    title: { type: 'string' },
  },
  component: SignIn,
  tags: ['autodocs'],
  title: 'Components/Auth/SingIn',
}

export default meta
type Story = StoryObj

export const Authorization: Story = {
  args: {
    description: "Don't have an account?",
    title: 'Sign in',
  },
}
