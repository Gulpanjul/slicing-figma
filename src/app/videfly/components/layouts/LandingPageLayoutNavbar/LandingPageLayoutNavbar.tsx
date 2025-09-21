import Image from "next/image";
import React from "react";
import Link from "next/link";
import { NAV_ITEM } from "../layouts.constant";
import SettingIcon from "../../ui/SettingIcon";
import LogoutIcon from "../../ui/LogoutIcon";
import DotIcon from "../../ui/DotIcon";

const sidebarClass =
    "flex flex-col w-[16.25rem] px-4 py-6 gap-16 border-r-2 border-[#ECECEC] font-medium";

const logoClass = "relative h-11 w-32 self-center";

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
        <header className={sidebarClass}>
            <div className={logoClass}>
                <Image src="/images/logo/videfly.svg" alt="Videfly Logo" fill />
            </div>

            <button className={buttonClass}>
                Buat Video <DotIcon />
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
                    <SettingIcon />
                    <span>Pengaturan</span>
                </Link>
                <button
                    className={`${footerItemClass} text-[#FF6D6D] hover:bg-red-50 text-left`}
                >
                    <LogoutIcon />
                    <span>Keluar</span>
                </button>
            </div>
        </header>
    );
};

export default LandingPageLayoutNavbar;
