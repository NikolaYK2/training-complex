import { CreateDeckArgs, Deck, DecksResponse, GetDecksArgs } from '@/services/decks/DecksTypes'
import { flashcardsApi } from '@/services/flashcardsApi'

export const DecksService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    createDeck: builder.mutation<Deck, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: args => ({
        body: args,
        method: 'POST', //по default GET
        url: `v1/decks`,
      }),
    }),
    getDeckById: builder.query<DecksResponse, { id: string }>({
      //uri params
      query: ({ id }) => {
        return {
          url: `v2/decks/${id}`,
        }
      },
    }),
    getDecks: builder.query<DecksResponse, GetDecksArgs | void>({
      providesTags: ['Decks'], //как бы обновляем кэш, так как новые данные
      //query param
      query: params => {
        return {
          params: params ?? {},
          url: `v2/decks`,
        }
      },
    }),
  }),
})

export const { useCreateDeckMutation, useGetDecksQuery } = DecksService
