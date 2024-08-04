import { useEffect, useState } from 'react'

export const useMenuVisibility = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const handleToggleMenu = () => {
    setMenuVisible(prev => !prev)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuVisible ? 'hidden' : 'unset'
  }, [isMenuVisible])

  return { handleToggleMenu, isMenuVisible }
}
