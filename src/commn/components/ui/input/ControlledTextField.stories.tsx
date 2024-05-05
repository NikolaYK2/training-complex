import type {Meta, StoryObj} from "@storybook/react";
import {ControlledTextField} from "@/commn/components/ui/input/ControlledTextField.tsx";

const meta: Meta<typeof ControlledTextField> = {
  argTypes: {
    typeInput: {type: 'string'},
    label: {type: 'string'},
  },
  tags: ['autodocs'],
  title: 'Components/ControlInput',
  component: ControlledTextField,
}

export default meta

type Story = StoryObj

export const ControlledInput: Story = {
  args: {
    typeInput: 'password',
    label: 'Password'
  }
}