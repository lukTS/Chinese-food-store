"use client"
// src/app/product/[slug]/ProductPage.tsx
import { useEffect } from 'react'
import Image from "next/image"
import { IProduct } from '@/types/IProduct'
import { fetchProductsBySlug } from '@/redux/products/productActions'
import { AppDispatch, RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import MainButton from '@/components/UI/MainButton/MainButton'

interface ProductPageProps {
  params: {
    slug: string
  }
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { slug } = params
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsBySlug(slug))
  }, [slug])

  const currentProduct = useSelector((state: RootState) => state.products.currentProduct)
  const loading = useSelector((state: RootState) => state.products.loading)

  return (
    <div className="pt-12">
      {loading ? (
        <p>Loading product details...</p>
      ) : currentProduct ? (
        <>
          <h1 className="text-center text-3xl mb-6">{currentProduct.name}</h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 w-[354px] h-[354px]">
              <Image
                src={currentProduct.imageUrl || '/default-image.jpg'}
                alt={currentProduct.name}
                width={354} 
                height={354} 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div className="p-8 flex-1">
              <p>{currentProduct.longDescription}</p>
              <h3 className="mt-4 text-lg font-semibold">Key Features:</h3>
              <ul>
                {currentProduct.features &&
                  currentProduct.features.map((feature) => (
                    <li key={feature.name}>- {feature.name}: {feature.value}</li>
                  ))}
              </ul>
              <h3 className="mt-4 text-lg font-semibold">Ingredients:</h3>
              <ul>
                {currentProduct.ingredients &&
                  currentProduct.ingredients.map((ingredient) => (
                    <li key={ingredient}>- {ingredient}</li>
                  ))}
              </ul>
              <h3 className="mt-4 text-lg font-semibold">Nutrition:</h3>
              <ul>
                {currentProduct.nutrition && currentProduct.nutrition.map((nutrition) => (
                    <li key={nutrition.name}>- {nutrition.name}: {nutrition.value}</li>
                  ))}
              </ul>
              <div className="mt-4 mb-8">
                <MainButton className="mt-6 mb-2 text-sm ">
                  Add to cart ${currentProduct.price}
                </MainButton>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  )
}

export default ProductPage

