import s from './FilterIcon.module.scss'

type Props = {
  callBack?: () => void
  className?: string
}
export const FilterIcon = ({ callBack, className = '' }: Props) => {
  return (
    <div className={`${s.containerFilterIcon} ${className}`} onClick={callBack}>
      <svg
        fill={'none'}
        height={'18'}
        viewBox={'0 0 16 18'}
        width={'16'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          d={
            'M9.9 18a1 1 0 01-.6-.2l-4-3.05a1 1 0 01-.39-.8v-3.27L.11 1.46A1 1 0 011 0h14a1 1 0 01.86.49 1 1 0 010 1l-5 9.21V17a1 1 0 01-.55.9 1 1 0 01-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 019 10l4.3-8H2.64l4.13 8a1 1 0 01.11.46l.02 3z'
          }
          fill={'#fff'}
        ></path>
      </svg>
    </div>
  )
}
