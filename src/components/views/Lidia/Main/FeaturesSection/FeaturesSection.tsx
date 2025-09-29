import Title from "~/components/ui/Lidia/Title";
import { FEATURES_ITEMS } from "./FeaturesSection.constant";

const FeaturesSection = () => {
  return (
    <section>
      <Title heading="Features" desc="🤔• What You Can Do?" />
      <div className="flex items-center gap-[165px]">
        {FEATURES_ITEMS.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-5 flex h-[102px] w-[102px] items-center justify-center rounded-[26px] bg-[#4475F2] text-[#FFFFFF]">
              {item.icon}
            </div>
            <h3 className="mb-7 text-2xl font-bold">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
