import React from "react";
import BellIcon from "../../ui/BellIcon";
import Image from "next/image";

const HeaderSection = () => {
    return (
        <section className="flex items-center gap-4 py-1.5 px-11 justify-end">
            <div className="flex items-center gap-2">
                <p className="text-xs font-medium px-4 py-3 text-[#FE846F]">
                    Sisa 5 Kredit
                </p>
                <button className="bg-gradient-to-r from-[#F27121] via-[#E94057] to-[#703BE7] py-1.5 px-4 rounded-lg text-[#FFFFFF] font-semibold">
                    Upgrade plan
                </button>
            </div>
            <div className="flex items-center gap-1">
                <BellIcon />
                <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Dewi Anjani</p>
                    <div className="relative h-9 w-9 ">
                        <Image
                            src="/images/png/videfly-avatar.png"
                            alt=""
                            fill
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
