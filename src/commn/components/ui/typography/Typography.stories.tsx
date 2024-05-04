import {Typography} from "@/commn/components/ui/typography/Typography.tsx";
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Typography> = {
  tags: ['autodocs'],
  title: 'Components/Typography',
  component: Typography,
}

export default meta

type Story = StoryObj;
const text = 'Hi i checked component and style, see you later!'

export const TypographyH1: Story = {
  render: () => <Typography variant={'h1'}>{text}</Typography>
}
export const TypographyH2: Story = {
  render: () => <Typography variant={'h2'}>{text}</Typography>
}
export const TypographyH3: Story = {
  render: () => <Typography variant={'h3'}>{text}</Typography>
}
export const TypographyH4: Story = {
  render: () => <Typography variant={'h4'}>{text}</Typography>
}
export const TypographyCaption1: Story = {
  render: () => <Typography variant={'caption1'}>{text}</Typography>
}
export const TypographyOverline: Story = {
  render: () => <Typography variant={'overline'}>{text}</Typography>
}
export const TypographyBody1: Story = {
  render: () => <Typography variant={'body1'}>{text}</Typography>
}
export const TypographyBody2: Story = {
  render: () => <Typography variant={'body2'}>{text}</Typography>
}
export const TypographySubtitle1: Story = {
  render: () => <Typography variant={'subtitle1'}>{text}</Typography>
}
export const TypographySubtitle2: Story = {
  render: () => <Typography variant={'subtitle2'}>{text}</Typography>
}
export const TypographyLink1: Story = {
  render: () => <Typography variant={'link1'}>{text}</Typography>
}
export const TypographyLink2: Story = {
  render: () => <Typography variant={'link2'}>{text}</Typography>
}

export const TypographyDark: Story = {
  render: () => <Typography colorText={"dark"}>{text}</Typography>
}
export const TypographyLight: Story = {
  render: () => <Typography colorText={"light"}>{text}</Typography>
}