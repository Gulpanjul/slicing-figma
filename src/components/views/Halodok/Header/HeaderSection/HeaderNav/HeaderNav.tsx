import Link from "next/link";

const style = {
  ul: "flex place-content-center gap-[50px] pr-[305px] text-[#000000]/80",
  li: "font-semibold text-[#101C45]",
};

const HeaderNav = () => {
  return (
    <nav>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Features</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
