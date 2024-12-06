import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";

interface NavigationProps {
  className?: string; // Добавлено: класс может быть необязательным
  [key: string]: any; // Для остальных пропсов, если они понадобятся
}

const Navigation: React.FC<NavigationProps> = ({ className, ...props }) => {
  const navigationItems = useSelector((state: RootState) => state.navigation.navigation);

  return (
    <nav className={className} {...props}>
      {navigationItems.map(item => (
        <Link key={item.name} href={item.href}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
