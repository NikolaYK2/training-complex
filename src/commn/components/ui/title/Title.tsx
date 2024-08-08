import { CSSProperties, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { CardRemover } from '@/commn/components/ui/cardRemover/CardRemover'
import { DropDownMenu, MenuItem } from '@/commn/components/ui/dropDownMenu/DropDownMenu'
import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'
import { HoverIconImage } from '@/commn/components/ui/hoverIconImage/HoverIconImage'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { EditCards } from '@/features/cards/editCards/EditCards'
import { FavoriteDeck } from '@/features/decks/favoriteDeck/FavoriteDeck'
import { useRedirectLearn } from '@/features/decks/learnDeck/lib/useRedirectLearn'
import { useDeleteDeckMutation } from '@/services/decks/decksService'

import s from './Title.module.scss'

export type TitleProps = {
  children: ReactNode
  idCard?: string
  imageDeck?: null | string
  isDeck?: boolean
  isFavorite?: boolean
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
  isFavorite,
  isNotItem = false,
  isPrivateCard,
  isUserId = false,
  marginBot,
  nameDeck,
}: TitleProps) => {
  const styles: CSSProperties = { marginBottom: marginBot }
  const [isActivePreview, setActivePreview] = useState(false)
  const [
    deleteDeck,
    { error: errorDeleteDeck, isError: isErrorDeleteDeck, isLoading: isLoadingDeleteDeck },
  ] = useDeleteDeckMutation()
  const navigate = useNavigate()
  const { handleRedirectLearnClick } = useRedirectLearn({ idCard })

  const handleImageClick = () => {
    setActivePreview(true)
  }

  const handlePreviewClose = () => {
    setActivePreview(false)
  }

  return (
    <div className={s.containerTitle} id={'title'} style={styles}>
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
                        <EditCards
                          cover={imageDeck}
                          idCard={idCard}
                          isPrivateCard={isPrivateCard}
                          name={nameDeck}
                        />
                      ),

                      icon: 'edit',
                      key: 'edit',
                    },
                    {
                      buttonName: 'delete',
                      classNameButton: 'deleteAnimation',
                      element: (
                        <CardRemover
                          buttonName={'delete pack'}
                          className={s.cardRemover}
                          error={errorDeleteDeck}
                          idCard={idCard ?? ''}
                          isError={isErrorDeleteDeck}
                          isLoading={isLoadingDeleteDeck}
                          mutationDeck={deleteDeck}
                          navigate={navigate}
                          text={`Do you really want to remove /${nameDeck}? All cards will be deleted.`}
                          titleName={'delete pack'}
                        />
                      ),
                      icon: 'delete',
                      key: 'delete',
                    },
                  ],
                  trigger: { icon: 'setting' },
                }}
              />
            </div>
          )}
          {idCard && (
            <FavoriteDeck
              className={s.favoriteDeck}
              idCard={idCard ?? ''}
              isFavorite={isFavorite ?? false}
            />
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
