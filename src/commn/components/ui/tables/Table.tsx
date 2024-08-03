import { Fragment, MouseEvent, ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'
import { HoverIconImage } from '@/commn/components/ui/hoverIconImage/HoverIconImage'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { useSortTable } from '@/commn/components/ui/tables/lib/useSortTable'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { CARDS_ROUTE } from '@/routes/Router'
import { CardOrderByType, OrderByType } from '@/services/decks/DecksTypes'

import s from './Table.module.scss'

type HeadersType = {
  id: number
  isEditable?: boolean
  orderBy?: CardOrderByType
  title: string
}

export type CellType = {
  element?: ReactElement[]
  elementUser?: boolean
  idDeck?: string
  img?: null | string
  isEditable?: boolean
  value?: string
}

export type ParagraphType = {
  cardCounts?: number
  cells: CellType[]
  idCells: string
  isRowClickable?: boolean
  userId?: string
}

type TableProps = {
  headers: HeadersType[]
  paragraphs: ParagraphType[] | undefined
  setOrderBy?: (sortValue: OrderByType) => void
}

export const Table = ({ headers, /*pageHistorySave,*/ paragraphs, setOrderBy }: TableProps) => {
  const [activeImg, setActiveImg] = useState<null | string>(null)
  const { handleSetSortStyle, handleSort } = useSortTable({
    setOrderBy: setOrderBy,
    styleAsc: s.sortAsc,
    styleDesc: s.sortDesc,
  })
  const textErrors = 'Количество заголовков и колонок в строках должно совпадать'
  const navigate = useNavigate()
  // Проверяем, что количество заголовков совпадает с количеством колонок в каждом параграфе
  const isLengthMismatch =
    paragraphs && paragraphs.some(paragraph => paragraph.cells.length !== headers.length)

  const handleImgClick = (
    img: null | string | undefined,
    e: MouseEvent<HTMLDivElement> | undefined
  ) => {
    e?.stopPropagation && e?.stopPropagation()
    if (img) {
      setActiveImg(img)
    } else {
      setActiveImg(null)
    }
  }
  const handleClosePreview = () => {
    setActiveImg(null)
  }
  const handleGetCard = (idCards: string | undefined, isRowClickable = false) => {
    if (idCards && isRowClickable) {
      navigate(`${idCards}${CARDS_ROUTE}`)
    }
  }

  if (isLengthMismatch) {
    console.error(textErrors)

    return <div className={s.error}>{textErrors}</div>
  }

  return (
    <>
      <table className={s.containerTable}>
        <thead>
          <tr>
            {headers.map(header => {
              const { isEditable = true } = header

              return (
                <Fragment key={header.id}>
                  {isEditable && (
                    <th
                      className={`${s.header} ${header.orderBy && s.headerHover}`}
                      onClick={() => handleSort(header.orderBy, header.id)}
                    >
                      <div
                        className={`${s.caption} ${
                          header.orderBy && handleSetSortStyle(header.id)
                        }`}
                      >
                        <TextFormat style={{ padding: '0' }} variant={'subtitle2'}>
                          {header.title}
                        </TextFormat>
                        <IconSvg name={'arrow'} />
                      </div>
                    </th>
                  )}
                </Fragment>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(paragraphs)
            ? paragraphs.map(paragraph => {
                const { isRowClickable = true } = paragraph

                return (
                  <tr
                    className={s.tr}
                    key={paragraph.idCells}
                    onClick={() => handleGetCard(paragraph.idCells, isRowClickable)}
                    style={{ cursor: 'pointer' }}
                  >
                    {paragraph.cells.map((cell, idx) => {
                      const { elementUser = true, isEditable = true } = cell

                      return (
                        <Fragment key={idx}>
                          {isEditable && (
                            <td className={s.row}>
                              <div className={s.item}>
                                {cell.img && (
                                  <HoverIconImage
                                    callback={e => handleImgClick(cell.img, e)}
                                    className={s.img}
                                    imgSrc={cell.img}
                                  />
                                )}
                                <TextFormat
                                  className={s.textCells}
                                  style={{ cursor: cell.idDeck ? 'pointer' : '' }}
                                  variant={'body2'}
                                >
                                  {cell.value}
                                </TextFormat>
                                {cell.element && (
                                  <div className={s.elements}>
                                    {cell.element
                                      .filter(
                                        el =>
                                          (elementUser &&
                                            (el.key === 'delete' || el.key === 'edit')) ||
                                          (el.key === 'learn' && !!paragraph.cardCounts) ||
                                          el.key === 'grade'
                                      )
                                      .map((el, k) => (
                                        <div className={s.element} key={k}>
                                          {el}
                                        </div>
                                      ))}
                                  </div>
                                )}
                              </div>
                            </td>
                          )}
                        </Fragment>
                      )
                    }) || []}
                  </tr>
                )
              })
            : []}
        </tbody>
      </table>
      {activeImg && <FilePreviewPortal onClose={handleClosePreview} src={activeImg} />}
    </>
  )
}
