import Image from "next/image";
import Twitter from "~/components/assets/Lidia/twitter.svg";
import Instagram from "~/components/assets/Lidia/instagram.svg";
import Facebook from "~/components/assets/Lidia/facebook.svg";

const style = {
  section: "flex min-h-[240px] items-start justify-center gap-24 py-12",
  column: "flex flex-col items-center",
  managedByImage: "relative h-24 w-60",
  socialIcons: "flex gap-4",
  sloganText: "font-medium text-xl",
  copyright: "bg-[#4475F2] py-6 text-center text-white",
};

const Footer = () => {
  return (
    <footer className="bg-white text-2xl font-bold text-black">
      <section className={style.section}>
        <div className={`${style.column} gap-6`}>
          <p>Managed By</p>
          <div className={style.managedByImage}>
            <Image
              src="/images/Lidia/Logo - Text Black 1.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className={`${style.column} gap-10`}>
          <p>Social Media</p>
          <div className={style.socialIcons}>
            <Twitter />
            <Instagram />
            <Facebook />
          </div>
        </div>

        <div className={`${style.column} gap-10`}>
          <p>Slogan</p>
          <p className={style.sloganText}>#RentFavBooks</p>
        </div>
      </section>

      <p className={style.copyright}>© 2024 Lidia. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
