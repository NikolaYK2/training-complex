import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { DropDownMenu } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useGetCurrentUserDataQuery, useLogoutMutation } from '@/services/auth/authService'

import s from './Header.module.scss'

export const Header = () => {
  const { data, error, isError, isLoading } = useGetCurrentUserDataQuery()
  const [logout, { error: errorLogout, isError: isErrorLogout }] = useLogoutMutation()
  const isLogin = false

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <IconSvg name={'logo'} />
        </div>
        {isLogin ? (
          <Button as={Link} to={'/login'} variant={'secondary'}>
            <TextFormat variant={'subtitle2'}>Sign In</TextFormat>
          </Button>
        ) : (
          <DropDownMenu
            menuConfig={{
              content: [
                { buttonName: 'Ivan', email: 'emae', icon: 'avatar' },
                { buttonName: 'My profile', className: 'iconProfile', icon: 'profile' },
                { buttonName: 'sign out', className: 'iconLogOut', icon: 'logOut' },
              ],
              trigger: 'Ivan',
            }}
          ></DropDownMenu>
        )}
      </div>
    </header>
  )
}
