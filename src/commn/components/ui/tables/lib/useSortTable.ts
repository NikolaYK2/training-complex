import { useState } from 'react'

import { OrderByType } from '@/services/decks/DecksTypes'

type Params = {
  setOrderBy: ((sortValue: OrderByType) => void) | undefined
  styleAsc: string
  styleDesc: string
}
export const useSortTable = ({ setOrderBy, styleAsc, styleDesc }: Params) => {
  const [activeSort, setActiveSort] = useState<{ column: number; order: number }>({
    column: 0,
    order: 1,
  })

  const handleSetSortStyle = (key: number) => {
    if (activeSort.column !== key) {
      return ''
    }
    switch (activeSort.order) {
      case 1:
        return styleAsc
      case 2:
        return styleDesc
      default:
        return ''
    }
  }
  const handleSort = (sortFile: any, key: number) => {
    if (!sortFile) {
      return
    }
    let newOrder = 1

    if (activeSort.column === key) {
      newOrder = activeSort.order === 3 ? 1 : activeSort.order + 1
    }

    setActiveSort({
      column: key,
      order: newOrder,
    })

    setOrderBy && setOrderBy?.(sortFile[newOrder])
  }

  return { handleSetSortStyle, handleSort }
}
