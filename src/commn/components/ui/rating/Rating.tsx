import {useCallback, useState} from "react";
import s from './Rating.module.scss'
import {IconSvg} from "@/commn/components/ui/iconSvg/IconSvg.tsx";

type RatingProps = {
  stars: number;
  ratingValue: number;
  hoveredStarValue: number;
};

export const Rating = ({stars, ratingValue = 0, hoveredStarValue = 0}: RatingProps) => {
  const [rating, setRating] = useState(ratingValue);
  const [hoveredStar, setHoveredStar] = useState(hoveredStarValue);

  const handleClick = useCallback((i: number) => {
    setRating(i + 1);
  }, []);

  const handleMouseEnter = useCallback((i: number) => {
    setHoveredStar(i + 1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredStar(0);
  }, []);

  return (
    <div className={s.stars}>
      {[...Array(stars)].map((_, i) => (
        <button
          key={i}
          className={`${s.star} ${i < hoveredStar && s.isActive}`}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          {i < hoveredStar || i < rating ?
            <IconSvg name={"starActive"}/> :
            <IconSvg name={"starInActive"}/>
          }
        </button>
      ))}
    </div>
  );
};
