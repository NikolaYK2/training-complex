import { FormEventHandler, useState } from 'react'
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'

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
}
type FormInfoType = {
  [key: string]: ItemType
}
const formInfo: FormInfoType = {
  'check email': {
    buttonName: 'Back to Sign In',
    description: 'We’ve sent an Email with instructions to example@mail.com',
    redirect: false,
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
  | 'create new password'
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
  const [switchPersonalInfo, setSwitchPersonalInfo] = useState(false)
  const checkEmail = title === 'check email'
  const personalInformation = title === 'personal information'

  const setChangeNameHandler = () => {
    // Получаем текущее значение поля 'text'
    const fieldValue = control?.getFieldState('text' as Path<TFieldValues>)

    // Проверяем, что значение поля 'text' не пустое
    if (!fieldValue?.error && fieldValue?.isDirty) {
      setSwitchPersonalInfo(false)
    }
  }

  return (
    <form
      className={`${s.form} ${className} ${personalInformation && s.positionFormMod}`}
      noValidate
      onSubmit={onSubmit}
    >
      <TextFormat className={`${s.title} ${title.length > 11 && s.titleMod}`} variant={'h1'}>
        {title}
      </TextFormat>

      {personalInformation && (
        <div className={s.blockPersonalInfo}>
          <div className={s.avatar}>
            <img alt={'ava'} src={ava} />
            {!switchPersonalInfo && (
              <div className={s.iconName}>
                <IconSvg name={'edit'} />
              </div>
            )}
          </div>
          {!switchPersonalInfo && (
            <div className={s.name} onDoubleClick={() => setSwitchPersonalInfo(true)}>
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
            (input !== 'text' || (input === 'text' && switchPersonalInfo)) && (
              <ControlledTextField
                control={control}
                errorMessage={errorMessage[input]?.message as string}
                key={input}
                label={personalInformation ? 'nik name' : input}
                name={input}
                type={input === 'passwordConfirm' ? 'password' : input}
              />
            )
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

      {formInfo[title] && !switchPersonalInfo && (
        <TextFormat className={`${s.description} ${checkEmail && s.positionMod}`} variant={'body2'}>
          {formInfo[title].description}
        </TextFormat>
      )}

      <Button
        className={`${s.submitBtn} ${personalInformation && s.submitBtnMarginMod}`}
        onClick={setChangeNameHandler}
        type={'submit'}
        variant={personalInformation && !switchPersonalInfo ? 'secondary' : 'primary'}
      >
        {personalInformation && !switchPersonalInfo && (
          <div className={s.logOut}>
            <IconSvg name={'logOut'} />
          </div>
        )}
        {switchPersonalInfo ? 'Save Changes' : formInfo[title].buttonName}
      </Button>

      {formInfo[title].redirect && <AuthRedirectLink className={s.redirect} title={title} />}
    </form>
  )
}
