import clsx from "clsx"
import { MainButtonProps } from "./MainButton.types"

const MainButton: React.FC<MainButtonProps> = ({ className, onClick, children, ...props }) => {
  return (
    <button 
      {...props}
      className={clsx(
        className,
        "inline-flex items-center gap-1 bg-primary rounded-lg text-white px-5 py-1 hover:bg-orange-600"
      )}
    >
      {children}
    </button>
  )
}

export default MainButton
