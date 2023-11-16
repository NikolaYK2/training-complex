import * as RadioGroup from '@radix-ui/react-radio-group';
import {FC} from "react";
import s from './Radio.module.scss'

type Props = {
  id: string
  value: string
  disabled?: boolean
}

export const Radio: FC<Props> = ({disabled, value, id}) => {
  return (
    <div className={`${s.blockRadio}`}>
      <label className={`${s.blockItem} ${disabled ? s.disabledLabel : ''}`}>
        <RadioGroup.Item className={s.item} value={value} id={id}>
          <RadioGroup.Indicator className={s.indicator}/>
        </RadioGroup.Item>
      </label>
      <label className={`${s.label} ${disabled ? s.disabledLabel : ''}`}>{value}</label>
    </div>
  );
};
