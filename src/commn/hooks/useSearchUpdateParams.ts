import { URLSearchParamsInit, useSearchParams } from 'react-router-dom'

export const DECKS_KEY_SEARCH_PARAMS = {
  authorId: 'authorId',
  default: 'default',
  favoritedBy: 'favoritedBy',
  maxCardsCount: 'maxCardsCount',
  minCardsCount: 'minCardsCount',
  orderBy: 'orderBy',
  page: 'page',
  pageItem: 'itemsPerPage',
  searchName: 'name',
}
export type UpdateSearchParamType = {
  key: string
  removeKeys?: string[]
  replace?: boolean
  value: null | number | string
}
type SearchParamsInit = URLSearchParamsInit | undefined
export const useSearchUpdateParams = <T extends SearchParamsInit>(props?: T) => {
  const [searchParams, setSearchParams] = useSearchParams(props)

  const updateSearchParam = ({
    key,
    removeKeys,
    replace = false,
    value,
  }: UpdateSearchParamType) => {
    if (value === '' || value === 0 || value === null) {
      searchParams.delete(key)
    } else {
      searchParams.set(key, value.toString())
    }
    if (removeKeys && Array.isArray(removeKeys)) {
      removeKeys.forEach(key => searchParams.delete(key))
    }
    setSearchParams(searchParams, { replace })
  }
  const getSearchParam = (key: string, defaultValue: any = '') => {
    return searchParams.get(key) || defaultValue
  }
  const paramsException = [DECKS_KEY_SEARCH_PARAMS.authorId, DECKS_KEY_SEARCH_PARAMS.pageItem]

  const clearParams = () => {
    Object.values(DECKS_KEY_SEARCH_PARAMS).forEach(
      param => !paramsException.includes(param) && searchParams.delete(param)
    )
  }

  return {
    clearParams,
    getSearchParam,
    searchParams,
    setSearchParams,
    updateSearchParam,
  }
}
