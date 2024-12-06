//src/app/api/products/[slug]/route.ts
import { NextResponse } from 'next/server'
import dbConnect from '@/utils/dbConnect'
import Product from '@/models/Product'
import mongoose from 'mongoose'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params

  try {
    await dbConnect() // Подключаемся к базе данных
    const product = await Product.findOne({slug}) // Ищем продукт по ID

    if (!product) {
      return new NextResponse(JSON.stringify({ message: 'Product not found' }), { status: 404 })
    }

    return NextResponse.json(product) // Отправляем найденный продукт
  } catch (error) {
    console.error('Error fetching product:', error)
    return new NextResponse(JSON.stringify({ message: 'Failed to fetch product' }), { status: 500 })
  }
}
