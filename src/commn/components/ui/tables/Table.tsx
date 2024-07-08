import { ReactElement, useRef, useState } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './Table.module.scss'

type HeadersType = {
  id: number
  title: string
}

type CellType = {
  element?: ReactElement[]
  img?: string
  value: string
}

export type ParagraphType = {
  cells: CellType[]
  idCells: string
}

type TableProps = {
  headers: HeadersType[]
  paragraphs: ParagraphType[]
}

export const Table = ({ headers, paragraphs }: TableProps) => {
  const textErrors = 'Количество заголовков и колонок в строках должно совпадать'
  const ref = useRef<HTMLDivElement | null>(null)
  const [isActiveSort, setIsActiveSort] = useState(false)

  // Проверяем, что количество заголовков совпадает с количеством колонок в каждом параграфе
  const isLengthMismatch = paragraphs.some(paragraph => paragraph.cells.length !== headers.length)

  if (isLengthMismatch) {
    console.error(textErrors)

    return <div className={s.error}>{textErrors}</div>
  }

  return (
    <table className={s.container}>
      <thead>
        <tr>
          {headers.map(header => (
            <th className={s.header} key={header.id}>
              <div className={`${s.caption} ${s.isCaption}`}>
                <TextFormat variant={'subtitle2'}>{header.title}</TextFormat>

                {isActiveSort && (
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
        {paragraphs.map(paragraph => (
          <tr key={paragraph.idCells}>
            {paragraph.cells.map((cell, idx) => (
              <td className={s.row} key={idx}>
                <div className={s.item}>
                  {cell.img && (
                    <div className={s.img}>
                      <img alt={''} src={cell.img} />
                    </div>
                  )}

                  <TextFormat variant={'body2'}>{cell.value}</TextFormat>

                  <div className={s.elements}>
                    {cell.element?.map((el, k) => (
                      <div className={s.element} key={k}>
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
              </td>
            )) || []}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
