interface PropTypes {
  children: React.ReactNode;
}

const Layout = (props: PropTypes) => {
  const { children } = props;
  return (
    <div className={`relative mx-auto min-h-screen`}>
      {children}
    </div>
  );
};

export default Layout;
