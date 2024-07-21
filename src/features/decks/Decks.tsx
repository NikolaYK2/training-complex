import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextField } from '@/commn/components/ui/input/TextField'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Pagination } from '@/commn/components/ui/pagination/Pagination'
import { SliderValue } from '@/commn/components/ui/slider/SliderValue'
import { TabSwitcher } from '@/commn/components/ui/tabSwitcher/TabSwitcher'
import { Table } from '@/commn/components/ui/tables/Table'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { CreateDeck } from '@/features/decks/createDeck/CreateDeck'
import { Page } from '@/features/pages/Page'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'
import { useGetDecksQuery } from '@/services/decks/decksService'

import s from './Decks.module.scss'

export const Decks = () => {
  //rrm search params ------------
  const [searchParams, setSearchParams] = useSearchParams({
    authorId: '',
    maxCardsCount: '',
    minCardsCount: '',
    name: '',
    page: '',
  })

  const page = Number(searchParams.get('page'))
  const name = searchParams.get('name')
  const authorId = searchParams.get('authorId')
  const minCards = Number(searchParams.get('minCardsCount'))
  const maxCards = Number(searchParams.get('maxCardsCount'))
  const setPage = (page: number) => {
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
    // setSearchParams({ page: page.toString() })
  }
  const setSearch = (name: string) => {
    if (name === '') {
      searchParams.delete('name')
    } else {
      searchParams.set('name', name)
    }
    searchParams.set('page', '1')

    setSearchParams(searchParams)
  }

  const setAuthorDecks = (authorId: string) => {
    const newParams = new URLSearchParams(searchParams.toString())

    if (authorId === '') {
      newParams.delete('authorId')
    } else {
      newParams.set('authorId', authorId.toString())
    }
    setSearchParams(newParams)
  }

  const setCountMinDecks = (countMin: number) => {
    const count = countMin.toString()

    if (count === '') {
      searchParams.delete('minCardsCount')
    } else {
      searchParams.set('minCardsCount', countMin.toString())
    }
    setSearchParams(searchParams)
  }

  const setCountMaxDecks = (countMax: number) => {
    const count = countMax.toString()

    if (count === '') {
      searchParams.delete('maxCardsCount')
    } else {
      searchParams.set('maxCardsCount', countMax.toString())
    }
    setSearchParams(searchParams)
  }

  const [itemPage, setItemPage] = useState(10)

  const { data, error, isError, isLoading } = useGetDecksQuery({
    authorId: authorId ?? undefined,
    // как useEffect поулчаем данные
    currentPage: page || 1, //было просто page если use useState
    itemsPerPage: itemPage,
    maxCardsCount: maxCards ?? undefined,
    minCardsCount: minCards ?? undefined,
    name: name ?? undefined,
  }) //из query возвращается обьект из mutation картэш(массив с заранее определенными элементами)

  const { data: dataUserData } = useGetCurrentUserDataQuery()

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    console.error(error)

    return <div>Error</div>
  }

  return (
    <Page>
      <div className={s.deck}>
        <TextFormat variant={'h1'}>Decks list</TextFormat>
        <CreateDeck />
      </div>
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
          <TabSwitcher
            tabInfo={[
              {
                callback: setAuthorDecks,
                trigger: 'My Cards',
                value: dataUserData?.id ?? '',
              },
              { callback: setAuthorDecks, trigger: 'All Cards', value: 'default' },
            ]}
          />
        </div>
        <div className={s.slider}>
          <SliderValue
            maxValue={maxCards ? +maxCards : 100}
            minValue={minCards ? +minCards : 0}
            setCountMaxDecks={setCountMaxDecks}
            setCountMinDecks={setCountMinDecks}
          />
        </div>
        <Button variant={'secondary'}>
          <IconSvg name={'delete'} />
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
                { img: deck.cover, value: deck.name },
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
    </Page>
  )
}
