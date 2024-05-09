import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from '@/commn/components/ui/rating/Rating'

const meta: Meta<typeof Rating> = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
}

export default meta

type Story = StoryObj

export const RatingNull: Story = {
  args: {
    stars: 2,
  },
}

export const RatingActive: Story = {
  args: {
    hoveredStarValue: 0,
    ratingValue: 5,
    stars: 3,
  },
}
export const RatingActiveHover: Story = {
  args: {
    hoveredStarValue: 3,
    ratingValue: 5,
    stars: 5,
  },
}
