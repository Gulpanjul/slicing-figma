import Image from "next/image";

const style = {
  container: "relative h-[516px]",
  imageWrapper:
    "absolute shadow-[0_15px_30px_rgba(0,0,0,0.25)] overflow-hidden rounded-[10px]",
  image: "object-cover",

  img1: "bottom-[40px] left-0 h-[302px] w-[209px]",
  img2: "top-[120px] right-0 h-[228px] w-[150px]",
  img3: "bottom-0 left-[308px] h-[163px] w-[108px]",
  img4: "top-0 left-[236px] h-[214px] w-[143px]",
};

const HeroFigure = () => {
  return (
    <figure className={style.container}>
      <div className={`${style.imageWrapper} ${style.img1}`}>
        <Image
          src="/images/Lidia/Dompet Ayah Sepatu Ibu.png"
          alt="Dompet Ayah Sepatu Ibu"
          fill
          className={style.image}
        />
      </div>

      <div className={`${style.imageWrapper} ${style.img2}`}>
        <Image
          src="/images/Lidia/The Midnight Library.png"
          alt="The Midnight Library"
          fill
          className={style.image}
        />
      </div>

      <div className={`${style.imageWrapper} ${style.img3}`}>
        <Image
          src="/images/Lidia/The Visual MBA.png"
          alt="The Visual MBA"
          fill
          className={style.image}
        />
      </div>

      <div className={`${style.imageWrapper} ${style.img4}`}>
        <Image
          src="/images/Lidia/Talking to Strangers.png"
          alt="Talking to Strangers"
          fill
          className={style.image}
        />
      </div>
    </figure>
  );
};

export default HeroFigure;
