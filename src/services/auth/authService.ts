import { RegistrationArgs, RegistrationResponse } from '@/services/auth/AuthTypes'
import { flashcardsApi } from '@/services/flashcardsApi'

const AUTH = 'v1/auth/'

export const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    getVerifyEmail: builder.mutation<void, { token: string }>({
      query: token => ({
        body: token,
        method: 'POST',
        url: `${AUTH}verify-email`,
      }),
    }),
    registrationAuth: builder.mutation<RegistrationResponse, RegistrationArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `${AUTH}sign-up`,
      }),
    }),
  }),
})

export const { useGetVerifyEmailMutation, useRegistrationAuthMutation } = authService
