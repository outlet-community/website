export interface File {
  data: FileData
}

export interface FileData {
  id: number
  attributes: FileAttributes
}

export interface FileAttributes {
  name: string
  alternativeText: null | string
  caption: null | string
  width: number | null
  height: number | null
  formats: Formats | null
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: Date
  updatedAt: Date
}

export interface Formats {
  large?: FormatAttributes
  small?: FormatAttributes
  medium?: FormatAttributes
  thumbnail: FormatAttributes
}

export interface FormatAttributes {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
}
