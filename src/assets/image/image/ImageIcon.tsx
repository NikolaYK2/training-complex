import s from './ImageIcon.module.scss'

type Props = {
  className?: string
}
export const ImageIcon = ({ className }: Props) => {
  return (
    <div className={`${s.containImageIcon} ${className}`}>
      <svg
        fill={'none'}
        height={'100%'}
        viewBox={'0 0 17 16'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          d={
            'M12.5 2h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-8 1.333h8a.667.667 0 01.667.667v5.573l-2.134-1.82a1.847 1.847 0 00-2.346 0L3.833 11.8V4a.667.667 0 01.667-.667zm8 9.334H4.873L9.54 8.773a.52.52 0 01.62 0l3.007 2.56V12a.667.667 0 01-.667.667z'
          }
          fill={'#fff'}
        ></path>
        <path d={'M5.833 6.667a1 1 0 100-2 1 1 0 000 2z'} fill={'#fff'}></path>
      </svg>
    </div>
  )
}
