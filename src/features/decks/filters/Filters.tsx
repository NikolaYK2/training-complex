import { DeleteIcon } from '@/assets/image/delete/DeleteIcon'
import { FilterIcon } from '@/assets/image/filter/FilterIcon'
import { LikeIcon } from '@/assets/image/like/LikeIcon'
import { Button } from '@/commn/components/ui/button'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { Search } from '@/commn/components/ui/search/Search'
import { SliderValue } from '@/commn/components/ui/slider/SliderValue'
import { TabSwitcher } from '@/commn/components/ui/tabSwitcher/TabSwitcher'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { DECKS_KEY_SEARCH_PARAMS, UpdateSearchParamType } from '@/commn/hooks/useSearchUpdateParams'
import { useMenuVisibility } from '@/features/decks/filters/lib/useMenuVisibility'
import { ResponseType } from '@/services/auth/AuthTypes'

import s from './Filters.module.scss'

type Props = {
  activeTab: string
  callback?: () => void
  dataUserData: ResponseType | null | undefined
  favoritedBy: string
  maxCards: number
  minCards: number
  name: string
  updateSearchParam: ({ key, removeKeys, replace, value }: UpdateSearchParamType) => void
}
export const Filters = ({
  activeTab,
  callback,
  dataUserData,
  favoritedBy,
  maxCards,
  minCards,
  name,
  updateSearchParam,
}: Props) => {
  const { handleClickStopPropagation, handleToggleMenu, isMenuVisible } = useMenuVisibility()

  const setAuthorDecks = (authorId: string) => {
    updateSearchParam({
      key: DECKS_KEY_SEARCH_PARAMS.authorId,
      removeKeys: [DECKS_KEY_SEARCH_PARAMS.page],
      value: authorId,
    })
  }

  const setCountMinDecks = (countMin: number) => {
    updateSearchParam({
      key: DECKS_KEY_SEARCH_PARAMS.minCardsCount,
      removeKeys: [DECKS_KEY_SEARCH_PARAMS.page],
      value: countMin,
    })
  }
  const setCountMaxDecks = (countMax: number) => {
    updateSearchParam({
      key: DECKS_KEY_SEARCH_PARAMS.maxCardsCount,
      removeKeys: [DECKS_KEY_SEARCH_PARAMS.page],
      value: countMax,
    })
  }

  const setSearch = (name: string) => {
    updateSearchParam({
      key: DECKS_KEY_SEARCH_PARAMS.searchName,
      removeKeys: [DECKS_KEY_SEARCH_PARAMS.page, DECKS_KEY_SEARCH_PARAMS.minCardsCount],
      value: name,
    })
  }

  const setFavoriteDeck = (clear?: string) => {
    const newValue = favoritedBy === '~caller' ? '' : '~caller'

    updateSearchParam({
      key: DECKS_KEY_SEARCH_PARAMS.favoritedBy,
      removeKeys: [DECKS_KEY_SEARCH_PARAMS.page],
      value: clear === 'off' ? '' : newValue,
    })
  }

  const handleClearFilter = () => {
    callback?.()
    setFavoriteDeck('off')
  }

  return (
    <div className={s.filters}>
      <div className={s.search}>
        <Search searchName={name} setSearch={setSearch} />
        <FilterIcon callBack={handleToggleMenu} className={s.filterIcon} />
      </div>
      <div
        className={`${s.mobile} ${isMenuVisible ? s.mobileActive : ''}`}
        onClick={handleToggleMenu}
      >
        <div className={s.containerFilters} onClick={handleClickStopPropagation}>
          <div className={s.blockMenuFilters}>
            <TextFormat variant={'h1'}>Filter</TextFormat>
            <div className={s.iconClose} onClick={handleToggleMenu}>
              <IconSvg name={'close'} />
            </div>
          </div>
          <div className={s.tab}>
            <TextFormat style={{ marginBottom: '5px' }} variant={'body2'}>
              Show decks cards
            </TextFormat>

            <TabSwitcher
              activeTab={activeTab}
              tabInfo={[
                {
                  callback: setAuthorDecks,
                  trigger: 'My Cards',
                  value: dataUserData?.id ?? '',
                },
                {
                  callback: setAuthorDecks,
                  trigger: 'All Cards',
                  value: DECKS_KEY_SEARCH_PARAMS.default,
                },
                {
                  callback: setFavoriteDeck,
                  iconTrigger: <LikeIcon isActive={!!favoritedBy} position={'absolute'} />,
                  value: 'caller' ?? '',
                },
              ]}
            />
          </div>
          <div className={s.slider}>
            <TextFormat style={{ marginBottom: '5px' }} variant={'body2'}>
              Number of cards
            </TextFormat>

            <SliderValue
              maxValue={maxCards}
              minValue={minCards}
              setCountMaxDecks={setCountMaxDecks}
              setCountMinDecks={setCountMinDecks}
            />
          </div>
          <Button className={s.deleteBtn} onClick={handleClearFilter} variant={'secondary'}>
            <DeleteIcon className={s.deleteIcon} />
            <TextFormat variant={'subtitle2'}>Clear Filter</TextFormat>
          </Button>
        </div>
      </div>
    </div>
  )
}
