// src/app/menu/[slug]/page.tsx

"use client"

import MenuItem from "@/components/MenuItem/MenuItem"
import { fetchProductsByCategory } from "@/redux/products/productActions"
import { AppDispatch, RootState } from "@/redux/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

interface MenuCategoryProps {
  params: {
    slug: string 
  }
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ params }) => {
  const { slug } = params 
  console.log(slug) 

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (slug) {
      dispatch(fetchProductsByCategory(slug)) 
    }
  }, [dispatch, slug]) 

  const productsByCategory = useSelector(
    (state: RootState) => state.products.productsByCategory
  )

  return (
    <section>
      <h1 className="text-4xl font-semibold text-center mt-12 mb-6" >Products in {slug}</h1> {/* Здесь отображаем имя категории */}
      <div className="grid grid-cols-4 gap-4 py-8">
        {productsByCategory.length > 0 ? (
          productsByCategory.map((product) => <MenuItem key={product._id} product={product} />)
        ) : (
          <p>No products in this category.</p>
        )}
      </div>
    </section>
  )
}

export default MenuCategory
