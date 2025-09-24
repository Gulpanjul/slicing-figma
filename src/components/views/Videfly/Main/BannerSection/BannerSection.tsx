import { ACTION_ITEMS } from "./Banner.constant";
import Banner from "~/components/assets/Videfly/banner.svg";

const sectionClasses = "flex items-center w-full justify-center";
const wrapperClasses = "relative flex items-center justify-center";
const bannerClasses = "w-full h-auto";
const titleClasses =
    "absolute text-[2rem] font-extrabold text-white font-[Nunito]";
const actionWrapperClasses =
    "absolute bottom-0 translate-y-1/2 bg-white py-2 px-2 rounded-2xl border border-[#ECECEC] flex";
const actionButtonClasses =
    "py-2.5 px-8 hover:bg-[#ECECEC] rounded-2xl transition flex gap-3 items-center font-semibold";

const BannerSection = () => {
    return (
        <section className={sectionClasses}>
            <div className={wrapperClasses}>
                <Banner height="11.25rem" className={bannerClasses} />

                <p className={titleClasses}>Mulai kreasi baru hari ini!</p>

                <div className={actionWrapperClasses}>
                    {ACTION_ITEMS.map((item, index) => (
                        <button key={index} className={actionButtonClasses}>
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
