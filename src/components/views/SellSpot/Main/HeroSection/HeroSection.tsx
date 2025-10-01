import { FiArrowRight } from "react-icons/fi";
import Button from "~/components/ui/Button";

const styles = {
  section: "container mx-auto pt-20 h-screen grid place-content-center",
  wrapper:
    "max-w-2xl text-center flex flex-col items-center justify-center gap-10",
  heading: "text-6xl font-bold leading-tight",
  highlight: "text-[#6d6cc8]",
  paragraph: "text-base"
};

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          <span className={styles.highlight}>Revolutionize</span> Your Shopping
          Experience
        </h1>
        <p className={styles.paragraph}>
          Welcome to SellSpot, where buying and selling meet seamless
          convenience at your fingertips. Explore a world of endless
          possibilities.
        </p>
        <Button>
          Start from Now <FiArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
