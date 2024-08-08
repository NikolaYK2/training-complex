import { LoginResponse } from '@/services/auth/AuthTypes'

type ParamsKey = keyof LoginResponse
// Utility for working with localStorage
export const localStorageUtil = {
  // Get item from localStorage
  getItem: <T>(key: ParamsKey): T | null => {
    try {
      const item = localStorage.getItem(key)

      return item ? (JSON.parse(item) as T) : null
    } catch (error) {
      console.error('Error getting from localStorage', error)

      return null
    }
  },

  // Remove item from localStorage
  removeItem: (key: ParamsKey): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage', error)
    }
  },

  // Save item to localStorage
  saveItem: <T>(key: ParamsKey, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage', error)
    }
  },
}
