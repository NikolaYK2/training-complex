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

  // Функция для сброса текущего значения дебаунса
  const reset = () => {
    setDebounce('') // Сбрасываем значение дебаунса
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      callback && callback(valueDebounce)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [valueDebounce])

  useEffect(() => {
    // Сбросить значение дебаунса при изменении initialValue
    if (initialValue !== valueDebounce) {
      setDebounce(initialValue || '') // Если initialValue пустое, устанавливаем ''
    }
  }, [initialValue])

  // Возвращаем объект с функциями и текущим значением дебаунса
  return { handleChange, reset, valueDebounce }
}
