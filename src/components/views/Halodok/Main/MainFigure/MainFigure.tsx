import Image from "next/image";
import Background from "~/components/assets/Holadok/background.svg";
import Quotitation from "~/components/assets/Holadok/quotitation.svg";

const style = {
  figure: "relative h-[49.625rem] w-[33.125rem]",
  testimonial:
    "absolute top-[10.313rem] -left-[10.313rem] z-10 flex w-[18.25rem] flex-col gap-3 rounded-[0.625rem] bg-[#FFFFFF] p-5 text-xs shadow-[0px_15px_30px_rgba(0,0,0,0.1)]",
  avatarWrapper: "flex items-center gap-2.5",
  background: "absolute right-0 -bottom-0 z-0",
  heroWrapper: "relative z-10 h-full w-full",
  avatar: "relative h-[1.875rem] w-[1.875rem]",
  name: "text-xs font-semibold",
};

const MainFigure = () => {
  return (
    <figure className={style.figure}>
      <div className={style.testimonial}>
        <div className="flex justify-between">
          <div className={style.avatarWrapper}>
            <div className={style.avatar}>
              <Image
                src={"/images/png/holadok-avatar.png"}
                alt="Avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className={style.name}>Jane Doe</p>
          </div>
          <Quotitation />
        </div>
        <p>
          “The doctor appointment app has been great for me. Scheduling
          appointments and getting medication reminders is much easier, and I
          love the option for virtual consultations. I&apos;d recommend this app
          to others.”
        </p>
      </div>

      <Background className={style.background} />

      <div className={style.heroWrapper}>
        <Image
          src={"/images/png/holadok-hero.png"}
          alt="Hero"
          fill
          className="object-contain"
        />
      </div>
    </figure>
  );
};

export default MainFigure;
