import { RootState } from '@/services/store'

export const appSelectorMessage = (state: RootState) => state.app.message
export const appSelectorMessageType = (state: RootState) => state.app.messageType
