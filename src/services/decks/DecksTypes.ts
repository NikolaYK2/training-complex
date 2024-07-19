export type Author = {
  id: string
  name: string
}
export type Deck = {
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
export type DecksResponse = {
  items: Deck[]
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
  isPrivate?: boolean
  name: string
}
