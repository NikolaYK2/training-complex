import type { Meta, StoryObj } from '@storybook/react'

import { ImageIcon } from '@/assets/image/image/ImageIcon'
import { TickBox } from '@/commn/components/ui/checkBox/TickBox'
import { FileDownload } from '@/commn/components/ui/fileDonwold/FileDownload'
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
type Story = StoryObj

export const defaultModal: Story = {
  args: {
    onSubmit: undefined,
    trigger: 'tick',
  },
}

export const titleModal: Story = {
  args: {
    onSubmit: undefined,
    textH2: 'Title',
    trigger: 'tick',
  },
}
export const description: Story = {
  args: {
    onSubmit: undefined,
    textP:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa ',
    trigger: 'tick',
  },
}

export const titleDescription: Story = {
  args: {
    onSubmit: undefined,
    textH2: 'Title',
    textP:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa ',
    trigger: 'tick',
  },
}

export const modal: Story = {
  render: () => (
    <DialogModal isOpenModal setIsOpenModal={() => {}} trigger={'tick'}>
      {[
        <Select
          key={1}
          options={[
            { id: 1, value: 'Select-box' },
            { id: 2, value: 'hi maloy' },
            { id: 3, value: 'Sam maloy' },
          ]}
        />,
        <TextField key={'Input1'} type={'text'} />,
        <TextField key={'Input2'} type={'password'} />,
        <TickBox key={'TickBox'} label={'opana!'} />,
      ]}
    </DialogModal>
  ),
}

export const modalAddDeck: Story = {
  render: () => (
    <DialogModal
      isOpenModal
      onSubmit={() => {}}
      setIsOpenModal={() => {}}
      textH2={'add new deck'}
      trigger={'add new card'}
    >
      {[
        <TextField key={'Input1'} label={'name pack'} type={'text'} value={'name'} />,
        <FileDownload
          buttonName={'upload image'}
          iconComponent={<ImageIcon />}
          key={'input2'}
          name={'cover'}
          onChange={() => {}}
        />,
        <TickBox key={'TickBox'} label={'opana!'} />,
      ]}
    </DialogModal>
  ),
}
