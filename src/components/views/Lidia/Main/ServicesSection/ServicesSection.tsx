import Image from "next/image";
import Title from "~/components/ui/Lidia/Title";

const style = {
  article: "grid gap-[125px] mb-[140px]",

  firstLayout: "grid-cols-[600px_411px]",
  secondLayout: "grid-cols-[419px_1fr] gap-[181px]",
  imageWrapper:
    "relative h-[399px] w-[600px] shadow-[0_30px_60px_rgba(71,74,87,0.25)] rounded-[10px]",
  image: "object-cover rounded-[10px]",
  textBlock: "w-full max-w-[411px] tracking-[0.02em] text-[#5E6282]",
  heading: "mb-10 text-[32px] font-medium leading-snug",
  highlight: "text-[#4475F2]",
  paragraph: "mb-[15px]",
};

const ServicesSection = () => {
  return (
    <section>
      <Title heading="Services" desc="🚀• The Services for You" />

      <article className={`${style.article} ${style.firstLayout}`}>
        <div className={`${style.imageWrapper} justify-self-start`}>
          <Image
            src="/images/Lidia/Service.png"
            alt="Service Image"
            fill
            className={style.image}
          />
        </div>

        <div className={style.textBlock}>
          <h3 className={style.heading}>
            <span className={style.highlight}>Rent</span> your favorite book
            fairly easy on <span className={style.highlight}>Lidia</span>!
          </h3>
          <p className={style.paragraph}>
            Viewing, rent, and organize your favorite books has never been
            easier. An integrated digital library rent that’s simple to use,
            Lidia lets you spend less time managing your work and more time
            actually doing it!
          </p>
          <p>
            Effortless rentals, personalized shelves—Lidia transforms book
            management, enhancing your reading experience~
          </p>
        </div>
      </article>

      <article className={`${style.article} ${style.secondLayout}`}>
        <div className={style.textBlock}>
          <h3 className={style.heading}>
            Quick Book Rentals: <span className={style.highlight}>Dive</span>{" "}
            into <span className={style.highlight}>Reading</span> Instantly
          </h3>
          <p className={style.paragraph}>
            Discover instant literary delight. Access a vast library, borrow
            your favorite reads, and dive into captivating stories within
            minutes. Reading made quick and easy, just a click away!
          </p>
          <p>
            Unlock a world of stories effortlessly. Browse genres, choose, rent
            in minutes. Seamlessly manage your reading adventures with our
            intuitive platform~
          </p>
        </div>

        <div className={`${style.imageWrapper} justify-self-end`}>
          <Image
            src="/images/Lidia/Reading.png"
            alt="Reading Image"
            fill
            className={style.image}
          />
        </div>
      </article>
    </section>
  );
};

export default ServicesSection;
