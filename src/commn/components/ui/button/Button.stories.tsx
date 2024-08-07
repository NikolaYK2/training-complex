import type { Meta, StoryObj } from '@storybook/react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'

import { Button } from './'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' }, //Добавляет описание к кнопке например
    },
    variant: {
      control: { type: 'radio' },
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
export const PrimaryIcon: Story = {
  render: () => (
    <Button>
      <div style={{ alignItems: 'center', display: 'flex', margin: '0 10px 0 0', width: '20px' }}>
        <IconSvg name={'logOut'} />
      </div>
      Primary Button
    </Button>
  ),
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryIcon: Story = {
  render: () => (
    <Button variant={'secondary'}>
      <div style={{ alignItems: 'center', display: 'flex', margin: '0 10px 0 0', width: '20px' }}>
        <IconSvg name={'logOut'} />
      </div>
      Secondary Button
    </Button>
  ),
}

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
