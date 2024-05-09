import type { Meta, StoryObj } from '@storybook/react'

import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

const meta: Meta<typeof TextFormat> = {
  component: TextFormat,
  tags: ['autodocs'],
  title: 'Components/Typography',
}

export default meta

type Story = StoryObj
const text = 'Hi i checked component and style, see you later!'

export const TypographyH1: Story = {
  render: () => <TextFormat variant={'h1'}>{text}</TextFormat>,
}
export const TypographyH2: Story = {
  render: () => <TextFormat variant={'h2'}>{text}</TextFormat>,
}
export const TypographyH3: Story = {
  render: () => <TextFormat variant={'h3'}>{text}</TextFormat>,
}
export const TypographyH4: Story = {
  render: () => <TextFormat variant={'h4'}>{text}</TextFormat>,
}
export const TypographyCaption1: Story = {
  render: () => <TextFormat variant={'caption1'}>{text}</TextFormat>,
}
export const TypographyOverline: Story = {
  render: () => <TextFormat variant={'overline'}>{text}</TextFormat>,
}
export const TypographyBody1: Story = {
  render: () => <TextFormat variant={'body1'}>{text}</TextFormat>,
}
export const TypographyBody2: Story = {
  render: () => <TextFormat variant={'body2'}>{text}</TextFormat>,
}
export const TypographySubtitle1: Story = {
  render: () => <TextFormat variant={'subtitle1'}>{text}</TextFormat>,
}
export const TypographySubtitle2: Story = {
  render: () => <TextFormat variant={'subtitle2'}>{text}</TextFormat>,
}
export const TypographyLink1: Story = {
  render: () => <TextFormat variant={'link1'}>{text}</TextFormat>,
}
export const TypographyLink2: Story = {
  render: () => <TextFormat variant={'link2'}>{text}</TextFormat>,
}

export const TypographyDark: Story = {
  render: () => <TextFormat colorText={'dark'}>{text}</TextFormat>,
}
export const TypographyLight: Story = {
  render: () => <TextFormat colorText={'light'}>{text}</TextFormat>,
}
