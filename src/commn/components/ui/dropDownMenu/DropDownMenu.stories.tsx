import { ArrType, DropDownMenu } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenuCard: Story = {
  args: {
    obj: {
      arr: [
        { icon: 'learn', name: 'Learn' },
        { icon: 'edit', name: 'Edit' },
        { icon: 'delete', name: 'Delete' },
      ] as ArrType[],
      id: 1,
      name: 'icon',
    },
  },
}

export const DropDownMenuProfile: Story = {
  args: {
    obj: {
      arr: [
        { email: 'Kev', icon: 'avatar', name: 'Nikolaj' },
        { icon: 'profile', name: 'My Profile' },
        { icon: 'logOut', name: 'Sing Out' },
      ] as ArrType[],
      id: 1,
      name: 'icon',
    },
  },
}
