import { FullscreenIcon } from '@/assets/image/fuuscreen/FullscreenIcon'

import s from './HoverIconImage.module.scss'

type Props = {
  callback: () => void
  className?: string
  imgSrc: string | undefined
}
export const HoverIconImage = ({ callback, className = '', imgSrc }: Props) => {
  return (
    <div className={`${s.containerImg} ${className}`} onClick={callback}>
      <img alt={'img'} className={s.image} src={imgSrc} />
      <FullscreenIcon className={s.icon} />
    </div>
  )
}
