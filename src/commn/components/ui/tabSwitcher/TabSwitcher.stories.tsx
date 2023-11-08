import type {Meta, StoryObj} from '@storybook/react'
import {TabSwitcher} from "@/commn/components/ui/tabSwitcher/TabSwitcher.tsx";
import * as Tabs from '@radix-ui/react-tabs';
import s from "@/commn/components/ui/tabSwitcher/TabSwitcher.module.scss";

const meta = {
  argTypes: {

  },
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/Tab',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Tab: Story = {
  args: {},
}

export const TabDisabled = () => {
  const arr = [
    {value: 'tab1', name: 'Switcher1', p: 'Make changes to your account here. Click save when you\'re done.', dis:false},
    {value: 'tab2', name: 'Switcher2', p: 'Nice to meet you', dis:false},
    {value: 'tab3', name: 'Switcher3', p: 'Ooooh', dis:true},
    {value: 'tab4', name: 'Switcher4', p: 'Sexy', dis:false},
    {value: 'tab5', name: 'Switcher5', p: 'XXX 18+ very warm!', dis:true},
  ]

  return <Tabs.Root className={s.container} defaultValue={'tab1'}>
    <Tabs.List>
      {arr.map(el =>
        <Tabs.Trigger className={s.blockTab} value={el.value} disabled={el.dis}>
          {el.name}
        </Tabs.Trigger>
      )}
    </Tabs.List>
    {arr.map(el =>
      <Tabs.Content value={el.value}>
        <p className="Text">{el.p}</p>
      </Tabs.Content>
    )}
  </Tabs.Root>
}


