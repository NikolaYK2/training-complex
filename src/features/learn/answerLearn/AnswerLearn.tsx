import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Button } from '@/commn/components/ui/button'
import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'
import { HoverIconImage } from '@/commn/components/ui/hoverIconImage/HoverIconImage'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { ControlledRadioGroup } from '@/commn/components/ui/radioGroup/ControlledRadioGroup'
import { Radio } from '@/commn/components/ui/radioGroup/Radio'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useCreateEntityForm } from '@/commn/hooks/useCreateEntityForm'
import { useSaveGradeCardMutation } from '@/services/decks/decksService'
import { z } from 'zod'

import s from './AnswerLearn.module.scss'

const answerSchema = z.object({
  grade: z.string().min(1).max(1).regex(/[1-5]/),
})

type FormType = z.infer<typeof answerSchema>
type RadioItemType = {
  id: string
  label: string
}
const radioItem: RadioItemType[] = [
  { id: '1', label: 'Did not know' },
  { id: '2', label: 'Forgot' },
  { id: '3', label: 'A lot of thought' },
  { id: '4', label: 'Сonfused' },
  { id: '5', label: 'Knew the answer' },
]

type Props = {
  answer: string | undefined
  answerImg: string | undefined
  cardId: string | undefined
  setIsShowAnswer: (isShowAnswer: boolean) => void
}
export const AnswerLearn = ({ answer, answerImg, cardId, setIsShowAnswer }: Props) => {
  const [preview, setPreview] = useState(false)
  const { control, handleSubmit } = useCreateEntityForm({
    defaultValues: { grade: '1' },
    schema: answerSchema,
  })

  const [
    saveGradeCard,
    { error: errorSaveGradeCard, isError: isErrorSaveGradeCard, isLoading: isLoadingSaveGradeCard },
  ] = useSaveGradeCardMutation()

  const onSubmit: SubmitHandler<FormType> = async data => {
    if (!cardId) {
      console.error('Card ID is missing')

      return
    }

    await saveGradeCard({ cardId: cardId ?? '', grade: Number(data.grade) })
    setIsShowAnswer(false)
  }
  const handlePrevOpen = () => setPreview(true)

  const handlePrevClose = () => setPreview(false)

  if (isErrorSaveGradeCard) {
    return <div>Error: {JSON.stringify(errorSaveGradeCard)}</div>
  }

  if (isLoadingSaveGradeCard) {
    return <Loading />
  }

  return (
    <form className={s.containerAnswerLEarn} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.textAnswer}>
        <TextFormat variant={'subtitle1'}>Answer</TextFormat>
        <TextFormat variant={'body1'}>{`: ${answer}`}</TextFormat>
      </div>
      {answerImg && (
        <HoverIconImage callback={handlePrevOpen} className={s.imgAnswer} imgSrc={answerImg} />
      )}
      {preview && <FilePreviewPortal onClose={handlePrevClose} src={answerImg ?? null} />}
      <div className={s.radioGroup}>
        <TextFormat variant={'subtitle1'}>Rate yourself:</TextFormat>
        <ControlledRadioGroup control={control} name={'grade'}>
          {radioItem.map(radio => (
            <Radio id={radio.id} key={radio.id} label={radio.label} value={radio.id} />
          ))}
        </ControlledRadioGroup>
      </div>
      <Button className={s.nextBtn} variant={'primary'}>
        <TextFormat variant={'subtitle2'}>Next Question</TextFormat>
      </Button>
    </form>
  )
}
