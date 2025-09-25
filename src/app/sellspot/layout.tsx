"use client";

import { Poppins } from "next/font/google";
import LandingPageLayoutFooter from "~/components/layouts/SellSpot/LandingPageLayoutFooter";
import LandingPageLayoutNavbar from "~/components/layouts/SellSpot/LandingPageLayoutNavbar";

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
        <div className={`${poppins.variable} bg-[#040410] text-[#c2c0ec]`}>
            <LandingPageLayoutNavbar />
            {children}
            <LandingPageLayoutFooter />
        </div>
    );
};

export default SellSpotLayout;
