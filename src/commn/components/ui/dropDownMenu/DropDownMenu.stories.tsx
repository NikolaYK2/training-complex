import { DropDownMenu, MenuItem } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
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
    menuConfig: {
      content: [
        { buttonName: 'Learn', icon: 'learn' },
        { buttonName: 'Edit', icon: 'edit' },
        { buttonName: 'Delete', icon: 'delete' },
      ] as MenuItem[],
      trigger: 'icon',
    },
  },
}

export const DropDownMenuProfile: Story = {
  args: {
    menuConfig: {
      content: [
        { buttonName: 'Nikolaj', email: 'Kev', icon: 'avatar' },
        { buttonName: 'My Profile', icon: 'profile' },
        { buttonName: 'Sing Out', icon: 'logOut' },
      ] as MenuItem[],
      trigger: 'icon',
    },
  },
}
