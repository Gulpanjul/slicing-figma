import React from "react";
import Link from "next/link";
import { NAV_ITEM } from "../layouts.constant";
import Logo from "~/components/assets/Videfly/logo.svg";
import Crosshair from "~/components/assets/Videfly/crosshair.svg";
import Gear from "~/components/assets/Videfly/gear.svg";
import Exit from "~/components/assets/Videfly/exit.svg";

const sidebarClass =
    "flex flex-col px-4 py-6 gap-16 border-r-2 border-[#ECECEC] font-medium";

const logoClass = "h-[2.375rem] w-[7.813rem] self-center py-[0.188rem]";

const buttonClass =
    "flex items-center justify-center gap-3 w-full py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition";

const navListClass = "flex flex-col gap-2 text-base";
const navItemClass =
    "flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 transition";

const footerClass = "flex flex-col w-full gap-2";
const footerItemClass =
    "flex items-center gap-3 px-4 py-2 rounded-md transition";

const LandingPageLayoutNavbar = () => {
    return (
        <aside className={sidebarClass}>
            <Logo className={logoClass} />

            <button className={buttonClass}>
                Buat Video <Crosshair />
            </button>

            <nav className="w-full">
                <ul className={navListClass}>
                    {NAV_ITEM.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className={navItemClass}>
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={footerClass}>
                <Link
                    href="#"
                    className={`${footerItemClass} hover:bg-gray-100`}
                >
                    <Gear />
                    <span>Pengaturan</span>
                </Link>
                <button
                    className={`${footerItemClass} text-[#FF6D6D] hover:bg-red-50 text-left`}
                >
                    <Exit />
                    <span>Keluar</span>
                </button>
            </div>
        </aside>
    );
};

export default LandingPageLayoutNavbar;
