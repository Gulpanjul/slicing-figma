import FeatureArticle from "./FeatureArticle";
import { FEATURE_ITEMS } from "./FeatureSection.constant";

const styles = {
  section: "container mx-auto text-center my-20",
  heading: "text-4xl font-bold mb-6",
  description: "max-w-2xl mx-auto mb-12",
};

const FeatureSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Why SellSpot?</h2>
      <p className={styles.description}>
        Choose SellSpot for a seamless, enjoyable, and rewarding marketplace
        experience unlike any other.
      </p>
      <FeatureArticle ITEMS={FEATURE_ITEMS} />
    </section>
  );
};

export default FeatureSection;
