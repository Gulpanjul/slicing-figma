"use client";

import { DM_Sans } from "next/font/google";
import Header from "~/components/views/Halodok/Header";

const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
});

interface PropTypes {
    children: React.ReactNode;
}

const HoladokLayout = (props: PropTypes) => {
    const { children } = props;

    return (
        <div
            className={`${dm_sans.variable} bg-[#FFFFFF] text-[#101C45] min-h-screen`}
        >
            <Header />
            {children}
        </div>
    );
};

export default HoladokLayout;
