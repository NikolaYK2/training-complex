import type {Meta, StoryObj} from '@storybook/react'
import {Select} from "@/commn/components/ui/select/Select.tsx";

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
  decorators:[(Story)=> <div style={{height:'100px'}}><Story/></div>]

} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectStr: Story = {
  args: {
    options: [
      {id: 1, value: 'Select-box'},
      {id: 2, value: 'hi maloy'},
      {id: 3, value: 'Sam maloy'}]
  }
}

export const SelectNums: Story = {
  args: {
    options: [{id: 1, value: '1'}, {id: 2, value: '2'}, {id: 3, value: '3'},]
  }
}

export const Disabled: Story = {
  args: {
    options: [
      {id: 1, value: 'Select-box'},
      {id: 2, value: 'hi maloy'},
      {id: 3, value: 'Sam maloy'}],
    disabled: true
  }
}




