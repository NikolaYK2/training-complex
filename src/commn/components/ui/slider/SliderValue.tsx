import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { debounce } from '@/commn/utils/debounce'
import * as Slider from '@radix-ui/react-slider'

import s from './SliderValue.module.scss'

type Props = {
  maxValue: number
  minValue: number
  setCountMaxDecks: (countMax: number) => void
  setCountMinDecks: (countMin: number) => void
}

export const SliderValue = ({
  maxValue: max,
  minValue: min,
  setCountMaxDecks,
  setCountMinDecks,
}: Props) => {
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)

  const debouncedUpdate = useRef(
    debounce((minVal: number, maxVal: number) => {
      setCountMinDecks(minVal)
      setCountMaxDecks(maxVal)
    }, 500)
  ).current

  const changeSliderValues = (value: number[]) => {
    setMinValue(value[0])
    setMaxValue(value[1])
    debouncedUpdate(value[0], value[1])
  }

  const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value, 10)

    setMinValue(isNaN(value) ? 0 : value)
    debouncedUpdate(isNaN(value) ? 0 : value, maxValue)
  }

  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value, 10)

    setMaxValue(isNaN(value) ? 0 : value)
    debouncedUpdate(minValue, isNaN(value) ? 0 : value)
  }

  useEffect(() => {
    debouncedUpdate(minValue, maxValue)
  }, [minValue, maxValue, debouncedUpdate])

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
