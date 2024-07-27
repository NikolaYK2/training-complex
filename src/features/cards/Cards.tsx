import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { BackTo } from '@/commn/components/ui/backTo/BackTo'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { Pagination } from '@/commn/components/ui/pagination/Pagination'
import { Rating } from '@/commn/components/ui/rating/Rating'
import { Search } from '@/commn/components/ui/search/Search'
import { PageHistorySaveType, Table } from '@/commn/components/ui/tables/Table'
import { Title } from '@/commn/components/ui/title/Title'
import { useSearchUpdateParams } from '@/commn/hooks/useSearchUpdateParams'
import { CreateCard } from '@/features/cards/createCard/CreateCard'
import { DECK_ROUTE } from '@/routes/Router'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'
import { CardsType } from '@/services/decks/DecksTypes'
import {
  useRetrieveCardsInDeckQuery,
  useRetrieveDeckByIdQuery,
} from '@/services/decks/decksService'

import s from './Cards.module.scss'

const CARDS_KEY_SEARCH_PARAMS = {
  authorIdSaveHistory: 'authorId',
  minCardsCountSaveHistory: 'minCardsCount',
  page: 'page',
  pageDeckSaveHistory: 'pageDeck',
  searchName: 'question',
}

export const Cards = () => {
  const { id: idCard } = useParams<{ id: string }>()
  const { data: dataUser } = useGetCurrentUserDataQuery()
  const location = useLocation()
  const { authorIdSave, minCardsSave, pageDeckSave } =
    (location.state as {
      authorIdSave: string
      minCardsSave: number
      pageDeckSave: number
    } as PageHistorySaveType) || {}

  const { searchParams, updateSearchParam } = useSearchUpdateParams({
    authorId: authorIdSave ?? '',
    minCardsCount: String(minCardsSave) ?? '',
    pageDeck: String(pageDeckSave) ?? '',
  })

  const [itemPage, setItemPage] = useState(10)
  const pageDeck = searchParams.get(CARDS_KEY_SEARCH_PARAMS.pageDeckSaveHistory)
  const authorId = searchParams.get(CARDS_KEY_SEARCH_PARAMS.authorIdSaveHistory)
  const minCardsCount = searchParams.get(CARDS_KEY_SEARCH_PARAMS.minCardsCountSaveHistory)

  const page = Number(searchParams.get(CARDS_KEY_SEARCH_PARAMS.page)) || 1
  const searchName = searchParams.get(CARDS_KEY_SEARCH_PARAMS.searchName) || ''

  const { data: dataCards } = useRetrieveCardsInDeckQuery({
    currentPage: page,
    id: idCard ? idCard : '',
    itemsPerPage: itemPage,
    question: searchName || undefined,
  })
  const {
    data: dataDeckBy,
    error: errorRetrieveDeck,
    isError: isErrorRetrieveDeck,
    isLoading: isLoadingRetrieveDeck,
  } = useRetrieveDeckByIdQuery({
    id: idCard ?? '',
  })

  const setCurrentPage = (page: number) => {
    updateSearchParam(CARDS_KEY_SEARCH_PARAMS.page, page)
  }

  const setSearch = (searchName: string) => {
    updateSearchParam(CARDS_KEY_SEARCH_PARAMS.searchName, searchName)
  }

  if (isLoadingRetrieveDeck) {
    return <Loading />
  }

  if (isErrorRetrieveDeck) {
    return <div>Error: {JSON.stringify(errorRetrieveDeck)}</div>
  }

  return (
    <Page marginTop={'var(--margin-top-page-link'}>
      <BackTo
        nameLink={'Back to Decks List'}
        saveHistoryPage={`${DECK_ROUTE}?page=${pageDeck}&authorId=${authorId}&minCardsCount=${minCardsCount}`}
      />
      <Title
        idCard={idCard}
        imageTitle={dataDeckBy?.cover}
        isNotItem={!dataDeckBy?.cardsCount}
        isUserId={dataDeckBy?.userId === dataUser?.id}
        marginBot={'2.381%'}
        name={dataDeckBy?.name}
      >
        <CreateCard cardId={idCard} />
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
            paragraphs={dataCards?.items.map((card: CardsType) => ({
              cells: [
                { img: card.questionImg, value: card.question },
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
