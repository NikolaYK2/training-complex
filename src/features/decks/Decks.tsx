import { useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

import { DeleteIcon } from '@/assets/image/delete/DeleteIcon'
import { Button } from '@/commn/components/ui/button'
import { TextField } from '@/commn/components/ui/input/TextField'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Pagination } from '@/commn/components/ui/pagination/Pagination'
import { SliderValue } from '@/commn/components/ui/slider/SliderValue'
import { TabSwitcher } from '@/commn/components/ui/tabSwitcher/TabSwitcher'
import { Table } from '@/commn/components/ui/tables/Table'
import { Title } from '@/commn/components/ui/title/Title'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { CreateDeck } from '@/features/decks/createDeck/CreateDeck'
import { Page } from '@/features/pages/Page'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'
import { useGetDecksQuery } from '@/services/decks/decksService'
import { updateSearchParam } from '@/services/decks/lib/updateSearchParam'

import s from './Decks.module.scss'

export const Decks = () => {
  const [itemPage, setItemPage] = useState(10)

  //rrm search params ------------
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const name = searchParams.get('name') || ''
  const authorId = searchParams.get('authorId') || ''
  const minCards = Number(searchParams.get('minCardsCount')) || 0
  const maxCards = Number(searchParams.get('maxCardsCount')) || 100
  const activeTab = authorId || 'default'

  const setPage = (page: number) => {
    updateSearchParam(searchParams, setSearchParams, 'page', page)
  }

  const setSearch = (name: string) => {
    updateSearchParam(searchParams, setSearchParams, 'name', name, setPage)
  }

  const setAuthorDecks = (authorId: string) => {
    updateSearchParam(searchParams, setSearchParams, 'authorId', authorId, setPage)
  }

  const setCountMinDecks = (countMin: number) => {
    updateSearchParam(searchParams, setSearchParams, 'minCardsCount', countMin, setPage)
  }

  const setCountMaxDecks = (countMax: number) => {
    updateSearchParam(searchParams, setSearchParams, 'maxCardsCount', countMax)
  }

  const { data, error, isError, isLoading } = useGetDecksQuery({
    authorId: authorId || undefined,
    currentPage: page, //было просто page если use useState
    itemsPerPage: itemPage,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: name || undefined,
  }) //из query возвращается обьект из mutation картэш(массив с заранее определенными элементами)

  const { data: dataUserData } = useGetCurrentUserDataQuery()

  const handleClearFilter = () => {
    setCountMaxDecks(100)
    setCountMinDecks(0)
    // setPage(1)
  }

  // if (isLoading) {
  //   return <Loading />
  // }
  if (isError) {
    console.error(error)

    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <Page>
      {isLoading && <Loading />}

      <Title name={'Decks list'}>
        <CreateDeck />
      </Title>
      <div className={s.filters}>
        <div className={s.search}>
          <TextField
            onValueChange={setSearch}
            placeholder={'Search...'}
            type={'search'}
            value={name ?? ''}
          />
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
                value: 'default',
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
      <div className={s.table}>
        <Table
          headers={[
            { id: 1, title: 'Name' },
            { id: 2, title: 'Cards' },
            { id: 3, title: 'Last Updated' },
            { id: 4, title: 'Created By' },
          ]}
          paragraphs={
            data?.items.map(deck => ({
              cells: [
                { idDeck: deck.id, img: deck.cover, value: deck.name },
                { value: `${deck.cardsCount}` },
                { value: new Date(deck.updated).toLocaleDateString() },
                { value: deck.author.name },
              ],
              idCells: deck.id,
            })) || []
          }
        />
      </div>
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        pageSize={1}
        setPageSize={setItemPage}
        siblingCount={1}
        totalCount={data?.pagination?.totalPages ?? 1}
      />
      <Outlet />
    </Page>
  )
}
