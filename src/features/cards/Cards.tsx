import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch } from '@/app/lib/hooksStore'
import { BackTo } from '@/commn/components/ui/backTo/BackTo'
import { CardRemover } from '@/commn/components/ui/cardRemover/CardRemover'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { Pagination } from '@/commn/components/ui/pagination/Pagination'
import { Search } from '@/commn/components/ui/search/Search'
import { Table } from '@/commn/components/ui/tables/Table'
import { Title } from '@/commn/components/ui/title/Title'
import { DECKS_KEY_SEARCH_PARAMS, useSearchUpdateParams } from '@/commn/hooks/useSearchUpdateParams'
import { manageFeedback } from '@/commn/utils/manageFeedback'
import { CreateUpdateCard } from '@/features/cards/createUpdateCard/CreateUpdateCard'
import { EditCard } from '@/features/cards/editCard/EditCard'
import { GradeCard } from '@/features/cards/gradeCard/GradeCard'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'
import { useDeleteCardMutation } from '@/services/cards/cardsService'
import {
  ANSWER_ORDER_BY,
  CardsResponse,
  GRADE_ORDER_BY,
  OrderByType,
  QUESTION_ORDER_BY,
  UPDATED_ORDER_BY,
} from '@/services/decks/DecksTypes'
import {
  useCreateCardInDeckMutation,
  useRetrieveCardsInDeckQuery,
  useRetrieveDeckByIdQuery,
} from '@/services/decks/decksService'

import s from './Cards.module.scss'

const CARDS_KEY_SEARCH_PARAMS = {
  authorIdSaveHistory: 'authorId',
  minCardsCountSaveHistory: 'minCardsCount',
  orderBy: 'orderBy',
  page: 'page',
  pageDeckSaveHistory: 'pageDeck',
  searchName: 'question',
}

export const Cards = () => {
  const [itemPage, setItemPage] = useState('10')

  const { id: idCard } = useParams<{ id: string }>()

  const { clearParams, searchParams, updateSearchParam } = useSearchUpdateParams()
  const dispatch = useAppDispatch()

  const page = Number(searchParams.get(CARDS_KEY_SEARCH_PARAMS.page)) || 1
  const searchName = searchParams.get(CARDS_KEY_SEARCH_PARAMS.searchName) || ''
  const orderBy = searchParams.get(CARDS_KEY_SEARCH_PARAMS.orderBy) || null

  const setCurrentPage = (page: number) => {
    updateSearchParam({ key: CARDS_KEY_SEARCH_PARAMS.page, replace: true, value: page })
  }
  const setSearch = (searchName: string) => {
    updateSearchParam({
      key: CARDS_KEY_SEARCH_PARAMS.searchName,
      removeKeys: [DECKS_KEY_SEARCH_PARAMS.page],
      value: searchName,
    })
  }

  const setOrderBy = (orderBy: OrderByType) => {
    updateSearchParam({ key: CARDS_KEY_SEARCH_PARAMS.orderBy, replace: true, value: orderBy })
  }
  const { data: dataUser } = useGetCurrentUserDataQuery()

  const { data: dataCards } = useRetrieveCardsInDeckQuery({
    currentPage: page,
    id: idCard ? idCard : '',
    itemsPerPage: Number(itemPage),
    orderBy: orderBy as OrderByType,
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

  useEffect(() => {
    if (isErrorRetrieveDeck) {
      manageFeedback({ data: errorRetrieveDeck, dispatch, type: 'error' })
    }
  }, [isErrorRetrieveDeck])

  if (isLoadingRetrieveDeck) {
    return <Loading />
  }

  return (
    <Page marginTop={'var(--margin-top-page-link'}>
      <BackTo nameLink={'Back to Decks List'} />
      <Title
        idCard={idCard}
        imageDeck={dataDeckBy?.cover}
        isFavorite={dataDeckBy?.isFavorite}
        isNotItem={!dataDeckBy?.cardsCount}
        isPrivateCard={dataDeckBy?.isPrivate}
        isUserId={dataDeckBy?.userId === dataUser?.id}
        marginBot={'2.381%'}
        nameDeck={dataDeckBy?.name}
      >
        <CreateUpdateCard
          buttonName={'add new card'}
          callBack={clearParams}
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
              { id: 1, orderBy: QUESTION_ORDER_BY, title: 'Question' },
              { id: 2, orderBy: ANSWER_ORDER_BY, title: 'Answer' },
              { id: 3, orderBy: UPDATED_ORDER_BY, title: 'Last Updated' },
              { id: 4, orderBy: GRADE_ORDER_BY, title: 'Grade' },
              {
                id: 5,
                isEditable: dataDeckBy?.userId === dataUser?.id,
                title: '',
              },
            ]}
            paragraphs={dataCards?.items.map((card: CardsResponse) => ({
              cells: [
                { forMobileTitle: 'Question', img: card.questionImg, value: card.question },
                { forMobileTitle: 'Answer', img: card.answerImg, value: card.answer },
                {
                  forMobileTitle: 'Last Updated',
                  value: new Date(card.updated).toLocaleDateString(),
                },
                {
                  element: [<GradeCard cardId={card.id} grade={card.grade} key={'grade'} />],
                  forMobileTitle: 'Grade',
                },
                {
                  element: [
                    <EditCard
                      answer={card.answer}
                      answerImg={card.answerImg}
                      className={s.iconEdit}
                      idCard={card.id}
                      key={'edit'}
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
                      key={'delete'}
                      mutationDeck={deleteCard}
                      text={'Are you sure you want to delete this card? The card will be deleted.'}
                      titleName={'delete card'}
                    />,
                  ],
                  isEditable: dataDeckBy?.userId === dataUser?.id,
                },
              ],
              idCells: card.id,
              isRowClickable: false,
            }))}
            setOrderBy={setOrderBy}
          />
        </>
      )}
      <Pagination
        currentPage={page}
        itemPage={itemPage}
        onPageChange={setCurrentPage}
        pageSize={1}
        setPageSize={setItemPage}
        siblingCount={1}
        totalCount={dataCards?.pagination?.totalPages ?? 1}
      />
    </Page>
  )
}
