import type {Meta, StoryObj} from "@storybook/react";
import {Rating} from "@/commn/components/ui/rating/Rating.tsx";

const meta: Meta<typeof Rating> = {
  tags: ['autodocs'],
  title: 'Components/Rating',
  component: Rating,
}

export default meta

type Story = StoryObj;

export const RatingNull: Story = {
  args: {
    stars: 2
  }
}

export const RatingActive: Story = {
  args: {
    stars: 3,
    ratingValue: 5,
    hoveredStarValue: 0,
  }
}
export const RatingActiveHover: Story = {
  args: {
    stars: 5,
    ratingValue: 5,
    hoveredStarValue: 3,
  }
}