import { Provider } from 'react-redux'

import { Toast } from '@/commn/components/ui/toast/Toast'
import { Router } from '@/routes/Router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Toast />
      <Router />
    </Provider>
  )
}
