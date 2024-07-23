export const updateSearchParam = (
  searchParams: URLSearchParams,
  setSearchParams: (params: URLSearchParams) => void,
  key: string,
  value: number | string,
  callBack?: (value: number) => void
) => {
  if (value === '' || value === 0) {
    searchParams.delete(key)
  } else {
    searchParams.set(key, value.toString())
  }
  if (value && callBack) {
    callBack(1)
  }
  setSearchParams(searchParams)
}
