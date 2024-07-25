import { CSSProperties, ReactNode, useState } from 'react'

import { DropDownMenu } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './Title.module.scss'

type Props = {
  children: ReactNode
  imageTitle?: null | string
  isNotItem?: boolean
  isUserId?: boolean
  marginBot?: CSSProperties['marginBottom']
  name: string | undefined
}
export const Title = ({
  children,
  imageTitle,
  isNotItem = false,
  isUserId = false,
  marginBot,
  name,
}: Props) => {
  const styles: CSSProperties = { marginBottom: marginBot }
  const [isActivePreview, setActivePreview] = useState(false)

  const handleImageClick = () => {
    setActivePreview(true)
  }

  const handlePreviewClose = () => {
    setActivePreview(false)
  }

  return (
    <div className={s.containerTitle} style={styles}>
      <div className={`${s.blockItem} ${isNotItem ? s.modBlock : ''}`}>
        <div className={s.settingBlock}>
          <TextFormat className={`${s.nameTitle}`} variant={'h1'}>
            {name ?? 'not name'}
          </TextFormat>
          {isUserId && (
            <div className={s.settingItem}>
              <DropDownMenu
                menuConfig={{
                  content: [
                    { buttonName: 'learn', className: 'learnAnimation', icon: 'learn' },
                    { buttonName: 'edit', className: 'editAnimation', icon: 'edit' },
                    { buttonName: 'delete', className: 'deleteAnimation', icon: 'delete' },
                  ],
                  trigger: { icon: 'setting' },
                }}
              />
            </div>
          )}
        </div>
        {isNotItem && (
          <TextFormat className={s.description} variant={'body1'}>
            This pack is empty. Click add new card to fill this pack
          </TextFormat>
        )}
        {children}
      </div>
      {imageTitle && !isNotItem && (
        <div className={s.imageTitle} onClick={handleImageClick}>
          <img alt={'image'} src={imageTitle} />
        </div>
      )}
      {isActivePreview && <FilePreviewPortal onClose={handlePreviewClose} src={imageTitle ?? ''} />}
    </div>
  )
}
