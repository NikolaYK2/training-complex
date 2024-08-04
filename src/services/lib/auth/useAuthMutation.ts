import { useUpdateUserDataMutation } from '@/services/auth/authService'

export const useAuthMutation = () => {
  const [
    updateUserData,
    { error: errorUpdUser, isError: isErrorUpdUser, isLoading: isLoadingUpdUser },
  ] = useUpdateUserDataMutation()

  return {
    errorUpdUser,
    isErrorUpdUser,
    isLoadingUpdUser,
    updateUserData,
  }
}
