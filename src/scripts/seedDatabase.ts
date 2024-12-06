// scripts/seedDatabase.ts
import mongoose from 'mongoose';
import Product from '@/models/Product';
import products from '@/data/products';

import dbConnect from '@/utils/dbConnect'; // Подключение к базе данных

const seedDatabase = async () => {
  try {
    await dbConnect(); // Подключаемся к базе данных

    // Удаляем все существующие продукты (если хочешь полностью очистить коллекцию)
    await Product.deleteMany({});

    // Добавляем новые продукты
    const result = await Product.insertMany(products);
    console.log('Database seeded with products:', result);
    
    // Закрываем подключение к базе данных
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
