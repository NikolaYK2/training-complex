import type {Meta, StoryObj} from '@storybook/react'

import {TextField} from "@/commn/components/ui/input/TextField.tsx";

const meta = {
  argTypes: {
    typeInput: {
      text: 'text',
      email: 'email',
      search: 'search',
      password: 'password',
    },
  },
  component: TextField,
  tags: ['autodocs'], //автоматически добавляет все в истории в один документ
  title: 'Components/Input', //Где лежат наши истории
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const InputText: Story = {
  args: {
    typeInput: 'text',
    label: 'Email'
  },
}
export const InputPassword: Story = {
  args: {
    typeInput: 'password',
    label: 'Password'

  },
}
export const InputDisabled: Story = {
  args: {
    typeInput: 'password',
    label: 'Password',

    disabled: true,
  },
}
export const InputSearch: Story = {
  args: {
    typeInput: 'search',
    label: 'Search'

  },
}
