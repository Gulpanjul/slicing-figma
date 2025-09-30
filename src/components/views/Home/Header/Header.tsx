import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const style = {
  header: "sticky top-0 right-0 left-0 z-50 w-full bg-[#222831]/80",
  container:
    "container mx-auto flex flex-col items-center gap-4 py-4 text-center",
  title: "text-4xl font-bold",
  titleHighlight:
    "bg-gradient-to-br from-[#00ADB5] to-[#EEEEEE] bg-clip-text text-5xl text-transparent",
  subtitle: "text-2xl",
  socialList: "flex items-center justify-center gap-4 text-2xl",
  socialIcon: "hover:scale-105 hover:text-[#00ADB5]",
};

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.title}>
          &quot;
          <span className={style.titleHighlight}>Gulpanjul</span>
          &quot; Slicing Project List
        </h1>
        <p className={style.subtitle}>Find Me on Social</p>
        <ul className={style.socialList}>
          <li>
            <Link href="https://www.instagram.com/gulpanjul/">
              <FiInstagram className={style.socialIcon} />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/gulpanjul">
              <FiGithub className={style.socialIcon} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/gulpanjul/">
              <FiLinkedin className={style.socialIcon} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
