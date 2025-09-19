import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Button from "~/components/ui/Button";

const MottoSection = () => {
  return (
    <section className="container mx-auto pb-20">
      <div className="relative w-[45.625rem] h-[22.188rem] mx-auto mb-20">
        <Image src={"/motto.webp"} alt="motto" fill/>
      </div>
      <div className="max-w-2xl mx-auto text-center flex items-center justify-center flex-col">
        <h2 className="mb-5 text-4xl font-medium">Discover, Connect, Transact</h2>
        <p className="mb-10">
          <span className="font-semibold">SellSpot</span> is more than just an
          app; it&apos;s your gateway to a vibrant marketplace community where
          buyers and sellers converge, creating a dynamic ecosystem of exchange.
        </p>
        <Button>
          Download Now <FiDownload size={20} />
        </Button>
      </div>
    </section>
  );
};

export default MottoSection;
