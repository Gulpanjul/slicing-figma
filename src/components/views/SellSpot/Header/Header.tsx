import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Button from "~/components/ui/Button";
import { NAV_ITEMS } from "./Header.constant";

const style = {
  header:
    "sticky inset-0 z-10 bg-[#040410] h-20 flex items-center justify-between px-5 container mx-auto",
  logo: "text-[1.75rem] font-semibold",
  navList: "flex items-center justify-center gap-4",
  navLink: "hover:text-[#6d6cc8] transition-colors",
};

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>SellSpot</div>

      <nav>
        <ul className={style.navList}>
          {NAV_ITEMS.map((nav, index) => (
            <li key={index}>
              <Link href={nav.href} className={style.navLink}>
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button>
        Start Now <FiArrowRight size={20} />
      </Button>
    </header>
  );
};

export default Header;
