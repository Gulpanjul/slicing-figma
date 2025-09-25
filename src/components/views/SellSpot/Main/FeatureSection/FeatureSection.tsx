import FeatureArticle from "./FeatureArticle";
import { FEATURE_ITEMS } from "./FeatureSection.constant";

const style = {
    section: "container mx-auto text-center my-20",
    h2: "text-4xl font-bold mb-[1.625rem]",
};

const FeatureSection = () => {
    return (
        <section className={style.section}>
            <h2 className={style.h2}>Why SellSpot?</h2>
            <p>
                Choose SellSpot for a seamless, enjoyable, and rewarding
                marketplace experience unlike any other.
            </p>
            <FeatureArticle ITEMS={FEATURE_ITEMS} />
        </section>
    );
};

export default FeatureSection;
