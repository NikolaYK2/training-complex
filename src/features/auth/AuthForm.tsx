import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/commn/components/ui/button'
import { Card } from '@/commn/components/ui/card/Card'
import { ControlledCheckbox } from '@/commn/components/ui/checkBox/ControlledCheckbox'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './AuthForm.module.scss'

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(5),
  remember: z.boolean().optional(),
})

type FormType = z.infer<typeof loginSchema>
type Props = {
  description: string
  title: string
}
export const AuthForm = ({ description, title }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<FormType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <TextFormat style={{ textTransform: 'capitalize' }} variant={'h1'}>
        {title}
      </TextFormat>

      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorMessage={errors.email?.message}
          label={'email'}
          name={'email'}
        />

        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          label={'password'}
          name={'password'}
        />

        <ControlledCheckbox
          control={control}
          label={'remember me'}
          name={'remember'}
          position={'left'}
        />

        <TextFormat position={'right'} variant={'link1'}>
          Forgot password?
        </TextFormat>

        <Button type={'submit'} variant={'primary'}>
          sign in
        </Button>

        <TextFormat>{description}</TextFormat>

        <Button as={'a'} style={{ textTransform: 'capitalize' }} variant={'link'}>
          sign Up
        </Button>
      </form>
    </Card>
  )
}
