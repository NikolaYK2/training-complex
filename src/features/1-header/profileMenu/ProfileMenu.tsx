import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { DropDownMenu } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { LayoutProps } from '@/commn/components/ui/layout/Layout'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { manageFeedback } from '@/commn/utils/manageFeedback'
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@/routes/Router'
import { useDeleteAccountMutation, useLogoutMutation } from '@/services/auth/authService'

import s from './ProfileMenu.module.scss'

export const ProfileMenu = ({ avatar, email, name }: LayoutProps) => {
  const me = Boolean(email)
  const [logout, { isLoading: isLoadLogOut }] = useLogoutMutation()
  const [deleteAccount, { isLoading: isLoadingDeleteAcc }] = useDeleteAccountMutation()
  const dispatch = useDispatch()

  const handleLogOut = async () => {
    try {
      await logout()
    } catch (e) {
      manageFeedback({ data: e, dispatch, type: 'error' })
    }
  }
  const handleDeleteAccount = async () => {
    try {
      await deleteAccount()
    } catch (e) {
      manageFeedback({ data: e, dispatch, type: 'error' })
    }
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
                classNameButton: 'iconProfileAnimation',
                icon: 'profile',
                route: PROFILE_ROUTE,
              },
              {
                buttonName: 'sign out',
                callback: handleLogOut,
                classNameButton: 'iconLogOutAnimation',
                disabled: isLoadLogOut,
                icon: 'logOut',
              },
              {
                buttonName: 'delete account',
                callback: handleDeleteAccount,
                classNameButton: 'deleteAnimation',
                disabled: isLoadingDeleteAcc,
                icon: 'delete',
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
