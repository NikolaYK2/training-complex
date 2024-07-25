import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { IconName, IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

type TriggerType = {
  icon?: 'setting'
  imag?: string
  title?: string
}
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
  trigger: TriggerType
}
type Props = {
  classNameMenuArrow?: string
  menuConfig: MenuType
}
/**
 * Example of use:
 *
 * const menuConfig: MenuType = {
 *   trigger: {
 *   title: 'name',
 *   icon:'icon'
 *   }, - for open menu
 *   content: [ - content menu
 *     { icon: 'learn', buttonName: 'Learn' },
 *     { icon: 'edit', buttonName: 'Edit' },
 *     { icon: 'delete', buttonName: 'Delete' },
 *   ]
 * };
 */
export const DropDownMenu = ({ classNameMenuArrow, menuConfig }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.triggerBlock} type={'submit'}>
          {menuConfig.trigger.title && (
            <span className={s.titleTrigger}>
              <TextFormat variant={'subtitle1'}>{menuConfig.trigger.title}</TextFormat>
            </span>
          )}
          {menuConfig.trigger.imag && (
            <div className={s.triggerAvatar}>
              <img alt={'avatar'} src={menuConfig.trigger.imag} />
            </div>
          )}
          {menuConfig.trigger.icon && (
            <div className={s.triggerIcon}>
              <IconSvg name={menuConfig.trigger.icon} />
            </div>
          )}
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
          <DropdownMenu.Arrow className={`${s.menuArrow} ${classNameMenuArrow || ''}`} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
