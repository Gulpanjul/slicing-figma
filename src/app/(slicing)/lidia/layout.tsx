import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "~/components/views/Lidia/Footer";
import Header from "~/components/views/Lidia/Header";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface PropTypes {
  children: React.ReactNode;
}

const LidiaLayout = (props: PropTypes) => {
  const { children } = props;
  return (
    <div
      className={`${plus_jakarta_sans.className} min-h-screen bg-[#FFFFFF] text-[#000000] max-w-[1440px] mx-auto relative`}
    >
      <div className="px-[120px] pt-[70px]">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LidiaLayout;
