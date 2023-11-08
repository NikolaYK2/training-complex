import type {Meta, StoryObj} from '@storybook/react'
import * as Checkbox from '@radix-ui/react-checkbox';
import {TickBox} from "@/commn/components/ui/checkBox/TickBox";
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";
import s from "@/commn/components/ui/checkBox/TickBox.module.scss";

const meta = {
  argTypes: {
  },
  component: TickBox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof TickBox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {}

export const CheckedDisabled = ()=>{
  return     <div className={s.container}>
    <label className={s.clickEffect}>
      <Checkbox.Root className={s.rootBlock} defaultChecked id="c1" disabled>
        <Checkbox.Indicator className={s.indicator}>
          <IconSvg name={"tick"}/>
        </Checkbox.Indicator>
      </Checkbox.Root>
    </label>
    <label className={s.label} htmlFor="c1">
      Accept terms and conditions.
    </label>
  </div>

}



