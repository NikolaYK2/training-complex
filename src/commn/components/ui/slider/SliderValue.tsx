import * as Slider from '@radix-ui/react-slider';
import s from './SliderValue.module.scss'
import {ChangeEvent, useState} from "react";

export const SliderValue = () => {

  const [valueNum1, setValueNum1] = useState(19);
  const [valueNum2, setValueNum2] = useState(79);

  const changeSliderValues = (value: number[]) => {
    setValueNum1(value[0]);
    setValueNum2(value[1]);
  };

  const changeValue1 = (e: ChangeEvent<HTMLInputElement>) => {
    setValueNum1(parseInt(e.currentTarget.value))
  }
  const changeValue2 = (e: ChangeEvent<HTMLInputElement>) => {
    setValueNum2(parseInt(e.currentTarget.value))
  }

  return (
    <div className={s.container}>
      <div className={s.blockValue}>
        <input type="number" value={valueNum1} onChange={changeValue1}/>
      </div>
      <Slider.Root className={s.slider} value={[valueNum1, valueNum2]} max={100} step={1} onValueChange={changeSliderValues}>
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange}/>
        </Slider.Track>
        <Slider.Thumb className={s.sliderThumb} aria-label="Volume"/>
        <Slider.Thumb className={s.sliderThumb} aria-label="Volume"/>
      </Slider.Root>
      <div className={s.blockValue}>
        <input type="number" value={valueNum2} onChange={changeValue2}/>
      </div>
    </div>
  );
};
