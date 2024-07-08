import { RegistrationArgs, RegistrationResponse } from '@/services/auth/AuthTypes'
import { flashcardsApi } from '@/services/flashcardsApi'

const AUTH = 'v1/auth/sign-up'

export const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    registrationAuth: builder.mutation<RegistrationResponse, RegistrationArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: AUTH,
      }),
    }),
  }),
})

export const { useRegistrationAuthMutation } = authService
