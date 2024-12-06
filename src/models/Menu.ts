import mongoose from 'mongoose'
import { IMenu } from '@/types/IMenu'

// Схема для пункта меню
const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Название пункта меню (например, "Горячие блюда")
  slug: { type: String, required: true, unique: true },  // ЧПУ (человеко-понятный URL)
  shortDescription: { type: String },  // Краткое описание
  longDescription: { type: String },  // Полное описание
  imageUrl: { type: String },  // URL изображения
  isPopular: { type: Boolean, default: false },  // Флаг популярности меню
})

// Создание слаг при сохранении (автоматически генерируем слаг из имени)
MenuSchema.pre('save', function (next) {
  if (this.name) {
    this.slug = this.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')  // Простое преобразование в слаг
  }
  next()
})

const Menu = mongoose.models.Menu || mongoose.model<IMenu>('Menu', MenuSchema)

export default Menu
