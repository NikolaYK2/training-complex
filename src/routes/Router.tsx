import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { SignIn } from '@/features/auth/login/SignIn'
import { Decks } from '@/features/decks/Decks'
import { PrivateRoutes } from '@/routes/PrivateRoutes'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/login',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
]
const router = createBrowserRouter([
  ...publicRoutes,
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
