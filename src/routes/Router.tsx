import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CheckEmail } from '@/features/auth/checkEmail/CheckEmail'
import { ConfirmEmail } from '@/features/auth/confirmEmail/ConfirmEmail'
import { CreateNewPassword } from '@/features/auth/createPassword/CreateNewPassword'
import { ForgotPassword } from '@/features/auth/forgotPassword/ForgotPassword'
import { SignIn } from '@/features/auth/login/SignIn'
import { PersonalInformation } from '@/features/auth/personalInformation/PersonalInformation'
import { SignUp } from '@/features/auth/registration/SignUp'
import { Decks } from '@/features/decks/Decks'
import { AppRoutes } from '@/routes/AppRoutes'
import { PrivateRoutes } from '@/routes/PrivateRoutes'
import { ErrorRoute } from '@/routes/errorRoute/ErrorRoute'

export const HOME_ROUTE = '/'
export const LOGIN = '/login'
export const PROFILE = '/profile'
export const REGISTER = '/register'
export const FORGOT_PASSWORD = '/forgot-password'
export const CREATE_NEW_PASSWORD = '/create-password'
export const CHECK_EMAIL = '/check-email'
export const CONFIRM_EMAIL = '/confirm-email'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: LOGIN,
  },
  {
    element: <SignUp />,
    path: REGISTER,
  },
  {
    element: <ForgotPassword />,
    path: FORGOT_PASSWORD,
  },
  {
    element: <CreateNewPassword />,
    path: `${CREATE_NEW_PASSWORD}/:token`,
  },
  {
    element: <CheckEmail />,
    path: CHECK_EMAIL,
  },
  {
    element: <ConfirmEmail />,
    path: `${CONFIRM_EMAIL}/:token`,
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: HOME_ROUTE,
  },
  {
    element: <PersonalInformation />,
    path: PROFILE,
  },
]

export const router = createBrowserRouter([
  {
    children: [
      ...publicRoutes,
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
        errorElement: <ErrorRoute />,
      },
    ],
    element: <AppRoutes />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
