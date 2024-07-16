import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { AvatarDefault } from '@/assets/image/avaDefault/AvatarDefault'
import { EditIcon } from '@/assets/image/edit/EditIcon'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useGetCurrentUserDataQuery, useUpdateUserDataMutation } from '@/services/auth/authService'

import s from './Profile.module.scss'

type Props = {
  isEditingPersonalInfo?: boolean
  setIsEditingPersonalInfo?: (isEdit: boolean) => void
}
export const Profile = ({ isEditingPersonalInfo, setIsEditingPersonalInfo }: Props) => {
  const [isActiveAvatar, setIsActiveAvatar] = useState(false)
  const { data, error, isError, isLoading } = useGetCurrentUserDataQuery()
  const [
    updateUserData,
    { error: errorUpdUser, isError: isErrorUpdUser, isLoading: isLoadingUpdUser },
  ] = useUpdateUserDataMutation()

  const onDoubleClickHandle = () => {
    setIsEditingPersonalInfo?.(true)
  }
  const handlerOnKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Escape') {
      setIsActiveAvatar(false)
    }
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const formData: FormData = new FormData()

      formData.append('avatar', e.target.files[0])

      try {
        await updateUserData(formData)
      } catch (error) {
        console.error('Error updating user data:', error)
      }
    }
  }

  if (isLoading) {
    return <Loading />
  }

  if (isError || isErrorUpdUser) {
    if (error) {
      return <div>Error: {JSON.stringify(error)}</div>
    }
    if (errorUpdUser) {
      return <div>Error: {JSON.stringify(errorUpdUser)}</div>
    }
  }

  return (
    <div className={s.blockPersonalInfo}>
      <div className={`${s.avatarBlock}`}>
        <div
          className={`${s.avatar} ${isActiveAvatar ? s.fullScreenAvatar : ''}`}
          onClick={() => setIsActiveAvatar(!isActiveAvatar)}
          onKeyDown={handlerOnKeyDown}
          tabIndex={0}
        >
          {isLoadingUpdUser && <Loading />}
          {data?.avatar ? <img alt={'ava'} src={data?.avatar} /> : <AvatarDefault />}
        </div>
        {!isEditingPersonalInfo && (
          <label className={s.editAvatar}>
            <input
              className={s.editInput}
              disabled={isLoadingUpdUser && true}
              onChange={handleFileChange}
              type={'file'}
            />
            <EditIcon style={{ padding: '4px' }} />
          </label>
        )}
      </div>
      {!isEditingPersonalInfo && (
        <div className={s.name} onDoubleClick={onDoubleClickHandle}>
          <TextFormat variant={'h2'}>{data?.name ? data?.name : 'Ivan'}</TextFormat>
          <EditIcon className={s.iconEditName} />
        </div>
      )}
    </div>
  )
}
