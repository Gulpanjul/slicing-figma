import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Button from "~/components/ui/Button";

const style = {
    section: "container mx-auto pb-20",
    div: "relative w-[45.625rem] h-[22.188rem] mx-auto mb-20",
    article:
        "max-w-2xl mx-auto text-center flex items-center justify-center flex-col",
    h2: "mb-5 text-4xl font-medium",
    p: "mb-10",
    span: "font-semibold",
};

const MottoSection = () => {
    return (
        <section className={style.section}>
            <div className={style.div}>
                <Image src={"/motto.webp"} alt="motto" fill />
            </div>
            <article className={style.article}>
                <h2 className={style.h2}>Discover, Connect, Transact</h2>
                <p className={style.p}>
                    <span className={style.span}>SellSpot</span> is more than
                    just an app; it&apos;s your gateway to a vibrant marketplace
                    community where buyers and sellers converge, creating a
                    dynamic ecosystem of exchange.
                </p>
                <Button>
                    Download Now <FiDownload size={20} />
                </Button>
            </article>
        </section>
    );
};

export default MottoSection;
