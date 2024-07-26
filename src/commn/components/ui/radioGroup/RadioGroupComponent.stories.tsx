import { Radio } from '@/commn/components/ui/radioGroup/Radio'
import { RadioGroupComponent } from '@/commn/components/ui/radioGroup/RadioGroupComponent'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: RadioGroupComponent,
  tags: ['autodocs'],
  title: 'Components/RadioGroupComponent',
} satisfies Meta<typeof RadioGroupComponent>

export default meta

type Story = StoryObj<typeof meta>

export const RadioGroupDefault: Story = {
  args: {
    children: (
      <>
        <Radio id={'r1'} label={'Default'} value={'r1'} />
        <Radio id={'r2'} label={'RadioGroup'} value={'r2'} />
      </>
    ),
    name: 'r1',
    value: 'r1',
  },
}

export const RadioGroupDisabled: Story = {
  args: {
    children: (
      <>
        <Radio disabled id={'r1'} label={'Default'} value={'r1'} />
        <Radio disabled id={'r2'} label={'RadioGroup'} value={'r2'} />
      </>
    ),
    name: 'r1',
    value: 'r1',
  },
}
