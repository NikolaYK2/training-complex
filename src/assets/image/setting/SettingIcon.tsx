import s from './SettingIcon.module.scss'

export const SettingIcon = () => {
  return (
    <div className={s.containerSettingIcon}>
      <svg
        fill={'none'}
        height={'100%'}
        viewBox={'-1.5 -1.5 21 21'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <circle className={s.circle} cx={'8.8'} cy={'8.8'} r={'8.5'} stroke={'#fff'}></circle>
        <g clipPath={'url(#clip0_84039_3192)'} fill={'#fff'}>
          <path
            d={
              'M9 10a1 1 0 100-2 1 1 0 000 2zM9 6.5a1 1 0 100-2 1 1 0 000 2zM9 13.5a1 1 0 100-2 1 1 0 000 2z'
            }
            fill={'#fff'}
          ></path>
        </g>
        <defs>
          <clipPath id={'clip0_84039_3192'}>
            <path d={'M0 0H12V12H0z'} fill={'#fff'} transform={'translate(3 3)'}></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
