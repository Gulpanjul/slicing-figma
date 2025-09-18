import { FEATURE_ITEMS } from "./FeatureSection.constant";

const FeatureSection = () => {
  return (
    <section className="container mx-auto text-center my-20">
      <h2 className="text-4xl font-bold mb-[1.625rem]">Why SellSpot?</h2>
      <p>
        Choose SellSpot for a seamless, enjoyable, and rewarding marketplace
        experience unlike any other.
      </p>
      <div className="mt-20 grid grid-cols-3 gap-12">
        {FEATURE_ITEMS.map((feature, index) => (
          <div
            key={index}
            className="text-left bg-gradient-to-b from-card-primary to-card-secondary border border-gray rounded-xl p-[1.563rem]"
          >
            <div className="bg-gray w-fit p-2.5 rounded-md mb-[1.125rem]">
              {feature.icon}
            </div>
            <h3 className="mb-[1.125rem] text-lg font-semibold">
              {feature.title}
            </h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
