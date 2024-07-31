import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { BackTo } from '@/commn/components/ui/backTo/BackTo'
import { CardRemover } from '@/commn/components/ui/cardRemover/CardRemover'
import { CreateUpdateCard } from '@/commn/components/ui/createUpdateCard/CreateUpdateCard'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { Pagination } from '@/commn/components/ui/pagination/Pagination'
import { Search } from '@/commn/components/ui/search/Search'
import { PageHistorySaveType, Table } from '@/commn/components/ui/tables/Table'
import { Title } from '@/commn/components/ui/title/Title'
import { useSearchUpdateParams } from '@/commn/hooks/useSearchUpdateParams'
import { EditCard } from '@/features/cards/editCard/EditCard'
import { GradeCard } from '@/features/cards/gradeCard/GradeCard'
import { DECK_ROUTE } from '@/routes/Router'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'
import { useDeleteCardMutation } from '@/services/cards/cardsService'
import { CardsResponse } from '@/services/decks/DecksTypes'
import {
  useCreateCardInDeckMutation,
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

  const [
    createCardInDeck,
    { error: errorCreateCard, isError: isErrorCreatedCard, isLoading: isLoadingCreateCard },
  ] = useCreateCardInDeckMutation()

  const [
    deleteCard,
    { error: errDeleteCard, isError: isErrDeleteCard, isLoading: isLoadDeleteCard },
  ] = useDeleteCardMutation()

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
        imageDeck={dataDeckBy?.cover}
        isNotItem={!dataDeckBy?.cardsCount}
        isPrivateCard={dataDeckBy?.isPrivate}
        isUserId={dataDeckBy?.userId === dataUser?.id}
        marginBot={'2.381%'}
        nameDeck={dataDeckBy?.name}
      >
        <CreateUpdateCard
          buttonName={'Add New Card'}
          cardId={idCard}
          error={errorCreateCard}
          isError={isErrorCreatedCard}
          isLoading={isLoadingCreateCard}
          mutationFunction={createCardInDeck}
          titleContent={'Add New Card'}
          trigger={'Add New Card'}
        />
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
              {
                id: 5,
                isEditable: dataDeckBy?.userId === dataUser?.id,
                title: '',
              },
            ]}
            paragraphs={dataCards?.items.map((card: CardsResponse) => ({
              cells: [
                { img: card.questionImg, value: card.question },
                { img: card.answerImg, value: card.answer },
                { value: new Date(card.updated).toLocaleDateString() },
                { element: [<GradeCard cardId={card.id} grade={card.grade} key={'grade'} />] },
                {
                  element: [
                    <EditCard
                      answer={card.answer}
                      answerImg={card.answerImg}
                      className={s.iconEdit}
                      idCard={card.id}
                      key={'icon-edit'}
                      question={card.question}
                      questionImg={card.questionImg}
                    />,
                    <CardRemover
                      buttonName={'delete card'}
                      className={s.iconDelete}
                      error={errDeleteCard}
                      idCard={card.id}
                      isError={isErrDeleteCard}
                      isIcon
                      isLoading={isLoadDeleteCard}
                      key={'icon-delete'}
                      mutationDeck={deleteCard}
                      text={'Are you sure you want to delete this card? The card will be deleted.'}
                      titleName={'delete card'}
                    />,
                  ],
                  isEditable: dataDeckBy?.userId === dataUser?.id,
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
