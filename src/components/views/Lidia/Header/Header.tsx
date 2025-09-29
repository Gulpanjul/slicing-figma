import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky z-10 grid grid-cols-[79px_125px_329px_1fr_137px] items-center">
      <div className="flex items-center justify-between">
        <div className="relative h-7 w-7">
          <Image src="/images/png/lidia-logo.png" fill alt="logo" />
        </div>
        <p className="text-lg font-bold">Lidia</p>
      </div>
      <div></div>
      <nav className="w-full">
        <ul className="flex justify-between gap-10 text-[#9A9EA6]">
          <li className="text-[#4737FF]">Home</li>
          <li>Service</li>
          <li>Review</li>
          <li>Location</li>
        </ul>
      </nav>
      <div></div>
      <button className="w-full rounded-[10px] bg-[#FFFFFF] px-4 py-2 text-[#181E4B]">
        Login
      </button>
    </header>
  );
};

export default Header;
