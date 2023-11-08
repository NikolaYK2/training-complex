import type {Meta, StoryObj} from '@storybook/react'
import {Card} from "@/commn/components/ui/card/Card.tsx";

const meta = {
  argTypes: {
  },
  component: Card,
  tags: ['autodocs'], //автоматически добавляет все в истории в один документ
  title: 'Components/Card', //Где лежат наши истории
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardNull: Story = {
  args: {},
}
