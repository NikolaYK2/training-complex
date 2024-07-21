export const updateSearchParam = (
  searchParams: URLSearchParams,
  setSearchParams: (params: URLSearchParams) => void,
  key: string,
  value: number | string
) => {
  if (value === '' || value === 0) {
    searchParams.delete(key)
  } else {
    searchParams.set(key, value.toString())
  }
  setSearchParams(searchParams)
}
