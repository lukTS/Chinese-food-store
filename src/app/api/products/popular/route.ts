// app/api/products/popular/route.ts 

import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect'
import Product from '@/models/Product'

export async function GET() {
  try {
    await dbConnect() // Подключаемся к базе данных
    const popularProducts = await Product.find({ isPopular: true }) // Получаем только популярные продукты
    return NextResponse.json(popularProducts) // Отправляем их в ответе
  } catch (error) {
    console.error(error)
    return new NextResponse(JSON.stringify({ message: 'Failed to fetch popular products' }), { status: 500 })
  }
}
