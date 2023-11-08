import * as Checkbox from '@radix-ui/react-checkbox';
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";
import s from './TickBox.module.scss'

export const TickBox = () => {

  return (
    <div className={s.container}>
      <label className={s.clickEffect}>
        <Checkbox.Root className={s.rootBlock} defaultChecked id="c1">
          <Checkbox.Indicator className={s.indicator}>
            <IconSvg name={"tick"}/>
          </Checkbox.Indicator>
        </Checkbox.Root>
      </label>
      <label className={s.label} htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  );
};

