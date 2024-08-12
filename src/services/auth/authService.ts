import { localStorageUtil } from '@/commn/utils/localStorageUtil'
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
    deleteAccount: builder.mutation<void, void>({
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const res = dispatch(
          authService.util.updateQueryData('getCurrentUserData', _, () => {
            return null
          })
        )

        try {
          await queryFulfilled

          localStorageUtil.removeItem('accessToken')
          localStorageUtil.removeItem('refreshToken')
        } catch (error) {
          console.error('Logout failed:', error)
          res.undo()
        }
      },

      query: () => ({
        method: 'DELETE',
        url: `${AUTH}me`,
      }),
    }),
    getCurrentUserData: builder.query<ResponseType | null, void>({
      providesTags: ['Auth'],
      query: () => `${AUTH}me`,
    }),
    getVerifyEmail: builder.mutation<void, { code: string }>({
      query: token => ({
        body: token,
        method: 'POST',
        url: `${AUTH}verify-email`,
      }),
    }),
    loginAuth: builder.mutation<LoginResponse, LoginArgs>({
      invalidatesTags: ['Auth'],

      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled

        if (!data) {
          return
        }
        localStorageUtil.saveItem('accessToken', data.accessToken)
        localStorageUtil.saveItem('refreshToken', data.refreshToken)
      },

      query: body => {
        return {
          body,
          method: 'POST',
          url: `${AUTH}login`,
        }
      },
    }),
    logout: builder.mutation<void, void>({
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const res = dispatch(
          authService.util.updateQueryData('getCurrentUserData', _, () => {
            return null
          })
        )

        try {
          await queryFulfilled

          localStorageUtil.removeItem('accessToken')
          localStorageUtil.removeItem('refreshToken')
        } catch (error) {
          console.error('Logout failed:', error)
          res.undo()
        }
      },

      query: () => ({
        method: 'POST',
        url: `/v2/auth/logout`,
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
  useDeleteAccountMutation,
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
