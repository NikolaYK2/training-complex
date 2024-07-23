import { flashcardsApi } from '@/services/flashcardsApi'

export const cardsService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<void, { id: string }>({
      query: ({ id }) => {
        return {
          url: `v1/cards/${id}`,
        }
      },
    }),
  }),
})
