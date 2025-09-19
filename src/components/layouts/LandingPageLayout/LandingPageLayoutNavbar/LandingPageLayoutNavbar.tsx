import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const LandingPageLayoutNavbar = () => {
    return (
        <header className="sticky top-0 left-0 right-0 z-50 w-full bg-dark/90">
            <div className="container mx-auto py-4 text-center flex items-center flex-col gap-4">
                <h1 className="text-4xl font-bold">
                    <span className="">Gulpanjul</span> Slicing Project List
                </h1>
                <p className="text-2xl">Find Me on Social</p>
                <ul className="flex items-center justify-center gap-4 text-2xl">
                    <li>
                        <FiInstagram />
                    </li>
                    <li>
                        <FiGithub />
                    </li>
                    <li>
                        <FiLinkedin />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default LandingPageLayoutNavbar;
