import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types/IProduct';
import { toast } from 'react-toastify';
import {
  fetchAllProducts,
  fetchPopularProducts,
  fetchProductsByCategory,
  fetchProductsBySlug
} from './productActions'

interface ProductState {
  allProducts: IProduct[]
  popularProducts: IProduct[]
  productsByCategory: IProduct[]
  currentProduct: IProduct | null
  currentCategory: string | null
  loading: boolean // Флаг для отслеживания загрузки
}

const initialState: ProductState = {
  allProducts: [],
  popularProducts: [],
  productsByCategory: [],
  currentProduct: null,
  currentCategory: null,
  loading: false // Изначально загрузка отключена
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCurrentCategory(state, action: PayloadAction<string | null>) {
      state.currentCategory = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // fetchAllProducts
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true; // Устанавливаем флаг загрузки
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.loading = false; // Сбрасываем флаг загрузки
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        console.error(action.error.message);
        state.loading = false; // Сбрасываем флаг загрузки при ошибке
      });

    // fetchPopularProducts
    builder
      .addCase(fetchPopularProducts.pending, (state) => {
        state.loading = true; // Устанавливаем флаг загрузки
      })
      .addCase(fetchPopularProducts.fulfilled, (state, action) => {
        state.popularProducts = action.payload;
        state.loading = false; // Сбрасываем флаг загрузки
      })
      .addCase(fetchPopularProducts.rejected, (state, action) => {
        console.error(action.error.message);
        state.loading = false; // Сбрасываем флаг загрузки при ошибке
      });

    // fetchProductsByCategory
    builder
    .addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = true; // Устанавливаем флаг загрузки
    })
    .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      // Обновляем только массив продуктов
      state.productsByCategory = action.payload.products; 
      // Обновляем текущую категорию
      state.currentCategory = action.payload.category.name; 
      state.loading = false; // Сбрасываем флаг загрузки
    })
    .addCase(fetchProductsByCategory.rejected, (state, action) => {
      console.error(action.error.message);
      state.loading = false; // Сбрасываем флаг загрузки при ошибке
    })

    // fetchProductsBySlug
    builder
      .addCase(fetchProductsBySlug.pending, (state) => {
        state.loading = true; // Устанавливаем флаг загрузки
      })
      .addCase(fetchProductsBySlug.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.loading = false; // Сбрасываем флаг загрузки
      })
      .addCase(fetchProductsBySlug.rejected, (state, action) => {
        toast.error('Failed to fetch product details. Please try again later.');
        console.error('Fetch product failed:', action.error.message, action.meta);
        state.loading = false; // Сбрасываем флаг загрузки
      });
  },
});

export const { setCurrentCategory } = productSlice.actions;

export default productSlice.reducer;
