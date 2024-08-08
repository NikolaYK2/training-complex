import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { DropDownMenu } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@/routes/Router'
import { useGetCurrentUserDataQuery, useLogoutMutation } from '@/services/auth/authService'

import s from './ProfileMenu.module.scss'

export const ProfileMenu = () => {
  const { data, isError: isErrMe, isLoading: isLoadMe } = useGetCurrentUserDataQuery()
  const me = Boolean(data)
  const [logout] = useLogoutMutation()
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
                buttonName: data?.name ?? '',
                email: data?.email,
                icon: data?.avatar ?? 'avatar',
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
                disabled: isLoadMe,
                icon: 'logOut',
              },
            ],
            trigger: {
              imag: data?.avatar,
              title: data?.name ?? '',
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
