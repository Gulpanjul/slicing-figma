"use client";

import { Poppins } from "next/font/google";
import Footer from "~/components/views/SellSpot/Footer";
import Header from "~/components/views/SellSpot/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

interface PropTypes {
  children: React.ReactNode;
}

const SellSpotLayout = (props: PropTypes) => {
  const { children } = props;

  return (
    <div className={`${poppins.variable} bg-[#040410] text-[#e6e6f5]`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default SellSpotLayout;
