import type { Meta, StoryObj } from '@storybook/react'

import { SliderValue } from '@/commn/components/ui/slider/SliderValue'

const meta = {
  argTypes: {},
  component: SliderValue,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof SliderValue>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {},
}
