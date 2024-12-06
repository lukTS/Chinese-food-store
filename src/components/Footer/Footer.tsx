import Navigation from "@/components/Navigation/Navigation"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-primary text-white font-medium">
      <div className="max-w-6xl mx-auto px-10 py-6 flex justify-between items-start gap-14">
        {/* Логотип */}
        <Link href={'/'} className="w-52 h-14 relative">
          <Image
            src="/logo_footer.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Logo"
          />
        </Link>

        {/* Навигация */}
        <Navigation className="flex flex-col " />

        {/* Описание */}
        <p className="text-sm font-normal w-60">
          All our dishes are available at our restaurant, and we also offer delivery throughout Guangzhou. For orders over $20, delivery is free.
        </p>

        {/* Адрес */}
        <div className="text-sm font-normal">
          <p className="font-semibold mb-1 underline">Our Address:</p>
          <p>No. 789 Tianhe Road, Tianhe District,</p>
          <p>Guangzhou, 510620, Guangdong, China</p>
          <p>Phone: +86 20 1234 5678</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
