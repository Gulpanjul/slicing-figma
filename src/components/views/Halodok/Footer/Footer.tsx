import { FOOTER_ITEMS } from "./Footer.constant";

const style = {
  footer: "pl-[9.375rem] pr-[4.313rem]",
  div: "p-10 bg-[#203271] text-[#FFFFFF] flex gap-8",
  featureWrapper: "flex items-start gap-[1.563rem]",
  h3: "pb-2.5 text-lg font-semibold",
  p: "text-[#FFFFFF]/80",
};

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.div}>
        {FOOTER_ITEMS.map((item, index) => (
          <div key={index} className={style.featureWrapper}>
            <div>{item.icon}</div>
            <div>
              <h3 className={style.h3}>{item.title}</h3>
              <p className={style.p}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
