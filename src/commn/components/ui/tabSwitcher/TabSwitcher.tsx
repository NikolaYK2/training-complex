import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import * as Tabs from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'

type TabInfo = {
  callback: (value: string) => void
  description?: string
  trigger: string
  value: string | undefined
}
type Props = {
  tabInfo: TabInfo[]
}
/**
 * TabSwitcher component to manage tab navigation and content rendering.
 *
 * Usage:
 * <TabSwitcher
 *   tabInfo={[
 *     {
 *       callback: setAuthorDecks,
 *       trigger: 'My Cards',
 *       value: dataUserData?.id ?? '',
 *     },
 *     {
 *       callback: setAuthorDecks,
 *       trigger: 'All Cards',
 *       value: 'default',
 *     },
 *   ]}
 * />
 */ export const TabSwitcher = ({ tabInfo }: Props) => {
  // Determine the default value for Tabs.Root
  const defaultValue = tabInfo.find(el => el.value === 'default')?.value ?? tabInfo[0]?.value ?? ''

  return (
    <Tabs.Root className={s.container} defaultValue={defaultValue}>
      <Tabs.List>
        {tabInfo.map(el => (
          <Tabs.Trigger
            className={s.blockTab}
            key={el.trigger}
            onClick={() => el.callback(el.value === 'default' ? '' : el.value ?? '')}
            value={el.value ?? ''}
          >
            <TextFormat variant={'body1'}>{el.trigger}</TextFormat>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabInfo.map(el => (
        <Tabs.Content key={el.trigger} value={el.value ? el.value : ''}>
          <p className={'Text'}>{el.description}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
