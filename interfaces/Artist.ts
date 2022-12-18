export interface Artist {
  data: ArtistData[]
}

export interface ArtistData {
  id: number
  attributes: ArtistAttributes
}

export interface ArtistAttributes {
  title: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  slug: string
  description: null | string
  outletMember: boolean | null
}
