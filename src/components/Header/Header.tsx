import Image from "next/image"
import Link from "next/link"
import Navigation from "../Navigation/Navigation"
import SearchBar from "../UI/SearchBar/SearchBar"

const Header: React.FC = () => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Search input changed:", e.target.value);
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Search triggered");
    }
  }
  return(
    <>
      <header  className="flex items-start justify-between font-semibold text-gray-400">
        <Link href={'/'} className="w-60 h-16 relative">
          <Image src="/logo.jpg" fill style={{ objectFit: "contain" }} alt="Logo"/>
        </Link>
        <div className="mt-8">
          <Navigation className="flex gap-10 "/>
          <SearchBar placeholder="Search" onChange ={handleSearchChange} onKeyDown = {handleSearchKeyDown} className="mt-8 "/>
        </div>
        <div className="flex items-center justify-between gap-5 mt-8">
          <Link href={'/profile'}>login</Link>
          <Link href={'/login'}>Registration</Link>
          <Link href={'/Registration'}>Cart</Link>
        </div> 
      </header>
    </>
  )
}

export default Header