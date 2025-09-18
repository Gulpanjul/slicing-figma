import { FiArrowRight } from "react-icons/fi";
import { NAV_ITEMS } from "../LandingPageLayout.constant";
import Button from "~/components/ui/Button";

const LandingPageLayoutNavbar = () => {
  return (
    <header className="fixed inset-0 z-10 container mx-auto h-[5rem] px-[1.188rem] flex items-center justify-between bg-dark">
      <div className="font-semibold text-[1.75rem]">SellSpot</div>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          {NAV_ITEMS.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </nav>
      <Button>
        Start Now <FiArrowRight size={20} />
      </Button>
    </header>
  );
};

export default LandingPageLayoutNavbar;
