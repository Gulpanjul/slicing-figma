import { FiArrowRight } from "react-icons/fi";
import Button from "~/components/ui/Button";

const styles = {
    section: "container mx-auto pt-20 h-screen grid place-content-center",
    div: "max-w-2xl text-center flex items-center justify-center flex-col gap-10",
    h1: "text-6xl font-bold leading-tight",
    span: "text-[#6d6cc8]",
};

const HeroSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.div}>
                <h1 className={styles.h1}>
                    <span className={styles.span}>Revolutionize</span> Your
                    Shopping Experience
                </h1>
                <p>
                    Welcome to SellSpot, where buying and selling meet seamless
                    convenience on your fingertips. Explore a world of endless
                    possibilities
                </p>
                <Button>
                    Start from Now <FiArrowRight size={20} />
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
