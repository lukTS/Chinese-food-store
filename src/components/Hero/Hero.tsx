import Image from "next/image";
import MainButton from "../UI/MainButton/MainButton";

const Hero : React.FC = () => {
  return (
    <section className="hero">
      <div className="pt-12 pb-5">
        <h1 className="text-4xl font-semibold">
          Try Chinese food and life will become brighter
        </h1>
        <p className="my-4 text-gray-500">
          The only thing better than Chinese food is our Chinese food prepared by the best chefs according to old family recipes. Each dish carries the rich heritage of China, blending tradition and modern flavor to create an unforgettable experience. From the bustling streets of Guangzhou to your table, we bring the essence of authentic Chinese cuisine, crafted with the freshest ingredients and utmost care.
        </p>
        <div className="flex gap-4 text-sm">
          <MainButton>
            Order now &gt;
          </MainButton>
          <MainButton>
            More &gt;
          </MainButton>
        </div>
      </div>
      <div className="relative left-6 w-96 h-90">
        <Image src={'/food1.jpg'} fill style={{ objectFit: "contain" }} alt={"food"} />
      </div>
    </section>
  )
}

export default Hero
