import {FC, useRef, useState} from "react";
import s from './Select.module.css'
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";

type Props = {
  options: { id: number, value: number }[]
  setOptions: (pageNumber: number) => void
}
export const Select: FC<Props> = ({options, setOptions}) => {
  const [value, setValue] = useState(options[0].value)
  const ref = useRef<HTMLUListElement>(null)


  const click = (value: number) => {
    setValue(value)
    setOptions(value)
  }

  const t = () => {
    ref.current?.classList.toggle(s.active)
  }

  const t2 = () => {
    ref.current?.classList.remove(s.active)
  }

  return (
    <div className={s.container}>
      <span>Показать</span>
      <div className={s.select}>
        <div className={s.value} onClick={t} >
          <span>{value}</span><IconSvg name={"pageTurn"}/>
        </div>
        <ul className={s.options} ref={ref} onMouseLeave={t2} >
          {options.map(op =>
            <li key={op.id}
                className={`${s.option} ${value === op.id ? s.hover : ''}`}
                onClick={() => click(op.value)}>
              {op.value}
            </li>
          )}
        </ul>
      </div>
      <span>на странице</span>
    </div>
  );
};

