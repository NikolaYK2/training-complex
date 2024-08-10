import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { DropDownMenu } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { LayoutProps } from '@/commn/components/ui/layout/Layout'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@/routes/Router'
import { useLogoutMutation } from '@/services/auth/authService'

import s from './ProfileMenu.module.scss'

export const ProfileMenu = ({ avatar, email, name }: LayoutProps) => {
  const me = Boolean(email)
  const [logout, { isLoading: isLoadLogOut }] = useLogoutMutation()
  const handleLogOut = () => {
    logout()
  }

  return (
    <>
      {me ? (
        <DropDownMenu
          classNameMenuArrow={s.arrow}
          menuConfig={{
            content: [
              {
                buttonName: name ?? '',
                email: email,
                icon: avatar ?? 'avatar',
                route: PROFILE_ROUTE,
              },
              {
                buttonName: 'My profile',
                classNameButton: 'iconProfile',
                icon: 'profile',
                route: PROFILE_ROUTE,
              },
              {
                buttonName: 'sign out',
                callback: handleLogOut,
                classNameButton: 'iconLogOut',
                disabled: isLoadLogOut,
                icon: 'logOut',
              },
            ],
            trigger: {
              imag: avatar,
              title: name ?? '',
            },
          }}
        />
      ) : (
        <Button as={Link} to={LOGIN_ROUTE} variant={'secondary'}>
          <TextFormat variant={'subtitle2'}>Sign In</TextFormat>
        </Button>
      )}
    </>
  )
}
