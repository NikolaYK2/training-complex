import s from './Input.module.scss'
import {ChangeEvent, useState} from "react";
import {useShowPasswordInput} from "@/commn/utils/showPasswordInput.ts";
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";

const typesInput = {
  text: 'text',
  email: 'email',
  search: 'search',
  password: 'password',
} as const;
type  Props = {
  typeInput: keyof typeof typesInput,
  disabled?: boolean
}
export const Input = (props: Props) => {
  const {typeInput, disabled} = props
  const [text, setText] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const {type, toggle} = useShowPasswordInput()

  const textChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  const toggleFocus = () => {
    setIsFocused(!isFocused)
  }
  const inputStyle = text ? s.active : disabled ? s.disabled :  s.error
  const error = text ? '' : 'error!'

  return (
    <div className={s.container}>
      <div className={`${s.input} ${typeInput === 'search' ? s.search : ''} ${inputStyle}`}>
        <input type={typeInput === "password" ? type : typeInput}
               value={text}
               onChange={textChangeHandle}
               onBlur={toggleFocus}
               onFocus={toggleFocus}
               disabled={disabled}
        />
        {typeInput !== 'search' && <div className={`${s.placeholder} ${isFocused || text ? s.mod : ''}`}>Input</div>}

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
      <div className={s.errorText}>{error && error}</div>
    </div>
  );
};
