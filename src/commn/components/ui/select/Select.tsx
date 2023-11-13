import {FC, useRef, useState, KeyboardEvent, useCallback} from "react";
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";
import s from './Select.module.css'

type Props = {
  options: { id: number, value: number }[]
  setOptions: (pageNumber: number) => void
}
export const Select: FC<Props> = ({options, setOptions}) => {

  const [value, setValue] = useState(options[0].value)
  const [activeIndex, setActiveIndex] = useState(0);

  const ref = useRef<HTMLUListElement>(null)

  const clickValueOptionHandle = useCallback((value: number) => {
    setValue(value)
    setOptions(value)
  }, [setOptions])

  const toggleStyleActiveHandle = useCallback(() => {
    ref.current?.classList.toggle(s.active)
  },[])

  const removeStyleHandle = useCallback(() => {
    ref.current?.classList.remove(s.active)
  },[])


  const onKeyDownHandle = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    let nextActiveIndex = activeIndex;
    switch (e.key) {
      case 'Enter':
        clickValueOptionHandle(options[activeIndex].value);
        removeStyleHandle()
        break;
      case 'ArrowUp':
        if (activeIndex > 0) {
          nextActiveIndex = activeIndex - 1;
        }
        break;
      case 'ArrowDown':
        if (activeIndex < options.length - 1) {
          nextActiveIndex = activeIndex + 1;
        }
        break;
      default:
        break;
    }
    setActiveIndex(nextActiveIndex);

    if (!ref.current?.classList.contains(s.active)) {
      clickValueOptionHandle(options[nextActiveIndex].value);
    }
  },[activeIndex, options, clickValueOptionHandle,removeStyleHandle])

  return (
    <div className={s.container}>
      <span>Показать</span>
      <div className={s.select}>
        <div className={s.value} onClick={toggleStyleActiveHandle} onKeyDown={onKeyDownHandle} tabIndex={0}>
          <span>{value}</span><IconSvg name={"pageTurn"}/>
        </div>
        <ul className={s.options} ref={ref} onMouseLeave={removeStyleHandle}

        >
          {options.map((op, index) =>
            <li key={op.id} className={`${s.option} ${activeIndex === index ? s.hover : ''}`}
                onClick={() => clickValueOptionHandle(op.value)}
            >
              {op.value}
            </li>
          )}
        </ul>
      </div>
      <span>на странице</span>
    </div>
  );
};

