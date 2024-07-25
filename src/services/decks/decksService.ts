import {
  CardArgs,
  CardType,
  CardsArgs,
  CardsType,
  CreateDeckArgs,
  DeckType,
  DecksResponse,
  GetDecksArgs,
} from '@/services/decks/DecksTypes'
import { flashcardsApi } from '@/services/flashcardsApi'

const DECK = 'v1/decks/'

export const decksService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    createCardInDeck: builder.mutation<CardType, CardArgs | void>({
      invalidatesTags: ['Decks'],
      query: ({ answer, answerImg, id, question, questionImg }: CardArgs) => {
        const formData = new FormData()

        if (questionImg) {
          formData.append('questionImg', questionImg)
        }
        if (answerImg) {
          formData.append('answerImg', answerImg)
        }
        formData.append('answer', answer)
        formData.append('question', question)

        return {
          body: formData,
          method: 'POST',
          url: `${DECK}${id}/cards`,
        }
      },
    }),
    createDeck: builder.mutation<DeckType, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: ({ cover, isPrivate, name }) => {
        const formData = new FormData()

        if (cover) {
          formData.append('cover', cover)
        }
        formData.append('name', name)
        formData.append('isPrivate', isPrivate?.toString() || 'false')

        return {
          body: formData,
          method: 'POST',
          url: `${DECK}`,
        }
      },
    }),
    getDecks: builder.query<DecksResponse<DeckType[]>, GetDecksArgs | void>({
      providesTags: ['Decks'], //как бы обновляем кэш, так как новые данные
      //query param
      query: params => {
        return {
          params: params ?? {},
          url: `v2/decks`,
        }
      },
    }),
    retrieveCardsInDeck: builder.query<DecksResponse<CardsType[]>, CardsArgs | void>({
      providesTags: ['Decks'],
      query: ({ answer, currentPage, id, itemsPerPage, orderBy, question }: CardsArgs) => {
        const params = {
          ...(orderBy && { orderBy }),
          ...(question && { question }),
          ...(answer && { answer }),
          ...(currentPage && { currentPage }),
          ...(itemsPerPage && { itemsPerPage }),
        }

        return {
          params: params ?? {},
          url: `${DECK}${id}/cards`,
        }
      },
    }),
    retrieveDeckById: builder.query<DeckType, { id: string }>({
      //uri params
      query: ({ id }) => {
        return {
          url: `${DECK}${id}`,
        }
      },
    }),
    retrieveRandomCard: builder.query<DeckType, { id: string; previousCardId: string }>({
      //uri params
      query: ({ id, previousCardId }) => {
        return {
          params: { previousCardId },
          url: `${DECK}${id}/learn`,
        }
      },
    }),
  }),
})

export const {
  useCreateCardInDeckMutation,
  useCreateDeckMutation,
  useGetDecksQuery,
  useRetrieveCardsInDeckQuery,
  useRetrieveDeckByIdQuery,
  useRetrieveRandomCardQuery,
} = decksService
