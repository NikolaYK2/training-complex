import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch } from '@/app/lib/hooksStore'
import { BackTo } from '@/commn/components/ui/backTo/BackTo'
import { Button } from '@/commn/components/ui/button'
import { Card } from '@/commn/components/ui/card/Card'
import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'
import { HoverIconImage } from '@/commn/components/ui/hoverIconImage/HoverIconImage'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { manageFeedback } from '@/commn/utils/manageFeedback'
import { AnswerLearn } from '@/features/learn/answerLearn/AnswerLearn'
import { useRetrieveDeckByIdQuery, useRetrieveRandomCardQuery } from '@/services/decks/decksService'

import s from './Learn.module.scss'

export const Learn = () => {
  const [preview, setPreview] = useState(false)
  const [isShowAnswer, setIsShowAnswer] = useState(false)
  const { id: idCard } = useParams<{ id: string }>()
  const {
    data: dataRandomCard,
    error: errorRandomCard,
    isError: isErrorRandomCard,
    isLoading: isLoadingRandomCard,
  } = useRetrieveRandomCardQuery({ id: idCard ?? '' })

  const { data: dataDeckById } = useRetrieveDeckByIdQuery({ id: idCard ?? '' })

  const dispatch = useAppDispatch()
  const handleImageFullscreenClick = () => setPreview(true)
  const handleShowAnswerClick = () => setIsShowAnswer(true)
  const handleClosePreview = () => setPreview(false)

  useEffect(() => {
    if (isErrorRandomCard) {
      manageFeedback({ data: errorRandomCard, dispatch, type: 'error' })
    }
  }, [isErrorRandomCard])

  return (
    <Page>
      <BackTo nameLink={'Back to Decks List'} />
      {isLoadingRandomCard && <Loading />}
      <Card title={dataDeckById?.name}>
        <div className={s.questionText}>
          <TextFormat style={{ textTransform: 'capitalize' }} variant={'subtitle1'}>
            question
          </TextFormat>
          <TextFormat variant={'body1'}>{`: ${dataRandomCard?.question}`}</TextFormat>
        </div>
        {dataRandomCard?.questionImg && (
          <HoverIconImage
            callback={handleImageFullscreenClick}
            className={s.questionImg}
            imgSrc={dataRandomCard?.questionImg}
          />
        )}
        {preview && (
          <FilePreviewPortal onClose={handleClosePreview} src={dataRandomCard?.questionImg ?? ''} />
        )}
        <div className={s.result}>
          <TextFormat className={s.resultText} variant={'body2'}>
            Number of attempts to answer the question
          </TextFormat>
          <TextFormat
            className={s.resultText}
            variant={'subtitle2'}
          >{`: ${dataRandomCard?.shots}`}</TextFormat>
        </div>
        {isShowAnswer && (
          <AnswerLearn
            answer={dataRandomCard?.answer}
            answerImg={dataRandomCard?.answerImg}
            cardId={dataRandomCard?.id}
            setIsShowAnswer={setIsShowAnswer}
          />
        )}
        {!isShowAnswer && (
          <Button className={s.btn} onClick={handleShowAnswerClick}>
            <TextFormat variant={'subtitle2'}>Show Answer</TextFormat>
          </Button>
        )}
      </Card>
    </Page>
  )
}
