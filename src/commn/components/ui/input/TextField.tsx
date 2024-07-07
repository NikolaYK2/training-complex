import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { useDebounce } from '@/commn/hooks/useDebounce'
import { useShowPasswordInput } from '@/commn/utils/showPasswordInput'

import s from './TextField.module.scss'

// export type TypesInput = 'email' | 'password' | 'search' | 'text'

export type TextFieldProps = {
  disabled?: boolean
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    disabled,
    errorMessage,
    label,
    onValueChange,
    type: typeInput,
    value,
    ...restProps
  } = props
  const { toggle, type } = useShowPasswordInput()
  const [focus, setFocus] = useState(false)

  const { handleChange, reset, valueDebounce } = useDebounce(String(value), 500, onValueChange)

  let inputStyle = ''

  if (disabled) {
    inputStyle = s.disabled
  } else if (errorMessage) {
    inputStyle = s.error
  }

  let placeholderTextStyle = ''

  if (value) {
    placeholderTextStyle = s.labelIsActive
  } else if (errorMessage && !value) {
    placeholderTextStyle = s.errorPlaceholder
  }

  const focusHandler = () => {
    setFocus(true)
  }
  const onFocusHandler = () => {
    setFocus(false)
  }

  return (
    <div className={s.container}>
      <label
        className={`${s.input} ${typeInput === 'search' ? s.search : ''} ${inputStyle} ${
          focus && s.focusInput
        }`}
      >
        <input
          autoComplete={'current-password'}
          disabled={disabled}
          onBlur={onFocusHandler}
          onChange={handleChange}
          onFocus={focusHandler}
          ref={ref}
          type={typeInput === 'password' ? type : typeInput}
          value={valueDebounce}
          {...restProps}
        />
        {typeInput !== 'search' && (
          <label className={`${s.placeholder} ${placeholderTextStyle}`}>{label}</label>
        )}

        {typeInput === 'password' && (
          <div className={s.icon} onClick={toggle}>
            <IconSvg name={'showPass'} />
          </div>
        )}

        {typeInput === 'search' && (
          <>
            <div className={s.icon} style={{ left: '11px' }}>
              <IconSvg name={'search'} />
            </div>
            {value && (
              <div className={s.icon} onClick={reset}>
                <IconSvg name={'clear'} />
              </div>
            )}
          </>
        )}
      </label>
      <div className={s.errorText}>{typeInput !== 'search' && errorMessage}</div>
    </div>
  )
})
