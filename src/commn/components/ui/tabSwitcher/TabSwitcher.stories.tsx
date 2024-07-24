import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '@/commn/components/ui/tabSwitcher/TabSwitcher'
import * as Tabs from '@radix-ui/react-tabs'

import s from '@/commn/components/ui/tabSwitcher/TabSwitcher.module.scss'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/Tab',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Tab: Story = {
  args: {
    activeTab: '',
    tabInfo: [],
  },
}

export const TabDisabled = () => {
  const arr = [
    {
      dis: false,
      name: 'Switcher1',
      p: "Make changes to your account here. Click save when you're done.",
      value: 'tab1',
    },
    { dis: false, name: 'Switcher2', p: 'Nice to meet you', value: 'tab2' },
    { dis: true, name: 'Switcher3', p: 'Ooooh', value: 'tab3' },
    { dis: false, name: 'Switcher4', p: 'Sexy', value: 'tab4' },
    { dis: true, name: 'Switcher5', p: 'XXX 18+ very warm!', value: 'tab5' },
  ]

  return (
    <Tabs.Root className={s.container} defaultValue={'tab1'}>
      <Tabs.List>
        {arr.map(el => (
          <Tabs.Trigger className={s.blockTab} disabled={el.dis} key={el.name} value={el.value}>
            {el.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {arr.map(el => (
        <Tabs.Content key={el.name} value={el.value}>
          <p className={'Text'}>{el.p}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
