import { KeyboardEvent, useState } from 'react'

import { AvatarDefault } from '@/assets/image/avaDefault/AvatarDefault'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './Profile.module.scss'

type Props = {
  avatar: string
  isEditingPersonalInfo: boolean
  nikName: string
  setIsEditingPersonalInfo: (isEdit: boolean) => void
}
export const Profile = ({
  avatar,
  isEditingPersonalInfo,
  nikName,
  setIsEditingPersonalInfo,
}: Props) => {
  const [isActiveAvatar, setIsActiveAvatar] = useState(false)
  const handlerOnKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Escape') {
      setIsActiveAvatar(false)
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
          {!avatar ? <img alt={'ava'} src={avatar} /> : <AvatarDefault />}
        </div>
        {!isEditingPersonalInfo && (
          <div className={s.editAvatar}>
            <IconSvg name={'edit'} />
          </div>
        )}
      </div>
      {!isEditingPersonalInfo && (
        <div className={s.name} onDoubleClick={() => setIsEditingPersonalInfo(true)}>
          <TextFormat variant={'h2'}>{nikName ? nikName : 'Ivan'}</TextFormat>
          <div className={s.iconEditName}>
            <IconSvg name={'edit'} />
          </div>
        </div>
      )}
    </div>
  )
}
