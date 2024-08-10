import { ChangeEvent, useEffect, useState } from 'react'

/**
 * Хук для дебаунса значения ввода.
 * @param initialValue Начальное значение для дебаунса.
 * @param delay Задержка в миллисекундах перед вызовом коллбэка.
 * @param callback Функция обратного вызова, которая будет вызвана с дебаунсированным значением.
 * @param onChange
 * @returns Объект с функциями handleChange, reset и текущим дебаунсированным значением.
 */
export const useDebounce = (
  initialValue: string,
  delay: number,
  callback?: (value: string) => void,
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
) => {
  const [valueDebounce, setDebounce] = useState(initialValue)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDebounce(e.currentTarget.value)
    onChange?.(e)
  }

  const reset = () => {
    callback?.('')
  }

  useEffect(() => {
    if (valueDebounce.trim() === '') {
      return // Если значение пустое, не запускаем дебаунс
    }

    const handler = setTimeout(() => {
      callback && callback(valueDebounce)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [valueDebounce])

  useEffect(() => {
    if (initialValue !== valueDebounce) {
      setDebounce(initialValue)
    }
  }, [initialValue])

  return { handleChange, reset, valueDebounce }
}
