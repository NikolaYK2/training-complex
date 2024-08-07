import { App } from '@/App'
import { createRoot } from 'react-dom/client'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@/assets/styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
