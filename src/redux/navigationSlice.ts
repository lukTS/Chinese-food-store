import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "@/redux/store"

interface NavigationState {
  navigation: Array<{ name: string; href: string }>
}

const initialState: NavigationState = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contacts', href: '/contacts' },
  ],
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {},
});

// Экспорт селектора из слайса
export const selectNavigation = (state: RootState) => state.navigation.navigation

export default navigationSlice.reducer
