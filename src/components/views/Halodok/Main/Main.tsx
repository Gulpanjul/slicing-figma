import MainFigure from "./MainFigure";
import MainSection from "./MainSection";

const style = "pl-[9.375rem] pr-[5.625rem] flex items-center justify-between";

const Main = () => {
  return (
    <main className={style}>
      <MainSection />
      <MainFigure />
    </main>
  );
};

export default Main;
