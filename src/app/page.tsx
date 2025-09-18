import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import Home from "../components/views/Home/Home";

export default function HomePage() {
  return (
    <main>
      <LandingPageLayout>
        <Home />
      </LandingPageLayout>
    </main>
  );
}
