import ProjectArticle from "./ProjectArticle";
import { PROJECT_ITEMS } from "./ProjectSection.constant";

const styles = {
    section: "flex flex-col w-full gap-4",
    header: "flex justify-between",
    title: "font-bold",
    linkButton: "font-medium text-xs text-[#703BE7] hover:underline",
    articleWrapper: "flex gap-6",
    progressBar: "w-[25.375rem] h-[0.563rem] bg-[#B0B0B0] rounded-full",
};

const ProjectSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Proyek</h2>
                <button className={styles.linkButton}>Lainnya</button>
            </div>

            <div className={styles.articleWrapper}>
                <ProjectArticle ITEMS={PROJECT_ITEMS} />
            </div>

            <div className={styles.progressBar}></div>
        </section>
    );
};

export default ProjectSection;
