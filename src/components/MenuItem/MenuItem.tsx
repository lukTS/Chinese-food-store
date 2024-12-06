import Image from "next/image"
import MainButton from "@/components/UI/MainButton/MainButton"
import { IProduct } from "@/types/IProduct"
import Link from "next/link"

interface MenuItemProps {
  product: IProduct
}

const MenuItem: React.FC<MenuItemProps> = ({ product }) => {
  return (
    // Используем более светлый фон и слегка изменяем тени
    <div className="bg-orange-50 p-4 rounded-lg text-center group hover:bg-white hover:shadow-lg hover:shadow-orange-200/50 flex flex-col h-full">
      <Link href={`/product/${product.slug}`} className="cursor-pointer">
        {/* Контейнер для изображения с динамическими размерами */}
        <div className="flex justify-center mb-4 h-40 w-auto relative mx-auto">
          <Image
            src={product.imageUrl || "images/default-image.png"}
            className="object-contain w-32 h-auto sm:w-40 sm:h-auto md:w-48 md:h-auto lg:w-64 lg:h-auto"
            alt={product.name}
            height={164}
            width={164}
          />
        </div>

        {/* Заголовок с более контрастным цветом */}
        <h4 className="font-semibold text-xl my-3 text-gray-800">{product.name}</h4>

        {/* Описание с более мягким цветом текста */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.shortDescription}</p>
      </Link>
      {/* Кнопка внизу карточки */}
      <div className="mt-auto">
        <MainButton className="mt-6 mb-2 text-sm ">
          Add to cart ${product.price}
        </MainButton>
      </div>
    </div>
  )
}

export default MenuItem
