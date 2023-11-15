import {Meta, StoryObj} from "@storybook/react";
import {ArrType, DropDownMenu} from "@/commn/components/ui/dropDownMenu/DropDownMenu.tsx";

const meta = {
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenuCard: Story = {
  args: {
    obj:  {
      id: 1,
      name: 'icon',
      arr: [
        {icon: 'learn', name: 'Learn'},
        {icon: 'edit', name: 'Edit'},
        {icon: 'delete', name: 'Delete'},
      ] as ArrType[]
    }
  }
}

export const DropDownMenuProfile: Story = {
  args: {
    obj: {
      id: 1,
      name: 'icon',
      arr: [
        {icon: 'avatar', name: 'Nikolaj', email: 'Kev'},
        {icon: 'profile', name: 'My Profile'},
        {icon: 'logOut', name: 'Sing Out'},
      ] as ArrType[]
    }

  }
}




