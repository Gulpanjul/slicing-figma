import Image from "next/image";
import Dots from "~/components/assets/Videfly/dots.svg";
import Scissor from "~/components/assets/Videfly/scissor.svg";

interface TypeProps {
    ITEMS: {
        status: string;
        thumbnail: string;
        title: string;
        time: string;
    }[];
}

const styles = {
    article:
        "border border-[#ECECEC] rounded-2xl w-fit flex flex-col gap-[0.438rem] pb-3 overflow-hidden",
    thumbnailWrapper: "relative h-[11.25rem] w-[15.813rem] py-4 pl-4 pr-2.5",
    statusWrapper: "flex justify-between px-2",
    statusText:
        "font-medium z-10 text-white text-[0.688rem] bg-[#000000]/40 px-2 flex items-center rounded-[0.451rem]",
    statusButton: "z-10 text-white bg-[#000000]/40 px-2 rounded-[0.451rem]",
    thumbnailImage: "object-cover rounded-2xl",
    contentWrapper: "px-3 flex justify-between",
    contentTextWrapper: "flex flex-col gap-1",
    contentTitle: "font-semibold text-xs",
    contentTime: "text-[0.688rem] text-[#584F6A]",
    actionButton:
        "bg-[#000000]/20 rounded-lg p-[0.563rem] hover:bg-[#000000]/40 text-white",
};

const ProjectArticle = (props: TypeProps) => {
    const { ITEMS } = props;
    return (
        <>
            {ITEMS.map((item, index) => (
                <article className={styles.article} key={index}>
                    <div className={styles.thumbnailWrapper}>
                        <div className={styles.statusWrapper}>
                            <p className={styles.statusText}>{item.status}</p>
                            <button className={styles.statusButton}>
                                <Dots />
                            </button>
                        </div>
                        <Image
                            src={item.thumbnail}
                            alt="thumbnail"
                            fill
                            className={styles.thumbnailImage}
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentTextWrapper}>
                            <p className={styles.contentTitle}>{item.title}</p>
                            <p className={styles.contentTime}>{item.time}</p>
                        </div>
                        <button className={styles.actionButton}>
                            <Scissor />
                        </button>
                    </div>
                </article>
            ))}
        </>
    );
};

export default ProjectArticle;
