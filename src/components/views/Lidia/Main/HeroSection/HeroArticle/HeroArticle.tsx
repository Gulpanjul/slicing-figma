const style = {
  heading: "pb-8 text-[76px] leading-[89px] font-extrabold tracking-[0.04em]", // 4% tracking = 0.04em
  highlight: "text-[#4475F2] underline decoration-3 underline-offset-10",
  paragraph: "pb-9 text-base text-[#5E6282]",
  button:
    "h-[60px] w-[200px] rounded-[10px] bg-[#4475F2] text-white font-medium",
};

const HeroArticle = () => {
  return (
    <article>
      <h1 className={style.heading}>
        Search & review your <span className={style.highlight}>fav book</span>{" "}
        effortlessly
      </h1>

      <p className={style.paragraph}>
        Embark on a literary journey like never before with our revolutionary
        library application! Introducing a seamless experience that transcends
        traditional boundaries, where you can effortlessly search your favorite
        books.✨
      </p>

      <button className={style.button}>Start Now →</button>
    </article>
  );
};

export default HeroArticle;
