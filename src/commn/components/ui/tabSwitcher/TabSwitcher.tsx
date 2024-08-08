import { ReactElement } from 'react'

import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import * as Tabs from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'

type TabInfo = {
  callback: (value: string) => void
  description?: string
  iconTrigger?: ReactElement
  trigger?: string
  value: 'default' | string
}
type Props = {
  activeTab: string
  tabInfo: TabInfo[]
}
/**
 * TabSwitcher component to manage tab navigation and content rendering.
 *
 * Usage:
 * <TabSwitcher
 *   activeTab={activeTab} //active tab
 *   tabInfo={[
 *     {
 *       callback: setAuthorDecks,
 *       trigger: 'My Cards',
 *       value: dataUserData?.id ?? '',
 *     },
 *     {
 *       callback: setAuthorDecks,
 *       trigger: 'All Cards',
 *       value: 'default', watching all cards
 *     },
 *   ]}
 * />
 */
export const TabSwitcher = ({ activeTab, tabInfo }: Props) => {
  const handleClick = (value: string, callback: (value: string) => void) => {
    if (value === 'default') {
      callback('')
    } else {
      callback(value)
    }
  }

  return (
    <Tabs.Root className={`${s.container}`} value={activeTab}>
      <Tabs.List className={s.list}>
        {tabInfo.map(el => (
          <Tabs.Trigger
            className={s.blockTab}
            key={el.value}
            onClick={() => handleClick(el.value, el.callback)}
            value={el.value ?? ''}
          >
            {el.trigger && <TextFormat variant={'body1'}>{el.trigger}</TextFormat>}
            {el.iconTrigger && <label className={s.iconTrigger}>{el.iconTrigger}</label>}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabInfo.map(el => (
        <Tabs.Content className={s.content} key={el.value} value={el.value ? el.value : ''}>
          <p className={s.text}>{el.description}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
