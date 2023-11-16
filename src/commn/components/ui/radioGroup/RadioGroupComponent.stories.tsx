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

export const RadioGroupDefault: Story = {
  args: {
    children:
      <><Radio id={'r1'} value={'Default'}/>
        <Radio id={'r2'} value={'RadioGroup'}/>
      </>,
    defaultValue:'Default'
  }
}

export const RadioGroupDisabled: Story = {
  args: {
    children:
      <><Radio id={'r1'} value={'Default'} disabled={true}/>
        <Radio id={'r2'} value={'RadioGroup'} disabled={true}/>
      </>,
    defaultValue:'Default',
    disabled:true
  }
}








