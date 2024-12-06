export interface IProduct {
  _id: string
  name: string
  slug: string
  shortDescription?: string
  longDescription?: string
  price: number
  category: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
  features?: { name: string; value: string }[]
  isPopular?: boolean
  ingredients?: string[]
  availability?: boolean
  stock?: number
  rating?: number
  nutrition?: { name: string; value: string }[]
  article?: string
}
