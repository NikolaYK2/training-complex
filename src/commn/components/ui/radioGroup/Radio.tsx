import * as RadioGroup from '@radix-ui/react-radio-group';
import s from './Radio.module.scss'
import {FC} from "react";

type Props={
  id:string
  disabled:boolean
  value:string
}
export const Radio: FC<Props> = ({disabled,value,id}) => {
  return (
    <RadioGroup.Root className={s.root} disabled={disabled} defaultValue={value}>
      <div className={`${s.blockRadio}`}>
        <label className={`${s.blockItem} ${disabled ? s.disabledLabel : ''}`}>
          <RadioGroup.Item className={s.item} value={value} id={id}>
            <RadioGroup.Indicator className={s.indicator}/>
          </RadioGroup.Item>
        </label>
        <label className={`${s.label} ${disabled ? s.disabledLabel : ''}`}>{value}</label>
      </div>
      <div className={`${s.blockRadio}`}>
        <label className={`${s.blockItem} ${disabled ? s.disabledLabel : ''}`}>
          <RadioGroup.Item className={s.item} value='RadioGroup' id='r2'>
            <RadioGroup.Indicator className={s.indicator}/>
          </RadioGroup.Item>
        </label>
        <label className={`${s.label} ${disabled ? s.disabledLabel : ''}`}>RadioGroup</label>
      </div>
    </RadioGroup.Root>
  );
};
