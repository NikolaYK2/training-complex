import {
  CardArgs,
  CardType,
  CardsArgs,
  CardsResponse,
  CreateDeckArgs,
  DeckType,
  DecksArgs,
  DecksResponse,
} from '@/services/decks/DecksTypes'
import { flashcardsApi } from '@/services/flashcardsApi'
import { prepareFormData } from '@/services/lib/prepareFormData'

const DECKS = 'v1/decks/'

export const decksService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    createCardInDeck: builder.mutation<CardType, CardArgs | void>({
      invalidatesTags: ['Decks'],
      query: ({ answer, answerImg, id, question, questionImg }: CardArgs) => {
        const formData = prepareFormData({
          answer,
          answerImg,
          question,
          questionImg,
        })

        return {
          body: formData,
          method: 'POST',
          url: `${DECKS}${id}/cards`,
        }
      },
    }),
    createUpdateDeck: builder.mutation<DeckType, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: ({ cover, id, isPrivate, method, name }) => {
        const formData = prepareFormData({ cover, isPrivate, name })

        return {
          body: formData,
          method: method,
          url: `${DECKS}${id ? id : ''}`,
        }
      },
    }),
    deleteDeck: builder.mutation<void, { id: string }>({
      invalidatesTags: ['Decks'],
      query: ({ id }) => {
        return {
          method: 'DELETE',
          url: `${DECKS}${id}`,
        }
      },
    }),
    getDecks: builder.query<DecksResponse<DeckType[]>, DecksArgs | void>({
      providesTags: ['Decks'], //как бы обновляем кэш, так как новые данные
      //query param
      query: params => {
        return {
          params: params ?? {},
          url: `v2/decks`,
        }
      },
    }),
    retrieveCardsInDeck: builder.query<DecksResponse<CardsResponse[]>, CardsArgs | void>({
      providesTags: ['Decks', 'Cards'],
      query: ({ id, ...params }: CardsArgs) => {
        // const params = {
        //   ...(orderBy && { orderBy }),
        //   ...(question && { question }),
        //   ...(answer && { answer }),
        //   ...(currentPage && { currentPage }),
        //   ...(itemsPerPage && { itemsPerPage }),
        // }

        return {
          params: params,
          url: `${DECKS}${id}/cards`,
        }
      },
    }),
    retrieveDeckById: builder.query<DeckType, { id: string }>({
      providesTags: ['Decks'],
      query: ({ id }) => {
        return {
          url: `${DECKS}${id}`,
        }
      },
    }),
    retrieveRandomCard: builder.query<CardsResponse, { id: string; previousCardId?: string }>({
      providesTags: ['Decks'],

      query: ({ id, previousCardId }) => {
        return {
          params: previousCardId ? { previousCardId } : {},
          url: `${DECKS}${id}/learn`,
        }
      },
    }),
    saveGradeCard: builder.mutation<CardsResponse, { cardId: string; grade: number }>({
      invalidatesTags: ['Decks'],
      query: ({ cardId, grade }) => {
        return {
          body: { cardId, grade },
          method: 'POST',
          url: `${DECKS}${cardId}/learn`,
        }
      },
    }),
  }),
})

export const {
  useCreateCardInDeckMutation,
  useCreateUpdateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useRetrieveCardsInDeckQuery,
  useRetrieveDeckByIdQuery,
  useRetrieveRandomCardQuery,
  useSaveGradeCardMutation,
} = decksService
