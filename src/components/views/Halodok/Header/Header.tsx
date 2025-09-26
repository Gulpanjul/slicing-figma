"use client";

import { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";

const style = "sticky z-50 px-[150px] transition-colors duration-300";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollChange = scrolled
    ? "top-0 bg-white"
    : "top-[58px] bg-transparent";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${style} ${scrollChange}`}>
      <HeaderSection />
    </header>
  );
};

export default Header;
