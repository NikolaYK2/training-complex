export type Author = {
  id: string
  name: string
}
export type DeckType = {
  author: Author
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isFavorite: boolean
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type DecksResponse<T> = {
  items: T
  pagination: Pagination
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  favoritedBy?: string
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
}

export type CreateDeckArgs = {
  cover?: File
  id?: string
  isPrivate?: boolean
  method?: 'PATCH' | 'POST'
  name: string
}

export type CardArgs = {
  answer: string
  answerImg?: string
  answerVideo?: string
  id: string
  question: string
  questionImg?: string
  questionVideo?: string
}
export type CardType = Omit<CardsResponse, 'grade'>

export type CardsArgs = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: OrderByType
  question?: string
}

export type CardsResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export const OrderBy = {
  ANSWER_ASC: 'answer-asc',
  ANSWER_DESC: 'answer-desc',
  CREATED_ASC: 'created-asc',
  CREATED_DESC: 'created-desc',
  GRADE_ASC: 'grade-asc',
  GRADE_DESC: 'grade-desc',
  NULL: null,
  QUESTION_ASC: 'question-asc',
  QUESTION_DESC: 'question-desc',
  UPDATED_ASC: 'updated-asc',
  UPDATED_DESC: 'updated-desc',
} as const

export type OrderByType = (typeof OrderBy)[keyof typeof OrderBy]

export type CardOrderByType = {
  [key: string]: OrderByType
}

export const QUESTION_ORDER_BY: CardOrderByType = {
  '1': 'question-asc',
  '2': 'question-desc',
  '3': null,
}
export const ANSWER_ORDER_BY: CardOrderByType = {
  '1': 'answer-asc',
  '2': 'answer-desc',
  '3': null,
}
export const CREATED_ORDER_BY: CardOrderByType = {
  '1': 'created-asc',
  '2': 'created-desc',
  '3': null,
}
export const GRADE_ORDER_BY: CardOrderByType = {
  '1': 'grade-asc',
  '2': 'grade-desc',
  '3': null,
}
export const UPDATED_ORDER_BY: CardOrderByType = {
  '1': 'updated-asc',
  '2': 'updated-desc',
  '3': null,
}
