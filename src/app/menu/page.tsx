"use client"
import Loader from "@/components/Loader/Loader"
import MenuCard from "@/components/MenuCard/MenuCard"
import { fetchAllCategories } from "@/redux/categories/categoryAction"
import { AppDispatch, RootState } from "@/redux/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Menu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])

  const {allCategories, loading, error} = useSelector((state:RootState) => state.categories)
  
  if (loading) {
    return (
      <Loader />
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    )
  }
  
  return(
    <div>
      <h1 className="text-center text-4xl pt-16 pb-4">Check out our menu</h1>
      <div className="flex flex-wrap justify-between py-10">
        {
          allCategories.map(category => <MenuCard category = {category} />)
        }
      </div>
    </div>
  )
}

export default Menu






