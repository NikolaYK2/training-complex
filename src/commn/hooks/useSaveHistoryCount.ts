import { useEffect, useState } from 'react'

type Props = {
  page: number
}
export const useSaveHistoryCount = ({ page }: Props) => {
  const [historyCount, setHistoryCount] = useState<number>(() => {
    // Инициализируем значение из localStorage, если оно есть
    const savedCount = sessionStorage.getItem('historyCount')

    return savedCount ? JSON.parse(savedCount) : 0
  })

  useEffect(() => {
    // Обновляем значение historyCount при изменении страницы
    setHistoryCount(prevCount => {
      const newCount = prevCount + 1

      sessionStorage.setItem('historyCount', JSON.stringify(newCount))

      return newCount
    })
  }, [page])

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('historyCount')
    }
  }, [])

  return { historyCount }
}
