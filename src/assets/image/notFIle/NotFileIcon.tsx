import s from './NotFileIcon.module.scss'

export const NotFileIcon = () => {
  return (
    <div>
      <svg
        height={'100%'}
        viewBox={'0 0 24 24'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          className={s.path}
          d={
            'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z'
          }
        ></path>
      </svg>
    </div>
  )
}
