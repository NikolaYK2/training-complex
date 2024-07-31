import { useCallback, useState } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { useSaveGradeCardMutation } from '@/services/decks/decksService'

import s from './Rating.module.scss'

type RatingProps = {
  cardId?: string
  disabled?: boolean
  hoveredStarValue: number
  mutationCard?: ReturnType<typeof useSaveGradeCardMutation>[0]
  ratingValue: number
  stars: number
}

export const Rating = ({
  cardId,
  disabled = false,
  hoveredStarValue = 0,
  mutationCard,
  ratingValue = 0,
  stars,
}: RatingProps) => {
  const [rating, setRating] = useState(ratingValue)
  const [hoveredStar, setHoveredStar] = useState(hoveredStarValue)

  const handleClick = useCallback(
    (i: number) => {
      if (disabled) {
        return
      }
      setRating(i + 1)
      if (cardId) {
        mutationCard && mutationCard({ cardId, grade: i + 1 })
      }
    },
    [cardId, mutationCard, disabled]
  )

  const handleMouseEnter = useCallback(
    (i: number) => {
      if (disabled) {
        return
      }
      setHoveredStar(i + 1)
    },
    [disabled]
  )

  const handleMouseLeave = useCallback(() => {
    if (disabled) {
      return
    }
    setHoveredStar(0)
  }, [disabled])

  return (
    <div className={s.stars}>
      {[...Array(stars)].map((_, i) => (
        <button
          className={`${s.star} ${i < hoveredStar && s.isActive} ${disabled && s.disabled}`}
          disabled={disabled}
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          type={'button'}
        >
          {i < hoveredStar || i < rating ? (
            <IconSvg name={'starActive'} />
          ) : (
            <IconSvg name={'starInActive'} />
          )}
        </button>
      ))}
    </div>
  )
}
