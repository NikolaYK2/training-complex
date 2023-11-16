import * as RadioGroup from '@radix-ui/react-radio-group';
import s from './RadioGroupComponent.module.scss'
import {FC, ReactNode} from "react";

type Props = {
  children:ReactNode,
  disabled?: boolean
  defaultValue?: string
}

export const RadioGroupComponent: FC<Props> = ({disabled, defaultValue, children}) => {
  return (
    <RadioGroup.Root className={s.root} disabled={disabled} defaultValue={defaultValue}>
      {children}
    </RadioGroup.Root>
  );
};
