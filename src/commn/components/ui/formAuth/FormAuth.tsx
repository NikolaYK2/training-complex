import { FormEventHandler } from 'react'
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'

import { Button } from '@/commn/components/ui/button'
import { ControlledCheckbox } from '@/commn/components/ui/checkBox/ControlledCheckbox'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { AuthRedirectLink } from '@/commn/components/ui/redirectAuth/AuthRedirectLink'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './FormAuth.module.scss'

type ItemType = {
  bottomName?: string
  description: string
  redirect: boolean
}
type FormInfoType = {
  [key: string]: ItemType
}
const formInfo: FormInfoType = {
  'check email': {
    bottomName: 'Back to Sign In',
    description: 'We’ve sent an Email with instructions to example@mail.com',
    redirect: false,
  },
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

export type TitleType =
  | 'check email'
  | 'create new password'
  | 'forgot your password?'
  | 'sign in'
  | 'sign up'

type Props<TFieldValues extends FieldValues> = {
  className?: string
  control?: Control<TFieldValues>
  errorMessage?: FieldErrors<TFieldValues>
  formItem?: (Path<TFieldValues> & string)[]
  onSubmit?: FormEventHandler<HTMLFormElement>
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
  const checkEmail = title === 'check email'

  return (
    <form className={`${s.form} ${className}`} noValidate onSubmit={onSubmit}>
      <TextFormat className={`${s.title} ${title.length > 11 && s.titleMod}`} variant={'h1'}>
        {title}
      </TextFormat>
      {formItem &&
        control &&
        errorMessage &&
        formItem.map(input =>
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

      {checkEmail && (
        <div className={s.checkEmail}>
          <IconSvg name={'checkEmail'} />
        </div>
      )}

      {formInfo[title] && (
        <TextFormat className={`${s.description} ${checkEmail && s.positionMod}`} variant={'body2'}>
          {formInfo[title].description}
        </TextFormat>
      )}

      <Button className={s.submitBtn} type={'submit'} variant={'primary'}>
        {checkEmail ? 'Back to Sign In' : title}
      </Button>

      {formInfo[title].redirect && <AuthRedirectLink className={s.redirect} title={title} />}
    </form>
  )
}
