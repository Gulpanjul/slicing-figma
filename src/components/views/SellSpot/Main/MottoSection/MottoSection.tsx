import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Button from "~/components/ui/Button";

const style = {
  section: "container mx-auto pb-20",
  imageWrapper:
    "relative w-full max-w-3xl aspect-[45.625/22.188] mx-auto mb-20",
  image: "object-cover rounded-lg",
  contentWrapper:
    "max-w-2xl mx-auto text-center flex flex-col items-center justify-center",
  heading: "mb-5 text-4xl font-medium",
  paragraph: "mb-10",
  brand: "font-semibold",
};

const MottoSection = () => {
  return (
    <section className={style.section}>
      <div className={style.imageWrapper}>
        <Image
          src="/motto.webp"
          alt="Motto Illustration"
          fill
          className={style.image}
          sizes="(max-width: 768px) 100vw, 720px"
          priority
        />
      </div>

      <article className={style.contentWrapper}>
        <h2 className={style.heading}>Discover, Connect, Transact</h2>
        <p className={style.paragraph}>
          <span className={style.brand}>SellSpot</span> is more than just an
          app; it&apos;s your gateway to a vibrant marketplace community where
          buyers and sellers converge, creating a dynamic ecosystem of exchange.
        </p>
        <Button>
          Download Now <FiDownload size={20} />
        </Button>
      </article>
    </section>
  );
};

export default MottoSection;
