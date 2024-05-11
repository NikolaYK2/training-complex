import { Form } from '@/commn/components/ui/form/Form'
import { TextField } from '@/commn/components/ui/input/TextField'
import { StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    children: { type: 'ReactNode' },
  },
  component: Form,
  tags: ['autodocs'],
  title: 'Components/Form',
}

export default meta

type Story = StoryObj

export const FormAuth: Story = {
  args: {
    children: [
      <TextField key={'1'} label={'Email'} type={'email'} />,
      <TextField key={'2'} label={'password'} type={'password'} />,
      <TextField key={'3'} type={'search'} />,
      <TextField key={'4'} label={'text'} type={'text'} />,
    ],
  },
}
