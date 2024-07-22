import { ChangeEvent, useEffect, useState } from 'react'

import { changeValues } from '@/commn/components/ui/slider/lib/changeValues'
import { useDebounce } from '@/commn/hooks/useDeb'
import * as Slider from '@radix-ui/react-slider'

import s from './SliderValue.module.scss'

type Props = {
  maxValue: number
  minValue: number
  setCountMaxDecks: (countMax: number) => void
  setCountMinDecks: (countMin: number) => void
}

export const SliderValue = ({
  maxValue: initialMax,
  minValue: initialMin,
  setCountMaxDecks,
  setCountMinDecks,
}: Props) => {
  const [minValue, setMinValue] = useState(initialMin)
  const [maxValue, setMaxValue] = useState(initialMax)

  // Дебаунсинг для предотвращения частых обновлений
  const debouncedMinValue = useDebounce(minValue, 300)
  const debouncedMaxValue = useDebounce(maxValue, 300)

  // Обновляем значения при изменении пропсов
  useEffect(() => {
    setMinValue(initialMin)
  }, [initialMin])

  useEffect(() => {
    setMaxValue(initialMax)
  }, [initialMax])
  // Обновляем значения в родительском компоненте при изменении дебаунсированных значений
  useEffect(() => {
    setCountMinDecks(debouncedMinValue)
  }, [debouncedMinValue])

  useEffect(() => {
    setCountMaxDecks(debouncedMaxValue)
  }, [debouncedMaxValue])
  // Обновляем состояния ползунков
  const changeSliderValues = (value: number[]) => {
    if (value[0] !== minValue) {
      setMinValue(value[0])
    }
    if (value[1] !== maxValue) {
      setMaxValue(value[1])
    }
    setCountMinDecks(debouncedMinValue)
    setCountMaxDecks(debouncedMaxValue)
  }
  const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    changeValues(e, setMinValue, setCountMinDecks)
  }

  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    changeValues(e, setMaxValue, setCountMaxDecks)
  }

  return (
    <div className={s.container}>
      <div className={s.blockValue}>
        <input onChange={changeMinValue} type={'number'} value={minValue} />
      </div>
      <Slider.Root
        className={s.slider}
        max={100}
        onValueChange={changeSliderValues}
        step={1}
        value={[minValue, maxValue]}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Minimum Value'} className={s.sliderThumb} />
        <Slider.Thumb aria-label={'Maximum Value'} className={s.sliderThumb} />
      </Slider.Root>
      <div className={s.blockValue}>
        <input onChange={changeMaxValue} type={'number'} value={maxValue} />
      </div>
    </div>
  )
}
