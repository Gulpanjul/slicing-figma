import { Lexend } from "next/font/google";
import Footer from "~/components/views/Home/Footer";
import Header from "~/components/views/Home/Header";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const layoutClass = "text-[#EEEEEE] bg-[#222831] tracking-widest";

interface PropTypes {
  children: React.ReactNode;
}

const HomeLayout = (props: PropTypes) => {
  const { children } = props;

  return (
    <div className={`${lexend.variable} ${layoutClass}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
