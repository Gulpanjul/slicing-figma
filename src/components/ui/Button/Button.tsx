interface propTypes {
  children: React.ReactNode;
}

const Button = (props: propTypes) => {
  const { children } = props;
  return (
    <button className="flex items-center justify-center gap-2 px-[1.125rem] py-[0.563rem] bg-primary rounded-full hover:bg-primary/50">
      {children}
    </button>
  );
};

export default Button;
