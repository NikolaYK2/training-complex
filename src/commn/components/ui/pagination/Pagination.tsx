import { useCallback } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { Select } from '@/commn/components/ui/select/Select'
import { DOTS, usePagination } from '@/commn/hooks/usePagination'

import s from './Pagination.module.scss'

type Props = {
  currentPage: number // Текущая страница
  onPageChange: (pageNumber: number) => void // Функция обратного вызова при изменении страницы
  pageSize: number // Количество элементов на странице
  setPageSize: (pageNumber: number) => void // Функция обратного вызова при изменении страницы
  siblingCount: number // Количество "соседних" страниц, отображаемых слева и справа от текущей страницы
  totalCount: number // Общее количество элементов
}
export const Pagination = ({
  currentPage,
  onPageChange,
  pageSize = 1,
  setPageSize,
  siblingCount = 1,
  totalCount,
}: Props) => {
  const paginationRange = usePagination({ currentPage, pageSize, siblingCount, totalCount })

  // Вычисляем количество страниц
  const pagesCount = Math.ceil(totalCount / pageSize)

  const previousPage = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }, [currentPage, onPageChange])

  const nextPage = useCallback(() => {
    if (currentPage < pagesCount) {
      onPageChange(currentPage + 1)
    }
  }, [currentPage, pagesCount, onPageChange])

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  return (
    <nav className={s.nav}>
      <button
        className={`${s.nextPage} ${currentPage > 1 && s.activeArrow}`}
        onClick={previousPage}
        type={'button'}
      >
        <IconSvg name={'pageTurn'} />
      </button>

      <ul className={s.ul}>
        {paginationRange?.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return <li key={pageNumber === DOTS ? `dots-${i}` : pageNumber}>{DOTS}</li>
          }

          return (
            <li
              key={pageNumber === DOTS ? `dots-${i}` : pageNumber}
              onClick={() => {
                if (typeof pageNumber === 'number') {
                  onPageChange(pageNumber)
                }
              }}
              tabIndex={i}
            >
              <a className={pageNumber === currentPage ? s.active : ''}>{pageNumber}</a>
            </li>
          )
        })}
      </ul>

      <button
        className={`${s.previousPag} ${currentPage < pagesCount && s.activeArrow}`}
        onClick={nextPage}
        type={'button'}
      >
        <IconSvg name={'pageTurn'} />
      </button>

      <div className={s.blockSelector}>
        <Select
          options={[
            { id: 10, value: '10' },
            { id: 20, value: '20' },
            { id: 30, value: '30' },
            { id: 50, value: '50' },
            { id: 100, value: '100' },
          ]}
          setOptions={setPageSize}
        />
      </div>
    </nav>
  )
}
