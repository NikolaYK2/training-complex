import { MouseEvent } from 'react'

import { LikeIcon } from '@/assets/image/like/LikeIcon'
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '@/services/decks/decksService'

import s from './FavoriteDeck.module.scss'

type Props = {
  className?: string
  idCard: string
  isFavorite: boolean
}
export const FavoriteDeck = ({ className = '', idCard, isFavorite }: Props) => {
  const [addFavorite, { isLoading: isLoadAdd }] = useAddFavoriteMutation()
  const [removeFavorite, { isLoading: isLoadRemove }] = useRemoveFavoriteMutation()

  const handlerClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (!isFavorite) {
      await addFavorite({ id: idCard })
    } else {
      await removeFavorite({ id: idCard })
    }
  }
  const disabled = isLoadAdd || isLoadRemove

  return (
    <button
      className={`${s.containerFavoriteDeck} ${className}`}
      disabled={disabled}
      onClick={handlerClick}
      type={'button'}
    >
      <LikeIcon className={s.icon} disabled={disabled} isActive={isFavorite} />
    </button>
  )
}
