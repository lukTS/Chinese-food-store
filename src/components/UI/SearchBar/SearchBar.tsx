import { IoSearchOutline } from "react-icons/io5"
import { SearchBarProps } from './SearchBar.types'
import clsx from 'clsx'

const SearchBar: React.FC <SearchBarProps> = ({className, placeholder, onChange, onKeyDown, ...props }) => {
    return (
        <div className={clsx(className, className = "flex align-center justify-start p-[3px_15px] border border-gray-500 rounded-[10px] bg-gray-100 w-auto")} {...props}>
            <IoSearchOutline className="text-gray-500 mr-3 mt-1 " />
            <input className="bg-gray-100 w-full"
                type="text" 
                placeholder={placeholder} 
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

export default SearchBar