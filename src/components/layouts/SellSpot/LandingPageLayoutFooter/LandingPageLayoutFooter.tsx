import Link from "next/link";
import { SOCIAL_ITEMS } from "../LandingPageLayout.constant";

const LandingPageLayoutFooter = () => {
    return (
        <footer className="container mx-auto py-20">
            <hr className="mb-[1.375rem]" />
            <div className="flex items-center justify-between">
                <p>
                    @ {new Date().getFullYear()} SellSpot. All right reserved.
                </p>
                <ul className="flex items-center justify-center gap-4 text-xl">
                    {SOCIAL_ITEMS.map((social, index) => (
                        <li key={index}>
                            <Link
                                href={social.href}
                                className="hover:text-[#6d6cc8]"
                            >
                                {social.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default LandingPageLayoutFooter;
