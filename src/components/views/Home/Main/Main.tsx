import MainSection from "./MainSection";
import { HOME_ITEMS } from "./Main.constant";

const Home = () => {
  return (
    <main className="container mx-auto py-10">
      <MainSection ITEMS={HOME_ITEMS} />
    </main>
  );
};

export default Home;
