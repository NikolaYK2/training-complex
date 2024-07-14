import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

export type MenuItem = {
  buttonName: string
  className?: string
  email?: string
  icon: 'avatar' | 'delete' | 'edit' | 'learn' | 'logOut' | 'profile'
}
type MenuType = {
  content: MenuItem[]
  trigger: string
}
type Props = {
  menuConfig: MenuType
}
/**
 * Example of use:
 *
 * const menuConfig: MenuType = {
 *   trigger: 'icon', - for open menu
 *   content: [ - content menu
 *     { icon: 'learn', buttonName: 'Learn' },
 *     { icon: 'edit', buttonName: 'Edit' },
 *     { icon: 'delete', buttonName: 'Delete' },
 *   ]
 * };
 */
export const DropDownMenu = ({ menuConfig }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={'IconButton'} type={'submit'}>
          {menuConfig.trigger}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content} sideOffset={5}>
          {menuConfig.content.map(el => (
            <DropdownMenu.Item
              className={`${s.item} ${!el.email ? s.isActive : ''} ${
                el.className ? el.className : ''
              }`}
              key={el.icon}
            >
              <div className={`${el.email ? s.avatar : s.iconSlot}`}>
                <IconSvg name={el.icon} />
              </div>
              <div className={`${s.text}`}>
                <span>{el.buttonName}</span>
                <span>{el.email}</span>
              </div>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className={s.menuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
