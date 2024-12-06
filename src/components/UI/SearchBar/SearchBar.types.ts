export interface SearchBarProps {
  className?: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}