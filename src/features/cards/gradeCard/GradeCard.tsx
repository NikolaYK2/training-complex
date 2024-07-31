import { Rating } from '@/commn/components/ui/rating/Rating'
import { useSaveGradeCardMutation } from '@/services/decks/decksService'

type Props = {
  cardId: string
  grade: number
}
export const GradeCard = ({ cardId, grade }: Props) => {
  const [
    saveGradeCard,
    { error: errSaveGradeCard, isError: isErrSaveGradeCard, isLoading: isLoadSaveGradeCard },
  ] = useSaveGradeCardMutation()

  if (isErrSaveGradeCard) {
    return <div>Error: {JSON.stringify(errSaveGradeCard)}</div>
  }

  return (
    <Rating
      cardId={cardId}
      disabled={isLoadSaveGradeCard}
      hoveredStarValue={0}
      key={'rating'}
      mutationCard={saveGradeCard}
      ratingValue={grade}
      stars={5}
    />
  )
}
