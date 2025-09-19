import Image from "next/image";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import LandingPageLayoutNavbar from "~/components/layouts/LandingPageLayout/LandingPageLayoutNavbar";

export default function HomePage() {
    return (
        <main>
            <LandingPageLayoutNavbar />
            <div className="py-10">
                <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-card-primary pt-7 pl-7 justify-between flex flex-col gap-4 border border-card-primary shadow-2xl shadow-light/20">
                        <h2 className="text-3xl font-bold">SellSpot</h2>
                        <div className="h-52 md:h-72 relative group overflow-hidden">
                            <Image
                                src="/images/preview/sellspot.webp"
                                alt="image"
                                fill
                                className="object-cover object-top-left rounded-tl-xl"
                                sizes="(max-width: 1443px) 100vw, 1443px"
                            />

                            <div className="absolute inset-0 bg-card-primary/80 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
                                <Link
                                    href={"/sellspot"}
                                    className="h-14 w-14 border-2 relative rounded-full border-white hover:border-primary group/link"
                                >
                                    <FiEye className="h-10 w-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-primary" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
