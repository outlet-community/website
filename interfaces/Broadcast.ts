import type { Artist } from './Artist'
import type { Genre } from './Genre'
import type { Show } from './Show'

export interface Broadcast {
  data: BroadcastData[]
}

export interface BroadcastData {
  id: number
  attributes: BroadcastAttributes
}

export interface BroadcastAttributes {
  title: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  description: string
  timeStart: Date
  timeEnd: Date
  soundcloud: null | string
  slug: string
  artists: Artist[]
  image: File
  audio: File
  show: Show
  genres: Genre[]
}
