import { ChangeEvent, useEffect, useState } from 'react'

/**
 * Хук для дебаунса значения ввода.
 * @param initialValue Начальное значение для дебаунса.
 * @param delay Задержка в миллисекундах перед вызовом коллбэка.
 * @param callback Функция обратного вызова, которая будет вызвана с дебаунсированным значением.
 * @returns Объект с функциями handleChange, reset и текущим дебаунсированным значением.
 */
export const useDebounce = (
  initialValue: string,
  delay: number,
  callback?: (value: string) => void
) => {
  const [valueDebounce, setDebounce] = useState(initialValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      callback && callback(valueDebounce)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [valueDebounce])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDebounce(e.currentTarget.value)
  }

  // Функция для сброса текущего значения дебаунса
  const reset = () => {
    setDebounce('') // Сбрасываем значение дебаунса
    callback && callback('') // Вызываем коллбэк с пустой строкой
  }

  // Возвращаем объект с функциями и текущим значением дебаунса
  return { handleChange, reset, valueDebounce }
}
