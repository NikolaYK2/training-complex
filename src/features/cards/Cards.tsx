import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { BackTo } from '@/commn/components/ui/backTo/BackTo'
import { Pagination } from '@/commn/components/ui/pagination/Pagination'
import { Rating } from '@/commn/components/ui/rating/Rating'
import { Search } from '@/commn/components/ui/search/Search'
import { Table } from '@/commn/components/ui/tables/Table'
import { Title } from '@/commn/components/ui/title/Title'
import { useSearchUpdateParams } from '@/commn/hooks/useSearchUpdateParams'
import { CreateCard } from '@/features/cards/createCard/CreateCard'
import { Page } from '@/features/pages/Page'
import { CardType } from '@/services/decks/DecksTypes'
import { useGetDeckByIdQuery, useRetrieveCardsInDeckQuery } from '@/services/decks/decksService'

import s from './Cards.module.scss'

const CARDS_KEY_SEARCH_PARAMS = {
  page: 'page',
  pageDeckSaveHistory: 'pageDeck',
  searchName: 'question',
}

export const Cards = () => {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const { page: pageSaveDeck } = (location.state as { page: string }) || {}

  const { searchParams, updateSearchParam } = useSearchUpdateParams({
    pageDeck: pageSaveDeck,
  })
  const [itemPage, setItemPage] = useState(10)
  const pageDeck = searchParams?.get(CARDS_KEY_SEARCH_PARAMS.pageDeckSaveHistory)

  const page = Number(searchParams.get(CARDS_KEY_SEARCH_PARAMS.page)) || 1
  const searchName = searchParams.get(CARDS_KEY_SEARCH_PARAMS.searchName) || ''

  const { data: dataCards } = useRetrieveCardsInDeckQuery({
    currentPage: page,
    id: id ? id : '',
    itemsPerPage: itemPage,
    question: searchName || undefined,
  })
  const { data: dataDeckBy } = useGetDeckByIdQuery({
    id: id ?? '',
  })

  const setCurrentPage = (page: number) => {
    updateSearchParam(CARDS_KEY_SEARCH_PARAMS.page, page)
  }

  const setSearch = (searchName: string) => {
    updateSearchParam(CARDS_KEY_SEARCH_PARAMS.searchName, searchName)
  }

  return (
    <Page marginTop={'var(--margin-top-page-link'}>
      <BackTo nameLink={'Back to Decks List'} saveHistoryPage={pageDeck} />
      <Title
        imageTitle={dataDeckBy?.cover}
        isNotItem={!dataDeckBy?.cardsCount}
        marginBot={'2.381%'}
        name={dataDeckBy?.name}
      >
        <CreateCard />
      </Title>
      {!!dataDeckBy?.cardsCount && (
        <>
          <Search className={s.search} searchName={searchName} setSearch={setSearch} />
          <Table
            headers={[
              { id: 1, title: 'Question' },
              { id: 2, title: 'Answer' },
              { id: 3, title: 'Last Updated' },
              { id: 4, title: 'Grade' },
            ]}
            paragraphs={dataCards?.items.map((card: CardType) => ({
              cells: [
                { img: card.answerImg, value: card.question },
                { img: card.answerImg, value: card.answer },
                { value: new Date(card.updated).toLocaleDateString() },
                {
                  element: [
                    <Rating hoveredStarValue={1} key={'rating'} ratingValue={1} stars={5} />,
                  ],
                },
              ],
              idCells: card.id,
            }))}
          />
        </>
      )}
      <Pagination
        currentPage={page}
        onPageChange={setCurrentPage}
        pageSize={1}
        setPageSize={setItemPage}
        siblingCount={1}
        totalCount={dataCards?.pagination?.totalPages ?? 1}
      />
    </Page>
  )
}
