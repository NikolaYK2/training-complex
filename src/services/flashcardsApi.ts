import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')

      return headers
    },
  }),
  //можно эндпоинты разделять как бы на сущности
  endpoints: () => ({}), //нужно указат ьпустой эндпооинт обязательно
  reducerPath: 'flashcardsApi',
  tagTypes: ['Decks', 'Auth', 'Cards'], //инвалидируем
})
