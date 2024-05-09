import { useState } from 'react'

export function useShowPasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  return {
    toggle: () => setShowPassword(!showPassword),
    type: showPassword ? 'text' : 'password',
  }
}
