import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { DropDownMenu } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@/routes/Router'
import { useGetCurrentUserDataQuery, useLogoutMutation } from '@/services/auth/authService'

import s from './ProfileMenu.module.scss'

export const ProfileMenu = () => {
  const navigate = useNavigate()
  const { data, error, isError } = useGetCurrentUserDataQuery()
  const [logout, { error: errorLogout, isError: isErrorLogout, isLoading: isLoadingLogout }] =
    useLogoutMutation()
  const isLogin = !isError

  // if (isError) {
  //   return <div>Error: {JSON.stringify(error)}</div>
  // }
  const handleLogOut = async () => {
    await logout()
    navigate(LOGIN_ROUTE)
  }

  if (isErrorLogout) {
    return <div>Error: {JSON.stringify(errorLogout)}</div>
  }

  if (isLoadingLogout) {
    return <Loading />
  }

  return (
    <>
      {isLogin ? (
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
