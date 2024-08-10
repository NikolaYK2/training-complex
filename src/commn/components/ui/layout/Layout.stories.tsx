import type { Meta, StoryObj } from '@storybook/react'

import { Layout } from '@/commn/components/ui/layout/Layout'
import { SignIn } from '@/features/auth/login/SignIn'
import { Decks } from '@/features/decks/Decks'

const meta = {
  component: Layout,
  tags: ['autodocs'], //автоматически добавляет все в истории в один документ
  title: 'Components/Layout', //Где лежат наши истории
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const LayoutHeader: Story = {
  args: {
    avatar: 'avatar',
    children: <Decks />,
    email: 'email',
    name: 'name',
  },
}

export const LayoutLogin: Story = {
  args: {
    avatar: 'avatar',
    children: <SignIn />,
    email: 'email',
    name: 'name',
  },
}
