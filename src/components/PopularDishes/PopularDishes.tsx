"use client"
import Image from "next/image"
import MenuItem from "@/components/MenuItem/MenuItem"
import SectionHeder from "@/components/UI/SectionHeder/SectionHeder"
import { useEffect } from "react"
import { fetchPopularProducts } from "@/redux/products/productActions"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"

const PopularDishes: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPopularProducts())
  }, [dispatch])

  const popularProducts = useSelector((state: RootState) => state.products.popularProducts)
  const loading = useSelector((state: RootState) => state.products.loading) // Используем флаг загрузки

  return (
    <section>
      <div className="flex items-center place-content-between">
        <div className="">
          <Image src={"/Pal_2.jpg"} width={180} height={180} alt="salat" />
        </div>
        <SectionHeder heder1={"Check out"} heder2={"Popular dishes"} />
        <div className="">
          <Image src={"/green_lettuce_plant.png"} width={180} height={180} alt="salat" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 py-8">
        {loading ? (
          <p>Loading popular dishes...</p> // Отображаем индикатор загрузки
        ) : (
          popularProducts.map((product) => (
            <MenuItem key={product._id} product={product} />
          ))
        )}
      </div>
    </section>
  )
}

export default PopularDishes
