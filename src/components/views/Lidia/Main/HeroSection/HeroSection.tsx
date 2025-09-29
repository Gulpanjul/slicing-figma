import HeroArticle from "./HeroArticle";
import HeroFigure from "./HeroFigure";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-[1fr_600px] items-center z-10">
      <HeroArticle />
      <HeroFigure />
    </section>
  );
};

export default HeroSection;
