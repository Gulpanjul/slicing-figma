import BannerSection from "./BannerSection";
import ContentSection from "./ContentSection";
import ProjectSection from "./ProjectSection";

const Main = () => {
    return (
        <main className="flex flex-col gap-y-9 px-11">
            <BannerSection />
            <ContentSection />
            <ProjectSection />
        </main>
    );
};

export default Main;
