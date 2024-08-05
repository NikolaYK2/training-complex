import { Navigate, Outlet } from 'react-router-dom'

import { Loading } from '@/commn/components/ui/loading/Loading'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'

export const PrivateRoutes = () => {
  const { error: errMe, isError: isErrMe, isLoading: isLoadMe } = useGetCurrentUserDataQuery()

  if (isLoadMe) {
    return <Loading />
  }
  // if (isErrMe) {
  //   return <div>Error: {JSON.stringify(errMe)}</div>
  // }

  const isAuthenticated = !isErrMe //значит не авторизован

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
