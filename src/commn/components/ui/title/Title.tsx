import { CSSProperties, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { DropDownMenu } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { DECK_ROUTE, LEARN_ROUTE } from '@/routes/Router'

import s from './Title.module.scss'

type Props = {
  children: ReactNode
  idCard?: string
  imageTitle?: null | string
  isNotItem?: boolean
  isUserId?: boolean
  marginBot?: CSSProperties['marginBottom']
  name: string | undefined
}
export const Title = ({
  children,
  idCard,
  imageTitle,
  isNotItem = false,
  isUserId = false,
  marginBot,
  name,
}: Props) => {
  const styles: CSSProperties = { marginBottom: marginBot }
  const [isActivePreview, setActivePreview] = useState(false)
  const navigate = useNavigate()

  const handleRedirectLearnClick = () => {
    if (idCard) {
      navigate(`${DECK_ROUTE}/${idCard}${LEARN_ROUTE}`)
    }
  }

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
                    {
                      buttonName: 'learn',
                      callback: handleRedirectLearnClick,
                      className: 'learnAnimation',
                      icon: 'learn',
                    },
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
        {isUserId ? (
          children
        ) : (
          <Button onClick={handleRedirectLearnClick} variant={'primary'}>
            <TextFormat variant={'subtitle2'}>Learn to Pack</TextFormat>
          </Button>
        )}
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
