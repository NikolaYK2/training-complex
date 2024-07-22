import { ChangeEvent } from 'react'

export const changeValues = (
  e: ChangeEvent<HTMLInputElement>,
  setState: (count: number) => void,
  setParam: (param: number) => void
) => {
  const value = parseInt(e.currentTarget.value, 10)

  if (value >= 0 && value <= 100) {
    setState(value)
    setParam(value)
  }
}
