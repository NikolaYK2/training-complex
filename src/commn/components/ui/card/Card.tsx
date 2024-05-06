import s from './Card.module.scss'
import {ReactNode} from "react";

type Props = {
  children: ReactNode,
}
export const Card = ({children}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.blockCard}>
        {children}
      </div>
    </div>
  );
};
