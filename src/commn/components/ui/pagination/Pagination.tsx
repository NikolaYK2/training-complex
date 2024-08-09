import { KeyboardEvent, KeyboardEventHandler, useCallback } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { SelectItem, Selector } from '@/commn/components/ui/selector/Selector'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { DOTS, usePagination } from '@/commn/hooks/usePagination'

import s from './Pagination.module.scss'

type Props = {
  className?: string
  currentPage: number // Текущая страница
  itemPage: string
  onPageChange: (pageNumber: number) => void // Функция обратного вызова при изменении страницы
  pageSize: number // Количество элементов на странице
  setPageSize: (value: string) => void // Функция обратного вызова при изменении страницы
  siblingCount: number // Количество "соседних" страниц, отображаемых слева и справа от текущей страницы
  totalCount: number // Общее количество элементов
}
export const Pagination = ({
  className = '',
  currentPage,
  itemPage,
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

  const handleKeyDownPrevious: KeyboardEventHandler<HTMLButtonElement> = e => {
    // Проверка, что нажата клавиша Enter или пробел
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault() // Предотвращение действия по умолчанию, если необходимо
      previousPage()
    }
  }
  const nextPage = useCallback(() => {
    if (currentPage < pagesCount) {
      onPageChange(currentPage + 1)
    }
  }, [currentPage, pagesCount, onPageChange])
  const handleKeyDownNext: KeyboardEventHandler<HTMLButtonElement> = e => {
    // Проверка, что нажата клавиша Enter или пробел
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault() // Предотвращение действия по умолчанию, если необходимо
      nextPage()
    }
  }

  const handleClickPage = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page)
    }
  }
  const handleClickDownPage = (e: KeyboardEvent<HTMLLIElement>, page: number | string) => {
    if (e.key === 'Enter') {
      handleClickPage(page)
    }
  }

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  return (
    <nav className={`${s.nav} ${className}`}>
      <button
        className={`${s.nextPage} ${currentPage > 1 && s.activeArrow}`}
        onClick={previousPage}
        onKeyDown={handleKeyDownPrevious}
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
              onClick={() => handleClickPage(pageNumber)}
              onKeyDown={e => handleClickDownPage(e, pageNumber)}
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
        onKeyDown={handleKeyDownNext}
        type={'button'}
      >
        <IconSvg name={'pageTurn'} />
      </button>

      <div className={s.blockSelector}>
        <TextFormat style={{ marginRight: '6px' }} variant={'body2'}>
          Show
        </TextFormat>
        <Selector className={s.selector} onValueChange={setPageSize} value={itemPage}>
          <SelectItem value={'10'}>10</SelectItem>
          <SelectItem value={'20'}>20</SelectItem>
          <SelectItem value={'30'}>30</SelectItem>
          <SelectItem value={'50'}>50</SelectItem>
          <SelectItem value={'100'}>100</SelectItem>
        </Selector>
        <TextFormat style={{ marginLeft: '9px' }} variant={'body2'}>
          on page
        </TextFormat>
      </div>
    </nav>
  )
}
