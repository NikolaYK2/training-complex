import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { useShowPasswordInput } from '@/commn/utils/showPasswordInput'

import s from './TextField.module.scss'

type TypesInput = 'email' | 'password' | 'search' | 'text'

export type TextFieldProps = {
  disabled?: boolean
  errorMessage?: string
  label?: string
  typeInput: TypesInput
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { disabled, errorMessage, label, typeInput, ...restProps } = props

  const [text, setText] = useState('')
  const [focusedPlaceholder, setFocusedPlaceholder] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)
  const { toggle, type } = useShowPasswordInput()

  const textChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
    setInputFocused(true)
  }

  const toggleFocus = () => {
    setFocusedPlaceholder(!focusedPlaceholder)
  }

  const inputStyle = text ? s.active : disabled ? s.disabled : inputFocused ? s.error : ''
  const error = inputFocused && !text ? errorMessage : ''
  const placeholderTextStyle =
    focusedPlaceholder || text ? s.labelIsActive : inputFocused && !text ? s.errorPlaceholder : ''

  return (
    <div className={s.container}>
      <div className={`${s.input} ${typeInput === 'search' ? s.search : ''} ${inputStyle}`}>
        <input
          disabled={disabled}
          onBlur={toggleFocus}
          onChange={textChangeHandle}
          onFocus={toggleFocus}
          ref={ref}
          type={typeInput === 'password' ? type : typeInput}
          value={text}
          {...restProps}
        />
        {typeInput !== 'search' && (
          <label className={`${s.placeholder} ${placeholderTextStyle}`}>{error || label}</label>
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
            {text && (
              <div className={s.icon} onClick={() => setText('')}>
                <IconSvg name={'clear'} />
              </div>
            )}
          </>
        )}
      </div>
      <div className={s.errorText}>{typeInput !== 'search' && error && error}</div>
    </div>
  )
})
