import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/features/header/Header'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' }, //Добавляет описание к кнопке например
    },
    // variant: {
    //   control: { type: 'radio' },
    //   options: ['primary', 'secondary', 'tertiary', 'link'],
    // },
  },
  component: Header,
  tags: ['autodocs'], //автоматически добавляет все в истории в один документ
  title: 'Components/Header', //Где лежат наши истории
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
