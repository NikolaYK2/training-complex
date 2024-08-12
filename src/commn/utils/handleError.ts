import { MessageType, appAction } from '@/app/model/sliceApp'
import { Dispatch } from '@reduxjs/toolkit'

type Data = {
  data?: {
    message: string
  }
}

type HandlerResponse = {
  data: unknown
  defaultMessage: string
  dispatch: Dispatch
  type: MessageType
}
export const manageFeedback = ({ data, defaultMessage, dispatch, type }: HandlerResponse) => {
  const res = data as Data

  const message = res?.data?.message || defaultMessage

  dispatch(appAction.setStatusMessage({ message, type }))
}
