import { Outlet, useOutletContext } from 'react-router-dom'

import { Layout } from '@/commn/components/ui/layout/Layout'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'

type AuthContext = {
  isAuthenticated: boolean
}

export function useAuthContext() {
  return useOutletContext<AuthContext>()
}

export const AppRoutes = () => {
  const { data: currentMe, isLoading: isLoadMe } = useGetCurrentUserDataQuery()
  const isAuthenticated = Boolean(currentMe)

  if (isLoadMe) {
    return <Loading />
  }

  return (
    <Layout avatar={currentMe?.avatar} email={currentMe?.email} name={currentMe?.name}>
      <Outlet context={{ isAuthenticated } satisfies AuthContext} />
    </Layout>
  )
}
