import s from './Input.module.scss'
import {ChangeEvent, useEffect, useRef, useState} from "react";

export const Input = () => {
  const [text, setText] = useState('')
  const textChangeHandle = (e: ChangeEvent<HTMLInputElement>) => [
    setText(e.currentTarget.value)
  ]

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (text !== '') {
      ref.current?.classList.add(s.on)
    } else {
      ref.current?.classList.remove(s.on)
    }
  }, [text]);

  return (
    <div className={s.container}>
      <input type="text" value={text} onChange={textChangeHandle}/>
      <div className={s.placeholder} ref={ref}>Input</div>
    </div>
  );
};
