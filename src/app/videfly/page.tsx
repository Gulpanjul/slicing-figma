import HeaderSection from "./components/views/HeaderSection";
import MainSection from "./components/views/MainSection";

const videflyPage = () => {
    return (
        <div className="flex-7 gap-y-9 flex flex-col">
            <HeaderSection />
            <MainSection />
        </div>
    );
};

export default videflyPage;
