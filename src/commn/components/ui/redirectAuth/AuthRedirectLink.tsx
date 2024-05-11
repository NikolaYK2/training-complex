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
      <Button as={'a'} style={{ textTransform: 'capitalize' }} variant={'link'}>
        {getTitle(title).buttonName}
      </Button>
    </div>
  )
}

const getTitle = (title: TitleType): RoutesType => {
  switch (title) {
    case 'sign in': {
      return { buttonName: 'sign un', message: "Don't have an account?", route: 'sign-un' }
    }
    case 'sign up': {
      return { buttonName: 'sign in', message: 'Already have an account?', route: 'sign-in' }
    }
    default: {
      return {} as RoutesType
    }
  }
}
