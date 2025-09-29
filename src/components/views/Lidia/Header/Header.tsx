import Image from "next/image";

const style = {
  header:
    "sticky z-10 grid grid-cols-[79px_125px_329px_1fr_137px] items-center px-4 py-3",
  logoContainer: "flex items-center justify-between",
  logoImage: "relative h-7 w-7",
  brandName: "text-lg font-bold",
  nav: "w-full",
  navList: "flex justify-between gap-10 text-[#9A9EA6]",
  navItemActive: "text-[#4737FF]",
  loginButton: "w-full rounded-[10px] bg-white px-4 py-2 text-[#181E4B]",
};

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logoContainer}>
        <div className={style.logoImage}>
          <Image src="/images/Lidia/Logo.png" fill alt="logo" />
        </div>
        <p className={style.brandName}>Lidia</p>
      </div>

      <div></div>

      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItemActive}>Home</li>
          <li>Service</li>
          <li>Review</li>
          <li>Location</li>
        </ul>
      </nav>

      <div></div>

      <button className={style.loginButton}>Login</button>
    </header>
  );
};

export default Header;
