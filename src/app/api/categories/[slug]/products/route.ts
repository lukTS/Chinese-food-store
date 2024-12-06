import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Product from '@/models/Product';
import Menu from '@/models/Menu';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params // Извлекаем slug из URL

  try {
    await dbConnect() // Подключение к базе данных

    // Находим категорию по slug
    const category = await Menu.findOne({ slug })
    if (!category) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 })
    }

    // Получаем продукты, связанные с найденной категорией
    const products = await Product.find({ category: category._id })

    // Возвращаем данные о категории и связанных продуктах
    return NextResponse.json({
      category: { name: category.name, slug: category.slug },
      products,
    })
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return NextResponse.json({ message: 'Failed to fetch products' }, { status: 500 })
  }
}
