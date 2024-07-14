import { FormEventHandler, useEffect, useState } from 'react'
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { ControlledCheckbox } from '@/commn/components/ui/checkBox/ControlledCheckbox'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { AuthRedirectLink } from '@/commn/components/ui/redirectAuth/AuthRedirectLink'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { Profile } from '@/features/auth/personalInformation/profile/Profile'

import s from './FormAuth.module.scss'

type ItemType = {
  avatar?: string
  buttonName?: string
  description?: string
  nikName?: string
  redirect?: boolean
  rote?: string
}
type FormInfoType = {
  [key: string]: ItemType
}
const initialFormInfo: FormInfoType = {
  'check email': {
    buttonName: 'Send verification email again',
    redirect: true,
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
  avatar?: string
  buttonName?: null | string
  className?: string
  control?: Control<TFieldValues>
  descriptionMessage?: string
  errorMessage?: FieldErrors<TFieldValues>
  formItem?: (Path<TFieldValues> & string)[]
  nikName?: string
  onSubmit?: FormEventHandler<HTMLFormElement>
  redirect?: boolean | undefined
  route?: string
  title: TitleType
}

export const FormAuth = <TFieldValues extends FieldValues>({
  avatar,
  buttonName,
  className = '',
  control,
  descriptionMessage,
  errorMessage,
  formItem = [],
  nikName = '',
  onSubmit,
  redirect,
  route,
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

  const [formInfo, setFormInfo] = useState<FormInfoType>(initialFormInfo)

  // Обновление formInfo на основе входных параметров
  useEffect(() => {
    setFormInfo(prevFormInfo => ({
      ...prevFormInfo,
      [title]: {
        ...prevFormInfo[title],
        buttonName: buttonName || prevFormInfo[title].buttonName,
        description: descriptionMessage || prevFormInfo[title].description,
        nikName: nikName || prevFormInfo[title].nikName,
        redirect: redirect !== undefined ? redirect : prevFormInfo[title].redirect,
        rote: route || prevFormInfo[title].rote,
      },
    }))
  }, [title, buttonName, descriptionMessage, route, redirect, nikName])

  // if (descriptionMessage) {
  //   formInfo[title].description = descriptionMessage
  // }
  // if (buttonName) {
  //   formInfo[title].buttonName = buttonName
  // }
  // if (route) {
  //   formInfo[title].rote = route
  // }
  //
  // if (redirect !== undefined) {
  //   formInfo[title].redirect = redirect
  // }
  // if (nikName) {
  //   formInfo[title].nikName = nikName
  // }
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
        <Profile
          avatar={avatar ?? ''}
          isEditingPersonalInfo={isEditingPersonalInfo}
          nikName={nikName}
          setIsEditingPersonalInfo={setIsEditingPersonalInfo}
        />
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
