"use client";

import { useTheme } from "next-themes";
import { Nunito } from "next/font/google";
import { useEffect } from "react";
import LandingPageLayoutNavbar from "~/components/layouts/Videfly/LandingPageLayoutNavbar";

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-nunito",
});

const layoutClass =
    "theme-videfly grid grid-cols-[16.25rem_1fr] min-h-screen bg-light text-dark";

interface PropTypes {
    children: React.ReactNode;
}

const VideflyLayout = (props: PropTypes) => {
    const { children } = props;
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme("videfly");
    }, [setTheme]);

    return (
        <div className={`${nunito.variable} ${layoutClass}`}>
            <LandingPageLayoutNavbar />
            {children}
        </div>
    );
};

export default VideflyLayout;
