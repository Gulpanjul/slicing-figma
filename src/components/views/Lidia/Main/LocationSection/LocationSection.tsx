import Image from "next/image";
import Title from "~/components/ui/Lidia/Title";

const style = {
  wrapper:
    "relative h-[400px] rounded-[10px] shadow-[0_30px_60px_rgba(71,74,87,0.25)] overflow-hidden",
  image: "object-cover rounded-[10px]",
};

const LocationSection = () => {
  return (
    <section>
      <Title heading="Location" desc="🗺• Our Library Location" />
      <div className={style.wrapper}>
        <Image
          src="/images/Lidia/Location.png"
          alt="Library Location"
          fill
          className={style.image}
        />
      </div>
    </section>
  );
};

export default LocationSection;
