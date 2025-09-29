import Cover from "~/components/assets/Lidia/cover.svg";

import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ServicesSection from "./ServicesSection";
import ReviewSection from "./ReviewSection";

const Main = () => {
  return (
    <main className="flex flex-col gap-[200px]">
      <HeroSection />
      <Cover className="absolute top-0 right-0 text-[#4475F2]" />
      <FeaturesSection />
      <ServicesSection />
      <ReviewSection />
    </main>
  );
};

export default Main;
