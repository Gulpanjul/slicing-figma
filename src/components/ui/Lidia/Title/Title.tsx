interface PropTypes {
  heading: string;
  desc: string;
}

const style = {
  div: "mb-[90px] font-extrabold",
  h2: "mb-2.5 text-lg text-[#4475F2] uppercase",
  p: "text-5xl text-[#000000] capitalize",
};

const Title = (props: PropTypes) => {
  const { heading, desc } = props;
  return (
    <div className={style.div}>
      <h2 className={style.h2}>{heading}</h2>
      <p className={style.p}>{desc}</p>
    </div>
  );
};

export default Title;
