import { IMenu } from "@/types/IMenu"
import Image from "next/image"
import Link from "next/link";

interface MenuCardProps {
  category: IMenu;
}

const MenuCard: React.FC<MenuCardProps> = ({ category }) => {
  return (
    <Link href={`menu/${category.slug}`}>
      <div className="flex flex-col items-center w-72 mb-10">
        <div className="flex items-center gap-4 bg-primary px-6 py-1 text-white w-full rounded-lg">
          <div className="flex-shrink-0">
            <Image
              className="text-white"
              src={category.imageIcon || ""}
              alt="Icon"
              width={48}
              height={48}
            />
          </div>
          <h2 className="text-lg leading-tight">{category.name}</h2>
        </div>

        <div className="bg-orange-50 rounded-b-lg mt-2 h-[300px] flex flex-col justify-between">
          <div className="flex justify-center items-center h-2/3 w-full relative mx-auto">
            <Image
              className="object-contain"
              src={category.imageUrl || ""}
              alt={category.name}
              width={164}
              height={164}
            />
          </div>
          <p className="text-center px-4 h-1/3 overflow-hidden text-ellipsis">{category.longDescription}</p>
        </div>
      </div>
    </Link>
  )
}

export default MenuCard