import { IMenu } from "@/types/IMenu";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllCategories = createAsyncThunk<IMenu[]>('categories/fetchAllCategories', 
  async () => {
    const res = await fetch('/api/categories')
    if (!res.ok) {
      throw new Error('Failed to fetch categories')
    }
    return res.json()
  }
)