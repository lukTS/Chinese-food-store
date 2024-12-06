import { createSlice } from "@reduxjs/toolkit"
import { fetchAllCategories } from "./categoryAction"
import { toast } from 'react-toastify'
import { IMenu } from "@/types/IMenu"

interface categoriesState {
  allCategories: IMenu[]
  loading: boolean
  error: string | null
}

const initialState: categoriesState = {
  allCategories: [],
  loading: false,
  error: null
}

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Когда запрос на получение категорий начался
      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true // Устанавливаем флаг загрузки
        state.error = null
      })
      
      // Когда запрос завершился успешно
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.allCategories = action.payload // Обновляем данные
        state.loading = false // Сбрасываем флаг загрузки
        state.error = null
      })
      
      // Когда запрос завершился с ошибкой
      .addCase(fetchAllCategories.rejected, (state, action) => {
        toast.error('Failed to fetch categories. Please try again later.')
        console.error('Fetch categories failed:', action.error.message, action.meta)
        state.loading = false // Сбрасываем флаг загрузки
        state.error = action.error.message || "Something went wrong" // Записываем ошибку в состояние
      })
  },
})

export default categorySlice.reducer
