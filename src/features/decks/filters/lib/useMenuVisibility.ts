import { MouseEvent, useEffect, useState } from 'react'

export const useMenuVisibility = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const handleToggleMenu = () => {
    setMenuVisible(prev => !prev)
  }
  const handleClickStopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    document.body.style.overflow = isMenuVisible ? 'hidden' : 'unset'
  }, [isMenuVisible])

  return { handleClickStopPropagation, handleToggleMenu, isMenuVisible }
}
