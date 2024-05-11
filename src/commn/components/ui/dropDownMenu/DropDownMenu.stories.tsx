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
        { buttonName: 'Learn', icon: 'learn' },
        { buttonName: 'Edit', icon: 'edit' },
        { buttonName: 'Delete', icon: 'delete' },
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
        { buttonName: 'Nikolaj', email: 'Kev', icon: 'avatar' },
        { buttonName: 'My Profile', icon: 'profile' },
        { buttonName: 'Sing Out', icon: 'logOut' },
      ] as ArrType[],
      id: 1,
      name: 'icon',
    },
  },
}
