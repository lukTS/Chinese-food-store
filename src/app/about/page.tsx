import { aboutPickLeft, aboutPickRight } from "@/data/aboutUrl"
import Image from "next/image"

const About: React.FC = () => {
  return(
    <div>
      <h1 className="text-4xl font-semibold text-center mt-10">About us</h1>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-4 py-6">
        <div>
          {aboutPickLeft.map(item => 
            <Image key={item.aboutUrl}
              src={`/images/${item.aboutUrl}`}
              className="object-contain mb-20 w-32 h-auto sm:w-40 sm:h-auto md:w-48 md:h-auto lg:w-64 lg:h-auto"
              alt={'abort1'}
              height={164}
              width={164}
            />
          )}
        </div>

        <div className="p-4 space-y-4">
          <p>Welcome to our Chinese restaurant, where the rich flavors and centuries-old culinary traditions of China meet the modern dining experience. For us, food is not just about satisfying hunger — it’s about offering a taste of culture, history, and love in every bite. Our story begins with a deep passion for authentic Chinese cuisine, passed down through generations, and a desire to bring this heritage to a broader audience.</p>
          <p>Our chefs are highly trained and dedicated, each with years of experience in perfecting their craft. They work tirelessly to create dishes that are not only delicious but also visually stunning. We believe that every plate of food should tell a story — one that connects you to the vibrant streets of Beijing, the busy markets of Shanghai, or the serene beauty of Chengdu. Whether it’s the delicate art of dim sum, the bold flavors of Sichuan cuisine, or the refined techniques of Cantonese cooking, we aim to offer an experience that transports you straight to China.</p>
          <p>What sets us apart is our commitment to authenticity. Unlike many others, we don’t cut corners or compromise on the flavors that define Chinese cuisine. Every dish is made from scratch, using the finest and freshest ingredients. We take pride in our selection of meats, seafood, and vegetables, carefully sourced to ensure quality and sustainability. Our spices and herbs come from trusted suppliers, ensuring that every ingredient used is as close to the original flavors of China as possible.</p>
          <p>Our menu is a celebration of the diverse culinary traditions found across China. From the well-known favorites like Kung Pao Chicken and Sweet and Sour Pork to the lesser-known gems such as Mapo Tofu and Peking Duck, every item is designed to offer a true taste of Chinese culture. But we don't just stop at the food — our drink menu, filled with authentic Chinese teas and beverages, adds another layer to your dining experience. We invite you to try traditional drinks like Jasmine Tea, Oolong Tea, or a refreshing glass of Chrysanthemum Tea — all designed to pair perfectly with your meal.</p>
          <p>We understand that dining out is more than just about the food. It’s about the ambiance, the atmosphere, and the experience as a whole. Our restaurant is designed to be a warm and welcoming space where you can enjoy your meal with friends, family, or colleagues. The decor reflects the beauty and serenity of Chinese culture, with elements inspired by traditional Chinese art, architecture, and craftsmanship. From the moment you walk in, we want you to feel like you’ve stepped into a little corner of China, ready to enjoy a meal that’s been prepared with care and passion.</p>
          <p>But what truly makes our restaurant special is our philosophy. We don’t just serve food — we serve memories. Every meal is an opportunity to bond with loved ones, celebrate milestones, or simply enjoy the comforting flavors of a home-cooked meal. We strive to make every guest feel like part of our family, ensuring that every visit is memorable, enjoyable, and truly special.</p>
          <p>At our Chinese restaurant, we believe that food has the power to bring people together, to spark joy, and to create lasting memories. Whether you are new to Chinese cuisine or have enjoyed it for years, we invite you to join us on a culinary journey that spans generations. Discover the rich flavors, the stories, and the history behind every dish we serve, and experience firsthand why Chinese food is more than just a meal — it’s a celebration of life.</p>
          <p>Thank you for choosing to dine with us. We look forward to sharing our love for Chinese cuisine with you and creating an unforgettable dining experience every time you visit. Your table is ready — come taste the tradition.</p>
        </div>

        <div>
          {aboutPickRight.map(item => 
            <Image key={item.aboutUrl}
              src={`/images/${item.aboutUrl}`}
              className="object-contain mb-20 w-32 h-auto sm:w-40 sm:h-auto md:w-48 md:h-auto lg:w-64 lg:h-auto"
              alt={'abort1'}
              height={164}
              width={164}
            />
          )}
        </div>
      </div>
      <Image className = "mb-20" src = "/images/about.jpg" layout="intrinsic" width={1920} height={529} alt={"about"} />

    </div>

  )
}

export default About