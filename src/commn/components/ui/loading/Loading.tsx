import s from './Loading.module.scss'

export const Loading = () => {
  return (
    <div className={s.containerLoading}>
      <div className={s.loading} />
    </div>
  )
}
