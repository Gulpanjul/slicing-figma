import Image from "next/image";

const HeroFigure = () => {
  return (
    <figure className="relative h-full">
      <div className="absolute -bottom-5 -left-4 h-[302px] w-[209px]">
        <Image
          src="/images/png/lidia-dompet-ayah-sepatu-ibu.png"
          fill
          alt="dompet ayah sepatu ibu"
          className="object-cover"
        />
      </div>
      <div className="absolute top-[100px] -right-4 h-[228px] w-[150px]">
        <Image
          src="/images/png/lidia-the-midnight-library.png"
          fill
          alt="the midnight library"
          className="object-cover"
        />
      </div>
      <div className="absolute -bottom-8 left-[300px] h-[163px] w-[108px]">
        <Image
          src="/images/png/lidia-the-visual-mba.png"
          fill
          alt="the visual mba"
          className="object-cover"
        />
      </div>
      <div className="absolute -top-3 left-[250px] h-[214px] w-[143px]">
        <Image
          src="/images/png/lidia-talking-to-strangers.png"
          fill
          alt="talking to strangers"
          className="object-cover"
        />
      </div>
    </figure>
  );
};

export default HeroFigure;
