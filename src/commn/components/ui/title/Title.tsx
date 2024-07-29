import { CSSProperties, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { DropDownMenu, MenuItem } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'
import { HoverIconImage } from '@/commn/components/ui/hoverIconImage/HoverIconImage'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { DeleteCard } from '@/features/cards/deleteCard/DeleteCard'
import { EditCard } from '@/features/cards/editCard/EditCard'
import { DECK_ROUTE, LEARN_ROUTE } from '@/routes/Router'

import s from './Title.module.scss'

export type TitleProps = {
  children: ReactNode
  idCard?: string
  imageDeck?: null | string
  isDeck?: boolean
  isNotItem?: boolean
  isPrivateCard?: boolean
  isUserId?: boolean
  marginBot?: CSSProperties['marginBottom']
  nameDeck: string | undefined
}
export const Title = ({
  children,
  idCard,
  imageDeck,
  isDeck = false,
  isNotItem = false,
  isPrivateCard,
  isUserId = false,
  marginBot,
  nameDeck,
}: TitleProps) => {
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
            {nameDeck ?? 'not name'}
          </TextFormat>
          {isUserId && (
            <div className={s.settingItem}>
              <DropDownMenu
                menuConfig={{
                  content: [
                    createLearnMenuItem(isNotItem, handleRedirectLearnClick),
                    {
                      buttonName: 'edit',
                      classNameButton: 'editAnimation',
                      element: (
                        <EditCard
                          cover={imageDeck}
                          idCard={idCard}
                          isPrivateCard={isPrivateCard}
                          name={nameDeck}
                        />
                      ),

                      icon: 'edit',
                      isSelect: true,
                      key: 'edit',
                    },
                    {
                      buttonName: 'delete',
                      classNameButton: 'deleteAnimation',
                      element: <DeleteCard idCard={idCard} nameDeck={nameDeck} />,
                      icon: 'delete',
                      key: 'delete',
                    },
                  ],
                  trigger: { icon: 'setting' },
                }}
              />
            </div>
          )}
        </div>
        {isNotItem && (
          <TextFormat className={s.description} variant={'body1'}>
            {isUserId
              ? 'This pack is empty. Click add new card to fill this pack'
              : 'This pack is empty. Come back later or explore other packs'}
          </TextFormat>
        )}
        {(isUserId || isDeck) && children}
        {!isUserId && !isNotItem && !isDeck && (
          <Button onClick={handleRedirectLearnClick} variant={'primary'}>
            <TextFormat variant={'subtitle2'}>Learn to Pack</TextFormat>
          </Button>
        )}
      </div>
      {imageDeck && !isNotItem && (
        <HoverIconImage callback={handleImageClick} className={s.imageTitle} imgSrc={imageDeck} />
      )}
      {isActivePreview && <FilePreviewPortal onClose={handlePreviewClose} src={imageDeck ?? ''} />}
    </div>
  )
}

const createLearnMenuItem = (isNotItem: boolean, callBack: () => void): MenuItem => {
  if (isNotItem) {
    return {
      buttonName: 'not card',
      classNameButton: 'notFileAnimation',
      icon: 'notFile',
      key: 'learn',
    } as MenuItem
  }

  return {
    buttonName: 'learn',
    callback: callBack,
    classNameButton: 'learnAnimation',
    icon: 'learn',
    key: 'learn',
  }
}
