import { URLSearchParamsInit, useSearchParams } from 'react-router-dom'

type UpdateSearchParamType = {
  callBack?: (value: number) => void
  key: string
  replace?: boolean
  value: null | number | string
}
type SearchParamsInit = URLSearchParamsInit | undefined
export const useSearchUpdateParams = <T extends SearchParamsInit>(props?: T) => {
  const [searchParams, setSearchParams] = useSearchParams(props)

  const updateSearchParam = ({ callBack, key, replace = false, value }: UpdateSearchParamType) => {
    if (value === '' || value === 0 || value === null) {
      searchParams.delete(key)
    } else {
      searchParams.set(key, value.toString())
    }
    if (value && callBack) {
      callBack(1)
    }
    setSearchParams(searchParams, { replace })
  }
  const getSearchParam = (key: string, defaultValue: any = '') => {
    return searchParams.get(key) || defaultValue
  }

  return {
    getSearchParam,
    searchParams,
    setSearchParams,
    updateSearchParam,
  }
}
