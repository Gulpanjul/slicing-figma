import LandingPageLayoutFooter from "./LandingPageLayoutFooter";
import LandingPageLayoutNavbar from "./LandingPageLayoutNavbar";

interface propTypes {
  children: React.ReactNode;
}

const LandingPageLayout = (props: propTypes) => {
  const { children } = props;
  return (
    <main>
      <LandingPageLayoutNavbar />
      {children}
      <LandingPageLayoutFooter />
    </main>
  );
};

export default LandingPageLayout;
