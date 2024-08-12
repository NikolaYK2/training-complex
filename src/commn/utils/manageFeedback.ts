import { MessageType, appAction } from '@/app/model/sliceApp'
import { Dispatch } from '@reduxjs/toolkit'

type Data = {
  data?: {
    message: string
  }
}

type HandlerResponse = {
  data: unknown
  dispatch: Dispatch
  type: MessageType
}
export const manageFeedback = ({ data, dispatch, type }: HandlerResponse) => {
  const res = data as Data

  const message = res?.data?.message || 'Network error!'

  dispatch(appAction.setStatusMessage({ message, type }))
}
