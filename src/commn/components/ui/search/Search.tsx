import { TextField } from '@/commn/components/ui/input/TextField'

import s from './Search.module.scss'

type Props = {
  className?: string
  searchName: string
  setSearch: (search: string) => void
}
export const Search = ({ className, searchName, setSearch }: Props) => {
  return (
    <div className={`${s.containerSearch} ${className}`}>
      <TextField
        onValueChange={setSearch}
        placeholder={'Search...'}
        type={'search'}
        value={searchName ?? ''}
      />
    </div>
  )
}
