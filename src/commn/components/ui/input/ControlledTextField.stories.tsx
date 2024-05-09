import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { TypesInput } from '@/commn/components/ui/input/TextField'
import { StoryObj } from '@storybook/react'

const meta = {
  component: ControlledTextField,
  tags: ['autodocs'],
  title: 'Components/ControlInput',
}

export default meta

type Story = StoryObj
type ControlledProps = {
  type: TypesInput
}
const Controlled = ({ type }: ControlledProps) => {
  const { control } = useForm()

  return <ControlledTextField control={control} label={type} name={type} />
}

export const ControlledInput: Story = {
  render: () => <Controlled type={'email'} />,
}
export const ControlledPassword: Story = {
  render: () => <Controlled type={'password'} />,
}

const Search = () => {
  const { control, reset } = useForm({ defaultValues: { search: '' } })

  return <ControlledTextField control={control} name={'search'} reset={reset} />
}

export const ControlledSearch: Story = {
  render: () => <Search />,
}
