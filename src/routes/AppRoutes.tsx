import { Outlet } from 'react-router-dom'

import { Layout } from '@/commn/components/ui/layout/Layout'

export const AppRoutes = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
