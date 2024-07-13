import {
  LoginArgs,
  LoginResponse,
  RegistrationArgs,
  RegistrationResponse,
  VerifyEmailArgc,
} from '@/services/auth/AuthTypes'
import { flashcardsApi } from '@/services/flashcardsApi'

const AUTH = 'v1/auth/'

export const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    getVerifyEmail: builder.mutation<void, { code: string }>({
      query: token => ({
        body: token,
        method: 'POST',
        url: `${AUTH}verify-email`,
      }),
    }),
    loginAuth: builder.mutation<LoginResponse, LoginArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `${AUTH}login`,
      }),
    }),
    registrationAuth: builder.mutation<RegistrationResponse, RegistrationArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `${AUTH}sign-up`,
      }),
    }),
    resendVerificationEmail: builder.mutation<void, VerifyEmailArgc>({
      query: userId => ({
        body: userId,
        method: 'POST',
        url: `${AUTH}resend-verification-email`,
      }),
    }),
  }),
})

export const {
  useGetVerifyEmailMutation,
  useLoginAuthMutation,
  useRegistrationAuthMutation,
  useResendVerificationEmailMutation,
} = authService
