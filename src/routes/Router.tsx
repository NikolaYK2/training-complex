import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CheckEmail } from '@/features/auth/checkEmail/CheckEmail'
import { ConfirmEmail } from '@/features/auth/confirmEmail/ConfirmEmail'
import { ForgotPassword } from '@/features/auth/forgotPassword/ForgotPassword'
import { SignIn } from '@/features/auth/login/SignIn'
import { SignUp } from '@/features/auth/registration/SignUp'
import { Decks } from '@/features/decks/Decks'
import { PrivateRoutes } from '@/routes/PrivateRoutes'
import { ErrorRoute } from '@/routes/errorRoute/ErrorRoute'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/login',
  },
  {
    element: <SignUp />,
    path: '/register',
  },
  {
    element: <ForgotPassword />,
    path: '/forgot-password',
  },
  {
    element: <CheckEmail />,
    path: '/check-email',
  },
  {
    element: <ConfirmEmail />,
    path: '/confirm-email',
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
    errorElement: <ErrorRoute />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
