"use client";

import { useTheme } from "next-themes";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import LandingPageLayoutFooter from "~/app/sellspot/components/layouts/LandingPageLayout/LandingPageLayoutFooter";
import LandingPageLayoutNavbar from "~/app/sellspot/components/layouts/LandingPageLayout/LandingPageLayoutNavbar";

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
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme("sellspot");
    }, [setTheme]);

    return (
        <body
            className={`${poppins.variable} theme-sellspot bg-dark text-light`}
        >
            <LandingPageLayoutNavbar />
            {children}
            <LandingPageLayoutFooter />
        </body>
    );
};

export default SellSpotLayout;
