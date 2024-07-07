import { Provider } from 'react-redux'

import { Layout } from '@/commn/components/ui/layout/Layout'
import { Router } from '@/routes/Router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}
