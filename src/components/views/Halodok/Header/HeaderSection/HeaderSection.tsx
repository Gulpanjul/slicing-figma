import Link from "next/link";
import Logo from "~/components/assets/Holadok/logo.svg";
import HeaderNav from "./HeaderNav";

const style = {
  section: "flex items-center justify-between p-2",
  div: "flex items-center gap-[0.938rem]",
  p: "mr-[5.813rem] text-lg font-bold",
  button: "flex border border-[#101C45] px-5 py-2",
};

const HeaderSection = () => {
  return (
    <section className={style.section}>
      <div className={style.div}>
        <Logo />
        <p className={style.p}>Holadok</p>
        <HeaderNav />
      </div>

      <div className={style.div}>
        <Link href="#" className="px-5">
          Login
        </Link>
        <button className={style.button}>Book Now</button>
      </div>
    </section>
  );
};

export default HeaderSection;
