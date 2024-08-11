import { Provider } from 'react-redux'

import { Snackbar } from '@/commn/components/ui/snackbar/Snackbar'
import { Router } from '@/routes/Router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Snackbar />
      <Router />
    </Provider>
  )
}
