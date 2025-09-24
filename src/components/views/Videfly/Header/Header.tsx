import Image from "next/image";
import Bell from "~/components/assets/Videfly/bell.svg";

const headerClasses = "flex items-center gap-4 py-1.5 px-11 justify-end";
const creditTextClasses = "text-xs font-medium px-4 py-3 text-[#FE846F]";
const upgradeButtonClasses =
    "bg-gradient-to-r from-[#F27121] via-[#E94057] to-[#703BE7] py-1.5 px-4 rounded-lg text-white font-semibold";
const userWrapperClasses = "flex items-center gap-1";
const userInfoClasses = "flex items-center gap-2";
const userNameClasses = "text-sm font-medium";
const avatarWrapperClasses = "relative h-9 w-9";
const avatarImageClasses = "rounded-full";

const Header = () => {
    return (
        <header className={headerClasses}>
            <div className="flex items-center gap-2">
                <p className={creditTextClasses}>Sisa 5 Kredit</p>
                <button className={upgradeButtonClasses}>Upgrade plan</button>
            </div>

            <div className={userWrapperClasses}>
                <Bell />
                <div className={userInfoClasses}>
                    <p className={userNameClasses}>Dewi Anjani</p>
                    <div className={avatarWrapperClasses}>
                        <Image
                            src="/images/png/videfly-avatar.png"
                            alt="user avatar"
                            fill
                            className={avatarImageClasses}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
