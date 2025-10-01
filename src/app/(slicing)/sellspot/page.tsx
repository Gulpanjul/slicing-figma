import FaqSection from "../../../components/views/SellSpot/Main/FaqSection";
import FeatureSection from "../../../components/views/SellSpot/Main/FeatureSection";
import HeroSection from "../../../components/views/SellSpot/Main/HeroSection";
import MottoSection from "../../../components/views/SellSpot/Main/MottoSection";

const sellSpotPage = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <MottoSection />
      <FeatureSection />
      <FaqSection />
    </main>
  );
};

export default sellSpotPage;
