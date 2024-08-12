import { manageFeedback } from '@/commn/utils/manageFeedback'
import { AppDispatch } from '@/services/store'

export const tryCatch = async <T>(dispatch: AppDispatch, logic: () => Promise<T>) => {
  try {
    return await logic()
  } catch (e) {
    manageFeedback({ data: e, dispatch, type: 'error' })
    throw e
  }
}
