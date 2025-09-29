import Image from "next/image";
import Title from "~/components/ui/Lidia/Title";

const ServicesSection = () => {
  return (
    <section>
      <Title heading="Services" desc="🚀• The Services for You" />
      <article className="grid grid-cols-[600px_411px] justify-between">
        <div className="relative -left-[46px] h-[399px] w-[600px] justify-self-start">
          <Image
            src="/images/Lidia/Service.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="mr-[44px]">
          <h3 className="mb-10 text-[32px] font-medium">
            <span className="text-[#4475F2]">Rent</span> your favorite book
            fairly easy on <span className="text-[#4475F2]">Lidia</span>!
          </h3>
          <div className="tracking-[2%] text-[#5E6282]">
            <p className="mb-[15px]">
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
        </div>
      </article>
      <article className="grid grid-cols-[419px_1fr] justify-between">
        <div>
          <h3 className="mb-10 text-[32px] font-medium">
            Quick Book Rentals: <span className="text-[#4475F2]">Dive</span>{" "}
            into <span className="text-[#4475F2]">Reading</span> Instantly
          </h3>
          <div className="tracking-[2%] text-[#5E6282]">
            <p className="mb-[15px]">
              Discover instant literary delight. Access a vast library, borrow
              your favorite reads, and dive into captivating stories within
              minutes. Reading made quick and easy, just a click away!
            </p>
            <p>
              Unlock a world of stories effortlessly. Browse genres, choose,
              rent in minutes. Seamlessly manage your reading adventures with
              our intuitive platform~
            </p>
          </div>
        </div>
        <div className="relative -right-[50px] h-[399px] w-[600px] items-center justify-self-end">
          <Image
            src="/images/Lidia/Reading.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </article>
    </section>
  );
};

export default ServicesSection;
