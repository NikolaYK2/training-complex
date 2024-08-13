import { matchPath } from 'react-router-dom'

import { localStorageUtil } from '@/commn/utils/localStorageUtil'
import { LOGIN_ROUTE, publicRoutes, router } from '@/routes/Router'
import { LoginResponse } from '@/services/auth/AuthTypes'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

type RefreshResultType = { data?: LoginResponse; error?: FetchBaseQueryError }
const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL_SERVER,
  prepareHeaders: headers => {
    const token = localStorageUtil.getItem('accessToken')

    if (headers.get('Authorization')) {
      return headers
    }

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      const refreshToken = localStorageUtil.getItem('refreshToken')

      try {
        // Попытка получить новый токен
        const refreshResult = (await baseQuery(
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
            method: 'POST',
            url: '/v2/auth/refresh-token',
          },
          api,
          extraOptions
        )) as RefreshResultType

        if (refreshResult.data) {
          localStorageUtil.saveItem('accessToken', refreshResult.data.accessToken)
          localStorageUtil.saveItem('refreshToken', refreshResult.data.refreshToken)

          result = await baseQuery(args, api, extraOptions)
        } else {
          const isPublicRoute = publicRoutes.find(route =>
            matchPath(route.path ?? '', window.location.pathname)
          )

          if (!isPublicRoute) {
            void router.navigate(LOGIN_ROUTE)
          }
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
