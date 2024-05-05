import {ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState} from "react";
import {useShowPasswordInput} from "@/commn/utils/showPasswordInput.ts";
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";
import s from './TextField.module.scss'


type TypesInput =
  | 'text'
  | 'email'
  | 'search'
  | 'password';

type  TextFieldProps = {
  typeInput: TypesInput,
  errorMessage?: string,
  label?: string,
  disabled?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    typeInput,
    disabled,
    label,
    errorMessage,
    ...restProps
  } = props

  const [text, setText] = useState('')
  const [focusedPlaceholder, setFocusedPlaceholder] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)
  const {type, toggle} = useShowPasswordInput()

  const textChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
    setInputFocused(true)
  }

  const toggleFocus = () => {
    setFocusedPlaceholder(!focusedPlaceholder)
  }
  const inputStyle = text ? s.active : disabled ? s.disabled : inputFocused ? s.error : '';
  const error = inputFocused && !text ? errorMessage : '';
  const placeholderTextStyle = focusedPlaceholder || text ? s.mod : inputFocused && !text ? s.errorPlaceholder : '';


  return (
    <div className={s.container}>
      <div className={`${s.input} ${typeInput === 'search' ? s.search : ''} ${inputStyle}`}>
        <input type={typeInput === "password" ? type : typeInput}
               value={text}
               onChange={textChangeHandle}
               onBlur={toggleFocus}
               onFocus={toggleFocus}
               disabled={disabled}
               ref={ref}
               {...restProps}
        />
        {typeInput !== 'search' &&
            <div className={`${s.placeholder} ${placeholderTextStyle}`}>{error || label}</div>}

        {typeInput === 'password' &&
            <div className={s.icon}
                 onClick={toggle}>
                <IconSvg name={'showPass'}/>
            </div>}

        {typeInput === 'search' &&
            <>
                <div className={s.icon} style={{left: '11px'}}>
                    <IconSvg name={'search'}/>
                </div>
              {text &&
                  <div className={s.icon} onClick={() => setText('')}>
                      <IconSvg name={'clear'}/>
                  </div>}
            </>
        }
      </div>
      <div className={s.errorText}>{typeInput !== 'search' && error && error}</div>
    </div>
  );
});
