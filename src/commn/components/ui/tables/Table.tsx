import { ReactElement, useRef } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'

import s from './Table.module.scss'

type HeadersType = {
  id: number
  sort?: boolean
  title: string
}
type ParagraphsType = Pick<HeadersType, 'id' | 'title'> & {
  element?: ReactElement[]
  img?: string
}
type TableProps = {
  headers: HeadersType[]
  paragraphs: ParagraphsType[][]
}
export const Table = ({ headers, paragraphs }: TableProps) => {
  const textErrors = 'Количество заголовков и колонок в строках должно совпадать'

  const ref = useRef<HTMLDivElement>(null)

  const getSort = (checked: boolean) => {
    if (checked) {
      ref.current?.classList.toggle(s.isSort)
    }
  }

  // Проверяем, что количество заголовков совпадает с количеством колонок в каждом параграфе
  const isLengthMismatch = paragraphs.some(paragraph => paragraph.length !== headers.length)

  if (isLengthMismatch) {
    // Если они не совпадают, выводим сообщение об ошибке в консоль и возвращаем div с сообщением об ошибке
    console.error(textErrors)

    return <div className={s.error}>{textErrors}</div>
  }

  return (
    <table className={s.container}>
      <thead>
        <tr>
          {headers.map(header => (
            <th className={s.header} key={header.id}>
              <div
                className={`${s.caption} ${header.sort && s.isCaption}`}
                onClick={() => getSort(!!header.sort)}
              >
                {header.title}
                {header.sort && (
                  <div className={s.sort} ref={ref}>
                    <IconSvg name={'arrow'} />
                  </div>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {paragraphs.map((paragraph, i) => (
          <tr key={i}>
            {paragraph.map(cell => (
              <td className={s.row} key={cell.id}>
                <div className={s.item}>
                  {cell.img && (
                    <div className={s.img}>
                      <img alt={''} src={cell.img} />
                    </div>
                  )}
                  <div className={s.str}>{cell.title}</div>
                  <div className={s.elements}>
                    {cell.element?.map((el, k) => (
                      <div className={s.element} key={k}>
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
