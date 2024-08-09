import {
  CardArgs,
  CardType,
  CardsArgs,
  CardsResponse,
  CreateDeckArgs,
  DeckType,
  DecksArgs,
  DecksResponse,
  UdpDeckArgs,
} from '@/services/decks/DecksTypes'
import { flashcardsApi } from '@/services/flashcardsApi'
import { prepareFormData } from '@/services/lib/prepareFormData'

const DECKS = 'v1/decks/'

export const decksService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    addFavorite: builder.mutation<void, { id: string }>({
      invalidatesTags: ['Decks'],
      async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        // 1
        const cachedFavorite = decksService.util.selectCachedArgsForQuery(getState(), 'getDecks')
        const patchResults: any[] = []

        cachedFavorite.forEach(favoriteCash => {
          patchResults.push(
            dispatch(
              decksService.util.updateQueryData('getDecks', favoriteCash, draft => {
                const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === id)

                if (itemToUpdateIndex === -1) {
                  return
                }
                draft.items[itemToUpdateIndex].isFavorite = true
              })
            )
          )
        })

        try {
          //2 - запускает query
          await queryFulfilled
        } catch (e) {
          patchResults.forEach(patchResult => {
            // в случае ошибки вернет предыдущее значение
            patchResult.undo()
          })
        }
      },
      query: ({ id }) => {
        return {
          method: 'POST',
          url: `${DECKS}${id}/favorite`,
        }
      },
    }),
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
    createDeck: builder.mutation<DeckType, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
        const cachedArgsForQuery = decksService.util.selectCachedArgsForQuery(
          getState(),
          'getDecks'
        ) as DecksArgs[]

        try {
          const { data } = await queryFulfilled

          cachedArgsForQuery.forEach(cachedArgs => {
            dispatch(
              decksService.util.updateQueryData('getDecks', cachedArgs, draft => {
                if (cachedArgs.currentPage !== 1) {
                  return
                }
                draft.items.unshift(data)
                draft.items.pop()
              })
            )
          })
        } catch (e) {
          console.error(e)
        }
      },
      query: ({ cover, isPrivate, name }) => {
        const formData = prepareFormData({ cover, isPrivate, name })

        return {
          body: formData,
          method: 'POST',
          url: `${DECKS}`,
        }
      },
    }),
    deleteDeck: builder.mutation<void, { id: string }>({
      invalidatesTags: ['Decks'],
      async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        const cachedDeleteDeck = decksService.util.selectCachedArgsForQuery(getState(), 'getDecks')
        const patchResults: any[] = []

        cachedDeleteDeck.forEach(cachedArgs => {
          patchResults.push(
            dispatch(
              decksService.util.updateQueryData('getDecks', cachedArgs, draft => {
                draft.items = draft.items.filter(deck => deck.id !== id) // Удаляем элемент из кеша
              })
            )
          )
        })

        try {
          await queryFulfilled
        } catch (e) {
          patchResults.forEach(patchResult => {
            patchResult.undo()
          })
        }
      },

      query: ({ id }) => {
        return {
          method: 'DELETE',
          url: `${DECKS}${id}`,
        }
      },
    }),
    getDecks: builder.query<DecksResponse<DeckType[]>, DecksArgs | void>({
      providesTags: ['Decks'],
      query: args => {
        return {
          params: args ? getValuable(args) : undefined,
          url: `v2/decks`,
        }
      },
    }),
    removeFavorite: builder.mutation<void, { id: string }>({
      invalidatesTags: ['Decks'],
      async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        const cachedRemoveFavorite = decksService.util.selectCachedArgsForQuery(
          getState(),
          'getDecks'
        ) as DecksArgs[]
        const patchResults: any[] = []

        cachedRemoveFavorite.forEach(favoriteCash => {
          patchResults.push(
            dispatch(
              decksService.util.updateQueryData('getDecks', favoriteCash, draft => {
                const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === id)

                if (itemToUpdateIndex !== -1) {
                  draft.items[itemToUpdateIndex].isFavorite = false
                }
              })
            )
          )
        })

        try {
          await queryFulfilled
        } catch (e) {
          patchResults.forEach(patchResult => {
            patchResult.undo()
          })
        }
      },

      query: ({ id }) => {
        return {
          method: 'DELETE',
          url: `${DECKS}${id}/favorite`,
        }
      },
    }),
    retrieveCardsInDeck: builder.query<DecksResponse<CardsResponse[]>, CardsArgs | void>({
      providesTags: ['Decks'],
      query: ({ id, ...params }: CardsArgs) => {
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
    updateDeck: builder.mutation<DeckType, UdpDeckArgs>({
      invalidatesTags: ['Decks'],
      async onQueryStarted({ cover, id, ...args }, { dispatch, getState, queryFulfilled }) {
        // 1
        const cachedArgsForQuery = decksService.util.selectCachedArgsForQuery(
          getState(),
          'getDecks'
        )
        const patchResults: any[] = []

        cachedArgsForQuery.forEach(cachedArgs => {
          patchResults.push(
            dispatch(
              decksService.util.updateQueryData('getDecks', cachedArgs, draft => {
                const itemToUpdateIndex = draft.items.findIndex(deck => deck.id === id)

                if (itemToUpdateIndex === -1) {
                  return
                }
                draft.items[itemToUpdateIndex] = { ...draft.items[itemToUpdateIndex], ...args }
              })
            )
          )
        })

        try {
          //2 - запускает query
          await queryFulfilled
        } catch (e) {
          patchResults.forEach(patchResult => {
            // в случае ошибки вернет предыдущее значение
            patchResult.undo()
          })
        }
      },
      query: ({ cover, id, isPrivate, name }) => {
        const formData = prepareFormData({ cover, isPrivate, name })

        return {
          body: formData,
          method: 'PATCH',
          url: `${DECKS}${id}`,
        }
      },
    }),
  }),
})

export const {
  useAddFavoriteMutation,
  useCreateCardInDeckMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useRemoveFavoriteMutation,
  useRetrieveCardsInDeckQuery,
  useRetrieveDeckByIdQuery,
  useRetrieveRandomCardQuery,
  useSaveGradeCardMutation,
  useUpdateDeckMutation,
} = decksService

type Valuable<T> = { [K in keyof T as T[K] extends null | undefined ? never : K]: T[K] }

function getValuable<T extends {}, V = Valuable<T>>(obj: T): V {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) => !((typeof v === 'string' && !v.length) || v === null || typeof v === 'undefined')
    )
  ) as V
}
