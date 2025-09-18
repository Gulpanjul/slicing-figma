import LandingPageLayoutNavbar from "./LandingPageLayoutNavbar";

const LandingPageLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <main>
      <LandingPageLayoutNavbar />
      {children}
    </main>
  );
};

export default LandingPageLayout;
