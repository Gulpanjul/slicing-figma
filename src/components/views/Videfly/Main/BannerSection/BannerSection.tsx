import { ACTION_ITEMS } from "./Banner.constant";
import Banner from "~/components/assets/Videfly/banner.svg";

const BannerSection = () => {
    return (
        <section className="flex items-center w-full justify-center">
            <div className="relative flex items-center justify-center">
                <Banner height="11.25rem" className="w-full h-auto" />
                <p className="absolute text-[2rem] font-extrabold text-[#FFFFFF] font-[Nunito]">
                    Mulai kreasi baru hari ini!
                </p>
                <div className="absolute bottom-0 translate-y-1/2 bg-[#FFFFFF] py-2 px-2 rounded-2xl border-[0.063rem] border-[#ECECEC]">
                    {ACTION_ITEMS.map((item, index) => (
                        <button
                            key={index}
                            className="py-2.5 px-8 hover:bg-[#ECECEC] rounded-2xl transition"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
