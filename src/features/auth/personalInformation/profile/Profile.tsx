import { KeyboardEvent, useEffect, useRef, useState } from 'react'

import { AvatarDefault } from '@/assets/image/avaDefault/AvatarDefault'
import { EditIcon } from '@/assets/image/edit/EditIcon'
import { FileDownload } from '@/commn/components/ui/fileDonwold/FileDownload'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'
import { useAuthMutation } from '@/services/lib/auth/useAuthMutation'

import s from './Profile.module.scss'

type Props = {
  isEditingPersonalInfo?: boolean
  setIsEditingPersonalInfo?: (isEdit: boolean) => void
}
export const Profile = ({ isEditingPersonalInfo, setIsEditingPersonalInfo }: Props) => {
  const [isActiveAvatar, setIsActiveAvatar] = useState(false)
  const { data, error, isError, isLoading } = useGetCurrentUserDataQuery()
  const { errorUpdUser, isErrorUpdUser, isLoadingUpdUser, updateUserData } = useAuthMutation()

  const clickTimeoutRef = useRef<null | number>(null) // Таймер для обработки кликов

  const onDoubleClickHandle = () => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current) // Очистить таймер если был установлен
      clickTimeoutRef.current = null // Сбросить ссылку на таймер
      setIsEditingPersonalInfo?.(true) // Двойной клик
    } else {
      clickTimeoutRef.current = window.setTimeout(() => {
        // Один клик
        clickTimeoutRef.current = null // Сбросить ссылку на таймер
      }, 250) // Таймаут для обработки двойного клика
    }
  }

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current) // Очистить таймер при размонтировании
      }
    }
  }, [])

  const handlerOnKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Escape') {
      setIsActiveAvatar(false)
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
          <FileDownload
            className={s.editAvatar}
            disabled={isLoadingUpdUser}
            iconComponent={<EditIcon style={{ padding: '4px' }} />}
            mutation={updateUserData}
            name={'avatar'}
          />
        )}
      </div>
      {!isEditingPersonalInfo && (
        <div className={s.name} onClick={onDoubleClickHandle}>
          <TextFormat variant={'h2'}>{data?.name ? data?.name : 'Ivan'}</TextFormat>
          <EditIcon className={s.iconEditName} />
        </div>
      )}
    </div>
  )
}
