import BannerSection from "./BannerSection";
import ContentSection from "./ContentSection";

const Main = () => {
    return (
        <main className="flex flex-col gap-y-9 px-11">
            <BannerSection />
            <ContentSection />
        </main>
    );
};

export default Main;
