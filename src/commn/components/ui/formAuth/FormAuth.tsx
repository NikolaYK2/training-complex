import { FormEventHandler, useState } from 'react'
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'
import { Link } from 'react-router-dom'

import ava from '@/assets/image/profile/avatar.png'
import { Button } from '@/commn/components/ui/button'
import { ControlledCheckbox } from '@/commn/components/ui/checkBox/ControlledCheckbox'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { AuthRedirectLink } from '@/commn/components/ui/redirectAuth/AuthRedirectLink'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './FormAuth.module.scss'

type ItemType = {
  buttonName?: string
  description?: string
  redirect: boolean
  rote?: string
}
type FormInfoType = {
  [key: string]: ItemType
}
const formInfo: FormInfoType = {
  'check email': {
    buttonName: 'Back to Sign In',
    description: 'We’ve sent an Email with instructions to example@mail.com',
    redirect: false,
    rote: '/login',
  },
  'confirm email': {
    buttonName: 'Back to Sign In',
    redirect: false,
    rote: '/login',
  },
  'create new password': {
    buttonName: 'Create New Password',
    description: 'Create new password and we will send you further instructions to email',
    redirect: false,
  },
  'forgot your password?': {
    buttonName: 'Send Instructions',
    description: 'Enter your email address and we will send you further instructions',
    redirect: true,
  },
  'personal information': {
    buttonName: 'Logout',
    description: 'example@mail.com',
    redirect: false,
  },
  'sign in': { buttonName: 'sign in', redirect: true },
  'sign up': { buttonName: 'sign up', redirect: true },
}

export type TitleType =
  | 'check email'
  | 'confirm email'
  | 'create new password'
  | 'forgot password'
  | 'forgot your password?'
  | 'personal information'
  | 'sign in'
  | 'sign up'

type Props<TFieldValues extends FieldValues> = {
  className?: string
  control?: Control<TFieldValues>
  errorMessage?: FieldErrors<TFieldValues>
  formItem?: (Path<TFieldValues> & string)[]
  onSubmit?: FormEventHandler<HTMLFormElement>
  response?: string
  title: TitleType
}

export const FormAuth = <TFieldValues extends FieldValues>({
  className,
  control,
  errorMessage,
  formItem,
  onSubmit,
  response,
  title,
}: Props<TFieldValues>) => {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false)
  const isCheckEmail = title === 'check email'
  const isPersonalInformation = title === 'personal information'

  const setChangeNameHandler = () => {
    // Получаем текущее значение поля 'text'
    const fieldValue = control?.getFieldState('text' as Path<TFieldValues>)

    // Проверяем, что значение поля 'text' не пустое
    if (!fieldValue?.error && fieldValue?.isDirty) {
      setIsEditingPersonalInfo(false)
    }
  }

  if (response) {
    formInfo[title].description = response
  }

  return (
    <form
      className={`${s.form} ${className} ${isPersonalInformation && s.positionFormMod}`}
      noValidate
      onSubmit={onSubmit}
    >
      <TextFormat className={`${s.title} ${title.length > 11 && s.titleMod}`} variant={'h1'}>
        {title}
      </TextFormat>

      {isPersonalInformation && (
        <div className={s.blockPersonalInfo}>
          <div className={s.avatar}>
            <img alt={'ava'} src={String(ava)} />
            {!isEditingPersonalInfo && (
              <div className={s.iconName}>
                <IconSvg name={'edit'} />
              </div>
            )}
          </div>
          {!isEditingPersonalInfo && (
            <div className={s.name} onDoubleClick={() => setIsEditingPersonalInfo(true)}>
              <TextFormat variant={'h2'}>Nik</TextFormat>
              <div className={s.iconName}>
                <IconSvg name={'edit'} />
              </div>
            </div>
          )}
        </div>
      )}

      {formItem &&
        control &&
        errorMessage &&
        formItem.map(input =>
          input === 'remember' ? (
            <ControlledCheckbox control={control} key={input} label={'remember me'} name={input} />
          ) : (
            (input !== 'text' || (input === 'text' && isEditingPersonalInfo)) && (
              <ControlledTextField
                control={control}
                errorMessage={errorMessage[input]?.message as string}
                key={input}
                label={isPersonalInformation ? 'nik name' : input}
                name={input}
                type={input === 'passwordConfirm' ? 'password' : input}
              />
            )
          )
        )}

      {title === 'sign in' && <AuthRedirectLink className={s.link} title={'forgot password'} />}
      {title === 'confirm email' && <IconSvg name={'okEmail'} />}

      {isCheckEmail && (
        <div className={s.checkEmail}>
          <IconSvg name={'checkEmail'} />
        </div>
      )}

      {formInfo[title] && !isEditingPersonalInfo && (
        <TextFormat
          className={`${s.description} ${isCheckEmail && s.positionMod}`}
          variant={'body2'}
        >
          {formInfo[title].description}
        </TextFormat>
      )}

      <Button
        as={formInfo[title].rote ? Link : 'button'}
        className={`${s.submitBtn} ${isPersonalInformation && s.submitBtnMarginMod}`}
        onClick={setChangeNameHandler}
        to={formInfo[title].rote ? formInfo[title].rote : ''}
        type={'submit'}
        variant={isPersonalInformation && !isEditingPersonalInfo ? 'secondary' : 'primary'}
      >
        {isPersonalInformation && !isEditingPersonalInfo && (
          <div className={s.logOut}>
            <IconSvg name={'logOut'} />
          </div>
        )}
        {isEditingPersonalInfo ? 'Save Changes' : formInfo[title].buttonName}
      </Button>

      {formInfo[title].redirect && (
        <AuthRedirectLink className={s.redirect} describe title={title} />
      )}
    </form>
  )
}
