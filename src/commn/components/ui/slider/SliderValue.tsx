import { ChangeEvent, useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './SliderValue.module.scss'

export const SliderValue = () => {
  const [valueNum1, setValueNum1] = useState(19)
  const [valueNum2, setValueNum2] = useState(79)

  const changeSliderValues = (value: number[]) => {
    setValueNum1(value[0])
    setValueNum2(value[1])
  }

  const changeValue1 = (e: ChangeEvent<HTMLInputElement>) => {
    setValueNum1(parseInt(e.currentTarget.value))
  }
  const changeValue2 = (e: ChangeEvent<HTMLInputElement>) => {
    setValueNum2(parseInt(e.currentTarget.value))
  }

  return (
    <div className={s.container}>
      <div className={s.blockValue}>
        <input onChange={changeValue1} type={'number'} value={valueNum1} />
      </div>
      <Slider.Root
        className={s.slider}
        max={100}
        onValueChange={changeSliderValues}
        step={1}
        value={[valueNum1, valueNum2]}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
        <Slider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
      </Slider.Root>
      <div className={s.blockValue}>
        <input onChange={changeValue2} type={'number'} value={valueNum2} />
      </div>
    </div>
  )
}
