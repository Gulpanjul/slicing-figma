import { Poppins } from "next/font/google";
import LandingPageLayoutNavbar from "~/components/layouts/Videfly/LandingPageLayoutNavbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const layoutClass =
    "theme-videfly grid grid-cols-[16.25rem_1fr] min-h-screen bg-light text-dark";

interface PropTypes {
    children: React.ReactNode;
}

const VideflyLayout = (props: PropTypes) => {
    const { children } = props;

    return (
        <div className={`${poppins.variable} ${layoutClass}`}>
            <LandingPageLayoutNavbar />
            {children}
        </div>
    );
};

export default VideflyLayout;
