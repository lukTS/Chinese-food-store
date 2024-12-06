import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Пожалуйста, определите переменную окружения MONGODB_URI')
}

// Используем глобальную переменную для кэширования подключения
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    // Устанавливаем новое подключение
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => {
        console.log('MongoDB подключена успешно')
        return mongoose
      })
      .catch((error) => {
        console.error('Ошибка подключения к MongoDB:', error)
        throw new Error('Не удалось подключиться к MongoDB')
      })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
