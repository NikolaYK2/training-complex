import type { StoryObj } from '@storybook/react'

import { TextField } from '@/commn/components/ui/input/TextField'

const meta = {
  argTypes: {
    label: { type: 'string' },
    type: { type: 'string' },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/Input',
}

export default meta
type Story = StoryObj

export const InputText: Story = {
  args: {
    label: 'Email',
    onChange: () => {},
    type: 'email',
    value: 'email@example.com',
  },
}
export const InputNull: Story = {
  args: {
    label: 'Null',
    type: 'email',
    value: '',
  },
}
export const InputPassword: Story = {
  args: {
    label: 'Password',
    onChange: () => {},
    type: 'password',
    value: 'email@example.com',
  },
}
export const InputDisabled: Story = {
  args: {
    disabled: true,
    label: 'Password',
    onChange: () => {},

    type: 'password',
    value: 'email@example.com',
  },
}
export const InputSearch: Story = {
  args: {
    label: 'Search',
    onChange: () => {},
    type: 'search',
    value: 'sdsd',
  },
}
