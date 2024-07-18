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
import { Page } from '@/features/pages/Page'
import { CreateDeck } from '@/services/decks/createDeck/CreateDeck'
import { useGetDecksQuery } from '@/services/decks/decksService'

import s from './Decks.module.scss'

export const Decks = () => {
  //rrm search params ------------
  const [searchParams, setSearchParams] = useSearchParams({ name: '', page: '1' }) //МОжем испю вместо стейта хз зачем

  const page = Number(searchParams.get('page'))
  const name = searchParams.get('name')
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

  const [itemPage, setItemPage] = useState(10)

  const { data, error, isError, isLoading } = useGetDecksQuery({
    // как useEffect поулчаем данные
    currentPage: page || 1, //было просто page если use useState
    itemsPerPage: itemPage,
    name: name ?? undefined,
  }) //из query возвращается обьект из mutation картэш(массив с заранее определенными элементами)

  //table ----------------------
  const headers = [
    { id: 1, title: 'Name' },
    { id: 2, title: 'Cards' },
    { id: 3, title: 'Last Updated' },
    { id: 4, title: 'Created By' },
  ]

  const paragraphs =
    data?.items.map(deck => ({
      cells: [
        { value: deck.name },
        { value: `${deck.cardsCount}` },
        { value: new Date(deck.updated).toLocaleDateString() },
        { value: deck.author.name },
      ],
      idCells: deck.id,
    })) || []

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
              { description: '', trigger: 'MyCards', value: '1' },
              { description: '', trigger: 'AllCards', value: '2' },
            ]}
          />
        </div>
        <div className={s.slider}>
          <SliderValue />
        </div>
        <Button variant={'secondary'}>
          <IconSvg name={'delete'} />
          <TextFormat variant={'subtitle2'}>Clear Filter</TextFormat>
        </Button>
      </div>
      <div className={s.table}>
        <Table headers={headers} paragraphs={paragraphs} />
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
