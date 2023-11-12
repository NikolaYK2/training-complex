import {useMemo} from "react";

export const DOTS = '...'

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({length}, (_, idx) => idx + start);
};

type PaginationArgs = {
  totalCount: number; // Общее количество элементов
  pageSize: number; // Количество элементов на странице
  currentPage: number; // Текущая страница
  siblingCount: number; // Количество "соседних" страниц, отображаемых слева и справа от текущей страницы
};

export const usePagination = ({
                                totalCount,
                                pageSize,
                                siblingCount = 1,
                                currentPage,
                              }: PaginationArgs) => {
  // Вычисляем общее количество страниц
  const totalPageCount = Math.ceil(totalCount / pageSize);

  // Общее количество номеров страниц, которые мы хотим показать
  const totalPageNumbers = siblingCount + 5;

  // Вычисляем индексы левого и правого "соседей" текущей страницы
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

  // Определяем, нужно ли показывать многоточие слева и справа от текущей страницы
  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

  // Первая и последняя страницы всегда отображаются
  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  // Используем useMemo для оптимизации вычисления диапазона страниц
  // Возвращаем диапазон страниц
  return useMemo(() => {
    // Если общее количество страниц меньше или равно количеству страниц, которые мы хотим показать,
    // то просто возвращаем все страницы
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // Если не нужно показывать многоточие слева, но нужно справа,
    // то возвращаем первые страницы и многоточие перед последней страницей
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    // Если нужно показывать многоточие слева, но не справа,
    // то возвращаем первую страницу, многоточие и последние страницы
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Если нужно показывать многоточие и слева, и справа,
    // то возвращаем первую страницу, многоточие, соседние страницы, многоточие и последнюю страницу
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

  }, [totalCount, pageSize, siblingCount, currentPage]);
};
