import {FC, KeyboardEvent, useCallback, useState} from "react";
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";
import s from './Select.module.css'

type Props = {
  options: { id: number, value: number }[]
  setOptions: (pageNumber: number) => void
}
export const Select: FC<Props> = ({options, setOptions}) => {

  const [value, setValue] = useState(options[0].value)
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(true)

  const clickValueOptionHandle = useCallback((value: number) => {
    setValue(value)
    setOptions(value)
  }, [setOptions])


  const toggleStyleActiveHandle = useCallback(() => {
    setIsActive(prevState => !prevState)
  }, [])

  const removeStyleHandle = useCallback(() => {
    setIsActive(true)
  }, [])


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

    if (isActive) {
      clickValueOptionHandle(options[nextActiveIndex].value);
    }
  }, [activeIndex, options, clickValueOptionHandle, isActive])

  return (
    <div className={s.container}>
      <span>Показать</span>
      <div className={s.select}>
        <div className={`${s.value} ${!isActive ? s.svgActive : ''}`} onClick={toggleStyleActiveHandle}
             onKeyDown={onKeyDownHandle} tabIndex={0}>
          <span>{value}</span><IconSvg name={"pageTurn"}/>
        </div>
        <ul className={`${s.options} ${!isActive ? s.active : ''}`} onMouseLeave={removeStyleHandle}

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

