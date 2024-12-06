// components/Loader.tsx
const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-primary"></div>
    </div>
  )
}

export default Loader