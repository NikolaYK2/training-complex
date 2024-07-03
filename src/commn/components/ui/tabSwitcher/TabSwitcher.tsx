import * as Tabs from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'

type TabInfo = {
  description: string
  trigger: string
  value: string
}
type Props = {
  tabInfo: TabInfo[]
}
export const TabSwitcher = ({ tabInfo }: Props) => {
  // const arr = [
  //   {
  //     name: 'Switcher1',
  //     p: "Make changes to your account here. Click save when you're done.",
  //     value: 'tab1',
  //   },
  //   { name: 'Switcher2', p: 'Nice to meet you', value: 'tab2' },
  //   { name: 'Switcher3', p: 'Ooooh', value: 'tab3' },
  //   { name: 'Switcher4', p: 'Sexy', value: 'tab4' },
  //   { name: 'Switcher5', p: 'XXX 18+ very warm!', value: 'tab5' },
  // ]

  return (
    <Tabs.Root className={s.container} defaultValue={'tab1'}>
      <Tabs.List>
        {tabInfo.map(el => (
          <Tabs.Trigger className={s.blockTab} key={el.trigger} value={el.value}>
            {el.trigger}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabInfo.map(el => (
        <Tabs.Content key={el.trigger} value={el.value}>
          <p className={'Text'}>{el.description}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
