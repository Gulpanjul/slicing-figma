import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Cover from "~/components/assets/Lidia/cover.svg";

const Main = () => {
  return (
    <main className="flex flex-col gap-[200px]">
      <HeroSection />
      <Cover className="absolute top-0 right-0 text-[#4475F2]" />
      <FeaturesSection />
      <ServicesSection />
    </main>
  );
};

export default Main;
