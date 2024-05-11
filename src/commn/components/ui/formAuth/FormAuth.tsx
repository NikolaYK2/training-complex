import { FormEventHandler } from 'react'
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'

import { Button } from '@/commn/components/ui/button'
import { ControlledCheckbox } from '@/commn/components/ui/checkBox/ControlledCheckbox'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { AuthRedirectLink } from '@/commn/components/ui/redirectAuth/AuthRedirectLink'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './FormAuth.module.scss'

const formInfo = {
  'create new password': {
    description: 'Create new password and we will send you further instructions to email',
    redirect: false,
  },
  'forgot your password?': {
    description: 'Enter your email address and we will send you further instructions',
    redirect: true,
  },
  'sign in': { description: '', redirect: true },
  'sign up': { description: '', redirect: true },
}

export type TitleType = 'create new password' | 'forgot your password?' | 'sign in' | 'sign up'

type Props<TFieldValues extends FieldValues> = {
  className?: string
  control: Control<TFieldValues>
  errorMessage: FieldErrors<TFieldValues>
  formItem: (Path<TFieldValues> & string)[]
  onSubmit: FormEventHandler<HTMLFormElement>
  title: TitleType
}

export const FormAuth = <TFieldValues extends FieldValues>({
  className,
  control,
  errorMessage,
  formItem,
  onSubmit,
  title,
}: Props<TFieldValues>) => {
  return (
    <form className={`${s.form} ${className}`} noValidate onSubmit={onSubmit}>
      <TextFormat className={s.title} variant={'h1'}>
        {title}
      </TextFormat>
      {formItem.map(input =>
        input === 'remember' ? (
          <ControlledCheckbox control={control} key={input} label={'remember me'} name={input} />
        ) : (
          <ControlledTextField
            control={control}
            errorMessage={errorMessage[input]?.message as string}
            key={input}
            label={input}
            name={input}
            type={input === 'passwordConfirm' ? 'password' : input}
          />
        )
      )}

      {title === 'sign in' && (
        <AuthRedirectLink className={s.link} title={'forgot your password?'} />
      )}

      {formInfo[title].description}

      <Button className={s.submitBtn} type={'submit'} variant={'primary'}>
        {title}
      </Button>

      {formInfo[title].redirect && <AuthRedirectLink className={s.description} title={title} />}
    </form>
  )
}
