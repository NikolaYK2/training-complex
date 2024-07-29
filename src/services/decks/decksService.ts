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

const DECKS = 'v1/decks/'

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
          url: `${DECKS}${id}/cards`,
        }
      },
    }),
    createUpdateDeck: builder.mutation<DeckType, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: ({ cover, id, isPrivate, method, name }) => {
        const formData = new FormData()

        // Добавляем cover только если он задан
        if (cover) {
          formData.append('cover', cover)
        }
        if (cover === null) {
          formData.append('cover', '')
        }
        formData.append('name', name)
        formData.append('isPrivate', isPrivate?.toString() || 'false')
        // Логируем данные для проверки
        // console.log('FormData entries:')
        // for (const pair of formData.entries()) {
        //   console.log(pair[0] + ': ' + pair[1])
        // }

        return {
          body: formData,
          method: method,
          url: `${DECKS}${id ? id : ''}`,
        }
      },
    }),
    deleteDeck: builder.mutation<DeckType, { id: string }>({
      invalidatesTags: ['Decks'],
      query: ({ id }) => {
        return {
          method: 'DELETE',
          url: `${DECKS}${id}`,
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
    retrieveRandomCard: builder.query<CardsType, { id: string; previousCardId?: string }>({
      providesTags: ['Decks'],

      query: ({ id, previousCardId }) => {
        return {
          params: previousCardId ? { previousCardId } : {},
          url: `${DECKS}${id}/learn`,
        }
      },
    }),
    saveGradeCard: builder.mutation<CardsType, { cardId: string; grade: number }>({
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
