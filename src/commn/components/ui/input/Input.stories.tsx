import type {Meta, StoryObj} from '@storybook/react'

import {Input} from "@/commn/components/ui/input/Input.tsx";

const meta = {
  argTypes: {
    typeInput: {
      text: 'text',
      email: 'email',
      search: 'search',
      password: 'password',
    },
  },
  component: Input,
  tags: ['autodocs'], //автоматически добавляет все в истории в один документ
  title: 'Components/Input', //Где лежат наши истории
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputText: Story = {
  args: {
    typeInput: 'text'
  },
}
export const InputPassword: Story = {
  args: {
    typeInput: 'password'
  },
}
export const InputDisabled: Story = {
  args: {
    typeInput: 'password',
    disabled:true,
  },
}
export const InputSearch: Story = {
  args: {
    typeInput: 'search'
  },
}
