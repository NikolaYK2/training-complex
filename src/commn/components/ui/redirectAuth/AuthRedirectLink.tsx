import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { TitleType } from '@/commn/components/ui/formAuth/FormAuth'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

type RoutesType = {
  buttonName: string
  message?: string
  route: string
}
type Props = {
  className?: string
  describe?: boolean
  title: TitleType
}
export const AuthRedirectLink = ({ className, describe = false, title }: Props) => {
  return (
    <div className={className}>
      {describe && <TextFormat variant={'body2'}>{getTitle(title).message}</TextFormat>}
      <Button
        as={Link}
        style={{ textDecoration: describe ? 'underline' : '', textTransform: 'capitalize' }}
        to={getTitle(title).route}
        variant={'link'}
      >
        {getTitle(title).buttonName}
      </Button>
    </div>
  )
}

const getTitle = (title: TitleType): RoutesType => {
  switch (title) {
    case 'sign in': {
      return { buttonName: 'sign un', message: "Don't have an account?", route: '/register' }
    }
    case 'sign up': {
      return { buttonName: 'sign in', message: 'Already have an account?', route: '/login' }
    }
    case 'forgot your password?': {
      return {
        buttonName: 'Try logging in',
        message: 'Did you remember your password?',
        route: '/login',
      }
    }
    case 'forgot password': {
      return {
        buttonName: 'Forgot Password?',
        route: '/forgot-password',
      }
    }

    default: {
      return {} as RoutesType
    }
  }
}
