import {
  CardType,
  CardsArgs,
  CreateDeckArgs,
  DeckType,
  DecksResponse,
  GetDecksArgs,
} from '@/services/decks/DecksTypes'
import { flashcardsApi } from '@/services/flashcardsApi'

export const decksService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
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
          url: `v1/decks`,
        }
      },
    }),
    getDeckById: builder.query<DeckType, { id: string }>({
      //uri params
      query: ({ id }) => {
        return {
          url: `v1/decks/${id}`,
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
    retrieveCardsInDeck: builder.query<DecksResponse<CardType[]>, CardsArgs | void>({
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
          url: `v1/decks/${id}/cards`,
        }
      },
    }),
  }),
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useRetrieveCardsInDeckQuery,
} = decksService
