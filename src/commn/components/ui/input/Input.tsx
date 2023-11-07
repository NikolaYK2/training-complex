import s from './Input.module.scss'
import {ChangeEvent, useState} from "react";

export const Input = () => {
  const [text, setText] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const textChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  const toggleFocus =()=>{
    setIsFocused(!isFocused)
  }

  return (
    <div className={s.container}>
      <input type="text" value={text}
             onChange={textChangeHandle}
             onBlur={toggleFocus}
             onFocus={toggleFocus}/>

      <div className={`${s.placeholder} ${isFocused || text ? s.mod : ''}`}>Input</div>
    </div>
  );
};
