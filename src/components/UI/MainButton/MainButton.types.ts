export interface MainButtonProps {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
}