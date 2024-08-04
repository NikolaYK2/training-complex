import type { Meta, StoryObj } from '@storybook/react'

import { ImageIcon } from '@/assets/image/image/ImageIcon'
import { TickBox } from '@/commn/components/ui/checkBox/TickBox'
import { FileDownload } from '@/commn/components/ui/fileDonwold/FileDownload'
import { TextField } from '@/commn/components/ui/input/TextField'
import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { SelectItem, Selector } from '@/commn/components/ui/selector/Selector'

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
        <Selector key={'1'}>
          <SelectItem key={'10'} value={'10'}>
            10
          </SelectItem>
          <SelectItem key={'20'} value={'20'}>
            20
          </SelectItem>
          <SelectItem key={'50'} value={'50'}>
            50
          </SelectItem>
          <SelectItem key={'100'} value={'100'}>
            100
          </SelectItem>
        </Selector>,
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
      titleContent={'add new deck'}
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
