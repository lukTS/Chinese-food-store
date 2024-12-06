import mongoose from 'mongoose'
import { IProduct } from '@/types/IProduct'

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Название продукта
  slug: { type: String, unique: true },
  shortDescription: { type: String },  // Краткое описание
  longDescription: { type: String },  // Полное описание
  price: { type: Number, required: true },  // Цена продукта
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
  imageUrl: { type: String },  // URL изображения продукта
  createdAt: { type: Date, default: Date.now },  // Дата создания записи
  updatedAt: { type: Date, default: Date.now },  // Дата обновления записи
  features: [  // Список дополнительных характеристик продукта
    {
      name: { type: String },  // Название характеристики
      value: { type: String }  // Значение характеристики
    }
  ],
  isPopular: { type: Boolean, default: false },  // Флаг для популярных продуктов
  ingredients: { type: [String] },  // Список ингредиентов для блюд
  availability: { type: Boolean, default: true },  // Доступен ли продукт для заказа
  stock: { type: Number, default: 0 },  // Количество доступных продуктов (опционально)
  rating: { type: Number, min: 0, max: 5 },  // Средняя оценка продукта (если есть отзывы)
  nutrition: {  // Информация о питательной ценности (для блюд)
    calories: { type: Number },
    protein: { type: Number },
    fat: { type: Number },
    carbohydrates: { type: Number }
  },
  article: { type: String }  // Артикул продукта
})

// Генерация slug перед сохранением
ProductSchema.pre('save', function(next) {
  // Генерируем slug из имени продукта, приводя к нижнему регистру и заменяя пробелы на дефисы
  if (this.name) {
    this.slug = this.name.toLowerCase().replace(/\s+/g, '-');
  }
  next();
})

// Проверяем, существует ли уже модель с таким именем
const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)

export default Product
