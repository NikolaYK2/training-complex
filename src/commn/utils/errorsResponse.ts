import { SerializedError } from '@reduxjs/toolkit'

export const errorsResponse = (error: any): string => {
  if (error && typeof error === 'object') {
    // Проверяем, есть ли свойство 'data' в ошибке и есть ли в нем 'errorMessages'
    if ('data' in error && 'errorMessages' in error.data) {
      const errorMessages = (error.data as { errorMessages: string[] }).errorMessages

      // Возвращаем первое сообщение об ошибке или 'Unknown error', если массив пуст
      return errorMessages.length > 0 ? errorMessages[0] : 'Unknown error'
    } else if ('message' in error) {
      // Если ошибка имеет свойство 'message', предполагаем, что это тип SerializedError
      const errorMessage = (error as SerializedError).message

      // Возвращаем сообщение об ошибке или 'Unknown error', если сообщение пусто или undefined
      return errorMessage || 'Unknown error'
    }
  }

  // Если не удалось распознать структуру ошибки, возвращаем 'Unknown error'
  return 'Unknown error'
}
