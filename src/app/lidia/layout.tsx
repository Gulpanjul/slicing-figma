import { Plus_Jakarta_Sans } from "next/font/google";
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
      className={`${plus_jakarta_sans.className} min-h-screen bg-[#FFFFFF] px-[120px] pt-[70px] text-[#000000]`}
    >
      <Header />
      {children}
    </div>
  );
};

export default LidiaLayout;
