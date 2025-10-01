import Link from "next/link";
import { SOCIAL_ITEMS } from "./Footer.constant";

const style = {
  footer: "container mx-auto py-20",
  divider: "mb-6 border-t border-gray-300",
  contentWrapper:
    "flex flex-col sm:flex-row items-center justify-between gap-4",
  copyright: "text-sm text-gray-600",
  socialList: "flex items-center justify-center gap-4 text-xl",
  socialLink: "hover:text-[#6d6cc8] transition-colors",
};

const Footer = () => {
  return (
    <footer className={style.footer}>
      <hr className={style.divider} />
      <div className={style.contentWrapper}>
        <p className={style.copyright}>
          © {new Date().getFullYear()} SellSpot. All rights reserved.
        </p>
        <ul className={style.socialList}>
          {SOCIAL_ITEMS.map((social, index) => (
            <li key={index}>
              <Link href={social.href} className={style.socialLink}>
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
