import { URLSearchParamsInit, useSearchParams } from 'react-router-dom'

type SearchParamsInit = URLSearchParamsInit | undefined
export const useSearchUpdateParams = <T extends SearchParamsInit>(props?: T) => {
  const [searchParams, setSearchParams] = useSearchParams(props)

  const updateSearchParam = (
    key: string,
    value: null | number | string,
    callBack?: (value: number) => void
  ) => {
    if (value === '' || value === 0 || value === null) {
      searchParams.delete(key)
    } else {
      searchParams.set(key, value.toString())
    }
    if (value && callBack) {
      callBack(1)
    }
    setSearchParams(searchParams)
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
