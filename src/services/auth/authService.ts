import {
  LoginArgs,
  LoginResponse,
  PasswordRecoveryEmailArgs,
  PasswordResetArgs,
  RegistrationArgs,
  ResponseType,
  UserDataArgs,
  VerifyEmailArgc,
} from '@/services/auth/AuthTypes'
import { flashcardsApi } from '@/services/flashcardsApi'
import { prepareFormData } from '@/services/lib/prepareFormData'

const AUTH = 'v1/auth/'

export const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    getCurrentUserData: builder.query<ResponseType, void>({
      providesTags: ['Auth'],
      query: () => ({
        url: `${AUTH}me`,
      }),
    }),
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
    logout: builder.mutation<void, void>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `${AUTH}logout`,
      }),
    }),
    passwordRecovery: builder.mutation<void, PasswordRecoveryEmailArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `${AUTH}recover-password`,
      }),
    }),
    passwordReset: builder.mutation<void, PasswordResetArgs>({
      query: ({ password, token }) => ({
        body: { password },
        method: 'POST',
        url: `${AUTH}reset-password/${token}`,
      }),
    }),
    registrationAuth: builder.mutation<ResponseType, RegistrationArgs>({
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
    updateUserData: builder.mutation<ResponseType, UserDataArgs>({
      invalidatesTags: ['Auth'],
      query: ({ avatar, name }) => {
        const formData = prepareFormData({ avatar, name })

        return {
          body: formData,
          method: 'PATCH',
          url: `${AUTH}me`,
        }
      },
    }),
  }),
})

export const {
  useGetCurrentUserDataQuery,
  useGetVerifyEmailMutation,
  useLoginAuthMutation,
  useLogoutMutation,
  usePasswordRecoveryMutation,
  usePasswordResetMutation,
  useRegistrationAuthMutation,
  useResendVerificationEmailMutation,
  useUpdateUserDataMutation,
} = authService
