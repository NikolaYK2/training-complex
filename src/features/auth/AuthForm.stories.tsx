import type { StoryObj } from '@storybook/react'

import { AuthForm } from '@/features/auth/AuthForm'

const meta = {
  argTypes: {
    description: { type: 'string' },
    title: { type: 'string' },
  },
  component: AuthForm,
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
