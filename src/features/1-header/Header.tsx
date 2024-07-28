import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { DropDownMenu } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '@/routes/Router'
import { useGetCurrentUserDataQuery, useLogoutMutation } from '@/services/auth/authService'

import s from './Header.module.scss'

export const Header = () => {
  const { data, error, isError } = useGetCurrentUserDataQuery()
  const [logout, { error: errorLogout, isError: isErrorLogout, isLoading: isLoadingLogout }] =
    useLogoutMutation()
  const isLogin = false

  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>
  }
  if (isErrorLogout) {
    return <div>Error: {JSON.stringify(errorLogout)}</div>
  }

  // if (isLoading) {
  //   return <Loading />
  // }
  if (isLoadingLogout) {
    return <Loading />
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link className={s.logo} to={HOME_ROUTE}>
          <IconSvg name={'logo'} />
        </Link>
        {isLogin ? (
          <Button as={Link} to={LOGIN_ROUTE} variant={'secondary'}>
            <TextFormat variant={'subtitle2'}>Sign In</TextFormat>
          </Button>
        ) : (
          <DropDownMenu
            classNameMenuArrow={s.arrow}
            menuConfig={{
              content: [
                {
                  buttonName: data?.name ?? '',
                  email: data?.email,
                  icon: data?.avatar ?? 'avatar',
                },
                {
                  buttonName: 'My profile',
                  classNameButton: 'iconProfile',
                  icon: 'profile',
                  route: PROFILE_ROUTE,
                },
                {
                  buttonName: 'sign out',
                  callback: logout,
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
        )}
      </div>
    </header>
  )
}
