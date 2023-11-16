import {Meta, StoryObj} from "@storybook/react";
import {RadioGroupComponent} from "@/commn/components/ui/radioGroup/RadioGroupComponent.tsx";
import {Radio} from "@/commn/components/ui/radioGroup/Radio.tsx";

const meta = {
  component: RadioGroupComponent,
  tags: ['autodocs'],
  title: 'Components/RadioGroupComponent',
} satisfies Meta<typeof RadioGroupComponent>

export default meta

type Story = StoryObj<typeof meta>

export const RadioGroupDefault: Story = () => {
  return <RadioGroupComponent defaultValue={'Default'}>
    <Radio id={'r1'} value={'Default'}/>
    <Radio id={'r2'} value={'RadioGroup'}/>
  </RadioGroupComponent>
}

export const RadioGroupDissabled: Story = () => {
  return <RadioGroupComponent defaultValue={'RadioGroup'} disabled={true}>
    <Radio id={'r1'} value={'Default'} disabled={true}/>
    <Radio id={'r2'} value={'RadioGroup'} disabled={true}/>
  </RadioGroupComponent>
}







