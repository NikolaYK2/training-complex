import s from './Loading.module.scss'

type Props = {
  isLoading?: boolean
}
export const Loading = ({ isLoading = true }: Props) => {
  return (
    <>
      {isLoading && (
        <div className={s.containerLoading}>
          <div className={s.loading} />
        </div>
      )}
    </>
  )
}
