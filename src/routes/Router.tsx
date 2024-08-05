import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Loading } from '@/commn/components/ui/loading/Loading'
import { CheckEmail } from '@/features/auth/checkEmail/CheckEmail'
import { ConfirmEmail } from '@/features/auth/confirmEmail/ConfirmEmail'
import { CreateNewPassword } from '@/features/auth/createPassword/CreateNewPassword'
import { ForgotPassword } from '@/features/auth/forgotPassword/ForgotPassword'
import { SignIn } from '@/features/auth/login/SignIn'
import { PersonalInformation } from '@/features/auth/personalInformation/PersonalInformation'
import { SignUp } from '@/features/auth/registration/SignUp'
import { Cards } from '@/features/cards/Cards'
import { Decks } from '@/features/decks/Decks'
import { Learn } from '@/features/learn/Learn'
import { AppRoutes } from '@/routes/AppRoutes'
import { PrivateRoutes } from '@/routes/PrivateRoutes'
import { ErrorRoute } from '@/routes/errorRoute/ErrorRoute'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'

export const HOME_ROUTE = '/'
export const DECK_ROUTE = '/deck'
export const CARDS_ROUTE = '/cards'
export const LEARN_ROUTE = '/learn'
export const LOGIN_ROUTE = '/login'
export const PROFILE_ROUTE = '/profile'
export const REGISTER_ROUTE = '/register'
export const FORGOT_PASSWORD_ROUTE = '/forgot-password'
export const CREATE_NEW_PASSWORD_ROUTE = '/create-password'
export const CHECK_EMAIL_ROUTE = '/check-email'
export const CONFIRM_EMAIL_ROUTE = '/confirm-email'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: LOGIN_ROUTE,
  },
  {
    element: <SignUp />,
    path: REGISTER_ROUTE,
  },
  {
    element: <ForgotPassword />,
    path: FORGOT_PASSWORD_ROUTE,
  },
  {
    element: <CreateNewPassword />,
    path: `${CREATE_NEW_PASSWORD_ROUTE}/:token`,
  },
  {
    element: <CheckEmail />,
    path: CHECK_EMAIL_ROUTE,
  },
  {
    element: <ConfirmEmail />,
    path: `${CONFIRM_EMAIL_ROUTE}/:token`,
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={DECK_ROUTE} />,
    path: `${HOME_ROUTE}`,
  },
  {
    element: <Decks />,
    path: `${DECK_ROUTE}`,
  },
  {
    element: <Cards />,
    path: `${DECK_ROUTE}/:id${CARDS_ROUTE}`,
  },
  {
    element: <Learn />,
    path: `${DECK_ROUTE}/:id${LEARN_ROUTE}`,
  },
  {
    element: <PersonalInformation />,
    path: PROFILE_ROUTE,
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
  const {
    data: dataMe,
    error: errMe,
    isError: isErrMe,
    isLoading: isLoadMe,
  } = useGetCurrentUserDataQuery()

  if (isLoadMe) {
    return <Loading />
  }

  return <RouterProvider router={router} />
}
