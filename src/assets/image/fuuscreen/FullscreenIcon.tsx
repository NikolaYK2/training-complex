import s from './FullscreenIcon.module.scss'

type Props = {
  className?: string
}
export const FullscreenIcon = ({ className }: Props) => {
  return (
    <div className={`${s.containerFullscreenIcon} ${className || ''}`}>
      <svg
        height={'100%'}
        viewBox={'0 0 32 32'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          d={'M4 4v9h2V6h7V4H4zm15 0v2h7v7h2V4h-9zM4 19v9h9v-2H6v-7H4zm22 0v7h-7v2h9v-9h-2z'}
        ></path>
      </svg>
    </div>
  )
}
