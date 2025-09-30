import Image from "next/image";
import Link from "next/link";
import { FiEye, FiFigma } from "react-icons/fi";

interface PropTypes {
  ITEMS: {
    title: string;
    thumbnail: string;
    link: string;
    figma: string;
  }[];
}

const style = {
  section: "grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-2",
  article:
    "flex flex-col justify-between gap-4 overflow-hidden rounded-xl border border-[#00ADB5] bg-[#393E46] pt-7 pl-7 " +
    "shadow-[0_35px_60px_rgba(0,173,181,0.3)] shadow-light/20 transition duration-300 hover:scale-105 hover:shadow-[0_35px_60px_rgba(0,173,181,0.3)]",
  title: "text-3xl font-bold",
  imageWrapper: "group relative h-52 overflow-hidden md:h-72",
  image: "rounded-tl-xl object-cover object-top-left",
  overlay:
    "absolute inset-0 hidden items-center justify-center gap-10 bg-[#393E46]/80 transition-all duration-500 " +
    "group-hover:flex group-hover:bg-opacity-80",
  actionWrapper:
    "group/link relative h-14 w-14 rounded-full border-2 border-white hover:border-[#00ADB5]",
  actionIcon:
    "absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white " +
    "group-hover/link:text-[#00ADB5]",
};

const ACTIONS = [
  {
    key: "preview",
    icon: FiEye,
    getHref: (item: { link: string; figma: string }) => item.link,
  },
  {
    key: "figma",
    icon: FiFigma,
    getHref: (item: { link: string; figma: string }) => item.figma,
  },
];

const HomeArticle = (props: PropTypes) => {
  const { ITEMS } = props;
  return (
    <section className={style.section}>
      {ITEMS.map((item, index) => (
        <article key={index} className={style.article}>
          <h2 className={style.title}>{item.title}</h2>

          <div className={style.imageWrapper}>
            <Image
              src={item.thumbnail}
              alt={`${item.title} thumbnail`}
              fill
              className={style.image}
              sizes="(max-width: 1443px) 100vw, 1443px"
            />

            <div className={style.overlay}>
              {ACTIONS.map(({ key, icon: Icon, getHref }) => (
                <Link
                  key={key}
                  href={getHref(item)}
                  className={style.actionWrapper}
                >
                  <Icon className={style.actionIcon} />
                </Link>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default HomeArticle;
