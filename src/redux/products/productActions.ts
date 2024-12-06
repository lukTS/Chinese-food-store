// src/redux/products/productActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '@/types/IProduct'

// Действие для получения всех продуктов
export const fetchAllProducts = createAsyncThunk<IProduct[]>(
  'products/fetchAllProducts',
  async () => {
    const res = await fetch('/api/products')
    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }
    return res.json()
  }
)

// Действие для получения популярных продуктов
export const fetchPopularProducts = createAsyncThunk<IProduct[]>(
  'products/fetchPopularProducts',
  async () => {
    const res = await fetch('/api/products/popular')
    if (!res.ok) {
      throw new Error('Failed to fetch popular products')
    }
    return res.json()
  }
)

// Действие для получения продуктов по категории
export const fetchProductsByCategory = createAsyncThunk<
  { category: { name: string; slug: string }; products: IProduct[] }, string> (
  'products/fetchProductsByCategory',
  async (slug: string, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/categories/${slug}/products`) // Новый маршрут
      if (!res.ok) {
        const errorMessage = await res.text()
        throw new Error(`Failed to fetch products: ${errorMessage}`)
      }
      return res.json() // Ожидаем объект с category и products
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch products by category')
    }
  }
)

// Действие для получения продукта по slug
export const fetchProductsBySlug = createAsyncThunk<IProduct, string>(
  'products/fetchProductsBySlug',
  async (slug: string) => {
    const res = await fetch(`/api/products/${slug}`)
    if (!res.ok) {
      throw new Error('Failed to fetch product by slug')
    }
    return res.json()
  }
)
