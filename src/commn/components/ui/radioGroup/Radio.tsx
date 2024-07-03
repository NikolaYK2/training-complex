import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './Radio.module.scss'

type Props = {
  disabled?: boolean
  id: string
  value: string
}

export const Radio: FC<Props> = ({ disabled, id, value }) => {
  return (
    <div className={`${s.blockRadio}`}>
      <label className={`${s.blockItem} ${disabled ? s.disabledLabel : ''}`}>
        <RadioGroup.Item className={s.item} id={id} value={value}>
          <RadioGroup.Indicator className={s.indicator} />
        </RadioGroup.Item>
      </label>
      <label className={`${s.label} ${disabled ? s.disabledLabel : ''}`}>{value}</label>
    </div>
  )
}
