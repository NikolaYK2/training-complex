import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { IconName, IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

export type MenuItem = {
  buttonName: string
  callback?: () => void
  className?: string
  email?: string
  icon: 'avatar' | 'delete' | 'edit' | 'learn' | 'logOut' | 'profile' | string
  route?: string
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
              className={`${s.item} ${el.className ? el.className : ''}`}
              key={el.icon}
            >
              <Button
                as={el.route ? Link : 'button'}
                className={s.block}
                onClick={el.callback}
                to={el.route ?? ''}
              >
                <div className={`${el.email ? s.avatar : s.iconSlot}`}>
                  {el.email ? (
                    <img alt={'avatar'} src={el.icon} />
                  ) : (
                    <IconSvg name={el.email ? 'avatar' : (el.icon as IconName)} />
                  )}
                </div>
                <div className={`${s.text}`}>
                  <span>{el.buttonName}</span>
                  <span>{el.email}</span>
                </div>
              </Button>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className={s.menuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
