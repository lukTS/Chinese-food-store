import Hero from '@/components/Hero/Hero'
import PopularDishes from '@/components/PopularDishes/PopularDishes'

const Home: React.FC = () => {
  return (
    <div className="h-auto">
      <Hero />
      <PopularDishes />
    </div>
  )
}

export default Home
