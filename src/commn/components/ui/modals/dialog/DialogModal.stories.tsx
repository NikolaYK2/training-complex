import type { Meta, StoryObj } from '@storybook/react'

import { TickBox } from '@/commn/components/ui/checkBox/TickBox'
import { TextField } from '@/commn/components/ui/input/TextField'
import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { Select } from '@/commn/components/ui/select/Select'

const meta = {
  argTypes: {},
  component: DialogModal,
  tags: ['autodocs'],
  title: 'Components/DialogModal',
} satisfies Meta<typeof DialogModal>

export default meta
type Story = StoryObj<typeof meta>

export const defaultModal: Story = {}

export const titleModal: Story = {
  args: {
    textH2: 'Title',
  },
}
export const description: Story = {
  args: {
    textP:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa ',
  },
}

export const titleDescription: Story = {
  args: {
    textH2: 'Title',
    textP:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa ',
  },
}

export const modal: Story = {
  render: () => (
    <DialogModal>
      {[
        <Select
          key={1}
          options={[
            { id: 1, value: 'Select-box' },
            { id: 2, value: 'hi maloy' },
            { id: 3, value: 'Sam maloy' },
          ]}
        />,
        <TextField key={'Input1'} typeInput={'text'} />,
        <TextField key={'Input2'} typeInput={'password'} />,
        <TickBox key={'TickBox'} label={'opana!'} />,
      ]}
    </DialogModal>
  ),
}
