import { MouseEvent, ReactElement, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'
import { HoverIconImage } from '@/commn/components/ui/hoverIconImage/HoverIconImage'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { CARDS_ROUTE } from '@/routes/Router'

import s from './Table.module.scss'

export type PageHistorySaveType = {
  authorIdSave?: string
  minCardsSave?: number
  pageDeckSave?: number
}
type HeadersType = {
  id: number
  isEditable?: boolean
  title: string
}

export type CellType = {
  element?: ReactElement[]
  idDeck?: string
  img?: null | string
  isEditable?: boolean
  value?: string
}

export type ParagraphType = {
  cells: CellType[]
  idCells: string
  isRowClickable?: boolean
}

type TableProps = {
  headers: HeadersType[]
  pageHistorySave?: PageHistorySaveType
  paragraphs: ParagraphType[] | undefined
}

export const Table = ({ headers, pageHistorySave, paragraphs }: TableProps) => {
  const [activeImg, setActiveImg] = useState<null | string>(null)
  const textErrors = 'Количество заголовков и колонок в строках должно совпадать'
  const ref = useRef<HTMLDivElement | null>(null)
  const isActiveSort = false
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
      navigate(`${idCards}${CARDS_ROUTE}`, {
        state: {
          authorIdSave: pageHistorySave?.authorIdSave,
          minCardsSave: pageHistorySave?.minCardsSave,
          pageDeckSave: pageHistorySave?.pageDeckSave,
        },
      })
    }
  }

  if (isLengthMismatch) {
    console.error(textErrors)

    return <div className={s.error}>{textErrors}</div>
  }

  return (
    <>
      <table className={s.container}>
        <thead>
          <tr>
            {headers.map(header => {
              const { isEditable = true } = header

              return (
                <>
                  {isEditable && (
                    <th className={s.header} key={header.id}>
                      <div className={`${s.caption} ${s.isCaption}`}>
                        <TextFormat variant={'subtitle2'}>{header.title}</TextFormat>
                      </div>
                    </th>
                  )}
                </>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(paragraphs)
            ? paragraphs.map(paragraph => (
                <tr
                  className={s.tr}
                  key={paragraph.idCells}
                  onClick={() => handleGetCard(paragraph.idCells, paragraph.isRowClickable)}
                  style={{ cursor: 'pointer' }}
                >
                  {paragraph.cells.map((cell, idx) => {
                    const { isEditable = true } = cell

                    return (
                      <>
                        {isEditable && (
                          <td className={s.row} key={idx}>
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
                                  {cell.element?.map((el, k) => (
                                    <div className={s.element} key={k}>
                                      {el}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </td>
                        )}
                      </>
                    )
                  }) || []}
                </tr>
              ))
            : []}
        </tbody>
      </table>
      {activeImg && <FilePreviewPortal onClose={handleClosePreview} src={activeImg} />}
    </>
  )
}
