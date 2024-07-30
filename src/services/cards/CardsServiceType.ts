export type CardArgs = {
  answer: string
  answerImg?: string
  answerVideo?: string
  id: string
  question: string
  questionImg?: string
  questionVideo?: string
}
export type CardResponse = CardArgs & {
  created: string
  deckId: string
  shots: number
  updated: string
  userId: string
}
