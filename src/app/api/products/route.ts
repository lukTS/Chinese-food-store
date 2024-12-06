// app/api/products/route.ts 

import { NextResponse } from 'next/server'
import dbConnect from '@/utils/dbConnect'
import Product from '@/models/Product'

export async function GET() {
  try {
    await dbConnect() // Подключение к базе данных
    const products = await Product.find() // Получение всех продуктов
    return NextResponse.json(products)
  } catch (error) {
    console.error(error)
    return new NextResponse(JSON.stringify({ message: 'Failed to fetch products' }), { status: 500 })
  }
}
