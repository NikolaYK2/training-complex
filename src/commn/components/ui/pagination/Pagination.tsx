import {FC} from "react";
import s from './Pagination.module.scss'
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";
import {DOTS, usePagination} from "@/commn/hooks/usePagination.ts";
import {Select} from "@/commn/components/ui/select/Select.tsx";

type Props = {
  pageSizeOptions: { id: number, value: number }[]
  totalCount: number;// Общее количество элементов
  pageSize: number;// Количество элементов на странице
  currentPage: number;// Текущая страница
  siblingCount: number
  onPageChange: (pageNumber: number) => void;// Функция обратного вызова при изменении страницы
  setPageSize: (pageNumber: number) => void;// Функция обратного вызова при изменении страницы
}
export const Pagination: FC<Props> = ({
                                        pageSizeOptions,
                                        totalCount,
                                        currentPage,
                                        pageSize,
                                        onPageChange,
                                        setPageSize,
                                        siblingCount
                                      }) => {

  const paginationRange: (string | number)[] | undefined = usePagination({
    totalCount, currentPage, pageSize, siblingCount
  })
  // Вычисляем количество страниц
  const pagesCount = Math.ceil(totalCount / pageSize);

  if (currentPage === 0 || paginationRange && paginationRange.length < 2) {
    return null;
  }


  const nextPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const previousPage = () => {
    if (currentPage < pagesCount) onPageChange(currentPage + 1)
  }


  return (
    <nav className={s.nav}>
      <div className={`${s.nextPage} ${currentPage > 1 && s.activeArrow}`} onClick={nextPage}>
        <IconSvg name={'pageTurn'}/>
      </div>

      <ul className={s.ul}>
        {paginationRange?.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return <li key={pageNumber === DOTS ? `dots-${i}` : pageNumber}>{DOTS}</li>;
          }
          return (
            <li key={pageNumber === DOTS ? `dots-${i}` : pageNumber}>
              <a className={pageNumber === currentPage ? s.active : ''} onClick={() => {
                if (typeof pageNumber === 'number') onPageChange(pageNumber)
              }}>
                {pageNumber}
              </a>
            </li>
          )
        })}

      </ul>

      <div className={`${s.previousPag} ${currentPage < pagesCount && s.activeArrow}`} onClick={previousPage}>
        <IconSvg name={'pageTurn'}/>
      </div>

      <div className={s.blockSelector}>
        {/*<select onChange={(e) => setPageSize(+e.currentTarget.value)}>*/}
        {/*  {pageSizeOptions.map(el =>*/}
        {/*    <option key={el.id} value={el.value}>{el.value}</option>*/}
        {/*  )}*/}
        {/*</select>*/}
        <Select options={pageSizeOptions} setOptions={setPageSize}/>
      </div>
    </nav>
  );
};



