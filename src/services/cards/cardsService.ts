import { CardArgs, CardResponse } from '@/services/cards/CardsServiceType'
import { CardsResponse } from '@/services/decks/DecksTypes'
import { flashcardsApi } from '@/services/flashcardsApi'
import { prepareFormData } from '@/services/lib/prepareFormData'

const CARDS = 'v1/cards/'

export const cardsService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    getCardById: builder.query<CardsResponse, { id: string }>({
      providesTags: ['Cards'],
      query: ({ id }) => {
        return {
          url: `${CARDS}${id}`,
        }
      },
    }),
    updateCard: builder.mutation<CardResponse, CardArgs>({
      invalidatesTags: ['Cards'],
      query: ({ answer, answerImg, id, question, questionImg }) => {
        const formData = prepareFormData({ answer, answerImg, question, questionImg })

        return {
          body: formData,
          method: 'PATCH',
          url: `${CARDS}${id}`,
        }
      },
    }),
  }),
})
export const { useUpdateCardMutation } = cardsService
