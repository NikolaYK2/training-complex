import { useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { ControlledCheckbox } from '@/commn/components/ui/checkBox/ControlledCheckbox'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

export const SingIn = () => {
  const { control } = useForm()

  return (
    <Card>
      <TextFormat variant={'h1'}>Sign In</TextFormat>

      <form action={''}>
        <ControlledTextField control={control} label={'email'} name={'email'} typeInput={'email'} />

        <ControlledTextField
          control={control}
          label={'password'}
          name={'password'}
          typeInput={'password'}
        />

        <ControlledCheckbox
          control={control}
          label={'remember me'}
          name={'rememberMe'}
          position={'left'}
        />

        <TextFormat position={'right'} variant={'link1'}>
          Forgot password?
        </TextFormat>
      </form>
    </Card>
  )
}
