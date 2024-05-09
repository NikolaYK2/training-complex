import { useCallback, useState } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'

import s from './Rating.module.scss'

type RatingProps = {
  hoveredStarValue: number
  ratingValue: number
  stars: number
}

export const Rating = ({ hoveredStarValue = 0, ratingValue = 0, stars }: RatingProps) => {
  const [rating, setRating] = useState(ratingValue)
  const [hoveredStar, setHoveredStar] = useState(hoveredStarValue)

  const handleClick = useCallback((i: number) => {
    setRating(i + 1)
  }, [])

  const handleMouseEnter = useCallback((i: number) => {
    setHoveredStar(i + 1)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredStar(0)
  }, [])

  return (
    <div className={s.stars}>
      {[...Array(stars)].map((_, i) => (
        <button
          className={`${s.star} ${i < hoveredStar && s.isActive}`}
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
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
