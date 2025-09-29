import Title from "~/components/ui/Lidia/Title";
import { FEATURES_ITEMS } from "./FeaturesSection.constant";

const style = {
  container: "flex items-center gap-[165px]",
  item: "flex flex-col items-center text-center max-w-[280px]",
  iconWrapper:
    "mb-5 flex h-[102px] w-[102px] items-center justify-center rounded-[26px] bg-[#4475F2] text-white",
  title: "mb-7 text-2xl font-bold",
  description: "text-[#5E6282]",
};

const FeaturesSection = () => {
  return (
    <section>
      <Title heading="Features" desc="🤔• What You Can Do?" />

      <div className={style.container}>
        {FEATURES_ITEMS.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.iconWrapper}>{item.icon}</div>
            <h3 className={style.title}>{item.title}</h3>
            <p className={style.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
