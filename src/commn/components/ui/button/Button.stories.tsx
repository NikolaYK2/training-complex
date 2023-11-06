import type {Meta, StoryObj} from '@storybook/react'

import {IconSvg} from '@/commn/components/ui/iconSvg/IconSvg.tsx'

import {Button} from './'

const meta = {
  argTypes: {
    title: {
      control: {type: 'text'}, //Добавляет описание к кнопке например
    },
    variant: {
      control: {type: 'radio'},
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'], //автоматически добавляет все в истории в один документ
  title: 'Components/Button', //Где лежат наши истории
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryIcon: Story = () => (
  <Button>
    <div style={{display: 'flex', alignItems: 'center', width: '20px', margin: '0 10px 0 0'}}>
      <IconSvg name={"logOut"}/>
    </div>
    Primary Button
  </Button>
)
PrimaryIcon.argTypes = {}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryIcon: Story = () => (
  <Button variant={"secondary"}>
    <div style={{display: 'flex', alignItems: 'center', width: '20px', margin: '0 10px 0 0'}}>
      <IconSvg name={"logOut"}/>
    </div>
    Secondary Button
  </Button>
)
SecondaryIcon.argTypes = {}


export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a', //Это тэг ссылка
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}
