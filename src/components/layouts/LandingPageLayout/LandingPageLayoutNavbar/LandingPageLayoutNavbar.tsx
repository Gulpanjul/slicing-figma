import { FiArrowRight } from "react-icons/fi";
import { NAV_ITEMS } from "../LandingPageLayout.constant";

const LandingPageLayoutNavbar = () => {
  return (
    <header className="fixed inset-0 container mx-auto h-[5rem] px-[1.188rem] flex items-center justify-between">
      <div className="font-semibold text-[1.75rem]">SellSpot</div>
      <nav>
        <ul className="flex items-center justify-center gap-4">
            {NAV_ITEMS.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
        </ul>
      </nav>
      <button className="flex items-center justify-center gap-2 px-[1.125rem] py-[0.563rem] bg-primary rounded-full">
        Start Now <FiArrowRight size={20} />
      </button>
    </header>
  );
};

export default LandingPageLayoutNavbar;
